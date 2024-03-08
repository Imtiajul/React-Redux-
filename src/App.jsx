import { useDispatch, useSelector } from "react-redux"
import Counter from "./components/Counter";
import { decrement, increment } from "./features/counters/countersSlice";
import State from "./components/State";
import Posts from "./components/Posts";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  }
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  }

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0)

  return (
    <div className="w-screen h-screen bg-gray-200 text-slate-700 p-4">
      <h1 className="text-3xl font-bold text-center">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-5 space-y-5">
        
        {counters.map(counter =>(
          <Counter key={counter.id} count={counter.value} onDecrement={()=> handleDecrement(counter.id)} onIncrement={()=>handleIncrement(counter.id)}/>
        ))}

          <State totalCount={totalCount}/>
          
          <Posts/>

      </div>
    </div>
  )
}

export default App
