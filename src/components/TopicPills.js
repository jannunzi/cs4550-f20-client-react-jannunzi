import React from "react"
import {Link} from "react-router-dom";

const TopicPills = () =>
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`/edit/5f8ef65caf042400176ce65a/modules/5f8f3219af042400176cebfc/topics/topic123`}>
          Topic 123
        </Link>
      </li>
      <li>
        <Link to={`/edit/5f8ef65caf042400176ce65a/modules/5f8f3219af042400176cebfc/topics/topic234`}>
          Topic 234
        </Link>
      </li>
    </ul>
  </div>
export default TopicPills
