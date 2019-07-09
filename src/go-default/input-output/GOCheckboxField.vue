<template>
    <div v-if="isVisible">
        <div v-if="viewMode" class="go-text-view">
            <v-checkbox :label="label" :input-value="value" disabled></v-checkbox>
        </div>
        <div v-if="editMode">
            <v-checkbox
                :label="label"
                :input-value="value"
                v-on:change="onChange"
                :disabled="isDisabled"
            ></v-checkbox>
        </div>
    </div>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
import DisabledPropMixin from "@/mixins/disabled-prop-mixin"; // exposes isDisabled computed
import ValidationPropMixin from "@/mixins/validation-prop-mixin"; // adds validation prop & computed

export default {
    mixins: [VisiblePropMixin, DisabledPropMixin, ValidationPropMixin],
    model: {
        prop: "value",
        event: "change"
    },
    props: {
        value: Boolean,
        viewMode: Boolean,
        label: String
    },
    data() {
        return {
            // value: this.currentValue
        };
    },
    computed: {
        editMode() {
            return !this.viewMode;
        }
    },
    methods: {
        onChange(val) {
            this.$emit("change", val);
        }
    }
};
</script>

<style>
</style>
