<template>
    <div>
        <div class="card">
            <div class="card-body">
                <validation-observer ref="form">
                    <form @submit.prevent="saveEntity">
                        <input type="text" name id v-model="entity.id" readonly class="disabled" />
                        <validation-provider v-slot="v" rules="required">
                            <input type="text" name id v-model="entity.name" />
                            <span class="input-error">{{ v.errors[0] }}</span>
                        </validation-provider>
                        <button type="submit">Submit</button>
                    </form>
                </validation-observer>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { ValidationObserver, ValidationProvider, extend, localize } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import en from "../../../lang/en/validation";
import ja from "../../../lang/ja/validation";

localize({
	en: en,
	ja: ja
});

localize('ja');

extend("required", required);

export default {
    name: "UserForm",
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data: function() {
        return {};
    },
    methods: {
        saveEntity: function() {
			this.$refs.form.validate().then((success) => {
				if (!success) return;

				if (!this.entity.id) {
					this.entity.id = this.newId;
				}
				this.$store
					.dispatch("userModule/updateUserList", this.entity)
					.then(() => {
						this.$store.dispatch("userModule/clearSelectedUser");
						this.$refs.form.reset();
					});					
				})
            
        }
    },
    computed: {
        ...mapGetters({
            entity: "userModule/selectedUser",
            newId: "userModule/newId"
        })
    }
};
</script>
<style scoped>
.input-error {
	font-size: 12px;
	color: red;
}
</style>