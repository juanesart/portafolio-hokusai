import { cacheLife } from "next/cache";

export default async function AnioActual() {
  "use cache";
  cacheLife("days");

  return <>{new Date().getFullYear()}</>;
}