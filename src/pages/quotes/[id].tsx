import React from "react";
import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";
import styles from "../page.module.css";
import BasicCard from "@/components/Card";

const sampleData = [
  {
    id: 1,
    text: '"For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much\u2014the wheel, New York, wars and so on\u2014whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man\u2014for precisely the same reasons."',
  },
  {
    id: 2,
    text: '"Don\'t Panic."',
  },
  {
    id: 3,
    text: '"Time is an illusion. Lunchtime doubly so."',
  },
];

export default function QuotePage() {
  const router = useRouter();
  const { id } = router.query;

  const quote = sampleData.find((quote) => quote.id === parseInt(id as string));

  if (!quote) {
    return <div>Quote not found</div>;
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <BasicCard
          text={quote.text}
          showGoToButton={false}
          showSaveButton={false}
        />
      </main>
    </div>
  );
}
