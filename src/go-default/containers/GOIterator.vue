<template>
    <v-data-iterator
        :items="dataToDisplay"
        hide-actions
        column
        content-tag="v-layout"
        class="elevation-1"
        v-if="isVisible"
    >
        <template slot="item" slot-scope="props">
            <slot name="repeated-items" :item="props.item"></slot>
        </template>
    </v-data-iterator>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    mixins: [VisiblePropMixin],
    props: ["dataCollection"],
    computed: {
        dataToDisplay() {
            return this.dataCollection;
        }
    }
};
</script>

<style>
</style>
