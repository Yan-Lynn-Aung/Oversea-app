
export default {
	state: {
		locale: "en",
		locales: [
			{ locale: 'en', description: 'English' },
			{ locale: 'ja', description: '日本語' }
		]
	},
	getters: {
		getLocale: (state) => {
			var locale = localStorage.getItem("locale");
			if (locale)
				state.locale = locale;
			return state.locale;
		},
		getLocales: (state) => state.locales
	},
	mutations: {
		setLocale(state, locale) {
			state.locale = locale;
			localStorage.setItem("locale", locale);
		}
	}
}