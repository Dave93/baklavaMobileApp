<template>
  <div class="container"></div>
</template>

<script>
export default {
  middleware: 'authenticated'
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
