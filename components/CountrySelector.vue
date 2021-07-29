<template>
    <div class="py-4">
        <div class="form-group">
            <label for="input" v-text="label"></label>
            <select v-model="input" class="form-control">
                <option     
                    v-for="(item, index) in countries" 
                    :key="`select-country-${index}`" 
                    :value="item.code">{{item.name}} - {{item.code}}</option>
            </select>
        </div>
    </div>
</template>
<script>
import countries from '../plugins/country';
export default {
    props:{
        count:Number,
        value:String,
        label:String
    },
    watch:{
        input(){
            if(this.count){
                let c = this.count + 1;
                this.$emit('counterUpdate',c)
            }
            this.$emit("input",this.input);
        },
        value(){
            this.input = this.value;
        }
    },
    data() {
        return {
            input:"",
            countries:countries,
        }
    },
    mounted() {
        this.input = this.value;
    },
}
</script>