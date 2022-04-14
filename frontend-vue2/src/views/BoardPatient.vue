<template>
  <div id="patient">
   <div class="container">
      <header class="jumbotron">
       <h3>{{content}}</h3>
      </header>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <router-link to="patient-data">
            <button type="button" class="btn btn-primary btn-block mb-4">View My Information</button>
          </router-link>
        </div>
        <div class="col">
          <router-link to="patient-bills">
            <button type="button" class="btn btn-primary btn-block mb-4">Pay Bills</button>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <router-link to="book-appointment">
           <button type="button" class="btn btn-primary btn-block mb-4">Book Appointment</button>
          </router-link>
        </div>
        <div class="col">
          <!-- <router-link to=""> -->
            <button type="button" class="btn btn-primary btn-block mb-4">Request Prescription</button>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import UserService from '../services/user.service';
import EventBus from "../common/EventBus";

export default {
  name: 'Patient',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPatientBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();

        if (error.response && error.response.status === 403) {
          EventBus.dispatch("logout");
        }
      }
    );
  }
};
</script>