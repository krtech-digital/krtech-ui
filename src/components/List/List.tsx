import React from 'react';
import './List.css';

 function List(props:{[x:string]:any, listType: string}) {

    const {listType} = props;

    return (

    <>
        {
            listType === 'bulleted' &&
              <ul className='list list__bulleted'>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Register</li>
                  <li>Learn</li>
             </ul>

        }

        {
            listType === 'numbered' &&
              <ol className='list list__numbered'>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Register</li>
                  <li>Learn</li>
              </ol>

        }
    </>
    )
}

export default List;

