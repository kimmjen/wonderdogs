import { forwardRef } from 'react'

const Input = forwardRef(({ 
  label,
  error,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full px-4 py-3 
          border-2 rounded-lg
          ${error 
            ? 'border-red-500 focus:border-red-600' 
            : 'border-gray-300 focus:border-wonderdogs-primary'
          }
          focus:outline-none focus:ring-2 focus:ring-wonderdogs-primary/20
          transition-all duration-200
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
