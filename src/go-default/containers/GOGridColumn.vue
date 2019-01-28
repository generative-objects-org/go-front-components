<template>
    <td>
        <slot v-if="isVisible"></slot>
    </td>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    mixins: [VisiblePropMixin]
};
</script>

<style>
</style>
