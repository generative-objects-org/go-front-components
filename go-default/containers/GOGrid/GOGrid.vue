<template>
    <v-data-table
    :items="dataToDisplay"
    :headers="headers"
    hide-actions
    class="elevation-1">
        <template slot="items" slot-scope="props">
            <tr>
                <slot name="repeated-items" :item="props.item"></slot>
            </tr>
        </template>
    </v-data-table>
</template>

<script>
export default {
    props: ['dataCollection', 'headers'],
    computed: {
        dataToDisplay() {
            return this.dataCollection;
        }
    }
};
</script>

<style>
</style>
