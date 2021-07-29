<template>
  <div>
        <label for="input" v-text="label"></label>
        <select v-model="input" style="height:3rem">
          <!-- <option selected value="">{{label}}</option> -->
          <option     
            v-for="(item, index) in actions" 
            :key="index" 
           :value="item.id">{{item.action}} </option>
        </select>
	</div>
</template>

<script>
export default {
    props: {
      value:Number,
      label:String,
      items: Array
    },
    data() {
      return {
        actions: [],
        input:""  
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

<style>

</style>