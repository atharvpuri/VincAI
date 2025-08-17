// VincAI - Main Application 
class VincAI {
    constructor() {
        this.isTyping = false;
        this.setupEventListeners();
        this.loadTheme();
        console.log('🚀 VincAI Active!');
    }

    setupEventListeners() {
        // Wait for DOM to be fully loaded
        setTimeout(() => {
            this.initializeElements();
        }, 100);
    }

    initializeElements() {
        // Theme toggle
        const themeBtn = document.getElementById('themeBtn');
        if (themeBtn) {
            themeBtn.onclick = () => this.toggleTheme();
            console.log('Theme button connected');
        } else {
            console.log('Theme button not found');
        }

        // Send button
        const sendBtn = document.getElementById('sendBtn');
        if (sendBtn) {
            sendBtn.onclick = () => this.sendMessage();
            console.log('Send button connected');
        } else {
            console.log('Send button not found');
        }

        // Message input
        const messageInput = document.getElementById('messageInput');
        if (messageInput) {
            messageInput.onkeydown = (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            };
            
            messageInput.oninput = () => {
                const sendBtn = document.getElementById('sendBtn');
                if (sendBtn) {
                    sendBtn.disabled = !messageInput.value.trim() || this.isTyping;
                }
            };
            console.log('Message input connected');
        } else {
            console.log('Message input not found');
        }

        // New chat button
        const newChatBtn = document.getElementById('newChatBtn');
        if (newChatBtn) {
            newChatBtn.onclick = () => this.startNewChat();
            console.log('New chat button connected');
        } else {
            console.log('New chat button not found');
        }

        // Example cards
        const exampleCards = document.querySelectorAll('.example-card');
        if (exampleCards.length > 0) {
            exampleCards.forEach(card => {
                card.onclick = () => {
                    const prompt = card.getAttribute('data-prompt');
                    const messageInput = document.getElementById('messageInput');
                    const sendBtn = document.getElementById('sendBtn');
                    
                    if (messageInput && prompt) {
                        messageInput.value = prompt;
                        messageInput.focus();
                    }
                    if (sendBtn) {
                        sendBtn.disabled = false;
                    }
                };
            });
            console.log('Example cards connected:', exampleCards.length);
        }

        // Sidebar toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        if (sidebarToggle && sidebar) {
            sidebarToggle.onclick = () => {
                sidebar.classList.toggle('show');
            };
            console.log('Sidebar toggle connected');
        }
    }

    toggleTheme() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        console.log('Theme switched to:', newTheme);
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.setAttribute('data-theme', savedTheme);
        console.log('Theme loaded:', savedTheme);
    }

    startNewChat() {
        console.log('Starting new chat');
        
        // Clear chat messages
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) {
            chatMessages.innerHTML = '';
        }
        
        // Show welcome screen
        const welcomeScreen = document.getElementById('welcomeScreen');
        const chatContainer = document.getElementById('chatContainer');
        
        if (welcomeScreen) welcomeScreen.style.display = 'flex';
        if (chatContainer) chatContainer.style.display = 'none';
    }

    sendMessage() {
        const messageInput = document.getElementById('messageInput');
        if (!messageInput) {
            console.log('Message input not found');
            return;
        }

        const text = messageInput.value.trim();
        if (!text || this.isTyping) {
            console.log('No text or already typing');
            return;
        }

        console.log('Sending message:', text);
        
        // Show chat container
        this.showChatContainer();
        
        // Add user message
        this.addMessage(text, 'user');
        
        // Clear input
        messageInput.value = '';
        
        // Generate simple AI response
        this.generateSimpleResponse(text);
    }

    showChatContainer() {
        const welcomeScreen = document.getElementById('welcomeScreen');
        const chatContainer = document.getElementById('chatContainer');
        
        if (welcomeScreen) welcomeScreen.style.display = 'none';
        if (chatContainer) chatContainer.style.display = 'flex';
    }

    addMessage(text, sender) {
        const chatMessages = document.getElementById('chatMessages');
        if (!chatMessages) {
            console.log('Chat messages container not found');
            return;
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const avatar = sender === 'user' ? 
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>' :
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.078 6.078 0 0 0 6.527 2.9 5.991 5.991 0 0 0 4.306 1.011 6.078 6.078 0 0 0 4.323-1.011 5.991 5.991 0 0 0 6.51-2.9 6.046 6.046 0 0 0-.743-7.098 5.985 5.985 0 0 0 .516-4.91z"/></svg>';

        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-avatar">${avatar}</div>
                <div class="message-text">${text}</div>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        console.log('Message added:', sender, text);
    }

    generateSimpleResponse(userMessage) {
        this.isTyping = true;
        const sendBtn = document.getElementById('sendBtn');
        if (sendBtn) sendBtn.disabled = true;

        console.log('🔍 Searching web for:', userMessage);
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Call web scraping API
        this.performWebSearch(userMessage)
            .then(response => {
                this.hideTypingIndicator();
                this.addMessage(response.message, 'assistant');
                this.isTyping = false;
                if (sendBtn) sendBtn.disabled = false;
                console.log('✅ Web scraping response complete');
            })
            .catch(error => {
                console.error('Web scraping failed:', error);
                this.hideTypingIndicator();
                // Fallback to simple response
                const fallbackResponse = this.generateFallbackResponse(userMessage);
                this.addMessage(fallbackResponse, 'assistant');
                this.isTyping = false;
                if (sendBtn) sendBtn.disabled = false;
            });
    }

    async performWebSearch(query) {
        try {
            console.log('📡 Calling backend API for web scraping...');
            
            // Backend deployed on Render, Frontend on Netlify
            const apiUrl = window.location.hostname === 'localhost' 
                ? 'http://localhost:3000/api/chat'
                : 'https://vincaibackend-1.onrender.com/api/chat';
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: query })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.success) {
                return {
                    message: data.message,
                    sources: data.sources || []
                };
            } else {
                throw new Error(data.error || 'Backend returned error');
            }
        } catch (error) {
            console.error('API call failed:', error);
            throw error;
        }
    }

    generateFallbackResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! I'm VincAI with web scraping capabilities. I can search the internet to find the most current information about any topic. However, I'm currently in offline mode. Please ensure the backend server is running for full web scraping functionality.";
        }
        
        if (lowerMessage.includes('what is') || lowerMessage.includes('explain')) {
            return `I'd be happy to explain ${userMessage} by searching the web for the latest information, reading multiple articles and blogs, and providing you with a comprehensive, well-structured response. Currently running in offline mode - please start the backend server for full functionality.`;
        }
        
        if (lowerMessage.includes('how to')) {
            return `For "${userMessage}", I would normally search through tutorials, guides, and expert articles across the web to give you step-by-step instructions. Backend server needed for web scraping functionality.`;
        }
        
        return `I'm designed to search the internet for "${userMessage}", analyze multiple sources including articles, blogs, and posts, then provide you with a comprehensive, well-structured response. Please ensure the backend server is running for full web scraping capabilities.`;
    }

    showTypingIndicator() {
        const chatMessages = document.getElementById('chatMessages');
        if (!chatMessages) return;

        const typingDiv = document.createElement('div');
        typingDiv.className = 'message assistant typing';
        typingDiv.id = 'typingIndicator';
        
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="message-avatar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.078 6.078 0 0 0 6.527 2.9 5.991 5.991 0 0 0 4.306 1.011 6.078 6.078 0 0 0 4.323-1.011 5.991 5.991 0 0 0 6.51-2.9 6.046 6.046 0 0 0-.743-7.098 5.985 5.985 0 0 0 .516-4.91z"/>
                    </svg>
                </div>
                <div class="message-text">
                    <div class="typing-indicator">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    window.app = new VincAI();
});

// Also try immediate initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        window.app = new VincAI();
    });
} else {
    window.app = new VincAI();
}

// === RESPONSIVE MOBILE ENHANCEMENTS ===

// Mobile sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            
            // Close sidebar when clicking outside on mobile
            if (sidebar.classList.contains('open')) {
                const closeSidebar = function(e) {
                    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                        sidebar.classList.remove('open');
                        document.removeEventListener('click', closeSidebar);
                    }
                };
                
                setTimeout(() => {
                    document.addEventListener('click', closeSidebar);
                }, 100);
            }
        });
    }
    
    // Auto-hide sidebar on mobile when link is clicked
    const sidebarLinks = sidebar?.querySelectorAll('.chat-item, .new-chat-btn');
    sidebarLinks?.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('open');
            }
        });
    });
    
    // Handle textarea auto-resize on mobile
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 120) + 'px';
        });
        
        // Prevent zoom on iOS when focusing input
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            messageInput.addEventListener('focus', function() {
                this.style.fontSize = '16px';
            });
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && sidebar?.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
        
        // Reset textarea height on resize
        if (messageInput) {
            messageInput.style.height = 'auto';
        }
    });
    
    // Smooth scrolling for mobile
    if ('scrollBehavior' in document.documentElement.style) {
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) {
            chatMessages.style.scrollBehavior = 'smooth';
        }
    }
    
    // Handle safe area insets for notched devices
    if (CSS.supports('padding: env(safe-area-inset-top)')) {
        document.documentElement.style.setProperty('--safe-top', 'env(safe-area-inset-top)');
        document.documentElement.style.setProperty('--safe-bottom', 'env(safe-area-inset-bottom)');
        document.documentElement.style.setProperty('--safe-left', 'env(safe-area-inset-left)');
        document.documentElement.style.setProperty('--safe-right', 'env(safe-area-inset-right)');
    }
    
    // Optimize performance for mobile
    if (window.innerWidth <= 768) {
        // Reduce animation complexity on mobile
        document.documentElement.style.setProperty('--animation-speed', '0.2s');
        
        // Throttle scroll events
        let scrollTimeout;
        const chatContainer = document.getElementById('chatMessages');
        if (chatContainer) {
            chatContainer.addEventListener('scroll', function() {
                if (scrollTimeout) clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    // Handle scroll end events
                }, 150);
            });
        }
    }
});

// Handle orientation changes
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        // Recalculate viewport height after orientation change
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
        // Close mobile sidebar on orientation change
        const sidebar = document.getElementById('sidebar');
        if (sidebar?.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    }, 100);
});

// Set initial viewport height for mobile browsers
const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

setVH();
window.addEventListener('resize', setVH);
