# Section 1

**You are tasked to build a new product, an online restaurant reservation platform -
choose a front-end language/framework, back-end language/framework and a database
management system. Tell us why you’ve chosen this stack:**

I would go with **React** for front-end and **Firebase** for back-end. The reason is that I am most familiar and comfortable with this stack as I have done several projects with it.

Why ReactJS?

There are tons of libraries for ReactJS that can help speed up the development process. Considering the online reservation platform, the libraries [Formik](https://github.com/jaredpalmer/formik) and [react-datetime](https://github.com/YouCanBookMe/react-datetime) are suitable for building forms for users to fill up their details and datetime of the reservation.

In order to verify the reservation made by customer, I would go with [QR code scanner](https://docs.expo.io/versions/latest/sdk/bar-code-scanner) provided by Expo, that would reduce the queue time during peak hours and lesser workload for the restaurant as well. However, this would require a mobile application for scanning, hence I would go with React Native Web to build this platform.

[React Native Web](https://github.com/necolas/react-native-web) allows the same codebase to work on both mobile and website, where developers and select which components to show on each platform. This would shorten the development time when compared to building for both platform with a separate codebase.

Why Firebase?

There are plenty of features that Firebase offers that would offer, such as [Realtime Database](https://firebase.google.com/docs/database) which would update all devices whenever there's an update in the database. This can be useful for the platform as customers are able to see if there are any tables left for the restaurant in real time.

[User Authentication](https://firebase.google.com/docs/auth) is another feature by Firebase which allows users to sign in with other identity providers such as Facebook, Google or Twitter. Using this would also be more secure for the Admin page of the platform, because it would be harder to penetrate services provided by Google than manually setting up a database.

# Section 2

In the programming language of your choice, write the solution for the following questions:

**1. Write a for loop that prints all the multiples of 3 and 5 up to 100:**

- 3, 5, 6, 9, 10...100

**Solution**:

```js
const multiples = () =>
  [...Array(101).keys()].filter(num => num % 3 === 0 || num % 5 === 0);
```

First, I generated an empty array using `Array(101)`, in order to get value 0 ~ 100 I use the `keys()` function, which returns an object with keys of each index. To turn the object into array, I used spread operator (`...`) and contain inside an array to generate an array from 0 to 100

Then, I used `filter()` function to filter and remove the values that does not meet the condition given.

`num % 3 === 0 || num % 5 === 0`

There are two conditions separated by `||` which is the OR operator. I used modulo operator (`%`), which would return a remainder after dividing 3 or 5, if the remainder is 0 that means the number is a multiple of 3 or 5.

---

**2. The highest common factor of N numbers is the largest positive integer that
divides all numbers without giving a remainder. Write an algorithm to determine the highest common factor of N positive integers.**

**Input**

The input to the function / method consists of two arguments:

- num, an integer representing the number of positive integers (N)
- arr, a list of integers
- findHCF(num, arr) → HCF

**Output**

Return an integer representing the highest common factor of the given positive integers.

- findHCF(5, [2, 4, 6, 8, 10]) → 2
- findHCF(5, [2, 3, 4, 5, 6]) → 1
- findHCF(3, [-3, -1, 1, 3, 21]) → 3
- findHCF(4, [-1, 4, 48, 12, 8]) → 4
- findHCF(1, [-1, -2, -3, -4, 21]) → 21

**Solution**:

```js
const hcf = (a, b) => (a === 0 ? b : hcf(b % a, a));

const findHCF = (num, arr) => {
  let positive = arr.length - num;
  let result = arr[positive];
  for (let i = positive; i < arr.length; i++) {
    result = hcf(arr[i], result);
  }
  return result;
};
```

First, I wrote the Highest Common Factor algorithm for 2 digits, it takes in 2 parameters `(a, b)` and checks whether a equals to 0 with `a === 0` using a ternary operator, if it is then `b` is returned because it is the Highest Common Factor.

If `a` does not equal to zero, it runs the same function again which turns into a recursive function. However, the arguments are different this time `(b % a, a)`, this is to allow each digits to take turn returning the remainder number. Once the remainder is 0, the other number is then the Highest Common Factor.

After finishing the HCF for two digits, I wrote a second function `findHCF(num, arr)` to check through all the positive digits in an array.

`let positive = arr.length - num;`

The first parameter `num` shows how many positive integers there is, hence the first line will is to find the index of the first `positive` number.

`let result = arr[positive];`

Then, I assigned the first positive number in the array as `result` to be the first value to find the Highest Common Factor.

After that, there's a `for loop` that runs the previously written `hcf()` function to check the Highest Common Factor one by one of each value in the array, which will exit after going through all the values and return the Highest Common Factor.

---

**3. Write a function that detects whether a string is a palindrome:**

- ‘tacocat’ → true
- ‘racecar’ → true
- ‘beanbag’ → false
- ‘Hannah’ → true

**Solution**:

```js
const palindrome = text =>
  text.toLowerCase() ===
  text
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    ? true
    : false;
```

First, the text is transformed to lowercased using `.toLowerCase()` to allow case sensitive palindromes. Then, the second text is split into array of each letter using `split("")`, reversed the order of each letter using `reverse()` and combined back together from array to string using `join("")`.

A ternary operator is used to check if the reversed text equals to the original lowercased text. If they are equal it will return `true` where it is a palindrome.

# Contact Details

- Name: Lee Wei Fan
- Email: weifxn@gmail.com
- Contact number: 016-3229254
- Starting date: 16/12/2019
- Internship duration: 3 months
