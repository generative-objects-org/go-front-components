<template>
    <div>
        <div v-if="viewMode" class="go-text-view">
            <v-text-field 
                :label="label"
                :value="displayedValue"
                disabled
                prepend-icon="event"
            ></v-text-field>
        </div>
        <div v-if="editMode">
            <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
            >
                <v-text-field
                    slot="activator"
                    :value="displayedValue"
                    :label="label"
                    prepend-icon="event"
                    readonly
                ></v-text-field>
                <v-date-picker 
                    @input="onInput" 
                    no-title 
                    scrollable 
                    first-day-of-week="1" 
                    :value="dashedDate"
                ></v-date-picker>
            </v-menu>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: Date,
        viewMode: Boolean,
        label: String
    },
    data() {
        return {
            menu: false
        };
    },
    computed: {
        editMode() {
            return !this.viewMode;
        },
        displayedValue() {
            if (!this.value) return null;

            const [year, month, day] = this.dashedDate.split('-');
            return `${day}/${month}/${year}`;
        },
        // We use the dashed version of the provided Date object (this.value)
        // The object is expected to be a day only
        dashedDate() {
            if (!this.value) return null;
            return (
                this.value.getFullYear() +
                '-' +
                ('0' + (this.value.getMonth() + 1)).slice(-2) +
                '-' +
                ('0' + this.value.getDate()).slice(-2)
            );
        }
    },
    methods: {
        onInput(val) {
            // When emitting the Date object, we make sure it is set to the Greenwhich TZ
            this.$emit('input', new Date(val + 'T00:00:00Z'));
            this.menu = false;
        }
    }
};
</script>

<style>
</style>
