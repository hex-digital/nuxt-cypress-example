<template>
  <div>
    <h1>Welcome to the example app</h1>
    <NuxtLink to="/login" v-if="!$auth.loggedIn">Login</NuxtLink>
    <p v-else>You are logged in!</p>
  </div>
</template>
