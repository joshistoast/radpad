import { defineStore } from 'pinia'
import { Themes, Theme } from './types'

export const useSettings = defineStore('settings', {
  state: () => ({
    themes: [
      {
        id: '9a388446-db7a-4a9c-a29d-659ab8e31bca',
        name: 'Rad',
        canEdit: false,
        palette: {
          text: '#fff',
          background: '#000000',
          foreground: '#171717',
          primary: '#F43F5E',
          accent: '#F43F5E',
          muted: '#737373',
          elementBg: '#262626',
          elementBgHover: '#404040',
        }
      }
    ] as Theme[],
    currentThemeId: '9a388446-db7a-4a9c-a29d-659ab8e31bca',
  }),
  getters: {
    getTheme: (state) => {
      return state.themes.find(theme => theme.id === state.currentThemeId)
    },
    appThemes: (state) => {
      // return themes that cannot be edited
      return state.themes.filter(theme => !theme.canEdit)
    },
    userThemes: (state) => {
      // return themes that can be edited or deleted
      return state.themes.filter(theme => theme.canEdit)
    },
  },
  actions: {},
  persistedState: {
    includePaths: ['userThemes', 'currentThemeId'],
  }
})
