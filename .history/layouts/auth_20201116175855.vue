<template style="background: url('https://wonderfulengineering.com/wp-content/uploads/2014/04/space-wallpaper-2.jpg')">
  <v-app>
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
                v-model="password"
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
    name: '',
    password: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
  }),
}
</script>

<style lang="css" scoped>
.container {
  margin: 0 auto;
}

body {
  background: url('https://wonderfulengineering.com/wp-content/uploads/2014/04/space-wallpaper-2.jpg')
    no-repeat;
  background-size: contain;
}
</style>
