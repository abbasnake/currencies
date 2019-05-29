<template>
  <div id="app">
    <Display />
    <Currencies />
  </div>
</template>

<script>
import Currencies from './components/Currencies'
import Display from './components/Display'

export default {
  name: 'app',
  components: {
    Currencies,
    Display
  },
  created() {
    this.$store.dispatch('fetchCurrencies')
  }
}
</script>

<style lang="scss">
@import './scss/_reset.scss';

#app {
  height: 100%;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
</style>
