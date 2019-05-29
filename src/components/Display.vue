<template>
  <div class="Display">
    <div class="Display-container">
      <template v-for="item in selectedCurrencies">
        <DisplayItem :key="item.name" :item="item" />
      </template>
    </div>
  </div>
</template>

<script>
import DisplayItem from './DisplayItem'

export default {
  name: 'Display',
  components: {
    DisplayItem
  },
  computed: {
    selectedCurrencies() {
      return this.$store.getters['selectedCurrencies']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';

.Display {
  border-radius: 3px;
  border: 1px solid $grey-dark;
  overflow: hidden;
  overflow-y: auto;
  flex: 1;

  &-container {
    @include responsiveLayout;
  }
}
</style>
