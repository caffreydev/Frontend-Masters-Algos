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
                prev: this.tail,
                next: undefined
            };
            if (this.tail) {
                this.tail.prev = new_node;
            }
            this.tail = new_node;
        }
        this.length++;
}
    insertAt(item: T, idx: number): void {
        if (this.length <= idx) return;
        const firstHalf = idx < this.length/2 ? true : false;
        let counter = firstHalf ? 0 : this.length -1;
        let node = firstHalf ? this.tail : this.head;
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
                next: this.head
            };
            if (this.head) {

                this.head.next = new_node;
            }
            this.head = new_node;
        }
        this.length++;
}
    remove(item: T): T | undefined {
        if (length == 0) return undefined;
        
        let node = this.tail;
        let counter = 0;
        while (counter++ < length) {
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
        console.log(this.tail, 'tail')
        if (this.length <= idx) return undefined;

        const firstHalf = idx < this.length/2 ? true : false;
        let counter = firstHalf ? 0 : this.length -1;
        let node = firstHalf ? this.tail : this.head;
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