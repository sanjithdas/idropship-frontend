<template>
          <div>
            <label for="input" v-text="label"></label>
              <select v-model="input" >
               
                <option     
                    v-for="(item, index) in per_page" 
                    :key="index" 
                    :value="item.id">{{item.text}}</option>
            </select>
            <label class="admin__control-support-text">per page</label>
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
             
          per_page:[
          {id: 20 ,  text: "20"},
          {id: 30 ,  text: "30"},
          {id: 50 ,  text: "50"},
          {id: 100 ,  text: "100"},
        ],
        }
    },
    mounted() {
        this.input = this.value;
    },
}
</script>
