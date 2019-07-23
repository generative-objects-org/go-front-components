<template>
    <v-form ref="vueForm">
        <slot name="default" v-if="currentItem">
            <!-- Default slot where form content will be injected -->
        </slot>
        <div v-if="!currentItem && noDataTextComp">{{ noDataTextComp }}</div>
        <slot name="form-actions">
            <!-- Slot where form actions will be injected  -->
        </slot>
    </v-form>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    props: {
        currentItem: Object,
        noDataText: String
    },
    computed: {
        noDataTextComp() {
            return this.noDataText ? this.noDataText : "";
        }
    },
    methods: {
        validate() {
            return this.$refs.vueForm.validate();
        },
        reset() {
            this.$refs.vueForm.reset();
        },
        resetValidation() {
            this.$refs.vueForm.resetValidation();
        }
    },
    mixins: [VisiblePropMixin]
};
</script>

<style>
</style>
