<template>
  <v-card class="mt-4 mx-auto" max-width="400">
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title mb-2" align="center">1 000 000.00</div>
      <div class="subheading grey--text" align="center">Total amount</div>
      <v-divider class="my-2"></v-divider>
      <v-icon class="mr-2" small> mdi-clock </v-icon>
      <span class="caption grey--text font-weight-light"
        >last registration 26 minutes ago</span
      >
    </v-card-text>
    <div>
      <canvas id="myChart"></canvas>
    </div>
  </v-card>
</template>

<script>
// const ctx = document.getElementById('myChart').getContext('2d')
const myChart = document.getElementById('myChart').getContext('2d')
const doughnutChart = new Chart(myChart, {
  type: 'doughnut',
  data: {
    labels: 'Total',
    data: [600000, 300000, 100000],
  },
  options: {},
})
export default {
  data: () => ({
    labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
  }),
}
</script>
.v-sheet--offset { top: -24px; position: relative; }
<style scoped></style>
