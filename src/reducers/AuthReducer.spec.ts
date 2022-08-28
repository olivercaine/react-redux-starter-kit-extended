import { expect } from 'chai'
import { AuthActions, authReducer } from './AuthReducer'

describe('AuthReducer', () => {
  describe('On shouldSignIn action', () => {
    it('Should go into submitting state', () => {
      // Arrange
      const payload = {
        email: 'olliecaine@gmail.com',
        password: 'mYPa$$w0rd'
      }

      // Act
      const newState = authReducer(undefined, AuthActions.shouldSignIn(payload))

      // Assert
      expect(newState.submitting).to.equal(true)
    })
  })
})
