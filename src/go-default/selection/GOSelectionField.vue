<template>
    <div v-if="isVisible">
        <div v-if="viewMode">
            <v-select :items="computedDataCollection" :value="value" :label="label" disabled></v-select>
        </div>
        <div v-if="editMode">
            <v-select
                :items="computedDataCollection"
                :value="value"
                :label="label"
                @change="onChange"
                :loading="loading"
                :disabled="isDisabled"
                :rules="computedValidationRules"
            ></v-select>
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
        textSelector: Function
    },
    data() {
        return {};
    },
    computed: {
        editMode() {
            return !this.viewMode;
        },
        computedDataCollection() {
            if(!this.dataCollection)
                return [];

            if(!this.textSelector)
                return this.dataCollection
            
            if(this.dataCollection.length === 0)
                return [];

            return this.dataCollection.map(elt => {
                return {
                    text: this.textSelector(elt),
                    value: elt.pkFiedValue // Defined on the model
                }
            })
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
