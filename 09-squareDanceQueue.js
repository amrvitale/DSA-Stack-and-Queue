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


//9) As people come to the dance floor, they should be paired off as quickly as possible.
//opposite enders all the way down the line
//if several men arrive in a row, they should be paired in the order they came.
//Maintain a queue of "spares" and pair them as appropriate.

function squareDance(){
  let dancers = []
  const SquareDanceQueue = new Queue()
  const WaitingQueue = new Queue()
  SquareDanceQueue.enqueue('F Jane')
  SquareDanceQueue.enqueue('M Frank')
  SquareDanceQueue.enqueue('M John')
  SquareDanceQueue.enqueue('M Sherlock')
  SquareDanceQueue.enqueue('F Madonna')
  SquareDanceQueue.enqueue('M David')
  SquareDanceQueue.enqueue('M Christopher')
  SquareDanceQueue.enqueue('F Beyonce')

  while (SquareDanceQueue.first){
    if (WaitingQueue.first !== null &&
      (SquareDanceQueue.first.value[0]
        !== WaitingQueue.first.value[0])){
              let first = SquareDanceQueue.dequeue()
              let second = WaitingQueue.dequeue()
              dancers.push([first, second])
    } else {
         let first = SquareDanceQueue.dequeue()
         WaitingQueue.enqueue(first)
  } } console.log(dancers)
  }

squareDance()

/* https://repl.it/@AngelaBumgarner/squareDanceQueue#index.js */