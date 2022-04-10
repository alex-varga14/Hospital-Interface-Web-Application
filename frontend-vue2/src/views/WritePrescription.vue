<template>
<div id="writePresc" class="submit-form whole-page">
  <div v-if="!submitted">
    <div class="title-big text-center">
      New Prescription
    </div>
<!--       COURSE TITLE       -->
      <div class="form-group title-container">
        <label for="pID">Patient ID</label>
        <input
          type="text"
          onkeydown="return /[a-z ]/i.test(event.key)"
          class="form-control"
          id="pID"
          required
          name="pID"
          placeholder="123"
        />
      </div>
    <div id="inline3">
<!--         FACULTY         -->
        <div class="form-group faculty-container">
          <label for="prescID">PrescID</label>
          <input
            type="text"
            class="form-control"
            id="prescID"
            required
            v-model="prescription.prescID"
            name="prescID"
            placeholder="87622"
          />
        </div>
<!--        COURSE CODE         -->
        <div class="form-group coursecode-container">
          <label for="medications">Medication Type</label>
          <input
            type="text"
            onkeydown=" return /[a-z]/i.test(event.key)"
            class="form-control"
            id="medications"
            required
            v-model="prescription.medications"
            name="medications"
            placeholder="Xanax"
          />
        </div>
<!--        COURSE NUMBER          -->
        <div class="form-group courseno-container">
          <label for="sig">Doctor Signature</label>
          <input
            type="text"
            class="form-control"
            id="sig"
            required
            name="sig"
            placeholder="James Smith"
           />
        </div>
      </div>
<!--      COURSE DESCRIPTION          -->
      <div class="form-group desc-container">
        <label for="instructions">Instructions</label>
        <textarea
          class="form-control"
          id="instructions"
          required
          v-model="prescription.instructions"
          name="instructions"
          rows="5">
        </textarea>
      </div>
<!--           SUBMIT BUTTON          -->
       <button @click="savePrescription" class="btn btn-success submit-btn text-center">Send Prescription</button>
<!--            MESSAGE               -->
      <div class="message">
        <p class="text-center">Prescppp</p>
      </div>
    </div>
<!--            SUBMITTED            -->
    <div v-else>
      <h4 class ="title-big text-center">Prescription Submitted!</h4>
      <div class ="message">
        <p class="text-center"> PPPPPPP 
        </p>
      </div>
      <button class="btn btn-success submit-btn text-center" @click="newPrescription">Write Another Prescription</button>
    </div>
  </div>
</template>

<script>
import PrescriptionDataService from "../services/prescription.service";

export default {
  name: "writePresc",
  data() {
    //console.log("SAVING COURSE...");
    return {
      prescription: {
        prescID: null,
        instructions: "",
        refilDate: "",
        medications: "",
        patientID: null
      },
      submitted: false
    };
  },
  methods: {
    newPrescription() {
      this.submitted = false;
      this.prescription = {};
    },
    savePrescription() {
      console.log("SAVING Prescription...");
      var data = {
        prescID: 123,
        instructions: this.prescription.instructions,
        refilDate: "07-07-2022",
        medications: this.prescription.medications,
        patientID: 1
      };
      console.log("SAVING Prescription1...");
      if ( this.prescription.instructions == undefined || this.prescription.medications == undefined ) {
        alert("All fields must be filled out to write a new prescription.");
        this.newPrescription();
      }
      else
      {
        console.log("SAVING Prescription2...");
        PrescriptionDataService.create(data)
        .then(response => {
          //this.course.id = response.data.id;
          this.prescription = response.data;
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
#inline3{
  width:100%;
  height:auto;
  background-color:white;
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
</style>