<template>
    <v-form>
        <slot name="default" :item="currentItem" :viewMode="isViewMode" v-if="currentItem">
            <!-- Default slot where form content will be injected -->
        </slot>
         <div v-if="!currentItem && noDataTextComp">
            {{ noDataTextComp }}
        </div>
        <slot name="form-actions" :actions="defaultActions" :viewMode="isViewMode"> 
            <!-- Slot where form actions will be injected  -->
        </slot>
    </v-form>
</template>

<script>
export const MODES = {
    VIEW_MODE: 'VIEW_MODE',
    EDIT_MODE: 'EDIT_MODE'
};

export const FORM_ACTIONS = {
    CANCEL: 'cancelEdit',
    CREATE_NEW: 'createNew',
    DELETE: 'delete',
    ENTER_EDIT: 'enterEdit',
    SAVE: 'save'
};

export default {
    props: {
        initialMode: String,
        currentItem: Object,
        noDataText: String,
        busName: String
    },
    data() {
        return {
            currentMode: MODES.VIEW_MODE,
            defaultActions: {
                [FORM_ACTIONS.CANCEL]: this.cancelEdit,
                [FORM_ACTIONS.CREATE_NEW]: this.createNew,
                [FORM_ACTIONS.DELETE]: this.delete,
                [FORM_ACTIONS.ENTER_EDIT]: this.enterEdit,
                [FORM_ACTIONS.SAVE]: this.save
            },
            formItem: null // item set when editing
        };
    },
    mounted() {
        this.currentMode =
            this.initialMode &&
            (this.initialMode === MODES.VIEW_MODE ||
                this.initialMode === MODES.EDIT_MODE)
                ? this.initialMode
                : MODES.VIEW_MODE;
    },
    computed: {
        isViewMode() {
            return this.currentMode === MODES.VIEW_MODE;
        },
        isEditMode() {
            return this.currentMode === MODES.EDIT_MODE;
        },
        noDataTextComp() {
            return this.noDataText ? this.noDataText : '';
        }
    },

    methods: {
        // Default Actions implementation
        cancelEdit() {
            if (this.isEditMode) {
                this.currentMode = MODES.VIEW_MODE;
                this.$emit('cancel-edit', this.currentItem);
            }
        },
        createNew() {
            if (this.isViewMode) {
                this.currentMode = MODES.EDIT_MODE;
                this.$emit('create-item');
            }
        },
        delete() {
            if (this.isViewMode) {
                this.$emit('delete-item', this.currentItem);
            }
        },
        enterEdit() {
            if (this.isViewMode) {
                this.currentMode = MODES.EDIT_MODE;
                this.$emit('enter-edit', this.currentItem);
            }
        },
        save() {
            if (this.isEditMode) {
                this.currentMode = MODES.VIEW_MODE;
                this.$emit('save-item', this.currentItem);
            }
        }
    },

    // LIFECYCLE
    created() {}
};
</script>

<style>
</style>
