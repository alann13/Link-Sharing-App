export const checkPasswordMatch = (createdPassword: string, confirmedPassword: string): boolean => {
  return createdPassword === confirmedPassword
}

export const checkPasswordLength = (createdPassword: string): boolean => {
  return createdPassword.length >= 8
}
