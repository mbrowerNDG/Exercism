//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const gigaInt = 1e12;
export const gigasecond = (moment) => {

    return new Date(moment.getTime() + gigaInt);
};