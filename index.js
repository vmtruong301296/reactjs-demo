//ES6

var firstName = "Rohit";
var lastName = "Kumar";
const age = 25;
var fullName = `${firstName} ${lastName} , ${age} tuoi
Lam viec tai Can Tho`; //Có thể viết code xuống hàng
const salary = "Safari";
// console.log(fullName);

function person(name, age) {
	return {
		name, //viết ngắn gọn name nếu tên trong function giống nhau
		age,
		getName() {
			//Viết hàm trực tiếp
			return `${name} ${age} tuoi`;
		},
		[`${salary}OfDavid`]: 1000,
	};
}

// console.log(person("Rohit", 25));
// console.log(person("Rohit", 25).getName());

// Extended Parameter Handding
function getnameES6(name = "Sam", age = 20, ...rest) {
	//rest là bộ dữ liệu khác, với tất cả tham số còn lại không có trong function sẽ là mảng
	console.log(`${name} ${age} tuoi`);
	console.log({ rest });
}
// getnameES6("Rohit", 25, "IT", 20000);

// Spread Operator
const todoList = ["Di hoc", "Nau com", "Di choi"];
const todoListMore = ["Lam viec", "Nau nuoc", ...todoList]; //lay array them vao array hien tia
// console.log(todoListMore);

const person2 = {
	name: "Rohit",
	age: 25,
	job: "IT",
};
const worker = {
	...person2,
	salary: 1000,
};
// console.log(worker);

//ES6
const person3 = {
	name: "Rohit", //viết ngắn gọn name nếu tên trong function giống nhau
	age: 25,
	getDescription: function () {
		console.log(`${this.name} ${this.age} tuoi`);

		const getAge = () => {
			console.log(`Nam nay toi ${this.age} tuoi`);
		};
		getAge();
	},
};

// person3.getDescription();
// Destructuring Assignment
const todoList2 = ["Di hoc", "Nau com", "Di choi"];
// const [first, second, third] = todoList2;
// console.log({ first, second, third });

const list = [32, 22];
const [first, second] = list;
// console.log({ first, second });

const getFullName = ({ name, age }) => {
	console.log(`${name} ${age} tuoi`);
};
// getFullName({ name: "Rohit", age: 25 }); // Truyền object vào hoặc array cho function

//Contructor function

//ES5
function person4(name, age) {
	this.name = name;
	this.age = age;

	// console.log(this);
}
// person4("Rohit", 25) => root Object global
const rohit = new person4("Rohit", 25); //Tham chiếu đến object rohit

//Prototype => 1 object cha của 1 object
person4.prototype.getJob = function () {
	return `Cong Viec cua toi la ${this.job}`;
};

var david = Object.create(new person4("David", 20));
david.job = "IT 123";
// console.log(david.getJob());

//ES6
class PersonES6 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	getJob() {
		console.log(`Cong viec cua toi la ${this.job}`);
	}
}

class workerES6 extends PersonES6 {
	//Thừa kế từ thuộc tính cha
	constructor(name, age, job) {
		super(name, age); //Tham số supper
		this.job = job;
	}
}

const worker6 = new workerES6("David", 20, "IT");
// console.log(worker6);
// worker6.getJob();

//Promise : Xử lý những tác vụ sẽ không nhận được kq tại thời điểm hiện tại (gọn code)
const getAllDataFromDB = new Promise((resolve, reject) => {
	setTimeout(() => {
		var database = ["Rohit", "Kumar"];
		resolve(database);
		reject(new Error("Error"));
		console.log("getting data from DB");
	}, 2000);
});

getAllDataFromDB
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
