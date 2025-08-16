// Working AI Engine - Simple but Effective
class WorkingAIEngine {
    constructor() {
        this.conversationHistory = [];
        console.log('Working AI Engine Initialized');
    }

    think(userInput) {
        console.log('AI Processing:', userInput);
        
        // Store conversation
        this.conversationHistory.push({ user: userInput, timestamp: Date.now() });
        
        // Generate intelligent response based on input
        const response = this.generateResponse(userInput);
        
        // Store AI response
        this.conversationHistory.push({ ai: response, timestamp: Date.now() });
        
        return response;
    }

    generateResponse(input) {
        const lowerInput = input.toLowerCase().trim();
        
        // Programming & Technology Questions
        if (this.isAbout(lowerInput, ['programming', 'coding', 'code', 'developer', 'software'])) {
            return this.generateProgrammingResponse(lowerInput);
        }
        
        // AI & Machine Learning Questions
        if (this.isAbout(lowerInput, ['ai', 'artificial intelligence', 'machine learning', 'ml', 'neural'])) {
            return this.generateAIResponse(lowerInput);
        }
        
        // Learning & Education Questions
        if (this.isAbout(lowerInput, ['learn', 'study', 'education', 'skill', 'knowledge'])) {
            return this.generateLearningResponse(lowerInput);
        }
        
        // Career & Work Questions
        if (this.isAbout(lowerInput, ['career', 'job', 'work', 'profession', 'employment'])) {
            return this.generateCareerResponse(lowerInput);
        }
        
        // Life & Personal Questions
        if (this.isAbout(lowerInput, ['life', 'happiness', 'motivation', 'success', 'goal'])) {
            return this.generateLifeResponse(lowerInput);
        }
        
        // Science & Research Questions
        if (this.isAbout(lowerInput, ['science', 'research', 'theory', 'experiment', 'data'])) {
            return this.generateScienceResponse(lowerInput);
        }
        
        // Philosophy & Thinking Questions
        if (this.isAbout(lowerInput, ['philosophy', 'meaning', 'consciousness', 'ethics', 'morality'])) {
            return this.generatePhilosophyResponse(lowerInput);
        }
        
        // How-to Questions
        if (lowerInput.startsWith('how to') || lowerInput.includes('how do i') || lowerInput.includes('how can i')) {
            return this.generateHowToResponse(lowerInput);
        }
        
        // What is Questions
        if (lowerInput.startsWith('what is') || lowerInput.startsWith('what are')) {
            return this.generateWhatIsResponse(lowerInput);
        }
        
        // Why Questions
        if (lowerInput.startsWith('why') || lowerInput.includes('why do')) {
            return this.generateWhyResponse(lowerInput);
        }
        
        // Opinion Questions
        if (lowerInput.includes('think') || lowerInput.includes('opinion') || lowerInput.includes('believe')) {
            return this.generateOpinionResponse(lowerInput);
        }
        
        // Greeting
        if (this.isAbout(lowerInput, ['hello', 'hi', 'hey', 'good morning', 'good afternoon'])) {
            return "Hello! I'm VincAI, your intelligent assistant. I'm here to help you with questions about programming, technology, learning, career advice, and much more. What would you like to discuss?";
        }
        
        // General Response
        return this.generateGeneralResponse(lowerInput);
    }

    isAbout(input, keywords) {
        return keywords.some(keyword => input.includes(keyword));
    }

    generateProgrammingResponse(input) {
        if (input.includes('learn') || input.includes('start')) {
            return "Learning programming is an excellent choice! I'd recommend starting with Python - it's beginner-friendly and widely used. Begin with basic concepts like variables, loops, and functions. Practice regularly with small projects, and don't be afraid to make mistakes. The key is consistent practice and building real projects to apply what you learn.";
        }
        if (input.includes('language') || input.includes('which')) {
            return "The choice of programming language depends on your goals. Python is great for beginners, data science, and AI. JavaScript is essential for web development. Java is solid for enterprise applications. C++ offers performance for system programming. I'd suggest Python as a first language due to its clear syntax and versatility.";
        }
        if (input.includes('career') || input.includes('job')) {
            return "A programming career offers excellent opportunities! The field is growing rapidly with high demand for skilled developers. Focus on building a strong foundation, create a portfolio of projects, contribute to open source, and keep learning new technologies. Specializations include web development, mobile apps, data science, AI, and cybersecurity.";
        }
        return "Programming is the art of creating instructions for computers to solve problems. It involves logical thinking, problem-solving, and creativity. Whether you're building websites, mobile apps, or AI systems, programming gives you the power to bring ideas to life through code.";
    }

    generateAIResponse(input) {
        if (input.includes('what is') || input.includes('explain')) {
            return "Artificial Intelligence is the development of computer systems that can perform tasks typically requiring human intelligence - like learning, reasoning, problem-solving, and decision-making. AI includes machine learning (where systems learn from data), deep learning (using neural networks), and natural language processing (understanding human language). It's transforming industries from healthcare to transportation.";
        }
        if (input.includes('future') || input.includes('impact')) {
            return "AI's future is both exciting and transformative. We're seeing breakthroughs in areas like autonomous vehicles, medical diagnosis, creative content generation, and scientific research. AI will likely augment human capabilities rather than replace humans entirely. Key considerations include ensuring AI safety, addressing ethical concerns, and preparing our workforce for an AI-integrated world.";
        }
        if (input.includes('learn') || input.includes('start')) {
            return "To start learning AI, build a foundation in mathematics (statistics, linear algebra), learn Python programming, and understand machine learning concepts. Start with courses on platforms like Coursera or edX, practice with datasets, and work on projects. Familiarize yourself with libraries like TensorFlow, PyTorch, and scikit-learn. The key is combining theory with hands-on practice.";
        }
        return "AI represents one of the most significant technological advances of our time. It's about creating systems that can think, learn, and adapt - opening possibilities we're only beginning to explore. From improving healthcare outcomes to solving climate challenges, AI has the potential to address some of humanity's greatest challenges.";
    }

    generateLearningResponse(input) {
        if (input.includes('how') || input.includes('method')) {
            return "Effective learning involves several key strategies: active engagement (asking questions, summarizing), spaced repetition (reviewing material over time), practical application (using what you learn), and connecting new information to existing knowledge. Set clear goals, maintain consistency, seek feedback, and don't be afraid to make mistakes - they're part of the learning process.";
        }
        if (input.includes('motivation') || input.includes('motivated')) {
            return "Staying motivated while learning requires finding your 'why' - understanding how the knowledge serves your goals. Break large topics into smaller, manageable chunks. Celebrate small wins, track your progress, and connect with others learning similar things. Remember that learning is a journey, and persistence often matters more than natural talent.";
        }
        if (input.includes('time') || input.includes('busy')) {
            return "Learning with limited time requires strategic planning. Focus on high-impact activities, use techniques like the Pomodoro method (25-minute focused sessions), learn during commutes or breaks, and prioritize depth over breadth. Even 15-30 minutes daily can lead to significant progress over time. Consistency beats intensity.";
        }
        return "Learning is one of humanity's greatest abilities - it's how we grow, adapt, and create better futures. Whether you're acquiring new skills for career advancement or exploring subjects out of curiosity, learning enriches life and opens new possibilities. The key is finding approaches that work for your learning style and maintaining curiosity.";
    }

    generateCareerResponse(input) {
        if (input.includes('change') || input.includes('switch')) {
            return "Career changes can be challenging but rewarding. Start by identifying your values, interests, and skills. Research your target field thoroughly, network with professionals in that area, and consider gaining relevant experience through side projects, volunteering, or additional education. Plan financially for the transition and be prepared for initial uncertainty - it's part of the growth process.";
        }
        if (input.includes('success') || input.includes('advance')) {
            return "Career success involves continuous learning, building strong relationships, delivering consistent value, and being adaptable to change. Focus on developing both technical skills and soft skills like communication and leadership. Seek mentorship, take on challenging projects, and don't be afraid to step outside your comfort zone. Success is often about adding value to others while growing personally.";
        }
        if (input.includes('balance') || input.includes('life')) {
            return "Work-life balance is about setting boundaries and priorities. Define what balance means for you - it's different for everyone. Communicate clearly with colleagues about expectations, use time management techniques, and make time for activities that recharge you. Remember that balance isn't perfect daily - it's about overall life satisfaction and well-being.";
        }
        return "A fulfilling career aligns your skills, interests, and values while providing growth opportunities. It's not just about the job title or salary - it's about finding work that engages you and contributes to something meaningful. Career development is a lifelong journey of learning, adapting, and evolving with changing industries and personal goals.";
    }

    generateLifeResponse(input) {
        if (input.includes('happiness') || input.includes('happy')) {
            return "Happiness often comes from a combination of meaningful relationships, purposeful work, personal growth, and contributing to something bigger than yourself. It's not a constant state but moments and periods of fulfillment. Focus on what you can control, practice gratitude, maintain health (physical and mental), and remember that happiness is often found in the journey, not just destinations.";
        }
        if (input.includes('meaning') || input.includes('purpose')) {
            return "Finding meaning in life is deeply personal. It often involves understanding your values, using your strengths to help others, pursuing growth, and building connections. Meaning can be found in relationships, creative expression, problem-solving, spiritual practices, or contributing to causes you care about. The key is aligning your actions with what truly matters to you.";
        }
        if (input.includes('goal') || input.includes('achieve')) {
            return "Achieving goals requires clarity, planning, and persistence. Start by defining specific, measurable objectives. Break large goals into smaller, actionable steps. Track progress, adjust strategies as needed, and celebrate milestones along the way. Remember that setbacks are normal - resilience and adaptability often matter more than perfect execution.";
        }
        return "Life is a unique journey of experiences, relationships, growth, and contribution. While there's no universal formula for a fulfilling life, key elements often include continuous learning, meaningful connections, purposeful work, health and well-being, and finding ways to make a positive impact. The key is staying curious, adaptable, and true to your values.";
    }

    generateScienceResponse(input) {
        return "Science is humanity's systematic approach to understanding the natural world through observation, experimentation, and evidence-based reasoning. It's not just a collection of facts but a method for discovering truth and solving problems. Science drives innovation, improves lives, and helps us understand everything from the smallest particles to the vastness of the universe.";
    }

    generatePhilosophyResponse(input) {
        return "Philosophy explores fundamental questions about existence, knowledge, values, reason, mind, and language. It teaches us to think critically, question assumptions, and examine life's deeper meanings. While it may not provide definitive answers, philosophy develops our capacity for logical thinking and helps us navigate complex ethical and existential questions.";
    }

    generateHowToResponse(input) {
        const topic = input.replace(/how to|how do i|how can i/g, '').trim();
        return `To approach ${topic}, I'd recommend starting with understanding the fundamentals and then building systematically. Break it down into smaller, manageable steps, practice regularly, seek guidance from experts or resources, and learn from both successes and failures. Would you like more specific advice about any particular aspect of ${topic}?`;
    }

    generateWhatIsResponse(input) {
        const topic = input.replace(/what is|what are/g, '').trim();
        return `${this.capitalize(topic)} is a multifaceted concept that involves various aspects and considerations. To fully understand it, it's helpful to examine its core components, how it works, its applications, and its significance. Would you like me to elaborate on any specific aspect of ${topic}?`;
    }

    generateWhyResponse(input) {
        const topic = input.replace(/why|why do|why does/g, '').trim();
        return `The reasons behind ${topic} often involve multiple factors including underlying principles, practical benefits, historical development, and human needs or behaviors. Understanding the 'why' helps us see the bigger picture and make more informed decisions. What specific aspect of the reasoning interests you most?`;
    }

    generateOpinionResponse(input) {
        const topic = this.extractMainTopic(input);
        return `When I consider ${topic}, I think it's important to examine it from multiple perspectives. Based on logical analysis and considering various factors, I believe the key aspects worth understanding are the underlying principles, practical implications, and broader context. What's particularly interesting is how different viewpoints can offer valuable insights into the complexity of the subject.`;
    }

    generateGeneralResponse(input) {
        const topic = this.extractMainTopic(input);
        return `That's an interesting question about ${topic}. This topic touches on several important concepts and has various practical implications. I think the key to understanding it lies in examining the fundamental principles involved and considering how they apply in real-world situations. What specific aspect would you like to explore further?`;
    }

    extractMainTopic(input) {
        const words = input.split(' ');
        const meaningfulWords = words.filter(word => 
            word.length > 3 && 
            !['what', 'how', 'why', 'when', 'where', 'who', 'which', 'that', 'this', 'with', 'from', 'they', 'them', 'have', 'been', 'will', 'would', 'could', 'should'].includes(word.toLowerCase())
        );
        return meaningfulWords.slice(0, 2).join(' ') || 'this topic';
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
