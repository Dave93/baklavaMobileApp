<template>
  <div class="container">
    <ReportCard />
    <nuxt />
  </div>
</template>

<script>
import ReportCard from '~/components/reportCard.vue'
export default {
  components: {
    ReportCard,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}
</style>
