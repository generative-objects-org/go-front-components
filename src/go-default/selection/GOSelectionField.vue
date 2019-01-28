<template>
    <div v-if="isVisible">
        <div v-if="viewMode" class="go-text-view">
            <v-select :items="dataCollection" :value="value" :label="label" disabled></v-select>
        </div>
        <div v-if="editMode">
            <v-select
                :items="dataCollection"
                :value="value"
                :label="label"
                @change="onChange"
                :loading="loading"
                :disabled="isDisabled"
            ></v-select>
        </div>
    </div>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
import DisabledPropMixin from "@/mixins/disabled-prop-mixin"; // exposes isDisabled computed

export default {
    mixins: [VisiblePropMixin, DisabledPropMixin],
    props: {
        value: [Number, String],
        viewMode: Boolean,
        label: String,
        dataCollection: Array, // text / value collection
        loading: Boolean
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
        onChange(value) {
            this.$emit("input", value);
            this.$emit("select", value);
        }
    }
};
</script>

<style>
</style>
