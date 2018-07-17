<template>
    <v-data-iterator
    :items="dataToDisplay"
    hide-actions column
    content-tag="v-layout"
    class="elevation-1">
        <template slot="item" slot-scope="props">
            <slot name="repeated-items" :item="props.item"></slot>
        </template>
    </v-data-iterator>
</template>

<script>
export default {
    props: ['dataCollection'],
    computed: {
        dataToDisplay() {
            return this.dataCollection;
        }
    }
};
</script>

<style>
</style>
