
<template>
  <div id="doctorApproveAppointment" class="page-container">
    <div class="container">
      <div class="title text-center">
          Approve Appointments
      </div>
      <div class="approve-info-box text-center">
        <p> Doctors are able to approve or deny requested appointments </p>
      </div>
    </div>
    <div class="container">
      <table class="table" id="formtable">
      <thead>
        <tr id="header">
          <th scope="col">ID</th>
          <th scope="col">PatientID</th>
          <th scope="col">Date</th>
          <th scope="col">Summary</th>
          <!-- <th scope="col">Description</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="appointments in appointments" v-bind:key="appointments" id="rows">
          <td id="code">{{appointments.apptID}}</td>
          <td>{{appointments.patientID}}</td>
          <td>{{new Date(appointments.apptDate).toISOString().slice(0, 10)}}</td>
          <td>{{appointments.summary}}</td>
          <!-- <td>{{aggregatecourses.Description}}</td>  -->
          <td>
              <button @click="approve(appointments.apptID)"  type="submit" class="btn approve-course">
                  Approve
              </button>
              <button @click="deny(appointments.apptID)"  type="submit" class=" btn deny-course">
                  Deny
              </button>
          </td>
        </tr>
  
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import AppointmentDataService from "../services/appointment.service";

export default {
name: "doctorApproveAppointment",
data() {
  return {
      appointments: [],
      componentKey: 0
    };
  },
  methods: {
  approve(id){
    window.alert("Appointment Approved!");
    AppointmentDataService.approveAppointment(id)
      .then( response => {
        if(response){
          console.log("Pain");
          //this.retrieveCourses()
          this.retrieveRequestedAppointments();
          this.$delete(this.appointments, id);
        }
        
      })
      .catch( e => {
          console.log(e);
          console.log("Pain In catch");
      });        
    },
   deny(id){
      window.alert("Appointment Denied!");
      AppointmentDataService.deleteByApptID(id)
          .then( response => {
            if(response){
              this.retrieveRequestedAppointments();
              this.$delete(this.appointments, id);
            }
          })
          .catch( e => {
             console.log(e);
          });
    },
    retrieveRequestedAppointments(){
      AppointmentDataService.getRequestedAppointments()
      .then(response => {
        this.appointments= response.data;
        console.log(response.data);
      })
      .catch(e => {
          console.log(e);
        });
    },
    refresh(){
      this.componentKey +=1;
    }
  },
  
  mounted() {
    this.retrieveRequestedAppointments();
  }
};
</script>

<style>

.title{
  font-weight: 300;
  font-size: 40px;
  line-height: 60px;
  color: #000000;
  width: auto;
  margin: auto;
  margin-bottom: 40px;
  margin-top: 30px;
  margin-right: -30px;
  margin-left: -30px;
}

.approve-info-box{
  border: 1px dotted grey;
  color: grey;
  text-align: cen;
  width: 50%;
  font-size: 18px;
  border-radius: 15px;
  padding-top: 10px;
  padding-bottom: -2px;
  padding-top: 15px;
  margin-left: 300px;
  margin-bottom: 30px;
}

tr:nth-child(even){
  background-color: #f2f2f2;
}

.view-btn{
  border: 1px solid grey;
  height: 70px;
  background: blue;
}

.approve-course{
  border: 1px solid grey;
  width: 100px;
  height: 70px;
  margin-top: -5px;
  margin-bottom: -5px;
  margin-left: 30px;
}

.deny-course{
  border: 1px solid grey;
  width: 100px;
  height: 70px;
  margin-top: -5px;
  margin-bottom: -5px;
  margin-left: 10px;

}

</style>