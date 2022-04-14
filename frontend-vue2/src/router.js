import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import BookAppointment from './views/BookAppointment.vue';
import PatientData from './views/PatientData.vue';
import PatientInfo from './views/PatientInfo.vue';
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
      path: '/book-appointment',
      component: BookAppointment
    },
    {
      path: '/patient-data',
      component: PatientData
    },
    {
      path: '/patient-information/:id',
      name: 'patient-information',
      component: PatientInfo
    },
    {
      path: '/facility-data',
      component: FacilityData
    },
    { 
      path: '/new-prescription',
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
      path: '/surgeon',
      name: 'surgeon',
      // lazy-loaded
      component: () => import('./views/BoardSurgeon.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    }
  ]
});