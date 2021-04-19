export const verifyPhoneNumberService = (phoneNumber: string) => {
  return new Promise<{ data: string }>((resolve, reject) => {
    setTimeout(() => {
      const re = /^\d+$/;
      const valid =
        phoneNumber.match(re) &&
        phoneNumber.length >= 9
      if (valid) {
        resolve({ data: phoneNumber });
        alert(`Your OTP: 1111`);
      } else {
        reject('Invalid Mobile number');
      }
    }, 1000);
  });
};
