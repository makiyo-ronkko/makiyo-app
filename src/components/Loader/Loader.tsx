import React from 'react'
import loaderStyle from './Loader.module.css'

type Width = 'auto' | 'root' | 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface LoaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string
  style?: React.CSSProperties
  width?: Width
}

export const Loader = ({ className = '', width = 'xxs', style, ...props }: LoaderProps) => {
  const getWidth = () => {
    const style: React.CSSProperties = {}
    style.width = `var(--element-${width})`
    return style
  }
  const loaderWidth = getWidth()

  return (
    <div
      className={`${loaderStyle.loader} ${className}`}
      style={{
        ...style,
        ...loaderWidth,
      }}
      {...props}
    ></div>
  )
}
