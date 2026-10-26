# [Kairos.fm Website](https://kairos.fm)

This website was made leveraging [Hugo Blox](https://hugoblox.com) and [Hugo](https://github.com/gohugoio/hugo).

## Local Development Setup

### Prerequisites

1. **Hugo extended**, at the version set by `WC_HUGO_VERSION` in [`.github/workflows/publish.yaml`](.github/workflows/publish.yaml) - [Releases](https://github.com/gohugoio/hugo/releases)
   - Other versions may not build the site (v0.168.0 does not)
   - Optional: [hvm](https://github.com/jmooring/hvm) can pin the version for this folder (`hvm use 0.136.5/extended`)
2. **Go** (v1.19 or later) - [Download here](https://go.dev/dl/)
   - Required for Hugo Blox modules
   - After installation, restart your terminal/VS Code

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/jacob-haimes/kairos.fm.git
   cd kairos.fm
   ```

2. **Start the development server**
   ```bash
   hugo server
   ```

3. **Open your browser**
   - Navigate to [http://localhost:1313](http://localhost:1313)
   - The site will auto-reload when you make changes

### Common Commands

- **Start dev server**: `hugo server`
- **Build for production**: `hugo --gc --minify`
- **Update Hugo modules**: `hugo mod get -u`

### Troubleshooting

**"go not found" error**
- Make sure Go is installed and restart your terminal/IDE after installation
- Verify with: `go version`

**Module errors**
- Run: `hugo mod get -u` to update Hugo modules

**Port already in use**
- Kill any existing Hugo server processes
- Or use a different port: `hugo server --port 1314`

