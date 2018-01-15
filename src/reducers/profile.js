import { RECEIVE_BALANCE } from '../actions'

export default (state={}, {type, balance}) => {
  switch(type) {
    case RECEIVE_BALANCE:
      return balance
    default:
      return state
  }
}
