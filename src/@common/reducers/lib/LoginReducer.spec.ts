import { expect } from 'chai';
import { createAction } from './ActionCreator';
import { DID_LOGIN_SUCCESSFULLY, DID_PROVIDE_EMAIL, ILoginState, IUser, loginReducer } from './LoginReducer';

describe('Given no user exists', () => {
    describe('When successfully logging in', () => {
        it('Then user should exist on state', () => {
            // Arrange
            const state: ILoginState = {
                error: undefined,
                isLoading: false,
                user: undefined,
            };
            const payload: IUser = {
                email: 'me@mail.com',
                id: '123',
                profilePicture: 'me.jpg',
            };
            const action = createAction(DID_LOGIN_SUCCESSFULLY, payload);

            // Act
            const newState = loginReducer(state, action);

            // Assert
            expect(newState.user!.email).to.equal('me@mail.com');
        });
    });
    describe('When providing email address', () => {
        it('Then email address should exist on state', () => {
            // Arrange
            const state: ILoginState = {
                error: undefined,
                isLoading: false,
                user: undefined,
            };
            const payload: string = 'me@mail.com';
            const action = createAction(DID_PROVIDE_EMAIL, payload);

            // Act
            const newState = loginReducer(state, action);

            // Assert
            expect(newState.user!.email).to.equal('me@mail.com');
        });
    });
});
