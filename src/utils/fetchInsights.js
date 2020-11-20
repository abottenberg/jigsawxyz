const axios = require('axios');

exports.fetchInsights = () => axios.get('http://54.154.227.172:3000/transactions')