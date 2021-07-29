<template>
  <div>
    <input :placeholder="label" type="text" v-model="input_data" />
  </div>
</template>

<script>
export default {
   
  props:{
    value: String,
    label: String
  },
  data(){
    return{
      input_data: "",
    }
  },

  watch:{
    input_data(){
      this.$emit("input", this.input_data);
       
    },
    value(){
      this.input_data = this.value;
    }
  },

   mounted(){
     this.input_data = this.value;
   }


}
</script>

<style>

</style>