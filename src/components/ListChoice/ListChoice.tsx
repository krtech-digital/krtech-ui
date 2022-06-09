import * as React from 'react';
import './ListChoice.css';

export const ListChoice = ( props: { listType: string; } ) => {
  const { listType } = props;

  return (
    <React.Fragment>
      {
        listType === "numbered" &&
        <ol className="list-choice list-choice-numbered">
          <li>About</li>
          <li>Contact</li>
          <li>Register</li>
          <li>Learn</li>
        </ol>
      }

      {
        listType === "bulleted" &&
        <ul className="list-choice list-choice-bulleted">
          <li>About</li>
          <li>Contact</li>
          <li>Register</li>
          <li>Learn</li>
        </ul>
      }
    </React.Fragment>
  )
}

export default ListChoice;