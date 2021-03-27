<template>
  <div class="full-page">
    <div class="result-table">
      <div class="mu-title">
        <span class="mu-subtitle">Submmited Form</span>
        <h3>Reservation</h3>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Quantity</th>
          <th>Date</th>
          <th>Message</th>
        </tr>
        <tr v-for="n in reservations">
          <td>{{n.fullName}}</td>
          <td>{{n.email}}</td>
          <td>{{n.phoneNumber}}</td>
          <td>{{n.quantity}}</td>
          <td>{{n.date}}</td>
          <td>{{n.message}}</td>
        </tr>
      </table>
      
      <div class="mu-title">
        <h3>Contact and Feedback</h3>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
        </tr>
        <tr v-for="n in contacts">
          <td>{{n.name}}</td>
          <td>{{n.email}}</td>
          <td>{{n.subject}}</td>
          <td>{{n.message}}</td>
        </tr>
      </table>
      <br>
      <h3>Note:</h3>
      <h4>- If your submitted form was appeared on the list above, it means that both request and message are successfully sent</h4>
      <h4>- For the Telesign SDK API, in order to send a message to your phone number, you need to contact the developer (the free version requires the developer to register the phone number before using the API)</h4>
      <h4>- Prove that the Telesign SDK API had worked:</h4>
      <img height="500" src="@/assets/img/mine/telesign-prove.jpeg">
    </div>
    <br><br><br><br>
    <div class="mu-title">
      <h2>About the API</h2>
    </div>
    <div class="about-the-api">
      <h3>Book your reservation online through the website and confirm it onsite without installing any application with OsteriaX</h3>
      <img width="200" src="@/assets/img/mine/telesign.png">
      <img width="200" src="@/assets/img/mine/youtube.jpeg">
      <img height="100" src="@/assets/img/mine/google-maps.png">
      <img width="200" src="@/assets/img/mine/vueimage.png">
      <img width="200" src="@/assets/img/mine/node.png">
      <img width="200" src="@/assets/img/mine/express.png">
      <img width="200" src="@/assets/img/mine/mongodb.png">
    </div>
    <br><br>
  </div>
</template>

<script>
  import Crud from '../crud.js'

  export default {
    data(){
      return{
        reservations: [],
        contacts: []
      }
    },
    async created() {
      this.reservations = await Crud.getReservation();
      this.contacts = await Crud.getContact();
    }
  }
</script>

<style scoped>
  .full-page{
    margin-top: 110px;
    margin-left: 5%;
    margin-right: 5%;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>
