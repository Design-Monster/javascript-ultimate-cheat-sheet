
A promise is an object that may produce a single value some time in the future.

The value can be either:
A resolved value 
Or
A reason that it’s not resolved (error)


3 possible states:
- Fulfilled
- Rejected
- Pending

let promise = New Promise(function(resolve, reject) {
	setTimeout(function()) {
		resolve(‘I am a promise resolved’);
	}, 2000);
});
promise.then(function(data) {
	console.log(data);
});
promise.then(function(data) {
	console.log(data + ‘, now with multiple callbacks’);
});
