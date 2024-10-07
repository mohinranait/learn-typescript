{
    // Type alias
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

    console.log(fullstackDeveloper);
    
}