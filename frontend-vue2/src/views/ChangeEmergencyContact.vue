<template>
  <div id="changeEmergencyContact" class="submit-form whole-page">
  <div v-if="!submitted">
    <div class="title-big text-center">
      Change Emergency Contact Information
    </div>

      <div class="form-group title-container">
        <label for="title" class="labels">Emergency Contact Name</label>
        <input
          type="text"
          onkeydown="return /[a-z ]/i.test(event.key)"
          class="form-control"
          id="title"
          required
          v-model="emergencyContact.name"
          name="title"
          placeholder="Ex: James Smith"
        />
      </div>

      <div class="form-group title-container">
        <label for="title" class="labels">Relationship</label>
        <input
          type="text"
          onkeydown="return /[a-z ]/i.test(event.key)"
          class="form-control"
          id="title"
          required
          v-model="emergencyContact.relationship"
          name="title"
          placeholder="Ex: Father"
        />
      </div>

      <div class = "form-group title-container">
          <label for="title" class="labels">Phone Number</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="emergencyContact.phoneNumber"
          name="title"
          placeholder="Ex: 403-000-0000"
        />
      </div>
    
<!--           SUBMIT BUTTON          -->
      <button @click="updateEC" class="btn btn-success submit-btn text-center">Update Information</button>

    </div>
<!--            SUBMITTED            -->
    <div v-else>
      <h4 class ="title-big text-center">Emergency Contact Information Updated!</h4>
    </div>
  </div>
</template>

<script>
import EmergencyContactDataService from "../services/emergency-contact.service";

export default {
  name: "changeEmergencyContact",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data() {
    return {
      emergencyContact: {
        name: null,
        relationship: null,
        phoneNumber: null
      },
      submitted: false
    };
  },
  methods: {
    updateEC() {
      var data = {
        name: this.emergencyContact.name,
        relationship: this.emergencyContact.relationship,
        phoneNumber: this.emergencyContact.phoneNumber
      };
      
      if (this.emergencyContact.name == undefined || this.emergencyContact.relationship == undefined || this.emergencyContact.phoneNumber  == undefined) {
        alert("All fields must be filled out to update Emergency Contact");
      }
      else{
        EmergencyContactDataService.update(this.currentUser.id, data)
        .then(response => {
          this.emergencyContact = response.data;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
      }
    },
  },
  mounted() {
    //this.findPatientDoctor(this.$route.params.id);
  }
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.whole-page { 
  font-weight: 50;
  color: black;
}
.title-big {
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #000000;
  width: 130%;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 30px;
  margin-left: -50px;
}
.title-container {
  margin-left: -130px;
  margin-right: -140px;
  margin-bottom: 30px;
}

.submit-btn {
  width: 130%;
  margin-left: -40px;
  margin-right: 20px;
}

.submit-form {
  max-width: 300px;
  margin: auto;
}

.labels {
  color: #FFA384;
  font-weight: bold;
}
</style>