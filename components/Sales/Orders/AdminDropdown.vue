<template>
  <div >
<div v-for="item in date_range" :key="item.id" :data-repeat-index="`checkbox_selection_${item.id}`" class="admin__field-option">
      <input type="checkbox" :id="`checkbox_selection_${item.id}`" v-model="input" :value="item.id">
      <label :for="`checkbox_selection_${item.id}`" :id="item.id" :title="item.id" >{{ item.text }}</label>
   </div>
</div>
</template>
<script>
export default {
    props:{
      value:Array,
    },
    watch:{
        input(){
            this.$emit("input",this.input);
        },
        value(){
            this.input = this.value;
        }
    },
    data() {
        return {
            data:[],
             input: [],
            input_data:[
              {id:1, text : "ID"},
              {id:2, text : "Name"},
            ],
            date_range:[
            {id:"1" , text : "ID"},
            {id:"2",  text : "Your Order Number"},
            {id:"3" , text : "Purchase Point"},
            {id:"4" , text : "Action"},
            {id:"5",  text : "Purchase Date"},
            {id:"6" , text : "Bill-to Name"},
            {id:"7" , text : "Ship-to Name"},
            {id:"8",  text : "Grand Total (Base)"},
            {id:"9" , text : "Grand Total (Purchas..)"},
            {id:"10" , text : "Status"},
            {id:"11",  text : "Billing Address"},
            {id:"12" , text : "Shipping Address"},
            {id:"13" , text : "Shipping Information"},
            {id:"14",  text : "Customer Email"},
            {id:"15" , text : "Customer Group"},
            {id:"16" , text : "Subtotal"},
            {id:"17",  text : "Shipping and Handling "},
            {id:"18" , text : "Customer Name "},
            {id:"19" , text : "Payment Method"},
            {id:"20",  text : "Total Refunded"},
            {id:"21" , text : "Signifyd Guarantee"},
          
          ],
        }
    },
    mounted() {
        this.input = this.value;
        
    },
}
</script>