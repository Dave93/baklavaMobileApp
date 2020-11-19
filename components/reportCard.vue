<template>
  <v-card class="mx-auto" max-width="400">
    <v-row>
      <v-col cols="9">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">Gavali</v-list-item-title>
            <v-list-item-subtitle
              >Report for 17.11.2020y, 12:30 PM</v-list-item-subtitle
            >
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
      <v-row align="right"> Total amount </v-row>
      <v-row align="center" class="display-1"> 1234567 so'm </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item>
        <v-list-item-subtitle>CASH</v-list-item-subtitle>
      </v-list-item>
      <v-list-item-subtitle>1 000 000,00</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item>
        <v-list-item-subtitle>CARD</v-list-item-subtitle>
      </v-list-item>
      <v-list-item-subtitle>100 000,00</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item>
        <v-list-item-subtitle>UDS</v-list-item-subtitle>
      </v-list-item>
      <v-list-item-subtitle>134 567,00</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item>
        <v-list-item-subtitle>Discount</v-list-item-subtitle>
      </v-list-item>
      <v-list-item-subtitle>100 000,00</v-list-item-subtitle>
    </v-list-item>

    <v-slider
      v-model="time"
      :max="4"
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
      labels: ['Today', 'Yesterday', 'Week', 'Month', 'Year'],
      time: 0,
      forecast: [
        {
          day: 'Yesterday',
          icon: 'mdi-white-balance-sunny',
          temp: '24\xB0/12\xB0',
        },
        {
          day: 'Week',
          icon: 'mdi-white-balance-sunny',
          temp: '22\xB0/14\xB0',
        },
        { day: 'Month', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
      ],
    }
  },
}
</script>

<style scoped></style>
