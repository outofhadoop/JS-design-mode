/**
 * 原型模式--prototype mode, 将原型对象指向创建对象的类, 使这些类共享原型对象的方法与属性
 */

var Basic = function () {
    // 公有, 可被继承, 可被修改
    this.public = 'public';
    // 私有, 原型链中不可被继承
    var privacy = 'pravacy';
    // 为私有方法添加提供访问接口: get, set方法
    this.getPrivacy = function () {
        return privacy;
    };
    this.setPrivacy = function ( p ) {
        privace = p;
    };
}
// 可被继承, 重写的方法
Basic.prototype.basicFunction = function () {};

// 创建类
var Child = function () {};
var Child1 = function () {};
// 继承基类
Child.prototype = new Basic();
Child1.prototype = new Basic();
// 重写基类方法
Child.prototype.basicFunction = function () {};
// 创建实例对象
var c = new Child();
var c1 = new Child1();


/**
 * 原型链的一个特点是拓展性比较强. 对基类添加方法会被添加到原型链上去, 原型链上的所有对象都会添加这个方法
 */
Basic.prototype.newFunciton = function () {};

// 原型链上的对象都可以访问到
c.basicFunction();
c1.basicFunction();
c.newFunciton();
c1.newFunciton();

/**
 * 基于已经存在的模板对象克隆出新对象
 */
function prototypeExtend () {
    // 缓存类
    var F = function () {};
    // 模板 ( 作为参数传进来, 用arguments参数数组获取 )
    var arg = arguments;
    // 将所有的对象属性放入F中
    arg.forEach(element => {
        for ( var j in element ) {
            F.prototype.j = element[j];
        }
    });
    // 返回带有所有属性和方法的实例
    return new F();
}