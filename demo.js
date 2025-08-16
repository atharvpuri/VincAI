// Demo script for TalkGPT - Shows off all features
class TalkGPTDemo {
    constructor() {
        this.demoSteps = [
            {
                title: "Welcome to TalkGPT!",
                description: "This is a complete ChatGPT clone with all features",
                action: () => this.showWelcome()
            },
            {
                title: "Dark Theme Toggle",
                description: "Switch between light and dark themes",
                action: () => this.toggleThemeDemo()
            },
            {
                title: "Example Prompts",
                description: "Click on example cards to start conversations",
                action: () => this.showExamplePrompts()
            },
            {
                title: "Chat Functionality",
                description: "Full chat interface with typing indicators",
                action: () => this.startChatDemo()
            },
            {
                title: "Responsive Design",
                description: "Works perfectly on all devices",
                action: () => this.showResponsiveDemo()
            },
            {
                title: "Chat History",
                description: "Manage multiple conversations",
                action: () => this.showChatHistoryDemo()
            }
        ];
        this.currentStep = 0;
    }

    async start() {
        console.log("🚀 Starting TalkGPT Demo...");
        
        // Wait for app to load
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        for (let i = 0; i < this.demoSteps.length; i++) {
            this.currentStep = i;
            const step = this.demoSteps[i];
            
            console.log(`📌 Step ${i + 1}: ${step.title}`);
            console.log(`   ${step.description}`);
            
            await step.action();
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
        console.log("✅ Demo completed! TalkGPT is ready to use.");
    }

    showWelcome() {
        return new Promise(resolve => {
            console.log("👋 Welcome screen displayed");
            resolve();
        });
    }

    async toggleThemeDemo() {
        console.log("🌙 Toggling theme...");
        const themeBtn = document.getElementById('themeBtn');
        themeBtn.click();
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("☀️ Toggling back...");
        themeBtn.click();
    }

    showExamplePrompts() {
        return new Promise(resolve => {
            const cards = document.querySelectorAll('.example-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.animation = 'pulse 0.5s ease';
                    setTimeout(() => {
                        card.style.animation = '';
                    }, 500);
                }, index * 200);
            });
            
            console.log("💡 Example prompts highlighted");
            resolve();
        });
    }

    async startChatDemo() {
        console.log("💬 Starting chat demo...");
        
        // Simulate clicking an example
        const exampleCard = document.querySelector('.example-card');
        exampleCard.click();
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Send the message
        const sendBtn = document.getElementById('sendBtn');
        sendBtn.click();
        
        console.log("📨 Demo message sent");
    }

    showResponsiveDemo() {
        return new Promise(resolve => {
            console.log("📱 Responsive design active - try resizing the window!");
            
            // Simulate mobile view
            if (window.innerWidth > 768) {
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.add('collapsed');
                
                setTimeout(() => {
                    sidebar.classList.remove('collapsed');
                }, 1500);
            }
            
            resolve();
        });
    }

    showChatHistoryDemo() {
        return new Promise(resolve => {
            console.log("📚 Chat history management");
            
            // Highlight new chat button
            const newChatBtn = document.getElementById('newChatBtn');
            newChatBtn.style.animation = 'pulse 1s ease';
            
            setTimeout(() => {
                newChatBtn.style.animation = '';
            }, 1000);
            
            resolve();
        });
    }
}

// CSS for demo animations
const demoStyles = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(16, 163, 127, 0.3); }
    100% { transform: scale(1); }
}
`;

// Add demo styles
const styleSheet = document.createElement('style');
styleSheet.textContent = demoStyles;
document.head.appendChild(styleSheet);

// Auto-start demo when page loads (optional)
// Uncomment the next line to auto-start the demo
// window.addEventListener('load', () => new TalkGPTDemo().start());

console.log("🎬 TalkGPT Demo ready! Run 'new TalkGPTDemo().start()' to begin.");
