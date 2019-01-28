<template>
    <v-tabs v-if="isVisible">
        <v-tab v-for="tab in this.tabItems" :key="tab.name">{{tab.title}}</v-tab>
        <v-tabs-items>
            <slot name="default"></slot>
        </v-tabs-items>
    </v-tabs>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    mixins: [VisiblePropMixin],
    props: { tabItems: Array }
};
</script>

<style>
</style>
