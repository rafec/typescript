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