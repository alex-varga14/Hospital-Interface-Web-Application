<template>
<div id="writePresc" class="submit-form whole-page">
  <div v-if="!submitted">
    <div class="title-big text-center">
        Prescribe Medication
    </div>
    <div class="row">
<!--       Patient ID       -->
      <div class="col form-group patientID-container">
        <label for="pID">Patient ID</label>
        <input
          type="text"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          class="form-control"
          id="pID"
          required
          v-model="prescription.patientID"
          name="pID"
          placeholder="123"
        />
      </div>
      <div class="col form-label refildate-container">
        <label for="refilDate">Refil Date</label>
        <input
          type="Date"
          class="form-control"
          id="refilDate"
          required
          v-model="prescription.refilDate"
          name="refilDate"
        />
      </div>
    </div>
    <div class="row">
<!--         Prescription ID         -->
        <div class="col form-group prescID-container">
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
<!--        Medications         -->
        <div class="col form-group medications-container">
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
<!--        Doctor Signature          -->
        <div class="col form-group sig-container">
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
      <div class="form-group instructions-container">
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
    </div>
<!--            SUBMITTED            -->
    <div v-else>
      <h4 class ="title-big text-center">Prescription Submitted!</h4>
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
      var data = {
        prescID: this.prescription.prescID,
        instructions: this.prescription.instructions,
        refilDate: this.prescription.refilDate,
        medications: this.prescription.medications,
        patientID: this.prescription.patientID
      };
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
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  color: #000000;
  width: 130%;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 30px;
  margin-left: -50px;
}

.patientID-container {
  margin-left: -130px;
  margin-right: 10px;
}

.refildate-container {
  margin-left: 20px;
  margin-right: -140px;
}

.prescID-container {
  margin-left: -130px;
  margin-right: 10px;
}

.medications-container {
  margin-left: 0px;
  margin-right: 0px;
}

.sig-container {
  margin-left: 20px;
  margin-right: -140px;
}

.instructions-container {
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

.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>