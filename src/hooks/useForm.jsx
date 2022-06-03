import { useReducer } from 'react'

const ACTIONS = {
  UPDATE_MINUTES: 'update_minutes',
  UPDATE_SECONDS: 'update_seconds',
  INCREMENT_MINUTES: 'increment_minutes',
  DECREMENT_MINUTES: 'decrement_minutes',
  INCREMENT_SECONDS: 'increment_seconds',
  DECREMENT_SECONDS: 'decrement_seconds'
}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_MINUTES:
      return {
        ...state,
        minutes: action.payload
      }
    case ACTIONS.UPDATE_SECONDS:
      return {
        ...state,
        seconds: action.payload
      }
    case ACTIONS.INCREMENT_MINUTES:
      return {
        ...state,
        minutes: state.minutes + 1
      }
    case ACTIONS.INCREMENT_SECONDS:
      return {
        ...state,
        seconds: state.seconds + 1
      }
    case ACTIONS.DECREMENT_MINUTES:
      return {
        ...state,
        minutes: state.minutes - 1
      }
    case ACTIONS.DECREMENT_SECONDS:
      return {
        ...state,
        seconds: state.seconds - 1
      }
  }
}
const useForm = ({ initialMinutes = 0, initialSeconds = 0 } = {}) => {
  const [state, dispatch] = useReducer(reducer, {
    minutes: initialMinutes,
    seconds: initialSeconds
  })
  const { minutes, seconds } = state
  return {
    minutes,
    seconds,
    updateMinutes: (minutes) => dispatch({ type: ACTIONS.UPDATE_MINUTES, payload: minutes }),
    updateSeconds: (seconds) => dispatch({ type: ACTIONS.UPDATE_SECONDS, payload: seconds }),
    incrementMinutes: () => dispatch({ type: ACTIONS.INCREMENT_MINUTES }),
    incrementSeconds: () => dispatch({ type: ACTIONS.INCREMENT_SECONDS }),
    decrementMinutes: () => dispatch({ type: ACTIONS.DECREMENT_MINUTES }),
    decrementSeconds: () => dispatch({ type: ACTIONS.DECREMENT_SECONDS })
  }
}

export default useForm
