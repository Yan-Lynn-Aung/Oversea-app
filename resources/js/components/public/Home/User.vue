<template>
    <div>
        <div class="alert alert-primary" v-if="list.length == 0">{{ text }}</div>
        <ul class="list-group" v-else>
            <li v-for="(entity, i) in list" :key="i" class="list-group-item">
                <span class="text-danger pr-2">{{ entity.id }}</span>
                <span class="pr-3">{{ entity.name }}</span>
                <button @click="editEntity(entity)">Edit</button>
            </li>
        </ul>
		<p>New Id Incoming: {{ newId }}</p>		
        <user-form></user-form>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import UserForm from './UserForm';
export default {
    name: "User",
    data: () => {
        return {
            text: "No user record",            
        };
	},
	computed: {
		...mapGetters({
			newId: 'userModule/newId',
			list: 'userModule/userList'
		})
	},
    mounted: function() {
		// --even easier with computed mapGetters
        // this.list = this.$store.getters.userList;
	},
	components: {
		UserForm
	},
	methods: {
		...mapActions({
			editEntity: 'userModule/setSelectedUser'
		})		
	}
};
</script>
<style lang="stylus" scoped></style>