# 🚀 LangCore

A modern AI assistant powered by LangGraph.js and Next.js, featuring secure authentication and real-time interactions.

## 🌟 Overview

LangCore is an intelligent assistant that leverages the power of Google's Gemini model through a React-based interface. It provides a seamless chat experience with real-time streaming responses and secure authentication.

## ✨ Key Features

- **🤖 Advanced AI Integration**
  - Powered by Google's Gemini 2.5 Flash model
  - Real-time response streaming
  - Intelligent conversation handling

- **🔒 Secure Authentication**
  - Auth0 integration for robust security
  - Protected API routes
  - Secure user sessions

- **💻 Modern Tech Stack**
  - Next.js 14+ for the frontend and API routes
  - LangGraph.js for AI agent orchestration
  - Tailwind CSS for modern styling
  - TypeScript for type safety

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- A Google API key for Gemini
- Auth0 account and credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/langcore.git
   cd langcore
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Configure environment variables**
   Create a `.env.local` file:
   ```env
   # Auth0 Configuration
   AUTH0_SECRET='your-auth0-secret'
   AUTH0_BASE_URL='http://localhost:3000'
   AUTH0_ISSUER_BASE_URL='your-auth0-domain'
   AUTH0_CLIENT_ID='your-auth0-client-id'
   AUTH0_CLIENT_SECRET='your-auth0-client-secret'

   # Google API Configuration
   GOOGLE_API_KEY='your-google-api-key'
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

Visit `http://localhost:3000` to see your application running.

## 🎯 Usage

1. **Authentication**
   - Log in using Auth0
   - Supports multiple authentication providers

2. **Chat Interface**
   - Start a conversation with the AI
   - Real-time streaming responses
   - Support for complex queries

3. **Development**
   - Real-time development feedback
   - Built-in error handling
   - Development mode logging

## 🔧 Configuration

### Auth0 Setup
1. Create a new application in Auth0
2. Configure callback URLs
3. Add necessary permissions

### Google API Setup
1. Create a project in Google Cloud Console
2. Enable the Generative Language API
3. Create API credentials
