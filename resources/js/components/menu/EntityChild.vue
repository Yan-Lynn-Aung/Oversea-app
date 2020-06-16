<template>
	<div>
		<div class="card">
			<div class="card-body">
				<input type="text" name="" id="" v-model="entity.id" readonly class="disabled">
				<input type="text" name="" id="" v-model="entity.name">
				<button @click="saveEntity()">Submit</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "EntityChild",
		components: {

		},
		props: {
			entity: {
				id: Number,
				name: String
			}
		},
		data() {
			return {
				id: this.entity.id,
				name: this.entity.name				
			}
		},
		methods: {
			saveEntity: function() {				
				this.$emit('entitySaved', {
					id: this.entity.id,
					name: this.entity.name
				});
			}
		}
	}
</script>
<style scoped>
	.disabled {
		background-color: #F0F0F0;
	}
</style>