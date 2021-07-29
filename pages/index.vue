<template>
  <div>
    <filter-text-field v-model="user.name"  label="User Name" :count="count" v-on:counterUpdate="counterupdate"/>
    <filter-text-field v-model="user.email" label="Email" :count="2"/>
    <filter-text-field v-model="user.phone" label="Phone" :count="2"/>

    <country-selector v-model="user.country" label="Country"/>

    <div class="py-3">
      <code>
        Counter: {{count}}
      </code>
      <br/>
      <code>
        {{user.country}}
      </code>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count:2,
      user:{
        name:"",
        email:"",
        phone:"",
        country:"",
      }
    }
  },
  methods: {
    counterupdate(item){
      this.count = item ;
    }
  },
}
</script>