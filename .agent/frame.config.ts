import type { FrameConfig } from "@jaxx/core";

const config = {
  project: {
    name: "FrotaK View",
  },
  theme: {
    primaryColor: "#151514",
    borderRadius: "1rem",
  },
  repos: [
    {
      name: "main",
      path: ".",
      defaultBranch: "main",
    },
  ],
  docker: {
    containers: [],
  },
  ports: {
    dashboard: 3099,
  },
  quality: {
    enabled: true,
    maxComplexity: 20,
    maxDuplicationRatio: 0.05,
    exclude: [
      "**/*.test.ts",
      "**/*.spec.ts",
      "**/.next/**",
      "**/dist/**",
      "**/node_modules/**",
      "package-lock.json",
      "**/package.json",
      "**/tsconfig.json",
    ],
  },
} satisfies FrameConfig;

export default config;
