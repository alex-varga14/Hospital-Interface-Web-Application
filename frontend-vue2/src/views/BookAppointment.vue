<template>
  <div id="bookAppointment" class="submit-form whole-page">
  <div v-if="!submitted">
    <div class="title-big text-center">
      Book Appointment
    </div>

      <div class="form-group title-container">
        <label for="title" class="labels">Patient Name</label>
        <input
          type="text"
          onkeydown="return /[a-z ]/i.test(event.key)"
          class="form-control"
          id="title"
          required
          name="title"
          placeholder="Enter patient name here"
        />
      </div>

      <div class="form-group title-container">
        <label for="title" class="labels">Doctor Name</label>
        <input
          type="text"
          onkeydown="return /[a-z ]/i.test(event.key)"
          class="form-control"
          id="title"
          required
          name="title"
          placeholder="Enter doctor name here"
        />
      </div>

    <div class = "form-group title-container">
        <label for="title" class="labels">Enter desired appointment date</label>
        <Datepicker
        v-model="appointment.apptDate"
        ></Datepicker>
    </div>

    
<!--      COURSE DESCRIPTION          -->
      <div class="form-group desc-container">
        <label for="description" class="labels">Reason for Visit</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="appointment.summary"
          name="description"
          rows="5">
        </textarea>
      </div>
<!--           SUBMIT BUTTON          -->
      <button @click="saveAppointment" class="btn btn-success submit-btn text-center">Request Appointment</button>
<!--            MESSAGE               -->
      <div class="message">
        <p class="text-center"> Requested Appointment Will be Reviewed by Doctor.</p>
      </div>
    </div>
<!--            SUBMITTED            -->
    <div v-else>
      <h4 class ="title-big text-center">Appointment Request Submitted!</h4>
      <div class ="message">
        <p class="text-center"> Your request will be reviewed by your Doctor.
        </p>
      </div>
      <button class="btn btn-success submit-btn text-center" @click="newAppointment">Book Another Appointment</button>
    </div>
  </div>
</template>

<script>
import AppointmentDataService from "../services/appointment.service";
import Datepicker from 'vuejs-datepicker';

export default {
  name: "bookAppointment",
  components: {
    Datepicker
  },
  data() {
    console.log("SAVING COURSE...");
    return {
      appointment: {
        id: null,
        summary: "",
        apptDate: "",
        bloodPressure: null,
        temperature: null,
        patientID: null,
        requested: null
      },
      submitted: false
    };
  },
  methods: {
    newAppointment() {
      this.submitted = false;
      this.appointment = {};
    },
    saveAppointment() {
      console.log("SAVING Appointment...");
      var data = {
        summary: this.appointment.summary,
        apptDate: this.appointment.apptDate,
        bloodPressure: 80,
        temperature: 37,
        patientID: 1,
        requested: true
      };
      
      if (this.appointment.summary == undefined || this.appointment.apptDate == undefined) {
        alert("All fields must be filled out to book an appointment");
        this.newAppointment();
      }
      else{
        AppointmentDataService.create(data)
        .then(response => {
          //this.appointment.id = response.data.id;
          this.appointment = response.data;
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

.labels {
  color: #FFA384;
  font-weight: bold;
}
</style>