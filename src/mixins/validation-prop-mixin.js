import { TransformValidationModelToVuetify } from '@/utils/vuetify-helpers'

export default {
    props: {
        validationModel: {
            type: Array,
            default: undefined
        }
    },
    computed: {
        computedValidationRules() {
            if(this.validationModel && this.validationModel.length > 0)
                return TransformValidationModelToVuetify(this.validationModel)
            else 
                return []
        }
    }
}