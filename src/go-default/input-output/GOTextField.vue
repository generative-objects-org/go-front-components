<template>
    <div v-if="isVisible">
        <div v-if="viewMode" class="go-text-view">
            <v-text-field :label="label" :value="value" disabled></v-text-field>
        </div>
        <div v-if="editMode">
            <v-text-field :label="label" :value="value" v-on:input="onInput" :disabled="isDisabled"></v-text-field>
        </div>
    </div>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed

export default {
    mixins: [VisiblePropMixin],
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
