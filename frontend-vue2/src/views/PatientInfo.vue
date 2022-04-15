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
       </div>
    </div>
 </div>
</template>
<script>
import PatientDataService from "../services/patient.service";

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
  },
  mounted() {
    this.getPatient(this.$route.params.id);
  }
};
</script>