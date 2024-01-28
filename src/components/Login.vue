<template>
  <div class="container">
    <div class="login">
      <h1 class="login__title">{{$t('welcome')}}</h1>

      <form  class="login__form">
        <div class="login__form-items">
          <UserDataInput
              :model-value="$store.state.login"
              :label="$t('user.login')"
              @update:model-value="$store.commit('setLogin', $event.target.value)"
          />
          <UserDataInput
              :model-value="$store.state.password"
              :label="$t('user.password')"
              :type="'password'"
              @update:model-value="$store.commit('setPassword', $event.target.value)"
          />
          <UserDataInput
              :model-value="$store.state.name"
              :label="$t('user.name')"
              @update:model-value="$store.commit('setName', $event.target.value)"
          />
          <UserDataInput
              :model-value="$store.state.phone"
              :label="$t('user.phone')"
              :type="'tel'"
              :mask="['+7 (###) ##-##-##', '8 (###) ##-##-##']"
              @update:model-value="$store.commit('setPhone', $event.target.value)"
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

export default {

  name: "Login",
  components: { UserDataInput, Form },

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