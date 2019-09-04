<template>
    <div v-html="value">        
    </div>
</template>
<script>

import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed

export default {
    mixins: [VisiblePropMixin],
    props: {
        value: [String, Number, Boolean]
    }
}
</script>

<style scoped>
</style>