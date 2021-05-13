const { memos } = require('../models');
describe('memos Model', () => {
    test('Total of memos is 5', async () => {
        const total = await memos.count();
        expect(total).toBe(5);
    });
});