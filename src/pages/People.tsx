import { NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';

export default function People({ people }: any) {
  return <div>People: {JSON.stringify(people)}</div>;
}

People.getInitialProps = async (ctx: NextPageContext) => {
  const cookie = ctx.req?.headers.cookie;
  const resp = await fetch('http://localhost:3000/api/people', {
    headers: {
      cookie: cookie!,
    },
  });
  const json = await resp.json();
  return { people: json };
};
