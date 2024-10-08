# Learn TypeScript

### Data Type

```bash

# String Type
let firstName : string = "Md";
let lastName : string = "Jhon";

# Number Types
let num1 : number = 1;
let num2 : number = 2;

# Boolean Type
let isMarried : boolean = false;
let isUnmarried : boolean = true;

# Undefined
let existsData : undefined = undefined;

# NULL
let value : null = null;
```

### Array type

First, run the development server:

```bash
# Number array
let numbersArray : number[] = [1,2,3,4,5];

# String array
let stringArray : string[] = ['a','b','c','d'];

# Number and String Array
let numberAndString : (number | string)[] = ['a',3,4,'b','c'];

# Boolean array
let booleanArray : boolean[] = [true, false]

# Tuple Array
let nameAge : [string, number] = ['Jhon',22];
```

### Tuple types

```bash
let nameAge : [string, number] = ['Jhon',22];
```

### Unions types

```bash
# String OR number
let userAge : (string | number) = 22;

# NULL OR String
let userCompanyName : (null | string)
userCompanyName = null ;
userCompanyName = "Shikder Ambulance";
```

### Object types

```bash

type User = {
    firstName: string;
    lastName: string;
    middleName?: string;
    companyName?: string;
    age: (number | string);
    isMarried: boolean;
    authorize: (null | string);
}

let user : User  = {
    firstName: "Md.";
    lastName: "Jhon";
    middleName:  "Optional";
    age: 21;
    isMarried: false;
    authorize: 'Authorize';
};

const users : User[] = [
    {
        firstName: "Md.";
        lastName: "Jhon";
        middleName:  "Optional";
        age: 21;
        isMarried: false;
        authorize: 'Authorize';
    },
    {
        firstName: "Md.";
        lastName: "Lolon";
        companyName: 'Shikder Ambulance';
        age: 30;
        isMarried: true;
        authorize: null;
    }
]
```

### Functions

```bash
# Function 1
let addFunction1 = ( num1: number , num2: number ): number => {
    return num1 + num2;
}

# Function 2
let addFunction2 = ( num1: number , num2: number ): void => {
    let total : number =  num1 + num2;
    console.log(total)
}

# Print name function
let displayName = ( name: string ): void => {
    console.log(name)
}
displayName("Md. Jhon")

```

### Type alias

```bash
# For Single alias
type UserName = string;
type Role = boolean;
const fullName : UserName = "Md. Jhon";
const isAdmin : Role = false;


# Object alias
type Student = {
    name : string;
    age: number;
    id: number | string;
    phone?: string;
    address: string;
    isMarried: boolean;
}

const student1 : Student = {
    name : "Md. Jhon",
    age: 24,
    id: '84554569654',
    phone: '012487454',
    address: "Dhaka",
    isMarried: false,
}
const student2 : Student = {
    name : "Md. Lolon",
    age: 20,
    id: 89755654,
    address: "BD",
    isMarried: true,
}


# Function alias
# Function 1 | follow previous function
type TN = number;
let addFunction1 = ( num1: TN , num2: TN ): TN => {
    return num1 + num2;
}

# Function 2
let addFunction2 = ( num1: TN , num2: TN ): void => {
    let total : TN =  num1 + num2;
    console.log(total)
}



# Finally FUNCTION Alias
type TNumFunc = (num1: number, num2: number) => number;
let add : TNumFunc = ( num1, num2 ) => {
    return num1 + num2;
}

# Function 2
let sub : TNumFunc = ( num1 , num2 ) => {
    return  num1 - num2;
}



type FrontendDeveloepr = {
    skils: string[];
    designation1: 'Frontend Developer';
}

type BackendDeveloper = {
    skils: string[];
    designation2: "Backend Developer";
}

type FullStackDeveloper = FrontendDeveloepr & BackendDeveloper;

const fullstackDeveloper : FullStackDeveloper = {
    skils: ["HTML","CSS","EXPRESS"],
    designation1: "Frontend Developer",
    designation2: 'Backend Developer',
}


```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Generics Types

```bash
 // Generics Types
type GenericTypes<T>  = Array<T>
const numbers : GenericTypes<number> = [1,2,3,4]
const names : GenericTypes<string> = ['x','y','z']
const troutys : GenericTypes<boolean> = [true, false, true]

type Blog = {
    title: string;
    count: number;
}

const blogs : GenericTypes<Blog>  = [
    {
        title: 'A',
        count: 10
    },
    {
        title: 'B',
        count: 40,
    },

]


// Tuple Generics type
type TGenericTupleType<X,Y> = [X,Y]
const cupple : TGenericTupleType<string, string> = ['X','Y']


const userWithId:TGenericTupleType<number, {name:string; age: number}> = [45645, {name:"X",age:45}]


```

### Generic with Interface

```bash


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
```

## Learn More

```bash
 git clone repo-name
```
