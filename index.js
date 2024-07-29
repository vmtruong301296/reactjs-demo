const users = {
	id: 1,
	name: "John",
	email: "johndoe@me.com",
	phone: "555-555-5555",
	tags: {
		tag3: "tag1",
		tag2: "tag2",
		tag1: 0,
	},
};
console.log(users?.tags?.tag1);

var data = users?.tags?.tag1 ?? "default"; //undefined or null => default
var data2 = users?.tags?.tag1 || "default"; //undefined , null, NaN, 0, .... => default

console.log(data, data2);
