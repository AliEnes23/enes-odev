import { CounterDisplayProps } from "../type/type"

  
  export const CounterDisplay = ({ count }: CounterDisplayProps) => {
    return <h1 className="text-3xl font-bold">Sayı: {count}</h1>
  }
  