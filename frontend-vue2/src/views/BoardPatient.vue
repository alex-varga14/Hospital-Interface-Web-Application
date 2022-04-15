<template>
  <div id="patient">
   <div class="container">
      <header class="jumbotron">
       <h3>{{content}} | {{currentUser.id}}</h3>
      </header>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
            <button @click="pushInfo(currentUser.id)" type="button" class="btn btn-primary btn-block mb-4">View My Information</button>
        </div>
        <div class="col">
            <button @click="pushBills(currentUser.id)" type="button" class="btn btn-primary btn-block mb-4">Pay Bills</button>
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
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data() {
    return {
      content: ''
    };
  },
  methods: {
    pushInfo(data){
      console.log("DATA:"  + data);
      this.$router.push({name: "patient-information",
        params: { id:data }
      });
    },
    pushBills(data){
      this.$router.push({name: "patient-bills",
        params: { id:data }
      });
    },
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