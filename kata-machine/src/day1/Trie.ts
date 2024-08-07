type Dict = {[key: string]: Node};

type Node = {
    val: string,
    parent: Node | null,
    children: Dict,
    isWord: boolean
}

export default class Trie {
    private head: Node;

    constructor() {
        this.head = {
            val: '*',
            parent: null,
            children: {},
            isWord: false 
        }
    }

    insert(item: string): void {
        let curr = this.head;
        for (let i = 0; i < item.length - 1; ++i) {
            const char = item[i];
            if (curr.children[char]) {
                curr = curr.children[char]
            } else {
                const newNode: Node = {
                    val: char,
                    parent: curr,
                    children: {},
                    isWord: false
                }
                curr.children[char] = newNode;
                curr = newNode;
            }
        }
        const char = item[item.length - 1];
        if (curr.children[char]) {
            curr.children[char].isWord = true;
        } else {
            const newNode: Node = {
                val: char,
                parent: curr,
                children: {},
                isWord: true
            }
            curr.children[char] = newNode;
            curr = newNode;
        }
}
    delete(item: string): void {
        let curr = this.head;
        for (let i = 0; i < item.length; i++) {
            const char = item[i];
            if (!curr.children[char]) return;
            curr = curr.children[char]
        }
        curr.isWord = false;

}
    find(partial: string): string[] {
        const out: string[] = [];
        let curr = this.head;
        for (let i = 0; i < partial.length; i++) {
            const char = partial[i];
            if (!curr.children[char]) return out;
            curr = curr.children[char]
        }
        this.buildStrings(curr, partial, out)
        return out;
}

private buildStrings(curr: Node, word: string, out: string[]) {
    if (!curr) {
        return
    }
    if (curr.isWord) {
        out.push(word)
    }
    if (Object.keys(curr.children).length === 0) return;
    for (const key in curr.children) {
        this.buildStrings(curr.children[key], word + key, out)
    }
}

}