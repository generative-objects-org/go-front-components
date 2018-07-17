<template>
    <v-form>
        <slot name="default" :item="currentItem" :viewMode="isViewMode">
            <!-- Default slot where form content will be injected -->
        </slot>
        <slot name="form-actions" :actions="defaultActions" :viewMode="isViewMode">
            <!-- Slot where form actions will be injected  -->
        </slot>
    </v-form>
</template>

<script>
export const VIEW_MODE = 'VIEW_MODE';
export const EDIT_MODE = 'EDIT_MODE';

export const FORM_ACTIONS = {
    CANCEL: 'cancelEdit',
    CREATE_NEW: 'createNew',
    DELETE: 'delete',
    ENTER_EDIT: 'enterEdit',
    SAVE: 'save'
};

export default {
    props: {
        withEdit: Boolean,
        currentItem: Object
    },
    data() {
        return {
            currentMode: VIEW_MODE,
            defaultActions: {
                [FORM_ACTIONS.CANCEL]: this.cancelEdit,
                [FORM_ACTIONS.CREATE_NEW]: this.createNew,
                [FORM_ACTIONS.DELETE]: this.delete,
                [FORM_ACTIONS.ENTER_EDIT]: this.enterEdit,
                [FORM_ACTIONS.SAVE]: this.save
            }
        };
    },
    computed: {
        isViewMode() {
            return this.currentMode === VIEW_MODE;
        },
        isEditMode() {
            return this.currentMode === EDIT_MODE;
        }
    },

    methods: {
        // Default Actions implementation
        cancelEdit() {
            if (this.isEditMode) {
                this.currentMode = VIEW_MODE;
            }
        },
        createNew() {
            if (this.isViewMode) {
                this.currentMode = EDIT_MODE;
            }
        },
        delete() {
            if (this.isViewMode) {
                this.$emit('delete-item', this.currentItem);
            }
        },
        enterEdit() {
            if (this.isViewMode) {
                this.currentMode = EDIT_MODE;
            }
        },
        save() {
            if (this.isEditMode) {
                this.$emit('save-item', this.currentItem);
                this.currentMode = VIEW_MODE;
            }
        },

        // Additionnal methods
        endEdit() {
            if (this.isEditMode) {
                this.currentMode = VIEW_MODE;
            }
        }
    },

    // LIFECYCLE
    created() {}
};
</script>

<style>
</style>
