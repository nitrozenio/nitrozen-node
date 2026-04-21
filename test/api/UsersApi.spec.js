'use strict';

const expect = require('expect.js');
const sinon = require('sinon');
const NitrozenApi = require(process.cwd() + '/src/index');

describe('UsersApi', function() {
  let apiClient;
  let instance;
  let callApiStub;

  beforeEach(function() {
    apiClient = new NitrozenApi.ApiClient();
    instance = new NitrozenApi.UsersApi(apiClient);
    callApiStub = sinon.stub(apiClient, 'callApi');
  });

  afterEach(function() {
    callApiStub.restore();
  });

  describe('userGet', function() {
    it('calls GET /user with BearerAuth', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.userGet();
      expect(callApiStub.calledOnce).to.be(true);
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/user');
      expect(args[1]).to.be('GET');
      expect(args[7]).to.eql(['BearerAuth']);
    });

    it('returns a Promise when no callback is given', function() {
      callApiStub.returns(Promise.resolve(null));
      const result = instance.userGet();
      expect(result).to.be.a(Promise);
      return result;
    });

    it('invokes callback when callback is provided', function(done) {
      callApiStub.callsArgWith(12, null, { data: {} }, {});
      instance.userGet(function(error, data) {
        expect(error).to.be(null);
        done();
      });
    });
  });

  describe('userUsageGet', function() {
    it('calls GET /user/usage with BearerAuth', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.userUsageGet();
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/user/usage');
      expect(args[1]).to.be('GET');
      expect(args[7]).to.eql(['BearerAuth']);
    });

    it('returns a Promise when no callback is given', function() {
      callApiStub.returns(Promise.resolve(null));
      const result = instance.userUsageGet();
      expect(result).to.be.a(Promise);
      return result;
    });
  });
});
