export default {
    props: {
        visible: {
            type: Boolean,
            default: undefined
        }
    },

    computed: {
        isVisible() {
            return this.visible !== undefined ? this.visible : true;
        }
    }
}