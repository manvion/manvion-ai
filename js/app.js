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
        nav_services:'Services', nav_demo:'Demo', nav_process:'How It Works', nav_results:'Results', nav_careers:'Careers', nav_contact:'Contact', nav_cta:'Get Free Strategy',
        hero_status:"Montreal's AI Automation Agency",
        hero_h1:'Automate Everything.<br><i class="gradient-text">Scale Beyond Limits.</i>',
        hero_p:"Manvion AI builds custom automation systems that handle your repetitive tasks, find top talent automatically, and grow your revenue — without adding more staff. Based in Montreal. Serving businesses worldwide.",
        hero_btn1:'Get My Free AI Strategy', hero_btn2:'See How It Works',
        services_h2:'Everything Your Business Needs to Automate', services_p:'AI solutions that eliminate manual work, cut costs, and free your team to focus on what actually grows your business.',
        core_h3:'Core AI Services',
        core1_h5:'AI Workflow Automation', core1_p:'We map your most time-consuming processes and deploy AI that executes them automatically — 24/7, without errors or delays. From data entry to complex multi-step workflows.',
        core2_h5:'AI Built for Your Business', core2_p:"We train AI on your company data — your products, processes, and customers — to solve problems no off-the-shelf software can handle.",
        core3_h5:'AI Voice & Chatbots', core3_p:'Deploy AI voice assistants that handle inbound calls and chatbots that qualify leads, answer questions, and book meetings — 24/7, across every channel. Every visitor and every caller, captured.',
        core4_h5:'Turn Data Into Decisions', core4_p:"We turn your spreadsheets and raw data into clear dashboards that show you exactly where to find more revenue and where you're losing money.",
        scaling_h3:'Growth & Integration',
        scal1_h5:'Grow Without Hiring More Staff', scal1_p:'Handle 5x, 10x — even 50x the workload with the same team. Your AI scales as fast as your business, at a fraction of the cost of a new hire.',
        scal2_h5:'Eliminate Wasted Time', scal2_p:"We map your entire workflow, find what's costing you hours every week, and replace it with fast, error-free AI processes that never call in sick.",
        scal3_h5:'Connect All Your Tools', scal3_p:'Your CRM, email, calendar, and software all work together automatically. No more copy-paste between apps, no more data slipping through the cracks.',
        scal4_h5:'AI Strategy & Guidance', scal4_p:"Not sure where AI fits your business? We've helped 50+ companies get started. We'll show you exactly where it will have the biggest impact — fast.",
        hiring_h3:'AI-Powered Hiring',
        hire1_h5:'Find the Right People Faster', hire1_p:'Our AI searches hundreds of platforms to identify candidates who match your exact requirements — and reaches out to them before they even apply elsewhere.',
        hire2_h5:'Screen 200 Resumes in 2 Minutes', hire2_p:'Stop spending evenings reading CVs. Our AI shortlists only the candidates worth your time — ranked by how well they match your exact requirements.',
        hire3_h5:'Only Interview the Best', hire3_p:'AI pre-screens applicants, scores their fit, and sends you a ranked shortlist. You only spend time with the people truly worth hiring.',
        demo_h2:'Watch AI Solve a Real Business Problem', demo_p:'A business owner describes their problem. Our AI identifies the solution and calculates their ROI in seconds. This is exactly what we do for every client — before you spend a single dollar.', demo_btn:'Try It Yourself →',
        demo_chat1:'"We\'re wasting 40 hours a week on manual data entry."', demo_chat2:'Understood. I can automate that entire process for you.', demo_chat3:'Estimated savings: <strong>$85,000/year.</strong> Want to see your custom roadmap?',
        process_h2:'How We Work', process_p:'From your first call to AI running live in your business — here is our proven 4-step process. Most clients are fully live within 4 weeks.',
        phase1_num:'Step 01', phase1_h4:'Free Discovery Call', phase1_p:'We spend 60 minutes learning how your business works and identifying exactly where AI will save you the most time and money — at no cost to you.',
        phase2_num:'Step 02', phase2_h4:'We Build Your AI', phase2_p:'We build a tailored AI solution designed around your exact tools, team, and goals. Everything is custom-built for your business — nothing generic, nothing off-the-shelf.',
        phase3_num:'Step 03', phase3_h4:'We Go Live Together', phase3_p:'Your AI launches alongside your current team. We handle the entire rollout — zero downtime and zero disruption to how your business runs today.',
        phase4_num:'Step 04', phase4_h4:'It Gets Smarter Every Day', phase4_p:'Your AI learns from every interaction and continuously improves. As your business grows, your AI grows with it — handling more, costing less per task.',
        results_h2:'Real Results From Real Clients',
        metric1_p:'Average ROI in Year One', metric1_sub:'Across 50+ client deployments worldwide.',
        metric2_p:'Less Manual Work', metric2_sub:'Hours freed up every week so your team can focus on growth.',
        metric3_p:'More Pipeline Value', metric3_sub:'From AI-powered lead generation and automated outreach.',
        trust1_num:'50+', trust1_label:'Businesses Automated',
        trust2_num:'300%', trust2_label:'Avg. ROI in Year One',
        trust3_num:'70%', trust3_label:'Less Manual Work',
        trust4_num:'24h', trust4_label:'Response Guaranteed',
        faq_h2:'Common Questions', faq_p:'Everything you need to know before getting started with AI automation.',
        faq1_q:'What exactly does an AI automation agency do?', faq1_a:'We identify the tasks in your business that take the most time and money — data entry, scheduling, recruiting, customer support — and build AI systems that handle them automatically. Your team focuses on high-value work, your costs go down, and your output goes up.',
        faq2_q:'How quickly will I see results?', faq2_a:'Most clients go live within 4 weeks and see measurable time savings within the first 30 days. Significant ROI — typically 2–3x their investment — usually appears within 3 to 6 months. We give you realistic timelines before we start.',
        faq3_q:'Do I need to understand AI or be technical?', faq3_a:"Not at all. You don't need to understand how AI works — that's our job. You describe your problems and goals in plain language, and we handle everything from design to deployment. We work with business owners, not engineers.",
        faq4_q:'Will it work with the software I already use?', faq4_a:'Yes. We connect your AI to your existing CRM, email, calendar, and any other tools — including HubSpot, Salesforce, Google Workspace, Slack, and hundreds more. We build around your workflow, not the other way around.',
        faq5_q:'How much does it cost?', faq5_a:'Every project is scoped individually. The best first step is a free 30-minute strategy call where we learn about your business and give you a clear quote with no surprises. Most clients find their AI pays for itself within the first few months.',
        careers_h2:'Work With Us', careers_p:'We are a fast-growing AI agency building systems that change how businesses operate. If you are exceptional at what you do, we want to work with you.',
        job1_badge:'Engineering', job1_h3:'Senior AI Engineer', job1_p:'Build production-grade AI systems and multi-agent workflows for businesses across North America and beyond. Own your projects end to end.', job1_loc:'Remote (Global)', job1_btn:'Apply with Resume',
        job2_badge:'Consulting', job2_h3:'Automation Consultant', job2_p:'Work directly with clients to map their workflows and design AI solutions that save them time and money. You talk to businesses, we build the systems.', job2_loc:'Remote (Global)', job2_btn:'Apply with Resume',
        contact_h2:"Let's Talk About Your Business", contact_p:"Tell us your biggest challenge. We'll come back to you within 24 hours with a clear plan for how AI can help — at no cost.",
        contact_ph_name:'Your Name', contact_ph_email:'Your Email', contact_ph_company:'Company Name',
        contact_opt0:'What can we help you with?', contact_opt1:'Automate My Tasks', contact_opt2:'Improve My Hiring', contact_opt3:'Connect My Tools',
        contact_ph_msg:"What's your biggest business challenge right now?", contact_btn:'Send My Request →',
        cta_h2:'Ready to Save 40+ Hours a Week?', cta_p:'Join 50+ businesses in Montreal and beyond already using Manvion AI to work smarter, move faster, and grow without limits.', cta_btn:'Book a Free Strategy Call',
        footer_p:'Turning ambitious businesses into AI-powered, self-scaling machines since 2024.', footer_nav_heading:'Navigation', footer_link1:'Services', footer_link2:'How It Works', footer_link_faq:'FAQ', footer_link3:'Contact', footer_contact_heading:'Contact', footer_location:'Montreal, QC, Canada', footer_copy:'© 2026 Manvion AI. All rights reserved.',
        chat_status:'● Live — Ready to Help', chat_ph:'Type your question...',
        exit_h3:'Wait — Get Your Free AI Strategy', exit_p:'Before you leave, find out how much time and money AI could save your business. It takes 2 minutes.',
        exit_ph_name:'Your Name', exit_ph_email:'Your Email', exit_ph_phone:'Phone Number', exit_ph_company:'Company Name', exit_ph_needs:'Your Biggest Business Challenge',
        exit_btn:'Get My Free Roadmap', exit_dismiss:'No thanks',
        apply_h3:'Submit Your Application', apply_ph_name:'Full Name', apply_ph_email:'Email Address', apply_btn:'Upload & Send Resume', apply_dismiss:'Cancel',
        chat_welcome:"Hi, I'm Manvion AI. What can I help you build or automate today? (e.g. Website, Voice AI, Chatbots, Hiring, Automation)",
        chat_suggest: s => `Based on what you've shared, our **${s}** is exactly what you need. Most businesses see results within 30 days. To build your personalized strategy, what's your name?`,
        chat_ask_email: n => `Great to meet you, ${n}! What email should I send your free AI strategy report to?`,
        chat_bad_email:'Hmm, that email doesn\'t look right. Could you double-check it? I want to make sure your strategy lands in the right inbox.',
        chat_ask_company:'Perfect. What company is this for?',
        chat_ask_req:"Almost there — what's the single biggest bottleneck eating your time or revenue right now?",
        chat_thanks:'Our team personally reviews every submission and will reach out within 24 hours with a strategy tailored specifically to your business. No templates — just a clear, custom plan.',
        chat_done:'Feel free to explore our services and results in the meantime. You\'ll hear from us very soon.',
        svc_recruit:'AI Recruitment Solutions', svc_sales:'AI Sales Automation', svc_chat:'AI Chatbots & Agents', svc_custom:'Custom AI Workflow Optimization',
        svc_voice:'AI Voice Assistant Solutions', svc_data:'AI Data Insights & Dashboards', svc_website:'Custom Website & Web Development',
        contact_opt4:'Build My Website',
        web_h3:'Web & Digital Presence',
        web1_h5:'Custom Website Development', web1_p:'We design and build high-performance websites tailored to your brand — fast, conversion-optimized, and built to scale with your business.',
        web2_h5:'AI-Integrated Web Applications', web2_p:'Custom web apps with AI built in from the ground up — intelligent dashboards, automation triggers, and real-time data processing baked into your platform.',
        web3_h5:'Landing Pages & Funnels', web3_p:'High-converting landing pages and sales funnels built to capture leads and drive revenue — backed by data and tested for performance.',
        web4_h5:'E-Commerce & Online Stores', web4_p:'End-to-end e-commerce builds with AI-powered product recommendations, inventory automation, and smart checkout flows that convert.',
    },
    fr: {
        nav_services:'Services', nav_demo:'Démo', nav_process:'Comment Ça Marche', nav_results:'Résultats', nav_careers:'Carrières', nav_contact:'Contact', nav_cta:'Stratégie Gratuite',
        hero_status:"L'Agence IA de Montréal",
        hero_h1:"Automatisez Tout.<br><i class=\"gradient-text\">Dépassez Toutes les Limites.</i>",
        hero_p:"Manvion AI construit des systèmes d'automatisation sur mesure qui gèrent vos tâches répétitives, trouvent les meilleurs talents automatiquement et développent vos revenus — sans embaucher plus de personnel. Basé à Montréal. Servir les entreprises partout dans le monde.",
        hero_btn1:'Ma Stratégie IA Gratuite', hero_btn2:'Voir Comment Ça Marche',
        services_h2:"Tout Ce Dont Votre Entreprise A Besoin pour Automatiser", services_p:"Des solutions IA qui éliminent le travail manuel, réduisent les coûts et libèrent votre équipe pour se concentrer sur ce qui fait vraiment croître votre entreprise.",
        core_h3:'Services IA Principaux',
        core1_h5:'Automatisation des Flux de Travail IA', core1_p:"Nous cartographions vos processus les plus chronophages et déployons une IA qui les exécute automatiquement — 24h/24, 7j/7, sans erreurs. De la saisie de données aux flux multi-étapes complexes.",
        core2_h5:'IA Conçue pour Votre Entreprise', core2_p:"Nous entraînons l'IA sur les données de votre entreprise — vos produits, processus et clients — pour résoudre des problèmes qu'aucun logiciel standard ne peut traiter.",
        core3_h5:'Assistants Vocaux & Chatbots IA', core3_p:"Déployez des assistants vocaux IA qui gèrent les appels entrants et des chatbots qui qualifient les prospects, répondent aux questions et réservent des réunions — 24h/24, sur tous les canaux.",
        core4_h5:'Transformez les Données en Décisions', core4_p:"Nous transformons vos tableurs et données brutes en tableaux de bord clairs qui vous montrent exactement où trouver plus de revenus et où vous perdez de l'argent.",
        scaling_h3:'Croissance & Intégration',
        scal1_h5:'Grandissez Sans Embaucher Plus', scal1_p:"Gérez 5x, 10x — même 50x la charge de travail avec la même équipe. Votre IA évolue aussi vite que votre entreprise, à une fraction du coût d'une nouvelle embauche.",
        scal2_h5:'Éliminez le Temps Perdu', scal2_p:"Nous cartographions l'ensemble de votre flux de travail, trouvons ce qui vous coûte des heures chaque semaine et le remplaçons par des processus IA rapides et sans erreur.",
        scal3_h5:'Connectez Tous Vos Outils', scal3_p:"Votre CRM, email, calendrier et logiciels fonctionnent tous ensemble automatiquement. Plus de copier-coller entre applications, plus de données perdues.",
        scal4_h5:'Stratégie & Conseil IA', scal4_p:"Vous ne savez pas où l'IA s'intègre dans votre entreprise ? Nous avons aidé 50+ entreprises à démarrer. Nous vous montrerons exactement où elle aura le plus grand impact — rapidement.",
        hiring_h3:"Recrutement Propulsé par l'IA",
        hire1_h5:'Trouvez les Bons Candidats Plus Vite', hire1_p:"Notre IA recherche sur des centaines de plateformes pour identifier les candidats qui correspondent exactement à vos exigences — et les contacte avant même qu'ils postulent ailleurs.",
        hire2_h5:'Analysez 200 CV en 2 Minutes', hire2_p:"Arrêtez de passer vos soirées à lire des CV. Notre IA présélectionne uniquement les candidats qui valent votre temps — classés selon leur adéquation avec vos exigences.",
        hire3_h5:"N'Interviewez Que les Meilleurs", hire3_p:"L'IA présélectionne les candidats, évalue leur adéquation et vous envoie une liste classée. Vous ne passez du temps qu'avec les personnes vraiment dignes d'être embauchées.",
        demo_h2:"Regardez l'IA Résoudre un Vrai Problème d'Entreprise", demo_p:"Un chef d'entreprise décrit son problème. Notre IA identifie la solution et calcule le ROI en quelques secondes. C'est exactement ce que nous faisons pour chaque client — avant que vous dépensiez un seul dollar.", demo_btn:'Essayez Vous-Même →',
        demo_chat1:'"Nous perdons 40 heures par semaine en saisie manuelle de données."', demo_chat2:"Compris. Je peux automatiser tout ce processus pour vous.", demo_chat3:"Économies estimées : <strong>85 000$/an.</strong> Voulez-vous voir votre feuille de route personnalisée ?",
        process_h2:'Comment Nous Travaillons', process_p:"De votre premier appel à l'IA opérationnelle dans votre entreprise — voici notre processus éprouvé en 4 étapes. La plupart des clients sont pleinement opérationnels en 4 semaines.",
        phase1_num:'Étape 01', phase1_h4:'Appel de Découverte Gratuit', phase1_p:"Nous passons 60 minutes à apprendre comment fonctionne votre entreprise et à identifier exactement où l'IA vous fera gagner le plus de temps et d'argent — sans frais.",
        phase2_num:'Étape 02', phase2_h4:'Nous Construisons Votre IA', phase2_p:"Nous construisons une solution IA sur mesure conçue autour de vos outils, équipe et objectifs exacts. Tout est personnalisé pour votre entreprise — rien de générique.",
        phase3_num:'Étape 03', phase3_h4:'Nous Lançons Ensemble', phase3_p:"Votre IA se lance aux côtés de votre équipe actuelle. Nous gérons le déploiement complet — zéro interruption et zéro perturbation dans votre fonctionnement actuel.",
        phase4_num:'Étape 04', phase4_h4:"Elle S'Améliore Chaque Jour", phase4_p:"Votre IA apprend de chaque interaction et s'améliore continuellement. Au fur et à mesure que votre entreprise grandit, votre IA grandit avec elle.",
        results_h2:'Résultats Réels de Clients Réels',
        metric1_p:'ROI Moyen en Première Année', metric1_sub:'Sur 50+ déploiements clients dans le monde.',
        metric2_p:'Moins de Travail Manuel', metric2_sub:"Heures libérées chaque semaine pour que votre équipe se concentre sur la croissance.",
        metric3_p:'Plus de Valeur de Pipeline', metric3_sub:"Grâce à la génération de leads et la prospection automatisée par IA.",
        trust1_num:'50+', trust1_label:'Entreprises Automatisées',
        trust2_num:'300%', trust2_label:'ROI Moy. en 1ère Année',
        trust3_num:'70%', trust3_label:'Moins de Travail Manuel',
        trust4_num:'24h', trust4_label:'Réponse Garantie',
        faq_h2:'Questions Fréquentes', faq_p:"Tout ce que vous devez savoir avant de commencer l'automatisation par IA.",
        faq1_q:"Que fait exactement une agence d'automatisation IA ?", faq1_a:"Nous identifions les tâches dans votre entreprise qui prennent le plus de temps et d'argent — saisie de données, planification, recrutement, support client — et construisons des systèmes IA qui les gèrent automatiquement. Votre équipe se concentre sur le travail à haute valeur, vos coûts baissent et votre production augmente.",
        faq2_q:'Quand verrai-je des résultats ?', faq2_a:"La plupart des clients sont opérationnels en 4 semaines et voient des économies de temps mesurables dans les 30 premiers jours. Un ROI significatif — généralement 2 à 3 fois l'investissement — apparaît généralement dans les 3 à 6 mois.",
        faq3_q:"Dois-je comprendre l'IA ou être technique ?", faq3_a:"Pas du tout. Vous n'avez pas besoin de comprendre le fonctionnement de l'IA — c'est notre travail. Vous décrivez vos problèmes en langage simple et nous gérons tout, de la conception au déploiement.",
        faq4_q:'Est-ce compatible avec mes logiciels actuels ?', faq4_a:"Oui. Nous connectons votre IA à votre CRM, email, calendrier et tout autre outil existant — y compris HubSpot, Salesforce, Google Workspace, Slack, et bien d'autres. Nous nous adaptons à votre flux de travail.",
        faq5_q:'Combien ça coûte ?', faq5_a:"Chaque projet est évalué individuellement. La meilleure première étape est un appel stratégique gratuit de 30 minutes où nous apprenons à connaître votre entreprise et vous donnons un devis clair sans surprises.",
        careers_h2:'Travaillez Avec Nous', careers_p:"Nous sommes une agence IA en pleine croissance qui construit des systèmes qui changent la façon dont les entreprises fonctionnent. Si vous excellez dans votre domaine, nous voulons travailler avec vous.",
        job1_badge:'Ingénierie', job1_h3:'Ingénieur IA Senior', job1_p:"Construisez des systèmes IA de qualité production et des flux de travail multi-agents pour des entreprises d'Amérique du Nord et au-delà. Gérez vos projets de bout en bout.", job1_loc:'Télétravail (Mondial)', job1_btn:'Postuler avec CV',
        job2_badge:'Conseil', job2_h3:'Consultant en Automatisation', job2_p:"Travaillez directement avec des clients pour cartographier leurs flux de travail et concevoir des solutions IA qui leur font gagner du temps et de l'argent. Vous parlez aux entreprises, nous construisons les systèmes.", job2_loc:'Télétravail (Mondial)', job2_btn:'Postuler avec CV',
        contact_h2:'Parlons de Votre Entreprise', contact_p:"Dites-nous votre plus grand défi. Nous vous répondrons dans les 24 heures avec un plan clair sur la façon dont l'IA peut aider — sans frais.",
        contact_ph_name:'Votre Nom', contact_ph_email:'Votre Email', contact_ph_company:"Nom de l'Entreprise",
        contact_opt0:'Comment pouvons-nous vous aider ?', contact_opt1:'Automatiser mes tâches', contact_opt2:'Améliorer mon recrutement', contact_opt3:'Connecter mes outils',
        contact_ph_msg:'Quel est votre plus grand défi commercial en ce moment ?', contact_btn:'Envoyer Ma Demande →',
        cta_h2:'Prêt à Économiser 40+ Heures par Semaine ?', cta_p:"Rejoignez 50+ entreprises à Montréal et au-delà qui utilisent déjà Manvion AI pour travailler plus intelligemment et grandir sans limites.", cta_btn:'Réserver un Appel Stratégique Gratuit',
        footer_p:"Transformer les entreprises ambitieuses en machines alimentées par l'IA et auto-évolutives depuis 2024.", footer_nav_heading:'Navigation', footer_link1:'Services', footer_link2:'Comment Ça Marche', footer_link_faq:'FAQ', footer_link3:'Contact', footer_contact_heading:'Contact', footer_location:'Montréal, QC, Canada', footer_copy:'© 2026 Manvion AI. Tous droits réservés.',
        chat_status:'● En Direct — Prêt à Aider', chat_ph:'Tapez votre question...',
        exit_h3:'Attendez — Obtenez Votre Stratégie IA Gratuite', exit_p:"Avant de partir, découvrez combien de temps et d'argent l'IA pourrait faire économiser à votre entreprise. Cela prend 2 minutes.",
        exit_ph_name:'Votre Nom', exit_ph_email:'Votre Email', exit_ph_phone:'Numéro de Téléphone', exit_ph_company:"Nom de l'Entreprise", exit_ph_needs:'Votre Plus Grand Défi Commercial',
        exit_btn:'Obtenir Ma Feuille de Route Gratuite', exit_dismiss:'Non merci',
        apply_h3:'Soumettre Votre Candidature', apply_ph_name:'Nom Complet', apply_ph_email:'Adresse Email', apply_btn:'Télécharger et Envoyer le CV', apply_dismiss:'Annuler',
        chat_welcome:"Bonjour, je suis Manvion AI. Qu'est-ce que je peux vous aider à construire ou automatiser ? (ex: Site web, Vocal IA, Chatbots, Recrutement, Automatisation)",
        chat_suggest: s => `Basé sur ce que vous avez partagé, notre **${s}** est exactement ce qu'il vous faut. Pour créer votre stratégie personnalisée, quel est votre nom ?`,
        chat_ask_email: n => `Ravi de vous rencontrer, ${n} ! À quel email dois-je envoyer votre rapport de stratégie IA gratuit ?`,
        chat_bad_email:"Hmm, cet email ne semble pas correct. Pourriez-vous le vérifier ? Je veux m'assurer que votre stratégie arrive dans la bonne boîte de réception.",
        chat_ask_company:'Parfait. Pour quelle entreprise est-ce ?',
        chat_ask_req:"Presque terminé — quel est le principal goulot d'étranglement qui grignote votre temps ou vos revenus en ce moment ?",
        chat_thanks:"Notre équipe examine personnellement chaque soumission et vous contactera dans les 24 heures avec une stratégie adaptée spécifiquement à votre entreprise. Pas de modèles — juste un plan clair et personnalisé.",
        chat_done:"N'hésitez pas à explorer nos services en attendant. Vous aurez de nos nouvelles très bientôt.",
        svc_recruit:'Solutions de Recrutement IA', svc_sales:'Automatisation des Ventes IA', svc_chat:'Chatbots & Agents IA', svc_custom:"Optimisation de Flux de Travail IA",
        svc_voice:"Solutions d'Assistants Vocaux IA", svc_data:'Insights & Tableaux de Bord IA', svc_website:'Développement Web & Applications Sur Mesure',
        contact_opt4:'Créer mon site web',
        web_h3:'Web & Présence Numérique',
        web1_h5:'Développement de Sites Web Sur Mesure', web1_p:"Nous concevons et construisons des sites web haute performance adaptés à votre marque — rapides, optimisés pour la conversion et prêts à évoluer avec votre entreprise.",
        web2_h5:"Applications Web Intégrées à l'IA", web2_p:"Des applications web personnalisées avec l'IA intégrée dès le départ — tableaux de bord intelligents, déclencheurs d'automatisation et traitement de données en temps réel.",
        web3_h5:"Pages d'Atterrissage & Entonnoirs", web3_p:"Des pages d'atterrissage et entonnoirs de vente à fort taux de conversion pour capturer des prospects et générer des revenus — soutenus par les données.",
        web4_h5:'E-Commerce & Boutiques', web4_p:"Des solutions e-commerce de bout en bout avec recommandations IA, automatisation des stocks et expériences de paiement fluides qui convertissent.",
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

const toggleTheme = () => {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    const isLight = body.classList.toggle('light-theme');
    if (btn) btn.textContent = isLight ? '☾' : '☀';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
};

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
            if (lw.includes('hire') || lw.includes('recruit') || lw.includes('talent') || lw.includes('embauche') || lw.includes('recrut') || lw.includes('candidat') || lw.includes('staff')) {
                lead.service = t.svc_recruit;
            } else if (lw.includes('website') || lw.includes('web') || lw.includes('site') || lw.includes('design') || lw.includes('landing') || lw.includes('ecommerce') || lw.includes('boutique') || lw.includes('store')) {
                lead.service = t.svc_website;
            } else if (lw.includes('voice') || lw.includes('phone') || lw.includes('call') || lw.includes('vocal') || lw.includes('appel')) {
                lead.service = t.svc_voice;
            } else if (lw.includes('data') || lw.includes('analytics') || lw.includes('dashboard') || lw.includes('insight') || lw.includes('rapport') || lw.includes('tableau')) {
                lead.service = t.svc_data;
            } else if (lw.includes('sale') || lw.includes('lead') || lw.includes('vente') || lw.includes('prospect') || lw.includes('revenue') || lw.includes('crm')) {
                lead.service = t.svc_sales;
            } else if (lw.includes('support') || lw.includes('chat') || lw.includes('bot') || lw.includes('chatbot') || lw.includes('assistant')) {
                lead.service = t.svc_chat;
            } else {
                lead.service = t.svc_custom;
            }
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
   FAQ ACCORDION
----------------------------------------- */
const toggleFaq = (btn) => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
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
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        const btn = document.getElementById('theme-toggle');
        if (btn) btn.textContent = '☾';
    }
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
