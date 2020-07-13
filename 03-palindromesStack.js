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


//3) Check for Palindromes using a stack 
/*Write an algorithm that uses a stack to determine whether a given input is palindrome or not. 
Use the following template as a starting point.*/

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const chars = new Stack();
    for (let i = 0; i < s.length; i++) {
        chars.push(s[i]);
    }
    let palindrome = true;
    let i = 0;
    while(chars.top !== null ) {
        const char = chars.pop();
        if (char !== s[i]) {
            palindrome = false;
            break;
        }
        i++
    }
    return palindrome;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

/* https://repl.it/@AngelaBumgarner/palindromeStack#index.js */