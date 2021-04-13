

1 - If the new keyword is used when calling the function, this inside the function is a brand new object.

2 - If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.

3 - If a function is called as a method, such as obj.method() — this is the object that the function is a property of.

4 - If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.

5 - If multiple of the above rules apply, the rule that is higher wins and will set the this value.

6 - If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.


Here are some really great interview quizzes:

https://dmitripavlutin.com/javascript-this-interview-questions/