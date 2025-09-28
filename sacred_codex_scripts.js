
// Sacred Codex Universe - JavaScript Functionality

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll progress indicator
    initScrollProgress();
    
    // Initialize section revelation
    initSectionReveal();
    
    // Create divine particles
    createSacredParticles();
    
    // Initialize cosmic weather
    updateCosmicWeather();
    
    // Initialize wisdom meter with animation
    animateWisdomMeter();
    
    // Initialize subscribe form
    initSubscribeForm();
});

// Scroll Progress Indicator
function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    if (!scrollProgress) return; // Exit if element doesn't exist
    
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// Section Revelation on Scroll
function initSectionReveal() {
    const revealSections = document.querySelectorAll('.revelation-step');
    
    const revealSection = function() {
        revealSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add('revealed');
            }
        });
    };
    
    // Initial check
    revealSection();
    
    // Check on scroll
    window.addEventListener('scroll', revealSection);
}

// Create Divine Particles
function createSacredParticles() {
    const particleSystem = document.getElementById('particleSystem');
    if (!particleSystem) return;
    
    const particleCount = 21; // Sacred number
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('divine-particle');
        
        // Position randomly
        particle.style.left = `${Math.random() * 100}%`;
        
        // Stagger animation
        particle.style.animationDelay = `${Math.random() * 8}s`;
        
        particleSystem.appendChild(particle);
    }
}

// Update Cosmic Weather
function updateCosmicWeather() {
    const cosmicWeather = document.getElementById('cosmicWeather');
    if (!cosmicWeather) return;
    
    // Get current date for seed
    const now = new Date();
    const daySeed = now.getDate() + (now.getMonth() + 1) * 31;
    
    // Determine cosmic alignment based on day
    const alignments = ['\u2728 Favorable', '\ud83c\udf1f Exceptional', '\u26a1 Challenging', '\ud83d\udd2e Mysterious', '\ud83d\udcab Transformative'];
    const alignment = alignments[daySeed % alignments.length];
    
    // Determine divine energy based on hour
    const energyLevels = ['\u26a1 High', '\ud83d\udd25 Intense', '\ud83c\udf0a Flowing', '\ud83c\udf31 Growing', '\u2728 Subtle'];
    const energy = energyLevels[now.getHours() % energyLevels.length];
    
    // Determine spiritual weather based on minute
    const weatherTypes = ['\u2600\ufe0f Clear', '\ud83c\udf24\ufe0f Partly Cloudy', '\ud83c\udf08 Radiant', '\u26c8\ufe0f Thunderous', '\ud83c\udf19 Reflective'];
    const weather = weatherTypes[now.getMinutes() % weatherTypes.length];
    
    // Update the display
    cosmicWeather.innerHTML = `
        <div>Cosmic Alignment: ${alignment}</div>
        <div>Divine Energy: ${energy}</div>
        <div>Spiritual Weather: ${weather}</div>
    `;
}

// Activate Mandala Animation
function activateMandala(mandala) {
    mandala.classList.add('activated');
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.classList.add('mandala-ripple');
    mandala.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 2000);
    
    // Increase wisdom level
    increaseWisdom(5);
}

// Wisdom Meter Animation
function animateWisdomMeter() {
    const wisdomFill = document.getElementById('wisdomFill');
    if (!wisdomFill) return;
    
    // Start with 0% and animate to initial value
    setTimeout(() => {
        wisdomFill.style.width = '20%';
        updateWisdomLevel(20);
    }, 1000);
}

// Increase Wisdom Level
function increaseWisdom(amount) {
    const wisdomFill = document.getElementById('wisdomFill');
    if (!wisdomFill) return;
    
    const currentWidth = parseInt(wisdomFill.style.width) || 0;
    const newWidth = Math.min(currentWidth + amount, 100);
    
    wisdomFill.style.width = newWidth + '%';
    updateWisdomLevel(newWidth);
}

// Update Wisdom Level Text
function updateWisdomLevel(level) {
    const wisdomLevel = document.getElementById('wisdomLevel');
    if (!wisdomLevel) return;
    
    let status = 'Seeker';
    
    if (level >= 90) status = 'Illuminated Master';
    else if (level >= 80) status = 'Sage';
    else if (level >= 70) status = 'Seeing the Patterns';
    else if (level >= 60) status = 'Awakening';
    else if (level >= 50) status = 'Conscious Practitioner';
    else if (level >= 40) status = 'Dedicated Student';
    else if (level >= 30) status = 'Earnest Seeker';
    else if (level >= 20) status = 'Curious Explorer';
    else if (level >= 10) status = 'Awakening Interest';
    
    wisdomLevel.textContent = `Wisdom Level: ${level}% - "${status}"`;
}

// Wisdom Profile Management
const wisdomProfile = {
    devotion: 0,
    knowledge: 0,
    meditation: 0,
    service: 0,
    ritual: 0,
    relationship: 0,
    integration: 0
};

// Update Wisdom Profile
function updateWisdomProfile(path, value) {
    if (wisdomProfile.hasOwnProperty(path)) {
        wisdomProfile[path] += value;
        
        // Increase overall wisdom
        increaseWisdom(value / 2);
        
        // Show feedback
        showFeedback(`${path.charAt(0).toUpperCase() + path.slice(1)} path strengthened!`);
    }
}

// Show Feedback Message
function showFeedback(message) {
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.position = 'fixed';
    feedback.style.bottom = '30px';
    feedback.style.left = '50%';
    feedback.style.transform = 'translateX(-50%)';
    feedback.style.background = 'rgba(0,0,0,0.8)';
    feedback.style.color = 'var(--divine-gold)';
    feedback.style.padding = '15px 30px';
    feedback.style.borderRadius = '10px';
    feedback.style.zIndex = '1000';
    feedback.style.transition = 'all 0.5s ease';
    
    // Add to body
    document.body.appendChild(feedback);
    
    // Remove after delay
    setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => {
            feedback.remove();
        }, 500);
    }, 3000);
}

// Activate Practice
function activatePractice(practiceType) {
    // Show practice modal
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.9)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';
    modal.style.flexDirection = 'column';
    
    // Create content based on practice type
    let content = '';
    let duration = 0;
    
    switch(practiceType) {
        case 'meditation':
            content = `
                <h2 style="color: var(--divine-gold); margin-bottom: 30px;">Sacred Breath Meditation</h2>
                <p style="color: var(--star-white); margin-bottom: 20px; max-width: 600px; text-align: center;">
                    Center yourself and focus on your breath. With each inhale, visualize divine light entering your being.
                    With each exhale, release all that no longer serves you.
                </p>
                <div style="width: 100px; height: 100px; border-radius: 50%; background: var(--divine-gold); margin: 30px auto; animation: breathe 8s infinite ease-in-out;"></div>
                <p style="color: var(--mystic-silver); margin-top: 30px;" id="meditationTimer">Duration: 2:00</p>
            `;
            duration = 120; // 2 minutes
            break;
            
        default:
            content = `
                <h2 style="color: var(--divine-gold); margin-bottom: 30px;">Sacred Practice</h2>
                <p style="color: var(--star-white); margin-bottom: 20px; max-width: 600px; text-align: center;">
                    Enter a state of reverence and presence as you engage with this practice.
                </p>
            `;
            duration = 60; // 1 minute
    }
    
    // Add close button
    content += `
        <button class="sacred-button" style="margin-top: 40px;" onclick="this.parentNode.parentNode.remove();">Complete Practice</button>
    `;
    
    // Set content
    modal.innerHTML = content;
    
    // Add to body
    document.body.appendChild(modal);
    
    // Add breathe animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes breathe {
            0%, 100% { transform: scale(0.8); opacity: 0.7; }
            50% { transform: scale(1.2); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Start timer if needed
    if (duration > 0 && document.getElementById('meditationTimer')) {
        let timeLeft = duration;
        const timerElement = document.getElementById('meditationTimer');
        
        const timer = setInterval(() => {
            timeLeft--;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                timerElement.textContent = 'Practice Complete';
                
                // Increase wisdom
                increaseWisdom(10);
            } else {
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                timerElement.textContent = `Duration: ${minutes}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }
}

// Consult Oracle
function consultOracle() {
    const oracleInput = document.getElementById('oracleInput');
    if (!oracleInput || !oracleInput.value.trim()) {
        showFeedback('Please enter a question first.');
        return;
    }
    
    const question = oracleInput.value.trim();
    
    // Clear input
    oracleInput.value = '';
    
    // Generate response based on question
    let response = '';
    
    // Simple keyword-based responses
    if (question.toLowerCase().includes('purpose') || question.toLowerCase().includes('meaning')) {
        response = "Your purpose is not something to be discovered, but rather uncovered through presence and alignment with your deepest values. Look to where your joy meets the world's needs.";
    } else if (question.toLowerCase().includes('love') || question.toLowerCase().includes('relationship')) {
        response = "The quality of your relationships reflects the relationship you have with yourself. Cultivate self-compassion first, and your capacity to love others will naturally expand.";
    } else if (question.toLowerCase().includes('fear') || question.toLowerCase().includes('anxiety')) {
        response = "Fear arises when you project yourself into an imagined future. Return to the present moment, where fear cannot exist. Breathe deeply and feel your feet on the ground.";
    } else if (question.toLowerCase().includes('meditation') || question.toLowerCase().includes('practice')) {
        response = "The most powerful practice is the one you actually do consistently. Start small, but with unwavering commitment. Five minutes of daily presence is worth more than occasional hours.";
    } else if (question.toLowerCase().includes('truth') || question.toLowerCase().includes('reality')) {
        response = "Truth is not merely intellectual, but experiential. To know the truth, you must become it. Look beyond concepts to the direct experience that precedes all words and thoughts.";
    } else {
        // Generic wisdom responses
        const wisdomResponses = [
            "The answer you seek is already within you, waiting to be recognized.",
            "Consider that the question itself may contain assumptions worth examining.",
            "Sometimes the wisest response is to embrace the mystery rather than demanding certainty.",
            "What would love do in this situation?",
            "The obstacle is the path. What you're facing is not blocking your journey\u2014it is your journey.",
            "True wisdom lies in knowing that you do not know.",
            "Look to nature for guidance\u2014observe how it navigates change without resistance.",
            "The quality of your attention determines the quality of your experience.",
            "Between stimulus and response lies a space. In that space lies your freedom and power.",
            "What you resist persists. What you embrace transforms."
        ];
        
        response = wisdomResponses[Math.floor(Math.random() * wisdomResponses.length)];
    }
    
    // Show oracle response
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.9)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';
    modal.style.flexDirection = 'column';
    
    modal.innerHTML = `
        <div style="max-width: 600px; text-align: center; padding: 40px;">
            <h2 style="color: var(--divine-gold); margin-bottom: 20px;">The Oracle Responds</h2>
            <p style="color: var(--mystic-silver); font-style: italic; margin-bottom: 30px;">"${question}"</p>
            <div class="sacred-quote" style="margin-bottom: 30px;">
                <div class="quote-text">${response}</div>
            </div>
            <button class="sacred-button" onclick="this.parentNode.parentNode.remove();">Contemplate</button>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(modal);
    
    // Increase wisdom
    increaseWisdom(5);
}

// Generate Wisdom Map
function generateWisdomMap() {
    // Calculate dominant path
    let dominantPath = 'integration';
    let highestValue = 0;
    
    for (const [path, value] of Object.entries(wisdomProfile)) {
        if (value > highestValue) {
            highestValue = value;
            dominantPath = path;
        }
    }
    
    // Default values if no interaction yet
    if (highestValue === 0) {
        wisdomProfile.knowledge = 5;
        wisdomProfile.devotion = 3;
        wisdomProfile.meditation = 4;
        wisdomProfile.service = 2;
        wisdomProfile.ritual = 3;
        wisdomProfile.relationship = 4;
        wisdomProfile.integration = 3;
        dominantPath = 'knowledge';
    }
    
    // Create map visualization
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.9)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';
    
    modal.innerHTML = `
        <div style="max-width: 800px; text-align: center; padding: 40px;">
            <h2 style="color: var(--divine-gold); margin-bottom: 20px;">Your Wisdom Map</h2>
            <p style="color: var(--mystic-silver); margin-bottom: 30px;">Your dominant path is: <strong style="color: var(--divine-gold);">${dominantPath.charAt(0).toUpperCase() + dominantPath.slice(1)}</strong></p>
            
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 30px 0;">
                <div style="text-align: center;">
                    <div style="width: 100px; height: ${Math.max(20, wisdomProfile.devotion * 10)}px; background: var(--divine-gold); margin: 0 auto;"></div>
                    <p style="color: var(--mystic-silver); margin-top: 10px;">Devotion</p>
                </div>
                <div style="text-align: center;">
                    <div style="width: 100px; height: ${Math.max(20, wisdomProfile.knowledge * 10)}px; background: var(--sacred-purple); margin: 0 auto;"></div>
                    <p style="color: var(--mystic-silver); margin-top: 10px;">Knowledge</p>
                </div>
                <div style="text-align: center;">
                    <div style="width: 100px; height: ${Math.max(20, wisdomProfile.meditation * 10)}px; background: var(--celestial-blue); margin: 0 auto;"></div>
                    <p style="color: var(--mystic-silver); margin-top: 10px;">Meditation</p>
                </div>
                <div style="text-align: center;">
                    <div style="width: 100px; height: ${Math.max(20, wisdomProfile.service * 10)}px; background: var(--emerald-wisdom); margin: 0 auto;"></div>
                    <p style="color: var(--mystic-silver); margin-top: 10px;">Service</p>
                </div>
                <div style="text-align: center;">
                    <div style="width: 100px; height: ${Math.max(20, wisdomProfile.ritual * 10)}px; background: var(--crimson-passion); margin: 0 auto;"></div>
                    <p style="color: var(--mystic-silver); margin-top: 10px;">Ritual</p>
                </div>
                <div style="text-align: center;">
                    <div style="width: 100px; height: ${Math.max(20, wisdomProfile.relationship * 10)}px; background: var(--divine-gold); margin: 0 auto;"></div>
                    <p style="color: var(--mystic-silver); margin-top: 10px;">Relationship</p>
                </div>
                <div style="text-align: center;">
                    <div style="width: 100px; height: ${Math.max(20, wisdomProfile.integration * 10)}px; background: var(--sacred-purple); margin: 0 auto;"></div>
                    <p style="color: var(--mystic-silver); margin-top: 10px;">Integration</p>
                </div>
            </div>
            
            <div style="margin: 30px 0;">
                <h3 style="color: var(--divine-gold); margin-bottom: 15px;">Recommended Next Steps</h3>
                <p style="color: var(--star-white); margin-bottom: 15px;">Based on your wisdom profile, consider exploring:</p>
                <ul style="color: var(--mystic-silver); text-align: left; max-width: 500px; margin: 0 auto;">
                    <li>Deepen your ${dominantPath} practice through daily commitment</li>
                    <li>Balance your development by exploring the ${getLowestPath()} path</li>
                    <li>Connect with others who share your interest in the ${dominantPath} path</li>
                    <li>Study the teachings of masters who excel in your dominant path</li>
                </ul>
            </div>
            
            <button class="sacred-button" onclick="this.parentNode.parentNode.remove();">Continue Journey</button>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(modal);
    
    // Increase wisdom
    increaseWisdom(5);
}

// Get lowest wisdom path
function getLowestPath() {
    let lowestPath = 'integration';
    let lowestValue = Infinity;
    
    for (const [path, value] of Object.entries(wisdomProfile)) {
        if (value < lowestValue) {
            lowestValue = value;
            lowestPath = path;
        }
    }
    
    return lowestPath;
}

// Initiate Wisdom Journey
function initiateWisdomJourney() {
    // Show journey initiation modal
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.9)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';
    
    modal.innerHTML = `
        <div style="max-width: 800px; text-align: center; padding: 40px;">
            <h2 style="color: var(--divine-gold); margin-bottom: 20px;">The Inner Sanctuary</h2>
            <p style="color: var(--star-white); margin-bottom: 30px;">You stand at the threshold of deeper wisdom. The journey ahead requires commitment, courage, and curiosity.</p>
            
            <div class="sacred-quote" style="margin: 30px 0;">
                <div class="quote-text">"The cave you fear to enter holds the treasure that you seek."</div>
                <div class="quote-author">\u2014 Joseph Campbell</div>
            </div>
            
            <p style="color: var(--mystic-silver); margin-bottom: 30px;">Are you prepared to embark on this sacred journey?</p>
            
            <div style="display: flex; justify-content: center; gap: 20px;">
                <button class="sacred-button" onclick="beginInnerJourney()">I Am Ready</button>
                <button class="sacred-button" style="background: rgba(0,0,0,0.5);" onclick="this.parentNode.parentNode.parentNode.remove();">Not Yet</button>
            </div>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(modal);
}

// Begin Inner Journey
function beginInnerJourney() {
    // Remove current modal
    const currentModal = document.querySelector('div[style*="position: fixed"]');
    if (currentModal) {
        currentModal.remove();
    }
    
    // Show journey experience
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.95)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';
    
    modal.innerHTML = `
        <div style="max-width: 800px; text-align: center; padding: 40px;">
            <div style="width: 150px; height: 150px; border-radius: 50%; background: radial-gradient(circle, var(--divine-gold), transparent); margin: 0 auto 40px; animation: pulse 3s infinite ease-in-out;"></div>
            
            <h2 style="color: var(--divine-gold); margin-bottom: 20px;">The Journey Begins</h2>
            <p style="color: var(--star-white); margin-bottom: 30px; line-height: 1.8;">
                Close your eyes and take three deep breaths. With each inhale, feel yourself drawing in divine light.
                With each exhale, release all tension and resistance.
            </p>
            
            <p style="color: var(--star-white); margin-bottom: 30px; line-height: 1.8;" id="journeyText">
                You stand before an ancient doorway carved with sacred symbols...
            </p>
            
            <button class="sacred-button" id="continueJourney">Continue</button>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(modal);
    
    // Add pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Set up journey progression
    const journeySteps = [
        "You stand before an ancient doorway carved with sacred symbols...",
        "As you step through the doorway, you enter a vast circular chamber illuminated by soft golden light...",
        "In the center of the chamber stands a crystalline pedestal with an open book...",
        "As you approach, the pages begin to glow with symbols that speak directly to your consciousness...",
        "The symbols transform into a message meant specifically for you at this moment in your journey...",
        "You realize that this inner sanctuary has always existed within you, waiting to be discovered...",
        "With this awareness, you feel a profound shift in your perception of yourself and reality...",
        "You understand that you can return to this sacred space whenever you wish to access deeper wisdom...",
        "Carrying this knowing with you, you prepare to return to ordinary awareness, forever changed..."
    ];
    
    let currentStep = 0;
    const journeyText = document.getElementById('journeyText');
    const continueButton = document.getElementById('continueJourney');
    
    if (!journeyText || !continueButton) return; // Safety check
    
    continueButton.addEventListener('click', () => {
        currentStep++;
        
        if (currentStep < journeySteps.length) {
            journeyText.textContent = journeySteps[currentStep];
        } else {
            // Journey complete
            modal.remove();
            
            // Show completion message
            showFeedback("Inner journey complete. Wisdom increased significantly.");
            
            // Increase wisdom substantially
            increaseWisdom(20);
        }
    });
}

// === BOOK PREVIEW FUNCTIONALITY ===

// Preview modal functionality
let previewModal, previewTitle, previewText, previewClose;

function initBookPreview() {
    previewModal = document.getElementById('previewModal');
    previewTitle = document.getElementById('previewTitle');
    previewText = document.getElementById('previewText');
    previewClose = document.getElementById('previewClose');
    
    if (!previewModal || !previewTitle || !previewText || !previewClose) return;
    
    // Close modal when clicking the X button
    previewClose.addEventListener('click', closePreview);
    
    // Close modal when clicking outside the content
    previewModal.addEventListener('click', (e) => {
        if (e.target === previewModal) {
            closePreview();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && previewModal.classList.contains('active')) {
            closePreview();
        }
    });
    
    // Add event listeners to all preview buttons
    const previewButtons = document.querySelectorAll('.preview-button');
    previewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filePath = button.getAttribute('data-file');
            const fileName = button.getAttribute('data-title');
            showPreview(filePath, fileName);
        });
    });
}

function showPreview(filePath, fileName) {
    if (!previewModal || !previewTitle || !previewText) return;
    
    // Set the title
    previewTitle.textContent = `Preview: ${fileName}`;
    
    // Show loading state
    previewText.innerHTML = '<div class="preview-loading">Loading preview...</div>';
    
    // Show the modal
    previewModal.classList.add('active');
    
    // Load the file content
    loadFilePreview(filePath);
}

function closePreview() {
    if (!previewModal) return;
    previewModal.classList.remove('active');
}

function loadFilePreview(filePath) {
    // Check if it's a PDF file
    if (filePath && filePath.toLowerCase().endsWith('.pdf')) {
        previewText.innerHTML = `
            <div class="preview-pdf-notice">
                <div class="pdf-icon">📄</div>
                <h3>PDF Document</h3>
                <p>This is a PDF file that contains rich formatting, images, and complex layouts.</p>
                <p>To experience the full content with proper formatting, please download the file.</p>
                <div class="pdf-benefits">
                    <strong>PDF Benefits:</strong>
                    <ul>
                        <li>Preserves original formatting</li>
                        <li>Includes images and graphics</li>
                        <li>Professional layout</li>
                        <li>Universal compatibility</li>
                    </ul>
                </div>
            </div>
        `;
        return;
    }

    // For text files, try to load the content
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.text();
        })
        .then(content => {
            // Show only the first 2000 characters as preview
            const previewContent = content.length > 2000
                ? content.substring(0, 2000) + '\n\n[... Preview truncated. Download to read the complete text ...]'
                : content;

            previewText.innerHTML = `<pre>${previewContent}</pre>`;
        })
        .catch(error => {
            console.error('Error loading preview:', error);
            previewText.innerHTML = '<div class="preview-error">Unable to load preview. The file may not be available or there was a loading error.</div>';
        });
}// Initialize preview functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // ... existing initialization code ...
    initBookPreview();
    initLibraryEnhancements();
    initEnhancedLibraryFeatures();
    initWisdomPortal();
});

// === ENHANCED LIBRARY FUNCTIONALITY ===

// Library Enhancement Features
function initLibraryEnhancements() {
    initLibrarySearch();
    initLibraryFilters();
    initLibraryStats();
    initRecentlyViewed();
    initFavoriteSystem();
    initShareSystem();
}

// Enhanced Search Functionality with Highlighting
function initLibrarySearch() {
    const searchInput = document.getElementById('librarySearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const libraryCards = document.querySelectorAll('.library-card');

        libraryCards.forEach(card => {
            const titleElement = card.querySelector('.library-card-title');
            const descriptionElement = card.querySelector('.library-description');
            const originalTitle = titleElement.getAttribute('data-original') || titleElement.textContent;
            const originalDescription = descriptionElement.getAttribute('data-original') || descriptionElement.textContent;

            // Store original text if not already stored
            if (!titleElement.getAttribute('data-original')) {
                titleElement.setAttribute('data-original', originalTitle);
                descriptionElement.setAttribute('data-original', originalDescription);
            }

            const title = originalTitle.toLowerCase();
            const description = originalDescription.toLowerCase();
            const category = card.dataset.category || '';

            const matches = title.includes(searchTerm) ||
                           description.includes(searchTerm) ||
                           category.includes(searchTerm);

            if (searchTerm && matches) {
                card.style.display = 'flex';
                card.classList.add('fade-in');

                // Add highlights
                titleElement.innerHTML = highlightSearchTerm(originalTitle, searchTerm);
                descriptionElement.innerHTML = highlightSearchTerm(originalDescription, searchTerm);
            } else if (searchTerm) {
                card.style.display = 'none';
            } else {
                // Show all and remove highlights when search is empty
                card.style.display = 'flex';
                titleElement.innerHTML = originalTitle;
                descriptionElement.innerHTML = originalDescription;
            }
        });

        updateLibraryStats();
    });
}

// Highlight search terms
function highlightSearchTerm(text, term) {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark style="background: #ffd700; color: #000000; padding: 2px 4px; border-radius: 3px;">$1</mark>');
}

// Filter Functionality
function initLibraryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.dataset.filter;
            const libraryCards = document.querySelectorAll('.library-card');

            libraryCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const category = card.dataset.category || '';
                    card.style.display = category === filter ? 'block' : 'none';
                }
            });

            updateLibraryStats();
        });
    });
}

// Library Statistics
function initLibraryStats() {
    updateLibraryStats();
}

function updateLibraryStats() {
    const visibleCards = document.querySelectorAll('.library-card:not([style*="display: none"])');
    const totalBooksElement = document.getElementById('totalBooks');
    const sacredTextsElement = document.getElementById('sacredTexts');

    if (totalBooksElement) {
        totalBooksElement.textContent = visibleCards.length;
    }

    if (sacredTextsElement) {
        const sacredCount = Array.from(visibleCards).filter(card =>
            card.dataset.category === 'sacred'
        ).length;
        sacredTextsElement.textContent = sacredCount;
    }
}

// Recently Viewed System
function initRecentlyViewed() {
    // Load recently viewed from localStorage
    loadRecentlyViewed();

    // Add event listeners to preview buttons to track views
    const previewButtons = document.querySelectorAll('.preview-button');
    previewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const title = this.dataset.title;
            const file = this.dataset.file;
            addToRecentlyViewed(title, file);
        });
    });
}

function addToRecentlyViewed(title, file) {
    let recentlyViewed = JSON.parse(localStorage.getItem('sacredLibrary_recentlyViewed') || '[]');

    // Remove if already exists
    recentlyViewed = recentlyViewed.filter(item => item.title !== title);

    // Add to beginning
    recentlyViewed.unshift({
        title: title,
        file: file,
        timestamp: Date.now()
    });

    // Keep only last 5
    recentlyViewed = recentlyViewed.slice(0, 5);

    // Save to localStorage
    localStorage.setItem('sacredLibrary_recentlyViewed', JSON.stringify(recentlyViewed));

    // Update display
    loadRecentlyViewed();
}

function loadRecentlyViewed() {
    const recentlyViewed = JSON.parse(localStorage.getItem('sacredLibrary_recentlyViewed') || '[]');
    const recentContainer = document.getElementById('recentlyViewed');

    if (!recentContainer) return;

    if (recentlyViewed.length === 0) {
        recentContainer.innerHTML = `
            <div class="recent-item">
                <div class="recent-title">No recent views</div>
                <div class="recent-desc">Start exploring our collection!</div>
            </div>
        `;
        return;
    }

    recentContainer.innerHTML = recentlyViewed.map(item => `
        <div class="recent-item" onclick="showPreview('${item.file}', '${item.title}')">
            <div class="recent-title">${item.title}</div>
            <div class="recent-desc">Click to preview</div>
        </div>
    `).join('');
}

// Favorite System
function initFavoriteSystem() {
    // Load favorites from localStorage
    loadFavorites();

    // Add event listeners to favorite buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('favorite-btn')) {
            e.stopPropagation();
            const card = e.target.closest('.library-card');
            const title = card.querySelector('.library-card-title').textContent;
            toggleFavorite(title, e.target);
        }
    });
}

function toggleFavorite(title, button) {
    let favorites = JSON.parse(localStorage.getItem('sacredLibrary_favorites') || '[]');
    const isFavorited = favorites.includes(title);

    if (isFavorited) {
        favorites = favorites.filter(fav => fav !== title);
        button.textContent = '⭐';
        button.title = 'Add to Favorites';
        button.style.color = '';
    } else {
        favorites.push(title);
        button.textContent = '⭐';
        button.title = 'Remove from Favorites';
        button.style.color = '#FFD700';
    }

    localStorage.setItem('sacredLibrary_favorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('sacredLibrary_favorites') || '[]');
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    favoriteButtons.forEach(button => {
        const card = button.closest('.library-card');
        const title = card.querySelector('.library-card-title').textContent;
        const isFavorited = favorites.includes(title);

        if (isFavorited) {
            button.textContent = '⭐';
            button.style.color = '#FFD700';
            button.title = 'Remove from Favorites';
        } else {
            button.textContent = '⭐';
            button.style.color = '';
            button.title = 'Add to Favorites';
        }
    });
}

// Share System
function initShareSystem() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('share-btn')) {
            e.stopPropagation();
            const card = e.target.closest('.library-card');
            const title = card.querySelector('.library-card-title').textContent;
            const url = window.location.href;

            shareBook(title, url);
        }
    });
}

function shareBook(title, url) {
    const shareText = `Check out "${title}" from The Sacred Codex Universe Library: ${url}`;

    if (navigator.share) {
        navigator.share({
            title: title,
            text: shareText,
            url: url
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Book link copied to clipboard!');
        }).catch(() => {
            // Final fallback: show share text
            alert('Share this link: ' + shareText);
        });
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--divine-gold, #FFD700);
        color: #000;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-family: 'Crimson Text', serif;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);

    // Add slideOut animation
    style.textContent += `
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
}

// Enhanced Keyboard Shortcuts and Effects
function initEnhancedLibraryFeatures() {
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC to close modal
        if (e.key === 'Escape') {
            const previewModal = document.getElementById('previewModal');
            if (previewModal && previewModal.classList.contains('active')) {
                previewModal.classList.remove('active');
            }
        }

        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('librarySearch');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });

    // Enhanced download effects
    const downloadButtons = document.querySelectorAll('.download-button');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const rect = btn.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Create burst effect
            for (let i = 0; i < 12; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.className = 'divine-particle';
                    particle.style.position = 'fixed';
                    particle.style.left = centerX + 'px';
                    particle.style.top = centerY + 'px';
                    particle.style.width = '3px';
                    particle.style.height = '3px';
                    particle.style.background = '#ffd700';
                    particle.style.zIndex = '9999';
                    particle.style.pointerEvents = 'none';
                    particle.style.borderRadius = '50%';

                    const angle = (i / 12) * Math.PI * 2;
                    const velocity = 100 + Math.random() * 50;
                    const endX = centerX + Math.cos(angle) * velocity;
                    const endY = centerY + Math.sin(angle) * velocity;

                    particle.style.animation = `burstParticle 1s ease-out forwards`;
                    particle.style.setProperty('--endX', endX + 'px');
                    particle.style.setProperty('--endY', endY + 'px');

                    document.body.appendChild(particle);

                    setTimeout(() => {
                        if (particle.parentNode) {
                            particle.parentNode.removeChild(particle);
                        }
                    }, 1000);
                }, i * 50);
            }
        });
    });

    // Add CSS for burst animation if not exists
    if (!document.getElementById('burstAnimationStyle')) {
        const style = document.createElement('style');
        style.id = 'burstAnimationStyle';
        style.textContent = `
            @keyframes burstParticle {
                0% {
                    transform: translate(0, 0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(var(--endX) - 50vw), calc(var(--endY) - 50vh)) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// === WISDOM PORTAL FUNCTIONALITY ===

// Wisdom Portal Interactive Features
function initWisdomPortal() {
    // Initialize wisdom assessment
    initWisdomAssessment();

    // Initialize mandala activation
    initMandalaActivation();

    // Initialize wisdom map generation
    initWisdomMap();

    // Initialize inner sanctuary journey
    initInnerSanctuary();
}

// Wisdom Assessment System
function initWisdomAssessment() {
    const radioButtons = document.querySelectorAll('.option-radio');
    const wisdomLevel = document.querySelector('.wisdom-level');

    if (!radioButtons.length || !wisdomLevel) return;

    let assessmentScore = 0;
    const totalQuestions = 3;

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            // Calculate wisdom score based on selections
            assessmentScore = calculateWisdomScore();
            updateWisdomLevel(assessmentScore, totalQuestions);
        });
    });

    // Initial wisdom level display
    updateWisdomLevel(0, totalQuestions);
}

function calculateWisdomScore() {
    const questions = ['q1', 'q2', 'q3'];
    let score = 0;

    questions.forEach(question => {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            // Get the index of the selected option (0-3, higher = more wisdom)
            const optionIndex = Array.from(selectedOption.closest('.option-list').querySelectorAll('li')).indexOf(selectedOption.closest('li'));
            score += optionIndex + 1; // Add 1-4 points per question
        }
    });

    return score;
}

function updateWisdomLevel(score, maxScore) {
    const wisdomLevel = document.querySelector('.wisdom-level');
    if (!wisdomLevel) return;

    const percentage = Math.round((score / maxScore) * 100) || 0;

    // Determine wisdom level title based on score
    let wisdomTitle = 'Seeker';
    if (percentage >= 80) wisdomTitle = 'Sage';
    else if (percentage >= 60) wisdomTitle = 'Guide';
    else if (percentage >= 40) wisdomTitle = 'Student';
    else if (percentage >= 20) wisdomTitle = 'Initiate';

    wisdomLevel.innerHTML = `
        <div>Wisdom Level: ${percentage}%</div>
        <div>"${wisdomTitle}"</div>
    `;
}

// Mandala Activation
function initMandalaActivation() {
    // The mandala activation is already handled by onclick in HTML
    // This function ensures it's properly initialized
}

function activateMandala(element) {
    // Add activation animation
    element.classList.add('activated');

    // Create activation effect
    const rings = element.querySelectorAll('.mandala-ring');
    rings.forEach((ring, index) => {
        ring.style.animationDuration = `${10 + index * 5}s`;
        ring.style.borderColor = '#FFD700';
    });

    // Show activation message
    showWisdomMessage('Mandala activated! Divine energies aligned.', 'success');

    // Remove activation after animation
    setTimeout(() => {
        element.classList.remove('activated');
        rings.forEach(ring => {
            ring.style.borderColor = '';
        });
    }, 3000);
}

// Wisdom Map Generation
function initWisdomMap() {
    const mapButton = document.querySelector('.sacred-card button');
    if (!mapButton) return;

    mapButton.addEventListener('click', generateWisdomMap);
}

function generateWisdomMap() {
    const wisdomScore = calculateWisdomScore();

    // Create wisdom map based on assessment
    const wisdomPaths = [
        { name: 'Intellectual Wisdom', icon: '🧠', description: 'Understanding profound truths' },
        { name: 'Emotional Wisdom', icon: '❤️', description: 'Deep connection with others' },
        { name: 'Spiritual Wisdom', icon: '🙏', description: 'Divine connection and guidance' },
        { name: 'Practical Wisdom', icon: '🔧', description: 'Applying knowledge effectively' },
        { name: 'Creative Wisdom', icon: '🎨', description: 'Innovation and inspiration' },
        { name: 'Ethical Wisdom', icon: '⚖️', description: 'Moral understanding and justice' },
        { name: 'Intuitive Wisdom', icon: '🔮', description: 'Inner knowing and insight' }
    ];

    // Generate personalized map
    const mapContainer = document.createElement('div');
    mapContainer.className = 'wisdom-map-result';
    mapContainer.innerHTML = `
        <h3>Your Personal Wisdom Map</h3>
        <div class="wisdom-paths">
            ${wisdomPaths.map((path, index) => `
                <div class="wisdom-path ${index < wisdomScore ? 'active' : ''}">
                    <div class="path-icon">${path.icon}</div>
                    <div class="path-content">
                        <h4>${path.name}</h4>
                        <p>${path.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        <p class="map-insight">Your wisdom journey shows ${wisdomScore} activated paths. Continue exploring to unlock your full potential.</p>
    `;

    // Replace button with map
    const card = document.querySelector('.sacred-card');
    const button = card.querySelector('button');
    button.style.display = 'none';
    card.appendChild(mapContainer);

    showWisdomMessage('Your personal wisdom map has been generated!', 'success');
}

// Inner Sanctuary Journey
function initInnerSanctuary() {
    const journeyButton = document.querySelector('.journey-button');
    if (!journeyButton) return;

    journeyButton.addEventListener('click', startInnerJourney);
}

function startInnerJourney() {
    // Create journey modal
    const modal = document.createElement('div');
    modal.className = 'journey-modal';
    modal.innerHTML = `
        <div class="journey-content">
            <h2>The Inner Sanctuary</h2>
            <div class="journey-stage" id="journeyStage">
                <p>Welcome to your inner sanctuary. Take a deep breath and center yourself.</p>
                <p>Feel the divine presence surrounding you...</p>
            </div>
            <div class="journey-progress">
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
            </div>
            <button class="journey-continue" id="journeyContinue">Continue Journey</button>
            <button class="journey-close" id="journeyClose">Exit Sanctuary</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Initialize journey
    let journeyStep = 0;
    const journeyStages = [
        "Welcome to your inner sanctuary. Take a deep breath and center yourself. Feel the divine presence surrounding you...",
        "As you breathe deeply, notice the cosmic energies flowing through you. You are connected to the infinite wisdom of the universe...",
        "In this sacred space, allow your mind to quiet. Listen to the subtle whispers of divine guidance...",
        "Feel gratitude for the wisdom that flows to you. You are a vessel of divine understanding...",
        "Carry this sacred energy with you as you return to the world. Your wisdom journey continues...",
        "Journey complete. May divine wisdom illuminate your path always."
    ];

    const journeyStage = modal.querySelector('#journeyStage');
    const progressFill = modal.querySelector('#progressFill');
    const continueButton = modal.querySelector('#journeyContinue');
    const closeButton = modal.querySelector('#journeyClose');

    continueButton.addEventListener('click', () => {
        journeyStep++;
        if (journeyStep < journeyStages.length) {
            journeyStage.innerHTML = `<p>${journeyStages[journeyStep]}</p>`;
            progressFill.style.width = `${(journeyStep / journeyStages.length) * 100}%`;
        } else {
            // Journey complete
            journeyStage.innerHTML = `
                <p>${journeyStages[journeyStep]}</p>
                <div class="journey-completion">
                    <div class="completion-icon">✨</div>
                    <p>Your inner wisdom has been strengthened.</p>
                </div>
            `;
            continueButton.style.display = 'none';
            closeButton.textContent = 'Return to World';
        }
    });

    closeButton.addEventListener('click', () => {
        modal.remove();
        showWisdomMessage('Inner journey complete. Wisdom increased.', 'success');
    });
}

// Wisdom Message System
function showWisdomMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.wisdom-message');
    existingMessages.forEach(msg => msg.remove());

    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `wisdom-message ${type}`;
    messageDiv.textContent = message;

    // Style based on type
    const colors = {
        success: '#50C878',
        error: '#DC143C',
        info: '#4169E1',
        warning: '#FFD700'
    };

    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0,0,0,0.9);
        color: ${colors[type]};
        border: 2px solid ${colors[type]};
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        font-family: 'Cinzel', serif;
        animation: messageSlideIn 0.5s ease-out;
    `;

    document.body.appendChild(messageDiv);

    // Remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'messageSlideOut 0.5s ease-in';
        setTimeout(() => messageDiv.remove(), 500);
    }, 5000);
}

// Subscribe Form Functionality
function initSubscribeForm() {
    const subscribeButton = document.querySelector('.subscribe-button');
    const emailInput = document.querySelector('.subscribe-input');
    
    if (!subscribeButton || !emailInput) return;
    
    // Inject styles
    const style = document.createElement('style');
    style.textContent = subscribeFormStyles;
    document.head.appendChild(style);
    
    subscribeButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            showWisdomMessage('Please enter your email address.', 'warning');
            return;
        }
        
        if (!emailRegex.test(email)) {
            showWisdomMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Store in localStorage (since no backend)
        let subscribers = JSON.parse(localStorage.getItem('sacredCodex_subscribers') || '[]');
        if (subscribers.includes(email)) {
            showWisdomMessage('You are already subscribed to Divine Updates!', 'info');
            return;
        }
        
        subscribers.push(email);
        localStorage.setItem('sacredCodex_subscribers', JSON.stringify(subscribers));
        
        // Clear input and show success
        emailInput.value = '';
        showWisdomMessage('Welcome to the Sacred Codex! You will receive divine wisdom teachings and sacred insights.', 'success');
        
        // Optional: Increase wisdom for subscribing
        increaseWisdom(10);
    });
}

// Add message animations to CSS (will be added to the HTML file)
const messageAnimations = `
    @keyframes messageSlideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    @keyframes messageSlideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;

// Add journey modal styles
const journeyModalStyles = `
    .journey-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
    }

    .journey-content {
        background: var(--shadow-deep);
        border: 3px solid var(--divine-gold);
        border-radius: 20px;
        padding: 40px;
        max-width: 600px;
        text-align: center;
        box-shadow: 0 0 50px rgba(255, 215, 0, 0.3);
    }

    .journey-content h2 {
        color: var(--divine-gold);
        font-family: 'Cinzel', serif;
        margin-bottom: 30px;
    }

    .journey-stage p {
        font-size: 1.2rem;
        line-height: 1.6;
        color: var(--star-white);
        margin-bottom: 20px;
    }

    .journey-progress {
        margin: 30px 0;
    }

    .progress-bar {
        width: 100%;
        height: 10px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--divine-gold), var(--sacred-purple));
        width: 0%;
        transition: width 1s ease;
    }

    .journey-continue, .journey-close {
        background: linear-gradient(45deg, var(--divine-gold), var(--sacred-purple));
        border: none;
        border-radius: 10px;
        padding: 12px 24px;
        color: var(--shadow-deep);
        font-family: 'Cinzel', serif;
        font-weight: 600;
        cursor: pointer;
        margin: 10px;
        transition: all 0.3s ease;
    }

    .journey-continue:hover, .journey-close:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
    }

    .completion-icon {
        font-size: 3rem;
        margin: 20px 0;
    }
`;

// Add wisdom map styles
const wisdomMapStyles = `
    .wisdom-map-result {
        margin-top: 20px;
        padding: 20px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        border: 2px solid var(--emerald-wisdom);
    }

    .wisdom-map-result h3 {
        color: var(--emerald-wisdom);
        font-family: 'Cinzel', serif;
        text-align: center;
        margin-bottom: 20px;
    }

    .wisdom-paths {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
        margin-bottom: 20px;
    }

    .wisdom-path {
        background: rgba(0, 0, 0, 0.5);
        border: 2px solid rgba(80, 200, 120, 0.3);
        border-radius: 10px;
        padding: 15px;
        opacity: 0.6;
        transition: all 0.3s ease;
    }

    .wisdom-path.active {
        opacity: 1;
        border-color: var(--emerald-wisdom);
        box-shadow: 0 0 20px rgba(80, 200, 120, 0.3);
    }

    .path-icon {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 10px;
    }

    .path-content h4 {
        color: var(--emerald-wisdom);
        font-family: 'Cinzel', serif;
        margin-bottom: 8px;
    }

    .path-content p {
        color: var(--mystic-silver);
        font-size: 0.9rem;
        line-height: 1.4;
    }

    .map-insight {
        text-align: center;
        color: var(--divine-gold);
        font-style: italic;
        font-size: 1.1rem;
    }
`;

// Subscribe Form Styles
const subscribeFormStyles = `
    .subscribe-section {
        background: linear-gradient(135deg, rgba(26, 0, 51, 0.9), rgba(0, 0, 0, 0.8));
        border: 2px solid var(--divine-gold);
        border-radius: 20px;
        padding: 30px;
        margin: 40px 0;
        text-align: center;
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.2);
    }

    .subscribe-title {
        color: var(--divine-gold);
        font-family: 'Cinzel', serif;
        font-size: 2rem;
        margin-bottom: 10px;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    }

    .subscribe-description {
        color: var(--sacred-purple);
        font-size: 1.1rem;
        margin-bottom: 25px;
        line-height: 1.4;
    }

    .subscribe-form {
        display: flex;
        gap: 15px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .subscribe-input {
        padding: 12px 20px;
        border: 2px solid var(--divine-gold);
        border-radius: 25px;
        background: rgba(0, 0, 0, 0.7);
        color: var(--divine-gold);
        font-size: 1rem;
        min-width: 250px;
        transition: all 0.3s ease;
    }

    .subscribe-input:focus {
        outline: none;
        border-color: var(--emerald-wisdom);
        box-shadow: 0 0 15px rgba(80, 200, 120, 0.3);
    }

    .subscribe-input::placeholder {
        color: rgba(255, 215, 0, 0.6);
    }

    .subscribe-button {
        padding: 12px 30px;
        background: linear-gradient(45deg, var(--divine-gold), var(--emerald-wisdom));
        border: none;
        border-radius: 25px;
        color: var(--shadow-deep);
        font-family: 'Cinzel', serif;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
    }

    .subscribe-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        background: linear-gradient(45deg, var(--emerald-wisdom), var(--divine-gold));
    }

    .subscribe-button:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        .subscribe-form {
            flex-direction: column;
        }
        
        .subscribe-input {
            min-width: 200px;
        }
    }
`;
