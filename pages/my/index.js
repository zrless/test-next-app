import Link from 'next/link'
import { useRouter } from 'next/router'
export default function My() {
  const router = useRouter();

  return <div>
    <h1>My</h1>
    <div onClick={() => router.push("/about/789")}>关于我们</div>
    <div></div>
    <Link href="/">主页</Link>
  </div>
}