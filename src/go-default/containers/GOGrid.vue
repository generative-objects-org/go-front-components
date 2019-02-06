<template>
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
                        v-model="localPaginationObject.page"
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
        onCurrentPageNumberChanged(value) {
            this.$emit("pageChanged", value);
            this.localPaginationObject.page = value;
        },
        onPaginationUpdated(pagination) {
            console.log(pagination);
            if (
                this.pagination &&
                pagination.page !== this.pagination.currentPageNumber
            ) {
                this.$emit("pageChanged", pagination.page);
            }
            if (
                this.sort &&
                (pagination.sortBy !== this.sort.sortColumn ||
                    pagination.descending != this.sort.isDescending)
            ) {
                this.$emit("sortUpdated", {
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
