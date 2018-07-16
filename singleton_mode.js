/**
 * JS设计模式之--单例模式：单例模式是用来分割多个命名空间，防止命名覆盖
 */

// 这里提到了一个惰性单例, 用来临时调用函数。

var LazySingle = function () {
    var _instance = null;
    function Single () {
        return {
            lazy_single_function: function () {},
            lazy_single_property: '单例属性'
        }
    }
    // 这里用函数返回值是为了判断_instance是否存在, 避免重复创建
    return function () {
        if ( !_instance ) {
            _instance = Single();
        }
        return _instance;
    }
}()

// 调用的时候就根据需要调用函数或属性, 而不用考虑命名, 因为都在LazySingle命名空间下