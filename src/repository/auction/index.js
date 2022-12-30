import auction from '../../services/auctionApi'

export async function getAuctions() {
  try {
    const response = await auction.get(`/auctions`);
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function getAuction(id) {
  try {
    const response = await auction.get(`/auctions/${id}`);
    return response.data;
  } catch(error) {
    return {};
  }
}
