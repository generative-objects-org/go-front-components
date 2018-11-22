import GOSelectionField from '@/go-default/selection/GOSelectionField.vue';
import { test } from '@/test/utils';

test('GOSelectionField.vue', ({ mount }) => {
    const dataInSelection = [
        { value: 1, text: 'A' },
        { value: 2, text: 'B' },
        { value: 3, text: 'C' },
        { value: 4, text: 'D' }
    ];

    it('should switch between view & edit mode', () => {
        const wrapper = mount(GOSelectionField, {
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

    it('should emit change', async () => {
        const wrapper = mount(GOSelectionField, {
            propsData: {
                viewMode: false, // setting edit
                value: '',
                dataCollection: dataInSelection
            }
        });

        const input = wrapper.find('input');
        input.trigger('click');
        await wrapper.vm.$nextTick();

        const firstItem = wrapper.find('.v-list__tile__title');
        firstItem.trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted().input).toHaveLength(1);
        expect(wrapper.emitted().input[0]).toEqual([1]);
    });
});
