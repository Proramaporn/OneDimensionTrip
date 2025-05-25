
interface Place {
    index: number;
    Mark: string[]; //S,H,A,T
}

function range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function minEnergy(start: number, shops: number[], stations: number[], target: number): number {
    const road = range(start, target); // Example usage of range function
    console.log(`Road from ${start} to ${target}:`, road);
    const places: Place[] = [];
    road.forEach((index, element) => {
        const placeTmp: Place = {
            index: road[element],
            Mark: []
        };

        if (placeTmp.index === start) {
            placeTmp.Mark.push('S');
        }
        if (shops.includes(placeTmp.index)) {
            placeTmp.Mark.push('H');
        }
        if (stations.includes(placeTmp.index)) {
            placeTmp.Mark.push('A');
        }
        if (placeTmp.index === target) {
            placeTmp.Mark.push('T');
        }
        if (placeTmp.Mark.length !== 0) {
            places.push(placeTmp);
        }
        // Debugging output
    });
    console.log(places);
    places.forEach(place => {
        place.Mark.forEach(mark => {


        })
    });
    return 42;
}

function main(): void {
    const start = 2;
    const shops = [4, 9];
    const stations = [3, 6, 8];
    const target = 10;
    console.log(minEnergy(start, shops, stations, target));
}

main();