<template>
  <div>
    <v-form>
      <v-card elevation="5" class="px-6">
        <v-row>
          <v-col cols="12">
            <v-select
              v-model="defaultPeriodValue"
              :items="filterPeriodTypes"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-menu
              v-model="showFilterDatePickker"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :value="computedDateFormattedMoment"
                  label="Период отчёта"
                  placeholder="Выберите период"
                  v-bind="attrs"
                  :disabled="defaultPeriodValue != 'custom_period'"
                  :readonly="defaultPeriodValue != 'custom_period'"
                  outlined
                  allowed-dates
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filterDatePickerDates"
                locale="ru"
                show-current
                range
                no-title
                @input="showFilterDatePickker = false"
              >
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-select
              v-model="defaultBranch"
              :items="branches"
              label="Филиал"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <v-btn
              :loading="isLoadingData"
              color="primary"
              @click="refreshData"
            >
              Обновить
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
    <v-card
      v-if="totalPrice.length"
      class="mx-auto my-5 bottom-gradient"
      elevation="5"
      outlined
      shaped
      color="purple"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Общая сумма заказов</div>
          <v-list-item-title
            class="headline mb-1 font-weight-medium white--text text-center"
            >{{ totalPrice }}</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card elevation="5" class="my-5">
      <v-card-text>
        <div v-if="pie">
          <v-chart
            ref="pie"
            :options="pie"
            :init-options="initOptions"
            autoresize
          />
        </div>
        <div v-else class="text-center">
          <h2>Отсутствуют данные</h2>
        </div>
      </v-card-text>
    </v-card>
    <v-card
      v-for="price in prices"
      :key="price.LABEL"
      class="mx-auto my-5 bottom-gradient"
      elevation="5"
      outlined
      shaped
      color="purple"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ price.LABEL }}</div>
          <v-list-item-title class="headline mb-1 text-center">
            {{ price.PRICE | money }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card
      v-if="totalPrice.length"
      class="mx-auto my-5 bottom-gradient"
      elevation="5"
      outlined
      shaped
      color="purple"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Общая сумма скидок</div>
          <v-list-item-title
            class="headline mb-1 font-weight-medium white--text text-center"
            >{{ totalDiscount }}</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card
      v-if="totalPrice.length"
      class="mx-auto my-5 bottom-gradient"
      elevation="5"
      outlined
      shaped
      color="purple"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">количество заказов</div>
          <v-list-item-title
            class="headline mb-1 font-weight-medium white--text text-center"
            >{{ orderCount }}</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card
      v-if="totalPrice.length"
      class="mx-auto my-5 bottom-gradient"
      elevation="5"
      outlined
      shaped
      color="purple"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Средная сумма заказов</div>
          <v-list-item-title
            class="headline mb-1 font-weight-medium white--text text-center"
            >{{ priceAverage | money }}</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import { formatWithOptions, parseISO } from 'date-fns/fp'
import { ru } from 'date-fns/locale'
import currency from 'currency.js'
export default {
  filters: {
    money: (value) => {
      return (
        value &&
        currency(+value, {
          symbol: '',
          separator: ' ',
          decimal: ',',
        }).format() + ' сум'
      )
    },
  },
  data: () => ({
    initOptions: {
      renderer: 'canvas',
    },
    prices: [],
    pie: null,
    isLoadingData: false,
    pieInterval: null,
    totalPrice: '',
    totalDiscount: '',
    orderCount: '',
    priceAverage: '',
    filterDatePickerMinDate: new Date().toISOString().substr(0, 10),
    filterDatePickerDates: [new Date().toISOString().substr(0, 10)],
    showFilterDatePickker: false,
    defaultPeriodValue: 'today',
    filterPeriodTypes: [
      {
        text: 'Сегодня',
        value: 'today',
      },
      {
        text: 'Вчера',
        value: 'yesterday',
      },
      {
        text: 'Текущая неделя',
        value: 'week',
      },
      {
        text: 'Текущий месяц',
        value: 'month',
      },
      {
        text: 'Период',
        value: 'custom_period',
      },
    ],
    defaultBranch: 'all',
    branches: [
      {
        text: 'Все',
        value: 'all',
      },
    ],
  }),
  computed: {
    computedDateFormattedMoment() {
      const arrival = this.filterDatePickerDates
      return Array.isArray(arrival)
        ? arrival
            .sort()
            .map((item) => {
              return formatWithOptions({ locale: ru }, 'd MMM', parseISO(item))
            })
            .join(' - ')
        : ''
    },
  },
  async mounted() {
    const { data } = await this.$axios.post(
      'https://crm.istbaklava.uz/rest/1/l6yxn7688v0l6ewl/mysale.getStoreList'
    )
    console.log(data)

    this.branches = [
      {
        text: 'Все',
        value: 'all',
      },
    ]

    if (data.result) {
      data.result.map((item) => {
        this.branches.push({
          text: item.TITLE,
          value: item.ID,
        })
      })
    }

    this.refreshData()
  },
  methods: {
    async refreshData() {
      this.isLoadingData = true

      const { data } = await this.$axios.post(
        'https://crm.istbaklava.uz/rest/1/l6yxn7688v0l6ewl/mysale.getReportMobApp',
        {
          periodType: this.defaultPeriodValue,
          period: this.filterDatePickerDates,
          branch: this.defaultBranch,
        }
      )

      if (data.result.PRICES) {
        const labels = data.result.PRICES.map((price) => price.LABEL)
        const pricesData = data.result.PRICES.map((price) => ({
          value: price.PRICE,
          name: price.LABEL,
        }))
        const pieData = {
          title: {
            text: 'Суммы в разрезе способов оплат',
            x: 'start',
            textStyle: {
              color: '#fff',
            },
          },
          tooltip: {
            trigger: 'item',
            formatter: (params) => {
              return (
                params.name +
                ' <br />' +
                currency(+params.value, {
                  symbol: '',
                  separator: ' ',
                  decimal: ',',
                }).format() +
                ' сум (' +
                params.percent +
                '%)'
              )
            },
          },
          legend: {
            orient: 'horizontal',
            type: 'scroll',
            x: 'center',
            y: 'bottom',
            data: labels,
            textStyle: {
              color: '#fff',
            },
          },
          series: [
            {
              name: 'Способы оплат',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: pricesData,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          ],
        }
        this.pie = pieData

        setTimeout(() => {
          let dataIndex = -1
          const pie = this.$refs.pie
          const dataLen = pie.options.series[0].data.length
          clearInterval(this.pieInterval)
          this.pieInterval = setInterval(() => {
            pie.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex,
            })
            dataIndex = (dataIndex + 1) % dataLen
            pie.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex,
            })
            // 显示 tooltip
            pie.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex,
            })
          }, 1500)
          pie.resize()
        }, 200)
      }

      this.totalPrice =
        currency(+data.result.TOTAL_PRICE, {
          symbol: '',
          separator: ' ',
          decimal: ',',
        }).format() + ' сум'
      this.totalDiscount =
        currency(+data.result.TOTAL_DISCOUNT, {
          symbol: '',
          separator: ' ',
          decimal: ',',
        }).format() + ' сум'
      this.prices = data.result.PRICES

      this.orderCount = +data.result.TOTAL_ORDER_COUNT + ' штук'

      this.priceAverage = data.result.TOTAL_PRICE_AVERAGE

      this.isLoadingData = false
    },
  },
}
</script>
<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0.5, 0.5, 0.8) 0%,
    transparent 72px
  );
}
.echarts {
  width: 100%;
}
</style>
