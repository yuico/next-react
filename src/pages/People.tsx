import { NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';

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

  if (resp.status === 401 && !ctx.req) {
    Router.replace('/login');
    return {};
  }

  if (resp.status === 401 && ctx.req) {
    ctx.res?.writeHead(302, {
      Location: 'http://localhost:3000/login',
    });
    ctx.res?.end();
    return;
  }

  const json = await resp.json();
  return { people: json };
};
