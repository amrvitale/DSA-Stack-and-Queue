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

//4) Matching parentheses in expression
/* A stack can be used to ensure that an arithmetic expression has balanced parentheses.
Write a function that takes an arithmetic expression as an argument and returns true or false
based on matching parentheses.
As a bonus, provide a meaningful error message to user as to what is missing.*/

function matchingParentheses(s) {
    const parens = new Stack();
    for (let i = 0; i < s.length; i++) { 
        if (s[i] === "(") {
            parens.push({
                data: s[i],
                index: i
            });
        }
        else if (s[i] === ")") { 
            try {
                parens.pop();
            }
            catch(error) { 
                return "There is an open parentheses at char " + i
            }
            
        }
        
    }
    if (parens.top !== null) { 
        return "There is an extra open parentheses at " + parens.top.data.index;
    }
    return "Matching parentheses"
  
}

console.log(matchingParentheses('()()'))

/* https://repl.it/@AngelaBumgarner/parenthesesStack#index.js */