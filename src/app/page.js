'use client'
import { useDispatch } from 'react-redux'
import { INIT } from '@/redux/types'
import { initAsync } from '@/redux/thunk'

export default function Home() {
  const dispatch = useDispatch()

  dispatch({
    type: INIT,
    payload: true,
  })

  dispatch(initAsync())

  return <div>Test</div>
}
