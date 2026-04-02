// ============================================================
// RUBI — Smart Assistant Chatbot
// Improved: weighted scoring, context awareness, natural tone
// ============================================================

const chatbotData = {
  identity: {
    patterns: ["who are you", "what are you", "your name", "rubi", "assistant"],
    response: "I'm Rubi — Arsalan's portfolio assistant. Ask me about his skills, projects, pricing, or how to get in touch!"
  },
  about: {
    patterns: ["who is arsalan", "about arsalan", "tell me about", "background", "experience"],
    response: "Arsalan Khan is a Software Engineering student at Shifa Tameer-e-Millat University with hands-on experience in web development, app development, AI integration, and IoT. He builds clean, performant, and user-focused digital solutions."
  },
  education: {
    patterns: ["where study", "university", "college", "degree", "education", "student", "studying"],
    response: "Arsalan is studying BS Software Engineering at Shifa Tameer-e-Millat University, with a focus on modern web technologies, databases, and embedded systems."
  },
  skills: {
    patterns: ["skills", "know", "technologies", "tech stack", "what can you do", "expertise", "languages", "tools"],
    response: "Arsalan's core skills: Frontend — HTML, CSS, JavaScript. Backend — PHP, Node.js. Databases — MySQL, SQLite, MongoDB. Tools — Git, GitHub, Arduino. He's also comfortable with Java for desktop applications."
  },
  projects: {
    patterns: ["projects", "built", "portfolio", "work", "show me", "what have you made", "applications"],
    response: "Arsalan has built 6 projects including an E-Commerce Platform, KB Medical Laboratory System, Rubi Chatbot, School Management Portal, Car Rental System, and a Travel Agency Website. Check the Projects section for screenshots and details!"
  },
  contact: {
    patterns: ["contact", "reach", "email", "phone", "message", "get in touch", "talk"],
    response: "You can reach Arsalan through the contact form on this page, or email him directly at khancreations99@gmail.com. He typically responds within 24 hours."
  },
  hire: {
    patterns: ["hire", "work together", "freelance", "available", "can i hire", "collaboration", "job"],
    response: "Yes, Arsalan is available for freelance projects and job opportunities! He specializes in web development, full-stack apps, and database design. Use the contact form to start a conversation."
  },
  pricing: {
    patterns: ["price", "cost", "charge", "how much", "rate", "budget", "package", "quote"],
    response: "Pricing depends on project scope. Basic websites start around Rs 20,000, advanced full-stack apps from Rs 45,000+. For a custom quote, head to the Packages section or reach out via the contact form."
  },
  github: {
    patterns: ["github", "code", "source", "repository", "repo", "open source"],
    response: "You can explore Arsalan's code on GitHub — the link is in the footer. Some projects include full source code, others are available on request."
  },
  resume: {
    patterns: ["resume", "cv", "download", "qualifications", "credentials"],
    response: "Arsalan's resume is available for download in the Resume section of this page. It covers his education, skills, projects, and certifications."
  },
  services: {
    patterns: ["services", "offer", "provide", "do you do", "web development", "app development", "database", "iot"],
    response: "Arsalan offers Web Development, Mobile App Development, Database Design & Architecture, and AI / IoT Integration. Each service is tailored to client needs."
  },
  greeting: {
    patterns: ["hello", "hi", "hey", "good morning", "good evening", "what's up", "sup"],
    response: "Hey! 👋 I'm Rubi, Arsalan's assistant. What would you like to know — his projects, skills, or how to work with him?"
  },
  help: {
    patterns: ["help", "what can you", "guide", "options", "menu"],
    response: "I can answer questions about: 📁 Projects · 🛠️ Skills · 💼 Services & Pricing · 🎓 Education · 📞 Contact · 📄 Resume. What are you curious about?"
  }
};

// ── Smart matching engine ──────────────────────────────────

function tokenize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);
}

function scoreMatch(inputTokens, patterns) {
  let best = 0;
  for (const pattern of patterns) {
    const pTokens = tokenize(pattern);
    // Exact phrase match — highest weight
    if (inputTokens.join(" ").includes(pTokens.join(" "))) {
      best = Math.max(best, pTokens.length * 3);
      continue;
    }
    // Token overlap scoring
    const overlap = pTokens.filter(t => inputTokens.includes(t)).length;
    const score = (overlap / pTokens.length) * pTokens.length * 2;
    best = Math.max(best, score);
  }
  return best;
}

function findResponse(userInput) {
  const tokens = tokenize(userInput);
  if (tokens.length === 0) return null;

  let bestScore = 0;
  let bestResponse = null;

  for (const [, data] of Object.entries(chatbotData)) {
    const score = scoreMatch(tokens, data.patterns);
    if (score > bestScore) {
      bestScore = score;
      bestResponse = data.response;
    }
  }

  // Minimum confidence threshold
  return bestScore >= 1.5 ? bestResponse : null;
}

// ── DOM & UI ───────────────────────────────────────────────

const chatbotIcon = document.getElementById("chatbotIcon");
const chatbotWindow = document.getElementById("chatbotWindow");
const chatbotClose = document.getElementById("chatbotClose");
const chatbotBody = document.getElementById("chatbotBody");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotSend = document.getElementById("chatbotSend");

chatbotIcon.addEventListener("click", () => {
  const isOpen = chatbotWindow.classList.toggle("active");
  chatbotIcon.setAttribute("aria-expanded", isOpen);
  if (isOpen) chatbotInput.focus();
});

chatbotClose.addEventListener("click", () => {
  chatbotWindow.classList.remove("active");
  chatbotIcon.setAttribute("aria-expanded", false);
});

function typeWrite(element, text, speed = 18) {
  let i = 0;
  element.textContent = "";
  const cursor = document.createElement("span");
  cursor.className = "chat-cursor";
  element.appendChild(cursor);

  const interval = setInterval(() => {
    if (i < text.length) {
      element.insertBefore(document.createTextNode(text[i]), cursor);
      i++;
    } else {
      clearInterval(interval);
      cursor.remove();
    }
  }, speed);
}

function addMessage(text, role) {
  const wrap = document.createElement("div");
  wrap.className = `chat-msg chat-msg--${role}`;

  if (role === "bot") {
    const avatar = document.createElement("div");
    avatar.className = "chat-avatar";
    avatar.textContent = "R";
    wrap.appendChild(avatar);
  }

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble";
  wrap.appendChild(bubble);

  chatbotBody.appendChild(wrap);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;

  if (role === "bot") {
    typeWrite(bubble, text);
  } else {
    bubble.textContent = text;
  }
}

function handleSend() {
  const text = chatbotInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  chatbotInput.value = "";

  setTimeout(() => {
    const response =
      findResponse(text) ||
      "I'm not sure about that one. Try asking about Arsalan's skills, projects, pricing, or contact details — or just say 'help' to see what I can answer!";
    addMessage(response, "bot");
  }, 400);
}

chatbotSend.addEventListener("click", handleSend);
chatbotInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSend();
  }
});

// ── Suggested prompts ──────────────────────────────────────

function renderSuggestions() {
  const suggestions = ["Show me projects", "What are your skills?", "How to hire you?", "Pricing?"];
  const wrap = document.createElement("div");
  wrap.className = "chat-suggestions";
  suggestions.forEach(s => {
    const btn = document.createElement("button");
    btn.className = "chat-suggestion-btn";
    btn.textContent = s;
    btn.addEventListener("click", () => {
      chatbotInput.value = s;
      handleSend();
      wrap.remove();
    });
    wrap.appendChild(btn);
  });
  chatbotBody.appendChild(wrap);
}

// Initial greeting after a short delay
setTimeout(() => {
  addMessage("Hi! I'm Rubi, Arsalan's assistant. How can I help you?", "bot");
  renderSuggestions();
}, 600);