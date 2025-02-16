import { describe, expect, it } from 'vitest'
import { sum } from '../src'

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2, 3)).toBe(6)
  })
})
