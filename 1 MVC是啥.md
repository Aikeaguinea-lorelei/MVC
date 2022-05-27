## 每个模块都能分成三个对象

1. M-model `数据模型`,负责操作所有数据
```js
const m=new Model({
    data:{
        n:parseInt(localStorage.getItem('n'))  //导入上次保存的参数
    },
    m.xxx(){}
})
```
2. V-view `视图`, 负责所有UI界面
```js
const v=new View({
    el:null,
    html:(index)=>{
        return`xxx`  // 可以是函数,也可以是字符串
    },
    init(el){  // 初始化,接受一个元素,这个元素会被作为容器
        v.el=$(el)
    },
    render(){}
})
```
3. C-controller `控制器`, 负责其他
```js
const c={
    v:null,
    init V(){
        const v=new View({
            el:container,
            html:(index)=>{
                return`xxx`  // 可以是函数,也可以是字符串
            },
            init(el){  // 初始化,接受一个元素,这个元素会被作为容器
                v.el=$(el)
            },
            render(){}
        })
    }
    init(container){
        // 然后把const v装进来,实现 c v 的合并
        v.render(m.data.n)
        c.xxx()
    }
}
```

### 先进方法引入css

`在js里`import './xxx.css'

### 先进方法引入jQuery

`在终端里`
1. yarn add jQuery(或者npm i jquery)
2. 删掉[node-modules]文件
3. 删掉[package.JSON]文件
4. [初始化一下]yarn init -y
5. `再一次`yarn add jQuery
6. `在JS里`import $ from 'jQuery'




## eventBus的API

1. `getEventBus:function(){}`  直接返回前端EventBus对象
2. `subscribeEvent:function(event,fn,pointcut){}`  注册事件，并指定实现方法和插入点
   * 参数：event：字符串形式事件名，命名规则为Event或ActionEvent结尾
	      fn：实现方法
	      插入点类型：after、overwrite、before
3. `unSubscribeEvent:function(event){}`  取消注册事件
4. `fireEvent:function(event){}`  触发某个具体事件，执行这个事件对于的实现方法队列




## 表驱动编程

1. 定义: 表驱动编程是指,不使用if&else语句,而是通过在表里面查找条件和它对应的指令,来控制代码逻辑的编程方法.
2. 优势: 代码逻辑更简单、更容易修改、效率更高，所以也更具扩展性
3. 使用表驱动编程需要解决的问题: 
     1. 怎样从表中查询条目:直接访问  ||  索引访问  ||  阶梯访问
     2. 在表里存些什么:数据  ||  动作  ||  函数指针




## 如何理解模块化

最开始接触编程的时候,会把所有的html,css,js,json之类的东西全写到一起.这样不仅复杂,而且碰到bug时很难排查.还有就是很难加入新样式新模块

所以,为了使代码直观,便于优化和分工,便于加入新东西,模块化就是非常重要的.模块化就是把不同作用的css/js模块,写到不同的文件当中.然后再一一引用,组合到页面当中.

模块化还有一个好处,就是不影响整体结构.如果一个模块出了bug,不会影响其他部分的正常运行.
