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
    <v-card class="mx-auto" max-width="400">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">
            San Francisco
          </v-list-item-title>
          <v-list-item-subtitle
            >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <v-row align="center">
          <v-col class="display-3" cols="6"> 23&deg;C </v-col>
          <v-col cols="6">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sun.png"
              alt="Sunny image"
              width="92"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-send</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cloud-download</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>48%</v-list-item-subtitle>
      </v-list-item>

      <v-slider
        v-model="time"
        :max="6"
        :tick-labels="labels"
        class="mx-4"
        ticks
      ></v-slider>

      <v-list class="transparent">
        <v-list-item v-for="item in forecast" :key="item.day">
          <v-list-item-title>{{ item.day }}</v-list-item-title>

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-subtitle class="text-right">
            {{ item.temp }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text> Full Report </v-btn>
      </v-card-actions>
    </v-card>
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
  background-image: url('~assets/img/2.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;
  content: '';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: -1px !important;
  display: block;
}

.wrapper input[type='text'] {
  margin: 10px 0;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  font-family: poppins;
}
</style>
