<template>
  <div class="wrapper">
    <v-form>
      <v-col>
        <v-text-field
          v-model="name"
          name="name"
          label="Name"
          clearable
          solo
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
  </div>
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

<style lang="css" scoped>
* {
  box-sizing: border-box;
}
.wrapper {
  background-color: rgba(0, 0, 0, 0.5);
  margin: auto;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 0 10px #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 500px;
  height: 430px;
}

.wrapper:before {
  background-image: url('~assets/img/1.jpg');
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  content: '';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: -1px !important;
  display: block;
}

.wrapper input {
  margin: 10px 0;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  font-family: poppins;
}
</style>
