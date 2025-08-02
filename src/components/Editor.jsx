import React from 'react'
import Editor from '@monaco-editor/react'
import { FileText, Save, Download } from 'lucide-react'

const EditorComponent = ({ content, onChange }) => {
  const handleEditorChange = (value) => {
    onChange(value)
  }

  const handleSave = () => {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'faang-cv.cv'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleLoad = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        onChange(e.target.result)
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <FileText className="w-4 h-4" />
          <span className="text-sm font-medium">CV Editor</span>
        </div>
        <div className="flex items-center space-x-2">
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".cv,.txt"
              onChange={handleLoad}
              className="hidden"
            />
            <Download className="w-4 h-4 hover:text-blue-400 transition-colors" />
          </label>
          <button
            onClick={handleSave}
            className="hover:text-blue-400 transition-colors"
          >
            <Save className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage="markdown"
          value={content}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: 'JetBrains Mono',
            lineNumbers: 'on',
            wordWrap: 'on',
            automaticLayout: true,
            scrollBeyondLastLine: false,
            folding: true,
            lineDecorationsWidth: 10,
            lineNumbersMinChars: 3,
          }}
        />
      </div>
    </div>
  )
}

export default EditorComponent 