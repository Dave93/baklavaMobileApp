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
    <div class="container">
      <h1>Please login to see the secret content</h1>
      <form v-if="!$store.state.authUser" @submit.prevent="login">
        <p v-if="formError" class="error">
          {{ formError }}
        </p>
        <p>
          <i
            >To login, use <b>demo</b> as username and <b>demo</b> as
            password.</i
          >
        </p>
        <p>
          Username: <input v-model="formUsername" type="text" name="username" />
        </p>
        <p>
          Password:
          <input v-model="formPassword" type="password" name="password" />
        </p>
        <button type="submit">Login</button>
      </form>
      <div v-else>
        Hello {{ $store.state.authUser.username }}!
        <pre>
I am the secret content, I am shown only when the user is connected.</pre
        >
        <p><i>You can also refresh this page, you'll still be connected!</i></p>
        <button @click="logout">Logout</button>
      </div>
      <p>
        <NuxtLink to="/secret"> Super secret page </NuxtLink>
      </p>
    </div>
  </v-app>
</template>
<script>
export default {
  name: 'Auth',
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
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword,
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    },
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
