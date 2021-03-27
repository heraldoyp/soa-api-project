<template>
  <div class="home">
    <section id="mu-slider">
      <div class="mu-slider-area"> 

        <!-- Top slider -->
        <div class="mu-top-slider">

          <!-- Top slider single slide -->
          <div class="mu-top-slider-single">
            <img src="@/assets/img/mine/background-image.jpeg" alt="img">
            <!-- Top slider content -->
            <div class="mu-top-slider-content">
              <span class="mu-slider-small-title">Welcome</span>
              <h2 class="mu-slider-title">To The OsteriaX</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.</p>           
              <a href="#mu-reservation" class="mu-readmore-btn mu-reservation-btn">BOOK A TABLE</a>
            </div>
            <!-- / Top slider content -->
          </div>
          <!-- / Top slider single slide -->    
        </div>
      </div>
    </section>

    <!-- Start About Us Section-->
    <AboutUs/>
    
    <!-- Start Reservation Section-->    
    <Reservation/>
    
    <!-- Start Map Section-->
    <Map/>
    
    <!-- Start Contact Section-->
    <Contact/>    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AboutUs from '@/components/AboutUs.vue'
import Reservation from '@/components/Reservation.vue'
import Map from '@/components/Map.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    AboutUs,
    Reservation,
    Map,
    Contact,
  },
  data() {
    return{
      gmapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9207.358598888495!2d-85.64847801496286!3d30.183918972289003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x2320479d70eb6202!2sDillard&#39;s!5e0!3m2!1sbn!2sbd!4v1462359735720"
    }
  },
}
</script>
