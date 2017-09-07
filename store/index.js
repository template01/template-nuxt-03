export const state = () => ({
  locales: ['en', 'nl'],
  locale: 'nl',
  n: 1,
  smallscreen:false
})
//
// export const getters = () => ({
//   getN: state => () => state.n,
//   getsmallscreen: state => () => state.smallscreen,
// })

export const getters = {
  getsmallscreen (state) {
    return state.smallscreen
  },
  getlocale (state) {
    return state.locale
  }
}

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },

  SET_SMALLSCREEN (state, small) {
      state.smallscreen = small;
  },


}
