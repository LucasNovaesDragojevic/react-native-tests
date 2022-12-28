export function decimalToReal(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export function realToDecimal(value) {
  return parseFloat(value.replace('.', '').replace(',', '.'))
}