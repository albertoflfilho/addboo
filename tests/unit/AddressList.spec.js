import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/AddressList'

describe('AddressList', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        addresses: [
          {
            firstName: 'Albert',
            lastName: 'Lacerda',
            civicNumber: '700',
            street: 'Rue Gordonn',
            city: 'Montreal',
            id: 11111
          },
          {
            firstName: 'Albert',
            lastName: 'Einstein',
            civicNumber: 700,
            street: 'Rue Gordon',
            city: 'Verdun',
            id: 22222
          }
        ]
      }
    })
    expect(wrapper.text()).toContain('Albert')
    expect(wrapper.text()).toContain('Einstein')
  })
})
