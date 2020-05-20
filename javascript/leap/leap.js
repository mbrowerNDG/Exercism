//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
    return (isLeap ?
        assert(year % 4 == 0) &&
        !assert(year % 100 == 0) ||
       assert(year % 100 == 0 && year % 400 == 0) : false);
}