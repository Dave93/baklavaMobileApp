<template>
  <v-app>
    <v-app-bar :clipped-center="clipped" fixed app width="100%">
      <v-toolbar-title v-text="title" />
      <v-btn @click="logout"> Logout </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import global from '~/mixins/global.js'
export default {
  middleware: 'authenticated',
  mixins: [global],
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Gavali report',
    }
  },
  mounted() {
    const item = this.images[Math.floor(Math.random() * this.images.length)]
    document.getElementById('app').style.background =
      'url(' + item + ') no-repeat center center fixed'

    setInterval(() => {
      const item = this.images[Math.floor(Math.random() * this.images.length)]
      document.getElementById('app').style.background =
        'url(' + item + ') no-repeat center center fixed'
    }, 10000)
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/clearUserData')
      this.$router.push('/auth')
    },
  },
}
</script>

<style>
#app {
  background-size: cover;
  background-position: center;
  -webkit-transition: background-image 0.6s ease-in-out;
  transition: background-image 0.6s ease-in-out;
}

.v-toolbar__content {
  justify-content: space-between;
}
</style>
