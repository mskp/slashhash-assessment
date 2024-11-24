'use client'

import { useState } from 'react'
import { removeFavorite } from '../actions'

interface Favorite {
  id: number
  name: string
  stateProvince: string | null
  webPages: string[]
}

export default function FavoritesList({
  initialFavorites,
}: {
  initialFavorites: Favorite[]
}) {
  const [favorites, setFavorites] = useState(initialFavorites)

  const handleRemove = async (id: number) => {
    await removeFavorite(id)
    setFavorites(favorites.filter((f) => f.id !== id))
  }

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
          {favorites.map((favorite) => (
            <tr key={favorite.id}>
              <td>{favorite.name}</td>
              <td>{favorite.stateProvince || 'N/A'}</td>
              <td>
                {favorite.webPages.map((url) => (
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
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleRemove(favorite.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {favorites.length === 0 && (
        <p className="text-center">No favorites added yet.</p>
      )}
    </div>
  )
}

