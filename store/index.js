export const state = () => ({
  locales: ['en', 'nl'],
  locale: 'nl',
  n: 1,
  smallscreen: null,
  xlscreen: false,
  initiated: false,
  splashimagesloaded : false,
  showcontact: false
})
//
// export const getters = () => ({
//   getN: state => () => state.n,
//   issmallscreen: state => () => state.smallscreen,
// })

export const getters = {
  issmallscreen(state) {
    return state.smallscreen
  },
  isxlscreen(state) {
    return state.xlscreen
  },
  getlocale(state) {
    return state.locale
  },
  showContact(state) {
    return state.showcontact
  },

  getinitiated(state) {
    return state.initiated
  },
  getsplashimagesloaded(state) {
    return state.splashimagesloaded
  }
}

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },

  SET_SMALLSCREEN(state, small) {
    state.smallscreen = small;
  },

  SET_XLSCREEN(state, xl) {
    state.xlscreen = xl;
  },

  SET_HIDECONTACT(state, showcontact) {
    state.showcontact = false;
  },

  SET_SHOWCONTACT(state, showcontact) {
    state.showcontact = true;
  },

  SET_SPLASHIMAGESLOADED(state, splashimagesloaded) {
    state.splashimagesloaded = true;
  },


  SET_INITIATED(state, initiated) {
    state.initiated = true;
  },

}
