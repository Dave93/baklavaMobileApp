<template>
  <div></div>
</template>
<script>
export default {
  layout: 'auth',
  name: 'Auth',
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
        this.authError = ''
        this.isAuthLoading = true
        const { data } = await this.$axios.post(
          'https://gavali.fungeek.net/rest/1/l6yxn7688v0l6ewl/myuser.admin.auth',
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
          this.$router.push('/dashboard')
        } else {
          this.isAuthLoading = false
          this.authError = data.result.error
        }
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