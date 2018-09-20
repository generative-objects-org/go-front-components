<template>
    <v-tabs>
        <v-tab v-for="tab in this.tabItems" :key="tab.name">{{tab.title}}</v-tab>
        <v-tabs-items>
            <slot name="default"></slot>
        </v-tabs-items>
    </v-tabs>
</template>

<script>
export default {
    props: { tabItems: Array }
};
</script>

<style>
</style>
