exports.renderCategories = (data) => {
  const results = {}
  data.forEach((obj) => {
      const category = obj.category
      const amount = obj.amount
      if (results[category]) {
        results[category].totalNumber = results[category].totalNumber + 1
        results[category].totalValue = results[category].totalValue + amount
        results[category].averageValue = results[category].totalValue / results[category].totalNumber
      }

      else {
        results[category] = {"totalValue": amount, "totalNumber": 1, "averageValue": amount}
      }
  })
  
  return results
}