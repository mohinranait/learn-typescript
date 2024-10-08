{
// Generic with Interface
 
interface Developer<T, X=null> {
    name: string;
    age: number;
    isMarried: boolean;
    watch: T;
    bike: X
}

interface TPoorDev {brand:string;price:number,lock:boolean}
const poorDeveloper : Developer<TPoorDev> = {
    name: "X",
    age: 45,
    isMarried: false,
    watch: {
        brand: "HP",
        price: 45,
        lock: false,
    },
}


interface TRichType {
    brand: string;
    price: number;
    sleepCapacity: boolean;
    color: string;
}

interface TBikeType {
    brand: string;
    color: string;
    capacity: number;
}

const richDev: Developer<TRichType,TBikeType> = {
    name: "Y",
    age: 41,
    isMarried: true,
    watch: {
        brand: "Apple",
        price:100,
        sleepCapacity: true,
        color: 'black',
    },
    bike: {
        brand: "Suzuki",
        color: 'black',
        capacity: 3,
    }
}
}