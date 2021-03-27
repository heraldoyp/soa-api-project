<template>
  <!-- Start Reservation Section -->
  <section id="mu-reservation">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-reservation-area">

            <div class="mu-title">
              <span class="mu-subtitle">Make A</span>
              <h2>Reservation</h2>
            </div>

            <div class="mu-reservation-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quidem autem iusto, perspiciatis, amet, quaerat blanditiis ducimus eius recusandae nisi aut totam alias consectetur et.</p>

              <div class="col-md-6">
                <div class="mu-reservation-left">
                  <form class="mu-reservation-form">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">                       
                          <input type="text" class="form-control" placeholder="Full Name" v-model="reservationFullName">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">                        
                          <input type="email" class="form-control" placeholder="Email" v-model="reservationEmail">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">                        
                          <input type="text" class="form-control" placeholder="Phone Number" v-model="reservationPhoneNumber">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <select class="form-control" v-model="reservationQuantity">
                            <option value="0">How Many?</option>
                            <option value="1 Person">1 Person</option>
                            <option value="2 People">2 People</option>
                            <option value="3 People">3 People</option>
                            <option value="4 People">4 People</option>
                            <option value="5 People">5 People</option>
                            <option value="6 People">6 People</option>
                            <option value="7 People">7 People</option>
                            <option value="8 People">8 People</option>
                            <option value="9 People">9 People</option>
                            <option value="10 People">10 People</option>
                          </select>                      
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input type="datetime-local" class="form-control" id="datepicker" data-provide="datepicker" placeholder="Date" v-model="reservationDate">
                          <!-- <input data-provide="datepicker" data-date-format="mm/dd/yyyy"> -->
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea class="form-control" cols="30" rows="10" placeholder="Your Message" v-model="reservationMessage"></textarea>
                        </div>
                      </div>
                      <button type="submit" class="mu-readmore-btn" v-on:click="createReservation">Make Reservation</button>
                    </div>
                  </form>    
                </div>
              </div>

              <div class="col-md-5 col-md-offset-1">
                <div class="mu-reservation-right">
                  <div class="mu-opening-hour">
                    <h2>Opening Hours</h2>
                      <ul class="list-unstyled">
                        <li>
                            <p>Monday &amp; Tuesday</p>
                            <p>9:00 AM - 4:00 PM</p>
                        </li>
                        <li>
                            <p>Wednesday &amp; Thursday</p>
                            <p>9:00 AM - Midnight</p>
                        </li>
                        <li>
                            <p>Friday &amp; Saturday</p>
                            <p>9:00 AM - Midnight</p>
                        </li>
                        <li>
                            <p>Sunday</p>
                            <p>9:00 AM - 11:00 PM</p>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  
  <!--  End Reservation Section -->
</template>

<script>
  import Crud from '../crud.js';

  export default {
    name: 'Reservation', 
    data() {
      return {
        reservationFullName: '',
        reservationEmail: '',
        reservationPhoneNumber: '',
        reservationQuantity: '',
        reservationDate: '', 
        reservationMessage: '',
      }
    },
    methods: {
      async createReservation() {
        var reservationData = {
          fullName: this.reservationFullName,
          email: this.reservationEmail, 
          phoneNumber: this.reservationPhoneNumber, 
          quantity: this.reservationQuantity,
          date: this.reservationDate,
          message: this.reservationMessage
        };
        
        try{
          await Crud.postReservation(reservationData);
          console.log(reservationData)
        }catch(err){
          console.log(err);
        }
      }
    }
  }

</script>