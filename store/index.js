export const state = () => ({
  locales: ['en', 'nl'],
  locale: 'nl'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
      
    }
  }
}
