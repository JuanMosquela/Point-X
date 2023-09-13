import { useState, useEffect } from "react"

type TransitionProps = {
    scrollElement: any
}

const useTransition = ({ scrollElement }: TransitionProps) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];     
          entry.isIntersecting ? setVisible(true) : setVisible(false)
        })
        observer.observe(scrollElement.current)
    
      }, [])

    return visible   

}

export default useTransition