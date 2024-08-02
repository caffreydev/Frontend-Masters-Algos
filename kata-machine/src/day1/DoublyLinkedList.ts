type Node<T> = {
    val: T,
    prev?: Node<T>,
    next?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode: Node<T> = {
            val: item,
            prev: undefined,
            next: this.head
        };
        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;
}

    insertAt(item: T, idx: number): void {
        if (this.length < idx) return;
        const newNode: Node<T> = {
            val: item,
            prev: undefined,
            next:undefined
        }
        if (this.length === 0) {
            this.head = this.tail = newNode;
            this.length++;
            return;
        }
        if (idx === this.length) {
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        let curr = this.head;
        if (idx < this.length/2) {
            for (let i = 0; i < idx && curr; i++) {
                curr = curr.next;
            }
        } else {
            curr = this.tail;
            for (let i = this.length -1; i > idx && curr; i--) {
                curr = curr.prev;
            }
        }
        if (!curr) return;
        if (curr.next && curr.prev) {
            newNode.prev = curr.prev;
            newNode.next = curr;
            curr.prev.next = newNode;
            curr.prev = newNode;
            this.length++;
            return;
        } 
        if (curr.next) {
            newNode.prev = undefined;
            newNode.next = curr;
            curr.prev = newNode;
            this.head = newNode;
            this.length++;
            return;
        }
        if (curr.prev) {
            newNode.prev = curr.prev;
            newNode.next = curr;
            curr.prev.next = newNode;
            curr.prev = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
}
    append(item: T): void {
        
        const newNode: Node<T> = {
            val: item,
            prev: undefined,
            next:undefined
        }
        if (this.length === 0) {
            this.head = this.tail = newNode;
            this.length++;
            return;
        }
        newNode.prev = this.tail;
        this.tail!.next = newNode;
        this.tail = newNode;
        this.length++;
        return;
}
    remove(item: T): T | undefined {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            if (this.head?.val === item) {
                this.head = this.tail = undefined;
                this.length = 0;
                return item;
            } else {
                return undefined;
            }
        }

        let curr = this.head;
        while (curr && curr.val != item) {
            curr = curr.next;
        }

        if (curr?.val === item) {
            if (curr.next && curr.prev) {
                curr.next.prev = curr.prev;
                curr.prev.next = curr.next;
                this.length--;
                return curr.val;
            } 
            if (curr.next) {
                curr.next.prev = undefined;
                this.length--;
                this.head = curr.next;
                return curr.val;
            }
            if (curr.prev) {
                curr.prev.next = undefined;
                this.length--;
                this.tail = curr.prev;
                return curr.val;
            }
        }
        return undefined;

}
    get(idx: number): T | undefined {
        if (this.length <= idx) return;

        let curr = this.head;
        if (idx < this.length/2) {
            for (let i = 0; i < idx && curr; i++) {
                curr = curr.next;
            }
        } else {
            curr = this.tail;
            for (let i = this.length -1; i > idx && curr; i--) {
                curr = curr.prev;
            }
        }
        return curr?.val;

}
    removeAt(idx: number): T | undefined {
        if (this.length <= idx) return;
        if (this.length === 1) {
                const val = this.head?.val;
                this.head = this.tail = undefined;
                this.length = 0;
                return val;
        }

        let curr = this.head;
        if (idx < this.length/2) {
            for (let i = 0; i < idx && curr; i++) {
                curr = curr.next;
            }
        } else {
            curr = this.tail;
            for (let i = this.length -1; i > idx && curr; i--) {
                curr = curr.prev;
            }
        }
        if (!curr) return;
        if (curr.next && curr.prev) {
            curr.next.prev = curr.prev;
            curr.prev.next = curr.next;
            this.length--;
            return curr.val;
        } 
        if (curr.next) {
            curr.next.prev = undefined;
            this.length--;
            this.head = curr.next;
            return curr.val;
        }
        if (curr.prev) {
            curr.prev.next = undefined;
            this.length--;
            this.tail = curr.prev;
            return curr.val;
        }
        return;
}
}