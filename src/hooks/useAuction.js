import { useState, useEffect } from 'react'
import { getAuction } from '../repository/auction'
import { addOffer, getAuctionOffer } from '../repository/offer'
import { validOffer, validNumberFormatOfOffer } from '../business/validators/offer'
import { realToDecimal } from '../business/formatters/money'
import { VALID, NOT_SENDED, SENDED } from '../business/constants/offerStatus'

export default function useAuction(id) {
  const [auction, setAuction] = useState({})

  const updateAuction = async () => {
    const auctionUpdated = await getAuction(id)
    const offersUpdateds = await getAuctionOffer(id)
    setAuction({ ...auctionUpdated, offers: offersUpdateds })
  };
  
  const sendOffer = async (value) => {
    const offerStatus = validNumberFormatOfOffer(value);
    if (offerStatus !== VALID) {
      return offerStatus
    }

    const valueAsNumber = realToDecimal(value)
    const offerState = validOffer(valueAsNumber, auction)
    if (offerState !== VALID) {
      return offerState
    }

    const offerFormatted = { 
      value: valueAsNumber, 
      auctionID: auction.id 
    }

    const added = await addOffer(offerFormatted)
    if (added) {
      await updateAuction()
      return SENDED
    }

    return NOT_SENDED
  };

  useEffect(() => {
    updateAuction()
  }, [])

  return [ auction, updateAuction, sendOffer ]
}

