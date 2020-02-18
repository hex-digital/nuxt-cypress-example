<template>
  <div>
    <h1>Login page</h1>
    <form @submit.prevent="submit">
      <div>
        <label>Email*
          <input type="email" v-model="email" required>
        </label>
      </div>
      <div>
        <label>Password*
          <input type="password" v-model="password" required>
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    submit() {
      const { email, password } = this;
      this.$auth.login({ email, password });
    }
  }
}
</script>
