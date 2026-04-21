'use strict';

const expect = require('expect.js');
const sinon = require('sinon');
const NitrozenApi = require(process.cwd() + '/src/index');

describe('EntriesApi', function() {
  let apiClient;
  let instance;
  let callApiStub;

  beforeEach(function() {
    apiClient = new NitrozenApi.ApiClient();
    instance = new NitrozenApi.EntriesApi(apiClient);
    callApiStub = sinon.stub(apiClient, 'callApi');
  });

  afterEach(function() {
    callApiStub.restore();
  });

  describe('projectsProjectEntriesGet', function() {
    it('throws when project is null', function() {
      expect(function() {
        instance.projectsProjectEntriesGet(null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls GET /projects/{project}/entries with BearerAuth', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.projectsProjectEntriesGet(3);
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/projects/{project}/entries');
      expect(args[1]).to.be('GET');
      expect(args[2]).to.eql({ project: 3 });
      expect(args[7]).to.eql(['BearerAuth']);
    });

    it('passes optional query params', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.projectsProjectEntriesGet(3, { category: 'fix', page: 2, perPage: 10 });
      const args = callApiStub.firstCall.args;
      expect(args[3]).to.eql({ category: 'fix', status: undefined, page: 2, per_page: 10 });
    });

    it('returns a Promise when no callback is given', function() {
      callApiStub.returns(Promise.resolve(null));
      const result = instance.projectsProjectEntriesGet(1);
      expect(result).to.be.a(Promise);
      return result;
    });
  });

  describe('projectsProjectEntriesPost', function() {
    it('throws when project is null', function() {
      expect(function() {
        instance.projectsProjectEntriesPost(null, new NitrozenApi.EntryInput('t', 'c', 'fix'));
      }).to.throwError(/Missing the required parameter/);
    });

    it('throws when entryInput is null', function() {
      expect(function() {
        instance.projectsProjectEntriesPost(1, null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls POST /projects/{project}/entries', function() {
      callApiStub.returns(Promise.resolve(null));
      const body = new NitrozenApi.EntryInput('Title', 'Content', 'new');
      instance.projectsProjectEntriesPost(3, body);
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/projects/{project}/entries');
      expect(args[1]).to.be('POST');
      expect(args[2]).to.eql({ project: 3 });
    });
  });

  describe('projectsProjectEntriesEntryGet', function() {
    it('throws when project is null', function() {
      expect(function() {
        instance.projectsProjectEntriesEntryGet(null, 1);
      }).to.throwError(/Missing the required parameter/);
    });

    it('throws when entry is null', function() {
      expect(function() {
        instance.projectsProjectEntriesEntryGet(1, null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls GET /projects/{project}/entries/{entry}', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.projectsProjectEntriesEntryGet(3, 7);
      const args = callApiStub.firstCall.args;
      expect(args[0]).to.be('/projects/{project}/entries/{entry}');
      expect(args[1]).to.be('GET');
      expect(args[2]).to.eql({ project: 3, entry: 7 });
    });
  });

  describe('projectsProjectEntriesEntryPut', function() {
    it('throws when entryInput is null', function() {
      expect(function() {
        instance.projectsProjectEntriesEntryPut(1, 1, null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls PUT /projects/{project}/entries/{entry}', function() {
      callApiStub.returns(Promise.resolve(null));
      const body = new NitrozenApi.EntryInput('Title', 'Content', 'fix');
      instance.projectsProjectEntriesEntryPut(3, 7, body);
      const args = callApiStub.firstCall.args;
      expect(args[1]).to.be('PUT');
      expect(args[2]).to.eql({ project: 3, entry: 7 });
    });
  });

  describe('projectsProjectEntriesEntryDelete', function() {
    it('throws when project is null', function() {
      expect(function() {
        instance.projectsProjectEntriesEntryDelete(null, 1);
      }).to.throwError(/Missing the required parameter/);
    });

    it('throws when entry is null', function() {
      expect(function() {
        instance.projectsProjectEntriesEntryDelete(1, null);
      }).to.throwError(/Missing the required parameter/);
    });

    it('calls DELETE /projects/{project}/entries/{entry}', function() {
      callApiStub.returns(Promise.resolve(null));
      instance.projectsProjectEntriesEntryDelete(3, 7);
      const args = callApiStub.firstCall.args;
      expect(args[1]).to.be('DELETE');
      expect(args[2]).to.eql({ project: 3, entry: 7 });
    });
  });
});
