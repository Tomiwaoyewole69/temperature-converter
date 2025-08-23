const inputNumber = document.querySelector(".text")
const selectElement = document.querySelector('select')
const resultInput = document.querySelector(".result")

function convertToCelsius(temp) {
  return Math.round((temp - 32) * (5/9 * 10)) / 10
}

function convertToFahrenheit(temp) {
  return Math.round(((temp * 1.8) + 32) * 10) / 10
}

function calculateTemperature() {
  if (inputNumber.value && selectElement.value == 'celsius') {
    const temperature = convertToFahrenheit(Number(inputNumber.value))
    resultInput.value = `${temperature}F`
  }
  else if (inputNumber.value && selectElement.value == 'fahrenheit') {
    const temperature = convertToCelsius(Number(inputNumber.value))
    resultInput.value = `${temperature}C`
  }
  else {
    resultInput.value = ''
  }
}

selectElement.addEventListener('change', calculateTemperature)

inputNumber.addEventListener('keyup', calculateTemperature)
