// start writing your all api here....

export const getTodosfromAPI = async (ffg) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
};