<template>
  <v-card class="d-flex my-12" max-width="374">
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
          solo
          v-model="password"
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
</template>
<script>
export default {
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
        emailMatch: () => `The email and password you entered don't match`,
      },
    }
  },
}
</script>

<style lang="css" scoped></style>
