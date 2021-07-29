<template>
          <div>
            <label for="input" v-text="label"></label>
              <select v-model="input" >
               
                <option     
                    v-for="(item, index) in order_status" 
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
             
          order_status:[
          {id: 1 , title:"Batch Order Paid", value:"batch_order_paid", text: "Batch Order Paid"},
          {id: 2 , title:"Canceled", value:"cancelled", text: "Canceled"},
          {id: 3 , title:"Closed", value:"closed", text: "Closed"},
        ],
        }
    },
    mounted() {
        this.input = this.value;
    },
}
</script>

<style scoped>
select { padding:5px;}
</style>
