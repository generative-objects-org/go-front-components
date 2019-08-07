<template>
    <div v-if="isVisible">
        <div v-if="viewMode">
            <v-select :items="computedDataCollection" :value="value" :label="label" disabled></v-select>
        </div>
        <div v-if="editMode">
            <v-autocomplete
                :items="computedDataCollection"
                :value="value"
                :label="label"
                @change="onChange"
                :loading="loading"
                :disabled="isDisabled"
                :rules="computedValidationRules"
                :search-input.sync="searchString"
                :no-filter="noFilter"
                clearable
            ></v-autocomplete>
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
        value: [Number, String],
        viewMode: Boolean,
        label: String,
        dataCollection: Array, // text / value collection
        loading: Boolean,
        textSelector: Function,
        searchTerm: String,
        loadAll: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            searchString: null
        };
    },
    computed: {
        editMode() {
            return !this.viewMode;
        },
        computedDataCollection() {
            if (!this.dataCollection) return [];

            if (!this.textSelector) return this.dataCollection;

            if (this.dataCollection.length === 0) return [];

            return this.dataCollection.map(elt => {
                return {
                    text: this.textSelector(elt),
                    value: elt.pkFiedValue // Defined on the model
                };
            });
        },
        noFilter() {
            return !this.loadAll; // if not "load all", filtering is done server-side
        }
    },
    methods: {
        onChange(value) {
            this.$emit("input", value);
            this.$emit("select", value);
        }
    },
    watch: {
        // Bubbling up to triger search
        searchString(newValue, oldValue) {
            this.$emit("update:search-term", newValue);
        }
    }
};
</script>

<style>
</style>
