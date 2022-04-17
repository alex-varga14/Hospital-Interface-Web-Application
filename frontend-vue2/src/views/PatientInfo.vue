<template>
 <div id="patientInfo">
    <div class="container p-5">
       <div class="row">
         <div class="col">
           <label><span class="bold-md">Patient Username:</span> {{currentPatient.username}}</label>
          </div>
          <div class="col">
           <label><span class="bold-md">Patient DOB:</span> {{new Date(currentPatient.dob).toISOString().slice(0, 10)}} </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label><span class="bold-md">Patient Emergency Contact:</span> {{currentPatientEC[0].name}}</label>
             <button @click="changeEC(currentUser.id)" type="button" class="btn btn-primary btn-block mb-4">Change EC Info</button>
          </div>
          <div class="col">
            <label><span class="bold-md">Patient Doctor:</span> {{currentPatientDoctor[0].username}}</label>
          </div>
        </div>
    </div>
    <div class="container p-5">
      <div class="row">
        <div class="col-sm-8 title-big">
            <label><span class="bold">My Disorders and Vaccinations</span></label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table class="table" id="formtable">
            <thead>
              <tr id="header">
                <th scope="col">Disorders</th>
                <th scope="col">Disorder Type</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="patientDisorders in patientDisorders" v-bind:key="patientDisorders" id="rows">
                <td id="code">{{patientDisorders.disorderName}}</td>
                <td>{{patientDisorders.disorderType}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <table class="table" id="formtable">
            <thead>
              <tr id="header">
                <th scope="col">Batch #</th>
                <th scope="col">Vaccine Name</th>
                <th scope="col">Disease</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="patientVaccines in patientVaccines" v-bind:key="patientVaccines" id="rows">
                <td id="code">{{patientVaccines.batchNum}}</td>
                <td>{{patientVaccines.vaccineName}}</td>
                <td>{{patientVaccines.disease}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="container p-5">
      <div class="row">
        <div class="col-sm-4 title-big">
            <label><span class="bold">My Prescriptions</span></label>
        </div>
      </div>
      <div class="row">
        <table class="table" id="formtable">
            <thead>
              <tr id="header">
                <th scope="col">Prescription ID</th>
                <th scope="col">Medications</th>
                <th scope="col">Refil Date</th>
                <th scope="col">Instructions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="patientPrescriptions in patientPrescriptions" v-bind:key="patientPrescriptions" id="rows">
                <td id="code">{{patientPrescriptions.prescID}}</td>
                <td>{{patientPrescriptions.medications}}</td>
                <td>{{new Date(patientPrescriptions.refilDate).toISOString().slice(0, 10)}}</td>
                <td>{{patientPrescriptions.instructions}}</td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
    <div class="container p-5">
      <div class="row">
        <div class="col-sm-8 title-big">
            <label><span class="bold">My Appointments</span></label>
        </div>
      </div>
      <div class="row">
        <table class="table" id="formtable">
            <thead>
              <tr id="header">
                <th scope="col">Appointment ID</th>
                <th scope="col">Information</th>
                <th scope="col">Appointment Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="patientAppointments in patientAppointments" v-bind:key="patientAppointments" id="rows">
                <td id="code">{{patientAppointments.apptID}}</td>
                <td>{{patientAppointments.summary}}</td>
                <td>{{new Date(patientAppointments.apptDate).toISOString().slice(0, 10)}}</td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
 </div>
</template>
<script>
import PatientDataService from "../services/patient.service";
import EmergencyContactDataService from "../services/emergency-contact.service";
import DisorderDataService from "../services/disorder.service";
import VaccineDataService from "../services/vaccine.service";
import PrescriptionDataService from "../services/prescription.service";
import DoctorDataService from "../services/doctor.service";
import AppointmentDataService from "../services/appointment.service";

export default {
  name: 'patientInfo',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data() {
    return {
    data: null,
    currentPatient: {
        username: null,
        dob: null,
        weight: null,
        height: null,
        bloodType: null,
      },
    currentPatientEC: {
        name: null,
        relatinship: null,
        phoneNumber: null,
     },
     currentPatientDoctor: {
        username: null,
        dob: null,
     },
     patientDisorders: [],
     patientVaccines: [],
     patientPrescriptions: [],
     patientAppointments: []
    };
  },
  methods: {
    getPatient(id) {
      PatientDataService.getById(id)
        .then(response => {
          this.currentPatient = response.data;
          console.log("Patient:" + this.currentPatient.username);
          this.data = id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getPatientEmergencyContact(id){
      EmergencyContactDataService.getContactByPatientID(id)
      .then(response => {
          this.currentPatientEC = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getPatientDoctor(id){
      DoctorDataService.getByPatientID(id)
      .then(response => {
          this.currentPatientDoctor = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getPatientDisorders(id) {
      DisorderDataService.getByPatientID(id)
        .then(response => {
          this.patientDisorders = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getPatientVaccines(id) {
      VaccineDataService.getByPatientID(id)
        .then(response => {
          this.patientVaccines = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getPatientPrescriptions(id) {
      PrescriptionDataService.getByPatientID(id)
        .then(response => {
          this.patientPrescriptions = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getPatientAppointments(id) {
      AppointmentDataService.getByPatientID(id)
        .then(response => {
          this.patientAppointments = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    changeEC(data){
      this.$router.push({name: "change-emergency-contact",
        params: { id:data }
      });
    },
  },
  mounted() {
    this.getPatient(this.$route.params.id);
    this.getPatientEmergencyContact(this.$route.params.id);
    this.getPatientDoctor(this.$route.params.id);
    this.getPatientDisorders(this.$route.params.id);
    this.getPatientVaccines(this.$route.params.id);
    this.getPatientPrescriptions(this.$route.params.id);
    this.getPatientAppointments(this.$route.params.id);
  }
};
</script>

<style>

.title-big {
  font-weight: 300;
  font-size: 40px;
  line-height: 60px;
  color: #000000;
  width: auto;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 30px;
  margin-right: 100px;
  margin-left: -30px;
}

.bold {
  font-weight: 700;
  color: #000000;
}

.bold-md {
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  }

</style>