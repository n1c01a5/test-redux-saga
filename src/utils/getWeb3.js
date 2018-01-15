import _ from 'lodash'

import Eth from 'ethjs'
import { ERRORS } from '../constants/ERRORS'

export default () => new Promise((resolve, reject) => {
  let web3Instance

  !_.isUndefined(window.web3) && !_.isUndefined(window.web3.currentProvider)
    ? web3Instance = new Eth(window.web3.currentProvider)
    : web3Instance = new Eth(
        new Eth.providers.HttpProvider(process.env.ETHEREUM_PROVIDER)
      )

  !_.isUndefined(web3Instance.currentProvider)
    ? resolve(web3Instance)
    : reject(new Error({'error': ERRORS.WEB3_NOT_RESOLVED}))
})
