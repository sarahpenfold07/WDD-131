const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const fruitUl = document.querySelector('#ul-1');
const studentUl = document.querySelector('#ul-2')

let html = '';

fruits.forEach((fruit) => {
    html += `<li>${fruit}</li>`;
})

fruitUl.innerHTML = html;

const students = [
    {last: 'Andrus', first: 'Aaron', grade: 'A'},
    {last: 'Masa', first:'Manny', grade: 'B'},
    {last: 'Tanda', first: 'Tamanda', grade: 'A' }
]; 

let studentHTML = '';

students.forEach((student) => {
    studentHTML += `<li>
    ${student.first} ${student.last} 
    --> Grade: ${student.grade}
    (${convert(student.grade)} points)
    <hr>
    </li>`;
});

studentUl.innerHTML = studentHTML;


