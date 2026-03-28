/* -----------------------------------------
   🚀 DEPLOYMENT CONFIGURATION
----------------------------------------- 
   When running locally, leave as: 'http://127.0.0.1:3000'
   When deploying the frontend to Vercel/Netlify, change this to your live Render/VPS backend URL.
*/
const API_BASE_URL = '';

/* -----------------------------------------
   1. PREMIUM WEBGL NEURAL CORE
----------------------------------------- */
const initSpace = () => {
    const container = document.getElementById('canvas-container');
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020202, 0.04);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const coreGeo = new THREE.IcosahedronGeometry(2.5, 1);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true, transparent: true, opacity: 0.1 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    const pCount = 2000;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for(let i = 0; i < pCount * 3; i++) { pPos[i] = (Math.random() - 0.5) * 35; }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    
    const pMat = new THREE.PointsMaterial({ size: 0.04, color: 0x9d00ff, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending });
    const pMesh = new THREE.Points(pGeo, pMat);
    scene.add(pMesh);

    let targetX = 0, targetY = 0;
    document.addEventListener('mousemove', (e) => {
        targetX = (e.clientX - window.innerWidth / 2) * 0.002;
        targetY = (e.clientY - window.innerHeight / 2) * 0.002;
    });

    const animate = () => {
        requestAnimationFrame(animate);
        coreMesh.rotation.y += 0.002;
        coreMesh.rotation.x += 0.001;
        pMesh.rotation.y += 0.0008;

        camera.position.x += (targetX * 2 - camera.position.x) * 0.05;
        camera.position.y += (-targetY * 2 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

/* -----------------------------------------
   2. GSAP SCROLL PHYSICS
----------------------------------------- */
const initMotion = () => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.fromTo(".status-pill", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 })
      .fromTo(".hero-wrapper h1", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }, "-=0.6")
      .fromTo(".hero-wrapper p", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
      .fromTo(".cta-group", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6");

    gsap.utils.toArray('.category-block').forEach(block => {
        gsap.from(block.querySelectorAll('.cat-header, .s-card'), {
            scrollTrigger: { trigger: block, start: "top 85%" },
            y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.1)"
        });
    });

    gsap.from(".t-step", {
        scrollTrigger: { trigger: ".process-section", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power2.out"
    });

    gsap.utils.toArray('.count').forEach(el => {
        gsap.to(el, {
            scrollTrigger: { trigger: ".results-section", start: "top 85%" },
            innerHTML: el.getAttribute('data-val'), duration: 2.5, ease: "power2.out", snap: { innerHTML: 1 }
        });
    });
};

/* -----------------------------------------
   3. AI SYSTEM CHATBOT LOGIC (6-STEP FLOW)
   Ask Need -> Suggest -> Name -> Email -> Company -> Requirement -> Capture
----------------------------------------- */
const sideChat = document.getElementById('side-chat');
const chatMsgs = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const floatBtn = document.getElementById('floating-chat-btn');

let cState = 0; 
let lead = { needRaw: '', service: '', name: '', email: '', company: '', requirement: '' };

const openChat = (context = 'organic') => {
    sideChat.classList.add('active');
    floatBtn.classList.add('hidden');
    
    if (chatMsgs.children.length === 0) {
        cState = 1;
        emitAI("Hi, I'm Manvion AI. How can I help you scale your business today? (e.g. Sales, Hiring, Automation)");
    }
};

const closeChat = () => {
    sideChat.classList.remove('active');
    floatBtn.classList.remove('hidden');
};

const emitAI = (text) => {
    const msg = document.createElement('div');
    msg.classList.add('msg', 'ai');
    msg.innerHTML = `<div class="typing-dots"><span></span><span></span><span></span></div>`;
    chatMsgs.appendChild(msg);
    scrollChat();
    
    setTimeout(() => {
        msg.innerHTML = text;
        scrollChat();
    }, 1000 + Math.random() * 500);
};

const emitUser = (text) => {
    const msg = document.createElement('div');
    msg.classList.add('msg', 'user');
    msg.textContent = text;
    chatMsgs.appendChild(msg);
    scrollChat();
};

const scrollChat = () => setTimeout(() => chatMsgs.scrollTop = chatMsgs.scrollHeight, 10);

const handleEnter = (e) => { if(e.key === 'Enter') sendMessage(); };

const sendMessage = () => {
    const text = chatInput.value.trim();
    if(!text) return;
    
    chatInput.disabled = true;
    emitUser(text);
    chatInput.value = '';
    
    setTimeout(() => { logicEngine(text); chatInput.disabled = false; chatInput.focus(); }, 400);
};

// State Machine matching exact User Brief Flow
const logicEngine = (input) => {
    switch(cState) {
        case 1: // 1. Ask what user wants
            lead.needRaw = input;
            const lw = input.toLowerCase();
            if(lw.includes('hire') || lw.includes('recruit')) lead.service = "AI Recruitment Solutions";
            else if(lw.includes('sale') || lw.includes('lead')) lead.service = "AI Sales Automation";
            else if(lw.includes('support')) lead.service = "AI Chatbots & Agents";
            else lead.service = "Custom AI Workflow Optimization";
            
            cState = 2;
            emitAI(`Analyzing... Based on your goal, I recommend our **${lead.service}**. To build your custom profile, what is your full name?`); // 2. Suggest best service & 3a. Ask name
            break;
            
        case 2: // 3b. Ask Email
            lead.name = input;
            cState = 3;
            emitAI(`Great to meet you, ${lead.name}. What is the best email to send your AI implementation strategy to?`);
            break;
            
        case 3: // 3c. Ask Company
            if(input.includes('@') && input.includes('.')) {
                lead.email = input;
                cState = 4;
                emitAI(`Got it. What is the name of your company?`);
            } else {
                emitAI("Please provide a valid email address so I can route your strategy document.");
            }
            break;
            
        case 4: // 3d. Ask Requirement
            lead.company = input;
            cState = 5;
            emitAI(`Awesome. Final question: What is your primary requirement or biggest operational bottleneck right now?`);
            break;
            
        case 5: // 4. Capture Lead
            lead.requirement = input;
            captureLead(lead, "Chatbot Core");
            cState = 6;
            emitAI(`Thank you! Data synthesized. Our human AI team will contact you within 24 hours to initiate deployment.`);
            break;
            
        case 6:
            emitAI(`I have logged this session to your CRM file. Feel free to explore the architecture behind this window.`);
            break;
    }
};

/* -----------------------------------------
   4. LEAD DELIVERY SYSTEM API
----------------------------------------- */
const captureLead = async (data, method) => {
    console.log(`[LEAD ACQUIRED: ${method}]`, data);

    try {
        await fetch(`${API_BASE_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: data.name || '',
                email: data.email || '',
                company: data.company || '',
                service: data.service || '',
                message: data.requirement || data.message || ''
            })
        });
    } catch (err) {
        console.error(`[LEAD CAPTURE FAILED: ${method}]`, err);
    }
};

/* -----------------------------------------
   5. EXIT INTENT SYSTEM
----------------------------------------- */
let exitFired = false;
document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 10 && !exitFired) {
        document.getElementById('exit-modal').classList.add('active');
        exitFired = true;
    }
});

const closeExitModal = () => document.getElementById('exit-modal').classList.remove('active');

const handleExitForm = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = "Processing...";
    
    const data = {
        name: document.getElementById('exit-name').value,
        email: document.getElementById('exit-email').value,
        phone: document.getElementById('exit-phone').value,
        company: document.getElementById('exit-company').value,
        requirement: document.getElementById('exit-needs').value
    };

    captureLead({ service: "Exit Strategy Map", ...data }, 'Exit Modal');
    
    setTimeout(() => {
        btn.textContent = "Roadmap Dispatched";
        document.querySelector('#exit-modal .modal-card').innerHTML = `
        <h3 class="gradient-text">Roadmap Initialized</h3>
        <p>Our autonomous systems are configuring your strategy right now. Check your inbox within 2 hours.</p>
        <button class="btn-mega glow-fx mt" onclick="closeExitModal()">Acknowledge</button>
    `;
        setTimeout(closeExitModal, 1500);
    }, 1000);
};

/* -----------------------------------------
   6. CONTACT FORM BACKEND LINK (NODE/SQLITE)
----------------------------------------- */
const handleContactSubmit = async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const statusDiv = document.getElementById('form-status');
    
    btn.textContent = "Transmitting to Server...";
    btn.disabled = true;

    const leadData = {
        name: document.getElementById('c-name').value,
        email: document.getElementById('c-email').value,
        company: document.getElementById('c-company').value,
        service: document.getElementById('c-service').value,
        message: document.getElementById('c-message').value
    };

    try {
        const response = await fetch(`${API_BASE_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(leadData)
        });
        
        const data = await response.json();
        
        if (response.ok) {
            statusDiv.innerHTML = "✅ SUCCESS: Lead transmitted instantly to Manvion personnel.";
            statusDiv.style.color = "#00ff66";
            e.target.reset();
        } else {
            throw new Error(data.error || "Server rejection.");
        }
    } catch (err) {
        statusDiv.innerHTML = "⚠️ ERROR: Backend unreachable. Ensure the Node server is running on port 3000.";
        statusDiv.style.color = "#ff0055";
        console.error(err);
    } finally {
        btn.textContent = "Initiate Deployment";
        btn.disabled = false;
    }
};

/* -----------------------------------------
   7. CAREERS APPLICATION INTEGRATION
----------------------------------------- */
let currentApplyRole = "";

const openApplyModal = (role) => {
    currentApplyRole = role;
    document.getElementById('apply-role-name').textContent = "Applying for: " + role;
    document.getElementById('apply-modal').classList.add('active');
};

const closeApplyModal = () => {
    document.getElementById('apply-modal').classList.remove('active');
    document.getElementById('apply-status').innerHTML = "";
    document.getElementById('apply-form').reset();
};

const handleApplySubmit = async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const statusDiv = document.getElementById('apply-status');
    
    btn.textContent = "Uploading Resume...";
    btn.disabled = true;

    const formData = new FormData();
    formData.append('name', document.getElementById('a-name').value);
    formData.append('email', document.getElementById('a-email').value);
    formData.append('role', currentApplyRole);
    formData.append('resume', document.getElementById('a-resume').files[0]);

    try {
        const response = await fetch(`${API_BASE_URL}/api/apply`, {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (response.ok) {
            statusDiv.innerHTML = "✅ SUCCESS: Application & Resume Transmitted!";
            statusDiv.style.color = "#00ff66";
            e.target.reset();
            setTimeout(closeApplyModal, 2500);
        } else {
            throw new Error(data.error || "Server rejection.");
        }
    } catch (err) {
        statusDiv.innerHTML = "⚠️ ERROR: Backend unreachable. Is Node server running?";
        statusDiv.style.color = "#ff0055";
        console.error(err);
    } finally {
        btn.textContent = "Upload & Send Resume";
        btn.disabled = false;
    }
};

/* -----------------------------------------
   APP STARTUP
----------------------------------------- */
window.onload = () => {
    initSpace();
    initMotion();
    
    // Proactive engagement trigger
    setTimeout(() => {
        if (cState === 0 && !sideChat.classList.contains('active')) {
            gsap.to("#floating-chat-btn", { scale: 1.05, boxShadow: "0 0 40px #00e5ff", yoyo: true, repeat: 3, duration: 0.4 });
        }
    }, 7000);
};
