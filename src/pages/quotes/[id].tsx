import BasicCard from "@/components/Card";
import useQuote from "@/hooks/use-quote";
import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";
import styles from "../page.module.css";

export default function QuotePage() {
  const { quotes } = useQuote();

  const router = useRouter();
  const { id } = router.query;

  const quote = quotes.find((quote) => quote.id === parseInt(id as string));

  if (!quote) {
    return <div>Quote not found</div>;
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <BasicCard
          quote={quote}
          showGoToButton={false}
          showSaveButton={false}
        />
      </main>
    </div>
  );
}
