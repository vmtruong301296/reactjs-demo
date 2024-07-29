function test() {
	setTimeout(() => {
		console.log("1");
	}, 0);
	console.log("2");
	console.log("3");
}

function httpGetAsync(url, resolve, reject) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			resolve(xmlHttp);
		}
	};
	xmlHttp.open("GET", url, true); // true for asynchronous
	xmlHttp.send(null);
}

//Promise
const currentPromise = new Promise((resolve, reject) => {
	httpGetAsync("https://picsum.photos/200/300", resolve, reject);
});

const promise2 = new Promise((resolve, reject) => {
	httpGetAsync("https://picsum.photos/200/300", resolve, reject);
});

const promise3 = new Promise((resolve, reject) => {
	httpGetAsync("https://picsum.photos/200/300", resolve, reject);
});

// currentPromise
// 	.then((data) => {
// 		document.getElementById("img_1").src = data.responseURL;
// 		return promise2;
// 	})
// 	.then((data) => {
// 		document.getElementById("img_2").src = data.responseURL;
// 		return promise3;
// 	})
// 	.then((data) => {
// 		document.getElementById("img_3").src = data.responseURL;
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// test(0);

//Same Promise
const executeAsync = async () => {
	const responseURL1 = await currentPromise;
	document.getElementById("img_1").src = responseURL1.responseURL;

	const responseURL2 = await promise2;
	document.getElementById("img_2").src = responseURL2.responseURL;

	const responseURL3 = await promise3;
	document.getElementById("img_3").src = responseURL3.responseURL;
};

executeAsync();
