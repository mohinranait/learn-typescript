{
//   type GenericTypes = {}

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

}