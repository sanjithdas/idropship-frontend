<template>
    <div class="py-4">
        <div class="form-group">
            <label for="input" v-text="label"></label>
            <input type="text" id="input" v-model="input" class="form-control">
        </div>
    </div>
</template>
<script>
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
        }
    },
    mounted() {
        this.input = this.value;
    },
}
</script>