import GODatePickerField from '@/go-default/input-output/GODatePickerField.vue';
import { test } from '../../util';

test('GODatePickerField.vue', ({ mount }) => {
    it('should switch between view & edit mode', () => {
        const wrapper = mount(GODatePickerField, {
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

    it('should have a date picker available when enabled & clicked', () => {
        const wrapper = mount(GODatePickerField, {
            localVue: localVue,
            propsData: {
                viewMode: false
            }
        });

        console.log('***** BEFORE INPUT   ****');
        const input = wrapper.find('input');
        input.trigger('click');
        console.log('***** AFTER CLICK   ****');

        const datePicker = wrapper.find('.v-picker--date');
        datePicker.should.exist;
    });
});
