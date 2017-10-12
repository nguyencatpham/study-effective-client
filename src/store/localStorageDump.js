export default store => next => action => {
  const state = store.getState()
  if (state && state.app) {
    if (typeof localStorage === 'object') {
      try {
        localStorage.setItem('rewood', JSON.stringify(state.app))
      } catch (e) {
        Storage.prototype._setItem = Storage.prototype.setItem
        Storage.prototype.setItem = function () {}
        alert('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.')
      }
    }
  }
    // localStorage.setItem('rewood', JSON.stringify(state.app));

  next(action)
}
