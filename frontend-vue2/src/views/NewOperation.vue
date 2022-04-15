<template>
  <div id="newOperation" class="submit-form whole-page">
  <div v-if="!submitted">
    <div class="title-big text-center">
      Schedule Operation
    </div>
    <div class="row">
      <!--         Operation Number        -->
        <div class="col form-group operationNum-container">
          <label for="operationNum">Operation Number</label>
          <input
            type="text"
            class="form-control"
            id="operationNum"
            required
            v-model="operation.operationNum"
            name="operationNum"
            placeholder="87622"
          />
      </div>
      <!--        Operation Type         -->
        <div class="col form-group operationType-container">
          <label for="operationType">Operation Type</label>
          <input
            type="text"
            class="form-control"
            id="operationType"
            required
            v-model="operation.operationType"
            name="operationType"
            placeholder="Cardiovascular"
          />
      </div>
      <div class="col form-label operationDate-container">
        <label for="refilDate">Operation Date</label>
        <input
          type="Date"
          class="form-control"
          id="operationDate"
          required
          v-model="operation.time"
          name="operationDate"
        />
      </div>
    </div>

<!--           SUBMIT BUTTON          -->
       <button @click="saveOperation" class="btn btn-success submit-btn text-center">Schedule Operation</button>
    </div>
<!--            SUBMITTED            -->
    <div v-else>
      <h4 class ="title-big text-center">Operation Scheduled</h4>
      <button class="btn btn-success submit-btn text-center" @click="newOperation">Schedule Another Operation</button>
    </div>
  </div>
</template>

<script>
import OperationDataService from "../services/operation.service";
export default {
  name: "newOperation",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data() {
    return {
      operation: {
        operationNum: null,
        operationType: "",
        time: "",
        complete: "",
        surgeonID: null
      },
      submitted: false
    };
  },
  methods: {
    newOperation() {
      this.submitted = false;
      this.operation = {};
    },
    saveOperation() {
      var data = {
        operationNum: this.operation.operationNum,
        operationType: this.operation.operationType,
        time: this.operation.time,
        complete: false,
        surgeonID: this.currentUser.id
      };
      console.log("SURGID:"+ this.currentUser.id);
      if (this.operation.operationNum == undefined || this.operation.operationType == undefined || this.operation.time == undefined) {
        alert("All fields must be filled out to schedule a new operation.");
        this.newOperation();
      }
      else
      {
        OperationDataService.create(data)
        .then(response => {
          this.operation = response.data;
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
.surgeonID-container {
  margin-left: -130px;
  margin-right: 10px;
}

.operationDate-container {
  margin-left: 20px;
  margin-right: -140px;
}

.operationNum-container {
   margin-left: -130px;
   margin-right: 10px;
}

.operationType-container {
  margin-left: 0px;
  margin-right: 0px;
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