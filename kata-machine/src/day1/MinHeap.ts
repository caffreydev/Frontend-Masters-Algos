export default class MinHeap {
    public length: number;
    private data: number[]

    

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
       this.data[this.length] = value;
       this.heapifyUp(this.length++)
}

    delete(): number {
        if (this.length === 0) return -1;
        const out = this.data[0]
        if (this.length === 1) {
            this.data = []
            this.length = 0;
            return out;
        }
        this.length--;
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out
}   

private heapifyUp(idx: number): void {
    const parent = this.parent(idx)
    if (idx === 0) return;
    if (this.data[idx] >= this.data[parent]) return;
    const tmp = this.data[idx]
    this.data[idx] = this.data[parent];
    this.data[parent] = tmp;
    this.heapifyUp(parent);
}

private heapifyDown(idx: number): void {
    if (idx >= this.length) return;

    const lIdx = this.leftChild(idx)
    const rIdx = this.rightChild(idx)
    if (lIdx >= this.length) return;

    const lV = this.data[lIdx]
    const rV = this.data[rIdx]
    const v = this.data[idx]
    if (lV > rV && v > rV) {
        this.data[rIdx] = v
        this.data[idx] = rV
        this.heapifyDown(rIdx)
    } else if (rV > lV && v > lV) {
        this.data[lIdx] = v
        this.data[idx] = lV
        this.heapifyDown(lIdx)
    }

}

    private parent(idx: number) : number {
        return Math.floor((idx - 1) / 2);
}

private leftChild(idx: number): number {
    return idx * 2 + 1;
}

private rightChild(idx: number): number {
    return idx * 2 + 2;
}

}