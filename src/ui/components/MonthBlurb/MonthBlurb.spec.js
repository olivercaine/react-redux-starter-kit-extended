import React from 'react'
import { MonthBlurb } from '.'
import { shallow } from '../../../../tests/enzyme-wrapper'

describe('Month is Feb', () => {
  describe('Building blurb text', () => {
    it.skip('Returns which month it is', () => {
      // Arrange
      const month = 'feb'

      // Act
      const text = shallow(<MonthBlurb month={month} />)

      // Assert
      expect(text).to.equal('The current month is feb according to TypeScript')
    })
  })
})
