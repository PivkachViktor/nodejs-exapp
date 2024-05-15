// jobs/auto-summary.job.js

const CronJob = require('cron').CronJob;
const autoService = require('../services/auto.service');

function startAutoSummaryJob() {
    const job = new CronJob(
        '*/10 * * * * *', // Кожні 10 секунд для демонстрації
        async () => {
            try {
                const autos = await autoService.find();
                let totalCost = 0;
                autos.items.forEach((auto) => {
                    totalCost += auto.price;
                });
                console.log('Total cost of all cars:', totalCost);
            } catch (err) {
                console.error('Error calculating total cost:', err);
            }
        },
    );

    job.start();
}

module.exports = startAutoSummaryJob;
