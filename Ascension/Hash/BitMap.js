class BitMap {
    constructor(size) {
        this.size = size;
        this.bits = new Array(Math.ceil(size / 32)).fill(0);
    }

    getStatus(index) {
        const numIndex = index / 32;
        const bitIndex = index % 32;
        return (this.bits[numIndex] >> bitIndex) & 1;
    }

    setStatus(index, status) {
        const numIndex = index / 32;
        const bitIndex = index % 32;
        if (status === 1) {
            this.bits[numIndex] |= 1 << bitIndex;
        } else {
            this.bits[numIndex] &= ~(1 << bitIndex);
        }
    }
}

// Test
const bitmap = new BitMap(100);
bitmap.setStatus(10, 1);
bitmap.setStatus(20, 1);
bitmap.setStatus(30, 1);
console.log(bitmap.getStatus(10)); // 1
