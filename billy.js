var input = [{
    name: 'jim@yahoo.com',
    email: 22,
    age: 'Jim Carry'
}, {
    name: 45,
    email: 'John Carmack',
    age: 'john.carmack@ign.com'
}, {
    name: 'Daisy Ridley',
    email: 30,
    age: 'daisy@disney.com'
}, {
    name: 'Billy Idol',
    email: 70,
    age: 'billy@gmail.com'
}]

function billy(inp) {
    var input = inp
    var temp;
    for (let user of input) {
        if (typeof user.name == "number") {
            temp = user.age;
            user.age = user.name
            if (/@/.test(temp)) {
                user.name = user.email
                user.email = temp;
            }
        } else if (typeof user.email == "number") {
            temp = user.age;
            user.age = user.email;
            if (/@/.test(temp)) {
                user.email = temp;
            } else {
                user.email = user.name
                user.name = temp
            }
        }

        console.log(user);


        if (user.email == 'billy@gmail.com') {
            console.log('A keresett user');
            console.log(user);
            //ezt logolja: {name: "Billy Idol", email: "billy@gmail.com", age: 70}
        }
    }
}
billy(input)