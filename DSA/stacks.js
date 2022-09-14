// stack implementations using array
class AlmaStack {
    constructor(){
        this.items = [];
    }
    // O(1)
    add(item){
        return this.items.push(item);
    }
    // O(1)
    remove(){
        return this.items.pop();
    }
    // supportive methods
    peek(){
        return this.items[this.items.length-1]
    }
    size(){
        return this.items.length;
    }
    // boolean - true/false
    isEmpty(){
        return this.items.length === 0;
    }
    clear(){
        return this.items = [];
    }
}

const myStack = new AlmaStack();

console.log("stack size - ", myStack.size());
//add
myStack.add(1);
myStack.add("Mango");
myStack.add(true);
console.log("stack size - ", myStack.size());
console.log("stack - ", myStack.items);
//remove
console.log("stack - ", myStack.remove());
console.log("stack - ", myStack.items);

myStack.add("Orange");
console.log("stack - ", myStack.items);


const myStack2 = new AlmaStack();