import { ReadonlyURLSearchParams } from "next/navigation";
import { searchUniversities } from "../actions";
import ResultsTable from "./results-table";

export default async function SearchResults({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query;

  if (!query) {
    console.log(searchParams);
    return null;
  }

  const universities = await searchUniversities("India");

  return <ResultsTable universities={universities} />;
}
