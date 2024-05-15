

const startAutoSummaryJob = require('./auto-summary.job');

function startScheduleJobs() {
    startAutoSummaryJob();
    
}

module.exports = startScheduleJobs;
