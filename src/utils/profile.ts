export function getProfileName(): string {
  return process.env.NEXT_PUBLIC_PROFILE_NAME ?? "User Name";
}
export function getEmail(): string {
    return process.env.NEXT_PUBLIC_PROFILE_EMAIL ?? "user@example.com";
}

export function getSkills(): { title: string; description: string }[] {
  return [
    {
      title: "JavaScript / TypeScript",
      description: "ES6+, TypeScript, Node.js",
    },
    {
      title: "React / Next.js",
      description: "Hooks, SSR, SSG, Redux, etc.",
    },
    {
      title: "Tailwind CSS",
      description: "ユーティリティファーストでの迅速なスタイリング",
    },
    {
      title: "Node.js / Express",
      description: "REST API, WebSocket, microservices",
    },
    {
      title: "Database",
      description: "MySQL, PostgreSQL, MongoDB",
    },
    {
      title: "AWS / GCP",
      description: "EC2, S3, Cloud Run, Firebase など",
    },
  ];
}
