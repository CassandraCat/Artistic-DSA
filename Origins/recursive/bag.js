function bag(weights, values, bag) {
    return process(weights, values, 0, 0, 0, bag);
}

function process(
    weights,
    values,
    index,
    alreadyWeight,
    alreadyValue,
    restWeight
) {
    if (index === weights.length) {
        return alreadyValue;
    }

    let p1 = process(
        weights,
        values,
        index + 1,
        alreadyWeight,
        alreadyValue,
        restWeight
    );
    let p2 = -1;
    if (weights[index] <= restWeight) {
        p2 = process(
            weights,
            values,
            index + 1,
            alreadyWeight + weights[index],
            alreadyValue + values[index],
            restWeight - weights[index]
        );
    }

    return Math.max(p1, p2);
}

// Test
const weights = [2, 2, 4, 6, 3];
const values = [3, 4, 8, 9, 6];
const bagWeight = 9;
console.log(bag(weights, values, bagWeight)); // 18
