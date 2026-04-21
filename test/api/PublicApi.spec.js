'use strict';

const expect = require('expect.js');
const sinon = require('sinon');
const NitrozenApi = require(process.cwd() + '/src/index');

describe('PublicApi', function() {
  let apiClient;
  let instance;
  let callApiStub;

  beforeEach(function() {
    apiClient = new NitrozenApi.ApiClient();
    instance = new NitrozenApi.PublicApi(apiClient);
    callApiStub = sinon.stub(apiClient, 'callApi');
  });

  afterEach(function() {
    callApiStub.restore();
  });

  describe('publicProjectsSlugEntriesGet', function() {
    it('throws when slug is null', function() {
      expect(function() {
        instance.publicProjectsSlugEntriesGet(null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls GET /public/projects/{slug}/entries with no auth', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.publicProjectsSlugEntriesGet('my-project');
      expect(callApiStub.calledOnce).to.be(true);
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/public/projects/{slug}/entries');
      expect(args[1]).to.be('GET');
      expect(args[2]).to.eql({ slug: 'my-project' });
      expect(args[7]).to.eql([]);
    });

    it('returns a Promise when no callback is given', function() {
      callApiStub.returns(Promise.resolve(null));
      const result = instance.publicProjectsSlugEntriesGet('my-project');
      expect(result).to.be.a(Promise);
      return result;
    });

    it('invokes callback with data when callback is provided', function(done) {
      callApiStub.callsArgWith(12, null, { data: [] }, {});
      instance.publicProjectsSlugEntriesGet('my-project', function(error, data) {
        expect(error).to.be(null);
        expect(data).to.eql({ data: [] });
        done();
      });
    });
  });
});
