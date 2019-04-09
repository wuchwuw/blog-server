const { formatDate } = require('../../common/tools.js')

test('format date friendly', () => {
  expect(formatDate(new Date(), true)).toBe('几秒前')
})

test('format date', () => {
  expect(formatDate(new Date(), false)).toMatch(/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}/)
})