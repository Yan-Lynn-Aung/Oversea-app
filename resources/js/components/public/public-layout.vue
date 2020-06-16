<template>
    <div>
        <publicMenu></publicMenu>
        <transition name="fade" mode="out-in">
            <router-view :key="'a' + $route.params.id"></router-view>
        </transition>
    </div>
</template>
<script>
import publicMenu from "../menu/publicMenu";

export default {
    data() {
        return {};
    },
    components: {
        publicMenu
    },
    mounted() {}
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>
