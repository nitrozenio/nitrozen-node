'use strict';

const expect = require('expect.js');
const sinon = require('sinon');
const NitrozenApi = require(process.cwd() + '/src/index');

describe('ProjectsApi', function() {
  let apiClient;
  let instance;
  let callApiStub;

  beforeEach(function() {
    apiClient = new NitrozenApi.ApiClient();
    instance = new NitrozenApi.ProjectsApi(apiClient);
    callApiStub = sinon.stub(apiClient, 'callApi');
  });

  afterEach(function() {
    callApiStub.restore();
  });

  describe('projectsGet', function() {
    it('calls GET /projects with BearerAuth', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.projectsGet();
      expect(callApiStub.calledOnce).to.be(true);
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/projects');
      expect(args[1]).to.be('GET');
      expect(args[7]).to.eql(['BearerAuth']);
    });

    it('returns a Promise when no callback is given', function() {
      callApiStub.returns(Promise.resolve(null));
      const result = instance.projectsGet();
      expect(result).to.be.a(Promise);
      return result;
    });

    it('invokes callback with data when callback is provided', function(done) {
      callApiStub.callsArgWith(12, null, { data: [] }, {});
      instance.projectsGet(function(error, data) {
        expect(error).to.be(null);
        expect(data).to.eql({ data: [] });
        done();
      });
    });
  });

  describe('projectsPost', function() {
    it('throws when projectInput is null', function() {
      expect(function() {
        instance.projectsPost(null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls POST /projects with BearerAuth', function() {
      callApiStub.returns(Promise.resolve(null));
      const body = new NitrozenApi.ProjectInput('My Project');
      instance.projectsPost(body);
      expect(callApiStub.calledOnce).to.be(true);
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/projects');
      expect(args[1]).to.be('POST');
      expect(args[7]).to.eql(['BearerAuth']);
    });
  });

  describe('projectsProjectGet', function() {
    it('throws when project is null', function() {
      expect(function() {
        instance.projectsProjectGet(null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls GET /projects/{project} with correct path param', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.projectsProjectGet(5);
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/projects/{project}');
      expect(args[1]).to.be('GET');
      expect(args[2]).to.eql({ project: 5 });
    });
  });

  describe('projectsProjectPut', function() {
    it('throws when project is null', function() {
      expect(function() {
        instance.projectsProjectPut(null, new NitrozenApi.ProjectInput('x'));
      }).to.throwError(/Missing the required parameter/);
    });

    it('throws when projectInput is null', function() {
      expect(function() {
        instance.projectsProjectPut(5, null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls PUT /projects/{project}', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.projectsProjectPut(5, new NitrozenApi.ProjectInput('Updated'));
      const args = callApiStub.firstCall.args;
      expect(args[1]).to.be('PUT');
      expect(args[2]).to.eql({ project: 5 });
    });
  });

  describe('projectsProjectDelete', function() {
    it('throws when project is null', function() {
      expect(function() {
        instance.projectsProjectDelete(null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls DELETE /projects/{project}', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.projectsProjectDelete(5);
      const args = callApiStub.firstCall.args;
      expect(args[1]).to.be('DELETE');
      expect(args[2]).to.eql({ project: 5 });
    });
  });
});
