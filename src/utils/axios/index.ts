/**
 * This is an initialization file for the AxiosMixin. It can also be used as a
 * stand-alone Axios client for other areas of the application such as the Vuex
 * store. This allows for shared Axios library instances
 * ----------------------------------------------------------------------------
 */
import library from 'axios'
import { config } from './config'

const axios = library.create(config)

export default axios
