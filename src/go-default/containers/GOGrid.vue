<template>
    <v-flex v-if="isVisible">
        <v-data-table
            :items="dataToDisplay"
            :headers="headers"
            :loading="loading"
            hide-actions
            class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <tr>
                    <slot name="default" :item="props.item"></slot>
                </tr>
            </template>
        </v-data-table>
        <slot name="grid-actions">
            <!-- Slot where form actions will be injected  -->
        </slot>
    </v-flex>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    mixins: [VisiblePropMixin],
    props: {
        dataCollection: Array,
        headers: Array,
        loading: Boolean
    },
    computed: {
        dataToDisplay() {
            return this.dataCollection;
        }
    },
    components: {}
};
</script>

<style>
</style>
