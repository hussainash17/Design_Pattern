// The Proxy object enables you to create a proxy for another object,
// which can intercept and redefine fundamental operations for that object.

// needs two parameters, target and handler

const target = {
  message: 'hello',
  message1: 'hi',
};

const handler = {
  get: function (target, prop, receiver) {
    console.log(target, prop);
    return 'world';
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message);

console.log(proxy.message1);
