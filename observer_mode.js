/**
 * 观察者模式--（消息机制）--（发布-订阅者模式）
 * 定义了一种依赖关系，解决了主体对象与观察者之间功能的耦合
 */

var Observer = (function () {
    var __message = {};
    return {
        // 消息注册
        register: function (type, fn) {
            if ( typeof __message[type] == undefined ) {
                __message[type] = [ fn ];
            } else {
                __message[type].push(fn);
            }
        },
        // 发布
        fire: function (type, args) {
            if ( !__message[type] ) {
                return ;
            } else {
                var event = { type: type, args: args == undefined ? {} : args },
                    i = 0,
                    len = __message.length;
                for ( ; i < len; i++ ) {
                    // 参数以对象方式传递
                    __message[type][i].call(this, event);
                }
            }
        },
        remove: function (type, fn) {
            if ( __message[type] instanceof Array ) {
                var i = __message[type].length - 1;
                // 从数组尾部遍历，可以防止相同函数遗漏
                for ( ; i >= 0; i-- ) {
                    __message[type][i] === fn && __message[type].splice(i, 1);
                }
            }
        }
    }
})();