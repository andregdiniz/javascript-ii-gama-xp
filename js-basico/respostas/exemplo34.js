//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado|

function calculateAverage(grade1,grade2,grade3){

    let average = (grade1 + grade2 + grade3)/3;

    if (average >= 7) return "Aprovado";

    if (average >=5 && average < 7) return "Recuperação";
    
    if (average < 5) return "Reprovado";
}

console.log(calculateAverage(8,5,8));

