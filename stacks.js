// Stacks

// functions: push, pop, peek, length

class Stack {
    constructor() {
        this.storage = {}
        this.count = 0
    }


    push(value) {
        // add to object
        this.storage[this.count] = value
        this.count++
    }

    pop() {
        if(this.count === 0) {
            return undefined
        }

        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    peek() {
        return this.storage[this.count-1]
    }

    length() {
        return this.count
    }
}

let stack = new Stack()

stack.push('hey')
stack.push('world')

console.log(stack)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)

