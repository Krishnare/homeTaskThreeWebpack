console.log('The print.js module has loaded! See the network tab in dev tools...');


const fetchedData =() =>{
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
    console.log(person);
};

export default fetchedData;