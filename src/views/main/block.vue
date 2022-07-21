<template>
  <div>
    <p>{{ paramsQuery.name }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['paramsQuery'])
  }
}
</script>

<style lang="scss" scoped>
</style>
