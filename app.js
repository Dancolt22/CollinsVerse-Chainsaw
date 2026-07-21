// CollinsVerse Project Governance Dashboard Core Script
// Upgraded: Added Theme Toggles and Interactive Dev Inputs Portal

// Default project development data
const DEFAULT_SPRINT_DATA = [
  {
    id: 1,
    title: "Week 1",
    phase: "Phase 1: UI/UX & Architecture",
    approved: true,
    feedback: "Architecture plans and security structures approved by Client Committee. Ready to initiate MVP alpha development.",
    developers: [
      {
        name: "Liam Sterling",
        role: "Frontend / Mobile Lead",
        avatar: "LS",
        hoursLogged: 42,
        commits: [
          { hash: "cv-f1042", message: "Initialize React Native template and base security storage wrapper" },
          { hash: "cv-f1059", message: "Configure dev and staging environments on AWS Cognito" }
        ],
        tasks: [
          { text: "Configure React Native template with core navigation libraries", status: "Completed" },
          { text: "Configure environment variables for AWS development environments", status: "Completed" },
          { text: "Set up native security storage configuration for biometric credentials", status: "Completed" }
        ]
      },
      {
        name: "Dr. Cynthia Vance",
        role: "Backend / Database Engineer",
        avatar: "CV",
        hoursLogged: 45,
        commits: [
          { hash: "cv-b1081", message: "Draft postgres schemas for security logs and dispatch indexes" },
          { hash: "cv-b1103", message: "Dockerize base microservices with authentication gateways" }
        ],
        tasks: [
          { text: "Design Postgres schema for User, Driver, Escort, and Dispatch logs", status: "Completed" },
          { text: "Create base Docker-compose setup for microservices development", status: "Completed" },
          { text: "Construct auth endpoints for JWT token creation and secure validations", status: "Completed" }
        ]
      },
      {
        name: "Marcus Chen",
        role: "UI/UX Designer & Mobile Dev",
        avatar: "MC",
        hoursLogged: 38,
        commits: [
          { hash: "cv-d1012", message: "Figma: Create design guidelines and base wireframe system" }
        ],
        tasks: [
          { text: "Design Figma wireframes for passenger ride request screen", status: "Completed" },
          { text: "Create design style guide (typography, slate colors, buttons)", status: "Completed" },
          { text: "Develop high-security dispatcher web admin wireframe layout", status: "Completed" }
        ]
      },
      {
        name: "Elena Rostova",
        role: "Security, Maps & Telemetry Lead",
        avatar: "ER",
        hoursLogged: 44,
        commits: [
          { hash: "cv-s1192", message: "Configure core sockets listener for incoming telemetry feeds" },
          { hash: "cv-s1201", message: "Integrate native check wrappers for hardware checksums" }
        ],
        tasks: [
          { text: "Research GPS telemetry listener performance and construct data buffer logic", status: "Completed" },
          { text: "Create base module check structure for hardware fingerprint checking", status: "Completed" },
          { text: "Design SMS fallback architecture using Twilio and clean gateways", status: "Completed" }
        ]
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
        name: "Liam Sterling",
        role: "Frontend / Mobile Lead",
        avatar: "LS",
        hoursLogged: 48,
        commits: [
          { hash: "cv-f2031", message: "Build native PIN pad layout and secure biometric hooks" },
          { hash: "cv-f2048", message: "Configure Google Maps SDK viewport updates for navigation views" }
        ],
        tasks: [
          { text: "Develop secure PIN pad lock screen for passenger application login", status: "Completed" },
          { text: "Integrate Google Maps SDK onto iOS and Android workspace screens", status: "Completed" },
          { text: "Build offline cache storage configurations for local security routes", status: "Completed" },
          { text: "Configure real-time transit status banner layout", status: "Completed" }
        ]
      },
      {
        name: "Dr. Cynthia Vance",
        role: "Backend / Database Engineer",
        avatar: "CV",
        hoursLogged: 46,
        commits: [
          { hash: "cv-b2099", message: "Implement socket route broadcasters and coordinate handlers" }
        ],
        tasks: [
          { text: "Develop WebSocket tracking handler server-side inside Microservice A", status: "Completed" },
          { text: "Establish secure vehicle tracking databases indexes", status: "Completed" },
          { text: "Integrate third-party dispatch message routing webhook receivers", status: "Completed" }
        ]
      },
      {
        name: "Marcus Chen",
        role: "UI/UX Designer & Mobile Dev",
        avatar: "MC",
        hoursLogged: 40,
        commits: [
          { hash: "cv-d2055", message: "Figma: Interactive prototype linkages for SOS gestures" }
        ],
        tasks: [
          { text: "Design Figma wireframes for Driver App active escorts screens", status: "Completed" },
          { text: "Prototype interactive SOS alert triggers and physical gestures", status: "Completed" },
          { text: "Verify color contrast and element sizes comply with WCAG AA ratings", status: "Completed" }
        ]
      },
      {
        name: "Elena Rostova",
        role: "Security, Maps & Telemetry Lead",
        avatar: "ER",
        hoursLogged: 50,
        commits: [
          { hash: "cv-s2210", message: "Verify kernel check hashes and secure signature checksum verification" }
        ],
        tasks: [
          { text: "Implement real-time GPS telemetry listener receiving location points", status: "Completed" },
          { text: "Write hardware fingerprint signature validation inside kernels", status: "Completed" },
          { text: "Construct SMS fallback parser decoding SMS strings when offline", status: "Completed" }
        ]
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
        name: "Liam Sterling",
        role: "Frontend / Mobile Lead",
        avatar: "LS",
        hoursLogged: 44,
        commits: [
          { hash: "cv-f3011", message: "Hook biometric triggers inside authentication controller callbacks" }
        ],
        tasks: [
          { text: "Integrate driver active transit panel with live dispatch controls", status: "In Review" },
          { text: "Set up secure biometrics authorization modal using native face-id", status: "Completed" },
          { text: "Incorporate emergency trigger actions to wipe localized caching", status: "Completed" }
        ]
      },
      {
        name: "Dr. Cynthia Vance",
        role: "Backend / Database Engineer",
        avatar: "CV",
        hoursLogged: 49,
        commits: [
          { hash: "cv-b3021", message: "Draft routing queries and encrypt tracking coordinates" }
        ],
        tasks: [
          { text: "Deploy microservices telemetry listeners to staging cluster", status: "Completed" },
          { text: "Implement AES 256-bit route data hashing before saving to DB", status: "In Progress" },
          { text: "Optimize Postgres indexing on coordinates to handle 10k messages/sec", status: "Completed" }
        ]
      },
      {
        name: "Marcus Chen",
        role: "UI/UX Designer & Mobile Dev",
        avatar: "MC",
        hoursLogged: 36,
        commits: [
          { hash: "cv-d3090", message: "Optimize dispatcher layout grids based on admin screen size guidelines" }
        ],
        tasks: [
          { text: "Refine high-fidelity prototype flows for dispatch team approvals", status: "Completed" },
          { text: "Incorporate user review comments into security dispatcher web layouts", status: "Completed" },
          { text: "Establish responsive grid styles for dispatcher admin screen designs", status: "Completed" }
        ]
      },
      {
        name: "Elena Rostova",
        role: "Security, Maps & Telemetry Lead",
        avatar: "ER",
        hoursLogged: 52,
        commits: [
          { hash: "cv-s3081", message: "Conduct SQL injection review and finalize fingerprinting calls" }
        ],
        tasks: [
          { text: "Integrate hardware fingerprint check into the mobile application", status: "Completed" },
          { text: "Verify GPS coordinates fallback triggers SMS dispatch channels", status: "In Progress" },
          { text: "Conduct security review of REST APIs looking for SQLi and XSS", status: "Completed" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Week 4",
    phase: "Phase 4: Audits & Deployment",
    approved: false,
    feedback: "",
    developers: [
      {
        name: "Liam Sterling",
        role: "Frontend / Mobile Lead",
        avatar: "LS",
        hoursLogged: 0,
        commits: [],
        tasks: [
          { text: "Run React Native manual performance tests on iPhone 15 & Pixel 8", status: "Pending" },
          { text: "Write unit tests verifying offline caching encrypts local data", status: "Pending" },
          { text: "Deploy TestFlight build for client/investor user auditing", status: "Pending" }
        ]
      },
      {
        name: "Dr. Cynthia Vance",
        role: "Backend / Database Engineer",
        avatar: "CV",
        hoursLogged: 0,
        commits: [],
        tasks: [
          { text: "Conduct backend performance load tests up to 5,000 concurrent clients", status: "Pending" },
          { text: "Draft architectural design documents for handover documentation", status: "Pending" },
          { text: "Migrate postgres databases into cloud production instances", status: "Pending" }
        ]
      },
      {
        name: "Marcus Chen",
        role: "UI/UX Designer & Mobile Dev",
        avatar: "MC",
        hoursLogged: 0,
        commits: [],
        tasks: [
          { text: "Deliver ultimate exported Figma design assets with redline layouts", status: "Pending" },
          { text: "Assemble visual design specification manual describing animations", status: "Pending" },
          { text: "Validate mobile views display correctly on low-resolution screen sizes", status: "Pending" }
        ]
      },
      {
        name: "Elena Rostova",
        role: "Security, Maps & Telemetry Lead",
        avatar: "ER",
        hoursLogged: 0,
        commits: [],
        tasks: [
          { text: "Run vulnerability scanning tools on backend code repositories", status: "Pending" },
          { text: "Trigger automated penetration tests against the staging network", status: "Pending" },
          { text: "Establish final key rotation guides for API integration tokens", status: "Pending" }
        ]
      }
    ]
  }
];

// Security Passcodes mapping
const DEV_PIN_CODES = {
  0: "1111", // Liam
  1: "2222", // Cynthia
  2: "3333", // Marcus
  3: "4444", // Elena
  "admin": "9999" // Super Admin bypass
};

// App state variables
let sprintData = [];
let activeWeekId = 1;
let currentFilter = 'all';
let currentAuthDevIndex = null; // Currently authenticated developer index

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Load Theme
  loadThemePreference();
  
  // Load Sprint Data
  loadSprintData();
  
  // Render layout elements
  renderWeeksTimeline();
  renderActiveWeek();
  updateDashboardMetrics();

  // Setup quick filter
  const filterSelect = document.getElementById("quick-filter-select");
  if (filterSelect) {
    filterSelect.addEventListener("change", (e) => {
      currentFilter = e.target.value;
      renderActiveWeek();
    });
  }

  // Set real-time clock
  setInterval(updateSyncClock, 30000);
  updateSyncClock();
});

// Theme Management (Light mode default)
function loadThemePreference() {
  const savedTheme = localStorage.getItem("collinsverse_theme") || "light";
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  const currentTheme = isDark ? "dark" : "light";
  localStorage.setItem("collinsverse_theme", currentTheme);
  updateThemeIcon(currentTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  if (theme === "dark") {
    icon.setAttribute("data-lucide", "sun");
    icon.innerHTML = `<i data-lucide="sun" class="w-5 h-5"></i>`;
  } else {
    icon.setAttribute("data-lucide", "moon");
    icon.innerHTML = `<i data-lucide="moon" class="w-5 h-5"></i>`;
  }
  if (window.lucide) window.lucide.createIcons();
}

// Last Sync Time Display
function updateSyncClock() {
  const syncSpan = document.getElementById("last-sync-time");
  const now = new Date();
  if (syncSpan) {
    syncSpan.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}

// Local Storage Sprint Database management
function loadSprintData() {
  const stored = localStorage.getItem("collinsverse_sprint_data_v2");
  if (stored) {
    try {
      sprintData = JSON.parse(stored);
    } catch (e) {
      console.error("Error parsing stored data, loading defaults.", e);
      sprintData = JSON.parse(JSON.stringify(DEFAULT_SPRINT_DATA));
    }
  } else {
    sprintData = JSON.parse(JSON.stringify(DEFAULT_SPRINT_DATA));
    saveSprintData();
  }
}

function saveSprintData() {
  localStorage.setItem("collinsverse_sprint_data_v2", JSON.stringify(sprintData));
}

// Calculate and update stats counters
function updateDashboardMetrics() {
  let totalTasks = 0;
  let completedTasks = 0;
  let approvedWeeksCount = 0;

  sprintData.forEach(week => {
    if (week.approved) {
      approvedWeeksCount++;
    }
    week.developers.forEach(dev => {
      dev.tasks.forEach(task => {
        totalTasks++;
        if (task.status === 'Completed') {
          completedTasks++;
        }
      });
    });
  });

  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  // Dashboard text values
  const progressText = document.getElementById("overall-progress-text");
  const progressBar = document.getElementById("overall-progress-bar");
  const progressDelta = document.getElementById("progress-delta-text");
  
  if (progressText && progressBar) {
    progressText.innerText = `${progressPercent}%`;
    progressBar.style.width = `${progressPercent}%`;
  }
  if (progressDelta) {
    progressDelta.innerText = `Audit: ${completedTasks} / ${totalTasks} Tasks`;
  }

  // Milestones Release info
  const clearanceText = document.getElementById("clearance-level-text");
  const clearanceDesc = document.getElementById("clearance-desc-text");
  if (clearanceText && clearanceDesc) {
    clearanceText.innerText = `${approvedWeeksCount} / 4`;
    clearanceDesc.innerText = `Commitment Released: ${approvedWeeksCount * 25}%`;
  }

  syncMilestonesUI(approvedWeeksCount);
}

// Sync Milestones Checkpoints visual status cards
function syncMilestonesUI(approvedCount) {
  for (let idx = 0; idx < 4; idx++) {
    const card = document.getElementById(`milestone-card-${idx}`);
    const badge = document.getElementById(`milestone-badge-${idx}`);
    const status = document.getElementById(`milestone-status-${idx}`);
    const icon = document.getElementById(`milestone-icon-${idx}`);
    
    if (!card || !badge) continue;

    const isApproved = sprintData[idx] && sprintData[idx].approved;
    const isPreviousApproved = idx === 0 || (sprintData[idx - 1] && sprintData[idx - 1].approved);

    if (isApproved) {
      card.className = "relative glass-panel rounded-2xl p-5 bg-white dark:bg-slate-900/60 border border-emerald-500/30 flex flex-col justify-between gap-4 shadow-[0_0_15px_rgba(16,185,129,0.08)]";
      badge.className = "text-[10px] font-extrabold text-emerald-700 dark:text-emerald-400 bg-emerald-600/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1";
      badge.innerHTML = `<i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"></i> APPROVED`;
      if (status) {
        status.innerText = "Deposit Released";
        status.className = "text-emerald-700 dark:text-emerald-400 font-extrabold";
      }
    } else if (isPreviousApproved) {
      card.className = "relative glass-panel rounded-2xl p-5 bg-white dark:bg-slate-900/80 border border-blue-500/30 flex flex-col justify-between gap-4 shadow-[0_0_15px_rgba(59,130,246,0.1)] scale-102 z-10";
      badge.className = "text-[10px] font-extrabold text-blue-700 dark:text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1";
      badge.innerHTML = `<i data-lucide="play" class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"></i> ACTIVE`;
      if (status) {
        status.innerText = "Awaiting Review";
        status.className = "text-blue-700 dark:text-blue-400 font-extrabold animate-pulse";
      }
    } else {
      card.className = "relative glass-panel rounded-2xl p-5 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 opacity-50 flex flex-col justify-between gap-4";
      badge.className = "text-[10px] font-extrabold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-500/10 border border-slate-300 dark:border-slate-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1";
      badge.innerHTML = `<i data-lucide="lock" class="w-3.5 h-3.5 text-slate-500 dark:text-slate-400"></i> LOCKED`;
      if (status) {
        status.innerText = "Locked";
        status.className = "text-slate-500 dark:text-slate-400 font-bold";
      }
    }
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render horizontal weekly list
function renderWeeksTimeline() {
  const container = document.getElementById("weeks-tab-container");
  if (!container) return;

  container.innerHTML = "";

  sprintData.forEach(week => {
    const isSelected = week.id === activeWeekId;
    const isApproved = week.approved;
    
    let borderClass = isSelected ? "border-blue-600 dark:border-blue-500 shadow-sm" : "border-slate-200 dark:border-white/5";
    let bgClass = isSelected ? "bg-blue-600/10 dark:bg-blue-500/10" : "bg-white dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/40";
    let textClass = isSelected ? "text-blue-700 dark:text-white font-extrabold" : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200";

    const tab = document.createElement("button");
    tab.className = `flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl border ${borderClass} ${bgClass} ${textClass} transition duration-200`;
    tab.onclick = () => selectWeek(week.id);

    let checkIcon = isApproved 
      ? `<span class="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>`
      : `<span class="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-white/10 text-slate-500"><i data-lucide="clock" class="w-3.5 h-3.5"></i></span>`;

    tab.innerHTML = `
      ${checkIcon}
      <div class="text-left">
        <p class="text-xs uppercase font-extrabold tracking-wider">${week.title}</p>
        <p class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">${week.phase.split(':')[0]}</p>
      </div>
    `;

    container.appendChild(tab);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function selectWeek(weekId) {
  activeWeekId = weekId;
  renderWeeksTimeline();
  renderActiveWeek();
}

// Render dynamic developer performance cards of active week
function renderActiveWeek() {
  const container = document.getElementById("weekly-sprint-container");
  if (!container) return;

  const currentWeek = sprintData.find(w => w.id === activeWeekId);
  if (!currentWeek) return;

  let cardsHtml = "";

  currentWeek.developers.forEach((dev, devIdx) => {
    
    // Apply quick filters
    let filteredTasks = dev.tasks;
    if (currentFilter === 'completed') {
      filteredTasks = dev.tasks.filter(t => t.status === 'Completed');
    } else if (currentFilter === 'pending') {
      filteredTasks = dev.tasks.filter(t => t.status !== 'Completed');
    }

    const completedCount = dev.tasks.filter(t => t.status === 'Completed').length;
    const progressPct = dev.tasks.length > 0 ? Math.round((completedCount / dev.tasks.length) * 100) : 0;
    
    // Status Badge calculations
    let badgeClass = "status-pending";
    let badgeLabel = "Not Started";

    if (progressPct === 100) {
      badgeClass = "status-completed";
      badgeLabel = "Completed";
    } else if (progressPct > 0) {
      const hasReview = dev.tasks.some(t => t.status === 'In Review');
      if (hasReview) {
        badgeClass = "status-in-review";
        badgeLabel = "In Review";
      } else {
        badgeClass = "status-in-progress";
        badgeLabel = "In Progress";
      }
    } else {
      // Checked if there is at least one active status
      const hasProgress = dev.tasks.some(t => t.status === 'In Progress');
      if (hasProgress) {
        badgeClass = "status-in-progress";
        badgeLabel = "In Progress";
      }
    }

    // Commits log formatting
    let commitsListHtml = "";
    if (dev.commits && dev.commits.length > 0) {
      dev.commits.forEach(commit => {
        commitsListHtml += `
          <div class="flex items-center justify-between text-sm py-1.5 border-b border-slate-200 dark:border-white/5 last:border-b-0">
            <span class="text-blue-600 dark:text-blue-400 font-mono font-bold hover:underline cursor-pointer flex items-center gap-1">
              <i data-lucide="git-commit" class="w-3.5 h-3.5"></i> ${commit.hash}
            </span>
            <span class="text-slate-750 dark:text-slate-250 truncate max-w-[200px]" title="${commit.message}">${commit.message}</span>
          </div>
        `;
      });
    } else {
      commitsListHtml = `<p class="text-slate-550 dark:text-slate-500 text-sm italic">No Git commits logged</p>`;
    }

    // Tasks list layout
    let tasksListHtml = "";
    if (filteredTasks.length > 0) {
      filteredTasks.forEach((task, taskIdx) => {
        const actualIdx = dev.tasks.findIndex(t => t.text === task.text);
        const isChecked = task.status === 'Completed';

        // Custom status badge inside the list
        let statusBadgeColor = "text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800";
        if (task.status === 'Completed') statusBadgeColor = "text-emerald-700 bg-emerald-600/10";
        else if (task.status === 'In Review') statusBadgeColor = "text-blue-700 bg-blue-600/10";
        else if (task.status === 'In Progress') statusBadgeColor = "text-amber-700 bg-amber-600/10";

        tasksListHtml += `
          <div class="task-item flex items-start justify-between gap-3 p-2.5 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-white/5">
            <div class="flex items-start gap-2.5">
              <input 
                type="checkbox" 
                id="task-${devIdx}-${actualIdx}" 
                ${isChecked ? 'checked' : ''} 
                onchange="toggleTask(${devIdx}, ${actualIdx})"
                class="checkbox-custom mt-1 rounded border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-blue-600 focus:ring-blue-500 w-4 h-4"
              >
              <label 
                for="task-${devIdx}-${actualIdx}" 
                class="text-base font-semibold text-slate-850 dark:text-slate-150 cursor-pointer select-none leading-relaxed"
              >
                ${task.text}
              </label>
            </div>
            <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md flex-shrink-0 border border-transparent ${statusBadgeColor}">
              ${task.status}
            </span>
          </div>
        `;
      });
    } else {
      tasksListHtml = `<p class="text-slate-500 text-sm italic p-2">No matching deliverables found</p>`;
    }

    cardsHtml += `
      <!-- Developer Card ${devIdx + 1} -->
      <div class="glass-panel rounded-2xl p-6 bg-white dark:bg-slate-900/40 flex flex-col justify-between gap-5">
        
        <!-- Header Info -->
        <div class="space-y-4">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-3">
              <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-extrabold text-sm tracking-wide shadow-sm">
                ${dev.avatar}
              </div>
              <div>
                <h4 class="font-extrabold text-slate-950 dark:text-white text-xl leading-tight">${dev.name}</h4>
                <p class="text-sm text-slate-650 dark:text-slate-350 font-bold">${dev.role}</p>
              </div>
            </div>
            
            <!-- Status Badge -->
            <span class="status-pill ${badgeClass}">
              <span class="pulse-dot"></span>
              ${badgeLabel}
            </span>
          </div>

          <!-- Hours & Micro Progress -->
          <div class="flex items-center justify-between text-sm border-y border-slate-200 dark:border-white/5 py-2.5">
            <div class="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-semibold">
              <i data-lucide="clock" class="w-4 h-4"></i>
              <span>Hours Logged: <strong class="text-slate-900 dark:text-white font-extrabold">${dev.hoursLogged} hrs</strong></span>
            </div>
            <div class="flex items-center gap-2 font-bold">
              <span class="text-slate-550 dark:text-slate-350">Week Progress:</span>
              <strong class="text-blue-600 dark:text-blue-400 font-mono">${progressPct}%</strong>
            </div>
          </div>
        </div>

        <!-- Task Checklist Matrix -->
        <div class="space-y-3">
          <span class="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Deliverable Checklist</span>
          <div class="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 rounded-xl p-2.5 space-y-1.5 max-h-[190px] overflow-y-auto">
            ${tasksListHtml}
          </div>
        </div>

        <!-- Git Commit Log Summary -->
        <div class="space-y-3">
          <span class="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Governance Commit Log</span>
          <div class="bg-slate-100/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 rounded-xl px-3 py-2.5 space-y-1.5">
            ${commitsListHtml}
          </div>
        </div>

      </div>
    `;
  });

  const isApproved = currentWeek.approved;
  const feedbackValue = currentWeek.feedback || "";
  const approvalCardClass = isApproved 
    ? "border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.03)]" 
    : "border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40";

  container.innerHTML = `
    <div class="week-tab-content space-y-8">
      
      <!-- Week Details banner -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-6 shadow-sm">
        <div>
          <span class="text-[10px] font-bold tracking-widest bg-blue-600/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 px-2.5 py-0.5 rounded-full uppercase">
            ACTIVE REVIEW MODULE
          </span>
          <h3 class="text-2xl font-black text-slate-900 dark:text-white mt-2 flex items-center gap-2">
            ${currentWeek.title} — ${currentWeek.phase}
          </h3>
          <p class="text-base text-slate-650 dark:text-slate-350 mt-1 font-semibold">Toggling checkboxes updates deliverable check-offs. Click 'Dev Input Terminal' to commit updates.</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="text-right">
            <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Sprint Approval Status</span>
            <span class="text-base font-extrabold ${isApproved ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-500'}">
              ${isApproved ? '✓ APPROVED BY CLIENT' : '⧗ AWAITING CLIENT AUDIT'}
            </span>
          </div>
        </div>
      </div>

      <!-- Developer Matrix Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        ${cardsHtml}
      </div>

      <!-- Client Sign-Off & CollinsVerse Feedback Loop -->
      <div class="glass-panel rounded-2xl p-6 border ${approvalCardClass} transition duration-300">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 dark:border-white/5 pb-4 mb-4">
          <div>
            <h4 class="font-bold text-slate-955 dark:text-white text-xl flex items-center gap-2">
              <i data-lucide="signature" class="w-5 h-5 text-blue-600 dark:text-blue-400"></i>
              Client Governance Terminal & Phase Clearance
            </h4>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-0.5 font-semibold">Client auditor portal. Sign off on week deliverables to release milestone commitment pools.</p>
          </div>
          <div>
            <span class="text-[10px] bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10 rounded-md px-2.5 py-1 text-slate-600 dark:text-slate-400 font-mono font-bold">
              AUDIT_WEEK_${currentWeek.id}
            </span>
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <label for="client-feedback" class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Client Auditor Review Notes & Feedback
            </label>
            <textarea 
              id="client-feedback" 
              rows="3" 
              placeholder="Enter sprint notes, requested modifications, or approval notes for the engineering team here..."
              class="w-full rounded-xl bg-slate-50 dark:bg-slate-950 px-4 py-3 text-base text-slate-900 dark:text-white placeholder-slate-500 font-semibold transition"
            >${feedbackValue}</textarea>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div class="flex items-center gap-2">
              <div class="relative flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  id="approve-toggle" 
                  ${isApproved ? 'checked' : ''} 
                  class="sr-only peer"
                >
                <div class="w-11 h-6 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600 peer-checked:after:bg-white peer-checked:after:border-emerald-300"></div>
                <span class="ml-3 text-base font-extrabold text-slate-700 dark:text-slate-300 select-none uppercase tracking-wider">
                  Approve Week ${currentWeek.id} Sprint Deliverables
                </span>
              </div>
            </div>

            <button 
              onclick="saveClientReview()"
              class="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-white btn-primary-glow uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <i data-lucide="check-square" class="w-4 h-4"></i>
              Save Governance Review
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

// Toggle checkbox task directly on active week developer card
function toggleTask(devIdx, taskIdx) {
  const currentWeek = sprintData.find(w => w.id === activeWeekId);
  if (!currentWeek) return;

  const task = currentWeek.developers[devIdx].tasks[taskIdx];
  if (!task) return;

  task.status = task.status === 'Completed' ? 'Pending' : 'Completed';

  saveSprintData();
  renderActiveWeek();
  updateDashboardMetrics();
}

// Save Client Feedback and Approval Check
function saveClientReview() {
  const currentWeek = sprintData.find(w => w.id === activeWeekId);
  if (!currentWeek) return;

  const feedbackArea = document.getElementById("client-feedback");
  const approvalToggle = document.getElementById("approve-toggle");

  if (feedbackArea) {
    currentWeek.feedback = feedbackArea.value;
  }
  if (approvalToggle) {
    currentWeek.approved = approvalToggle.checked;
  }

  saveSprintData();
  renderWeeksTimeline();
  renderActiveWeek();
  updateDashboardMetrics();

  showNotification(`Week ${currentWeek.id} review saved.`, currentWeek.approved ? 'success' : 'info');
}

// Notification Alert Engine
function showNotification(message, type = 'info') {
  const alertContainer = document.createElement("div");
  
  let typeStyles = "border-blue-500/30";
  let textPrefix = `<span class="text-blue-600 dark:text-blue-400 font-bold">INFO:</span>`;
  
  if (type === 'success') {
    typeStyles = "border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
    textPrefix = `<span class="text-emerald-600 dark:text-emerald-400 font-bold">✓ SECURITY VERIFIED:</span>`;
  } else if (type === 'error') {
    typeStyles = "border-red-500/30";
    textPrefix = `<span class="text-red-600 dark:text-red-400 font-bold">⚠ ACCESS DENIED:</span>`;
  }

  alertContainer.className = `fixed bottom-6 right-6 z-[200] glass-panel bg-white dark:bg-slate-900 px-5 py-4 rounded-2xl border ${typeStyles} flex items-center gap-3 shadow-lg max-w-md animate-bounce`;
  
  alertContainer.innerHTML = `
    <div class="p-2 bg-blue-600/10 rounded-xl text-blue-600 dark:text-blue-400">
      <i data-lucide="shield-alert" class="w-5 h-5"></i>
    </div>
    <div class="text-xs text-slate-800 dark:text-slate-200 font-bold leading-relaxed">
      ${textPrefix} ${message}
    </div>
  `;

  document.body.appendChild(alertContainer);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    alertContainer.remove();
  }, 4000);
}

// Developer Passcode Modal Handling
function openDevAuthModal() {
  const modal = document.getElementById("auth-modal");
  const pinInput = document.getElementById("auth-pin");
  const errorText = document.getElementById("auth-error");
  
  if (modal && pinInput && errorText) {
    pinInput.value = "";
    errorText.classList.add("hidden");
    modal.classList.remove("hidden");
    pinInput.focus();
  }
}

function closeDevAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.classList.add("hidden");
}

function verifyDevPasscode() {
  const devSelect = document.getElementById("auth-dev-select");
  const pinInput = document.getElementById("auth-pin");
  const errorText = document.getElementById("auth-error");

  if (!devSelect || !pinInput || !errorText) return;

  const selectedDevIndex = parseInt(devSelect.value);
  const enteredPin = pinInput.value.trim();

  // Authentication validation mapping
  const correctPin = DEV_PIN_CODES[selectedDevIndex];
  const adminPin = DEV_PIN_CODES["admin"];

  if (enteredPin === correctPin || enteredPin === adminPin) {
    // Success Authentication
    currentAuthDevIndex = selectedDevIndex;
    closeDevAuthModal();
    openDevDrawer();
  } else {
    // Error feedback
    errorText.classList.remove("hidden");
    pinInput.value = "";
    pinInput.focus();
  }
}

// Developer Drawer Control Center
function openDevDrawer() {
  if (currentAuthDevIndex === null) return;

  const drawer = document.getElementById("dev-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  const title = document.getElementById("drawer-dev-role");
  
  const activeWeekSelect = document.getElementById("dev-week-select");
  if (activeWeekSelect) {
    activeWeekSelect.value = activeWeekId.toString();
  }

  // Find Developer Role details
  const sampleWeek = sprintData[0];
  const devObject = sampleWeek.developers[currentAuthDevIndex];

  if (title) {
    title.innerText = `Updating as: ${devObject.name} (${devObject.role})`;
  }

  // Populate drawer fields
  populateDrawerFields();

  if (drawer && backdrop) {
    backdrop.classList.add("active");
    drawer.classList.add("open");
  }
}

function closeDevDrawer() {
  const drawer = document.getElementById("dev-drawer");
  const backdrop = document.getElementById("drawer-backdrop");

  if (drawer && backdrop) {
    drawer.classList.remove("open");
    backdrop.classList.remove("active");
  }
  currentAuthDevIndex = null;
}

// Populate Drawer Form inputs based on Week selection
function populateDrawerFields() {
  if (currentAuthDevIndex === null) return;

  const activeWeekSelect = document.getElementById("dev-week-select");
  const targetWeekId = parseInt(activeWeekSelect.value);
  const weekObj = sprintData.find(w => w.id === targetWeekId);
  if (!weekObj) return;

  const devObj = weekObj.developers[currentAuthDevIndex];
  
  // Fill hours
  const hoursInput = document.getElementById("dev-hours");
  if (hoursInput) hoursInput.value = devObj.hoursLogged;

  // Fill tasks Checklist list
  const tasksContainer = document.getElementById("drawer-tasks-container");
  if (tasksContainer) {
    tasksContainer.innerHTML = "";
    devObj.tasks.forEach((task, idx) => {
      tasksContainer.innerHTML += `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/5 pb-2 last:border-0 last:pb-0">
          <span class="text-xs font-bold text-slate-800 dark:text-slate-200">${task.text}</span>
          <select id="drawer-task-status-${idx}" class="text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-1 font-bold">
            <option value="Pending" ${task.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="In Progress" ${task.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
            <option value="In Review" ${task.status === 'In Review' ? 'selected' : ''}>In Review</option>
            <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>
        </div>
      `;
    });
  }

  // Fill Commits text area
  const commitsText = document.getElementById("dev-commits");
  if (commitsText) {
    let rawText = "";
    devObj.commits.forEach(c => {
      rawText += `${c.hash}:${c.message}\n`;
    });
    commitsText.value = rawText.trim();
  }
}

// Handle Week drop change inside the update drawer
function onDevWeekChange() {
  populateDrawerFields();
}

// Append new deliverables to developer checklist inside drawer
function addNewTask() {
  if (currentAuthDevIndex === null) return;
  const input = document.getElementById("new-task-text");
  if (!input || !input.value.trim()) return;

  const activeWeekSelect = document.getElementById("dev-week-select");
  const targetWeekId = parseInt(activeWeekSelect.value);
  const weekObj = sprintData.find(w => w.id === targetWeekId);
  if (!weekObj) return;

  const devObj = weekObj.developers[currentAuthDevIndex];
  
  devObj.tasks.push({
    text: input.value.trim(),
    status: 'Pending'
  });

  input.value = "";
  populateDrawerFields();
  showNotification("New deliverable appended to checklist.", "info");
}

// Save Changes committed by developer inside the drawer
function saveDeveloperChanges() {
  if (currentAuthDevIndex === null) return;

  const activeWeekSelect = document.getElementById("dev-week-select");
  const targetWeekId = parseInt(activeWeekSelect.value);
  const weekObj = sprintData.find(w => w.id === targetWeekId);
  if (!weekObj) return;

  const devObj = weekObj.developers[currentAuthDevIndex];

  // Read Hours
  const hoursInput = document.getElementById("dev-hours");
  if (hoursInput) {
    const hoursVal = parseInt(hoursInput.value);
    if (!isNaN(hoursVal) && hoursVal >= 0) {
      devObj.hoursLogged = hoursVal;
    }
  }

  // Read Task Statuses dropdowns
  devObj.tasks.forEach((task, idx) => {
    const selectEl = document.getElementById(`drawer-task-status-${idx}`);
    if (selectEl) {
      task.status = selectEl.value;
    }
  });

  // Read and parse Commits
  const commitsText = document.getElementById("dev-commits");
  if (commitsText) {
    const lines = commitsText.value.split('\n');
    const parsedCommits = [];
    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;
      
      const colonIdx = trimmed.indexOf(':');
      if (colonIdx !== -1) {
        parsedCommits.push({
          hash: trimmed.substring(0, colonIdx).trim(),
          message: trimmed.substring(colonIdx + 1).trim()
        });
      } else {
        // Fallback random hash generators
        const randomHash = "cv-commit-" + Math.floor(1000 + Math.random() * 9000);
        parsedCommits.push({
          hash: randomHash,
          message: trimmed
        });
      }
    });
    devObj.commits = parsedCommits;
  }

  // Save State
  saveSprintData();
  
  // Update view
  renderActiveWeek();
  updateDashboardMetrics();
  closeDevDrawer();

  showNotification(`Development updates committed for ${weekObj.title}.`, 'success');
}

// Lightbox controller
function openLightbox(imgSrc, caption) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  if (lightbox && lightboxImg && lightboxCaption) {
    lightboxImg.src = imgSrc;
    lightboxCaption.innerText = caption;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("flex");
    lightbox.classList.add("hidden");
  }
}
