/**
 * @name abstract-factory-mode
 * @todo test and summarize abstract factory mode in pratice
 * @description 抽象工厂模式：通过对累的工厂抽象使其业务用于对产品类簇的创建，而不负责创建某一产品的实例。
 * Abstract Factory: The factory's abstraction of the class allows its business to be used to create a cluster of product classes without being responsible for creating instances of a product.
 * 
 */


var VehicleFactory = function ( childClass, superClass ) {
    // 这里校验是否有这个抽象类
    if ( typeof VehicleFactory[ superClass ] == 'function' ) {
        function F() {};
        F.prototype = new VehicleFactory[ superClass ]();
        childClass.constructor = childClass;
        childClass.prototype = new F();
    } else {
        return new Error( '没有声明此抽象类!' );
    }
}

/**
 * 这里声明一个抽象类
 */
VehicleFactory.AbstractClass = function () {};
VehicleFactory.AbstractClass.doSomething = function () { 
    return new Error( 'AbstractClass抽象类的抽象方法未被重写，无法调用!' );
 }

 /**
  * 声明子类用抽象方法继承抽象类
  */
 var ChildClass = function () {};
 VehicleFactory( ChildClass, 'AbstractClass' );
//  到此ChildClass就继承了抽象类AbstractClass的抽象方法,但是并没有重写. 