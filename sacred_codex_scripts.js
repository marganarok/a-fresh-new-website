
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
});
