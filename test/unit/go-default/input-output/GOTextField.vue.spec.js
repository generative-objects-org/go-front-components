import GOTextField from '@/go-default/input-output/GOTextField.vue';
import { test } from '@/test/utils';

test('GOTextField.vue', ({ mount }) => {
    it('should switch between view & edit mode', () => {
        const wrapper = mount(GOTextField, {
            propsData: {
                viewMode: true
            }
        });

        // Checking INPUT exists & is disabled
        let input = wrapper.find('input');
        expect(input.exists()).toBe(true);
        expect(input.attributes().disabled).toEqual('disabled');

        wrapper.setProps({ viewMode: false });

        input = wrapper.find('input');
        expect(input.exists()).toBe(true);
        expect(input.attributes()).not.toHaveProperty('disabled');
    });

    it('should emit change', () => {
        const wrapper = mount(GOTextField, {
            propsData: {
                viewMode: false, // setting edit
                value: ''
            }
        });

        const input = wrapper.find('input');
        input.element.value = 'New Value';
        input.trigger('input');

        expect(wrapper.emitted().input).toHaveLength(1);
        expect(wrapper.emitted().input[0]).toEqual(['New Value']);
    });

    it('should authorize change only in edit mode', () => {
        const wrapper = mount(GOTextField, {
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
