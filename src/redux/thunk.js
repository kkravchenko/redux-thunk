import { INIT } from './types'

export const initAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      console.log('fetch data')

      dispatch({
        type: INIT,
        payload: [{ data: 'loaded' }],
      })
    }, 10000)
  }
}
