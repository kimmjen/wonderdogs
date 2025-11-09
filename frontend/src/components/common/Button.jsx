import { forwardRef } from 'react'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false,
  ...props 
}, ref) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-wonderdogs-primary hover:bg-wonderdogs-dark text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-wonderdogs-secondary hover:bg-wonderdogs-primary text-white shadow-lg hover:shadow-xl',
    accent: 'bg-wonderdogs-accent hover:bg-yellow-500 text-wonderdogs-dark shadow-lg hover:shadow-xl',
    outline: 'border-2 border-wonderdogs-primary text-wonderdogs-primary hover:bg-wonderdogs-primary hover:text-white',
    ghost: 'text-wonderdogs-primary hover:bg-wonderdogs-light',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
