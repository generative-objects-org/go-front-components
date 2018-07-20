import { install as installGODefault } from './go-default';

function install() {
    installGODefault();
}

export default (GOFrontComponents = {
    install: install
});
