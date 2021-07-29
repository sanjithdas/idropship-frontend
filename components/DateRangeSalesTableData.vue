<template>
  <tr>
    <td v-html="orders"></td>
    <td v-html="amount"></td>
    <td v-html="avgOrderValue"></td>
  </tr>
</template>
<script>
export default {
  props:{
    orders:Number,
    amount:Number,
    avgOrderValue: Number,
     
  },
  watch:{
    
  },
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
}
</script>