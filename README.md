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

## Learn More

```bash
 git clone repo-name
```
