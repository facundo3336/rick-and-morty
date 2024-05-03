import styles from "./GreyBackground.module.scss";

interface Props {
  children: React.ReactNode;
}

export const GreyBackground = ({ children }: Props) => {
  return <div className={styles.greyBackground}>{children}</div>;
};
