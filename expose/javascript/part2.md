1. '3' will be printed to the console log at line 12, since i will retain its value after the for loop due to its global scope.
2. '150' will be printed to the console log at line 13, which is the value of the global variable discountedPrice at the end of the for loop.
3. '150' will be printed to the console log at line 14, since finalPrice is a global variable with value 150 at the end of the for loop.
4. This function will return [50, 100, 150], which is the value of discounted.
5. This code will cause an error, as line 12 attempts to print i, which has a block scope, while line 12 is outside of the for loop.
6. This code will cause an error, as line 13 attempts to print discountedPrice, which has a block scope.
7. Since finalPrice has a scope of the entire function, its value of '150' will successfully print to the console log at line 14.
8. Since discounted has a scope of the entire function, its value of [50, 100, 150] will successfully be returned.
9. Similar to problem 5, i has a block scope, so line 11 will return an error as it is out of scope.
10. '3' will be printed to the console log at line 12, as length will constantly keep the value of 3 and has a scope of the entire function.
11. '[50, 100, 150]' will be returned, as discounted has a scope of the entire function.

12A. student.name;
12B. student['Grad Year'];
12C. student.greeting();
12D. student['Favorite Teacher'].name;
12E. student.courseLoad[0];

13A. '32' is outputted, as 2 is concatenated to the string '3'.
13B. 1 is outputted, as numeric conversion occurs to '3' due to subtraction being used.
13C. 3 is outputted, as numeric conversion converts null to 0 when being added to 3.
13D. '3null' is outputted, as null is concatenated to the string '3'.
13E. 4 is outputted, as numeric conversion converts true to 1 when being added to 3.
13F. 0 is outputted, as numeric conversion converts both false and null into 0s when being added.
13G. '3undefined' is outputted, as undefined is concatenated to the string '3'.
13H. NaN is outputted, as numeric conversion converts undefined to NaN due to subtraction being used.

14A. true is outputted as '2' is converted into a number.
14B. false is outputted as '2' is lexographically greater than '12'.
14C. true is outputted as '2' is converted into a number and thus equal to 2.
14D. false is outputted as no type conversion occurs and thus '2' and 2 are not equal.
14E. false is outputted true is converted into 1, which is not equal to 2.
14F. true is outputted as boolean(2) will equal true without the need for type conversion.

15. == checks if the two variables are equal, while === is a strict equality check that checks if two variables are
equal without any type conversion.

17. The function will output an array with the values [2, 4, 6]. The function first creates a constant variable newArr,
then iterates though each value in the input array and calls back the function doSomething(num), which will multiple a value
in the original array by 2. The value obtained from calling doSometing is then pushed into newArr. 

19. The output of this code is:
1
4
3
2
