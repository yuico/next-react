import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { VehiclePerson } from '../../../api/VehiclePerson';
import { NextPageContext } from 'next';

export interface PersonProps {
  /* ownersList: VehiclePerson[] | undefined; */
  ownersList?: VehiclePerson[];
}

export default function Person({ ownersList }: PersonProps) {
  const router = useRouter();
  const [owners, ownersSet] = useState(ownersList);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        `http://localhost:4001/vehicles?ownerName=${router.query.person}&vehicle=${router.query.vehicle}`
      );
      const ownersList: VehiclePerson[] | undefined = await res.json();
      ownersSet(ownersList);
    }
    if (ownersList?.length == 0) loadData();
  }, []);

  if (!owners?.[0]) return <div>loading...</div>;

  return <pre>{owners[0]?.details}</pre>;
}

Person.getInitialProps = async (ctx: NextPageContext) => {
  if (!ctx.req) {
    return { ownersList: [] };
  }

  const { query } = ctx;
  const ownersList = await (
    await fetch(
      `http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`
    )
  ).json();
  return { ownersList: ownersList };
};
