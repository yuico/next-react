import { useRouter } from 'next/router'

export default function Person({ownersList}) {
  const router = useRouter();
  return (
    <pre>{JSON.stringify(ownersList, null, 4)}</pre>
  )
}

Person.getInitialProps = async (ctx) => {
  const { query } = ctx
  const ownersList = await (await fetch(`http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`)).json();
  return {ownersList: ownersList}
}