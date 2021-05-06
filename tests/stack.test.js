const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('pop on empty stack returns undefined', () => {
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.pop()).toBeUndefined();
});

test('pop on stack with two or more elements returns the top element and removes it', () => {
    stack.push("ah");
    stack.push("push it");
    stack.push("push it real good");
    let size = stack.size();
    expect(stack.pop()).toBe("push it real good");
    expect(stack.size()).toBe(size-1);
});
