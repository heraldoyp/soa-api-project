const express = require('express');
const mongodb = require('mongodb');
const TelegSignSDK = require('telesignsdk');

const router = express.Router();
const url = "mongodb+srv://arfankurszan:test123@cluster0.9hrv1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

router.get('/reservation', async(req, res) => {
  const reservations = await loadReservationCollection();
  
  res.send(await reservations.find({}).toArray());
})

router.post('/reservation', async(req, res) => {
  var fullName = req.body.object.fullName
  var email = req.body.object.email
  var phoneNumber = req.body.object.phoneNumber
  var quantity = req.body.object.quantity
  var date = req.body.object.date
  var message = req.body.object.message
  
  const posts = await loadReservationCollection();
  await posts.insertOne({
    fullName,
    email, 
    phoneNumber, 
    quantity,
    date,
    message
  });

  // Turn On to send a message
  // await telesign(message, phoneNumber);

  res.status(201).send("<script>alert('your reservation has been made')</script>");
})

router.get('/contact', async(req, res) => {
  const contacts = await loadContactCollection();
  await contacts.find({}).toArray();
  res.send(await contacts.find({}).toArray())
})

router.post('/contact', async(req, res) => {
  var name = req.body.object.name
  var email = req.body.object.email
  var subject = req.body.object.subject
  var message = req.body.object.message

  const contacts = await loadContactCollection();
  await contacts.insertOne({
    name,
    email,
    subject, 
    message
  });

  // Turn On to send a message
  // await telesign(message, phoneNumber);
  res.status(201).send();
})
 
async function loadReservationCollection(){
  const client = await mongodb.MongoClient.connect(url, {
    useNewUrlParser: true
  })
  return client.db('vue_express').collection('reservation')
}

async function loadContactCollection(){
  const client = await mongodb.MongoClient.connect(url, {
    useNewUrlParser: true
  })
  return client.db('vue_express').collection('contact')
}

async function telesign(message, phoneNumber){
  const posts = await loadPostsCollection();
  const customerId = "4163CEFE-5D62-4C73-AFE1-444AE06B9D9C";
  const apiKey = "3riDcfawxoH6Enzoz8VZd+SsJ1rCWxNPv7jnXg8KbHmCs3YmYXR7k1YJhvV3e8RDwXj7TbExgnK7oJDn02qG2Q==";
  const rest_endpoint = "https://rest-api.telesign.com";
  const timeout = 10*1000; // 10 secs

  const client = new TeleSignSDK( customerId,
    apiKey,
    rest_endpoint,
    timeout // optional
    // userAgent
  );

  // const phoneNumber = req.body.phoneNumber;
  // const message = req.body.message;
  const messageType = "ARN";

  console.log("## MessagingClient.message ##");

  function messageCallback(error, responseBody) {
      if (error === null) {
          console.log(`Messaging response for messaging phone number: ${req.body.phoneNumber}` +
              ` => code: ${responseBody['status']['code']}` +
              `, description: ${responseBody['status']['description']}`);
      } else {
          console.error("Unable to send message. " + error);
      }
  }

  client.sms.message(messageCallback, phoneNumber, message, messageType);
}

module.exports = router;