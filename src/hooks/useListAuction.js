import { useState, useEffect } from 'react'
import { getAuctions } from '../repository/auction'

export default function useAuctionList() {
  const [auctions, setAuctions] = useState([])

  const updateAuctions = async () => {
    const auctionsUpdateds = await getAuctions()
    setAuctions(auctionsUpdateds)
  }

  useEffect(() => {
    updateAuctions()
  }, [])

  return [ auctions, updateAuctions ]
}