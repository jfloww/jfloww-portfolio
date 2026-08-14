const LOCAL_SITE_URL = 'http://localhost:10001';

export const SITE_NAME = 'JFLOWW';
export const PERSON_NAME = 'Jay (Jaehoon) Jung';
export const SITE_DESCRIPTION = 'Portfolio and development notes from a backend-focused software engineer who also builds complete web products.';

export function getSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  const value = explicitUrl || (vercelHost ? `https://${vercelHost}` : LOCAL_SITE_URL);

  return value.replace(/\/$/, '');
}
