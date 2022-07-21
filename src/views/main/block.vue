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
  },
  watch: {
    paramsQuery(val) {
      console.log('dd', val)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
