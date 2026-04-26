import { Pool, type QueryResult, type QueryResultRow } from "pg";

declare global {
  var shiftmapPgPool: Pool | undefined;
}

function getPool() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  if (!globalThis.shiftmapPgPool) {
    globalThis.shiftmapPgPool = new Pool({
      connectionString,
    });
  }

  return globalThis.shiftmapPgPool;
}

export function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params: unknown[] = [],
): Promise<QueryResult<T>> {
  return getPool().query<T>(text, params);
}
