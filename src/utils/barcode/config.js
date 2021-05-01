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
 * import JsBarcodeMixin from '@/mixins/jsbarcode'
 *
 *  export default {
 *    mixins: [ JsBarcodeMixin ],
 *    data() {
 *      return {
 *        value: null
 *      };
 *    },
 *    methods: {
 *      generateBarcode() {
 *        // A second (optional) argument identifies the SVG to use,
 *        // if different from #barcode
 *        this.barcode(this.value, '#barcode');
 *      }
 *    }
 * }
 * ---------------------------------------------------------------------
 * ADDITIONAL INFO:
 * For more information on JsBarcode, visit the below link
 * @link https://github.com/lindell/JsBarcode
 * ---------------------------------------------------------------------
 */
const config = {
  format: 'code39'
  // OPTION : VALUE
  // lineColor: '#0aa',
  // width: 4,
  // height: 40,
  // text: undefined,
  // fontOptions: '',
  // font: 'monospace',
  // textAlign: 'center',
  // textPosition: 'bottom',
  // textMargin: 2,
  // fontSize: 20,
  // background: '#FFFFFF',
  // lineColor: '#000000',
  // margin: 10,
  // marginTop: undefined,
  // marginBottom: undefined,
  // marginLeft: undefined,
  // displayValue: false
}

export { config }
