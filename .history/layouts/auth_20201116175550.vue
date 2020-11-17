<template>
  <v-app class="background">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-col md="6">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                clearable
                label="Name"
                required
              ></v-text-field>
            </v-col>

            <v-col md="6">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Password"
                required
              ></v-text-field>
            </v-col>
            <v-btn>Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
}
</script>

<style lang="css" scoped>
.container {
  margin: 0 auto;
}

.body {
  background: url('https://wonderfulengineering.com/wp-content/uploads/2014/04/space-wallpaper-2.jpg')
    no-repeat;
  background-size: contain;
}
</style>
