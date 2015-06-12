Scrambled Number Generator
==========


- Plan your execution on white board before forking and cloning.
- Fork and clone this project.
- write unit tests for the generator
  - calling `generate(1000)` should return an array that contains 1000 unique numbers (0-999)
  - generating the numbers twice should have a different order of numbers each time
- commit your work
- create a number generator that generates `n` many numbers
- scramble the numbers
- make your tests pass

the function specification:

````
function name: generate

arguments:
  amount - the amount of numbers to generate, counting from 0, to amount - 1

returns:
  an array containing _`amount`_ many numbers in random order

````

File structure:
  - Scrambled-Number-Generator
    -js
        - challenge-solution.js
    -node_modules
        -.bin
        -chai
        -mocha
    -test
        -generator-spec.js 
    -.gitignore 
    -package.json
    -README.md


where `generator.js` is the implementation  
and `test/generator-spec.js` is the test script


````
npm init
````
````
npm install -D mocha chai
````


run automated tests by running

````
mocha ./test -w
````