let msg = 'Hei Iam running on TypScript';
console.log(msg);



console.clear();

// interface Person{
//     name: string;
//     age: number;
//     achievements: string[];
//     ismarried: boolean;
//     note: unknown;
// }

// const addsomething = (data: Person): Person | undefined | null => {
    
//     data.name = "Babon"
//     return data
// }


// const person: Person = {
//     name: 'John',
//     age: 20,
//     achievements: ['codding', "dancing"],
//     ismarried: true,
//     note: "",
// }

// let res = addsomething(person);
// if(typeof res !== "undefined" && res !== null){
//     res.age = 33
// }



// =======Type Interface

let myName ='sajjat hossain';
let age = 20;
let isMarried = true;

// let achievements: (string | number | boolean)[] = [1, "codding"]
// achievements.push(true);


//let anyThing: {name: string, age: number} = JSON.parse('"name" : "sajjat", "age" : 25')



const someThing = (msg: string): any => {
    return msg
}

let result: string = 'Hi Now iam learning TypScript'
console.log(result);
