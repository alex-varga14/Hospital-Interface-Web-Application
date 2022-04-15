<template>
  <div class="page-container" id="patientBills">
      <div class="grid-cover-content children-center">
        <div class="title-list text-center">
          Patient {{currentUser.username}} Bills
        </div>
        <div class="list" >
          <div class="col-md-8" >
          </div>
      </div>
     </div>
 
      <table class="table" id="formtable">
      <thead>
        <tr id="header">
          <th scope="col">Bill ID</th>
          <th scope="col">Bill Date </th>
          <th scope="col">Bill Price</th>
          <th scope="col">Insurance</th>
          <th class="text-center" scope="col">Bank</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bills in bills" v-bind:key="bills" id="rows">
          <td id="code">{{bills.billID}}</td>
          <td>{{new Date(bills.billDate).toISOString().slice(0, 10)}}</td>
          <td>{{bills.price}}</td>
          <td>{{bills.insurance}}</td>
          <td class="text-center">{{bills.bank}}</td>
          <button type=" button "  class="btn view-btn" @click="payBill(bills.billID)">
            Pay Bill
          </button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BillDataService from "../services/bill.service";
export default {
name: "patientBills",
computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
data() {
  return {
      bills: [],
    };
  },
  methods: {
    retrieveBills(id) {
      BillDataService.getById(id)
        .then(response => {
          this.bills = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    payBill(id){
      window.alert("Bill paid!");
      BillDataService.delete(id)
          .then( response => {
            if(response){
              this.retrieveBills(this.$route.params.id);
              this.$delete(this.bills, id);
            }
          })
          .catch( e => {
             console.log(e);
          });
    },
  },
  mounted() {
    this.retrieveBills(this.$route.params.id);
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