
interface Place {
    index: number;
    Mark: string[]; //S,H,A,T
}

function range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function calculateEnergy(places: Place[]): number {
    const mustVisit = places.filter(p => p.Mark.includes('H') || p.Mark.includes('S') || p.Mark.includes('T'));

    let totalEnergy = 0;

    for (let i = 0; i < mustVisit.length - 1; i++) {
        const from = mustVisit[i];
        const to = mustVisit[i + 1];

        const isStationFrom = from.Mark.includes('A');
        const isStationTo = to.Mark.includes('A');

        const distance = Math.abs(to.index - from.index);

        if (isStationFrom && isStationTo) {
            // Free ride
            console.log(`Ride from ${from.index} to ${to.index} (free)`);
        } else {
            // Walking
            totalEnergy += distance;
            console.log(`Walk from ${from.index} to ${to.index} (${distance} energy)`);
        }
    }

    return totalEnergy;
}

function minEnergy(start: number, shops: number[], stations: number[], target: number): number {
    const road = range(start, target);
    console.log(`Road from ${start} to ${target}:`, road);
    const places: Place[] = [];
    road.forEach((pos) => {
        const placeTmp: Place = {
            index: pos,
            Mark: []
        };

        if (pos === start) placeTmp.Mark.push('S');
        if (shops.includes(pos)) placeTmp.Mark.push('H');
        if (stations.includes(pos)) placeTmp.Mark.push('A');
        if (pos === target) placeTmp.Mark.push('T');

        if (placeTmp.Mark.length !== 0) {
            places.push(placeTmp);
        }
        // Debugging output
    });
    console.log(places);
    const energy = calculateEnergy(places);
    console.log("Total minimum energy:", energy);
    return energy;
}

function main(): void {
    const start = 2;
    const shops = [4, 9];
    const stations = [3, 6, 8];
    const target = 10;
    console.log(minEnergy(start, shops, stations, target));
}

main();