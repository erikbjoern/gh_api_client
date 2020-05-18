## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples, explanations, and potential use cases. Write your answer below and use markdown to format your text.

### .map
The `.map` function is used on an array, when you e.g. want to perform the same functions, or extract the same information from each item in the array. The syntax `.map((result) => {})` which I use for my search results, lets us access every item in the array through the `result` object, one at a time. So `console.log(result.id)`, when called within the `.map` function would console log the id of each object, one at a time.

### .forEach
The `.map` and the `.forEach` does the same thing, except that `.map` returns a new array, while `.forEach` would need a callback function to do the same.

### .filter
Returns a new array containing the items that meet a specific criteria. For example: 

```
array = [1,2,3,4]
array.filter(number => number % 2 === 0)
```
would return all even numbers, since the remainder when number divided by 2 would be 0.

### .find
Returns the first item that meets the specific criteria. For example:

```
array = ['one', 'two', 'three']
array.find(word => word.length > 3)
```
would return 'three' because it's the first word containing more than three characters.