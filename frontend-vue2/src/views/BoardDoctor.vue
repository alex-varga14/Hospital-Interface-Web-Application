<template>
  <div id="doctor">
   <div class="container">
      <header class="jumbotron">
       <h3>{{content}}</h3>
      </header>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <router-link to="patient-data">
            <button type="button" class="btn btn-primary btn-block mb-4">View All Patients Data</button>
          </router-link>
        </div>
        <div class="col">
          <router-link to="facility-data">
            <button type="button" class="btn btn-primary btn-block mb-4">View Facilities Data</button>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <router-link to="appointments">
           <button type="button" class="btn btn-primary btn-block mb-4">View Requested Appointments</button>
          </router-link>
        </div>
        <div class="col">
          <router-link to="new-prescription">
            <button type="button" class="btn btn-primary btn-block mb-4">Write Prescription</button>
          </router-link>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import UserService from '../services/user.service';
import EventBus from "../common/EventBus";

export default {
  name: 'Doctor',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getDoctorBoard().then(
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