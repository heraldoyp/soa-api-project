import axios from 'axios';

const url = "/api"

class Crud {
  static getReservation(){
    return new Promise((resolve, reject) => {
      axios.get(`${url}/reservation`)
      .then((res) => {
        const data = res.data;
        // console.log(data.map(post => ({...post})))
        resolve(
          data.map(reservation => ({
            ...reservation, 
            createdAt: new Date(reservation.createdAt)
          }))
        );
      })
      .catch((err) => {
        reject(err)
      })
    });
  }

  static postReservation(object){
    return axios.post(`${url}/reservation`, {object});
  }

  static getContact(){
    return new Promise((resolve, reject) => {
      axios.get(`${url}/contact`)
      .then((res) => {
        const data = res.data;
        // console.log(data.map(post => ({...post})))
        resolve(
          data.map(contact => ({
            ...contact, 
            createdAt: new Date(contact.createdAt)
          }))
        );
      })
      .catch((err) => {
        reject(err)
      })
    });
  }

  static postContact(object){
    return axios.post(`${url}/contact`, {object});
  }
}

export default Crud;