import { useRouter } from 'next/router'
import Link from 'next/link'
export default function About() {
  const router = useRouter();
  const { id, a } = router.query;

  return <div>
    <h1>About/{id}?a={a}</h1>
    <Link href="/">主页</Link>
    <div></div>
    <Link href="/my">我的</Link>
  </div>;
}
