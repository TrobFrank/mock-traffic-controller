import { describe, expect, it } from 'vitest'
import App from '../App';
import intersectionData from '../mock/intersectionData'
import trafficFlow from '../mock/trafficFlow'
import { render, screen } from '@testing-library/react';

describe('traffic controller', () => {
  it('trafficFlow defined as array', () => {
      expect(Array.isArray(trafficFlow)).toBe(true)
  })

  it('intersectionData defined as array', () => {
    expect(Array.isArray(intersectionData)).toBe(true)
  }) 

  it('uses flex on intersections div', async () => {
    render(<App />)
    const element = screen.getByRole('main')
    expect(element.className).toEqual('intersections')
    expect(getComputedStyle(element).display).toEqual('flex')
  })

})