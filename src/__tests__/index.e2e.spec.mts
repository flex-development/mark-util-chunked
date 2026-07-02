/**
 * @file E2E Tests - api
 * @module mark-util-chunked/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-util-chunked'

describe('e2e:mark-util-chunked', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
