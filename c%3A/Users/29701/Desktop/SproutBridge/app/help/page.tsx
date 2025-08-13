export default function HelpPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 border-b pb-4">帮助与支持</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">观看帮助</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>点击课程页的“去百度网盘观看”。</li>
            <li>若弹出提取码提示，已自动复制；在打开的页面/网盘App中粘贴即可。</li>
            <li>弱网情况下，先在网盘中“保存到网盘/离线下载”，再回看更流畅。</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">联系我们</h2>
          <p className="text-gray-700">
            如果您遇到任何问题，或有任何建议，欢迎随时通过以下邮箱与我们联系：
          </p>
          <a href="mailto:contact@sproutbridge.top" className="text-blue-600 hover:underline">
            contact@sproutbridge.top
          </a>
        </section>
      </div>
    </main>
  );
}