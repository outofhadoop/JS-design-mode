/**
 * MVVM， 模型（model） - 视图（view） - 视图模型（ViewModel）
 * 
 */

//  需要在window对象或当前全局对象下绑定一个mvvm模式的对象
~(function () {
    // 获取全局变量
    var window = this || (0, eval)('this');
    // 页面文字大小作为创建UI尺寸的参照
    var FONTSIZE = function () {
        return parseInt(document.body.currentStyle ? document.body.currentStyle['fontSize'] : getComputedStyle(document.body, false)['fontSize']);
    }();
    // 声明一个mvvm对象
    var VM = function () {
        // 定义生成dom元素的方法
        var Method = {
            // 这里只是简单举一个例子
            Button: function (dom, data) {
                var btn = document.createElement('button'), param = data.data;
                // btn.style = {
                //     background: "blue",
                //     border: "none",
                //     width: "100px",
                //     height: "40px",
                //     display: "inline-block"
                // };
                // 减少页面重绘
                window.requestAnimationFrame(function(){
                    btn.style.background = "blue";
                    btn.style.border = "none";
                    btn.style.width = "100px";
                    btn.style.height = "40px";
                    btn.style.display = "inline-block";
                    btn.innerText = param.text;
                    btn.style.cursor = "pinter";
                    btn.style.color = "white";
                });

                // 为DOM添加class， 注意空格
                dom.className += ' ui-button';
                dom.appendChild(btn);
            }
        }
        // 获取视图层绑定的数据
        function getBindData(dom){
            var data = dom.getAttribute('data-bind');
            return !!data && (new Function("return ({" + data + "})"))();
        }
        // 寻找dom,绑定数据并展示元素
        return function () {
            // 获取所有元素
            var doms = document.getElementsByTagName('*'), ctx = null;
            for ( var i = 0; i < doms.length; i++ ) {
                // 获取元素绑定的数据
                ctx = getBindData(doms[i]);
                // 渲染组件
                ctx.type && Method[ctx.type] && Method[ctx.type](doms[i], ctx);
            }
        }();
    }
    // 将VM对象挂载在全局对象下
    window.VM = VM;
})()

// 数据层Model
var uibutton = {
    text: 'ui按钮'
}
// 执行函数
window.onload = function () {
    VM();
}