import SweetAlert from 'sweetalert2'
import config from './config.js'

const Swal = SweetAlert
const alert = Swal.mixin(config)

const swal = (title, message = '', config = { /* ... */ }) => {
  const newConfig = { title: title, text: message, ...config }
  alert.fire(newConfig).then()
}

export default swal
