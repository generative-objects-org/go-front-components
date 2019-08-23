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
import DisabledPropMixin from "@/mixins/disabled-prop-mixin"; // exposes isDisabled computed

export default {
    mixins: [VisiblePropMixin, DisabledPropMixin],
    props: {
        label: String,
        loading: Boolean
    },

    computed: {
        isLoading() {
            return this.loading !== undefined ? this.loading : false;
        }
    },

    methods: {
        clickMethod(...args) {
            this.$emit("click", args);
        }
    }
};
</script>

<style>
</style>
