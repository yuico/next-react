import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default function List({ ownersList }) {
  return (
    <div>
      {ownersList.map((d, idx) => (
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

export interface VehiclePerson {
  details: string;
  ownerName: string;
  vehicle: string;
}

List.getInitialProps = async () => {
  const ownersList = await (
    await fetch('http://localhost:4001/vehicles')
  ).json();
  return { ownersList: ownersList };
};