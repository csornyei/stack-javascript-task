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
        return this.items[this.items.length - 1];
    }

    swap() {
        if (this.size > 1) {
            const last = this.items[this.items.length - 1];
            const beforeLast = this.items[this.items.length - 2];
            this.items[this.items.length - 1] = beforeLast;
            this.items[this.items.length - 2] = last;
        } else {
            throw new Error('Not enough element to swap!');
        }
    }
}

module.exports = Stack;