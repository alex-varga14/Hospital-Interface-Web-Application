<template>
<div id="newPatient" class="submit-form whole-page">
  <div v-if="!submitted">
    <div class="title-big text-center">
      Add New Patient
    </div>
<!--       Patient Username       -->
      <div class="form-group title-container">
        <label for="patientusername" class = "labels">Patient Username</label>
        <input
          type="text"
          onkeydown="return /[a-z ]/i.test(event.key)"
          class="form-control"
          id="patientusername"
          required
          v-model="patient.username"
          name="patientusername"
          placeholder="JohnSmith"
        />
      </div>

    <div class="inline3">
<!--         Patient DOB         -->
        <div class="form-group faculty-container">
          <label for="dob" class = "labels">Patient DOB</label>
          <input
            type="Date"
            class="form-control"
            id="dob"
            required
            v-model="patient.dob"
            name="dob"
          />
        </div>
<!--        Patient Password         -->
        <div class="form-group coursecode-container">
          <label for="password" class = "labels">Patient Password</label>
          <input
            type="text"
            onkeydown=" return /[a-z]/i.test(event.key)"
            class="form-control"
            id="password"
            required
            v-model="patient.password"
            name="password"
          />
        </div>
      </div>  

      <div class ="inline3">
<!--       P height         -->
        <div class="form-group faculty-container">
          <label for="height" class = "labels">Patient Height</label>
          <input
            type="text"
            class="form-control"
            id="height"
            required
            v-model="patient.height"
            name="height"
            placeholder="170 cm"
          />
        </div>
<!--        Weight         -->
        <div class="form-group coursecode-container">
          <label for="Weight" class = "labels">Patient Weight</label>
          <input
            type="text"
            class="form-control"
            id="Weight"
            required
            v-model="patient.weight"
            name="Weight"
            placeholder="120kg"
          />
        </div>
<!--        Blood type          -->
        <div class="form-group courseno-container">
          <label for="btype" class = "labels">Patient BloodType</label>
          <input
            type="text"
            class="form-control"
            id="btype"
            required
            v-model="patient.bloodType"
            name="btype"
            placeholder="O"/>
        </div>
      </div>

      <div class ="inline3">
<!--       P EC name         -->
        <div class="form-group faculty-container">
          <label for="ecname" class = "labels">Emergency Contact Name</label>
          <input
            type="text"
            class="form-control"
            id="ecname"
            required
            v-model="ec.name"
            name="ecname"
          />
        </div>
<!--        P EC relationship        -->
        <div class="form-group coursecode-container">
          <label for="ecr" class = "labels">Emergency Contact Relationship</label>
          <input
            type="text"
            class="form-control"
            id="ecr"
            required
            v-model="ec.relationship"
            name="ecr"
          />
        </div>
<!--        P EC phonenum          -->
        <div class="form-group courseno-container">
          <label for="phonenum" class = "labels">Emergency Contact Phone Number</label>
          <input
            type="text"
            class="form-control"
            id="phonenum"
            required
            v-model="ec.phoneNumber"
            name="phonenum"/>
        </div>
      </div>
<!--           SUBMIT BUTTON          -->
       <button @click="savePatient" class="btn btn-success submit-btn text-center">Add Patient to Facility Database</button>

    </div>
<!--            SUBMITTED            -->
    <div v-else>
      <h4 class ="title-big text-center">Patient Entered Into Database!</h4>
      <button class="btn btn-success submit-btn text-center" @click="newPatient">Enter Another Patient</button>
    </div>
  </div>
</template>

<script>
import PatientDataService from "../services/patient.service";
import EmergencyContactDataService from "../services/emergency-contact.service";

export default {
  name: "newPatient",
  data() {
    return {
      patient: {
        username: "",
        dob: "",
        password: "",
        weight: null,
        height: null,
        bloodType: "",
      },
      pID: null,
      ec: {
        name: "",
        relationship: "",
        phoneNumber: "",
        patientID: null,
      },
      submitted: false
    };
  },
  methods: {
    newPatient() {
      this.submitted = false;
      this.patient = {};
    },
    savePatientEC(id) {
      var data = {
        name: this.ec.name,
        relationship: this.ec.relationship,
        phoneNumber: this.ec.phoneNumber,
        patientID: id
      };
      
      if (this.ec.name == undefined || this.ec.relationship == undefined || this.ec.phoneNumber == undefined ) {
        alert("All fields must be filled out to input a new Patient");
        this.newPatient();
      }
      else{
        EmergencyContactDataService.create(data)
        .then(response => {
          this.ec = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      }
    },
    savePatient() {
      var data = {
        username: this.patient.username,
        dob: this.patient.dob,
        password: this.patient.password,
        weight: this.patient.weight,
        height: this.patient.height,
        bloodType: this.patient.bloodType
      };
      
      if (this.patient.username == undefined || this.patient.dob == undefined || this.patient.password == undefined 
        || this.patient.weight == undefined || this.patient.height == undefined) {
        alert("All fields must be filled out to input a new Patient.");
        this.newPatient();
      }
      else{
        PatientDataService.create(data)
        .then(response => {
          this.patient = response.data;
          this.pID = response.data.userID;
          this.savePatientEC(this.pID);
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
      }
    },
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
  font-weight: 300;
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
.inline3{
  width:100%;
  height:auto;
  display:flex;
  margin-bottom: 15px;
}
.faculty-container {
  margin-left: -130px;
  margin-right: 10px;
}
.coursecode-container {
  margin-left: 0px;
  margin-right: 0px;
}
.courseno-container {
  margin-left: 20px;
  margin-right: -140px;
}
.desc-container {
  margin-top: 30px;
  margin-bottom: 40px;
  margin-left: -130px;
  margin-right: -140px;
}
.submit-btn {
  width: 130%;
  margin-left: -40px;
  margin-right: 20px;
}
.message{
  font-size: 12px;
  color: grey;
  padding-top: 25px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: -130px;
  margin-right: -140px;
  border: 1px dotted grey;
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