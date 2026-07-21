// CollinsVerse Technologies — Weekly Project Log Core Engine

const DEFAULT_SPRINT_DATA = [
  {
    id: 1,
    title: "Week 1",
    phase: "Phase 1: UI/UX & Architecture Design",
    approved: true,
    feedback: "Architecture layout documents and initial database relational tables verified by the advisory board. Relational DB and SMS gateway schemas approved.",
    developers: [
      {
        name: "Victor",
        role: "UI/UX Lead",
        tasks: [
          "Designed high-fidelity Figma layouts for high-security rider onboarding portal",
          "Created dispatcher dashboard navigation controls mapping active escorts grid",
          "Constructed color palette style sheets based on corporate slate identity"
        ],
        proof: { label: "Figma Interactive Prototypes", url: "#" }
      },
      {
        name: "Dan",
        role: "Mobile App Lead",
        tasks: [
          "Initialized React Native repository template with TypeScript guidelines",
          "Linked baseline mapping view layout hooks with Google Maps SDK API keys",
          "Configured local encrypted storage partitions for device biometrics storage keys"
        ],
        proof: { label: "Code Repository Branch", url: "#" }
      },
      {
        name: "Developer 3",
        role: "Backend & Database Engineer",
        tasks: [
          "Drafted PostgreSQL database relational schemas for users and active coordinates logs",
          "Dockerized auth microservice running JWT validator gateways",
          "Configured Redis pub/sub queue infrastructure for fast dispatch message routes"
        ],
        proof: { label: "Relational Database Diagram", url: "#" }
      },
      {
        name: "Developer 4",
        role: "Security & Maps Lead",
        tasks: [
          "Researched hardware fingerprint check signatures for validation protocols",
          "Drafted SMS gateway fallbacks schema using Twilio and clean relays",
          "Conducted transit route GPS telemetry coordinates latency performance tests"
        ],
        proof: { label: "Security System Architecture Docs", url: "#" }
      }
    ]
  },
  {
    id: 2,
    title: "Week 2",
    phase: "Phase 2: Core MVP Integration",
    approved: false,
    feedback: "",
    developers: [
      {
        name: "Victor",
        role: "UI/UX Lead",
        tasks: [
          "Designed driver-app active transit escort maps view wireframes",
          "Prototypes physical gesture triggers for emergency SOS distress button triggers",
          "Completed accessibility review of colors and card layout sizes for senior readability"
        ],
        proof: { label: "Figma Design Assets Export", url: "#" }
      },
      {
        name: "Dan",
        role: "Mobile App Lead",
        tasks: [
          "Coded passenger biometric authorization passcode locks screen layout",
          "Implemented live route updates overlays drawing GPS coordinates paths on map views",
          "Programmed offline cache data wipe algorithms on app suspend events"
        ],
        proof: { label: "Mobile App Demo Video", url: "#" }
      },
      {
        name: "Developer 3",
        role: "Backend & Database Engineer",
        tasks: [
          "Built coordinate message ingestion hooks inside dispatcher tracking service",
          "Configured coordinates database indexes handling up to 5,000 requests per second",
          "Set up WebSockets handlers broadcasting driver location feeds to dispatcher"
        ],
        proof: { label: "Dispatcher WebSockets Specs", url: "#" }
      },
      {
        name: "Developer 4",
        role: "Security & Maps Lead",
        tasks: [
          "Coded secure socket coordinate listeners checking telemetry feeds validity",
          "Written hardware checksum checks verifying mobile device binary signatures",
          "Configured Twilio fallback receiver decoding SMS signals when offline"
        ],
        proof: { label: "SMS Fallback Receiver Code Specs", url: "#" }
      }
    ]
  },
  {
    id: 3,
    title: "Week 3",
    phase: "Phase 3: Dispatch & Telemetry",
    approved: false,
    feedback: "",
    developers: [
      {
        name: "Victor",
        role: "UI/UX Lead",
        tasks: [
          "Refined web dispatcher layout grids optimized for desktop admin view guidelines",
          "Completed passenger profile visual details audit reviews",
          "Incorporate client review comments on button contrast and layout margins"
        ],
        proof: { label: "Figma Sprint 3 Assets", url: "#" }
      },
      {
        name: "Dan",
        role: "Mobile App Lead",
        tasks: [
          "Integrated native Face-ID/Touch-ID API triggers on PIN verification modals",
          "Linked driver active escorts panel displaying dispatch coordinate notifications",
          "Resolved Google Maps API load coordinates caching latency conflicts"
        ],
        proof: { label: "TestFlight Alpha Build (v0.3.0)", url: "#" }
      },
      {
        name: "Developer 3",
        role: "Backend & Database Engineer",
        tasks: [
          "Implemented AES 256-bit cryptography handlers encrypting transit data before DB insertion",
          "Deployed dispatch telemetry services to AWS Kubernetes staging clusters",
          "Set up automated coordinate logging audits monitoring driver connectivity states"
        ],
        proof: { label: "API Cryptographic Key Specs", url: "#" }
      },
      {
        name: "Developer 4",
        role: "Security & Maps Lead",
        tasks: [
          "Integrated physical device hardware checks into the React Native mobile codebase",
          "Conducted network penetration test audits against active staging REST API hosts",
          "Verify coordinates triggers fallback routes redirecting telemetry feeds to SMS gateways"
        ],
        proof: { label: "Security & Penetration Audit Report", url: "#" }
      }
    ]
  },
  {
    id: 4,
    title: "Week 4",
    phase: "Phase 4: Audits & Handover",
    approved: false,
    feedback: "",
    developers: [
      {
        name: "Victor",
        role: "UI/UX Lead",
        tasks: [
          "Assembled ultimate exported Figma design specifications guide booklet",
          "Verified mobile layouts display correctly on low-resolution smaller screens",
          "Drafted visual layout specs describing app navigation transitions"
        ],
        proof: { label: "Figma Handover Specs", url: "#" }
      },
      {
        name: "Dan",
        role: "Mobile App Lead",
        tasks: [
          "Conducted manual load and memory leaks checks on iOS and Android test systems",
          "Prepared build release scripts for Apple App Store and Google Play console submittals",
          "Verified offline caching database encrypts files correctly when device goes offline"
        ],
        proof: { label: "App Handover Files", url: "#" }
      },
      {
        name: "Developer 3",
        role: "Backend & Database Engineer",
        tasks: [
          "Prepared postgres cloud production servers configuration metrics",
          "Completed internal system architectural documentation files describing microservices links",
          "Conducted backend performance tests under load up to 10k concurrent connections"
        ],
        proof: { label: "System Handover Documentation", url: "#" }
      },
      {
        name: "Developer 4",
        role: "Security & Maps Lead",
        tasks: [
          "Completed vulnerability scans on backend docker images and code modules",
          "Authored API token key rotation guidelines and security handbook files",
          "Deployed fallback SMS gateway to production redundancy instances"
        ],
        proof: { label: "Security Handover Guidelines", url: "#" }
      }
    ]
  }
];

let sprintData = [];
let activeWeekId = 1;

document.addEventListener("DOMContentLoaded", () => {
  loadThemePreference();
  loadSprintData();
  renderWeeksTimeline();
  renderActiveWeek();
});

// Load/Toggle Theme Settings
function loadThemePreference() {
  const theme = localStorage.getItem("collinsverse_theme_v3") || "light";
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  updateThemeIcon(theme);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  const currentTheme = isDark ? "dark" : "light";
  localStorage.setItem("collinsverse_theme_v3", currentTheme);
  updateThemeIcon(currentTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  if (theme === "dark") {
    icon.innerHTML = `<i data-lucide="sun" class="w-5 h-5"></i>`;
  } else {
    icon.innerHTML = `<i data-lucide="moon" class="w-5 h-5"></i>`;
  }
  if (window.lucide) window.lucide.createIcons();
}

// Local Storage data sync
function loadSprintData() {
  const stored = localStorage.getItem("collinsverse_sprint_data_v3");
  if (stored) {
    try {
      sprintData = JSON.parse(stored);
    } catch (e) {
      console.error("Local data parse failed, loading default project logs.", e);
      sprintData = JSON.parse(JSON.stringify(DEFAULT_SPRINT_DATA));
    }
  } else {
    sprintData = JSON.parse(JSON.stringify(DEFAULT_SPRINT_DATA));
    saveSprintData();
  }
}

function saveSprintData() {
  localStorage.setItem("collinsverse_sprint_data_v3", JSON.stringify(sprintData));
}

// Render tabs timeline
function renderWeeksTimeline() {
  const container = document.getElementById("weeks-tab-container");
  if (!container) return;

  container.innerHTML = "";

  sprintData.forEach(week => {
    const isSelected = week.id === activeWeekId;
    const isApproved = week.approved;

    let borderStyle = isSelected ? "border-slate-800 dark:border-blue-500 font-extrabold" : "border-slate-200 dark:border-slate-800";
    let bgStyle = isSelected ? "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white" : "bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900";
    
    let badgeText = isApproved 
      ? `<span class="flex items-center gap-1 text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded border border-emerald-300/30">✓ Approved</span>`
      : `<span class="flex items-center gap-1 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase bg-slate-50 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-300/30">Pending</span>`;

    const tab = document.createElement("button");
    tab.className = `flex-grow sm:flex-grow-0 flex items-center justify-between gap-4 px-5 py-3 border-2 rounded-xl text-base ${borderStyle} ${bgStyle} transition duration-150`;
    tab.onclick = () => selectWeek(week.id);
    tab.innerHTML = `
      <span class="tracking-tight">${week.title}</span>
      ${badgeText}
    `;

    container.appendChild(tab);
  });
}

function selectWeek(weekId) {
  activeWeekId = weekId;
  renderWeeksTimeline();
  renderActiveWeek();
}

// Render dynamic developer cards & sign-off loops
function renderActiveWeek() {
  const container = document.getElementById("weekly-sprint-container");
  if (!container) return;

  const currentWeek = sprintData.find(w => w.id === activeWeekId);
  if (!currentWeek) return;

  // Render 4 Developer rows/cards cleanly
  let devCardsHtml = "";

  currentWeek.developers.forEach(dev => {
    // Generate tasks bullet points
    let tasksBullets = "";
    dev.tasks.forEach(task => {
      tasksBullets += `<li class="relative pl-6 before:content-['•'] before:absolute before:left-1 before:text-slate-400 dark:before:text-slate-600 font-medium text-slate-800 dark:text-slate-200">${task}</li>`;
    });

    devCardsHtml += `
      <div class="document-card space-y-4">
        <!-- Developer Profile & Role -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">${dev.name}</h3>
            <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">${dev.role}</p>
          </div>
          <div>
            <span class="text-xs font-bold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-md">
              Verification Active
            </span>
          </div>
        </div>

        <!-- Completed Work Bulletins -->
        <div class="space-y-2">
          <span class="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Completed Tasks Log</span>
          <ul class="space-y-2 text-base">
            ${tasksBullets}
          </ul>
        </div>

        <!-- Single proof link -->
        <div class="pt-3 border-t-2 border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span class="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Verification Link</span>
          <a href="${dev.proof.url}" class="inline-flex items-center gap-1 text-sm font-extrabold text-blue-600 dark:text-blue-400 hover:underline">
            <i data-lucide="external-link" class="w-4 h-4"></i>
            ${dev.proof.label}
          </a>
        </div>
      </div>
    `;
  });

  // Client Sign-off loop parameters
  const isApproved = currentWeek.approved;
  const feedbackValue = currentWeek.feedback || "";
  
  let signoffStatusBanner = isApproved 
    ? `<div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-200 dark:border-emerald-900/50 rounded-xl text-base text-emerald-800 dark:text-emerald-400 font-bold flex items-center gap-2">
         <i data-lucide="check-circle" class="w-5 h-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400"></i>
         ✓ Approved: The deliverables for ${currentWeek.title} have been formally verified and signed off by the client.
       </div>`
    : `<div class="p-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl text-base text-slate-600 dark:text-slate-400 font-semibold flex items-center gap-2">
         <i data-lucide="clock" class="w-5 h-5 flex-shrink-0 text-slate-400"></i>
         ⧗ Pending Review: Awaiting formal sign-off confirmation from the client auditor.
       </div>`;

  let approveButtonText = isApproved 
    ? "Revoke Week Approval" 
    : `Approve Week ${currentWeek.id} Deliverables`;

  let buttonStyles = isApproved
    ? "bg-red-600 hover:bg-red-700 text-white"
    : "btn-primary";

  container.innerHTML = `
    <div class="week-tab-content space-y-8">
      
      <!-- Sprint details metadata header -->
      <div class="bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Active View Details</span>
          <h2 class="text-2xl font-black text-slate-900 dark:text-white mt-1">${currentWeek.title} Log — ${currentWeek.phase}</h2>
        </div>
        <div>
          <span class="text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 px-3 py-1.5 rounded-md uppercase font-mono tracking-wider">
            Report Ready
          </span>
        </div>
      </div>

      <!-- Signoff status banner -->
      ${signoffStatusBanner}

      <!-- Grid of 4 Developer output logs -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${devCardsHtml}
      </div>

      <!-- Simple Weekly Sign-Off Box -->
      <div class="document-card space-y-4">
        <div class="border-b-2 border-slate-100 dark:border-slate-800 pb-3">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <i data-lucide="signature" class="w-5 h-5 text-slate-400"></i>
            Client Review Feedback & Approvals
          </h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Please review the logs above and record notes or sign-off approval checkpoints below.</p>
        </div>

        <div class="space-y-4">
          <div class="space-y-2">
            <label for="client-feedback" class="block text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Review Comments / Feedback</label>
            <textarea 
              id="client-feedback" 
              rows="4" 
              placeholder="Enter details, adjustments requested, or general sprint feedback here..."
              class="w-full rounded-xl px-4 py-3 text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 font-semibold"
            >${feedbackValue}</textarea>
          </div>

          <div class="pt-2 flex items-center justify-end">
            <button 
              onclick="saveClientSignOff()" 
              class="px-6 py-3 rounded-xl font-extrabold text-sm uppercase tracking-wide btn-primary ${buttonStyles}"
            >
              ${approveButtonText}
            </button>
          </div>
        </div>
      </div>

    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Save Feedback & Toggle approval state
function saveClientSignOff() {
  const currentWeek = sprintData.find(w => w.id === activeWeekId);
  if (!currentWeek) return;

  const feedbackArea = document.getElementById("client-feedback");
  if (feedbackArea) {
    currentWeek.feedback = feedbackArea.value;
  }

  // Toggle approval state
  currentWeek.approved = !currentWeek.approved;

  saveSprintData();
  renderWeeksTimeline();
  renderActiveWeek();
  
  // Show standard alert
  showSystemAlert(`Week ${currentWeek.id} log updated. Status: ${currentWeek.approved ? 'Approved' : 'Pending'}`);
}

// Simple system toast popups
function showSystemAlert(message) {
  const toast = document.createElement("div");
  toast.className = "fixed bottom-6 right-6 z-[200] bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 px-5 py-3 rounded-xl border border-slate-700 dark:border-slate-300 text-sm font-bold shadow-lg animate-bounce";
  toast.innerText = message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3500);
}
