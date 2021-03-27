// Your implementation goes here
class Stack {
    constructor() {
        this.items = Array.from(arguments);
    }

    get size() {
        return this.items.length
    }

    push(item) {
        this.items.push(item);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    pop() {
        return this.items.pop() || null;
    }

    peek() {
        if (this.size >= 1) {
            return this.items[this.items.length - 1];
        }
        throw new Error('Stack is empty!');
    }

    swap() {
        if (this.size > 1) {
            [
                this.items[this.items.length - 1],
                this.items[this.items.length - 2]
            ] = [
                this.items[this.items.length - 2],
                this.items[this.items.length - 1]
            ]
        } else {
            throw new Error('Not enough element to swap!');
        }
    }
}

module.exports = Stack;