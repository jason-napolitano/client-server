// Dependencies
const { promises: Fs } = require('fs')

/**
 * Check if a file exists
 *
 * @param path
 *
 * @returns {boolean}
 */
export async function exists(path: string) {
  return !!(await Fs.access(path))
}

