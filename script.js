let studentList = [
    {
        studentName: 'Davi',
        firstGrade: 7,
        secondGrade: 8,
    },

    {
        studentName: 'Silmara',
        firstGrade: 9,
        secondGrade: 10,
    },

    {
        studentName: 'Baruc',
        firstGrade: 10,
        secondGrade: 10,
    },

    {
        studentName: 'Elvis',
        firstGrade: 7,
        secondGrade: 9,
    }           
]

function calculateAverage(firstGrade, secondGrade) {
    let average = (firstGrade + secondGrade) / 2;
    return average;
}

for (let student of studentList) {
    let individualAverage = calculateAverage(student.firstGrade, student.secondGrade);
    let passedOrNot = individualAverage < 7 ? 'Infelizmente você não atingiu a média 7. Tente outra vez' : 'Parabéns, você foi aprovado!';

    alert(`A média de ${student.studentName} é ${individualAverage}.
${passedOrNot}`);
}


