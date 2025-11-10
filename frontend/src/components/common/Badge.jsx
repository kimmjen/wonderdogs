const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-gray-200 text-gray-800',
    primary: 'bg-wonderdogs-primary text-white',
    secondary: 'bg-wonderdogs-secondary text-white',
    accent: 'bg-wonderdogs-accent text-wonderdogs-dark',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-gray-900',
    danger: 'bg-red-500 text-white',
  }
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }
  
  return (
    <span 
      className={`inline-flex items-center font-semibold rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
