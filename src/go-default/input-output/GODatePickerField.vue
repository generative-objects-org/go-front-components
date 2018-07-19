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
                    @blur="onTextFieldBlur"
                    @input="onTextFieldChange"
                ></v-text-field>
                <v-date-picker 
                    @input="onDateInput" 
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
            menu: false,
            tempDashedDate: null // used when users directly interacts with the Text field
        };
    },
    computed: {
        editMode() {
            return !this.viewMode;
        },
        displayedValue() {
            if (!this.value) return null;

            const [year, month, day] = this.getDashedDate(this.value).split(
                '-'
            );
            return `${day}/${month}/${year}`;
        },
        // We use the dashed version of the provided Date object (this.value)
        // The object is expected to be a day only
        dashedDate() {
            return this.tempDashedDate || this.getDashedDate(this.value);
        }
    },
    methods: {
        onDateInput(val) {
            // When emitting the Date object, we make sure it is set to the Greenwhich TZ
            this.$emit('input', new Date(val + 'T00:00:00Z'));
            this.menu = false;
        },
        onTextFieldChange(val) {
            let inputDate = this.getDateFromSlashedDate(val);
            if (inputDate != null) {
                this.tempDashedDate = this.getDashedDate(inputDate);
            }
        },
        onTextFieldBlur(evt) {
            let inputDate = this.getDateFromSlashedDate(evt.target.value);
            if (inputDate != null) {
                this.$emit('input', inputDate);
            }
            this.tempDashedDate = null;
        },

        // Returns the JS Date Object corresponding to the parameter if it is
        // a valid DD/MM/YYYY Date input, null otherwise
        getDateFromSlashedDate(slashedDate) {
            let parts = slashedDate.split('/');
            if (parts.length !== 3) return null;

            let day = parseInt(parts[0]),
                month = parseInt(parts[1]),
                year = parseInt(parts[2]);
            if (isNaN(day) || isNaN(month) || isNaN(year)) {
                return null;
            }

            let monthString = month < 10 ? '0' + month : month.toString();
            let dayString = day < 10 ? '0' + day : day.toString();

            let date = new Date(
                `${year}-${monthString}-${dayString}T00:00:00Z`
            );

            if (date instanceof Date && !isNaN(date)) {
                return date;
            }
            return null;
        },
        getDashedDate(val) {
            if (!val || !(val instanceof Date) || isNaN(val)) return null;
            return (
                val.getFullYear() +
                '-' +
                ('0' + (val.getMonth() + 1)).slice(-2) +
                '-' +
                ('0' + val.getDate()).slice(-2)
            );
        }
    },
    watch: {
        // Making sure to resync everything is current value is changed from outside
        value(newVal, oldVal) {
            this.tempDashedDate = null;
        }
    }
};
</script>

<style>
</style>
