import types from '../mutationsTypes'

export default {
  login(store) {
    setTimeout(() => {
      store.commit(types.LOGIN)
    }, 1000)
  }
}