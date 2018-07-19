import GOCheckboxField from '@/go-default/input-output/GOCheckboxField.vue';
import { test } from '@/test/utils';

test('GOCheckboxField.vue', ({ mount }) => {
    it('should switch between view & edit mode', () => {
        const wrapper = mount(GOCheckboxField, {
            propsData: {
                viewMode: true
            }
        });

        // Checking INPUT exists & is disabled
        let input = wrapper.find('.v-input');
        expect(input.exists()).toBe(true);
        expect(input.classes()).toContain('v-input--is-disabled');

        wrapper.setProps({ viewMode: false });

        input = wrapper.find('.v-input');
        expect(input.classes()).not.toContain('v-input--is-disabled');
    });

    it('should emit change', () => {
        const wrapper = mount(GOCheckboxField, {
            propsData: {
                viewMode: false, // setting edit
                checked: false
            }
        });

        const input = wrapper.find('input');
        input.trigger('click');

        expect(wrapper.emitted().change).toHaveLength(1);
        expect(wrapper.emitted().change[0]).toEqual([true]);
    });

    it('should authorize change only in edit mode', () => {
        const wrapper = mount(GOCheckboxField, {
            propsData: {
                viewMode: true, // setting edit
                checked: false
            }
        });
        const input = wrapper.find('input');
        input.trigger('click');

        expect(wrapper.emitted()).toEqual({});
    });
});
