import React, { useState, useEffect, useRef } from 'react'
import { Download, HelpCircle, RotateCcw, Trash2, CheckCircle, AlertCircle, Loader } from 'lucide-react'

const Toolbar = ({ onExportPDF, isCompiling, onResetTemplate, onClearContent, saveStatus }) => {
  const [showHelp, setShowHelp] = useState(false)
  const helpRef = useRef(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (helpRef.current && !helpRef.current.contains(event.target)) {
        setShowHelp(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleHelp = () => {
    setShowHelp(!showHelp)
  }

  const getSaveStatusIcon = () => {
    switch (saveStatus) {
      case 'saved':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'saving':
        return <Loader className="w-4 h-4 text-yellow-500 animate-spin" />
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return null
    }
  }

  const getSaveStatusText = () => {
    switch (saveStatus) {
      case 'saved':
        return 'Saved'
      case 'saving':
        return 'Saving...'
      case 'error':
        return 'Save failed'
      default:
        return ''
    }
  }

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6">
            <lottie-player
              src="/logo-animation.json"
              background="transparent"
              speed="1"
              style={{ width: '24px', height: '24px' }}
              loop
              autoplay
            />
          </div>
          <h1 className="text-lg font-semibold text-gray-900">GetEasyCV</h1>
        </div>
        <div className="text-sm text-gray-500">
          Professional CV builder with LaTeX-like interface
        </div>
        {/* Save Status */}
        <div className="flex items-center space-x-1 text-xs">
          {getSaveStatusIcon()}
          <span className={saveStatus === 'error' ? 'text-red-500' : 'text-gray-500'}>
            {getSaveStatusText()}
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        {/* Template Actions */}
        <button
          onClick={onResetTemplate}
          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
          title="Reset to default template"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Template</span>
        </button>
        
        <button
          onClick={onClearContent}
          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
          title="Clear all content"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear</span>
        </button>
        

        
        {/* Help Panel */}
        <div className="relative" ref={helpRef}>
          <button
            onClick={handleHelp}
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Help</span>
          </button>
          
          {showHelp && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Help & Tips</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <h4 className="font-medium text-gray-900">Markdown Syntax:</h4>
                    <ul className="mt-1 space-y-1 text-xs">
                      <li>• <code className="bg-gray-100 px-1 rounded"># Heading</code> for main title</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">## Section</code> for sections</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">**Bold**</code> for emphasis</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">- Item</code> for lists</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Auto-save:</h4>
                    <p className="text-xs">Your changes are automatically saved to your browser's localStorage.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">PDF Export:</h4>
                    <p className="text-xs">Click "Export PDF" to generate a professional CV ready for FAANG applications.</p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <a 
                      href="https://github.com/your-repo/cv-editor" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-xs"
                    >
                      View Documentation →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <button
          onClick={onExportPDF}
          disabled={isCompiling}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>{isCompiling ? 'Generating...' : 'Export PDF'}</span>
        </button>
      </div>
    </div>
  )
}

export default Toolbar 