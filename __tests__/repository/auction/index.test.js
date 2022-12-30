import { getAuctions } from '../../../src/repository/auction'
import auctionApi from '../../../src/services/auctionApi'

jest.mock('../../../src/services/auctionApi')

const mockAuctions = [
    {
        id: 1,
        name: 'Auction',
        description: 'Description of auction'
    }
]

const mockRequest = (response) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: response
            })
        }, 200)
    })
}

const mockRequestError = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject()
        }, 200)
    })
}

describe('repository/auction', () => {
    
    beforeEach(() => {
        auctionApi.get.mockClear()
    })

    describe('getAuctions', () => {
        it('should return a list of auctions', async () => {
            auctionApi.get.mockImplementation(() => mockRequest(mockAuctions))
            const auctions = await getAuctions()
            expect(auctions).toEqual(mockAuctions)
            expect(auctionApi.get).toHaveBeenCalledWith('/auctions')
            expect(auctionApi.get).toHaveBeenCalledTimes(1)
        })

        it('should return a empty list of auctions when request fail', async () => {
            auctionApi.get.mockImplementation(() => mockRequestError())
            const auctions = await getAuctions()
            expect(auctions).toEqual([])
            expect(auctionApi.get).toHaveBeenCalledWith('/auctions')
            expect(auctionApi.get).toHaveBeenCalledTimes(1)
        })
    })
})