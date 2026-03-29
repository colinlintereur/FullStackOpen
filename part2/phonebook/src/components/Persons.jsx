const Persons = ({ persons, filter, deletePerson }) => {
  return persons
    .filter((person) =>
      person.name.toUpperCase().includes(filter.toUpperCase()),
    )
    .map((person) => (
      <div key={person.id}>
        <p>
          {person.name} {person.number}{" "}
          <button onClick={() => deletePerson(person)}>delete</button>
        </p>
      </div>
    ));
};

export default Persons;
