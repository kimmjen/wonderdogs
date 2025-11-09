import { useState } from 'react'

const Tabs = ({ tabs, defaultTab = 0, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className="flex border-b-2 border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              px-6 py-3 font-semibold transition-all duration-200
              ${activeTab === index
                ? 'text-wonderdogs-primary border-b-2 border-wonderdogs-primary -mb-[2px]'
                : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="py-6">
        {tabs[activeTab]?.content}
      </div>
    </div>
  )
}

export default Tabs
