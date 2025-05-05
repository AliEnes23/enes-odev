import React, { useState } from "react";
import BubbleSort from "../sort/bubble_sort";
import SingletonExample from "../design-patterns/singleton";
import ProxyProductExample from "../design-patterns/proxy_pattern/proxy_pattern";

export default function Index() {
  //girilen değer state'i
  const [inputValue, setInputValue] = useState<string>("");
  //sonuç array state'i
  const [sortedArray, setSortedArray] = useState<number[]>([]);

  //girdiye göre değer ayarla
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSort = () => {
    // Girdi değerini sayılara dönüştür ve boşluklardan ayır
    const inputNumbers = inputValue
      .split(/[ ,]+/) // boşluk yada virgüle göre ayır
      .map((item) => parseInt(item.trim())) // her bir elemanı sayıya dönüştür
      .filter((item) => !isNaN(item)); // NaN olmayanları filtrele

    // Bubble Sort ile sıralanmış diziyi elde et
    const sorted = BubbleSort(inputNumbers);
    setSortedArray(sorted);
  };

  return (
    <>
    <div>
      <h1>Bubble Sort Sonucu</h1>
      {/**SONUÇ TITLE */}
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Sayılara virgül ile ayırarak yazın" />
      {/* GİRİŞ */}
      <button onClick={handleSort}>Sıralama Yap</button>
      {/* BUTON */}
      {sortedArray.length > 0 && <p>Sıralanmış dizi: {sortedArray.join(", ")}</p>}
      {/**SONUÇ */}
    </div>
    <div>

      <SingletonExample />
    </div>
    <div>
      <ProxyProductExample />
    </div>
    </>
  );
}
