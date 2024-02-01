import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

/* 
use with onWheel={handleHorizontalScroll}
*/
export const handleHorizontalScroll = (e: { deltaY: number }, ref: { current: { scrollLeft: number } }) => {
  if (!ref.current) return
  // Get the scroll amount from the mouse wheel
  const scrollAmount = e.deltaY
  ref.current.scrollLeft += scrollAmount
}
