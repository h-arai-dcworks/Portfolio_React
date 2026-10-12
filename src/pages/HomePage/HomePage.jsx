import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { restaurants } from "../../data/restaurants";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
function HomePage() {
  return (
    <>
      <h1>ホーム</h1>
      <Link to="/restaurants/1">サンプル飯店の詳細を見る</Link>
      <div className={styles.list}>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
