class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
       
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

const peek = stack => {
    if (stack.top === null) {
        return null
    }
    return stack.top.data
}


const isEmpty = stack => {
    if(!stack.top) {
        console.log('Empty stack')
        return;
    }
    console.log(stack.top)
    return stack.top;
}

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

//5) Write a program to sort a stack such tht smallest items are on top (ascending order)
//you can use an additional stack, but you may not use any other data structure (such as array or LL)
function createStack(){
    const unsorted = new Stack
    unsorted.push(11)
    unsorted.push(3)
    unsorted.push(45)
    unsorted.push(17)
    unsorted.push(32)
    unsorted.push(6)
    
    return unsorted
}

function sortStack(input){
    // create a temporary stack
    const tempStack = new Stack
    // while input is not empty
    while (input.top){
        // pop element from input
        let temp = input.pop()
        //while temp stack not empy and top of temp stack is less than temp
        while (tempStack.top && tempStack.top.data<temp){
            // pop from temp stack and push to input stack
            input.push(tempStack.pop())
        }
        //push temp to temp stack
        tempStack.push(temp)
    }
    console.log(display(tempStack))
}
let sort = createStack()
console.log(sortStack(sort))