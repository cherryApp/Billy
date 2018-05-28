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
}];

function billy(inp) {
    var temp = {};
	var user = {};
    for (let k in inp) {
		temp = {name: '', email: '', age: 0};
		for (let j in inp[k]) {
			if (/^[0-9]*$/.test(inp[k][j])) {
				temp.age = inp[k][j];
            } else if (/@/.test(inp[k][j])) {
				temp.email = inp[k][j];
            } else {
				temp.name = inp[k][j];
            }
		}
        
        if (temp.email == 'billy@gmail.com') {
            return temp;
        }
    }
}
billy(input);
