<template>
    <div v-if="isVisible">
        <div v-if="viewMode">
            <v-radio-group :value="value" :mandatory="false" disabled :row="row" :column="column">
                <v-radio
                    :label="data.text"
                    :value="data.value"
                    v-for="data in computedDataCollection"
                    :key="data.value"
                ></v-radio>
            </v-radio-group>
        </div>
        <div v-if="editMode">
            <v-radio-group
                :value="value"
                :mandatory="false"
                @change="onChange"
                :disabled="isDisabled"
                :rules="computedValidationRules"
                :row="row"
                :column="column"
            >
                <v-radio
                    :label="data.text"
                    :value="data.value"
                    v-for="data in computedDataCollection"
                    :key="data.value"
                ></v-radio>
            </v-radio-group>
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
        dataCollection: Array, // text / value collection
        loading: Boolean,
        textSelector: Function,
        column: { type: Boolean, default: true },
        row: Boolean
    },
    data() {
        return {
            radioValue: null
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
        displayModeColumn() {
            console.log("column", this.column);
            return this.column || this.column === undefined;
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
