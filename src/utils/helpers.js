const cloneObject = obj => JSON.parse(JSON.stringify(obj))

const sortAlphabetically = currencies =>
  currencies.sort((a, b) => (a.name < b.name ? -1 : 1))

const selectedCurrencies = currencies => {
  const clone = cloneObject(currencies)
  const onlySelectedCurrencies = clone.filter(currency => currency.isSelected)
  const sortedCurrencies = sortAlphabetically(onlySelectedCurrencies)

  return sortedCurrencies
}

const currencyValidator = item => {
  const { name, isSelected } = item

  const isValidName = typeof name === 'string' && name.length === 3
  const isValidSelectionStatus = typeof isSelected === 'boolean'

  return isValidName && isValidSelectionStatus
}

export {
  cloneObject,
  selectedCurrencies,
  currencyValidator,
  sortAlphabetically
}
