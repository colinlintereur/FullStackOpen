import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personsIndex = persons.findIndex((p) => p.name === newName);

    if (personsIndex >= 0) {
      const updatedPerson = {
        ...persons[personsIndex],
        number: newNumber,
        id: persons[personsIndex].id,
      };
      return updatePerson(updatedPerson);
    }

    const person = {
      name: newName,
      number: newNumber,
    };

    personService.create(person).then((newPerson) => {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");

      setMessage(`Added ${newPerson.name}`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    });
  };

  const updatePerson = (person) => {
    personService.updateNumber(person).then((isUpdated) => {
      if (isUpdated) {
        setPersons(persons.map((p) => (p.id === person.id ? person : p)));
        setNewName("");
        setNewNumber("");

        setMessage(`Updated ${person.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }
    });
  };

  const deletePerson = (person) => {
    personService.deletePerson(person).then((isDeleted) => {
      if (isDeleted) {
        setPersons(persons.filter((p) => p.id !== person.id));
      }
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
