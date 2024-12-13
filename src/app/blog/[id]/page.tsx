import { getPostData, getSortedPostsData } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id)

  return (
    <main className="min-h-screen p-8 md:p-24">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500 mb-8">
          發布於：{new Date(post.date).toLocaleDateString('zh-TW')}
        </div>
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
        />
      </article>
    </main>
  )
}
