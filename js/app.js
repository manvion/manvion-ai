/* -----------------------------------------
   🚀 DEPLOYMENT CONFIGURATION
----------------------------------------- 
   When running locally, leave as: 'http://127.0.0.1:3000'
   When deploying the frontend to Vercel/Netlify, change this to your live Render/VPS backend URL.
*/
const API_BASE_URL = '';

/* -----------------------------------------
   BILINGUAL TRANSLATIONS (EN / FR)
----------------------------------------- */
const translations = {
    en: {
        nav_services:'Services', nav_demo:'Demo', nav_process:'Process', nav_results:'Results', nav_careers:'Careers', nav_contact:'Contact', nav_cta:'Deploy Systems',
        hero_status:'System Neural Net Online',
        hero_h1:'Scale Your Business with <br><i class="gradient-text">Intelligent AI.</i>',
        hero_p:'Manvion engineers bespoke neural networks and autonomous agents that automate complex operations, drive unprecedented revenue, and source elite talent while you sleep.',
        hero_btn1:'Get Free AI Strategy', hero_btn2:'Explore Architecture',
        services_h2:'The Manvion Ecosystem', services_p:'Deploy hyper-specialized AI components mapped to your exact operational bottlenecks.',
        core_h3:'Core AI Operations',
        core1_h5:'AI Automation', core1_p:'Stop doing repetitive tasks. We build AI that handles your daily manual work so your team can focus on growth.',
        core2_h5:'Custom AI Models', core2_p:"We train secure AI specifically on your company's data to solve your unique business problems.",
        core3_h5:'AI Voice & Chatbots', core3_p:'Give your customers 24/7 instant support and capture new sales leads even while you sleep.',
        core4_h5:'AI Data Insights', core4_p:'Turn confusing spreadsheets into clear answers. Our AI finds hidden revenue opportunities in your existing data.',
        scaling_h3:'Scaling & Integration',
        scal1_h5:'Scalable AI Systems', scal1_p:'As your business grows, your AI grows with it. Handle 10x the volume without hiring 10x the staff.',
        scal2_h5:'Workflow Optimization', scal2_p:'We find the bottlenecks slowing your business down and replace them with smooth, error-free AI workflows.',
        scal3_h5:'AI Integration Hub', scal3_p:'Stop jumping between different software. We connect your CRM, emails, and tools into one simple system.',
        scal4_h5:'AI Strategy & Advisory', scal4_p:'Not sure where to start with AI? We guide business owners step-by-step on how to adopt AI successfully.',
        hiring_h3:'Smart Hiring Solutions',
        hire1_h5:'AI Talent Sourcing', hire1_p:'Stop waiting for applications. Our AI automatically finds and reaches out to the exact talent you need.',
        hire2_h5:'Smart Resume Screening', hire2_p:'Instantly filter hundreds of resumes. Our AI ranks the best candidates so you only interview the top matches.',
        hire3_h5:'Automated First Interviews', hire3_p:'Save hours of time. Our AI conducts the first round of interviews to ensure candidates fit your exact requirements.',
        demo_h2:'See AI in Action', demo_p:'Experience the precision of the Manvion neural engine. Our agents qualify, nurture, and close leads autonomously without human intervention.', demo_btn:'Initiate Simulation',
        demo_chat1:'"We\'re wasting 40 hours a week on manual data entry."', demo_chat2:'Acknowledged. Deploying Business Process Automation.', demo_chat3:'Expected ROI: <strong>$85k/yr saved.</strong> Would you like the deployment roadmap?',
        process_h2:'The Integration Protocol', process_p:'We do not just hand you software. We architect seamless integrations that fit your exact structure without breaking existing workflows.',
        phase1_num:'Phase 01', phase1_h4:'Deep Audit', phase1_p:'We analyze your current tech stack and identify the exact operational bottlenecks draining your capital.',
        phase2_num:'Phase 02', phase2_h4:'Custom Build', phase2_p:'Engineering bespoke agentic workflows and LLM logic isolated to your private company data.',
        phase3_num:'Phase 03', phase3_h4:'Secure Deployment', phase3_p:'Seamless CI/CD integration. We launch the AI parallel to your human team to ensure zero downtime.',
        phase4_num:'Phase 04', phase4_h4:'Elastic Scaling', phase4_p:'As the AI proves its ROI, we open the throttle, allowing the autonomous systems to handle 10x the load.',
        results_h2:'Algorithm Validation',
        metric1_p:'Average Year 1 ROI', metric1_sub:'Based on 50+ enterprise integrations.',
        metric2_p:'Time Saved Automatically', metric2_sub:'Reduction in manual data entry.',
        metric3_p:'Pipeline Value Growth', metric3_sub:'From automated outbound sourcing.',
        careers_h2:'Join The Intelligence', careers_p:'We are scaling rapidly. Build the autonomous systems that will define the next decade of enterprise operations.',
        job1_badge:'Engineering', job1_h3:'Senior AI Architect', job1_p:'Design and deploy isolated LLM environments and multi-agent systems for Fortune 500 clients.', job1_loc:'Remote (Global)', job1_btn:'Apply with Resume',
        job2_badge:'Product', job2_h3:'Technical Automation Manager', job2_p:'Audit massive enterprise workflows and script their translation into autonomous execution engines.', job2_loc:'Remote (Global)', job2_btn:'Apply with Resume',
        contact_h2:'Initiate Deployment', contact_p:'Submit your operational parameters below. Our database will instantly log your request and alert our engineering team.',
        contact_ph_name:'Full Name', contact_ph_email:'Corporate Email', contact_ph_company:'Company Name',
        contact_opt0:'Select Primary Interest...', contact_opt1:'AI Automation', contact_opt2:'Smart Hiring Solutions', contact_opt3:'System Integration',
        contact_ph_msg:'Describe your operational bottleneck...', contact_btn:'Initiate Deployment',
        cta_h2:'Transform Your Business with AI Today.', cta_p:'Your competitors are already integrating these systems. Do not get left behind.', cta_btn:'Talk to AI Expert',
        footer_p:'The apex framework for enterprise automation and intelligent talent acquisition.', footer_nav_heading:'Navigation', footer_link1:'Ecosystem', footer_link2:'Protocol', footer_link3:'Contact', footer_contact_heading:'Contact', footer_location:'Montreal, QC, Canada', footer_copy:'© 2026 Manvion. All rights strictly reserved.',
        chat_status:'● Live Synthesizing', chat_ph:'Transmit query...',
        exit_h3:'Wait! Get Your Free AI Strategy', exit_p:"You're leaving without knowing how much capital AI could save you. Let us build a custom roadmap.",
        exit_ph_name:'Full Name', exit_ph_email:'Corporate Email', exit_ph_phone:'Phone Number', exit_ph_company:'Company Name', exit_ph_needs:'Operational Bottleneck',
        exit_btn:'Unlock Roadmap', exit_dismiss:'Dismiss System',
        apply_h3:'Submit Application', apply_ph_name:'Full Name', apply_ph_email:'Email Address', apply_btn:'Upload & Send Resume', apply_dismiss:'Cancel',
        chat_welcome:"Hi, I'm Manvion AI. How can I help you scale your business today? (e.g. Sales, Hiring, Automation)",
        chat_suggest: s => `Analyzing... Based on your goal, I recommend our **${s}**. To build your custom profile, what is your full name?`,
        chat_ask_email: n => `Great to meet you, ${n}. What is the best email to send your AI implementation strategy to?`,
        chat_bad_email:'Please provide a valid email address so I can route your strategy document.',
        chat_ask_company:'Got it. What is the name of your company?',
        chat_ask_req:'Awesome. Final question: What is your primary requirement or biggest operational bottleneck right now?',
        chat_thanks:'Thank you! Data synthesized. Our human AI team will contact you within 24 hours to initiate deployment.',
        chat_done:'I have logged this session to your CRM file. Feel free to explore the architecture behind this window.',
        svc_recruit:'AI Recruitment Solutions', svc_sales:'AI Sales Automation', svc_chat:'AI Chatbots & Agents', svc_custom:'Custom AI Workflow Optimization',
    },
    fr: {
        nav_services:'Services', nav_demo:'Démo', nav_process:'Processus', nav_results:'Résultats', nav_careers:'Carrières', nav_contact:'Contact', nav_cta:'Déployer',
        hero_status:'Réseau Neuronal Actif',
        hero_h1:'Développez Votre Entreprise avec <br><i class="gradient-text">l\'IA Intelligente.</i>',
        hero_p:'Manvion conçoit des réseaux neuronaux sur mesure et des agents autonomes qui automatisent les opérations complexes, génèrent des revenus sans précédent et recrutent les meilleurs talents pendant que vous dormez.',
        hero_btn1:'Stratégie IA Gratuite', hero_btn2:"Explorer l'Architecture",
        services_h2:"L'Écosystème Manvion", services_p:"Déployez des composants IA ultra-spécialisés adaptés à vos goulots d'étranglement opérationnels.",
        core_h3:'Opérations IA Principales',
        core1_h5:'Automatisation IA', core1_p:"Arrêtez les tâches répétitives. Nous construisons une IA qui gère votre travail manuel quotidien afin que votre équipe puisse se concentrer sur la croissance.",
        core2_h5:'Modèles IA Personnalisés', core2_p:"Nous entraînons une IA sécurisée spécifiquement sur les données de votre entreprise pour résoudre vos problèmes commerciaux uniques.",
        core3_h5:'IA Vocale & Chatbots', core3_p:"Offrez à vos clients une assistance instantanée 24h/24 et captez de nouveaux prospects même pendant votre sommeil.",
        core4_h5:'Analyses de Données IA', core4_p:"Transformez vos tableurs complexes en réponses claires. Notre IA détecte les opportunités de revenus cachées dans vos données existantes.",
        scaling_h3:'Expansion & Intégration',
        scal1_h5:'Systèmes IA Évolutifs', scal1_p:"Au fur et à mesure que votre entreprise grandit, votre IA grandit avec elle. Gérez 10x le volume sans recruter 10x plus de personnel.",
        scal2_h5:'Optimisation des Flux', scal2_p:"Nous identifions les goulots d'étranglement qui ralentissent votre entreprise et les remplaçons par des flux de travail IA fluides.",
        scal3_h5:"Hub d'Intégration IA", scal3_p:"Arrêtez de jongler entre différents logiciels. Nous connectons votre CRM, vos emails et vos outils en un seul système simple.",
        scal4_h5:'Stratégie & Conseil IA', scal4_p:"Vous ne savez pas par où commencer avec l'IA ? Nous guidons les chefs d'entreprise étape par étape.",
        hiring_h3:'Solutions de Recrutement Intelligentes',
        hire1_h5:'Sourcing de Talents IA', hire1_p:"Arrêtez d'attendre des candidatures. Notre IA trouve et contacte automatiquement les talents exacts dont vous avez besoin.",
        hire2_h5:'Tri Intelligent de CV', hire2_p:"Filtrez instantanément des centaines de CV. Notre IA classe les meilleurs candidats pour que vous n'interviewiez que les profils les plus adaptés.",
        hire3_h5:'Premiers Entretiens Automatisés', hire3_p:"Économisez des heures de travail. Notre IA conduit le premier tour d'entretiens pour s'assurer que les candidats correspondent à vos exigences.",
        demo_h2:"Voir l'IA en Action", demo_p:"Découvrez la précision du moteur neuronal Manvion. Nos agents qualifient, nourrissent et convertissent les prospects de façon autonome, sans intervention humaine.", demo_btn:'Lancer la Simulation',
        demo_chat1:'"Nous perdons 40 heures par semaine en saisie manuelle de données."', demo_chat2:"Reconnu. Déploiement de l'Automatisation des Processus Métier.", demo_chat3:"ROI prévu : <strong>85k$/an économisés.</strong> Souhaitez-vous la feuille de route de déploiement ?",
        process_h2:"Le Protocole d'Intégration", process_p:"Nous ne vous livrons pas simplement un logiciel. Nous architecturons des intégrations transparentes qui s'adaptent à votre structure sans perturber les flux existants.",
        phase1_num:'Phase 01', phase1_h4:'Audit Approfondi', phase1_p:"Nous analysons votre pile technologique actuelle et identifions les goulots d'étranglement opérationnels qui drainent votre capital.",
        phase2_num:'Phase 02', phase2_h4:'Développement Sur Mesure', phase2_p:"Ingénierie de flux de travail agentiques sur mesure et logique LLM isolée sur les données privées de votre entreprise.",
        phase3_num:'Phase 03', phase3_h4:'Déploiement Sécurisé', phase3_p:"Intégration CI/CD transparente. Nous lançons l'IA en parallèle de votre équipe humaine pour garantir zéro temps d'arrêt.",
        phase4_num:'Phase 04', phase4_h4:"Mise à l'Échelle Élastique", phase4_p:"Lorsque l'IA prouve son ROI, nous ouvrons les vannes, permettant aux systèmes autonomes de gérer 10x la charge.",
        results_h2:'Validation des Algorithmes',
        metric1_p:'ROI Moyen — Année 1', metric1_sub:"Basé sur 50+ intégrations d'entreprise.",
        metric2_p:'Temps Économisé Automatiquement', metric2_sub:'Réduction des saisies manuelles de données.',
        metric3_p:'Croissance de la Valeur du Pipeline', metric3_sub:'Grâce au sourcing sortant automatisé.',
        careers_h2:"Rejoignez l'Intelligence", careers_p:"Nous évoluons rapidement. Construisez les systèmes autonomes qui définiront la prochaine décennie des opérations d'entreprise.",
        job1_badge:'Ingénierie', job1_h3:'Architecte IA Senior', job1_p:'Concevez et déployez des environnements LLM isolés et des systèmes multi-agents pour des clients Fortune 500.', job1_loc:'Télétravail (Mondial)', job1_btn:'Postuler avec CV',
        job2_badge:'Produit', job2_h3:"Directeur de l'Automatisation Technique", job2_p:"Auditez d'importants flux de travail d'entreprise et scriptez leur traduction en moteurs d'exécution autonomes.", job2_loc:'Télétravail (Mondial)', job2_btn:'Postuler avec CV',
        contact_h2:'Initier le Déploiement', contact_p:"Soumettez vos paramètres opérationnels ci-dessous. Notre base de données enregistrera instantanément votre demande et alertera notre équipe d'ingénierie.",
        contact_ph_name:'Nom Complet', contact_ph_email:'Email Professionnel', contact_ph_company:"Nom de l'Entreprise",
        contact_opt0:"Sélectionner l'Intérêt Principal...", contact_opt1:'Automatisation IA', contact_opt2:'Solutions de Recrutement', contact_opt3:'Intégration de Systèmes',
        contact_ph_msg:"Décrivez votre goulot d'étranglement opérationnel...", contact_btn:'Initier le Déploiement',
        cta_h2:"Transformez Votre Entreprise avec l'IA Dès Aujourd'hui.", cta_p:"Vos concurrents intègrent déjà ces systèmes. Ne prenez pas de retard.", cta_btn:'Parler à un Expert IA',
        footer_p:"Le cadre de référence pour l'automatisation d'entreprise et l'acquisition de talents intelligents.", footer_nav_heading:'Navigation', footer_link1:'Écosystème', footer_link2:'Protocole', footer_link3:'Contact', footer_contact_heading:'Contact', footer_location:'Montréal, QC, Canada', footer_copy:'© 2026 Manvion. Tous droits strictement réservés.',
        chat_status:'● Synthèse en Direct', chat_ph:'Soumettre une requête...',
        exit_h3:'Attendez ! Obtenez Votre Stratégie IA Gratuite', exit_p:"Vous partez sans savoir combien de capital l'IA pourrait vous faire économiser. Laissez-nous créer une feuille de route personnalisée.",
        exit_ph_name:'Nom Complet', exit_ph_email:'Email Professionnel', exit_ph_phone:'Numéro de Téléphone', exit_ph_company:"Nom de l'Entreprise", exit_ph_needs:"Goulot d'Étranglement Opérationnel",
        exit_btn:'Débloquer la Feuille de Route', exit_dismiss:'Ignorer',
        apply_h3:'Soumettre une Candidature', apply_ph_name:'Nom Complet', apply_ph_email:'Adresse Email', apply_btn:'Télécharger et Envoyer le CV', apply_dismiss:'Annuler',
        chat_welcome:"Bonjour, je suis Manvion AI. Comment puis-je vous aider à développer votre entreprise ? (ex: Ventes, Recrutement, Automatisation)",
        chat_suggest: s => `Analyse en cours... Je recommande notre **${s}**. Quel est votre nom complet ?`,
        chat_ask_email: n => `Ravi de vous rencontrer, ${n}. Quel email dois-je utiliser pour vous envoyer votre stratégie IA ?`,
        chat_bad_email:'Veuillez fournir une adresse email valide afin que je puisse acheminer votre document stratégique.',
        chat_ask_company:"Compris. Quel est le nom de votre entreprise ?",
        chat_ask_req:"Parfait. Dernière question : quel est votre principal goulot d'étranglement opérationnel ?",
        chat_thanks:"Merci ! Données synthétisées. Notre équipe vous contactera dans les 24 heures pour initier le déploiement.",
        chat_done:"Session enregistrée dans votre dossier CRM. N'hésitez pas à explorer l'architecture.",
        svc_recruit:'Solutions de Recrutement IA', svc_sales:'Automatisation des Ventes IA', svc_chat:'Chatbots & Agents IA', svc_custom:"Optimisation de Flux de Travail IA",
    }
};

let currentLang = 'en';

const setLanguage = (lang) => {
    currentLang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'en' ? 'FR' : 'EN';
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
};

const toggleLang = () => setLanguage(currentLang === 'en' ? 'fr' : 'en');

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
        emitAI(translations[currentLang].chat_welcome);
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
    const t = translations[currentLang];
    switch(cState) {
        case 1:
            lead.needRaw = input;
            const lw = input.toLowerCase();
            if(lw.includes('hire') || lw.includes('recruit') || lw.includes('embauche') || lw.includes('recrut')) lead.service = t.svc_recruit;
            else if(lw.includes('sale') || lw.includes('lead') || lw.includes('vente')) lead.service = t.svc_sales;
            else if(lw.includes('support') || lw.includes('chat')) lead.service = t.svc_chat;
            else lead.service = t.svc_custom;
            cState = 2;
            emitAI(t.chat_suggest(lead.service));
            break;
        case 2:
            lead.name = input;
            cState = 3;
            emitAI(t.chat_ask_email(lead.name));
            break;
        case 3:
            if(input.includes('@') && input.includes('.')) {
                lead.email = input;
                cState = 4;
                emitAI(t.chat_ask_company);
            } else {
                emitAI(t.chat_bad_email);
            }
            break;
        case 4:
            lead.company = input;
            cState = 5;
            emitAI(t.chat_ask_req);
            break;
        case 5:
            lead.requirement = input;
            captureLead(lead, "Chatbot Core");
            cState = 6;
            emitAI(t.chat_thanks);
            break;
        case 6:
            emitAI(t.chat_done);
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

        let data = {};
        try { data = await response.json(); } catch {}

        if (response.ok) {
            statusDiv.innerHTML = "✅ SUCCESS: Lead transmitted instantly to Manvion personnel.";
            statusDiv.style.color = "#00ff66";
            e.target.reset();
        } else {
            const detail = [data.sheet && `Sheet: ${data.sheet}`, data.email && `Email: ${data.email}`].filter(Boolean).join(' | ');
            statusDiv.innerHTML = `⚠️ ERROR ${response.status}: ${detail || data.error || 'Server error'}`;
            statusDiv.style.color = "#ff0055";
        }
    } catch (err) {
        statusDiv.innerHTML = `⚠️ Network error: ${err.message}`;
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
    setLanguage(localStorage.getItem('lang') || 'en');
    initSpace();
    initMotion();

    // Fade scroll indicator out when user starts scrolling
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            const opacity = Math.max(0, 1 - window.scrollY / 200);
            scrollIndicator.style.opacity = opacity;
            scrollIndicator.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
        }, { passive: true });
    }
    
    // Proactive engagement trigger
    setTimeout(() => {
        if (cState === 0 && !sideChat.classList.contains('active')) {
            gsap.to("#floating-chat-btn", { scale: 1.05, boxShadow: "0 0 40px #00e5ff", yoyo: true, repeat: 3, duration: 0.4 });
        }
    }, 7000);
};
