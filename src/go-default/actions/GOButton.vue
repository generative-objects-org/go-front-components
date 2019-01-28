<template>
    <v-btn
        :disabled="isDisabled"
        @click="clickMethod"
        :loading="isLoading"
        ripple
        v-if="isVisible"
    >{{label}}</v-btn>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    mixins: [VisiblePropMixin],
    props: {
        disabled: Boolean,
        click: Function,
        label: String,
        loading: Boolean
    },

    computed: {
        isDisabled() {
            return this.disabled !== undefined ? this.disabled : false;
        },
        isLoading() {
            return this.loading !== undefined ? this.loading : false;
        },
        clickMethod() {
            return this.click !== undefined ? this.click : () => {};
        }
    }
};
</script>

<style>
</style>
