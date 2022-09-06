import { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type){
    case 'keypress':
        if(state.status === 'unlocked'){
          return state
        }

        if(parseInt(state.combo[state.nextKeyIndex], 10) === action.value){
          const nextKeyIndex = state.nextKeyIndex + 1
              return {
                ...state,
                nextKeyIndex,
                status: 
                  nextKeyIndex === state.combo.length ? 'unLocked': 'locked'
              }
        } else {
          return {
            ...state,
            nextKeyIndex: 0
          }
        }
    default:
      return state
  }
}

const Keypad = ({combo}) => {
  const [lock, dispatch] = useReducer(reducer, {
    combo,
    nextKeyIndex : 0,
    status: 'locked'
  })
  return (
    <>
      <p>Enter the correct combination:</p>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <button
          key={i}
          onClick={() =>
            dispatch({ type: 'keypress', value: i })
          }
        >
          {i}
        </button>
      ))}
      <p>The lock is {lock.status}</p>
      <p>
        You've gotten {lock.nextKeyIndex} keys correct.
      </p>
    </>
  )
}

export default Keypad
