<template>
  <v-card class="mx-auto" max-width="400">
    <v-row>
      <v-col cols="9">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline"> Gavali</v-list-item-title>
            <v-list-item-subtitle
              >Report for 17.11.2020y, 12:30 PM
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="3">
        <v-btn>
          <v-icon> mdi-refresh</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6"> 1234567 so'm</v-col>
        <v-col cols="6"> Total amount</v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-list-item-subtitle>CASH</v-list-item-subtitle>
      </v-list-item-icon>
      <v-list-item-subtitle>1 000 000,00</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-list-item-subtitle>CARD</v-list-item-subtitle>
      </v-list-item-icon>
      <v-list-item-subtitle>100 000,00</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-list-item-subtitle>UDS</v-list-item-subtitle>
      </v-list-item-icon>
      <v-list-item-subtitle>134 567,00</v-list-item-subtitle>
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
      <v-btn text> Full Report</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ReportCard',
  data() {
    return {
      labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
      time: 0,
      forecast: [
        {
          day: 'Tuesday',
          icon: 'mdi-white-balance-sunny',
          temp: '24\xB0/12\xB0',
        },
        {
          day: 'Wednesday',
          icon: 'mdi-white-balance-sunny',
          temp: '22\xB0/14\xB0',
        },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
      ],
    }
  },
}
</script>

<style scoped></style>
