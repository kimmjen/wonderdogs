const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const baseStyles = 'rounded-xl shadow-lg transition-all duration-300'
  
  const variants = {
    default: 'bg-white hover:shadow-2xl',
    primary: 'bg-wonderdogs-light border-2 border-wonderdogs-primary hover:shadow-2xl',
    gradient: 'bg-wonderdogs-gradient text-white hover:shadow-2xl',
    dark: 'bg-wonderdogs-dark text-white hover:shadow-2xl',
  }
  
  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
