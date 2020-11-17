<template>
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
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Password"
                required
              ></v-text-field>
            </v-col>
          </v-col>
          <v-btn>Submit</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<style lang="css" scoped>
.container {
  margin: 0 auto;
}
</style>
