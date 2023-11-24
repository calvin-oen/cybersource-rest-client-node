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
    define(['ApiClient', 'model/PtsV1TransactionBatchesGet200Response', 'model/PtsV1TransactionBatchesGet400Response', 'model/PtsV1TransactionBatchesGet500Response', 'model/PtsV1TransactionBatchesIdGet200Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PtsV1TransactionBatchesGet200Response'), require('../model/PtsV1TransactionBatchesGet400Response'), require('../model/PtsV1TransactionBatchesGet500Response'), require('../model/PtsV1TransactionBatchesIdGet200Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TransactionBatchesApi = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV1TransactionBatchesGet200Response, root.CyberSource.PtsV1TransactionBatchesGet400Response, root.CyberSource.PtsV1TransactionBatchesGet500Response, root.CyberSource.PtsV1TransactionBatchesIdGet200Response);
  }
}(this, function(ApiClient, PtsV1TransactionBatchesGet200Response, PtsV1TransactionBatchesGet400Response, PtsV1TransactionBatchesGet500Response, PtsV1TransactionBatchesIdGet200Response) {
  'use strict';

  /**
   * TransactionBatches service.
   * @module api/TransactionBatchesApi
   * @version 0.0.1
   */

  /**
   * Constructs a new TransactionBatchesApi. 
   * @alias module:api/TransactionBatchesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the getTransactionBatchDetails operation.
     * @callback module:api/TransactionBatchesApi~getTransactionBatchDetailsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Transaction Details for a given Batch Id
     * Provides real-time detailed status information about the transactions that you previously uploaded in the Business Center or processed with the Offline Transaction File Submission service. 
     * @param {String} id The batch id assigned for the template.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.uploadDate Date in which the original batch file was uploaded. Date must be in ISO-8601 format. Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14) **Example date format:**  - yyyy-MM-dd 
     * @param {String} opts.status Allows you to filter by rejected response.  Valid values: - Rejected 
     * @param {module:api/TransactionBatchesApi~getTransactionBatchDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * 
     */
    this.getTransactionBatchDetails = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTransactionBatchDetails");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'uploadDate': opts['uploadDate'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['text/csv', 'application/xml', 'text/vnd.cybersource.map-csv'];
      var returnType = null;

      return this.apiClient.callApi(
        '/pts/v1/transaction-batch-details/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransactionBatchId operation.
     * @callback module:api/TransactionBatchesApi~getTransactionBatchIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV1TransactionBatchesIdGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Individual Batch File
     * Provide the search range
     * @param {String} id The batch id assigned for the template.
     * @param {module:api/TransactionBatchesApi~getTransactionBatchIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV1TransactionBatchesIdGet200Response}
     * 
     */
    this.getTransactionBatchId = function(id, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTransactionBatchId");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json'];
      var returnType = PtsV1TransactionBatchesIdGet200Response;

      return this.apiClient.callApi(
        '/pts/v1/transaction-batches/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransactionBatches operation.
     * @callback module:api/TransactionBatchesApi~getTransactionBatchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV1TransactionBatchesGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a List of Batch Files
     * Provide the search range
     * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZZ 
     * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZZ 
     * @param {module:api/TransactionBatchesApi~getTransactionBatchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV1TransactionBatchesGet200Response}
     * 
     */
    this.getTransactionBatches = function(startTime, endTime, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getTransactionBatches");
      }

      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getTransactionBatches");
      }


      var pathParams = {
      };
      var queryParams = {
        'startTime': startTime,
        'endTime': endTime
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json'];
      var returnType = PtsV1TransactionBatchesGet200Response;

      return this.apiClient.callApi(
        '/pts/v1/transaction-batches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
