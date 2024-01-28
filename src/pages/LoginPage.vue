<template>
  <section class="login">
    <div class="container">
      <LocaleSwitcher class="right"/>
      <Login />
    </div>
  </section>
</template>

<script>
import Login from "@/components/Login";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  name: "LoginPage",
  components : {
    LocaleSwitcher,
    Login
  }
}
</script>

<style scoped>

.login {
  margin-top: 20px;
}

</style>