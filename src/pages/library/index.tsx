import React from "react";
import Sidebar from "../../components/Sidebar";
import styles from "../page.module.css";
import BasicCard from "@/components/Card";

const sampleData = [
  '"For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much\u2014the wheel, New York, wars and so on\u2014whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man\u2014for precisely the same reasons."',
  '"Don\'t Panic."',
  '"Time is an illusion. Lunchtime doubly so."',
];

export default function Library() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <h2>Library</h2>
        <div className={styles.cardContainer}>
          {sampleData.map((text, index) => (
            <BasicCard key={index} text={text} />
          ))}
        </div>
      </main>
    </div>
  );
}
