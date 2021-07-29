<template>
   
        <div>
            <label for="input" v-text="label"></label>
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <select v-model="input" style="height:3rem">
              <label for="input" v-text="label"></label>
                <option     
                    v-for="(item, index) in date_range" 
                    :key="index" 
                    :value="item.id">{{item.text}}</option>
            </select>
        </div>
    
</template>
<script>
 
export default {
    props:{
       
        value:String,
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
             
            date_range:[
            {id:"1" , text : "Last 7 days"},
            {id:"2",  text : "Last Month"},
            {id:"3" , text : "This Year"}
          ],
        }
    },
    mounted() {
        this.input = this.value;
    },
}
</script>