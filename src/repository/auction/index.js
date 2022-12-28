import auction from '../../services/api/auction'

export async function getAuctions() {
  try {
    const response = await auction.get(`/leiloes`);
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function getAuction(id) {
  try {
    const response = await auction.get(`/leiloes/${id}`);
    return response.data;
  } catch(error) {
    return {};
  }
}
