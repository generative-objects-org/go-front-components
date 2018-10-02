<template>
    <v-btn icon class="mx-0" @click="clickMethod" :disabled="isDisabled">
        <v-icon>{{iconName}}</v-icon>
    </v-btn>
</template>

<script>
export default {
    props: {
        disabled: Boolean,
        click: Function,
        iconName: String
    },

    computed: {
        isDisabled() {
            return this.disabled !== undefined ? this.disabled : false;
        },
        clickMethod() {
            return this.click !== undefined ? this.click : () => {};
        }
    }
};
</script>

<style>
</style>
