
/*
CODE WARS LINK:
https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
*/

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];



const numberOfPeopleFromEurope = function(personList) {
    return personList.filter((person) => person.continent == 'Europe' && person.language == 'JavaScript').length
}

console.log(numberOfPeopleFromEurope(list1))