<template>
    <v-btn icon class="mx-0" @click="clickMethod" :disabled="isDisabled" v-if="isVisible">
        <v-icon>{{iconName}}</v-icon>
    </v-btn>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    mixins: [VisiblePropMixin],
    props: {
        disabled: Boolean,
        click: Function,
        iconName: String,
        loading: Boolean
    },

    computed: {
        isDisabled() {
            return this.disabled !== undefined ? this.disabled : false;
        },
        clickMethod() {
            return this.click !== undefined ? this.click : () => {};
        }
    }
};
</script>

<style>
</style>
