import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.id} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">{post.title}</h2>
              </Link>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="text-sm text-gray-500">
                發布於：{new Date(post.date).toLocaleDateString('zh-TW')}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
