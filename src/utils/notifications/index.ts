// ----------------------------------------------------------------------------
// MP3 Files
const successSound = require('./audio/success.mp3')
const failureSound = require('./audio/failure.mp3')
const notifySound = require('./audio/notify.mp3')

const notify = (type = 'notify') => {
  let audio
  switch (type) {
    // Upon Success
    case 'success':
      audio = new Audio(successSound)
      audio.play().then()
      break

    // Upon Failure
    case 'error':
      audio = new Audio(failureSound)
      audio.play().then()
      break

    // Upon notification/by default
    case 'notify':
    default:
      audio = new Audio(notifySound)
      audio.play().then()
      break
  }
}

export default notify
