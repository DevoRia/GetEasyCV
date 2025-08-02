import React, { useState, useEffect } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'
import Toolbar from './components/Toolbar'
import { defaultTemplate } from './templates/faangTemplate'

function App() {
  const [content, setContent] = useState(() => {
    // Load from localStorage on initial render
    const savedContent = localStorage.getItem('cv-content')
    return savedContent || defaultTemplate
  })
  const [isCompiling, setIsCompiling] = useState(false)
  const [saveStatus, setSaveStatus] = useState('saved') // 'saved', 'saving', 'error'

  const handleContentChange = (newContent) => {
    setContent(newContent)
    setSaveStatus('saving')
    
    // Save to localStorage whenever content changes
    try {
      localStorage.setItem('cv-content', newContent)
      setSaveStatus('saved')
    } catch (error) {
      console.error('Failed to save to localStorage:', error)
      setSaveStatus('error')
    }
  }

  const handleResetTemplate = () => {
    if (window.confirm('Are you sure you want to reset to the default template? This will clear your current work.')) {
      setContent(defaultTemplate)
      localStorage.setItem('cv-content', defaultTemplate)
      setSaveStatus('saved')
    }
  }

  const handleClearContent = () => {
    if (window.confirm('Are you sure you want to clear all content?')) {
      setContent('')
      localStorage.setItem('cv-content', '')
      setSaveStatus('saved')
    }
  }

  const handleExportPDF = async () => {
    setIsCompiling(true)
    try {
      const previewElement = document.getElementById('cv-preview')
      if (previewElement) {
        // Ensure the element is visible and properly rendered
        previewElement.style.display = 'block'
        previewElement.style.visibility = 'visible'
        
        const html2pdf = (await import('html2pdf.js')).default
        const opt = {
          margin: [0.5, 0.5, 0.5, 0.5],
          filename: 'geteasycv-cv.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { 
            scale: 2, 
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
          },
          jsPDF: { 
            unit: 'in', 
            format: 'a4', 
            orientation: 'portrait',
            compress: true
          }
        }
        
        console.log('Starting PDF generation...')
        const pdf = await html2pdf().set(opt).from(previewElement).save()
        console.log('PDF generated successfully!')
        
        // Show success message
        alert('PDF generated successfully! Check your downloads folder.')
        
        return pdf
      } else {
        console.error('Preview element not found')
        alert('Preview element not found. Please ensure the preview is visible.')
      }
    } catch (error) {
      console.error('PDF export failed:', error)
      alert('PDF export failed. Please try again.')
    } finally {
      setIsCompiling(false)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Toolbar 
        onExportPDF={handleExportPDF} 
        isCompiling={isCompiling}
        onResetTemplate={handleResetTemplate}
        onClearContent={handleClearContent}
        saveStatus={saveStatus}
      />
      <div className="flex-1 flex">
        <div className="w-1/2 editor-pane">
          <Editor 
            content={content} 
            onChange={handleContentChange}
          />
        </div>
        <div className="w-1/2 preview-pane overflow-auto">
          <Preview content={content} />
        </div>
      </div>
    </div>
  )
}

export default App 