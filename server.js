const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 8000;
const isDev = process.env.NODE_ENV !== 'production';

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
    // Dev logging with colors
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const statusColor = method === 'GET' ? '\x1b[32m' : '\x1b[33m'; // Green for GET, Yellow for others
    console.log(`${statusColor}${timestamp} ${method} ${url}\x1b[0m`);

    // Parse URL
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    // Get file extension
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeType = mimeTypes[extname] || 'application/octet-stream';

    // Read and serve file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // File not found - dev-friendly 404
                console.log(`\x1b[31m404: ${filePath} not found\x1b[0m`);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <title>404 - Dev Server</title>
                            <style>
                                body { font-family: monospace; padding: 20px; background: #f5f5f5; }
                                .error { background: #ffebee; border: 1px solid #f44336; padding: 15px; border-radius: 5px; }
                                .info { background: #e3f2fd; border: 1px solid #2196f3; padding: 15px; border-radius: 5px; margin-top: 10px; }
                            </style>
                        </head>
                        <body>
                            <div class="error">
                                <h1>🚫 404 - File Not Found</h1>
                                <p><strong>Requested:</strong> ${filePath}</p>
                                <p><strong>Time:</strong> ${timestamp}</p>
                            </div>
                            <div class="info">
                                <h3>📁 Available Files:</h3>
                                <ul>
                                    <li><a href="/">index.html</a> (main app)</li>
                                    <li><a href="/server.js">server.js</a> (this server)</li>
                                    <li><a href="/package.json">package.json</a></li>
                                    <li><a href="/README.md">README.md</a></li>
                                </ul>
                            </div>
                        </body>
                    </html>
                `, 'utf-8');
            } else {
                // Server error
                console.log(`\x1b[31m500: Server error - ${error.code}\x1b[0m`);
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`, 'utf-8');
            }
        } else {
            // Success - dev headers
            const headers = { 
                'Content-Type': mimeType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
                'X-Dev-Server': 'baby-scratch-reveal',
                'X-Served-At': timestamp
            };
            
            res.writeHead(200, headers);
            res.end(content, 'utf-8');
        }
    });
});

// Get local IP address for mobile testing
function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}

server.listen(PORT, () => {
    const localIP = getLocalIP();
    
    console.log(`\x1b[36m╔══════════════════════════════════════════════════════════════╗\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m  🚀 \x1b[1mBaby Scratch Reveal - Development Server\x1b[0m                    \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m╠══════════════════════════════════════════════════════════════╣\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m  📍 \x1b[32mLocal:\x1b[0m   http://localhost:${PORT}                              \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m  📱 \x1b[33mMobile:\x1b[0m  http://${localIP}:${PORT}                              \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m  🌐 \x1b[35mNetwork:\x1b[0m http://0.0.0.0:${PORT}                              \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m╠══════════════════════════════════════════════════════════════╣\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m  📱 \x1b[1mMobile Testing Instructions:\x1b[0m                              \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m     1. Connect mobile to same WiFi network              \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m     2. Open browser and go to: http://${localIP}:${PORT}        \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m     3. Test the scratch-to-reveal functionality!        \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m╠══════════════════════════════════════════════════════════════╣\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m  🛠️  \x1b[1mDev Features:\x1b[0m                                          \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m     • No caching (always fresh content)                \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m     • Colored request logging                         \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m     • Dev-friendly 404 pages                          \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m     • Auto IP detection for mobile testing            \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m║\x1b[0m     • Graceful shutdown (Ctrl+C)                      \x1b[36m║\x1b[0m`);
    console.log(`\x1b[36m╚══════════════════════════════════════════════════════════════╝\x1b[0m`);
    console.log(`\n\x1b[33m🎉 Server ready! Press \x1b[1mCtrl+C\x1b[0m \x1b[33mto stop.\x1b[0m\n`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down server...');
    server.close(() => {
        console.log('✅ Server closed successfully');
        process.exit(0);
    });
});
