Switch case statements:

- flows like an if, else
- switch case is only 1 condition
    - in python, you could do and/or

function door(state) {
    let result = 'unknown';

    switch (state) {
        case 0:
            result = 'Closed';
            break;
        case 1:
            result = 'Open';
            break;
    }
    return result 
}

Another way to write it:

function door(state) {
    let result = 'unknown';

    switch (state) {
        case 0:
            return 'Closed';
            break;
        case 1:
            return 'Open';
            break;
        default:
        return 'Invalid result';
    }
}

function fruitColor (fruit) {
    let color = 'unknown';
    switch (fruit) {
        case 'apple':
        case 'cherry':
        case 'strawberry':
            color = 'red'
            break;
        case 'banna':
        case 'lemon':
            color = 'yellow';
            break;
        case 'kiwi':
        case 'lime':
            color = 'green';
            break;
        return color
    }
}

function gradeFromScore (score) {
    switch (true) {
        case score > 100:
            break;
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score 
    }
}


console.log('gradeFromScore(90) -> ', gradeFromScore(90));