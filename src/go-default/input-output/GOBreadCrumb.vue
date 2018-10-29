<template>
    <v-breadcrumbs :items="crumbList">
        <template slot="divider">
           {{divider}}
        </template>
        <template slot="item" slot-scope="props">
            <router-link :to="props.item.link" v-if="props.item.link">
                {{ props.item.linkText }}
            </router-link>
            <span v-if="!props.item.link">{{ props.item.linkText }}</span>
        </template>
    </v-breadcrumbs>
</template>

<script>
export default {
    props: {
        divider: String,
        crumbList: Array
    }
};
</script>

<style>
</style>
