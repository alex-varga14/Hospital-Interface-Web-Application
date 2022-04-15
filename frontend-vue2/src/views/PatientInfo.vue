<template>
 <div id="patientInfo">
    <div class="container">
       <div class="row">
         <div class="col">
           <label>Patient Username: {{currentPatient.username}}</label>
        </div>
          <div class="col">
           <label>Patient DOB: {{new Date(currentPatient.dob).toISOString().slice(0, 10)}} </label>
          </div>
          <div class="col">
            <label>Patient Emergency Contact: {{currentPatientEC[0].name}}</label>
          </div>
       </div>
    </div>
 </div>
</template>
<script>
import PatientDataService from "../services/patient.service";
import EmergencyContactDataService from "../services/emergency-contact.service";

export default {
  name: 'patientInfo',
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
     }
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
          console.log("EC0: " + this.currentPatientEC[0].name);
          this.data = id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getPatient(this.$route.params.id);
    this.getPatientEmergencyContact(this.$route.params.id);
  }
};
</script>