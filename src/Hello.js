import React from "react";

const whatsUp = "What's up"
const todos = [
  "cs4550",
  "cs4300",
  "deliver a book"
]

const Hello = ({hello, goodbye}) =>
  <div>
    <h1>{whatsUp} Hello 234 {hello} {goodbye}</h1>
    <ul>
      {
        todos.map(item =>
          <li>{item}</li>
        )
      }
    </ul>
  </div>
export default Hello
