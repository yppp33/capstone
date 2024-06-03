import styles from "@styles/aboutBook.module.css";

export default function AboutBookWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.aboutBook_wrapper}>{children}</div>;
}
