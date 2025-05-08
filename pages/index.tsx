import React, { useState } from "react";
import BubbleSort from "../sort/bubble_sort";
import SingletonExample from "../design-patterns/singleton";
import ProxyProductExample from "../design-patterns/proxy_pattern/proxy_pattern";
import { InfoCard } from "../design-patterns/prototype_pattern/CardPrototype";
import CardComponent from "../design-patterns/prototype_pattern/CardComponent";
import ObserverComponent from "../design-patterns/observer_pattern/observerComp";
import { useCounter } from "../design-patterns/module_pattern/counter/counter";
import { CounterDisplay } from "../design-patterns/module_pattern/comps/counter-display";
import { CounterControls } from "../design-patterns/module_pattern/comps/counter-controls";

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

  //clone

  const originalCard = new InfoCard("Orijinal Kart", "Bu bir prototip örneğidir.", "#3498db");

  const [clones, setClones] = useState<InfoCard[]>([]);

  const handleClone = () => {
    const cloned = originalCard.clone();
    cloned.title += ` (${clones.length + 1})`;
    cloned.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setClones([...clones, cloned]);
  };

  //module

  const counter = useCounter();
  const [value, setValue] = useState(counter.count);

  const handleUpdate = (action: () => void) => {
    action();
    setValue(counter.count);
  };

  return (
    <>
      <div className="p-8 space-y-4" style={{ padding: 10, paddingLeft: 100 }}>
        <h1>Bubble Sort Sonucu</h1>
        {/**SONUÇ TITLE */}
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Sayılara virgül ile ayırarak yazın" />
        {/* GİRİŞ */}
        <button onClick={handleSort}>Sıralama Yap</button>
        {/* BUTON */}
        {sortedArray.length > 0 && <p>Sıralanmış dizi: {sortedArray.join(", ")}</p>}
        {/**SONUÇ */}
      </div>
      <div className="p-8 space-y-4" style={{ padding: 10, paddingLeft: 100 }}>
        <SingletonExample />
      </div>
      <div className="p-8 space-y-4" style={{ padding: 10, paddingLeft: 100 }}>
        <ProxyProductExample />
      </div>
      <div className="p-8 space-y-4" style={{ padding: 10, paddingLeft: 100 }}>
        <h1>PROTOTYPE DESIGN örneği</h1>
        <div>
          {" "}
          <button onClick={handleClone} className="px-4 py-2 bg-green-500 text-white rounded">
            Kartı Klonla
          </button>
          <CardComponent title={originalCard.title} description={originalCard.description} color={originalCard.color} />
          {clones.map((card, i) => (
            <CardComponent key={i} title={card.title} description={card.description} color={card.color} />
          ))}
        </div>
      </div>
      <div className="p-8 space-y-4" style={{ padding: 10, paddingLeft: 100 }}>
        <h1>OBSERVER TASARIM ÖRNEĞİ</h1>{" "}
        <div>
          <ObserverComponent />
        </div>
      </div>

      <div className="p-8 space-y-4" style={{ padding: 10, paddingLeft: 100 }}>
        <CounterDisplay count={value} />
        <CounterControls onIncrement={() => handleUpdate(counter.increment)} onDecrement={() => handleUpdate(counter.decrement)} onReset={() => handleUpdate(counter.reset)} />
      </div>
    </>
  );
}
