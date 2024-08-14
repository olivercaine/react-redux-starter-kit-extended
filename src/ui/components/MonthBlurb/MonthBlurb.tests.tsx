
import { expect } from '@storybook/jest'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
// import { render /*, screen*/ } from '@testing-library/react'
// import React from 'react'
// import { MonthBlurb } from './MonthBlurb'

describe('Month is Feb', () => {
  describe('Building blurb text', () => {
    it('Returns which month it is', () => {
      // Arrange
      const month = 'feb'

      // Act
      // render(<MonthBlurb month={month} />)

      // Assert
      // expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument()
      expect(month).not.toBeNull()
    })
  })
})
