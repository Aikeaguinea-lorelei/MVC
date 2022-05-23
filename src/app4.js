import $ from 'jQuery'
import './app4.css'

const $circle=$('#app4 .circle')

// 设置鼠标 移上去 和 移走 的监听事件
$circle.on('mouseenter',()=>{
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})