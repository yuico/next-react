import Link from 'next/link'

const people = [
  {v:'car', name:'yui'},
  {v:'bike', name:'kim'},
  {v:'bicycle', name:'Sun'},
]

export default function Details() {
  return (
    <div>
      {people.map(d=>(
        <div>
            <Link as={`/${d.v}/${d.name}`} href="/[vehicle]/[person]">
            <a>Navigate to {d.name}'s {d.v}</a>
          </Link>
        </div>
      ))}
     
    </div>
  )
}
