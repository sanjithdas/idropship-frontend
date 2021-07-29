<template>
  <div>
    <form action="" method="post" @submit.prevent="save">
      <Tutorial label="Name" v-model="user.name" />
      <Tutorial label="Job" v-model="user.job" />
      <button class="btn btn-sm btn-primary" type="submit">Save</button>
    </form>
    <pre><code>{{user}}</code></pre>
    <strong>Response</strong>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Job</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <table-data-item v-for="(item, index) in response" :key="index" :name="item.name" :job="item.job"
          :created-at="item.createdAt" />
      </tbody>
    </table>
    <code>Error <br />
      {{error}}
    </code>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        response: [],
        error: "",
        user: {
          name: "",
          job: "",
        },
      }
    },
    methods: {
      async save() {
        await this.$axios.post("https://reqres.in/api/users", this.user)
          .then(res => this.response.push(res.data))
          .catch(error => this.error = error.message);
      }
    },
  }
</script>
