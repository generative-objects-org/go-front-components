import { mount, createLocalVue } from '@vue/test-utils';
import GOTextField from '@/go-default/input-output/GOTextField.vue';
import Vuetify from 'vuetify';

describe('GOTextField.vue', () => {
    const localVue = createLocalVue();
    localVue.use(Vuetify); // Registering Vuetify components

    it('should switch between view & edit mode', () => {
        const wrapper = mount(GOTextField, {
            localVue: localVue,
            propsData: {
                viewMode: true
            }
        });

        // Checking INPUT exists & is disabled
        let input = wrapper.find('input');
        input.should.exist;
        input.attributes().disabled.should.equal('disabled');

        wrapper.setProps({ viewMode: false });

        input = wrapper.find('input');
        input.should.exist;
        input.attributes().should.not.have.property('disabled');
    });

    it('should emit change', () => {
        const wrapper = mount(GOTextField, {
            localVue: localVue,
            propsData: {
                viewMode: false, // setting edit
                value: ''
            }
        });

        const input = wrapper.find('input');
        input.element.value = 'New Value';
        input.trigger('input');

        wrapper.emitted().input.should.exist;
        wrapper.emitted().input.length.should.equal(1);
        wrapper.emitted().input[0].should.deep.equal(['New Value']);
    });

    it('should authorize change only in edit mode', () => {
        const wrapper = mount(GOTextField, {
            localVue: localVue,
            propsData: {
                viewMode: true, // setting edit
                value: ''
            }
        });
        const input = wrapper.find('input');
        input.element.value = 'New Value';
        input.trigger('input');

        expect(wrapper.emitted()).toEqual({});
    });
});
