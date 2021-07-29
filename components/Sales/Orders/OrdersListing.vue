<template>
   <tr>
    <td>
        <input class="admin__control-checkbox" type="checkbox" 
        @click = "de_select" :value="id" v-model="input" :id="`checkbox_selection_${id}`">
    </td>
    <td v-html="id"></td>
    <td v-html="orderno"></td>
    <td v-html="point"></td>
    <td v-html="action"></td>
    <td v-html="pdate"></td>
    <td v-html="billname"></td>
    <td v-html="shipname"></td>
    <td v-html="grandtotal"></td>
    <td v-html="status"></td>
    <td v-html="shippingaddress"></td>
    <td v-html="customeremail"></td>
    <td v-html="paymentmethod"></td>
  </tr>
    
</template>
<script>
export default {
  props:{
    id:String,
    value:Array,
    orderno: String,
    point: String,
    action: String,
    pdate: String,
    billname: String,
    shipname: String,
    grandtotal: String,
    status: String,
    shippingaddress: String,
    customeremail: String,
    paymentmethod: String,
    de_select: { type: Function }
  },
   data() {
      return {
        actions: [],
        input: []
      }
    },
    watch:{
        input(){
            this.$emit("input",this.input);
         },
        value(){
          this.input = this.value;
        }
    },

    mounted() {

      this.actions = this.$props.items;
       this.input = this.value;

    },
}
</script>