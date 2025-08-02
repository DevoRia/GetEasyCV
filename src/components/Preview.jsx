import React from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { parseCVContent } from '../utils/cvParser'

const Preview = ({ content }) => {
  const [showPreview, setShowPreview] = React.useState(true)

  const parsedContent = parseCVContent(content)

  return (
    <div className="h-full flex flex-col">
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Eye className="w-4 h-4" />
          <span className="text-sm font-medium text-gray-700">Preview</span>
        </div>
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
      {showPreview && (
        <div className="flex-1 overflow-auto p-6">
          <div 
            id="cv-preview"
            className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
            style={{ minHeight: '297mm', width: '210mm' }}
          >
            <div 
              className="p-8"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Preview 