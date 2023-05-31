
export class User{
    _id:String;
    firstName:String;
    lastName: String;
    age: Number;
    role: String;
    password:String;
    token: String;

    constructor(private obj) {
        this._id = obj._id;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.age = obj.age;
        this.role = obj.role;
        this.password = obj.password;
    }
}