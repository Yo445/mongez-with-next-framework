export const API_URL: string = process.env.NODE_ENV === 'production'
  ? (process.env.NEXT_PUBLIC_PROD_URL as string)
  : (process.env.NEXT_PUBLIC_DEV_URL as string);
