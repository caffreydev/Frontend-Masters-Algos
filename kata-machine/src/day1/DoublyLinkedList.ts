type DLLNode<T> = {
    value: T,
    next?: DLLNode<T>,
    prev?: DLLNode<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: DLLNode<T>;
    private tail?: DLLNode<T>;
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        if (this.length === 0) {
            const new_node : DLLNode<T> = {
                value: item,
                prev: undefined,
                next: undefined
            };
            this.head = this.tail = new_node;
        }
        else {
            const new_node : DLLNode<T> = {
                value: item,
                prev: this.head,
                next: undefined
            };
            if (this.head) {
                this.head.prev = new_node;
            }
            this.head = new_node;
        }
        this.length++;
}
    insertAt(item: T, idx: number): void {
        if (this.length <= idx) return;
        const firstHalf = idx < this.length/2 ? true : false;
        let counter = firstHalf ? 0 : this.length -1;
        let node = firstHalf ? this.head : this.tail;
        if (firstHalf) {
            while (counter++ < idx) {
                if (!node) {
                    return;
                }
                node = node.next;
            }
            const new_node : DLLNode<T> = {
                value: item,
                prev: node,
                next: node?.next
            };
            if (node?.next) {
                node.next.prev = new_node;    
                node.next = new_node;
            }
        } else {
            while (counter-- > idx) {
                if (!node) return;
                node = node?.prev;
            }
            const new_node : DLLNode<T> = {
                value: item,
                prev: node,
                next: node?.next
            };
            if (node?.next) {
                node.next.prev = new_node;    
            }
            if (node) {

                node.next = new_node;
            }

        }

}
    append(item: T): void {
        if (this.length === 0) {
            const new_node : DLLNode<T> = {
                value: item,
                prev: undefined,
                next: undefined
            };
            this.head = this.tail = new_node;
        }
        else {
            const new_node : DLLNode<T> = {
                value: item,
                prev: undefined,
                next: this.tail
            };
            if (this.tail) {

                this.tail.next = new_node;
            }
            this.tail = new_node;
        }
        this.length++;
}
    remove(item: T): T | undefined {
        if (this.length == 0) return undefined;
        
        let node = this.tail;
        let counter = 0;
        while (counter++ < this.length) {
            if (!node) return undefined;
            if (node.value == item) {
                if (node.prev) {
                    node.prev.next = node.next;
                }
                if (node.next) {
                    node.next.prev = node.prev;
                }
                return item;
            }
            node = node.next;
        }
        return undefined;
}
    get(idx: number): T | undefined {
        if (this.length <= idx) return undefined;

        const firstHalf = idx < this.length/2 ? true : false;
        let counter = firstHalf ? 0 : this.length -1;
        let node = firstHalf ? this.tail : this.head;
        if (firstHalf) {
            while (counter++ < idx) {
                if (!node) return;
                node = node.next;
            }
        } else {
            while (counter-- > idx) {
                if (!node) return;
                node = node.prev;
            }
        }
        return node?.value;
    }

    removeAt(idx: number): T | undefined {


        // Handling edge cases and bad inputs
        if (this.length <= idx) return undefined;
        if (idx === 0) {
            const value = this.head?.value;
            this.head = this.head?.next;
            if (this.head) {
                this.head.prev = undefined;
            }
            this.length--;
            return value;
        }
        if (idx === this.length -1) {
            const value = this.tail?.value;
            this.tail = this.tail?.prev;
            if (this.tail) {
                this.tail.next = undefined;
            }
            this.length--;
            return value;
        }
    
        const firstHalf = idx < this.length/2 ? true : false;
        let counter = firstHalf ? 0 : this.length -1;
        let node = firstHalf ? this.head : this.tail;
        if (firstHalf) {
            while (counter++ < idx) {
                if (!node) return;
                console.log(node)
                node = node.next;
            }           
        } else {
            while (counter-- > idx) {
                if (!node) return;
                node = node.prev;
            }
        }
        if (node?.prev) {
            node.prev.next = node.next;
        }
        if (node?.next) {
            node.next.prev = node.prev;
        }
        this.length--;
        return node?.value;
    }
}