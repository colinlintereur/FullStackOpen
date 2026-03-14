import { useState } from "react";

const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  const total = good + neutral + bad;
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good}></StatisticLine>
          <StatisticLine text={"neutral"} value={neutral}></StatisticLine>
          <StatisticLine text={"bad"} value={bad}></StatisticLine>
          <StatisticLine text={"all"} value={total}></StatisticLine>
          <StatisticLine
            text={"average"}
            value={(good - bad) / total}
          ></StatisticLine>
          <StatisticLine
            text={"positive"}
            value={(100 * good) / total + "%"}
          ></StatisticLine>
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} onClick={() => setGood(good + 1)}></Button>
      <Button text={"neutral"} onClick={() => setNeutral(neutral + 1)}></Button>
      <Button text={"bad"} onClick={() => setBad(bad + 1)}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
