<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-custom navbar-dark">
      <a href class="navbar-brand" @click.prevent>HealthIsWealth</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
        </li>
        <li v-if="showPatientBoard" class="nav-item">
          <router-link to="/patient" class="nav-link">Patient Board</router-link>
        </li>
        <li v-if="showDoctorBoard" class="nav-item">
          <router-link to="/doctor" class="nav-link">Doctor Board</router-link>
        </li>
        <li v-if="showSurgeonBoard" class="nav-item">
          <router-link to="/surgeon" class="nav-link">Surgeon Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <!-- <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
          </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
//import EventBus from "./common/EventBus";

export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showPatientBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_PATIENT');
      }
      return false;
    },
    showDoctorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_DOCTOR');
      }
      return false;
    },
    showSurgeonBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_SURGEON');
      }
      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
  // ,
  // mounted() {
  //   EventBus.on("logout", () => {
  //     this.logOut();
  //   });
  // },
  // beforeDestroy() {
  //   EventBus.remove("logout");
  // }
};
</script>

<style>
  body{
    background-color: #E7F2F8 !important;
  }
  .navbar-custom{
    background-color: #74BDCB;
  }
  
</style>