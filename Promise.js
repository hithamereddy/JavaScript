var y = new Promise((resolve, reject) => { 
	var x = 5 + 5
	if (x == 10) {
		resolve("successful")
	} else {
		reject("failed")
	}
})

y.then((message) => { // .then --> resolve
	console.log("then " + message)
}).catch((message) => { // .catch --> reject
	console.log("catch " + message)
})
