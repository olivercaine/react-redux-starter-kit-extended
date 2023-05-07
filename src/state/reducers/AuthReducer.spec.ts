import { expect } from 'chai'
import { authReducer } from './AuthReducer'

describe('AuthReducer', () => {
  describe('On shouldSignIn action', () => {
    it('Should go into submitting state', () => {
      // Arrange
      const payload = {
        email: 'olliecaine@gmail.com',
        password: 'mYPa$$w0rd'
      }
      const action = authReducer.actions.shouldSignIn(payload)

      // Act
      const newState = authReducer.reducer({
        submitting: false
      }, action)

      // Assert
      expect(newState.submitting).to.equal(true)
    })
  })
})
