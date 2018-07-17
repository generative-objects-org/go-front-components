<template>
    <div>
         <div v-if="viewMode"  class="go-text-view">
             <v-select
                :items="displayedCollection"
                :value="value"
                :label="label"
                disabled
            ></v-select>
        </div>
        <div v-if="editMode">
              <v-select
                :items="displayedCollection"
                :value="value"
                :label="label"
                @change="onChange"
                :loading="loading"
            ></v-select>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: [Number, String],
        viewMode: Boolean,
        label: String,
        displayedCollection: Array, // text / value collection
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
            this.$emit('input', value);
            this.$emit('select', value);
        }
    }
};
</script>

<style>
</style>
