<template>
 <div id="patientInfo">
    <div class="container">
       <div class="row">
           <label><span class="bold">{{currentPatient.username}}</span> - {{currentPatient.dob}} </label>
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