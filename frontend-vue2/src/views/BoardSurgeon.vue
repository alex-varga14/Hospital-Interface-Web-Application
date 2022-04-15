<template>
  <div id="surgeon">
   <div class="container">
      <header class="jumbotron">
       <h3>{{content}}</h3>
      </header>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <router-link to="schedule-operation">
            <button @click="viewOperations" type="button" class="btn btn-primary btn-block mb-4">Book Operation</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <table class="table" id="formtable">
        <thead>
         <tr id="header">
           <th scope="col">Operation Number</th>
           <th scope="col">Operation Type</th>
           <th scope="col">Time</th>
           <th scope="col">Complete</th>
          </tr>
       </thead>
        <tbody>
          <tr v-for="operations in operations" v-bind:key="operations" id="rows">
            <td id="code">{{operations.operationNum}}</td>
            <td>{{operations.operationType}}</td>
            <td>{{new Date(operations.time).toISOString().slice(0, 10)}}</td>
            <td>{{operations.complete}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UserService from '../services/user.service';
import OperationService from '../services/operation.service';
import EventBus from "../common/EventBus";

export default {
  name: 'Surgeon',
  data() {
    return {
      content: '',
      operations: []
    };
  },
  methods: {
    // viewOperations(data) {
    //   this.$router.push({name: "courses",
    //     params: { id:data }
    //   });
    // },
    retrieveOperations(){
      OperationService.getAllOperations()
      .then(response => {
        this.operations = response.data;
        console.log(response.data);
      })
      .catch(e => {
          console.log(e);
        });
    },
    viewOperations() {
      this.$router.push({name: "schedule-operation"
      // ,
      //   params: { id: }
      });
    },
  },
  mounted() {
    UserService.getSurgeonBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();

        if (error.response && error.response.status === 403) {
          EventBus.dispatch("logout");
        }
      }
    );
    this.retrieveOperations();
  }
};
</script>