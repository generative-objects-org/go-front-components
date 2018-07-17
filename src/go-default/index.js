import './index.css';
import Vue from 'vue';

import GOForm from '@/front-end-components/containers/GOFormWithEdit';
import GOButton from '@/front-end-components/actions/GOButton';
import GOTextField from '@/front-end-components/input-output/GOTextField';
import GOCheckboxField from '@/front-end-components/input-output/GOCheckboxField';
import GODatePickerField from '@/front-end-components/input-output/GODatePickerField';
import GOSelectionField from '@/front-end-components/selection/GOSelectionField';
import GOColumnLayout from '@/front-end-components/containers/GOColumnLayout';
import GOGrid from '@/front-end-components/containers/GOGrid';
import GOGridColumn from '@/front-end-components/containers/GOGridColumn';
import GOBreadCrumb from '@/front-end-components/input-output/GOBreadCrumb';

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

Object.keys(componentsToRegister).forEach(key =>
    Vue.component(key, componentsToRegister[key])
);
