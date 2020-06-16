
let userList = [
	{
		id: 1,
		name: 'John',
	},
	{
		id: 2,
		name: 'Wick',
	},
]

export default {
	namespaced: true,
	state: {
		selectedUser: {},
		userList: userList,
		newId: 0
	},
	getters: {
		selectedUser: function (state) {
			return state.selectedUser;
		},
		userList: function (state) {
			return state.userList;
		},
		newId(state) {
			let entities = state.userList.filter(
				x => x.id == Math.max(...state.userList.map(y => Number(y.id)))
			);
			if (entities.length > 0) {
				let entity = entities[0];
				state.newId = entity.id + 1;
			} else {
				state.newId = 1;
			}
			return state.newId;
		}
	},
	mutations: {
		setSelectedUser(state, user) {
			state.selectedUser = {
				id: user.id,
				name: user.name
			};
		},
		updateUserList(state, user) {
			let t = state.userList.find(x => x.id == user.id);
			if (t)
				t.name = user.name;
			else {
				state.userList.push(user);
			}				
		},
		clearSelectedUser(state) {
			state.selectedUser = {}
		}
	},
	actions: {
		setSelectedUser(context, user) {
			context.commit('setSelectedUser', user);
		},
		updateUserList(context, user) {
			return new Promise((resolve, reject) => {
				context.commit('updateUserList', user);
				resolve();
			});			
		},
		clearSelectedUser(context) {
			context.commit('clearSelectedUser');
		}
	}
}