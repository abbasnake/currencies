<template>
  <div class="Currencies">
    <div class="Currencies-container" v-if="currencies.length">
      <template v-for="item in currencies">
        <CurrenciesItem :key="item.name" :item="item" />
      </template>
    </div>
    <div class="Currencies-spinner" v-else />
  </div>
</template>

<script>
import CurrenciesItem from './CurrenciesItem'

export default {
  name: 'Currencies',
  components: {
    CurrenciesItem
  },
  computed: {
    currencies() {
      return this.$store.getters['currencies']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';

.Currencies {
  flex: 4;
  overflow: hidden;
  overflow-y: auto;

  &-container {
    @include responsiveLayout;
  }

  &-spinner {
    border: 3px solid rgba(0, 0, 0, 0.2);
    border-top-color: $blue-dark;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 30px auto;
    animation: spin 1s ease-in-out infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
