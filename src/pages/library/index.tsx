import BasicCard from "@/components/Card";
import useQuote from "@/hooks/use-quote";
import Sidebar from "../../components/Sidebar";
import styles from "../page.module.css";

const Library = () => {
  const { quotes, handleSaveQuote } = useQuote();

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <h2>Library</h2>
        <div className={styles.cardContainer}>
          {quotes.map((quote) => (
            <BasicCard
              key={quote.id}
              quote={quote}
              showGoToButton={false}
              onSave={() => handleSaveQuote(quote)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Library;
