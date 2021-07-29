<template>
          <div>
            <label for="input" v-text="label"></label>
              <select v-model="input" >
               
                <option     
                    v-for="(item, index) in payment_filters" 
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
             
          payment_filters:[
          {id: 1, title:"Amazon Pay" ,value:"amazon_payment", text:"Amazon Pay" },
          {id: 2, title:"Amazon Pay" ,value:"amazonlogin", text:"Amazon Pay" },
          {id: 3, title:"Bank Transfer Payment" ,value:"banktransfer", text:"Bank Transfer Payment" },
          {id: 4, title:"Cash On Delivery" ,value:"cashondelivery", text:"Cash On Delivery" },
          {id: 5, title:"Check / Money order" ,value:"checkmo", text:"Check / Money order" },
        ]
        
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
