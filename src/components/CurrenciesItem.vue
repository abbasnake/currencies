<template>
  <div class="CurrenciesItem" :class="isSelectedClass" @click="onClick">
    <input
      class="CurrenciesItem-checkbox"
      type="checkbox"
      :checked="item.isSelected"
    />
    <span class="CurrenciesItem-name">
      {{ item.name }}
    </span>
  </div>
</template>

<script>
import { currencyValidator } from '../utils/helpers'

export default {
  name: 'CurrenciesItem',
  props: {
    item: {
      type: Object,
      required: true,
      validator: obj => currencyValidator(obj)
    }
  },
  computed: {
    isSelectedClass() {
      return this.item.isSelected ? 'CurrenciesItem-isSelected' : ''
    }
  },
  methods: {
    onClick() {
      this.$store.dispatch('toggleCurrencyStatus', this.item.name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.CurrenciesItem {
  background-color: $white;
  border: 1px solid $grey-light;
  border-radius: 3px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 100ms linear;

  &-isSelected {
    background-color: $grey-dark;

    & .CurrenciesItem-name {
      color: $white;
    }
  }

  &:hover {
    border-color: $grey-dark;
    border-width: 2px;
  }

  &-name {
    color: $blue-dark;
    transition: color 200ms linear;
  }

  &-checkbox {
    margin: 0 5px;
  }
}
</style>
