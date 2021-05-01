/**
 * ---------------------------------------------------------------------
 * This is the configuration object for the SweetAlertsMixin which makes
 * it easier to use the SweetAlerts2 library in a Vue application
 * ---------------------------------------------------------------------
 *
 * HOW TO USE:
 * import SweetAlertsMixin from '@/mixins/sweetalerts'
 *
 * export default {
 *   mixins: [ SweetAlertsMixin ],
 *   created () {
 *     this.swal('Title', 'Body', 'info|success|error|question');
 *   }
 * }
 */
const config = {
  icon: 'info',
  // Use as a toast?
  toast: false,
  // Timeout timer
  timer: 10000,
  // Cancel button configuration
  showCancelButton: true,
  cancelButtonColor: '#db2f32',
  cancelButtonText: 'Close',
  // Confirm  button configuration
  showConfirmButton: false,
  confirmButtonColor: '#89ac56',
  confirmButtonText: 'Confirm'
  // Other config ...
}

export default config
