<template>
  <ReportCard />
</template>

<script>
import ReportCard from '~/components/reportCard.vue'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
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
