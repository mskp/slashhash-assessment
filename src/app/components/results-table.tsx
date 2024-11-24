"use client";

import { useState } from "react";
import { addToFavorites } from "../actions";

interface University {
  name: string;
  "state-province": string | null;
  web_pages: string[];
}

export default function ResultsTable({
  universities,
}: {
  universities: University[];
}) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleFavorite = async (university: University) => {
    await addToFavorites(university);
    setFavorites(new Set([...favorites, university.name]));
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>State/Province</th>
            <th>Web Pages</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((university, index) => (
            <tr key={index}>
              <td>{university.name}</td>
              <td>{university["state-province"] || "N/A"}</td>
              <td>
                {university.web_pages.map((url) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block"
                  >
                    {url}
                  </a>
                ))}
              </td>
              <td>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleFavorite(university)}
                  disabled={favorites.has(university.name)}
                >
                  {favorites.has(university.name) ? "Favorited" : "Favorite"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
