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
        expect(input.exists()).toBe(true);
        expect(input.attributes().disabled).toEqual('disabled');

        wrapper.setProps({ viewMode: false });

        input = wrapper.find('input');
        expect(input.exists()).toBe(true);
        expect(input.attributes()).not.toHaveProperty('disabled');
    });

    it('should display a date picker when enabled & clicked', async () => {
        const wrapper = mount(GODatePickerField, {
            propsData: {
                viewMode: false
            }
        });

        const input = wrapper.find('input');
        input.trigger('click');
        await wrapper.vm.$nextTick();

        const datePicker = wrapper.find('.v-picker--date');
        expect(datePicker.exists()).toBe(true);
    });

    it('should emit right date when first element of date picker is clicked', async () => {
        const wrapper = mount(GODatePickerField, {
            propsData: {
                viewMode: false
            }
        });

        // Opening DatePicker
        const input = wrapper.find('input');
        input.trigger('click');
        await wrapper.vm.$nextTick();

        // Clicking on first day
        const allDatesButtons = wrapper.find('.v-picker--date td button');
        allDatesButtons.trigger('click');
        await wrapper.vm.$nextTick();

        const currentDate = new Date();
        const valueTocheck = `${currentDate.getFullYear()}-${(
            '0' +
            (currentDate.getMonth() + 1)
        ).slice(-2)}-01T00:00:00Z`;

        expect(wrapper.emitted().input).toHaveLength(1);
        expect(wrapper.emitted().input[0][0]).toBeInstanceOf(Date);
        expect(wrapper.emitted().input[0][0]).toEqual(new Date(valueTocheck));
    });

    it('should emit right date when set through TextField', () => {
        const wrapper = mount(GODatePickerField, {
            propsData: {
                viewMode: false
            }
        });

        const input = wrapper.find('input');
        input.element.value = '05/02/1986';
        input.trigger('blur');

        expect(wrapper.emitted().input).toHaveLength(1);
        expect(wrapper.emitted().input[0][0]).toBeInstanceOf(Date);
        expect(wrapper.emitted().input[0][0]).toEqual(
            new Date('1986-02-05T00:00:00Z')
        );
    });

    it('should not emit anything when changing TextField (without blur)', () => {
        const wrapper = mount(GODatePickerField, {
            propsData: {
                viewMode: false
            }
        });

        const input = wrapper.find('input');
        input.element.value = '05/02/1986';
        input.trigger('input');

        expect(wrapper.emitted()).toEqual({});
    });
});
