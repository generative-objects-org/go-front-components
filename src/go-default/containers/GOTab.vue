<template>
    <v-tab-item>
        <slot name="default"></slot>
    </v-tab-item>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    mixins: [VisiblePropMixin]
};
</script>

<style>
</style>
