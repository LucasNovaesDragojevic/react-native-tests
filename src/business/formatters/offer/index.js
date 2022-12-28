export function formatHighestOfferOfAuction(offers, initialValue) {
  const highestOffer = offers.reduce(
    (highest, actual) => actual.value > highest ? actual.value : highest,
    initialValue
  )
  return highestOffer
}