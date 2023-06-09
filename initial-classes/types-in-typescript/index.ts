//Boolean
const isNumber: boolean = false;

//Number
const age: number = 20;
const value: number = 4.5;

//String
const category: string = 'Art';

//Array
const ages: number[] = [23, 28, 45];
const ages2: Array<number> = [23, 53, 21, 41];

//Tuple
const players: [string, number, boolean] = ['Jhon', 2, true];

//Enum
enum ApprovalStatus {
    Approved = '001',
    Pending = '002',
    Rejected = '003'
};
const approvalStatus: ApprovalStatus = ApprovalStatus.Approved;

//Any
const APIReturn: any[] = [123, 'Rafael', false];
const APIReturn2: any = {
    //...
};

//Void
function print(msg: string): void {
    console.log('Hello World!');
};

//Null and Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function create(object1: object) {
    //...
};
create({
    property: 1
});

//Never
function infiniteLoop(): never {
    while (true) { };
};

function errorFunction(message: string): never {
    throw new Error(message);
};

function fail(): never {
    return errorFunction('Something is broken...');
};

//Union Types
function showScore(score: number | string) {
    console.log('Your score is: ' + score);
};
showScore(10);
showScore('10');

//Alias
type Employee = {
    name: string,
    lastName: string,
    birthDate: Date
};

// type Employees = Array<Employee>;
const employees: Employee[] = [{ name: 'Rafael', lastName: 'Brizuena', birthDate: new Date() }];

function printEmployees(employee: Employee[]) {
    //...
};

//Type Assertion
const myAge: any = 20;
myAge as number;

// const input = document.getElementById('number1') as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById('number1');
console.log(input.value);