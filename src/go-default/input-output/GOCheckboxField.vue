<template>
    <div>
         <div v-if="viewMode" class="go-text-view">
             <v-checkbox
                :label="label"
                :input-value="value"
                disabled
            ></v-checkbox>
        </div>
        <div v-if="editMode">
              <v-checkbox
                :label="label"
                :input-value="value"
                v-on:change="onChange"
            ></v-checkbox>
        </div>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'value',
        event: 'change'
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
            this.$emit('change', val);
        }
    }
};
</script>

<style>
</style>
