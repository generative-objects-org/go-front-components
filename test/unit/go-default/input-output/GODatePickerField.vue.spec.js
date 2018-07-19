import GODatePickerField from '@/go-default/input-output/GODatePickerField.vue';
import { test } from '@/test/utils';

test('GODatePickerField.vue', ({ mount }) => {
    it('should switch between view & edit mode', () => {
        const wrapper = mount(GODatePickerField, {
            propsData: {
                viewMode: true
            }
        });

        // Checking INPUT exists & is disabled
        let input = wrapper.find('input');
        expect(input).toBeDefined();
        expect(input.attributes().disabled).toEqual('disabled');

        wrapper.setProps({ viewMode: false });

        input = wrapper.find('input');
        expect(input).toBeDefined();
        expect(input.attributes()).not.toHaveProperty('disabled');
    });

    it('should display a date picker when enabled & clicked', () => {
        const wrapper = mount(GODatePickerField, {
            propsData: {
                viewMode: false
            }
        });

        const input = wrapper.find('input');
        input.trigger('click');

        const datePicker = wrapper.find('.v-picker--date');
        expect(datePicker).toBeDefined();
    });
});
