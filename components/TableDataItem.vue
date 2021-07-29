<template>
  <tr>
    <td v-html="name"></td>
    <td v-html="job"></td>
    <td v-html="createdAt"></td>
  </tr>
</template>
<script>
export default {
  props:{
    name:String,
    job:String,
    createdAt:String | Date
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