import Link from 'next/link'
export default function My() {

  return <div>
    <h1>My</h1>
    <Link href="/about/123">关于我们</Link>
    <div></div>
    <Link href="/">主页</Link>
  </div>
}