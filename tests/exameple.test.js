import { mount } from '@vue/test-utils'
import Example from './Example.vue'

test('메세지를 변경합니다', async () => {
    const wrapper = mount(Example)
    expect(wrapper.vm.msg).toBe('Hello Vue Test utils!')
    
    await wrapper.setData({
        msg: 'Hello HEROPY!'
    })

    expect(wrapper.vm.msg).toBe('Hello HEROPY!')
    expect(wrapper.find('div').text()).toBe('Hello HEROPY!')
})
