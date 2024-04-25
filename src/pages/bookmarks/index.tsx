import BasicCard from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import useBookmark from "@/hooks/use-bookmark";
import styles from "../page.module.css";

export default function Bookmarks() {
  const { bookmarks } = useBookmark();

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <h2>Bookmarks</h2>
        <div className={styles.cardContainer}>
          {bookmarks.map((quote) => (
            <BasicCard key={quote.id} quote={quote} showSaveButton={false} />
          ))}
        </div>
      </main>
    </div>
  );
}
