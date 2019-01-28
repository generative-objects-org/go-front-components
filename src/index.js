import {
    install as installGODefault
} from './go-default';
import VisiblePropMixin from "@/mixins/visible-prop-mixin";

function install() {
    installGODefault();
}

export default {
    install: install,
    visibilityMixin: VisiblePropMixin
};