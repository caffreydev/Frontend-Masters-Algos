type Node<T> = {
    value : T,
    prev?: Node<T>,
    next?: Node<T> 
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        if (this.length == 0) {
            const newNode = {value: item,
            prev: undefined,
            next: undefined}
            this.head = this.tail = newNode;
            this.length++;
            return;
        }


        const newNode = {
            value: item,
            prev: undefined,
            next: this.tail,
        }
        if (this.tail) {
            this.tail.prev = newNode;
        }
        this.tail = newNode;
        this.length++;
}
    deque(): T | undefined {
        if (this.length == 0) return;
        const value = this.peek();
        if (this.length == 1) {
            this.head = this.tail = undefined;
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