
<template>
  <div id="doctorApproveAppointment" class="page-container">
     <!-- <router-link to="/admin">
            <div id="AdminHome" class="admin-home-button card button-like card-1 text-center">Admin Home
            </div>
      </router-link> -->
        <div class="title text-center">
          Approve Appointments
        </div>
        <div>
          <div class="col-md-8" >
          </div>
      </div>
    <div class="approve-info-box text-center">
      <p> Doctors are able to approve or deny requested appointments </p>
    </div>

      <!-- <table class="table" id="formtable">
      <thead>
        <tr id="header">
          <th scope="col">Course Code</th>
          <th scope="col">Course Number</th>
          <th scope="col">Title</th>
          <th scope="col">Faculty</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aggregatecourses in aggregatecourses" v-bind:key="aggregatecourses" id="rows">
          <td id="code">{{aggregatecourses.CourseCode}}</td>
          <td>{{aggregatecourses.CourseNo}}</td>
          <td>{{aggregatecourses.Title}}</td>
          <td>{{aggregatecourses.Faculty}}</td>
          <td>{{aggregatecourses.Description}}</td>
          <td>
              <button @click="approve(aggregatecourses.ID)"  type="submit" class="btn approve-course">
                  Approve
              </button>
              <button @click="deny(aggregatecourses.ID)"  type="submit" class=" btn deny-course">
                  Deny
              </button>
          </td>
        </tr>
  
      </tbody>
    </table> -->
  </div>
</template>

<script>
//import CourseDataService from "../services/CourseDataService";
export default {
name: "doctorApproveAppointment",
// data() {
//   return {
//       courses: [],
//       aggregatecourses:[],
//       currentCourse: null,
//       currentIndex: -1,
//       title: "",
//       componentKey: 0
//     };
//   },
//   methods: {
//   approve(id){
//         window.alert("Course Review Approved!");
//         CourseDataService.approveSuggested(id)
//           .then( response => {
//             if(response){
//               this.retrieveCourses()
//               this.retrieveSuggestedCourses();
//               this.$delete(this.aggregatecourses, id);
//             }
            
//           })
//           .catch( e => {
//              console.log(e);
//           });
        
//         // this.refresh();
//         // this.$forceUpdate();        
//     },
//    deny(id){
//       window.alert("Course Review Denied!");
//       CourseDataService.delete(id)
//           .then( response => {
//             if(response){
//               this.retrieveCourses();
//               this.retrieveSuggestedCourses();
//               this.$delete(this.aggregatecourses, id);
//             }
//           })
//           .catch( e => {
//              console.log(e);
//           });
      
//       // this.refresh();
//       // this.$forceUpdate();
//     },
//     retrieveCourses() {
//       CourseDataService.getAll()
//         .then(response => {
//           this.courses = response.data;
//           console.log(response.data);
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     },
//     retrieveSuggestedCourses(){
//       CourseDataService.getSuggested()
//       .then(response => {
//         this.aggregatecourses= response.data;
//         console.log(response.data);
//       })
//       .catch(e => {
//           console.log(e);
//         });
//     },
//     refresh(){
//       this.componentKey +=1;
//     }
//   },
  
//   mounted() {
//     this.retrieveCourses();
//     this.retrieveSuggestedCourses();
//   }
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

#AdminHome{
  width: 50%;
}

#AdminHome:hover{
  border-radius: 5px;
  color: white;
  background: #0e6e58;
  transition: 500ms;
}

.admin-home-button{
  width: 10%;
  text-decoration: none;
  margin-left: 310px;
}

#inline1{
  border: 1px dotted grey;
  border-radius: 15px;
  width: 40%;
  background-color:white;
  display:flex;
  margin-left: 375px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  color: black;
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