// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
//We start with an empty 1st node, represented by null and this indicates the top of the stack.
class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

//1) create a stack class
//add core functions (push, pop)



//2) Useful methods for stack - implement helper functions

//peek(): allows you to look at top of stack without removing it

const peek = stack => {
    if (stack.top === null) {
        return null
    }
    return stack.top.data
}

//3) isEmpty(): allows you to check if the stack is empty or not

const isEmpty = stack => {
    if(!stack.top) {
        console.log('Empty stack')
        return;
    }
    console.log(stack.top)
    return stack.top;
}
//4) display(): to display the stack - what is the 1st item in your stack?
const display = stack => {
    if (!stack.top) {
        console.log('Nothing to display, empty stack.')
        return;
    }
    let current = stack.top;
    while(current !== null) {
        console.log(current.data);
        current = current.next;
    }
    return;
}

//create a stack called starTrek and add Kirk, Spock, McCoy, Scotty to stack
const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

console.log(starTrek)

console.log(peek(starTrek));

console.log(isEmpty(starTrek));

console.log(display(starTrek));

//5)Remove McCoy and display stack
starTrek.pop();
starTrek.pop();
console.log(starTrek)

/* https://repl.it/@AngelaBumgarner/starTrekStack */