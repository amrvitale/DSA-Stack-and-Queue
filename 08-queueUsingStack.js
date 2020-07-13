//8) Implement a queue using 2 stacks and no other data structure. 
//You are not allowed to use a doubly linked list or an array.
//Use your stack implementation with a LL from above to solve this problem.

class _Node {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }
  const Stack1 = new Stack();
  const Stack2 = new Stack();
  
  const Enqueue = function (element) {
    Stack1.push(element);
  };
  
  const Dequeue = function () {
    if (Stack2.length === 0) {
      if (Stack1.length === 0) {
        return "Cannot dequeue";
      }
      while (Stack1.length > 0) {
        let p = Stack1.pop();
        Stack2.push(p);
      }
    }
    return Stack2.pop();
  };

  /* https://repl.it/@AngelaBumgarner/queueUsingStack#index.js */