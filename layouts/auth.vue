<template>
  <v-app>
    <div class="auth-page d-flex align-center justify-center">
      <v-card class="d-flex card" max-width="374">
        <v-form v-model="authForm" @submit.prevent="login">
          <v-card-title class="headline justify-center"
            >Авторизация</v-card-title
          >
          <v-alert v-show="authError.length" type="error">{{
            authError
          }}</v-alert>
          <v-row>
            <v-col>
              <v-text-field
                v-model="formUsername"
                name="name"
                label="Name"
                clearable
                solo
                type="text"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="formPassword"
                solo
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                label="Password"
                @click:append="show2 = !show2"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                color="blue"
                :disabled="!authForm"
                :loading="isAuthLoading"
                @click="login"
                >Войти</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </div>
  </v-app>
</template>
<script>
import global from '~/mixins/global'
export default {
  name: 'Auth',
  mixins: [global],
  data() {
    return {
      authForm: false,
      formUsername: '',
      show2: '',
      formPassword: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 6 || 'Min 6 characters',
      },
      authError: '',
      isAuthLoading: false,
    }
  },
  mounted() {
    const item = this.images[Math.floor(Math.random() * this.images.length)]
    document.getElementById('app').style.backgroundImage = 'url(' + item + ')'

    setInterval(() => {
      const item = this.images[Math.floor(Math.random() * this.images.length)]
      document.getElementById('app').style.backgroundImage = 'url(' + item + ')'
    }, 10000)
  },
  methods: {
    async login() {
      try {
        this.authError = ''
        this.isAuthLoading = true
        const { data } = await this.$axios.post(
          'https://crm.gavali.uz/rest/1/l6yxn7688v0l6ewl/myuser.admin.auth',
          {
            login: this.formUsername,
            password: btoa(this.formPassword),
          }
        )

        if (data.result && data.result.ID) {
          this.isAuthLoading = false
          await this.$store.dispatch('auth/setUserData', {
            userData: data.result,
          })
          this.$router.push('/')
        } else {
          this.isAuthLoading = false
          this.authError = data.result.error
        }
      } catch (e) {}
    },
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
