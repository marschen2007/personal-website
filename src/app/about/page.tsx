export default function About() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg text-gray-600 mb-6">
            Routing guy (no switching) - hierarchical L3 not L2 for sure, L7 is not networking at all. 
            Once programmer, not sysadm, now doing app/L7 for living. 終究是網路咖。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="text-lg text-gray-600 mb-6">
            專注於網路層面的技術專家，特別是在 L3 路由領域。從程式開發轉向應用層面的工作，
            但始終保持著對網路技術的熱情和專業。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">專業領域</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
            <li>網路路由技術 (L3)</li>
            <li>應用層開發 (L7)</li>
            <li>網路架構設計</li>
            <li>程式開發</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
