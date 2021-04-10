import { NextPageContext } from 'next';
import React from 'react';

export default function People({ people }: any) {
  return <div>People: {JSON.stringify(people)}</div>;
}

People.getInitialProps = async (ctx: NextPageContext) => {
  const resp = await fetch('http://localhost:3000/api/people');
  const json = await resp.json();
  return { people: json };
};
