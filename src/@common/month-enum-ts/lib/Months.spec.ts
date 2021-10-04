import { expect } from 'chai';
import { Months } from './Months';

describe('Given January', () => {
    describe('When getting it\'s index', () => {
        it('Then it should be 0', () => {
            expect(Months.Jan).to.equal(0);
        });
    });
});
