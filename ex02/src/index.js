import ReactDOM from "react-dom";
import React from "react";

const people = [
  { gender: "male", firstname: "Tony", lastname: "Stark" },
  { gender: "female", firstname: "Natasha", lastname: "Romanoff" },
  { gender: "male", firstname: "Loki", lastname: "of Mischief" },
];

class Clients extends React.Component {
  render() {
    return (
      <ul>
        {this.props.people.map((person) => (
          <li key={person.firstname}>
            {person.gender === "male" ? "Mr" : "Mme"} {person.firstname}{" "}
            {person.lastname}
          </li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <Clients people={people} />,
  document.getElementById("root")
);
