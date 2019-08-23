<template>
    <v-btn
        icon
        class="mx-0"
        @click="clickMethod"
        :disabled="isDisabled"
        :loading="isLoading"
        v-if="isVisible"
    >
        <v-icon>{{iconName}}</v-icon>
    </v-btn>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
import DisabledPropMixin from "@/mixins/disabled-prop-mixin"; // exposes isDisabled computed

export default {
    mixins: [VisiblePropMixin, DisabledPropMixin],
    props: {
        iconName: String,
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
