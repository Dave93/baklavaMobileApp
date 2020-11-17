<template>
  <v-app class="shah">
    <v-form>
      <v-container fluid>
        <v-row>
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
        </v-row>
      </v-container>
    </v-form>
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
