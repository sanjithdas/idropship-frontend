<template>
<div>
  <select v-model="input">
      <option selected>All Store Views</option>
      <optgroup label="Idropship"></optgroup>
      <optgroup label="     Main Website Store"></optgroup>
      <option v-for="(item, index) in purchase_pts" 
        :key="index" 
        :value="item.id">{{item.text}}</option>
       
    </select>
     
    </div>
</template>

<script>
export default {
    props:{
       
        value:Number,
        label:String
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
            input:"",
             
            purchase_pts: [
          {id: 1, title: "Idropship/Main Website Store/Australia" , text: "Australia" },
          {id: 2, title: "Idropship/Main Website Store/New Zealand" , text: "New Zealand"},
          {id: 3, title: "Idropship/Main Website Store/Wholesale Bay" , text: "Wholesale Bay"},
          ],
        }
    },
    mounted() {
        this.input = this.value;
    },
}



</script>

<style>

</style>