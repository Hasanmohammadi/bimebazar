function validationNationalCode(code: string): boolean {
  // check length
  if (code.length !== 10) return false;

  let nationalCode = parseInt(code);
  const arrayNationalCode: number[] = [];

  // extract digits from number
  for (let i = 0; i < 10; i++) {
    arrayNationalCode[i] = nationalCode % 10;
    nationalCode = Math.floor(nationalCode / 10);
  }

  // Checking the control digit
  let sum = 0;
  for (let i = 9; i > 0; i--) sum += arrayNationalCode[i] * (i + 1);
  const temp = sum % 11;

  if (temp < 2) {
    return arrayNationalCode[0] === temp;
  } else {
    return arrayNationalCode[0] === 11 - temp;
  }
}

export default validationNationalCode;
