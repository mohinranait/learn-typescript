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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

```
