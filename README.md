# CardiGraph - AI-Powered Visual Canvas Application with Fuzzie Integration

<div align="center">
  
  [![Watch the video](https://img.youtube.com/vi/wTZUFelsneg/0.jpg)](https://www.youtube.com/watch?v=wTZUFelsneg)
  
  Watch the walkthrough video, click the image ⬆️
  
</div>

**CardiGraph** is a comprehensive platform featuring:
- 🎨 **AI-Powered Visual Canvas**: Real-time collaborative interface with LangGraph and CopilotKit
- 🔥 **Fuzzie Integration**: Complete workflow automation platform with 50+ integrations
- 🚀 **Modern Architecture**: Built with Next.js 15, TypeScript, and Tailwind CSS

---

## 🚨 COMPLETE SETUP GUIDE - READ CAREFULLY

### 📋 Prerequisites (REQUIRED)

Before starting, you **MUST** have:

1. **Node.js 18+** - [Download here](https://nodejs.org/)
2. **Python 3.12+** - [Download here](https://www.python.org/downloads/)
3. **Git** - [Download here](https://git-scm.com/downloads)
4. **OpenAI API Key** - [Get from OpenAI Platform](https://platform.openai.com/api-keys)

### 🔽 Step 1: Clone the Repository

```bash
git clone https://github.com/vedantparmar12/AG-UI-canvas.git
cd canvas-with-langgraph-python
```


### 📦 Step 2: Install Node.js Dependencies

```bash
# Install all Node.js dependencies
npm install

# If you encounter any dependency conflicts:
npm install --legacy-peer-deps
```

### 🐍 Step 3: Setup Python Environment & Agent

```bash
# Run the agent setup script (this creates Python venv and installs dependencies)
npm run install:agent

# If the above fails, manual setup:
cd agent
python -m venv .venv

# Activate virtual environment:
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

# Install Python dependencies:
pip install -r requirements.txt
cd ..
```

### ⚙️ Step 4: Environment Variables Setup

#### 🔑 REQUIRED: Agent Configuration

Create `agent/.env` file:

```bash
# Create agent/.env file
echo "OPENAI_API_KEY=your-openai-api-key-here" > agent/.env

# Windows PowerShell:
echo "OPENAI_API_KEY=your-openai-api-key-here" | Out-File -FilePath agent\.env -Encoding utf8
```

**⚠️ Replace `your-openai-api-key-here` with your actual OpenAI API key!**

#### 🌐 OPTIONAL: Frontend Configuration

Create `.env.local` in the root directory:

```bash
# Optional: For enhanced features
COPILOT_CLOUD_PUBLIC_API_KEY=your-copilot-cloud-key
NEXT_PUBLIC_APP_ENV=development
```

### 🚀 Step 5: Start the Application

#### Option A: Start Both Servers (Recommended)

```bash
# Starts both frontend and agent servers
npm run dev
```

This will start:
- 🌐 **Frontend**: http://localhost:3000
- 🤖 **Agent**: http://localhost:8123

#### Option B: Start Servers Separately

```bash
# Terminal 1: Start the Next.js frontend
npm run dev:ui

# Terminal 2: Start the LangGraph agent
npm run dev:agent
```

### ✅ Step 6: Verify Installation

1. **Check Frontend**: Visit http://localhost:3000
   - You should see the CardiGraph landing page
   - Navigate to `/canvas` for the AI canvas

2. **Check Agent**: Visit http://localhost:8123
   - Should show LangGraph agent status

3. **Test Fuzzie Integration**: 
   - Click "Fuzzie" in the navbar
   - Should show instructions modal

---

## 🎯 What You'll Find

### 🎨 CardiGraph Canvas Features
- **Visual Canvas Interface**: Drag-and-drop cards with AI collaboration
- **Four Card Types**: Project, Entity, Note, Chart
- **Real-time AI Sync**: Bidirectional state synchronization
- **Multi-step Planning**: AI creates and executes complex workflows
- **Human-in-the-Loop**: Smart interrupts for clarification
- **Theme Customization**: Multiple color schemes
- **Responsive Design**: Works on desktop and mobile

### 🔥 Fuzzie Workflow Platform
- **50+ Integrations**: AI services, databases, social media, cloud storage
- **Visual Workflow Builder**: Drag-and-drop automation designer
- **Enterprise Security**: AES-256 encryption, OAuth flows
- **Production Ready**: Complete deployment architecture
- **AI-First Approach**: OpenAI, Groq, OpenRouter integrations

---

## 🏠 Project Structure

```
canvas-with-langgraph-python/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page with Fuzzie integration
│   │   ├── canvas/page.tsx       # AI Canvas application
│   │   ├── workflows/            # Workflow editor pages
│   │   └── layout.tsx            # Root layout
│   ├── components/
│   │   ├── landing/              # Landing page components
│   │   │   ├── Navbar.tsx           # Navigation with Fuzzie link
│   │   │   ├── FuzzieSection.tsx    # Fuzzie showcase section
│   │   │   └── ...other sections
│   │   ├── canvas/               # Canvas UI components
│   │   └── ui/                   # ShadCN UI components
│   ├── lib/
│   │   ├── canvas/               # Canvas utilities
│   │   ├── fuzzie-redirect.ts    # Fuzzie launch utilities
│   │   └── stripe.ts             # Payment integration
│   └── types/                    # TypeScript declarations
├── agent/
│   ├── agent.py                  # LangGraph AI agent
│   ├── requirements.txt          # Python dependencies
│   └── .env                      # API keys (YOU CREATE THIS)
├── prisma/                       # Database schema
└── public/                       # Static assets
```

## 📚 Usage Guide

### 🎨 Canvas Application

1. **Navigate to Canvas**: Visit http://localhost:3000/canvas
2. **Create Cards**: Use "New Item" button or ask AI:
   - "Create a new project with checklist"
   - "Add a note about our meeting"
   - "Create a chart showing quarterly metrics"
3. **AI Collaboration**: Chat with AI to modify cards:
   - "Set the project status to In Progress"
   - "Add three tasks to the checklist"
   - "Update chart with latest data"
4. **Multi-step Plans**: Give complex instructions:
   - "Create 3 projects, each with 2 entities and a summary note"

### 🔥 Fuzzie Platform Access

1. **From Navbar**: Click "Fuzzie" button in navigation
2. **From Landing**: Scroll to Fuzzie section, click "Explore Fuzzie Platform"
3. **Follow Instructions**: Modal will show you how to launch Fuzzie locally

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | 🚀 **Start both servers** (recommended) |
| `npm run dev:ui` | 🌐 Start only Next.js frontend |
| `npm run dev:agent` | 🤖 Start only Python agent |
| `npm run dev:debug` | 🔍 Start with debug logging |
| `npm run build` | 🏧 Build for production |
| `npm run start` | ▶️ Start production server |
| `npm run install:agent` | 🐍 Setup Python environment |
| `npx tsc --noEmit` | 🔍 Check TypeScript errors |

---

## 🎨 Key Technologies

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **AI Integration**: LangGraph, CopilotKit, OpenAI GPT-4
- **UI Components**: shadcn/ui, Radix UI, Framer Motion
- **Workflow Platform**: React Flow, Zustand, Prisma
- **Python Backend**: LangGraph, CopilotKit Runtime

---

## 🚽 Troubleshooting Guide

### ❌ Common Issues & Solutions

#### 1. **"I'm having trouble connecting to my tools"**
```bash
# Check if agent is running
ps aux | grep python  # macOS/Linux
Get-Process | Where-Object {$_.ProcessName -like "*python*"}  # Windows

# Restart the agent
npm run dev:agent
```

**Verify:**
- ✅ Agent running on http://localhost:8123
- ✅ OpenAI API key in `agent/.env`
- ✅ Both servers started successfully

#### 2. **Port Already in Use**
```bash
# Kill processes on ports
# Windows PowerShell:
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
Get-Process -Id (Get-NetTCPConnection -LocalPort 8123).OwningProcess | Stop-Process

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
lsof -ti:8123 | xargs kill -9
```

#### 3. **Python Environment Issues**
```bash
# Recreate virtual environment
cd agent
Remove-Item -Recurse -Force .venv  # Windows
rm -rf .venv  # macOS/Linux

python -m venv .venv

# Activate and install
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # macOS/Linux

pip install -r requirements.txt
```

#### 4. **OpenAI API Issues**
```bash
# Verify API key format
cat agent/.env  # Should show: OPENAI_API_KEY=sk-...

# Test API key
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.openai.com/v1/models
```

#### 5. **Node.js Dependency Conflicts**
```bash
# Clear npm cache and reinstall
npm cache clean --force
Remove-Item -Recurse -Force node_modules  # Windows
rm -rf node_modules  # macOS/Linux

npm install --legacy-peer-deps
```

#### 6. **TypeScript Errors**
```bash
# Check and fix TypeScript issues
npx tsc --noEmit

# Clear Next.js cache
Remove-Item -Recurse -Force .next  # Windows
rm -rf .next  # macOS/Linux
```

#### 7. **Fuzzie Integration Not Working**
- ✅ Click "Fuzzie" in navbar
- ✅ Should show modal with instructions
- ✅ Follow the setup guide for Fuzzie project

### 📞 Need More Help?

1. **Check Logs**: Look at terminal output for detailed error messages
2. **Browser Console**: Press F12 and check for JavaScript errors
3. **GitHub Issues**: [Report bugs here](https://github.com/vedantparmar12/AG-UI-canvas/issues)
4. **Documentation**: 
   - [LangGraph Docs](https://langchain-ai.github.io/langgraph/)
   - [CopilotKit Docs](https://docs.copilotkit.ai)
   - [Next.js Docs](https://nextjs.org/docs)

---

## 🏆 Success Checklist

Before reporting issues, verify:

- [ ] Node.js 18+ installed
- [ ] Python 3.12+ installed
- [ ] `npm install` completed successfully
- [ ] `agent/.env` file exists with OpenAI API key
- [ ] `npm run dev` starts both servers
- [ ] Frontend loads at http://localhost:3000
- [ ] Agent responds at http://localhost:8123
- [ ] Canvas page works at http://localhost:3000/canvas
- [ ] Fuzzie section shows in landing page

---

**🎉 That's it! You now have a fully functional AI-powered canvas application with Fuzzie workflow automation integration!**

> **Pro Tip**: Start with the canvas application to test AI features, then explore the Fuzzie integration for advanced workflow automation.

---

## 📜 License & Contributing

- **License**: MIT License - see LICENSE file
- **Contributing**: Issues and PRs welcome!
- **Support**: Star ⭐ the repo if this helped you!
