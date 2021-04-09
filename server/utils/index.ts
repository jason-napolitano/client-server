// Dependencies
const { promises: Fs } = require('fs')

/**
 * Check if a file exists
 *
 * @param path
 */
export async function exists(path: string) {
  try {
    await Fs.access(path)
    return true
  } catch {
    return false
  }
}

