import type { ElementType, ReactNode, RefObject } from 'react'
import { useInView } from '@/hooks/useInView'

interface Props {
  children: ReactNode
  delay?: 0 | 1 | 2 | 3 | 4
  className?: string
  as?: ElementType
}

const d = ['', 'reveal-d1', 'reveal-d2', 'reveal-d3', 'reveal-d4']

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: Props) {
  const { ref, visible } = useInView()
  return (
    <Tag
      ref={ref as RefObject<HTMLDivElement>}
      className={`reveal ${visible ? 'visible' : ''} ${d[delay]} ${className}`}
    >
      {children}
    </Tag>
  )
}
