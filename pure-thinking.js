// Pure Human-Like Thinking Logic - No Templates
class PureThinkingEngine {
    constructor() {
        this.memory = new Map();
        this.currentThoughts = [];
        this.reasoningChain = [];
    }

    // This is where real thinking happens - step by step like human mind
    think(input) {
        // Clear previous thinking
        this.currentThoughts = [];
        this.reasoningChain = [];

        // Step 1: Parse what user said (like human brain processing language)
        const parsedInput = this.parseInput(input);
        
        // Step 2: Activate relevant memories/knowledge (like human brain retrieving info)
        const activatedConcepts = this.activateRelevantConcepts(parsedInput);
        
        // Step 3: Generate thoughts through reasoning (like human brain connecting ideas)
        const reasoningResult = this.performReasoning(parsedInput, activatedConcepts);
        
        // Step 4: Synthesize final thought (like human brain forming conclusion)
        const finalThought = this.synthesizeResponse(reasoningResult, parsedInput);
        
        return finalThought;
    }

    parseInput(input) {
        const words = input.toLowerCase().split(/\s+/);
        const concepts = [];
        const intentions = [];
        
        // Extract core concepts (what is this about?)
        for (let word of words) {
            if (word.length > 3 && !this.isStopWord(word)) {
                concepts.push(word);
            }
        }
        
        // Understand intention (what does user want?)
        if (input.includes('?')) intentions.push('questioning');
        if (input.includes('why') || input.includes('how') || input.includes('what')) intentions.push('seeking_explanation');
        if (input.includes('think') || input.includes('opinion')) intentions.push('seeking_opinion');
        if (input.includes('should') || input.includes('recommend')) intentions.push('seeking_advice');
        
        return { 
            originalInput: input,
            concepts: concepts,
            intentions: intentions,
            wordCount: words.length,
            complexity: this.assessComplexity(input)
        };
    }

    isStopWord(word) {
        const stopWords = ['the', 'is', 'at', 'which', 'on', 'and', 'or', 'but', 'in', 'with', 'to', 'for', 'of', 'as', 'by'];
        return stopWords.includes(word);
    }

    assessComplexity(input) {
        if (input.length > 100) return 'high';
        if (input.length > 50) return 'medium';
        return 'low';
    }

    activateRelevantConcepts(parsedInput) {
        const { concepts } = parsedInput;
        const activatedKnowledge = [];
        
        // For each concept, activate related thoughts (like human brain associations)
        for (let concept of concepts) {
            const relatedThoughts = this.getRelatedThoughts(concept);
            activatedKnowledge.push(...relatedThoughts);
        }
        
        return activatedKnowledge;
    }

    getRelatedThoughts(concept) {
        // This simulates how human brain connects ideas
        const thoughts = [];
        
        // Think about what this concept relates to
        if (concept.includes('learn') || concept.includes('study')) {
            thoughts.push('Learning requires practice and repetition');
            thoughts.push('Everyone learns differently');
            thoughts.push('Understanding builds on previous knowledge');
        }
        
        if (concept.includes('work') || concept.includes('job') || concept.includes('career')) {
            thoughts.push('Work is about solving problems for others');
            thoughts.push('Finding meaningful work improves life satisfaction');
            thoughts.push('Skills develop through experience');
        }
        
        if (concept.includes('life') || concept.includes('living')) {
            thoughts.push('Life involves constant change and adaptation');
            thoughts.push('Relationships are fundamental to human experience');
            thoughts.push('Growth comes from challenges');
        }
        
        if (concept.includes('technology') || concept.includes('ai') || concept.includes('computer')) {
            thoughts.push('Technology amplifies human capabilities');
            thoughts.push('Tools should serve human needs');
            thoughts.push('Innovation creates both opportunities and challenges');
        }
        
        // If no specific associations, generate general reasoning patterns
        if (thoughts.length === 0) {
            thoughts.push(`${concept} can be understood from multiple perspectives`);
            thoughts.push(`The significance of ${concept} depends on context`);
            thoughts.push(`${concept} involves both benefits and drawbacks`);
        }
        
        return thoughts;
    }

    performReasoning(parsedInput, activatedKnowledge) {
        const { intentions, concepts, complexity } = parsedInput;
        
        // Chain of reasoning - like how human mind connects thoughts
        let reasoning = [];
        
        // Start reasoning based on what user wants
        if (intentions.includes('questioning')) {
            reasoning.push('User is asking a question - they want understanding');
            reasoning.push('I need to think through what they really want to know');
        }
        
        if (intentions.includes('seeking_opinion')) {
            reasoning.push('User wants my personal view on this');
            reasoning.push('I should form an opinion based on logical thinking');
        }
        
        // Connect the activated knowledge through reasoning
        for (let knowledge of activatedKnowledge) {
            reasoning.push(`Considering: ${knowledge}`);
            
            // Build reasoning chain - each thought leads to next
            if (reasoning.length > 1) {
                const previousThought = reasoning[reasoning.length - 2];
                const connection = this.findLogicalConnection(previousThought, knowledge);
                if (connection) {
                    reasoning.push(connection);
                }
            }
        }
        
        // Apply different reasoning patterns based on complexity
        if (complexity === 'high') {
            reasoning.push('This is a complex topic requiring careful consideration');
            reasoning.push('Multiple factors need to be weighed');
        }
        
        return reasoning;
    }

    findLogicalConnection(thought1, thought2) {
        // Find how thoughts connect (like human brain making associations)
        if (thought1.includes('learn') && thought2.includes('practice')) {
            return 'Learning and practice reinforce each other';
        }
        if (thought1.includes('work') && thought2.includes('skill')) {
            return 'Work develops skills through application';
        }
        if (thought1.includes('challenge') && thought2.includes('growth')) {
            return 'Challenges create opportunities for growth';
        }
        
        // General logical connections
        return 'These ideas relate because they both involve human experience';
    }

    synthesizeResponse(reasoning, parsedInput) {
        const { originalInput, intentions, concepts } = parsedInput;
        
        // Now form actual thoughts based on reasoning chain
        let thoughts = [];
        
        // Think about the main concept
        const mainConcept = concepts[0] || 'this topic';
        thoughts.push(`When I think about ${mainConcept}, several things come to mind.`);
        
        // Apply reasoning to form opinions
        if (reasoning.length > 0) {
            // Pick key insights from reasoning
            const keyInsights = reasoning.filter(r => !r.includes('User is') && !r.includes('I need to'));
            
            if (keyInsights.length > 0) {
                const selectedInsights = keyInsights.slice(0, 2); // Don't overwhelm
                
                for (let insight of selectedInsights) {
                    thoughts.push(this.transformInsightToNaturalThought(insight));
                }
            }
        }
        
        // Form conclusion based on intention
        if (intentions.includes('seeking_opinion')) {
            thoughts.push(this.formPersonalOpinion(mainConcept));
        } else if (intentions.includes('seeking_advice')) {
            thoughts.push(this.formAdvice(mainConcept));
        } else {
            thoughts.push(this.formGeneralInsight(mainConcept));
        }
        
        // Combine thoughts naturally
        return this.combineThoughtsNaturally(thoughts);
    }

    transformInsightToNaturalThought(insight) {
        // Make insights sound like natural human thoughts
        let naturalThought = insight;
        
        // Replace formal language with natural speech
        naturalThought = naturalThought.replace('Considering: ', '');
        naturalThought = naturalThought.replace('involves both', 'has both');
        naturalThought = naturalThought.replace('requires', 'needs');
        
        return naturalThought;
    }

    formPersonalOpinion(concept) {
        const opinions = [
            `I think ${concept} is really about understanding the deeper principles at work.`,
            `My view is that ${concept} comes down to finding the right balance.`,
            `I believe ${concept} is more nuanced than people often realize.`,
            `In my opinion, ${concept} requires looking at it from multiple angles.`
        ];
        
        return opinions[Math.floor(Math.random() * opinions.length)];
    }

    formAdvice(concept) {
        const advice = [
            `For ${concept}, I'd suggest starting with the fundamentals and building from there.`,
            `With ${concept}, the key is to approach it systematically rather than rushing.`,
            `My advice on ${concept} would be to focus on what you can actually control.`,
            `When dealing with ${concept}, I think patience and persistence are essential.`
        ];
        
        return advice[Math.floor(Math.random() * advice.length)];
    }

    formGeneralInsight(concept) {
        const insights = [
            `What's interesting about ${concept} is how it connects to broader patterns in life.`,
            `The thing about ${concept} is that it often reveals something deeper about how things work.`,
            `${concept} is one of those topics that makes you think about cause and effect.`,
            `There's something profound about ${concept} that goes beyond the surface level.`
        ];
        
        return insights[Math.floor(Math.random() * insights.length)];
    }

    combineThoughtsNaturally(thoughts) {
        // Connect thoughts like natural human speech
        let response = '';
        
        for (let i = 0; i < thoughts.length; i++) {
            if (i === 0) {
                response += thoughts[i];
            } else if (i === 1) {
                response += ' ' + thoughts[i];
            } else {
                // Add natural connectors
                const connectors = [' Also, ', ' What I find is that ', ' The way I see it, ', ' Another thing is that '];
                const connector = connectors[Math.floor(Math.random() * connectors.length)];
                response += connector + thoughts[i].toLowerCase();
            }
        }
        
        return response;
    }
}
