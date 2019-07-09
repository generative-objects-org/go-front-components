export function TransformValidationModelToVuetify(ruleArray) {
    return ruleArray.map(m => {
        return (value) => m.validation(value) || m.errorMessage
    })
}