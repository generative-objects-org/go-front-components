<template>
    <v-dialog v-model="showDialog" :persistent="persistent">
        <v-card>
            <v-card-text>
                <slot name="default">
                    <!-- Default slot where form content will be injected -->
                </slot>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    props: {
        showDialog: {
            type: Boolean,
            default: false,
            required: true
        },
        persistent: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    mixins: [VisiblePropMixin]
};
</script>

<style>
</style>
