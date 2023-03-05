import ReactDOM from "react-dom"
import React from "react"

const clients =["Mr Tony Stark", "Mme Natasha Romanoff"];

class Client extends React.Component {
  render() {
    return (
      <ul>
        {this.props.client.map((client) => (
          <li key={client}>{client}</li>
        ))}
      </ul>
    )
  }
}


ReactDOM.render(
  <Client client={clients} />,
  document.getElementById("root")
);


