import auction from '../../services/api/auction'

export async function getAuctionOffer(id) {
  try {
    const response = await auction.get(`/lances?leilaoId=${id}&_sort=valor&_order=desc`)
    return response.data
  } catch(error) {
    return []
  }
}

export async function addOffer(offer) {
  try {
    await auction.post(`/lances`, offer)
    return true
  } catch(error) {
    return false
  }
}