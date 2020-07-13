//Walk through the Queue class and understand it well.
//Create a Queue class from scratch with its core functions (enqueue, dequeue)

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }
}


//1) Create a queue using singly linked list called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to queue
const starTrekQ = new Queue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
//console.log(starTrekQ);

//2 Implement a peek() function outside of Queue class that 
//lets you take a peek at what first item in queue is
function peek(queue) {
    if (!queue.first) {
      return 'Queue is empty.';
    }
  
    return queue.first.value;
  }
//console.log(peek(starTrekQ))


//3 Implement an isEmpty function outside of Queue class that allows you to 
//check if the queue is empty or not
function isEmpty(queue) {
    if (queue.first === null) {
        return 'Empty queue.'
    }
    return queue;
}
const myQ = new Queue();
//console.log(isEmpty(myQ));


//4) Implement a display() function outside of queue class that lets you display 
//what is in the queue.
function display(queue) {
    let node = queue.first;
    while (node) {
        console.log(node);
        node = node.next;
    }
}
//console.log(display(starTrekQ));


//5) Remove Spock from queue and display resulting queue.
starTrekQ.dequeue();
starTrekQ.dequeue();
//console.log(display(starTrekQ))

/* https://repl.it/@AngelaBumgarner/SLLQueue */