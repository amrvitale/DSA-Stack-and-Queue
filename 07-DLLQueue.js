//Create a queue class using Doubly linked List
//Use the items listed in #6 and enqueue them to your queue.

class _Node {
    constructor(value,prev){
        this.value = value;
        this.prev = prev
        this.next = null;
    }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(item){
    //if empty queue
    if (this.first == null){
      let firstNode = new _Node(item,this.first)
      this.first = firstNode
      this.last = firstNode
    }

    if (this.last){
      let newNode = new _Node(item,this.last)
      this.last.next = newNode
      this.last = newNode
    }
  }

  dequeue(){
    //if empty queue
    if (this.first == null){
      return null
    }

    //if something already in queue
    let node = this.first
    this.first = node.next
    this.first.prev = null

    if (node == this.last){
      this.last == null
    }
    return node.value
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
  let myQ = new Queue();
  myQ.enqueue('Angela')
console.log(peek(myQ))

/* https://repl.it/@AngelaBumgarner/DLLQueue#index.js */