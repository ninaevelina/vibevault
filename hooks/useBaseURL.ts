export const useBaseUrl = () => {
  if (typeof window !== undefined) return "";
  if (process.env.NEXT_PUBLIC_VERCEL_URL)
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return `http://localhost:3000/`;
};

export default useBaseUrl;
