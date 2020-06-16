<template>
    <div>
        <adminMenu></adminMenu>
        <hr />
        <router-view></router-view>
        <select v-model="$i18n.locale">
            <option v-for="(lang, i) in languages" :key="`Lang${i}`" :value="lang.locale">{{ lang.description }}</option>
        </select>
		<p>{{ text }}</p>
    </div>
</template>
<script>
import adminMenu from "../menu/adminMenu";
import LOCALES from '../../partials/locale';
export default {
	name: "recruiter-home",
    data() {
		
        return {
			languages: LOCALES,
			text: "this is sample sss text."
        };
    },
    components: {
        adminMenu
    },
    mounted() {
		console.log(process.env.MIX_LOCALE);
	}
};
</script>
