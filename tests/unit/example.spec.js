import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import NumberPicker from '@/components/NumberPicker.vue'

describe('NumberPicker.vue', () => {
  it('has a default value of 0 if no props are put in', () => {
    const wrapper = shallowMount(NumberPicker, {
      // propsData: { msg }
    })
    expect(wrapper.text()).to.include('0')
  })

  it('overwrites the default value if value prop used', () => {
    const wrapper = shallowMount(NumberPicker, {
      propsData: {
        value: 4
      }
    })
    expect(wrapper.text()).to.not.include('0')
    expect(wrapper.text()).to.include('4')
  })

  it('increments the value when + button is clicked', () => {
    const wrapper = shallowMount(NumberPicker)
    expect(wrapper.vm.value).to.equal(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.value).to.equal(-1)
  })
})
