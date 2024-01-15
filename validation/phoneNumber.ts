function validationPhoneNumber(number: string): boolean {
  // Remove non-digit characters
  const cleanNumber = number.replace(/\D/g, "");

  // Define the pattern for a valid mobile number
  const pattern = /^(09|\d{2})\d{8,9}$/;

  // Test the clean number against the pattern
  return pattern.test(cleanNumber);
}

export default validationPhoneNumber;
