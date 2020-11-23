<template>
  <v-row dense>
    <v-col v-for="(item, i) in items" :key="i" cols="12">
      <v-card :color="" dark max-width="400">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="item.title"></v-card-title>

            <v-card-subtitle
              class="display-1"
              v-text="item.amount"
            ></v-card-subtitle>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: '#1F7087',
        title: 'Total amount',
        amount: '1 000 000.00',
      },
      {
        color: '#952175',
        title: 'Cash',
        amount: '300 000.00',
      },
      {
        color: '#952175',
        title: 'Card',
        amount: '300 000.00',
      },
      {
        color: '#952175',
        title: 'UDS',
        amount: '300 000.00',
      },
      {
        color: '#952175',
        title: 'Discount',
        amount: '300 000.00',
      },
      {
        color: '#952175',
        title: 'Check quantity',
        amount: '300 000.00',
      },
      {
        color: '#952175',
        title: 'Check average',
        amount: '300 000.00',
      },
    ],
  }),
}
</script>

<style scoped></style>
