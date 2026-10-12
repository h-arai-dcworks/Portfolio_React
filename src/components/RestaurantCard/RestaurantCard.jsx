import styles from "./RestaurantCard.module.scss";

function RestaurantCard({ restaurant }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{restaurant.name}</h3>
      <p className={styles.meta}>
        {restaurant.area} / {restaurant.genre}
      </p>
      <p className={styles.comment}>{restaurant.comment}</p>
    </article>
  );
}

export default RestaurantCard;
