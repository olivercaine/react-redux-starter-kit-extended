import { expect } from 'chai';
import { createAction } from './ActionCreator';
import { DID_GET_TOKEN, SHOULD_DELETE_TOKEN, tokenReducer } from './TokenReducer';

describe('Given a user', () => {
    describe('When receiving a token', () => {
        it('Then it should get set on state', () => {
            // Arrange
            const state = undefined;
            const payload: string = 'MyNewT0ken';
            const action = createAction(DID_GET_TOKEN, payload);

            // Act
            const newState = tokenReducer(state, action);

            // Assert
            expect(newState).to.equal(payload);
        });
    });
    describe('When wanting to delete token', () => {
        it('Then it should no longer be on the state', () => {
            // Arrange
            const state = 'authenticatedToken';
            const action = createAction(SHOULD_DELETE_TOKEN);

            // Act
            const newState = tokenReducer(state, action);

            // Assert
            // tslint:disable-next-line
            expect(newState).to.equal(null);
        });
    });
});
