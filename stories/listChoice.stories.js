import React from 'react';
import ListChoice from '../src/components/ListChoice/ListChoice';

export default {
  title: "ListChoice",
  component: ListChoice
}

export function Bulleted() {
  return (
    <ListChoice 
      listType="bulleted" 
      listItems={["Home", "About"]}
    />
  );
}

export function Numbered() {
  return (
    <ListChoice 
      listType="numbered" 
      listItems={["Home", "About"]}
    />
  );
}