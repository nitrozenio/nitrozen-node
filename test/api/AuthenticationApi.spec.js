'use strict';

const expect = require('expect.js');
const sinon = require('sinon');
const NitrozenApi = require(process.cwd() + '/src/index');

describe('AuthenticationApi', function() {
  let apiClient;
  let instance;
  let callApiStub;

  beforeEach(function() {
    apiClient = new NitrozenApi.ApiClient();
    instance = new NitrozenApi.AuthenticationApi(apiClient);
    callApiStub = sinon.stub(apiClient, 'callApi');
  });

  afterEach(function() {
    callApiStub.restore();
  });

  describe('tokensGet', function() {
    it('calls GET /tokens with BearerAuth', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.tokensGet();
      expect(callApiStub.calledOnce).to.be(true);
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/tokens');
      expect(args[1]).to.be('GET');
      expect(args[7]).to.eql(['BearerAuth']);
    });

    it('returns a Promise when no callback is given', function() {
      callApiStub.returns(Promise.resolve(null));
      const result = instance.tokensGet();
      expect(result).to.be.a(Promise);
      return result;
    });

    it('invokes callback with data when callback is provided', function(done) {
      callApiStub.callsArgWith(12, null, { data: [] }, {});
      instance.tokensGet(function(error, data) {
        expect(error).to.be(null);
        expect(data).to.eql({ data: [] });
        done();
      });
    });
  });

  describe('tokensPost', function() {
    it('throws when tokensPostRequest is null', function() {
      expect(function() {
        instance.tokensPost(null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls POST /tokens with BearerAuth', function() {
      callApiStub.returns(Promise.resolve(null));
      const body = new NitrozenApi.TokensPostRequest('my-token');
      instance.tokensPost(body);
      expect(callApiStub.calledOnce).to.be(true);
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/tokens');
      expect(args[1]).to.be('POST');
      expect(args[7]).to.eql(['BearerAuth']);
    });

    it('returns a Promise when no callback is given', function() {
      callApiStub.returns(Promise.resolve(null));
      const result = instance.tokensPost(new NitrozenApi.TokensPostRequest('my-token'));
      expect(result).to.be.a(Promise);
      return result;
    });
  });

  describe('tokensTokenDelete', function() {
    it('throws when token is null', function() {
      expect(function() {
        instance.tokensTokenDelete(null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls DELETE /tokens/{token} with BearerAuth', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.tokensTokenDelete(42);
      expect(callApiStub.calledOnce).to.be(true);
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/tokens/{token}');
      expect(args[1]).to.be('DELETE');
      expect(args[2]).to.eql({ token: 42 });
      expect(args[7]).to.eql(['BearerAuth']);
    });

    it('returns a Promise when no callback is given', function() {
      callApiStub.returns(Promise.resolve(null));
      const result = instance.tokensTokenDelete(1);
      expect(result).to.be.a(Promise);
      return result;
    });
  });
});
