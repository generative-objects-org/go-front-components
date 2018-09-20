<template>
    <v-flex>
        <v-data-table
        :items="dataToDisplay"
        :headers="headers"
        :loading="loading"
        hide-actions
        class="elevation-1">
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
export default {
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
