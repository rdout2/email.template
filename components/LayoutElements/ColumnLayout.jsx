import React from 'react'

function ColumnLayout({ numOfCol }) {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numOfCol || 1}, 1fr)`,
          gap: '10px'
        }}
      >
        {Array.from({ length: numOfCol || 1 }).map((_, index) => (
          <div key={index} className="border p-2">
            Column {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColumnLayout
