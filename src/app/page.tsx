
import { getProfileName, getEmail, getSkills } from "../utils/profile";

export default function Home() {

  const name = getProfileName();
  const email = getEmail();
  const skills = getSkills();


  return (
    <main className="p-6 max-w-4xl mx-auto">
      {/* 自己紹介セクション */}
      {/* bg-base-100 などに変更してみる */}
      <section className="hero bg-base-100 p-6 rounded-lg mb-8">
        <div className="hero-content flex-col lg:flex-row">
          {/* プロフィール画像 */}
          <img
            src="/profile.jpg"
            alt="Profile"
            className="max-w-xs rounded-full shadow-2xl w-40 h-40 object-cover"
          />
          <div className="lg:ml-8 mt-4 lg:mt-0 text-center lg:text-left">
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="py-4 max-w-md">
              フリーランスのソフトウェアエンジニアです。
              Webアプリ開発を中心に、React/Next.jsやNode.jsによるサービス構築を手がけています。
            </p>
            {email && (
              <button className="btn btn-primary">
                <a href={`mailto:${email}`}>Contact Me</a>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* スキル一覧セクション */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="card bg-base-200 shadow-md p-4">
              <h3 className="text-lg font-bold">{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
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
