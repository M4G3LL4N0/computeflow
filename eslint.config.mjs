// Minimal flat config — keeps ESLint happy without pulling in legacy compat shims.
// Next.js linting is disabled during builds (see next.config.ts) so this is only
// used when running `pnpm lint` explicitly.
const config = [
  {
    ignores: [".next/**", "node_modules/**"],
  },
];

export default config;
