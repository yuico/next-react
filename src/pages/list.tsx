import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { VehiclePerson } from '../../api/VehiclePerson';

export interface ListProps {
  ownersList: VehiclePerson[] | undefined;
}

export default function List({ ownersList }: ListProps) {
  return (
    <div>
      {ownersList?.map((d, idx) => (
        <div key={idx}>
          <Link as={`/${d.vehicle}/${d.ownerName}`} href='/[vehicle]/[person]'>
            <a>
              Navigate to {d.ownerName}'s {d.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

List.getInitialProps = async () => {
  const ownersList: VehiclePerson[] | undefined = await (
    await fetch('http://localhost:4001/vehicles')
  ).json();
  return { ownersList: ownersList };
};
