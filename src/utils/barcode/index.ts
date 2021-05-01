/**
 * ---------------------------------------------------------------------
 * This is the configuration object for the JsBarcodeMixin which makes
 * it easier to use the JsBarcode library in a Vue application
 * ---------------------------------------------------------------------
 *
 * HOW TO USE:
 * // Add your input to your markup:
 * // <input v-model="value" @keyup="generateBarcode" />
 * //
 * // Add the SVG to your markup:
 * // <svg id="barcode"></svg>
 *
 * import barcode from '@/util/barcode'
 *
 *  export default {
 *    data() {
 *      return {
 *        value: null
 *      };
 *    },
 *    methods: {
 *      generateBarcode() {
 *        // A second (optional) argument identifies the SVG to use,
 *        // if different from #barcode
 *        barcode(this.value, '#barcode');
 *      }
 *    }
 * }
 * ---------------------------------------------------------------------
 * ADDITIONAL INFO:
 * For more information on JsBarcode, visit the below link
 * @link https://github.com/lindell/JsBarcode
 * ---------------------------------------------------------------------
 */
import JsBarcode from 'jsbarcode2'
import { config } from './config'

/**
 * Returns a barcode image
 *
 * @param text The text to convert to a barcode
 * @param el   Optional element. Default: #barcode
 */
const barcode = (text, el = '#barcode') => {
  JsBarcode(el, text, config)
}

export default barcode
