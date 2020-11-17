<template>
  <v-app>
    <v-form>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-col md="6" sm="6">
              <v-text-field
                v-model="name"
                name="name"
                label="Name"
                clearable
              ></v-text-field>
            </v-col>
            <v-col md="6" sm="6">
              <v-text-field
                v-model="password"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                label="Visible"
                hint="At least 8 characters"
                class="input-group--focused"
                @click:append="show2 = !show2"
              ></v-text-field>
            </v-col>
            <v-btn color="success">Login</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-layout row class="text-xs-center">
      <v-flex
        xs3
        style="
          background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg');
        "
      >
        <v-card height="500px"></v-card>
      </v-flex>
      <v-flex xs4 class="grey lighten-4">
        <v-container
          style="position: relative; top: 13%"
          class="text-xs-center"
        >
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form>
              <v-text-field
                prepend-icon="person"
                name="Username"
                label="Username"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="Password"
                label="Password"
                type="password"
              ></v-text-field>
              <v-card-actions>
                <v-btn primary large block>Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: 'Password',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => `The email and password you entered don't match`,
      },
    }
  },
}
</script>

<style lang="css" scoped></style>
