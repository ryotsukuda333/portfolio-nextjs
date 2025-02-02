// app/page.tsx
export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      {/* 自己紹介セクション */}
      <section className="hero bg-base-200 p-6 rounded-lg mb-8">
        <div className="hero-content flex-col lg:flex-row">
          {/* アイコン or プロフィール写真 */}
          <img
            src="/profile.jpg" // あなたの画像をpublicフォルダに置いた場合
            alt="Profile"
            className="max-w-xs rounded-full shadow-2xl w-40 h-40 object-cover"
          />
          <div className="lg:ml-8 mt-4 lg:mt-0 text-center lg:text-left">
            <h1 className="text-4xl font-bold">John Doe</h1>
            <p className="py-4 max-w-md">
              フリーランスのソフトウェアエンジニアです。Webアプリ開発を中心に、
              主にReact/Next.jsやNode.jsによるサービス構築を手がけています。
              最新の技術をキャッチアップしながらユーザが使いやすいプロダクトを作るのが好きです。
            </p>
            <button className="btn btn-primary">
              <a href="mailto:your-email@example.com">Contact Me</a>
            </button>
          </div>
        </div>
      </section>

      {/* スキル一覧セクション */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-md p-4">
            <h3 className="text-lg font-bold">JavaScript / TypeScript</h3>
            <p>ES6+, TypeScript, Node.js</p>
          </div>
          <div className="card bg-base-100 shadow-md p-4">
            <h3 className="text-lg font-bold">React / Next.js</h3>
            <p>Hooks, SSR, SSG, Redux, etc.</p>
          </div>
          <div className="card bg-base-100 shadow-md p-4">
            <h3 className="text-lg font-bold">Tailwind CSS</h3>
            <p>ユーティリティファーストでの迅速なスタイリング</p>
          </div>
          <div className="card bg-base-100 shadow-md p-4">
            <h3 className="text-lg font-bold">Node.js / Express</h3>
            <p>REST API, WebSocket, microservices</p>
          </div>
          <div className="card bg-base-100 shadow-md p-4">
            <h3 className="text-lg font-bold">Database</h3>
            <p>MySQL, PostgreSQL, MongoDB</p>
          </div>
          <div className="card bg-base-100 shadow-md p-4">
            <h3 className="text-lg font-bold">AWS / GCP</h3>
            <p>EC2, S3, Cloud Run, Firebase など</p>
          </div>
        </div>
      </section>

      {/* SNS / リンクセクション */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Connect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="https://twitter.com/your_account"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/your_account"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your_account/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:your-email@example.com"
              className="text-primary hover:underline"
            >
              your-email@example.com
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
