//@ts-nocheck
import { Suspense } from "react";
import SearchForm from "./components/search-form";
import SearchResults from "./components/search-results";

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Search Universities in India</h1>
      <SearchForm />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
