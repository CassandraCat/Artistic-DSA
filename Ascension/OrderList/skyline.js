class Border {
    constructor(index, height, isLeft) {
        this.index = index;
        this.height = height;
        this.isLeft = isLeft;
    }

    compareTo(border) {
        if (this.index !== border.index) {
            return this.index - border.index;
        }
        if (this.isLeft !== border.isLeft) {
            return this.isLeft ? -1 : 1;
        }
        return 0;
    }
}

function buildingOutline(buildings) {
    // 1. Split one building into two borders and sort by border's index
    let borders = [];
    for (let i = 0; i < buildings.length; i++) {
        let oneBuilding = buildings[i];
        borders.push(new Border(oneBuilding[0], oneBuilding[2], true));
        borders.push(new Border(oneBuilding[1], oneBuilding[2], false));
    }

    borders.sort((a, b) => a.compareTo(b));

    // 2. Traverse borders and record the max height of each index
    let countOfH = new Map();
    let maxHOfPos = new Map();

    for (let i = 0; i < borders.length; i++) {
        let height = borders[i].height;
        if (!countOfH.has(height)) {
            countOfH.set(height, 1);
        } else {
            let count = countOfH.get(height);
            if (borders[i].isLeft) {
                countOfH.set(height, count + 1);
            } else {
                countOfH.set(height, count - 1);
                if (countOfH.get(height) === 0) {
                    countOfH.delete(height);
                }
            }
        }

        if (countOfH.size === 0) {
            maxHOfPos.set(borders[i].index, 0);
        } else {
            maxHOfPos.set(borders[i].index, Math.max(...countOfH.keys()));
        }
    }

    // 3. Draw the buildings outline according to maxHOfPos
    let start = 0;
    let height = 0;
    let res = [];

    for (let [curPosition, curMaxHeight] of maxHOfPos.entries()) {
        if (height !== curMaxHeight) {
            if (height !== 0) {
                res.push([start, curPosition, height]);
            }
            height = curMaxHeight;
            start = curPosition;
        }
    }

    return res;
}

// Test
let buildings = [
    [1, 3, 3],
    [2, 4, 4],
    [5, 6, 1],
];

console.log(buildingOutline(buildings));
