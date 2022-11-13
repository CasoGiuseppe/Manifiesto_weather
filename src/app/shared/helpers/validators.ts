export const emailValidator = (email: string): boolean | undefined => {
  if (email === '') return
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return !pattern.test(email)
}

export const fieldLengthValidator = (value: string, min: number): boolean => {
  return !(value.length > min)
}