# 🚀 VincAI Backend

Advanced web scraping API backend for VincAI - provides intelligent AI responses with real-time web data.

## 🌐 Deploy to Render

### Quick Deploy:
1. Go to [Render](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Set **Root Directory:** `backend`
5. Set **Build Command:** `npm install`
6. Set **Start Command:** `npm start`
7. Click "Create Web Service"

### Configuration:
```
Name: vincai-backend
Environment: Node.js
Build Command: npm install
Start Command: npm start
Instance Type: Free (or paid for better performance)
```

## 📁 Files Structure:
```
backend/
├── server.js         # Express server with web scraping
├── package.json      # Dependencies & scripts
└── README.md         # This file
```

## 🔧 Dependencies:
- **Express.js** - Web server framework
- **Axios** - HTTP requests for web scraping
- **Cheerio** - HTML parsing and content extraction
- **CORS** - Cross-origin resource sharing

## 🌐 API Endpoints:
- `GET /api/health` - Health check
- `POST /api/chat` - Web scraping and AI response
- `GET /` - Basic status page

## 🔍 Features:
- **Real Web Scraping** - DuckDuckGo search results
- **Wikipedia Integration** - Comprehensive information
- **Multi-source Analysis** - Intelligent content aggregation
- **Error Handling** - Graceful fallbacks
- **CORS Enabled** - Works with any frontend

## 🎯 After Deployment:
1. Copy your Render URL (e.g., `https://vincai-backend.onrender.com`)
2. Update the frontend `script.js` with your backend URL
3. Test the API endpoints:
   - `GET https://your-app.onrender.com/api/health`
   - `POST https://your-app.onrender.com/api/chat`

## 📊 Environment Variables (Optional):
- `PORT` - Server port (auto-detected by Render)
- `NODE_ENV` - Environment mode

Perfect for Render deployment! 🚀
