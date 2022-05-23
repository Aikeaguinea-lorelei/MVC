import './app2.css'
import $ from 'jQuery'

const $tabBar=$('#app2 .tab-bar')
const $tabContent=$('#app2 .tab-content')

$tabBar.on('click','li',e=>{
    const $li=$(e.currentTarget)
    $li
    .addClass('selected')
    .siblings()
    .removeClass('selected')
    const index=$li.index()
    console.log(index)
    $tabContent.children()
        // 找到下标为index的显示,同时隐藏其他的兄弟
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click')