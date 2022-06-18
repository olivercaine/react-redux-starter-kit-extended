import { mount } from 'cypress/react'
import * as React from 'react'
import { Button } from '../../src/ui/basics/Button'

describe('<Button>', () => {
  it('mounts', () => {
    mount(<Button text='Something' callback={undefined} />)
  })
})
