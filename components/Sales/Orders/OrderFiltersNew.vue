<template>
<div class="form-field form-field1">
  <!-- <label class="label">
              <span>from</span>
          </label> -->
  <div class="control">
    <input :placeholder="label" type="text" v-model="input_data" />
  </div>
  

</div>
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