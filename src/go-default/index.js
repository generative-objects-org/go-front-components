import './index.css';
import Vue from 'vue';

import GOBreadCrumb from './view-only/GOBreadCrumb.vue';
import GOButton from './actions/GOButton.vue';
import GOCheckboxField from './input-output/GOCheckboxField.vue';
import GOColumnLayout from './containers/GOColumnLayout.vue';
import GODatePickerField from './input-output/GODatePickerField.vue';
import GODialog from './containers/GODialog.vue';
import GOForm from './containers/GOFormWithEdit.vue';
import GOGrid from './containers/GOGrid.vue';
import GOGridColumn from './containers/GOGridColumn.vue';
import GOHierarchicalContainer from './containers/GOHierarchicalContainer.vue';
import GOIcon from './actions/GOIcon.vue';
import GORadioGroupField from './selection/GORadioGroupField.vue';
import GOSelectionField from './selection/GOSelectionField.vue';
import GOTab from './containers/GOTab';
import GOTabContainer from './containers/GOTabContainer';
import GOText from './view-only/GOText.vue';
import GOTextField from './input-output/GOTextField.vue';

const componentsToRegister = {
    'go-breadcrumb': GOBreadCrumb,
    'go-button': GOButton,
    'go-checkbox-field': GOCheckboxField,
    'go-column-layout': GOColumnLayout,
    'go-date-field': GODatePickerField,
    'go-dialog': GODialog,
    'go-form': GOForm,
    'go-grid': GOGrid,
    'go-grid-column': GOGridColumn,
    'go-hierarchy-container-widget': GOHierarchicalContainer,
    'go-icon': GOIcon,
    'go-radiogroup-field': GORadioGroupField,
    'go-selection-field': GOSelectionField,
    'go-tab': GOTab,
    'go-tab-container': GOTabContainer,
    'go-text': GOText,
    'go-text-field': GOTextField
};

export function install() {
    Object.keys(componentsToRegister).forEach(key =>
        Vue.component(key, componentsToRegister[key])
    );
}