<template>
  <v-app>
    <div class="auth-page d-flex align-center justify-center">
      <v-card class="d-flex card" max-width="374">
        <v-form v-model="authForm" @submit.prevent="login">
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
          <v-col>
            <v-btn
              color="blue"
              @click="login"
              :disabled="!authForm"
              :loading="isAuthLoading"
              >Войти</v-btn
            >
          </v-col>
        </v-form>
      </v-card>
    </div>
  </v-app>
</template>
<script>
export default {
  name: 'Auth',
  data() {
    return {
      authForm: false,
      formUsername: '',
      show2: '',
      formPassword: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
      },
      authError: '',
      isAuthLoading: false,
    }
  },
  mounted() {
    const images = [
      'https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      'https://images.pexels.com/photos/2527671/pexels-photo-2527671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/710722/pexels-photo-710722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ]

    const item = images[Math.floor(Math.random() * images.length)]
    document.getElementById('app').style.backgroundImage = 'url(' + item + ')'

    setInterval(() => {
      const item = images[Math.floor(Math.random() * images.length)]
      document.getElementById('app').style.backgroundImage = 'url(' + item + ')'
    }, 10000)
  },
  methods: {
    async login() {
      try {
        const { data } = await this.$axios.post(
          'https://gavali.fungeek.net/rest/1/l6yxn7688v0l6ewl/myuser.manager.auth',
          {
            login: this.formUsername,
            password: btoa(this.formPassword),
          }
        )

        if (data.result && data.result.ID) {
        } else {
          this.isAuthLoading = false
          this.authError = 'Неверный пароль'
        }

        await this.$store.dispatch('fetch', {
          username: this.formUsername,
          password: this.formPassword,
        })
        this.formUsername = ''
        this.formPassword = ''
      } catch (e) {}
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
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
