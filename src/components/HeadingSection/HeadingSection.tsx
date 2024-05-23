import styles from "./HeadingSection.module.scss";

export const HeadingSection = () => {
  return (
    <div className={styles.heading}>
      <img src="./portal.jpg" alt="" />
      <h1>
        The <br /> Rick and Morty <br />
        Wiki
      </h1>
      <img src="./rick-morty-falling.jpg" alt="" />
    </div>
  );
};
