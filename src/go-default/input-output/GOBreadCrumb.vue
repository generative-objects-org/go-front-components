<template>
    <v-breadcrumbs :divider="divider">
        <v-breadcrumbs-item
            v-for="crumb in crumbList"
            :key="crumb.linkText"
            :disabled="!crumb.link"
        >
            <router-link :to="crumb.link" v-if="crumb.link">
                {{ crumb.linkText }}
            </router-link>
            <span v-if="!crumb.link">{{ crumb.linkText }}</span>
        </v-breadcrumbs-item>
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
