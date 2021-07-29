<template>
    
    <input :placeholder="label" type="date" v-model="input_data" />
  
</template>

<script>
export default {
props:{
    value:String,
    label:String,

  },
  watch:{
    input_data(x,y){
      this.$emit("input",this.input_data);
    },
    value(){
      this.input_data = this.value;
    }
  },
  data() {
    return {
      input_data:"",
    }
  },
  mounted() {
    this.input_data = this.value;
  },

}
</script>

<style>

</style>