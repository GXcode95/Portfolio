import './scroller.css'
import { motion } from "framer-motion"
import { useRef, useEffect } from "react"

export default function Scroller({children, reverse=false, gap=3, duration=20}){
  const innerScrollerRef = useRef(null)

  const initial = {
    transform: reverse ? `translate(-50%)` : 'translate(0)',
    gap: `${gap}rem`
  }
  const animate = {
    transform: reverse ? `translate(calc(0% + ${gap/2}rem))` : `translate(calc(-50% - ${gap/2}rem))`
  }
  const transition = {
    ease: 'linear',
    repeat: Infinity,
    duration: duration,
  }

  const duplicateScrollerContent = () => {
    const innerScroller = innerScrollerRef.current
    const scrollerContent = Array.from(innerScroller.children)
    
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true)
      duplicatedItem.setAttribute("aria-hidden", true)
      innerScroller.appendChild(duplicatedItem)
    })
  }
  useEffect(() => {
    duplicateScrollerContent()
  }, [])

  return (
    <div className="scroller">
      <motion.ul
        ref={innerScrollerRef}
        className='w-max flex py-2'
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </motion.ul>
    </div>
  )
}