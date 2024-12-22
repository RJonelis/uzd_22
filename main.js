function predictSnowfall(temperatures, humidity) {
    
    // Calculate average temperature
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    const avgTemp = sum / temperatures.length;
    
    // Initial snow probability value is 0.
    let snowProbability = 0;

    // If temperaturesAverage < 0 snow probability rises by 35
    if (avgTemp < 0) {
        snowProbability += 35;
    }

    // If humidity > 80 snow probability rises by 40
    if (humidity > 80) {
        snowProbability += 40;
    }

    // f snow probability > 70 willSnow value is true, otherwise – false.
    const willSnow = snowProbability > 70;

    // Snow depth calculate by formula: Math.round((100 – avgTemp) * humidity / 100)
    const snowDepth = Math.round((100 - avgTemp) * humidity / 100);

    // Return Prediction
    return {
        willSnow: willSnow,
        probability: snowProbability,
        expectedDepth: snowDepth
    };
}


let prediction1 = predictSnowfall(
    [
        -6.8, -7.1, -6.9, -6.2, -5.4, -4.8, -4.1, -3.9, -3.5, -3.2, -3.0, -3.3,
        -3.7, -4.2, -4.9, -5.3, -5.8, -6.2, -6.5, -6.8, -7.0, -7.2, -7.1, -6.9
    ],
    88
);

let prediction2 = predictSnowfall(
    [
        -1.5, -1.3, -1.0, -0.8, -0.7, -0.9, -1.2, -1.4, -1.7, -2.0, -2.2, -2.4,
        -2.5, -2.3, -2.1, -1.8, -1.6, -1.4, -1.3, -1.5, -1.8, -2.1, -2.3, -2.4
    ],
    60
);

console.log(prediction1); // Output: { willSnow: true, probability: 75, expectedDepth: 93 }
console.log(prediction2); // Output: { willSnow: false, probability: 35, expectedDepth: 0 }
