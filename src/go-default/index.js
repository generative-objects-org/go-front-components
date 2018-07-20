import './index.css';
import Vue from 'vue';

import GOForm from './containers/GOFormWithEdit.vue';
import GOButton from './actions/GOButton.vue';
import GOTextField from './input-output/GOTextField.vue';
import GOCheckboxField from './input-output/GOCheckboxField.vue';
import GODatePickerField from './input-output/GODatePickerField.vue';
import GOSelectionField from './selection/GOSelectionField.vue';
import GOColumnLayout from './containers/GOColumnLayout.vue';
import GOGrid from './containers/GOGrid.vue';
import GOGridColumn from './containers/GOGridColumn.vue';
import GOBreadCrumb from './input-output/GOBreadCrumb.vue';

const componentsToRegister = {
    'go-button': GOButton,
    'go-form': GOForm,
    'go-text-field': GOTextField,
    'go-checkbox-field': GOCheckboxField,
    'go-date-field': GODatePickerField,
    'go-selection-field': GOSelectionField,
    'go-column-layout': GOColumnLayout,
    'go-grid': GOGrid,
    'go-grid-column': GOGridColumn,
    'go-breadcrumb': GOBreadCrumb
};

export function install() {
    Object.keys(componentsToRegister).forEach(key =>
        Vue.component(key, componentsToRegister[key])
    );
}
