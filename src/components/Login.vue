<template>
  <div class="container">
    <div class="login">
      <h1 class="login__title">{{$t('welcome')}}</h1>

      <form  class="login__form">
        <div class="login__form-items">
          <UserDataInput
              :model-value="login"
              @update:model-value="setLogin($event.target.value)"
              :label="$t('user.login')"
          />
          <UserDataInput
              :model-value="password"
              @update:model-value="setPassword($event.target.value)"
              :label="$t('user.password')"
              :type="'password'"
          />
          <UserDataInput
              :model-value="name"
              @update:model-value="setName($event.target.value)"
              :label="$t('user.name')"
          />
          <UserDataInput
              :model-value="phone"
              @update:model-value="setPhone($event.target.value)"
              :label="$t('user.phone')"
              :type="'tel'"
              :mask="['+7 (###) ##-##-##', '8 (###) ##-##-##']"
          />
        </div>

        <div class="login__submit">
            <router-link class="router-link" to="/profile"> {{$t('auth')}} </router-link>
        </div>

      </form>
    </div>
  </div>
</template>

<script >
import UserDataInput from "@/components/UI/UserDataInput";
import {Form} from "vee-validate";
import {mapState, mapMutations} from "vuex"

export default {
  name: "Login",
  components: { UserDataInput, Form },

  computed: {
    ...mapState({
      login : state => state.user.login,
      password: state => state.user.password,
      name: state => state.user.name,
      phone: state => state.user.phone,
    })
  },

  methods : {
    ...mapMutations({
      setLogin : 'user/setLogin',
      setPassword: "user/setPassword",
      setPhone: "user/setPhone",
      setName: "user/setName"
    })
  }
}
</script>

<style lang="scss" scoped>

.login {
  margin: 20px auto;
  padding: 40px 50px;
  max-width: 450px;
  border: 1px solid white;
  border-radius: 20px;
}

.login__title {
  font-size: 32px;
  font-weight: 700;
  text-align: center;

  margin-bottom: 20px;
}

.login__form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login__form-items {
  width: 100%;

  * + * {
    margin-top: 10px;
  }
}

.login__submit {
  margin-top: 30px;

  padding: 20px 20px;
  background: #0f2027;
  border: 2px solid white;
  border-radius: 10px;
}

.router-link  {
  color: white;
  font-size: 24px;
}

@media (max-width: 548px) {
  .login {
    max-width: 320px;
  }

  .router-link {
    font-size: 20px;
  }
}

</style>