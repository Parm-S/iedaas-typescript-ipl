import { useEffect, useReducer } from 'react'
import axios from '../helper/Axios'
interface State<T> {
  data?: T
  // error?:Error
}
type Action<T> = { type: 'FETCH_SUCCESS'; payload: T } | { type: 'FETCH_ERROR'; payload: T }
const useApi = <T = unknown>(url: string): State<T> => {
  const initialState: State<T> = {
    // error: undefined,
    data: undefined,
  }
  const reducer = (_state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          ...initialState,
          data: action.payload,
        }
      case 'FETCH_ERROR':
        return {
          ...initialState,
          data: action.payload,
        }
      default:
        return _state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  async function getTeamsData(Url: string) {
    await axios
      .get(Url)
      .then((response) => {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_ERROR',
          payload: error,
        })
      })
  }
  useEffect(() => {
    getTeamsData(url)
  }, [url])
  return state
}
export default useApi
