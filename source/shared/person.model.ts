/*
* т.к. нет задачи сортировать по дате,
* условимся, что дата - это строка
* */
export interface Person {
  name: string,
  email: string,
  login: string,
  createDate: string
}