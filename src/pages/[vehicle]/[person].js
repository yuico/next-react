import { useRouter } from 'next/router'

export default function Person() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      {router.query.person}'s {router.query.vehicle}
    </div>
  )
}
