<template>
    <v-btn :disabled="isDisabled" @click="clickMethod">{{label}}</v-btn>
</template>

<script>
export default {
    props: {
        disabled: Boolean,
        click: Function,
        label: String
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
