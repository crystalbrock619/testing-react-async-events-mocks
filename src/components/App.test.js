import React from 'react'
import App from './App'
import * as rtl from '@testing-library/react'

describe('App', () => {
  afterEach(rtl.cleanup)
  beforeEach(() => {
    // whatever needs to happen befere each test
  })
  // afterEach()
  // beforeEach()

  it('displays the correct types', () => {
    // it renders Health text
    // it renders Morale text
    // QUESTIONABLE TEST ?
  })

  it('displays the correct data', () => {
    // it renders 100 for Health
    // it renders 100 for Health
    // QUESTIONABLE TEST ?
  })

  it('displays the correct button', () => {
    // it render specifically
    // exercise, eatJunkFood and catchUpWithFriends
    // QUESTIONABLE TEST ?
  })

  it('clicking eat junk food changes health and morale', () => {
    // want to do it?
  })

  it('displays the correct name starting with the API data', async () => {

  })
})
