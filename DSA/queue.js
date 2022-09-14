// queue implementations using array
// FIFO
class AlmaQueue {
    constructor(){
        this.items = [];
    }
    // O(1)
    enqueue(item){
        return this.items.push(item);
    }
    // 0(n)
    //  add1(item){return this.items.unshift(item);}
    // O(n)
    dequeue(){
        return this.items.shift();
    }
    // O(1)
    // remove(){return this.items.pop();}
    peek(){
        return this.items[this.items.length-1];
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length === 0;
    }
    clear(){
        return this.items = [];
    }
}

const myQ = new AlmaQueue();
console.log("queue size - ", myQ.size());
//add
myQ.add(1);
myQ.add("Mango");
myQ.add(true);
console.log("queue size - ", myQ.size());
console.log("queue - ", myQ.items);
//remove
console.log("queue - ", myQ.remove());
console.log("queue - ", myQ.items);

myQ.add("Orange");
console.log("queue - ", myQ.items);


const myQ1 = new AlmaQueue();