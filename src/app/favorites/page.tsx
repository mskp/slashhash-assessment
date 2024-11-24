import { getFavorites } from "../actions";
import FavoritesList from "../components/favourites-list";

export default async function FavoritesPage() {
  const favorites = await getFavorites();

  return (
    <div className="container py-5">
      <h1 className="mb-4">Favorite Universities</h1>
      <FavoritesList initialFavorites={favorites} />
    </div>
  );
}
