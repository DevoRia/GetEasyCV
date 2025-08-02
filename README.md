# GetEasyCV

A modern, LaTeX-like CV builder for creating professional resumes. Features a real-time editor with live preview and PDF export functionality.

## Features

- **LaTeX-like Interface**: Monaco Editor with syntax highlighting and real-time editing
- **Live Preview**: Instant rendering of your CV as you type
- **Professional Template**: Optimized template designed for tech companies and professional applications
- **PDF Export**: High-quality PDF export with proper formatting
- **Save/Load**: Save your CV as a `.cv` file and load it later
- **Modern UI**: Clean, professional interface similar to Overleaf
- **Responsive Design**: Works on desktop and tablet devices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cv-editor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

### Writing Your CV

The CV builder uses a markdown-like syntax that's easy to learn:

```markdown
# Your Name
## Job Title

**Email:** your.email@example.com | **Phone:** +1 (555) 123-4567  
**LinkedIn:** linkedin.com/in/yourprofile | **GitHub:** github.com/yourusername  
**Location:** City, State

---

## Summary

Your professional summary here...

---

## Technical Skills

**Programming Languages:** JavaScript, Python, Java  
**Frontend:** React, Vue.js, Angular  
**Backend:** Node.js, Django, Spring Boot  

---

## Professional Experience

### Senior Software Engineer
**Company Name** | Location | *2020 - Present*

- Key achievement 1
- Key achievement 2
- Key achievement 3

**Technologies:** Tech stack used
```

### Available Commands

- **Save CV**: Click the save icon in the editor toolbar
- **Load CV**: Click the download icon in the editor toolbar
- **Export PDF**: Click the "Export PDF" button in the main toolbar
- **Toggle Preview**: Click the eye icon in the preview panel

## CV Template Structure

The default template includes:

1. **Header**: Name, title, contact information
2. **Summary**: Professional overview
3. **Technical Skills**: Organized by category
4. **Professional Experience**: Detailed work history
5. **Education**: Academic background
6. **Projects**: Personal and professional projects
7. **Certifications**: Professional certifications
8. **Leadership & Activities**: Additional relevant experience
9. **Languages**: Language proficiency
10. **Interests**: Personal interests

## Customization

### Styling

The CV uses a clean, professional design optimized for ATS (Applicant Tracking Systems). The styling is defined in `src/utils/cvParser.js` and can be customized by modifying the CSS classes.

### Template

You can modify the default template in `src/templates/faangTemplate.js` to match your preferences or create new templates.

## Building for Production

```bash
npm run build
```

This creates a `dist` folder with the production build.

## Technologies Used

- **React**: Frontend framework
- **Monaco Editor**: Code editor (same as VS Code)
- **Tailwind CSS**: Styling framework
- **html2pdf.js**: PDF generation
- **marked**: Markdown parsing
- **Vite**: Build tool and dev server

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Note**: This CV builder is designed for professional applications. The template emphasizes technical skills, quantifiable achievements, and modern development practices that companies value. 