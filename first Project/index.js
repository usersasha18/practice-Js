const firstMass = 72,
      firstHeight = 1.88,
      secondMass = 82,
      secondHeight = 1.72;


const bmi = firstMass / firstHeight ** 2,
      bmi2 = secondMass / secondHeight ** 2,
      bmiResult = bmi < bmi2;


console.log(bmiResult);