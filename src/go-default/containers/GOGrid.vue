<template>
    <v-layout column>
        <v-flex>
            <v-layout row>
                <slot name="filter-zone"></slot>
            </v-layout>
        </v-flex>
        <v-flex v-if="isVisible">
            <v-data-table
                :items="dataToDisplay"
                :headers="headers"
                :loading="loading"
                :total-items="totalItems"
                :pagination.sync="localPaginationObject"
                @update:pagination="onPaginationUpdated"
                class="elevation-1"
                hide-actions
                disable-initial-sort
            >
                <template slot="items" slot-scope="props">
                    <tr>
                        <slot name="default" :item="props.item"></slot>
                    </tr>
                </template>
                <template slot="footer" v-if="pagination && pagination.isPaginationEnabled">
                    <td :colspan="headers.length" class="text-xs-center">
                        <v-pagination
                            :length="pagination.totalPage"
                            :value="pagination.currentPageNumber"
                            v-if="pagination.totalPage > 1 && pagination.currentTotal > 0"
                            total-visible="6"
                            @input="onCurrentPageNumberChanged"
                        ></v-pagination>
                    </td>
                </template>
            </v-data-table>
            <slot name="grid-actions">
                <!-- Slot where form actions will be injected  -->
            </slot>
        </v-flex>
    </v-layout>
</template>

<script>
import VisiblePropMixin from "@/mixins/visible-prop-mixin"; // exposes isVisible computed
export default {
    mixins: [VisiblePropMixin],
    props: {
        dataCollection: Array,
        headers: Array,
        loading: Boolean,
        pagination: Object,
        sort: Object
    },
    data() {
        return {
            localPaginationObject: {
                sortBy:
                    this.sort && this.sort.sortColumn
                        ? this.sort.sortColumn
                        : null,
                descending: this.sort && this.sort.isDescendings
            }
        };
    },
    computed: {
        dataToDisplay() {
            return this.dataCollection;
        },
        totalItems() {
            if (this.pagination && this.pagination.isPaginationEnabled) {
                return this.pagination.currentTotal;
            }
            // Returning -1 to tell v-data-table that we handle pagination externally
            // even when disabled (to capture sort)
            return -1;
        }
    },
    methods: {
        // Called by the <v-pagination>
        onCurrentPageNumberChanged(value) {
            // We use this to sync' with <v-data-table> but it is not directly used
            // by th <v-pagination>
            this.localPaginationObject.page = value;

            // Emitting up to the parent component
            this.$emit("page-changed", value);
        },

        /// We deal only with sorting here, the pagination is
        /// handled through the <v-pagination> component
        onPaginationUpdated(pagination) {
            if (
                this.sort &&
                (pagination.sortBy !== this.sort.sortColumn ||
                    pagination.descending != this.sort.isDescending)
            ) {
                this.$emit("sort-updated", {
                    sortColumn: pagination.sortBy,
                    isDescending: pagination.descending
                });
            }
        }
    }
};
</script>

<style>
</style>
