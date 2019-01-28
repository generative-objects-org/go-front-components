<template>
    <v-layout row>
        <v-flex v-for="i in this.numberOfColumns" :key="i" class="ma-1" :class="xsValue">
            <slot :name="'column-' + i"></slot>
        </v-flex>
    </v-layout>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    mixins: [VisiblePropMixin],
    props: {
        numberOfColumns: {
            type: Number,
            validator: function(val) {
                return val > 0 && val <= 12;
            },
            required: true
        }
    },
    data() {
        return {
            nbToXsValueDict: {
                "1": "xs12",
                "2": "xs6",
                "3": "xs4",
                "4": "xs3",
                "6": "xs2",
                "12": "xs1"
            }
        };
    },
    computed: {
        xsValue() {
            return this.nbToXsValueDict[this.numberOfColumns]
                ? this.nbToXsValueDict[this.numberOfColumns]
                : "";
        }
    }
};
</script>

<style>
</style>
