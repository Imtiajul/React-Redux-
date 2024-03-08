import Button from "./Button"
import Count from "./Count"

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center bg-white space-y-5 rounded shadow">
      <Count count={count} />

      <div className="flex items-center justify-center gap-4">
        <Button name="Increment" handler={onIncrement} />
        <Button type="danger" name="Decrement" handler={onDecrement} />
      </div>
    </div>
  )
}

export default Counter
