<template>
  <div class="page-container" id="patientData">
        <div class="title-list text-center">
          Facility A - Patient Data
        </div>
        <div class="list" >
          <div class="col-md-8" >
          </div>
      </div>
      <div class="container">
      <div class="row">
        <div class="col">
          <router-link to="add-patient">
            <button  type="button" class="btn btn-primary btn-block mb-4">Add Patient</button>
          </router-link>
        </div>
      </div>
    </div>
   
      <table class="table" id="formtable">
      <thead>
        <tr id="header">
          <th scope="col">Patient Name</th>
          <th scope="col">Age</th>
          <th scope="col">Weight</th>
          <th scope="col">Height</th>
          <th scope="col">Blood Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patients in patients" v-bind:key="patients" id="rows">
          <td id="code">{{patients.username}}</td>
          <td>{{new Date(patients.dob).toISOString().slice(0, 10)}}</td>
          <td>{{patients.weight}}</td>
          <td>{{patients.height}}</td>
          <td>{{patients.bloodType}}</td>
          <button type=" button "  class="btn view-btn" @click="update(patients.userID)">
            View Patient Data
          </button>
          <!-- <td>
            <button @click="remove(patients.userID)" type="submit" class="btn remove-btn">
              Remove Patient
            </button>
            <button type="submit" class="btn remove-btn">
              Remove Patient
            </button>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PatientDataService from "../services/patient.service";
export default {
name: "patientData",
data() {
  return {
      patients: []
    };
  },
  methods: {
    retrievePatients() {
      PatientDataService.getAllPatients()
        .then(response => {
          this.patients = response.data;
          // console.log("DISRODER:" + this.patients.NumDisorders);
          // console.log("DISRODER:" + this.patients.NumVaccines);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    update(data){
      this.$router.push({name: "patient-information",
        params: { id:data }
      });
    },
    
    // filterCode: function(){
    // var text, table, tableRows, td, i, txtValue,tdTwo,textTwo;
    // var tdThree, textThree, tdFour, textFour;
    // text = document.getElementById("code filter").value;
    // textTwo = document.getElementById("number filter").value;
    // textThree = document.getElementById("title filter").value;
    // textFour = document.getElementById("faculty filter").value;
    // table = document.getElementById("formtable");
    // tableRows = table.getElementsByTagName("tr");
    // for (i = 0; i < tableRows.length; i++) {
    //   td = tableRows[i].getElementsByTagName("td")[0];
    //   tdTwo =tableRows[i].getElementsByTagName("td")[1];
    //   tdThree =tableRows[i].getElementsByTagName("td")[2];
    //   tdFour =tableRows[i].getElementsByTagName("td")[3];
    //   if (td) {
    //     txtValue = td.textContent;
    //       if (txtValue.indexOf(text) > -1) {
    //         tableRows[i].style.display = "";
    //       } else {
    //         tableRows[i].style.display = "none";
    //       }
    //     }
    //     if (tdTwo) {
    //       txtValue = tdTwo.textContent;
    //       if (txtValue.indexOf(textTwo) > -1) {
    //         if(tableRows[i].style.display!="none"){
    //           tableRows[i].style.display = "";
    //         }
    //       } else {
    //         tableRows[i].style.display = "none";
    //       }
    //     }
    //     if (tdThree) {
    //       txtValue = tdThree.textContent;
    //       if (txtValue.indexOf(textThree) > -1) {
    //         if(tableRows[i].style.display!="none"){
    //           tableRows[i].style.display = "";
    //         }
    //       } else {
    //         tableRows[i].style.display = "none";
    //       }
    //     }
    //     if (tdFour) {
    //       txtValue = tdFour.textContent;
    //       if (txtValue.indexOf(textFour) > -1) {
    //         if(tableRows[i].style.display!="none"){
    //           tableRows[i].style.display = "";
    //         }
    //       } else {
    //         tableRows[i].style.display = "none";
    //       }
    //     }
    //   }
    // },
    // remove(id){
    //       this.courses[id] = null;
    //       window.alert("Course Removed!");
    //       this.refreshList();
    //       RatingDataService.delete(id)
    //       .then(response => {
    //       console.log(response.data);
    //       ReviewDataService.delete(id)
    //       .then(responseTwo => {
    //         console.log(responseTwo.data);
    //         CourseDataService.delete(id)
    //         .then(responseThree =>{
    //           console.log(responseThree.data);
    //           // this.$emit("authenticated", true);
    //           // // this.$router.go();
    //           // this.$router.push({name: "coursesAdmin"});
    //           this.retrieveAggregateCourses();
    //           this.$delete(this.aggregatecourses, id);
    //         })
    //         .catch(e => {
    //         console.log(e);
    //         });
    //       })
    //       .catch(e => {
    //         console.log(e);
    //         CourseDataService.delete(id)
    //         .then(responseThree =>{
    //           console.log(responseThree.data);
    //           this.$emit("authenticated", true);
    //           // this.$router.go();
    //            this.$router.push({name: "coursesAdmin"});
    //         })
    //         .catch(e => {
    //         console.log(e);
    //         });
    //       });
    //     })
    //     .catch(e => {
    //         console.log(e);
    //         ReviewDataService.delete(id)
    //         .then(responseTwo => {
    //           console.log(responseTwo.data);
    //           CourseDataService.delete(id)
    //           .then(responseThree =>{
    //             console.log(responseThree.data);
    //             this.$emit("authenticated", true);
    //             // this.$router.go();
    //              this.$router.push({name: "coursesAdmin"});
    //           })
    //           .catch(e => {
    //           console.log(e);
    //           });
    //         })
    //         .catch(e => {
    //           console.log(e);
    //           CourseDataService.delete(id)
    //           .then(responseThree =>{
    //             console.log(responseThree.data);
    //             // this.$emit("authenticated", true);
    //             // this.$router.go(); 
    //              this.$router.push({name: "coursesAdmin"});
    //           })
    //           .catch(e => {
    //           console.log(e);
    //           });
    //         });
    //     });
    //   },
  },
  mounted() {
    this.retrievePatients();
  }
};
</script>

<style>
.title-list{
  font-weight: 300;
  font-size: 40px;
  line-height: 60px;
  color: #000000;
  width: auto;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 30px;
}

.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

#inline2{
  border: 1px dotted grey;
  border-radius: 15px;
  width: 65%;
  background-color:white;
  display:flex;
  margin-left: 240px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 30px;
  color: black;
}

.info-box{
  color: grey;
  width: 40%;
  margin-left: 30px;
  margin-right: 150px;
}

.filters-left{
  margin-left: -90px;
  width: 25%;
}

.filters-right{
  margin-left: 100px;
}

.title-filter{
  margin-bottom: 20px;
}

.code-filter{
  margin-bottom: 20px;
  width: 45%;
}

.number-filter{
  width: 35%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

tr:nth-child(even){
  background-color: #f2f2f2;
}

.view-btn{
  border: 1px solid grey;
  height: 70px;
  background: blue;
}

.ant-popover-arrow {
  border-color: #0c0926 !important;
}
.ant-popover-inner-content {
  background-color: #0c0926 !important;
}
</style>