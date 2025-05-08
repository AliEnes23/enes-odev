import { CounterControlsProps } from "../type/type"

  
  export const CounterControls = ({ onIncrement, onDecrement, onReset }: CounterControlsProps) => {
    return (
      <div className="flex gap-4 mt-4">
        <button onClick={onIncrement} className="bg-green-500 text-white px-4 py-2 rounded">Artır</button>
        <button onClick={onDecrement} className="bg-red-500 text-white px-4 py-2 rounded">Azalt</button>
        <button onClick={onReset} className="bg-gray-500 text-white px-4 py-2 rounded">Sıfırla</button>
      </div>
    )
  }
  