const Header = ({ name }) => <h2>{name}</h2>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};

const Total = ({ parts }) => (
  <p>
    <b>
      total of {parts.reduce((acc, cur) => acc + cur.exercises, 0)} exercises
    </b>
  </p>
);

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </>
  );
};

export default Course;
