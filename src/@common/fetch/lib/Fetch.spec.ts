import { expect } from 'chai';
import { merge } from 'merge-anything'

describe('Given two headers', () => {
    describe('When merging them together', () => {
        it('Should become one object', () => {
            // Arrange
            const defaultArgs = { method: 'delete', headers: { 'Content-Type': 'application/json' }, body: { prop1: 'val1', prop2: 'val2' } };
            const additionalArgs = { headers: { Authorization: 'Basic 1234' }, body: { additionalProp: 'val3' } };

            // Act
            const merged = merge(defaultArgs, additionalArgs);

            // Assert
            expect(merged.method).to.equal('delete');
            expect(JSON.stringify(merged.headers)).to.equal(JSON.stringify({ 'Content-Type': 'application/json', 'Authorization': 'Basic 1234' }));
            expect(JSON.stringify(merged.body)).to.equal(JSON.stringify({ prop1: 'val1', prop2: 'val2', additionalProp: 'val3' }));
        });
    });
});
