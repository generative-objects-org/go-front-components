<template>
    <div v-if="isVisible">
        <div v-if="viewMode" class="go-text-view">
            <v-text-field :label="label" :value="value" disabled></v-text-field>
        </div>
        <div v-if="editMode">
            <v-text-field :label="label" :value="value" v-on:input="onInput" :disabled="isDisabled" :rules="computedValidationRules"></v-text-field>
        </div>
    </div>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
import DisabledPropMixin from "@/mixins/disabled-prop-mixin"; // exposes isDisabled computed
import ValidationPropMixin from "@/mixins/validation-prop-mixin"; // adds validation prop & computed

export default {
    mixins: [VisiblePropMixin, DisabledPropMixin, ValidationPropMixin],
    props: {
        value: [String, Number],
        viewMode: Boolean,
        label: String
    },
    data() {
        return {};
    },
    computed: {
        editMode() {
            return !this.viewMode;
        }
    },
    methods: {
        onInput(val) {
            this.$emit("input", val);
        }
    }
};
</script>

<style>
</style>
