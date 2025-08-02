import { marked } from 'marked'

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
})

// Custom renderer for better CV formatting
const renderer = new marked.Renderer()

// Custom heading renderer for better styling
renderer.heading = (text, level) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
  
  if (level === 1) {
    return `<h1 class="text-3xl font-bold text-gray-900 mb-2 border-b-2 border-blue-600 pb-2">${text}</h1>`
  } else if (level === 2) {
    return `<h2 class="text-xl font-semibold text-gray-800 mt-6 mb-3">${text}</h2>`
  } else if (level === 3) {
    return `<h3 class="text-lg font-medium text-gray-700 mt-4 mb-2">${text}</h3>`
  }
  
  return `<h${level} class="text-base font-medium text-gray-700 mt-3 mb-1">${text}</h${level}>`
}

// Custom paragraph renderer
renderer.paragraph = (text) => {
  return `<p class="text-gray-700 leading-relaxed mb-3">${text}</p>`
}

// Custom list renderer
renderer.list = (body, ordered) => {
  const type = ordered ? 'ol' : 'ul'
  const className = ordered ? 'list-decimal ml-6 mb-3' : 'list-disc ml-6 mb-3'
  return `<${type} class="${className}">${body}</${type}>`
}

// Custom list item renderer
renderer.listitem = (text) => {
  return `<li class="text-gray-700 mb-1">${text}</li>`
}

// Custom strong renderer
renderer.strong = (text) => {
  return `<strong class="font-semibold text-gray-900">${text}</strong>`
}

// Custom emphasis renderer
renderer.em = (text) => {
  return `<em class="italic text-gray-600">${text}</em>`
}

// Custom horizontal rule renderer
renderer.hr = () => {
  return `<hr class="border-gray-300 my-6">`
}

// Custom link renderer
renderer.link = (href, title, text) => {
  return `<a href="${href}" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">${text}</a>`
}

marked.use({ renderer })

export const parseCVContent = (content) => {
  try {
    // Convert the markdown content to HTML
    const htmlContent = marked(content)
    
    // Wrap in a container with proper styling for PDF
    return `
      <div class="cv-content text-sm leading-relaxed" style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #374151;">
        <style>
          .cv-content {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #374151;
          }
          .cv-content h1 {
            color: #111827;
            font-size: 1.875rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 0.5rem;
          }
          .cv-content h2 {
            color: #1f2937;
            font-size: 1.25rem;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .cv-content h3 {
            color: #374151;
            font-size: 1.125rem;
            font-weight: 500;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
          }
          .cv-content p {
            color: #374151;
            margin-bottom: 0.75rem;
            line-height: 1.6;
          }
          .cv-content ul, .cv-content ol {
            margin-bottom: 0.75rem;
            padding-left: 1.5rem;
          }
          .cv-content li {
            color: #374151;
            margin-bottom: 0.25rem;
            line-height: 1.5;
          }
          .cv-content strong {
            font-weight: 600;
            color: #111827;
          }
          .cv-content em {
            font-style: italic;
            color: #6b7280;
          }
          .cv-content hr {
            border: none;
            border-top: 1px solid #d1d5db;
            margin: 1.5rem 0;
          }
          .cv-content a {
            color: #2563eb;
            text-decoration: underline;
          }
          .cv-content a:hover {
            color: #1d4ed8;
          }
          @media print {
            .cv-content {
              font-size: 11pt;
            }
            .cv-content h1 {
              font-size: 18pt;
            }
            .cv-content h2 {
              font-size: 14pt;
            }
            .cv-content h3 {
              font-size: 12pt;
            }
          }
        </style>
        ${htmlContent}
      </div>
    `
  } catch (error) {
    console.error('Error parsing CV content:', error)
    return `
      <div class="p-4 text-red-600">
        <h2>Error parsing CV content</h2>
        <p>Please check your CV format and try again.</p>
        <pre class="mt-4 p-4 bg-gray-100 rounded text-sm">${error.message}</pre>
      </div>
    `
  }
} 