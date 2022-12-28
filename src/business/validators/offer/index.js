import {
  VALID,
  INVALID,
  LESS_THAN_INITIAL_VALUE,
  LESS_OR_EQUAL_THAN_OFFERS
} from '../../../business/constants/offerStatus'

export function validNumberFormatOfOffer(valueAsString) {
  if (valueAsString.match(/^[1-9]+[0-9]*(\,[0-9]{1,2})?$/)) {
    return VALID
  }

  return INVALID
}

export function validOffer(value, { offers, initialValue }) {
  const offerGreaterThanOrEqualToInitial = validOfferGreaterThanOrEqualToInitial(value, initialValue)
  const oOfferGreatherThanOtherOffers = validOfferGreatherThanOtherOffers(value, offers)
  
  if(oOfferGreatherThanOtherOffers !== VALID) {
    return oOfferGreatherThanOtherOffers
  }
  
  if(offerGreaterThanOrEqualToInitial !== VALID) {
    return offerGreaterThanOrEqualToInitial
  }

  return oOfferGreatherThanOtherOffers
}

function validOfferGreaterThanOrEqualToInitial(value, initialValue) {
  if (value >= initialValue) {
    return VALID
  }

  return LESS_THAN_INITIAL_VALUE
}

function validOfferGreatherThanOtherOffers(value, offers) {
  const offerGreatherThanValue = offers.find(offer => offer.value >= value)
  if (!offerGreatherThanValue) {
    return VALID
  }

  return LESS_OR_EQUAL_THAN_OFFERS
}
