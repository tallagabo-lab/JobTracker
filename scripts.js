// Περιμένουμε να φορτώσει το DOM
document.addEventListener("DOMContentLoaded", () => {

  // ===== Landing Page =====
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const getStartedBtn = document.getElementById('getStartedBtn');
  const learnMoreBtn = document.getElementById('learnMoreBtn');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      window.location.href = "signin.html";
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      window.location.href = "signup.html";
    });
  }

  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      window.location.href = "signup.html";
    });
  }

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ===== Sign In Page =====
  const signinForm = document.getElementById('signinForm');
  const exitBtn = document.getElementById('exitBtn');

  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Αποτροπή reload
      // TODO: Εδώ μπορείς να ελέγχεις email/password
      window.location.href = "dashboard.html";
    });
  }

  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      window.location.href = "index.html";
    });
  }

  // ===== Sign Up Page =====
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // TODO: Εδώ μπορείς να ελέγχεις τα δεδομένα
      window.location.href = "dashboard.html";
    });
  }

  // ===== Dashboard Page =====
  const logoutBtn = document.getElementById('logoutBtn');
  const addJobBtn = document.getElementById('addJobBtn');

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      // Προαιρετικά: καθαρισμός session/localStorage
      // localStorage.clear();
      window.location.href = "signin.html";
    });
  }

  if (addJobBtn) {
    addJobBtn.addEventListener('click', () => {
      window.location.href = "addpage.html";
    });
  }

});
// Example data for charts

window.onload = function() {
	
// 1️⃣ Progress Chart (line chart)
const ctx1 = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Applications Submitted',
            data: [1, 2, 1, 2],
            backgroundColor: 'rgba(79, 70, 229, 0.2)',
            borderColor: 'rgba(79, 70, 229, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: true } }
    }
});

// 2️⃣ Status Breakdown Chart (pie chart)
const ctx2 = document.getElementById('statusChart').getContext('2d');
const statusChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['In Progress', 'Interviews', 'Offers'],
        datasets: [{
            data: [1, 1, 0],
            backgroundColor: [
                'rgba(79, 70, 229, 0.7)',
                'rgba(16, 185, 129, 0.7)',
                'rgba(239, 68, 68, 0.7)'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
    }
});

// 3️⃣ Weekly Activity Chart (bar chart)
const ctx3 = document.getElementById('weeklyChart').getContext('2d');
const weeklyChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Applications Submitted',
            data: [0, 1, 0, 1, 0],
            backgroundColor: 'rgba(79, 70, 229, 0.7)'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true }
        }
    }


});
}





