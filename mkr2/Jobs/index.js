// jobs/index.js

const startAutoSummaryJob = require('./auto-summary.job');

function startScheduleJobs() {
    startAutoSummaryJob();
    // Додайте інші фонові завдання тут, якщо потрібно
}

module.exports = startScheduleJobs;
