const Loading = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4',
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizes[size]} border-wonderdogs-primary border-t-transparent rounded-full animate-spin`} />
    </div>
  )
}

export default Loading
