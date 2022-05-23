import $ from 'jQuery'
import './app3.css'

// 在JS添加点击事件active
const $square=$('#app3 .square')
$square.on('click',()=>{
    // 为了让方块能返回
    // toggleclass: 如果没有点击事件,就加上active.如果有的话就删掉
    $square.toggleClass('active')
})