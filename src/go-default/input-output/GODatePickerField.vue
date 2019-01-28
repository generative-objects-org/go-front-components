<template>
    <div v-if="isVisible">
        <div v-if="viewMode" class="go-text-view">
            <v-text-field :label="label" :value="displayedValue" disabled prepend-icon="event"></v-text-field>
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
import {
    getDashedDate,
    getDateFromSlashedDate
} from "../../utils/dateConverters.js";
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed

export default {
    mixins: [VisiblePropMixin],
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

            const [year, month, day] = getDashedDate(this.value).split("-");
            return `${day}/${month}/${year}`;
        },
        // We use the dashed version of the provided Date object (this.value)
        // The object is expected to be a day only
        dashedDate() {
            return this.tempDashedDate || getDashedDate(this.value);
        }
    },
    methods: {
        onDateInput(val) {
            // When emitting the Date object, we make sure it is set to the Greenwhich TZ
            this.$emit("input", new Date(val + "T00:00:00Z"));
            this.menu = false;
        },
        onTextFieldChange(val) {
            let inputDate = getDateFromSlashedDate(val);
            if (inputDate != null) {
                this.tempDashedDate = getDashedDate(inputDate);
            }
        },
        onTextFieldBlur(evt) {
            let inputDate = getDateFromSlashedDate(evt.target.value);
            if (inputDate != null) {
                this.$emit("input", inputDate);
            }
            this.tempDashedDate = null;
        }

        // Returns the JS Date Object corresponding to the parameter if it is
        // a valid DD/MM/YYYY Date input, null otherwise
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
