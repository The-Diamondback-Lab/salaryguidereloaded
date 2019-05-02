// Packages
import { GeneralError } from '@feathersjs/errors'
import $ from 'jquery'

/**
 * @file UI utility functions
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Checks if an element is in the viewport.
 *
 * @param {string} selector - A string containing a selector expression
 * @returns {object} A set of booleans for each side of the element
 * @throws {GeneralError}
 */
export const in_viewport = selector => {
  if (!selector) throw new GeneralError('Missing selector.')

  // Get coordinates of the bounding box
  let element = $(selector)
  const bounds = element.offset()

  // Boumds for comparison
  const comparison = {
    height: window.innerHeight || document.documentElement.clientHeight,
    width: window.innerWidth || document.documentElement.clientWidth
  }

  // Build a set of booleans for each side of the original element
  element = {}

  element.top = bounds.top < 0
  element.left = bounds.left < 0
  element.bottom = bounds.bottom > comparison.height
  element.right = bounds.right > comparison.width

  element.any = element.top || element.left || element.bottom || element.right
  element.all = element.top && element.left && element.bottom && element.right

  return element
}
