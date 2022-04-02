<template>
  <div id="newOperation" class="submit-form whole-page">
  <!-- <div v-if="!submitted"> -->
    <div class="title-big text-center">
      Schedule Operation
    </div>
<!--       COURSE TITLE       -->
      <div class="form-group title-container">
        <label for="title">Filler</label>
        <input
          type="text"
          onkeydown="return /[a-z ]/i.test(event.key)"
          class="form-control"
          id="title"
          required
          name="title"
          placeholder="Filler"
        />
      </div>
    <div id="inline3">
<!--         FACULTY         -->
        <div class="form-group faculty-container">
          <label for="faculty">Filler</label>
          <input
            type="text"
            onkeydown="return /[a-z ]+$/i.test(event.key)"
            class="form-control"
            id="faculty"
            required
            name="faculty"
            placeholder="Filler"
          />
        </div>
<!--        COURSE CODE         -->
        <div class="form-group coursecode-container">
          <label for="coursecode">Filler</label>
          <input
            type="text"
            onkeydown=" return /[a-z]/i.test(event.key)"
            class="form-control"
            id="coursecode"
            required
            name="coursecode"
            placeholder="Filler"
            maxlength="4"
          />
        </div>
<!--        COURSE NUMBER          -->
        <div class="form-group courseno-container">
          <label for="courseno">Filler</label>
          <input
            type="text"
            class="form-control"
            id="courseno"
            required
            name="courseno"
            placeholder="Filler"
            maxlength="3"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
        </div>
      </div>
<!--      COURSE DESCRIPTION          -->
      <div class="form-group desc-container">
        <label for="description">Summary</label>
        <textarea
          class="form-control"
          id="description"
          required
          name="description"
          rows="5">
        </textarea>
      </div>
<!--           SUBMIT BUTTON          -->
      <button class="btn btn-success submit-btn text-center">Set Operation Date</button>
<!--            MESSAGE               -->
      <div class="message">
        <p class="text-center"> Operation Information will be Sent to Corresponding Patient and Family.</p>
      </div>
    <!-- </div> -->
<!--            SUBMITTED            -->
    <!-- <div v-else>
      <h4 class ="title-big text-center">Course Submitted!</h4>
      <div class ="message">
        <p class="text-center"> Your suggested course will be reviewed by a Course Critic administrator. 
                                Only selected courses will be added to Course Critic. Selections will be made
                                based on the number of suggestions for a course. 
        </p>
      </div>
      <button class="btn btn-success submit-btn text-center" @click="newCourse">Suggest Another Course</button>
    </div> -->
  </div>
</template>

<script>
//import CourseDataService from "../services/CourseDataService";
export default {
  name: "newOperation",
//   data() {
//     console.log("SAVING COURSE...");
//     return {
//       course: {
//         id: null,
//         Title: "",
//         Description: "",
//         Faculty: "",
//         CourseNo: null,
//         CourseCode: "",
//         Suggested: null,
//       },
//       submitted: false
//     };
//   },
//   methods: {
//     newCourse() {
//       this.submitted = false;
//       this.course = {};
//     },
//     saveCourse() {
//       console.log("SAVING COURSE...");
//       var data = {
        
//         Title: this.course.title,
//         Description: this.course.description,
//         Faculty: this.course.faculty,
//         CourseNo: this.course.courseno,
//         CourseCode: this.course.coursecode,
//         Suggested: true
//       };
      
//       if (this.course.title == undefined || this.course.faculty == undefined || this.course.coursecode == undefined 
//         || this.course.courseno == undefined || this.course.description == undefined) {
//         alert("All fields must be filled out to suggest a new course");
//         this.newCourse();
//       }
//       else{
//         CourseDataService.create(data)
//         .then(response => {
//           this.course.id = response.data.id;
//           this.course = response.data;
//           console.log(response.data);
//           this.submitted = true;
//         })
//         .catch(e => {
//           console.log(e);
//         });
//       }
//     },
//   }
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