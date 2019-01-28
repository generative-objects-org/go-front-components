import {
    install as installGODefault
} from './go-default';
import VisiblePropMixin from "@/mixins/visible-prop-mixin";

export function install() {
    installGODefault();
}

export const VisibilityMixin = VisiblePropMixin;