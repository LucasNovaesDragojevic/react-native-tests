import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { SENDED, NOT_SENDED } from '../../../../../src/business/constants/offerStatus'
import SendOffer from '../../../../../src/screens/Auction/components/SendOffer'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('src/screens/Auction/components/SendOffer', () => {
    it('should send offer when the buttom is clicked', async () => {
        const sendOffer = jest.fn(() => new Promise(resolve => resolve(SENDED)))
        const { 
            getByPlaceholderText, 
            getByAccessibilityHint,
            getByText
        } = render(
            <SendOffer 
                sendOffer={sendOffer} 
                color={'blue'}/>
        )
        const input = getByPlaceholderText('R$')
        const buttom = getByAccessibilityHint('Send offer')
        fireEvent.changeText(input, '10')
        fireEvent.press(buttom)
        expect(sendOffer).toHaveBeenCalledWith('10')
        await waitFor(() => {
            expect(getByText(SENDED)).toBeTruthy()
        })
        expect(() => getByText(NOT_SENDED)).toThrow()
    })
})