import React, { useEffect, useRef, useState } from 'react';
import subject from './subject';

const ObserverComponent: React.FC = () => {
  const [state, setState] = useState<number>(subject.getState());

  const observerRef = useRef({
    update: (newState: number) => {
      setState(newState);
    },
  });

  useEffect(() => {
    subject.addObserver(observerRef.current);
    return () => {
      subject.removeObserver(observerRef.current);
    };
  }, []);

  // Ekrana tıklanınca state artır
  useEffect(() => {
    const handleClick = () => {
      subject.setState(subject.getState() + 1);
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <h1>Mouse tıklamaların: {state}</h1>
    </div>
  );
};

export default ObserverComponent;
