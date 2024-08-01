type Node<T> = {
    value : T,
    prev?: Node<T>,
    next?: Node<T> 
}


export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const newNode = {
            value: item,
            prev: this.head,
            next: undefined,
        }
        if (this.head) {
            this.head.next = newNode;
        }
        this.head = newNode;
        this.length++;
}
    pop(): T | undefined {
        if (this.length == 0) return;
        const value = this.peek();
        if (this.length ==1) {
            this.head = undefined;
            this.length = 0;
            return value;
        }
        this.head!.prev!.next == undefined;
        this.head = this.head!.prev;
        this.length--;
        return value;

}
    peek(): T | undefined {
        return this.head?.value;
}
}