<template>
  <v-btn :disabled="isDisabled" @click="clickMethod" :loading="isLoading" ripple>{{label}}</v-btn>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    click: Function,
    label: String,
    loading: Boolean
  },

  computed: {
    isDisabled() {
      return this.disabled !== undefined ? this.disabled : false;
    },
    isLoading() {
      return this.loading !== undefined ? this.loading : false;
    },
    clickMethod() {
      return this.click !== undefined ? this.click : () => {};
    }
  }
};
</script>

<style>
</style>
