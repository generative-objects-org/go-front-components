export default {
    props: {
        disabled: {
            type: Boolean,
            default: undefined
        }
    },

    computed: {
        isDisabled() {
            return this.disabled !== undefined ? this.disabled : false;
        }
    }
}