import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">馬斯的網路大道</h1>
          <p className="text-xl text-gray-600 mb-8">
            "Read, read, read. Read everything—trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it" Opinions Are My Own
          </p>
          <div className="flex gap-4">
            <Link 
              href="/about" 
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              About Me
            </Link>
            <Link 
              href="/blog" 
              className="px-6 py-3 bg-white text-black border border-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
          <div className="grid gap-6">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-2">软件工程师与机械工程师的演变类比</h3>
              <p className="text-gray-600 mb-4">软件工程师现在正在经历机械工程师在 20 世纪 70 年代和 80 年代所经历的变化...</p>
              <Link 
                href="/blog/engineering-analogy" 
                className="text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
