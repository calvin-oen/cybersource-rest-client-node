/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateSharedSecretKeysRequest', 'model/CreateSharedSecretKeysVerifiRequest', 'model/DeleteBulkSymmetricKeysRequest', 'model/InlineResponse4005', 'model/InlineResponse5021', 'model/KmsV2KeysSymDeletesPost200Response', 'model/KmsV2KeysSymGet200Response', 'model/KmsV2KeysSymPost201Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateSharedSecretKeysRequest'), require('../model/CreateSharedSecretKeysVerifiRequest'), require('../model/DeleteBulkSymmetricKeysRequest'), require('../model/InlineResponse4005'), require('../model/InlineResponse5021'), require('../model/KmsV2KeysSymDeletesPost200Response'), require('../model/KmsV2KeysSymGet200Response'), require('../model/KmsV2KeysSymPost201Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.SymmetricKeyManagementApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateSharedSecretKeysRequest, root.CyberSource.CreateSharedSecretKeysVerifiRequest, root.CyberSource.DeleteBulkSymmetricKeysRequest, root.CyberSource.InlineResponse4005, root.CyberSource.InlineResponse5021, root.CyberSource.KmsV2KeysSymDeletesPost200Response, root.CyberSource.KmsV2KeysSymGet200Response, root.CyberSource.KmsV2KeysSymPost201Response);
  }
}(this, function(ApiClient, CreateSharedSecretKeysRequest, CreateSharedSecretKeysVerifiRequest, DeleteBulkSymmetricKeysRequest, InlineResponse4005, InlineResponse5021, KmsV2KeysSymDeletesPost200Response, KmsV2KeysSymGet200Response, KmsV2KeysSymPost201Response) {
  'use strict';

  /**
   * SymmetricKeyManagement service.
   * @module api/SymmetricKeyManagementApi
   * @version 0.0.1
   */

  /**
   * Constructs a new SymmetricKeyManagementApi. 
   * @alias module:api/SymmetricKeyManagementApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createV2SharedSecretKeys operation.
     * @callback module:api/SymmetricKeyManagementApi~createV2SharedSecretKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KmsV2KeysSymPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Shared-Secret Keys
     * Create one or more Shared-Secret Keys 
     * @param {module:model/CreateSharedSecretKeysRequest} createSharedSecretKeysRequest 
     * @param {module:api/SymmetricKeyManagementApi~createV2SharedSecretKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KmsV2KeysSymPost201Response}
     */
    this.createV2SharedSecretKeys = function(createSharedSecretKeysRequest, callback) {
      var postBody = createSharedSecretKeysRequest;

      // verify the required parameter 'createSharedSecretKeysRequest' is set
      if (createSharedSecretKeysRequest === undefined || createSharedSecretKeysRequest === null) {
        throw new Error("Missing the required parameter 'createSharedSecretKeysRequest' when calling createV2SharedSecretKeys");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = KmsV2KeysSymPost201Response;

      return this.apiClient.callApi(
        '/kms/v2/keys-sym', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createV2SharedSecretKeysVerifi operation.
     * @callback module:api/SymmetricKeyManagementApi~createV2SharedSecretKeysVerifiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KmsV2KeysSymPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Shared-Secret Keys as per verifi spec
     * Create one or more Shared-Secret Keys as per Verifi spec with 32 chars, store digest algo during key generation. 
     * @param {String} vIcDomain domain
     * @param {module:model/CreateSharedSecretKeysVerifiRequest} createSharedSecretKeysVerifiRequest 
     * @param {module:api/SymmetricKeyManagementApi~createV2SharedSecretKeysVerifiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KmsV2KeysSymPost201Response}
     */
    this.createV2SharedSecretKeysVerifi = function(vIcDomain, createSharedSecretKeysVerifiRequest, callback) {
      var postBody = createSharedSecretKeysVerifiRequest;

      // verify the required parameter 'vIcDomain' is set
      if (vIcDomain === undefined || vIcDomain === null) {
        throw new Error("Missing the required parameter 'vIcDomain' when calling createV2SharedSecretKeysVerifi");
      }

      // verify the required parameter 'createSharedSecretKeysVerifiRequest' is set
      if (createSharedSecretKeysVerifiRequest === undefined || createSharedSecretKeysVerifiRequest === null) {
        throw new Error("Missing the required parameter 'createSharedSecretKeysVerifiRequest' when calling createV2SharedSecretKeysVerifi");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'v-ic-domain': vIcDomain
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = KmsV2KeysSymPost201Response;

      return this.apiClient.callApi(
        '/kms/v2/keys-sym/verifi', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBulkSymmetricKeys operation.
     * @callback module:api/SymmetricKeyManagementApi~deleteBulkSymmetricKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KmsV2KeysSymDeletesPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete one or more Symmetric keys
     * &#39;Delete one or more Symmetric keys&#39; 
     * @param {module:model/DeleteBulkSymmetricKeysRequest} deleteBulkSymmetricKeysRequest 
     * @param {module:api/SymmetricKeyManagementApi~deleteBulkSymmetricKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KmsV2KeysSymDeletesPost200Response}
     */
    this.deleteBulkSymmetricKeys = function(deleteBulkSymmetricKeysRequest, callback) {
      var postBody = deleteBulkSymmetricKeysRequest;

      // verify the required parameter 'deleteBulkSymmetricKeysRequest' is set
      if (deleteBulkSymmetricKeysRequest === undefined || deleteBulkSymmetricKeysRequest === null) {
        throw new Error("Missing the required parameter 'deleteBulkSymmetricKeysRequest' when calling deleteBulkSymmetricKeys");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = KmsV2KeysSymDeletesPost200Response;

      return this.apiClient.callApi(
        '/kms/v2/keys-sym/deletes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getKeyDetails operation.
     * @callback module:api/SymmetricKeyManagementApi~getKeyDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KmsV2KeysSymGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves shared secret key details
     * Retrieves keys details by providing the key id.
     * @param {String} keyId Key ID. 
     * @param {module:api/SymmetricKeyManagementApi~getKeyDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KmsV2KeysSymGet200Response}
     */
    this.getKeyDetails = function(keyId, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling getKeyDetails");
      }


      var pathParams = {
        'keyId': keyId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = KmsV2KeysSymGet200Response;

      return this.apiClient.callApi(
        '/kms/v2/keys-sym/{keyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
