import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import BookAppointment from './views/BookAppointment.vue';
import PatientData from './views/PatientData.vue';
import FacilityData from './views/FacilityData.vue';
import WritePrescription from './views/WritePrescription.vue';
import Appointments from './views/Appointments.vue';
import NewOperation from './views/NewOperation.vue';
import Bills from './views/Bills.vue';
import NewPatient from './views/NewPatient.vue';

Vue.use(Router);
export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/bookAppointment',
      component: BookAppointment
    },
    {
      path: '/patientData',
      component: PatientData
    },
    {
      path: '/facilityData',
      component: FacilityData
    },
    { 
      path: '/newPrescription',
      component: WritePrescription
    },
    { 
      path: '/appointments',
      component: Appointments
    },
    { 
      path: '/schedule-operation',
      component: NewOperation
    },
    { 
      path: '/patient-bills',
      component: Bills
    },
    { 
      path: '/add-patient',
      component: NewPatient
    },
    
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/patient',
      name: 'patient',
      // lazy-loaded
      component: () => import('./views/BoardPatient.vue')
    },
    {
      path: '/doctor',
      name: 'doctor',
      // lazy-loaded
      component: () => import('./views/BoardDoctor.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    }
  ]
});

// router.beforeEach((to, from, next) => {
//     const publicPages = ['/login', '/register', '/home'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
//     // trying to access a restricted page + not logged in
//     // redirect to login page
//     if (authRequired && !loggedIn) {
//       next('/login');
//     } else {
//       next();
//     }
//   });