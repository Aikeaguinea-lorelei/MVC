## 每个模块都能分成三个对象

1. M-model `数据模型`,负责操作所有数据
2. V-view `视图`, 负责所有UI界面
3. C-controller `控制器`, 负责其他
   


## 先进方法引入css

`在js里`import './xxx.css'



## 先进方法引入jQuery

`在终端里`
1. yarn add jQuery(或者npm i jquery)
2. 删掉[node-modules]文件
3. 删掉[package.JSON]文件
4. [初始化一下]yarn init -y
5. `再一次`yarn add jQuery
6. `在JS里`import $ from 'jQuery'
