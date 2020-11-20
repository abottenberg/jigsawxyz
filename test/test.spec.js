const chai = require('chai');
const rp = require('request-promise');

chai.should();

async function request(path) {
  return rp({
    url: `http://localhost:3000/insights/${path}`,
    method: 'GET',
    json: true,
    resolveWithFullResponse: true, // promise resolves with full response not just body. 
    simple: false   // ensures promise resolves even if statusCode is not 200 series.
  });
}

describe('Insights Service', () => {
  describe('/categories', () => {
    context('GET /insights/categories', () => {
      it('Should return aggregated list of transactions by category', async () => {
        const response = await request('/categories');
        response.statusCode.should.equal(200);
        response.body.should.be.a('object');
      });
    });
  });
  describe('/cashflow', () => {
    context('GET /insights/cashflow', () => {
      it('Should return a daily cashflow of all transactions grouped by day', async () => {
        const response = await request('/categories');
        response.statusCode.should.equal(200);
        response.body.should.be.a('object');
      });
    });
  });
});
