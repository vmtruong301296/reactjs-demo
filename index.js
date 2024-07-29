const users = require("./data");
// console.log(users);

//Filter
const filterUser = users.filter((user) => {
	return user.firstName === "Emily" || user.age > 30;
});

const filterUser2 = users.filter((user) => {
	// let found = false;
	// user.tags.forEach((tag) => {
	//     if (tag === "VIP") {
	//         found = true;
	//     }
	// })
	// return found;
	// return user.tags.includes("VIP");
	// return user.tags.some(tag => tag === "VIP");//bất kỳ thằng nào ở trong array thỏa đk
	return user.tags.every((tag) => tag === "VIP"); //tất cả item thỏa đk này mới lấy, chỉ 1 item k thỏa đk k lấy
});
// console.log({ filterUser2 });

//Find
const findUser = users.find((user) => {
	return user.firstName === "Emily" || user.age > 30; //Cùng đk => gặp data nào tìm thấy trước thì trả về phần tử đầu tiên
});
// console.log({filterUser,findUser});

//Map => thay đổi với array hiện tại
const mapUser = users.map((user) => {
	// return user.firstName;
	return {
		...user, //giữ thuộc tính cũ
		firstNameNew: user.firstName.toUpperCase(), //Bổ sung field mới được custom
		lastNameNew: `${user.lastName} Edit`,
	};
});
// console.log({mapUser});

//Thay đổi array thành object với key phone
//Reduce
const reduceUser = users.reduce((acc, user) => {
	//acc: accumulator, user: user (giá trị hiện tại)
	return {
		...acc,
		[user.phone]: user,
	};
}, {}); //muốn reduce về object

// console.log({reduceUserCustom: Object.values(reduceUser)}); // chuyển đổi object thành array với Object.values

const arrayReduceUser = Object.values(reduceUser).reduce((acc, user) => {
	return [...acc, user.phone];
}, []);

// console.log({arrayReduceUser});

const number = [1, 3, 555, 3333, 4444];

const reduceNumber = number.reduce((acc, number) => {
	return acc + number;
}, 0); //Giá trị tham số khởi đầu = 0

console.log({ reduceNumber });
