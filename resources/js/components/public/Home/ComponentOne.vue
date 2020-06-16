<template>
	<div class="row my-3">
		<div class="col-4 offset-4">
			<div class="card">
				<div class="card-header">
					<h4>Component One</h4>
				</div>
				<div class="card-body">					
					<p>URL Parameter: {{ parameter }}</p>
					<p>API URL from json: {{ API_URL_JSON }}</p>
					<p>API URL from env: {{ API_URL_ENV }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import config from "../../../config.json";

export default {
	data() {
		return {
			parameter: '',
			API_URL_JSON: config.API_URL,
			API_URL_ENV: process.env.MIX_API_URL,
		}
	},
	mounted: function() {
		this.bindPara();		
	},
	watch: {
		$route(to, from) {
			this.bindPara();
		}
	},
	methods: {
		bindPara: function() {
			this.parameter = this.$route.params.id;
		}
	}
}
</script>
<style lang="stylus" scoped>

</style>
