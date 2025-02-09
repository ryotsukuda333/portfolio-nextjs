export function getProfileName(): string {
  return process.env.NEXT_PUBLIC_PROFILE_NAME ?? "User Name";
}

export function getEmail(): string {
  return process.env.NEXT_PUBLIC_PROFILE_EMAIL ?? "user@example.com";
}

export function getProfileDescription(): string {
  return process.env.NEXT_PUBLIC_PROFILE_DESCRIPTION ?? "User Description";
}

export function getXUrl(): string {
  return process.env.NEXT_PUBLIC_X_URL ?? "https://x.com/default";
}

export function getGithubUrl(): string {
  return process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/default";
}

export function getInstagramUrl(): string {
  return process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/default";
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
