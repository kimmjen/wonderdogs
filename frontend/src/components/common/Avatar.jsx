const Avatar = ({ 
  src, 
  alt = 'Avatar', 
  size = 'md',
  className = '',
  fallback = '👤'
}) => {
  const sizes = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-16 h-16 text-xl',
    lg: 'w-24 h-24 text-3xl',
    xl: 'w-32 h-32 text-4xl',
    '2xl': 'w-48 h-48 text-6xl',
  }

  return (
    <div className={`relative rounded-full overflow-hidden bg-gray-200 flex items-center justify-center ${sizes[size]} ${className}`}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-gray-500">{fallback}</span>
      )}
    </div>
  )
}

export default Avatar
