exports.renderMonths = (data) => {
    const unordered_results = {}
    data.forEach((obj) => {
        const date = obj.paymentDate.split("T00:00:00.000Z")[0]
        const amount = obj.amount
        if (unordered_results[date]) {
            unordered_results[date].totalNumber = unordered_results[date].totalNumber + 1
            unordered_results[date].totalValue = unordered_results[date].totalValue + amount
            unordered_results[date].averageValue = unordered_results[date].totalValue / unordered_results[date].totalNumber
        }
        
        else {
            unordered_results[date] = {"totalValue": amount, "totalNumber": 1, "averageValue": amount}
        }
    })
    const results = {};
    Object.keys(unordered_results).sort().forEach((key) => {
        results[key] = unordered_results[key];
        });
    return results
}

