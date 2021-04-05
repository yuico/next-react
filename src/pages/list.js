import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function List({ownersList}) { 
  /* const [owners, ownersSet] = useState([]);
  useEffect(() => {
    async function loadData() {
      const res = await fetch('http://localhost:4001/vehicles');
      const ownersList = await res.json();
      ownersSet(ownersList);
    }

    loadData();

  }, [])  */
  return (
    <div>
      {ownersList.map(d=>(
        <div>
            <Link as={`/${d.vehicle}/${d.ownerName}`} href="/[vehicle]/[person]">
            <a>Navigate to {d.ownerName}'s {d.vehicle}</a>
          </Link>
        </div>
      ))}
     
    </div>
  )
}

List.getInitialProps = () => {
  return {ownersList: [{ownerName: 'Yui'}]}
}
