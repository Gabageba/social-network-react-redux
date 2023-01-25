 export const required = value => {
  if (value) return undefined

  return 'Поле должно быть заполнено'
 }

 export const maxLength = (maxLength) => {
  return (value) => {
    if (value && value.length > maxLength) return `Максимальная длинна это ${maxLength} символов`
    return undefined
  }
 }

 export const strongPassword = (value) => {
  const minLength = /^.{8,}$/
  const spaces = /^\S$/
   const bigLetter = /^.*[A-Z]*.$/
   const smallLetter = /^.*[a-z]+.*$/

   if (!minLength.test(value) || spaces.test(value) || !bigLetter.test(value) || !smallLetter.test(value)) {
     return `Пароль не соответствует критериям`
   }
   return undefined
 }
