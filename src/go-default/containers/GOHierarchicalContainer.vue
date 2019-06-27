<template>
    <div>
        <slot name="default"></slot>
    </div>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    mixins: [VisiblePropMixin]
};
</script>

<style>
</style>
