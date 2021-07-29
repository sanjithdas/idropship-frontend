<template>
 <tr class="data-row">
    <td class="data-grid-checkbox-cell">
        <input class="admin__control-checkbox" type="checkbox"
         @click = "de_select" :value="id" v-model="input" :id="`checkbox_selection_${id}`">
    </td>
    <td>
      <div class="data-grid-cell-content" v-html="invoice"> </div>
    </td>
    <td>
      <div class="data-grid-cell-content" v-html="invoiceDate"></div>
    </td>
    <td>
      <div class="data-grid-cell-content" v-html="order"></div>
    </td>
    <td>
      <div class="data-grid-cell-content" v-html="orderDate"></div>
    </td>
    <td>
      <div class="data-grid-cell-content" v-html="billToName"></div>
    </td>
    <td>
      <div class="data-grid-cell-content" v-html="status"></div>
    </td>
    <td>
      <div class="data-grid-cell-content" v-html="grandTotalBase"></div>
    </td>
    <td>
      <div class="data-grid-cell-content" v-html="grandTotalPurchased"></div>
    </td>
    <td>
      <div class="data-grid-cell-content" v-html="action"></div>
    </td>
	</tr>    
    
</template>
<script>
export default {
   props:{
     value:Array,
     invoice: Number,
     invoiceDate: String,
     order: Number,
     orderDate: String,
     billToName: String,
     status: String,
     grandTotalBase: Number,
     grandTotalPurchased: Number,
     action: String,
     id: Number,
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