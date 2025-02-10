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
      title: "React / TypeScript",
      description: "React Hooks, TypeScript",
    },
    {
      title: "Node.js / Express",
      description: "REST API, Asynchronous Programming",
    },
    {
      title: "Python / FastAPI",
      description: "Batch Processing, REST API Development",
    },
    {
      title: "Golang",
      description: "API Development",
    },
    {
      title: "Database",
      description: "MySQL, PostgreSQL, Database Design, Query Optimization",
    },
    {
      title: "AWS / GCP",
      description: "ECS, EC2, S3, Cloud Run, Infrastructure Design and Management",
    },
  ];
}
