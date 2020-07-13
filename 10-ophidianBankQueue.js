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

//At Ophidian Bank, a single teller serves a long queue of people. New customers
//join at the end of the queue, and teller will serve customer only if
//they have all the appropriate paperwork.
//Write a representation of this queue
//25% of the time (random), a customer's paperwork isn't quite right, and it's back to
//to the end of the queue.
//Show what a few minutes of the bank's lobby would look like.

class OphidianBank {
    constructor() {
      this.customerQueue = new Queue();
    }
  
    addCustomer(name) {
      this.customerQueue.enqueue(name);
      console.log(`Customer "${name}" joined the bank line.`);
    }
  
    serveCustomer() {
      if(!this.customerQueue.first) {
        console.log("All customers have been served.");
        return;
      }
  
      const customer = this.customerQueue.dequeue();
  
      if (Math.random() <= 0.25) {
        console.log(`Sorry, ${customer}, your paper work isn't quite right. Back to the end of the line.`);
        this.customerQueue.enqueue(customer);
      }
      else {
        console.log(`Thanks ${customer}, you're all set to go. Thanks for waiting.`);
      }
    }
  }
  
  let bank = new OphidianBank();
  bank.addCustomer("Angela");
  bank.addCustomer("Derek");
  bank.addCustomer("Teddy");
  bank.addCustomer("Amy");
  bank.addCustomer("Vince");
  bank.addCustomer("Rose");
  bank.serveCustomer();
  bank.serveCustomer();
  bank.serveCustomer();
  bank.serveCustomer();
  bank.serveCustomer();
  bank.serveCustomer();
  bank.serveCustomer();
  bank.serveCustomer();
  bank.serveCustomer();
  bank.serveCustomer();
  bank.serveCustomer();

/* https://repl.it/@AngelaBumgarner/ophidianBankQueue#index.js */