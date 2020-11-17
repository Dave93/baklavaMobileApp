<template>
  <v-app>
    <div class="auth-page d-flex align-center justify-center">
      <v-card class="d-flex card" max-width="374">
        <v-form>
          <v-col>
            <v-text-field
              v-model="name"
              name="name"
              label="Name"
              clearable
              solo
              type="text"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="password"
              solo
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn color="blue">Войти</v-btn>
          </v-col>
        </v-form>
      </v-card>
    </div>
  </v-app>
</template>
<script>
export default {
  name: 'Auth',
  layout: 'default',
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
      },
    }
  },
}
</script>

<style lang="css" scoped>
.card {
  margin: 0 auto;
  background: rgba(25, 24, 24, 0.32);
  padding: 3.5vw;
  max-width: 500px !important;
  box-sizing: border-box;
  box-shadow: 0px 1px 13px 2px rgba(251, 251, 251, 0.09);
  position: relative;
}

.auth-page {
  height: 100vh;
  width: 100%;
}
</style>
<style>
#app {
  background-size: cover;
  background-position: center;
  -webkit-transition: background-image 0.6s ease-in-out;
  transition: background-image 0.6s ease-in-out;
}
</style>
