export interface CounterModule {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
  }

  export interface CounterDisplayProps {
    count: number
  }

  export interface CounterControlsProps {
    onIncrement: () => void
    onDecrement: () => void
    onReset: () => void
  }