import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const updateNumber = (updatedPerson) => {
  return window.confirm(
    `${updatedPerson.name} is already added to phonebook, replace the old number with a new one?`,
  )
    ? axios.put(`${baseUrl}/${updatedPerson.id}`, updatedPerson).then(true)
    : Promise.resolve(false);
};

const deletePerson = (person) => {
  return window.confirm(`Delete ${person.name}?`)
    ? axios.delete(`${baseUrl}/${person.id}`).then(true)
    : Promise.resolve(false);
};

export default {
  getAll,
  create,
  updateNumber,
  deletePerson,
};
