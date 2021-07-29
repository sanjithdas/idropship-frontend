<template>
   
    <fieldset class="admin__fieldset">
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Purchase Date</span>
        </legend>
        <div class="form-field form-field1">
          <label class="label">
              <span>from</span>
          </label>
          <div class="control">
            <input type="date" id="from_date" v-model="orderFilters.purchaseDate.from">
          </div>
        </div>
        <div class="form-field form-field1">
          <label class="label">
              <span>to</span>
          </label>
          <div class="control">
            <input type="date" id="to_date" v-model="orderFilters.purchaseDate.to">
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Grand Total (Base)</span>
        </legend>
        <div class="form-field form-field1">
          <label class="label">
              <span>from</span>
          </label>
          <div class="control">
            <input type="text" id="grand_total_from" v-model="orderFilters.grandTotal.from">
          </div>
        </div>
        <div class="form-field form-field1">
          <label class="label">
              <span>to</span>
          </label>
          <div class="control">
            <input type="text" id="grand_total_to" v-model="orderFilters.grandTotal.to">
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Purchase Point</span>
        </legend>
        <div class="form-field">
          
          <div class="control">
            <sales-orders-purchase-point-filter :filters ="orderFilters.purchasePts" />
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>ID</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <input type="text" name="" id="id" v-model="orderFilters.id">
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Your Order Number</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <input type="text" name="order_number" id="ordeno" v-model="orderFilters.yourOrderNo">
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Bill-to Name</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <input type="text" name="bill_to_name" id="billtoname" 
            v-model="orderFilters.billToName"
            >
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Ship-to Name</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <input type="text" name="ship_to_name" id="shiptoname" 
            v-model="orderFilters.shipToName"
            >
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Status</span>
        </legend>
        <sales-orders-order-status-filters :orderStatus="orderFilters.orderStatus" />
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Billing Address</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <input type="text" name="" v-model="orderFilters.billingAddress">
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Customer Email</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <input type="text" name="" v-model="orderFilters.customerEmail">
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Payment Method</span>
        </legend>
         <sales-orders-payment-filter :filters="orderFilters.paymentFilters" />
      </fieldset>
    </fieldset>
 
</template>

<script>
export default {
    data(){
      return{
        orderFilters:{
        purchaseDate : {from : "" , to: ""},
        grandTotal: {from: "" , to: ""},
        purchasePts: [
          {id: 1, title: "Idropship/Main Website Store/Australia" , text: "Australia" },
          {id: 2, title: "Idropship/Main Website Store/New Zealand" , text: "New Zealand"},
          {id: 3, title: "Idropship/Main Website Store/Wholesale Bay" , text: "Wholesale Bay"},
          ],
        id: "",
        yourOrderNo: "",
        billToName: "" ,
        shipToName: "",
        status: "",
        billingAddress: "",
        customerEmail: "",
        paymentMethod:"",

        orderStatus:[
          {id: 1 , title:"Batch Order Paid", value:"batch_order_paid", text: "Batch Order Paid"},
          {id: 2 , title:"Canceled", value:"cancelled", text: "Canceled"},
          {id: 3 , title:"Closed", value:"closed", text: "Closed"},
        ],

        paymentFilters:[
          {id: 1, title:"Amazon Pay" ,value:"amazon_payment", text:"Amazon Pay" },
          {id: 2, title:"Amazon Pay" ,value:"amazonlogin", text:"Amazon Pay" },
          {id: 3, title:"Bank Transfer Payment" ,value:"banktransfer", text:"Bank Transfer Payment" },
          {id: 4, title:"Cash On Delivery" ,value:"cashondelivery", text:"Cash On Delivery" },
          {id: 5, title:"Check / Money order" ,value:"checkmo", text:"Check / Money order" },
        ]


      },
      }
    }
}
</script>

<style>

</style>