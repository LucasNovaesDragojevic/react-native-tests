import { renderHook, act } from '@testing-library/react-hooks'
import useListAuction from '../../src/hooks/useListAuction'
import { getAuctions } from '../../src/repository/auction'

jest.mock('../../src/repository/auction')

const mockAuctions = [
    {
        id: 1,
        name: 'Auction',
        description: 'Description of auction'
    }
]

const mockAuctionsUpdated = [
    {
        id: 1,
        name: 'Auction',
        description: 'Description of auction'
    },
    {
        id: 2,
        name: 'Auction 2',
        description: 'Description of auction 2'
    }
]

describe('hooks/useListAuction', () => {
    it('should return a list of auctions and a function to update', async () => {
        getAuctions.mockImplementation(() => mockAuctions)
        const {result, waitForNextUpdate} = renderHook(() => useListAuction())
        expect(result.current[0]).toEqual([])
        await waitForNextUpdate()
        expect(result.current[0]).toEqual(mockAuctions)
        getAuctions.mockImplementation(() => mockAuctionsUpdated)
        await act(() => result.current[1]())
        expect(result.current[0]).toEqual(mockAuctionsUpdated)
    })
})