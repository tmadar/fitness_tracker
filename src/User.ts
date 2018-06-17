// export class User {
//     gender: string;
//     firstName: string;
//     lastName: string;
//     weightPounds: number;
//     weightKilograms: number;
//     heightInches: number;
//     heightFeet: number;
//     heightMeters: number;
//
//     constructor(
//         gender: string,
//         firstName: string,
//         lastName: string,
//         weightPounds: number,
//         weightKilograms: number,
//         heightInches: number,
//         heightFeet: number,
//         heightMeters: number
//     ){
//         this.gender = gender;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.weightPounds = weightPounds;
//         this.weightKilograms = weightKilograms;
//         this.heightInches = heightInches;
//         this.heightFeet = heightFeet;
//         this.heightMeters = heightMeters;
//     }
//
//     public getBmiImperial() {
//         let a = (this.weightPounds * 0.45);
//         let feetToInches = (this.heightFeet * 12);
//         let inches = (this.heightInches + feetToInches);
//         let b = (inches * 0.025);
//         let c = (b * b);
//         return (a / c);
//     }
//
//     public getBmiMetric() {
//         let a = this.heightMeters;
//         let b = (this.weightKilograms * this.weightKilograms);
//         return (a / b);
//     }
//
//     public doTest() {
//         console.log('got test');
//     }
// }
//
// export default User;