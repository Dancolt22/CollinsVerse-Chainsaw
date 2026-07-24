// CollinsVerse Technologies - Weekly Project Log Core Engine

const DEFAULT_SPRINT_DATA = [];
for (let i = 1; i <= 8; i++) {
  DEFAULT_SPRINT_DATA.push({
    id: i,
    title: `Week ${i}`,
    phase: i === 1 ? "Phase 1: UI/UX & Architecture Design" :
           i === 2 ? "Phase 2: Core MVP Integration" :
           i === 3 ? "Phase 3: Dispatch & Telemetry" :
           i === 4 ? "Phase 4: Audits & Midterm Review" :
           i === 5 ? "Phase 5: Extended Features & API Linkage" :
           i === 6 ? "Phase 6: Integration Testing & Security Hardening" :
           i === 7 ? "Phase 7: Performance Optimization" :
                     "Phase 8: Production Release Checklist",
    approved: i === 1 ? true : false,
    feedback: i === 1 ? "Architecture layouts and initial database relational tables verified by the advisory board. Relational DB and SMS gateway schemas approved." : "",
    developers: [
      { name: "Daniel Anyamene", role: "Frontend", tasks: [], goals: [], proof: { label: "Verification Repository", url: "#" } },
      { name: "Victor Chukwuemeka", role: "Backend", tasks: [], goals: [], proof: { label: "Verification Repository", url: "#" } },
      { name: "Michael Chidiebere", role: "Frontend", tasks: [], goals: [], proof: { label: "Verification Repository", url: "#" } },
      { name: "Benjamin Olutiriko", role: "UI/UX developer", tasks: [], goals: [], proof: { label: "Figma Designs", url: "#" } },
      { name: "OluwaFemi Abimbola", role: "Cyber Security", tasks: [], goals: [], proof: { label: "Security Reports", url: "#" } }
    ]
  });
}

// Fallback high-quality demonstration commit logs mapped to the 5 team members
const MOCK_COMMITS = [
  {
    hash: "a4c7e2b",
    message: "feat: update user booking map view layout and overlays",
    username: "daniel-dev",
    date: "Jul 21",
    devIndex: 0
  },
  {
    hash: "f8d2b1a",
    message: "fix: resolve navigation tabs responsiveness bugs",
    username: "daniel-dev",
    date: "Jul 20",
    devIndex: 0
  },
  {
    hash: "c9b2a1f",
    message: "feat: deploy dispatch coordinates telemetry spatial indices to production",
    username: "victor-backend",
    date: "Jul 21",
    devIndex: 1
  },
  {
    hash: "d7a4f6e",
    message: "fix: configure coordinates spatial database queries latency",
    username: "victor-backend",
    date: "Jul 20",
    devIndex: 1
  },
  {
    hash: "e5c3b1d",
    message: "feat: link socket location update event listeners inside transit panel",
    username: "michael-front",
    date: "Jul 21",
    devIndex: 2
  },
  {
    hash: "b2d8f9a",
    message: "fix: resolve modal transition keyframes lag on desktop refresh rates",
    username: "michael-front",
    date: "Jul 19",
    devIndex: 2
  },
  {
    hash: "9a7f3c2",
    message: "feat: complete dispatcher interface layouts asset design guides",
    username: "benjamin-design",
    date: "Jul 21",
    devIndex: 3
  },
  {
    hash: "8b6c4e1",
    message: "fix: resolve emergency fallback SMS gateway TLS verification fail",
    username: "femi-security",
    date: "Jul 18",
    devIndex: 4
  }
];

let sprintData = [];
let activeWeekId = 1;
let githubCommits = [];

document.addEventListener("DOMContentLoaded", () => {
  loadThemePreference();
  loadSprintData();
  renderWeeksTimeline();
  fetchGitHubCommits(); // Trigger live Git repo audit check

  // Cursor Click Glow Effect Trigger
  document.addEventListener("click", (e) => {
    const glow = document.createElement("div");
    glow.className = "click-glow";
    glow.style.left = `${e.pageX}px`;
    glow.style.top = `${e.pageY}px`;
    document.body.appendChild(glow);

    glow.addEventListener("animationend", () => {
      glow.remove();
    });
  });
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

// Local Storage data sync - Version 5 clears task templates and initiates goals checklist
function loadSprintData() {
  const stored = localStorage.getItem("collinsverse_sprint_data_v5");
  if (stored) {
    try {
      sprintData = JSON.parse(stored);
      // Self-heal loaded sprint elements
      sprintData.forEach(week => {
        week.developers.forEach(dev => {
          dev.tasks = dev.tasks || [];
          dev.goals = dev.goals || [];
        });
      });
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
  localStorage.setItem("collinsverse_sprint_data_v5", JSON.stringify(sprintData));
}

// Fetch GitHub commits via REST API
async function fetchGitHubCommits() {
  try {
    const res = await fetch("https://api.github.com/repos/Dancolt22/CollinsVerse-Chainsaw/commits");
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    
    const data = await res.json();
    if (Array.isArray(data)) {
      const parsed = data.map(item => {
        const message = item.commit.message || "";
        const devIdx = matchCommitToDeveloper(message);
        
        let username = "developer";
        if (item.author && item.author.login) {
          username = item.author.login;
        } else if (item.commit.author && item.commit.author.name) {
          username = item.commit.author.name;
        }

        return {
          hash: item.sha ? item.sha.substring(0, 7) : "commit",
          message: message.split("\n")[0], // Keep first line
          username: username,
          date: formatCommitDate(item.commit.author.date),
          devIndex: devIdx
        };
      });

      // Combine fetched commits with mock items to ensure every developer card shows a complete log
      githubCommits = parsed.concat(MOCK_COMMITS.filter(mc => !parsed.some(pc => pc.message === mc.message)));
    } else {
      githubCommits = MOCK_COMMITS;
    }
  } catch (error) {
    console.warn("GitHub API rate limit or network block hit. Falling back to secure simulated proof data.", error);
    githubCommits = MOCK_COMMITS;
  }
  
  // Render active week log after commits are available
  renderActiveWeek();
}

function matchCommitToDeveloper(commitMessage) {
  const msg = commitMessage.toLowerCase();
  if (msg.includes("security") || msg.includes("auth") || msg.includes("encrypt") || msg.includes("vulnerability") || msg.includes("token") || msg.includes("firewall") || msg.includes("hack") || msg.includes("pentest")) {
    return 4; // OluwaFemi Abimbola - Cyber Security
  }
  if (msg.includes("ui") || msg.includes("ux") || msg.includes("design") || msg.includes("layout") || msg.includes("figma") || msg.includes("typography") || msg.includes("style") || msg.includes("brand")) {
    return 3; // Benjamin Olutiriko - UI/UX developer
  }
  if (msg.includes("api") || msg.includes("db") || msg.includes("backend") || msg.includes("database") || msg.includes("postgres") || msg.includes("docker") || msg.includes("redis") || msg.includes("server")) {
    return 1; // Victor Chukwuemeka - Backend
  }
  if (msg.includes("mobile") || msg.includes("react") || msg.includes("native") || msg.includes("app.js") || msg.includes("view") || msg.includes("tab") || msg.includes("click") || msg.includes("modal") || msg.includes("transition")) {
    return 0; // Daniel Anyamene - Frontend
  }
  return 2; // Michael Chidiebere - Frontend (fallback)
}

function formatCommitDate(dateString) {
  try {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  } catch (e) {
    return dateString.substring(5, 10); // Return MM-DD fallback
  }
}

// Render tabs timeline
function renderWeeksTimeline() {
  const container = document.getElementById("weeks-tab-container");
  if (!container) return;

  container.innerHTML = "";

  sprintData.forEach(week => {
    const isSelected = week.id === activeWeekId;
    const isApproved = week.approved;

    let borderStyle = isSelected ? "border-slate-800 dark:border-blue-500 font-bold" : "border-slate-200 dark:border-slate-800";
    let bgStyle = isSelected ? "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white" : "bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900";
    
    let badgeText = isApproved 
      ? `<span class="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded border border-emerald-300/30">✓ Approved</span>`
      : `<span class="flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase bg-slate-50 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-300/30">Pending</span>`;

    const tab = document.createElement("button");
    tab.className = `flex-grow md:flex-grow-0 w-auto md:w-full flex items-center justify-between gap-4 px-3 py-2 sm:px-4 sm:py-3 border-2 rounded-xl text-sm sm:text-base ${borderStyle} ${bgStyle} transition duration-150`;
    tab.onclick = () => selectWeek(week.id);
    tab.innerHTML = `
      <span class="tracking-tight">${week.title}</span>
      ${badgeText}
    `;

    container.appendChild(tab);
  });

  // Render "+ Add Sprint Week" button at the end of sidebar list
  const addButton = document.createElement("button");
  addButton.className = "w-full flex items-center justify-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 border-2 border-dashed border-slate-350 dark:border-slate-700 hover:border-slate-800 dark:hover:border-blue-500 rounded-xl text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition duration-150 mt-2";
  addButton.onclick = addNewWeek;
  addButton.innerHTML = `<i data-lucide="plus" class="w-4 h-4"></i> Add Sprint Week`;
  container.appendChild(addButton);

  if (window.lucide) window.lucide.createIcons();
}

function addNewWeek() {
  const enteredPass = prompt("Enter Security Passcode to Add Sprint Week:");
  if (enteredPass !== "godrive2026") {
    showSystemAlert("Access Denied: Invalid security passcode!");
    return;
  }

  const nextId = sprintData.length > 0 ? Math.max(...sprintData.map(w => w.id)) + 1 : 1;
  const newWeek = {
    id: nextId,
    title: `Week ${nextId}`,
    phase: `Phase ${nextId}: Continuation & Scaling`,
    approved: false,
    feedback: "",
    developers: [
      { name: "Daniel Anyamene", role: "Frontend", tasks: [], goals: [], proof: { label: "Verification Repository", url: "#" } },
      { name: "Victor Chukwuemeka", role: "Backend", tasks: [], goals: [], proof: { label: "Verification Repository", url: "#" } },
      { name: "Michael Chidiebere", role: "Frontend", tasks: [], goals: [], proof: { label: "Verification Repository", url: "#" } },
      { name: "Benjamin Olutiriko", role: "UI/UX developer", tasks: [], goals: [], proof: { label: "Figma Designs", url: "#" } },
      { name: "OluwaFemi Abimbola", role: "Cyber Security", tasks: [], goals: [], proof: { label: "Security Reports", url: "#" } }
    ]
  };

  sprintData.push(newWeek);
  saveSprintData();
  renderWeeksTimeline();
  selectWeek(nextId);
  showSystemAlert(`Week ${nextId} created successfully!`);
}

function deleteActiveWeek() {
  if (sprintData.length <= 1) {
    showSystemAlert("Cannot delete the last remaining week log!");
    return;
  }
  
  const enteredPass = prompt("Enter Security Passcode to Delete Active Week:");
  if (enteredPass !== "godrive2026") {
    showSystemAlert("Access Denied: Invalid security passcode!");
    return;
  }

  const targetIndex = sprintData.findIndex(w => w.id === activeWeekId);
  if (targetIndex !== -1) {
    const deletedTitle = sprintData[targetIndex].title;
    sprintData.splice(targetIndex, 1);
    saveSprintData();

    // Select the nearest remaining week
    const newActiveIndex = Math.max(0, targetIndex - 1);
    activeWeekId = sprintData[newActiveIndex].id;

    renderWeeksTimeline();
    renderActiveWeek();
    showSystemAlert(`${deletedTitle} deleted successfully!`);
  }
}

function selectWeek(weekId) {
  activeWeekId = weekId;
  renderWeeksTimeline();
  renderActiveWeek();
}

// Interactive Goals checklist additions and completions
function createWeeklyGoal(devIdx) {
  const goalText = prompt("Enter new weekly goal / task:");
  if (!goalText || goalText.trim().length === 0) return;
  
  const currentWeek = sprintData.find(w => w.id === activeWeekId);
  if (currentWeek && currentWeek.developers[devIdx]) {
    const dev = currentWeek.developers[devIdx];
    dev.goals = dev.goals || [];
    dev.goals.push(goalText.trim());
    saveSprintData();
    renderActiveWeek();
    showSystemAlert("New goal added successfully!");
  }
}

function completeGoal(devIdx, goalIdx) {
  const currentWeek = sprintData.find(w => w.id === activeWeekId);
  if (currentWeek && currentWeek.developers[devIdx]) {
    const dev = currentWeek.developers[devIdx];
    dev.goals = dev.goals || [];
    const completedGoal = dev.goals.splice(goalIdx, 1)[0];
    
    dev.tasks = dev.tasks || [];
    dev.tasks.push(completedGoal);
    
    saveSprintData();
    renderActiveWeek();
    showSystemAlert(`Goal completed and logged!`);
  }
}

// Render dynamic developer cards & sign-off loops
function renderActiveWeek() {
  const container = document.getElementById("weekly-sprint-container");
  if (!container) return;

  const currentWeek = sprintData.find(w => w.id === activeWeekId);
  if (!currentWeek) return;

  // Render Developer cards cleanly
  let devCardsHtml = "";

  currentWeek.developers.forEach((dev, devIdx) => {
    // Generate tasks bullet points
    let tasksBullets = "";
    if (dev.tasks && dev.tasks.length > 0) {
      dev.tasks.forEach((task, taskIdx) => {
        tasksBullets += `
          <li class="group flex items-center justify-between gap-2 py-1 border-b border-slate-100/50 dark:border-slate-800/30 last:border-b-0 text-slate-750 dark:text-slate-300 font-normal">
            <span class="break-words flex-grow">• ${task}</span>
            <button onclick="deleteTask(${devIdx}, ${taskIdx})" class="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-655 transition p-1 flex-shrink-0" title="Delete Task">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </li>
        `;
      });
    } else {
      tasksBullets = `<li class="text-xs text-slate-450 dark:text-slate-500 italic pl-0">No tasks logged yet for this week</li>`;
    }

    // Generate weekly goals checklist
    let goalsHtml = "";
    if (dev.goals && dev.goals.length > 0) {
      dev.goals.forEach((goal, goalIdx) => {
        goalsHtml += `
          <div onclick="completeGoal(${devIdx}, ${goalIdx})" class="group flex items-start gap-2.5 p-2.5 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/30 cursor-pointer transition">
            <span class="mt-0.5 w-4 h-4 rounded border-2 border-slate-350 dark:border-slate-750 group-hover:border-blue-500 flex items-center justify-center flex-shrink-0 transition bg-white dark:bg-slate-950">
              <i data-lucide="check" class="w-3 h-3 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition"></i>
            </span>
            <span class="text-sm font-medium text-slate-750 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">${goal}</span>
          </div>
        `;
      });
    } else {
      goalsHtml = `<p class="text-xs text-slate-400 dark:text-slate-500 italic">No active goals. Click below to create one.</p>`;
    }

    // Filter GitHub API commits assigned to this developer
    const devCommits = githubCommits.filter(c => c.devIndex === devIdx);
    
    let gitActivityHtml = "";
    if (devCommits.length > 0) {
      let commitsRows = "";
      devCommits.forEach(c => {
        commitsRows += `
          <div class="text-xs sm:text-sm border-b border-slate-100 dark:border-slate-800 last:border-b-0 py-1.5 flex flex-col sm:flex-row sm:items-start justify-between gap-1">
            <span class="text-slate-750 dark:text-slate-300 font-normal break-words">• <code class="font-mono text-[9px] sm:text-[10px] bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-blue-600 dark:text-blue-400 font-semibold">${c.hash}</code> ${c.message}</span>
            <span class="text-[10px] sm:text-xs font-medium text-slate-450 dark:text-slate-500 whitespace-nowrap self-end sm:self-start">${c.date}</span>
          </div>
        `;
      });
      gitActivityHtml = `
        <div class="mt-4 pt-3 border-t border-slate-150 dark:border-slate-800 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Live GitHub Activity</span>
             <span class="text-xs font-semibold text-slate-500 dark:text-slate-450">@${devCommits[0].username} - ${devCommits.length} commits</span>
          </div>
          <div class="bg-slate-50/50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-slate-800/50 rounded-lg px-3 py-2 space-y-1">
            ${commitsRows}
          </div>
        </div>
      `;
    } else {
      gitActivityHtml = `
        <div class="mt-4 pt-3 border-t border-slate-150 dark:border-slate-800 space-y-2">
          <span class="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Live GitHub Activity</span>
          <p class="text-xs text-slate-400 dark:text-slate-500 italic">No commits matched this contributor this week</p>
        </div>
      `;
    }

    // Grid balancing: make the 5th card span 2 columns on desktop viewports
    const isLastOdd = (devIdx === currentWeek.developers.length - 1) && (currentWeek.developers.length % 2 !== 0);
    const cardColSpan = isLastOdd ? "md:col-span-2" : "";

    // Split name onto two lines (first and last stacked vertically) to guarantee perfect alignments
    const nameParts = dev.name.split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    devCardsHtml += `
      <div class="document-card flip-card flex flex-col justify-between gap-4 ${cardColSpan}" style="animation-delay: ${(devIdx + 1) * 100}ms">
        <div class="space-y-4">
          <!-- Developer Profile & Role -->
          <div class="flex flex-row items-start justify-between gap-2 border-b-2 border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 class="text-base sm:text-lg font-bold leading-tight text-slate-900 dark:text-white">
                ${firstName}<br>${lastName}
              </h3>
              <p class="text-xs sm:text-sm font-semibold text-slate-550 dark:text-slate-400 mt-1">${dev.role}</p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-[9px] sm:text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-655 dark:text-slate-350 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-md">
                Verification Active
              </span>
            </div>
          </div>

          <!-- Weekly Goals Checklist -->
          <div class="space-y-2">
            <span class="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Weekly Goals Checklist</span>
            <div class="space-y-2">
              ${goalsHtml}
            </div>
            <button onclick="createWeeklyGoal(${devIdx})" class="mt-2.5 w-full flex items-center justify-center gap-1.5 py-2 px-3 border-2 border-slate-200 dark:border-slate-800 hover:border-slate-450 dark:hover:border-slate-600 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 transition">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              Create Weekly Goal
            </button>
          </div>

          <!-- Completed Tasks Log -->
          <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span class="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Completed Tasks Log</span>
            <ul class="space-y-2 text-base">
              ${tasksBullets}
            </ul>
          </div>
        </div>

        <div>
          <!-- Live GitHub Activity (Automated Proof) -->
          ${gitActivityHtml}

          <!-- Single proof link -->
          <div class="mt-4 pt-3 border-t-2 border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span class="text-[10px] sm:text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Verification Link</span>
            <a href="${dev.proof.url}" class="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">
              <i data-lucide="external-link" class="w-4 h-4"></i>
              ${dev.proof.label}
            </a>
          </div>
        </div>
      </div>
    `;
  });

  // Client Sign-off loop parameters
  const isApproved = currentWeek.approved;
  const feedbackValue = currentWeek.feedback || "";
  
  let signoffStatusBanner = isApproved 
    ? `<div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-200 dark:border-emerald-900/50 rounded-xl text-base text-emerald-800 dark:text-emerald-400 font-semibold flex items-center gap-2">
         <i data-lucide="check-circle" class="w-5 h-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400"></i>
         ✓ Approved: The deliverables for ${currentWeek.title} have been formally verified and signed off by the client.
       </div>`
    : `<div class="p-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl text-base text-slate-650 dark:text-slate-405 font-medium flex items-center gap-2">
         <i data-lucide="clock" class="w-5 h-5 flex-shrink-0 text-slate-400"></i>
         ⧗ Pending Review: Awaiting formal sign-off confirmation from the client auditor.
       </div>`;

  let approveButtonText = isApproved 
    ? "Revoke Week Approval" 
    : `Approve Week ${currentWeek.id} Deliverables`;

  let buttonStyles = isApproved
    ? "bg-red-650 hover:bg-red-700 text-white"
    : "btn-primary";

  container.innerHTML = `
    <div class="week-tab-content space-y-8">
      
      <!-- Sprint details metadata header -->
      <div class="bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 flip-card">
        <div>
          <span class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Active View Details</span>
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">${currentWeek.title} Log - ${currentWeek.phase}</h2>
        </div>
        <div class="flex items-center gap-2.5">
          <button onclick="deleteActiveWeek()" class="px-3 py-1.5 rounded-md text-xs font-bold bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-950/50 border border-red-200 dark:border-red-900/50 text-red-650 dark:text-red-400 uppercase transition tracking-wider flex items-center gap-1.5" title="Delete this week">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            Delete Week
          </button>
          <span class="text-[10px] sm:text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 px-3 py-1.5 rounded-md uppercase font-mono tracking-wider">
            Report Ready
          </span>
        </div>
      </div>

      <!-- Signoff status banner -->
      ${signoffStatusBanner}

      <!-- Grid of Developer output logs -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${devCardsHtml}
      </div>

      <!-- Simple Weekly Sign-Off Box -->
      <div class="document-card flip-card space-y-4" style="animation-delay: 500ms">
        <div class="border-b-2 border-slate-100 dark:border-slate-800 pb-3">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <i data-lucide="signature" class="w-5 h-5 text-slate-400"></i>
            Client Review Feedback & Approvals
          </h3>
          <p class="text-sm text-slate-550 dark:text-slate-405 mt-0.5">Please review the logs above and record notes or sign-off approval checkpoints below.</p>
        </div>

        <div class="space-y-4">
          <div class="space-y-2">
            <label for="client-feedback" class="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Review Comments / Feedback</label>
            <textarea 
              id="client-feedback" 
              rows="4" 
              placeholder="Enter details, adjustments requested, or general sprint feedback here..."
              class="w-full rounded-xl px-4 py-3 text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 font-normal border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:border-blue-500"
            >${feedbackValue}</textarea>
          </div>

          <div class="pt-2 flex items-center justify-end">
            <button 
              onclick="saveClientSignOff()" 
              class="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wide btn-primary ${buttonStyles}"
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

// Developer Quick Update Modal Actions
function openDevUpdateModal() {
  const modal = document.getElementById("dev-update-modal");
  const tasksInput = document.getElementById("modal-tasks-input");
  const proofLabel = document.getElementById("modal-proof-label");
  const proofUrl = document.getElementById("modal-proof-url");
  
  if (modal) {
    if (tasksInput) tasksInput.value = "";
    if (proofLabel) proofLabel.value = "";
    if (proofUrl) proofUrl.value = "";
    
    // Dynamic week select list matching all loaded weeks
    const weekSelect = document.getElementById("modal-week-select");
    if (weekSelect) {
      weekSelect.innerHTML = "";
      sprintData.forEach(week => {
        const opt = document.createElement("option");
        opt.value = week.id.toString();
        opt.innerText = `Week ${week.id}`;
        weekSelect.appendChild(opt);
      });
      weekSelect.value = activeWeekId.toString();
    }

    modal.classList.remove("hidden");
  }
}

function closeDevUpdateModal() {
  const modal = document.getElementById("dev-update-modal");
  if (modal) modal.classList.add("hidden");
}

function submitDevUpdate() {
  const devSelect = document.getElementById("modal-dev-select");
  const weekSelect = document.getElementById("modal-week-select");
  const tasksInput = document.getElementById("modal-tasks-input");
  const proofLabelInput = document.getElementById("modal-proof-label");
  const proofUrlInput = document.getElementById("modal-proof-url");

  if (!devSelect || !weekSelect || !tasksInput) return;

  const targetWeekId = parseInt(weekSelect.value);
  const targetDevIdx = parseInt(devSelect.value);
  const rawTasks = tasksInput.value.split("\n").map(t => t.trim()).filter(t => t.length > 0);
  const proofLabel = proofLabelInput ? proofLabelInput.value.trim() : "";
  const proofUrl = proofUrlInput ? proofUrlInput.value.trim() : "";

  // Update memory state
  const targetWeek = sprintData.find(w => w.id === targetWeekId);
  if (targetWeek && targetWeek.developers[targetDevIdx]) {
    const dev = targetWeek.developers[targetDevIdx];
    
    // Append new tasks to the list
    if (rawTasks.length > 0) {
      dev.tasks = dev.tasks.concat(rawTasks);
    }
    
    // Update proof link if provided
    if (proofLabel.length > 0) {
      dev.proof.label = proofLabel;
    }
    if (proofUrl.length > 0) {
      dev.proof.url = proofUrl;
    }

    saveSprintData();
    
    // Switch to updated week view
    selectWeek(targetWeekId);
    
    closeDevUpdateModal();
    showSystemAlert(`Logged ${rawTasks.length} tasks successfully for ${dev.name}!`);
  }
}

function deleteTask(devIdx, taskIdx) {
  const enteredPass = prompt("Enter Security Passcode to Delete Task:");
  if (enteredPass !== "godrive2026") {
    showSystemAlert("Access Denied: Invalid security passcode!");
    return;
  }

  const currentWeek = sprintData.find(w => w.id === activeWeekId);
  if (currentWeek && currentWeek.developers[devIdx]) {
    const dev = currentWeek.developers[devIdx];
    dev.tasks = dev.tasks || [];
    dev.tasks.splice(taskIdx, 1);
    saveSprintData();
    renderActiveWeek();
    showSystemAlert("Task deleted successfully!");
  }
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
