import styles from "./CharacterCard.module.scss";

interface Props {
  imageUrl: string;
  title: string;
  status: "Alive" | "Dead";
  lastLocation: string;
  firstSeen: string;
  specie: string;
}

export const CharacterCard = ({
  imageUrl,
  title,
  status,
  lastLocation,
  firstSeen,
  specie,
}: Props) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt="" />
      <div className={styles.cardContent}>
        <div className={styles.cardSection}>
          <h3>{title}</h3>
          <div className={styles.statusContainer}>
            <div className={styles[status] + " " + styles.ball}></div>{" "}
            {`${status} - ${specie}`}
          </div>
        </div>
        <div className={styles.cardSection}>
          <span className={styles.subtitles}>Last known location:</span>
          <span className={styles.locationName}>{lastLocation}</span>
        </div>
        <div className={styles.cardSection}>
          <span className={styles.subtitles}>First seen in:</span>
          <span className={styles.locationName}>{firstSeen}</span>
        </div>
      </div>
    </div>
  );
};
