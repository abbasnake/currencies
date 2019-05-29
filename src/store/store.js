import Vue from 'vue'
import Vuex from 'vuex'

import {
  cloneObject,
  selectedCurrencies,
  sortAlphabetically
} from '../utils/helpers'

import backupCurrencies from '../utils/backupCurrencies'

Vue.use(Vuex)

const state = {
  currencies: []
}

const getters = {
  currencies: state => sortAlphabetically(state.currencies),
  selectedCurrencies: state => selectedCurrencies(state.currencies)
}

const mutations = {
  updateCurrencies(state, currencies) {
    state.currencies = currencies
  }
}

const actions = {
  async fetchCurrencies({ commit }) {
    try {
      const data = await fetch(
        'https://openexchangerates.org/api/currencies.json'
      )
      const json = await data.json()

      const currencies = []

      for (const currency in json) {
        currencies.push({ name: currency, isSelected: false })
      }

      commit('updateCurrencies', currencies)
    } catch (error) {
      console.log('ERROR: STORE -> fetchCurrencies -> error', error)

      commit('updateCurrencies', backupCurrencies)
    }
  },
  toggleCurrencyStatus({ commit, state }, currencyName) {
    const clone = cloneObject(state.currencies)
    const currency = clone.find(item => item.name === currencyName)

    if (currency) {
      currency.isSelected = !currency.isSelected
      commit('updateCurrencies', clone)
    } else {
      console.log(
        'ERROR: STORE -> toggleCurrencyStatus -> error',
        `couldn't find currency with name: ${currencyName}`
      )
    }
  }
}

const store = new Vuex.Store({ state, getters, mutations, actions })

export default store
