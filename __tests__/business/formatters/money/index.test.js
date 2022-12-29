import { decimalToReal, realToDecimal } from '../../../../src/business/formatters/money'

describe('business/formatters/money', () => {
    describe('Brazilian real to decimal format', () => {
        it('should return 8.59 when value is 8,59', () => {
            const result = realToDecimal('8,59')
            expect(result).toBe(8.59)
        })
    })

    describe('Decimal to Brazilian Real', () => {
        it('should return R$ 8,59 when value is 8,59', () => {
            const result = decimalToReal(8.59)
            expect(result).toMatch(/R\$\s8,59/)
        })
    })
})