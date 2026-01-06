# [Kairos.fm Website](https://kairos.fm)

This website was made leveraging [Hugo Blox](https://hugoblox.com) and [Hugo](https://github.com/gohugoio/hugo).

## Local Development Setup

### Prerequisites

1. **Node.js** (v18 or later) - [Download here](https://nodejs.org/)
2. **Go** (v1.19 or later) - [Download here](https://go.dev/dl/)
   - Required for Hugo Blox modules
   - After installation, restart your terminal/VS Code

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/jacob-haimes/kairos.fm.git
   cd kairos.fm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx hugo server
   ```

4. **Open your browser**
   - Navigate to [http://localhost:1313](http://localhost:1313)
   - The site will auto-reload when you make changes

### Common Commands

- **Start dev server**: `npx hugo server`
- **Build for production**: `npx hugo --gc --minify`
- **Update Hugo modules**: `npx hugo mod get -u`

### Troubleshooting

**"go not found" error**
- Make sure Go is installed and restart your terminal/IDE after installation
- Verify with: `go version`

**Module errors**
- Run: `npx hugo mod get -u` to update Hugo modules

**Port already in use**
- Kill any existing Hugo server processes
- Or use a different port: `npx hugo server --port 1314`

