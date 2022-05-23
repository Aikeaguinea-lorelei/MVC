import './app1.css'  // js自己引用自己的css
import $ from 'jQuery'

const $button1=$('#add1')
const $button2=$('#minus1')
const $button3=$('#mul2')
const $button4=$('#divide2')
const $number=$('#number')
const n=localStorage.getItem('n')  // 获取上次存的n
$number.text(n || 100)

// 绑定事件
$button1.on('click',()=>{
    // 获取内容,然后变成数字
    let n=parseInt($number.text())
    n+=1
    // 然后把它存为n,方便下次调用
    localStorage.setItem('n',n)
    // +1之后再给他放回去
    $number.text(n)
})
$button2.on('click',()=>{
    let n=parseInt($number.text())
    n-=1
    localStorage.setItem('n',n)
    $number.text(n)
})
$button3.on('click',()=>{
    let n=parseInt($number.text())
    n*=2
    localStorage.setItem('n',n)
    $number.text(n)
})
$button4.on('click',()=>{
    let n=parseInt($number.text())
    n/=2
    localStorage.setItem('n',n)
    $number.text(n)
})