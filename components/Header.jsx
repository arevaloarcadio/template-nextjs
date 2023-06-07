import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          Inicio 
        </Link>&nbsp;&nbsp;
        <Link href="/peoples" legacyBehavior> 
          Personas
        </Link>
      </nav>
    </header>
  );
}