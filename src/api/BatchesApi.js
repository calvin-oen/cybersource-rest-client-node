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
    define(['ApiClient', 'model/Body', 'model/InlineResponse20012', 'model/InlineResponse20013', 'model/InlineResponse20014', 'model/InlineResponse2022', 'model/InlineResponse401'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body'), require('../model/InlineResponse20012'), require('../model/InlineResponse20013'), require('../model/InlineResponse20014'), require('../model/InlineResponse2022'), require('../model/InlineResponse401'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.BatchesApi = factory(root.CyberSource.ApiClient, root.CyberSource.Body, root.CyberSource.InlineResponse20012, root.CyberSource.InlineResponse20013, root.CyberSource.InlineResponse20014, root.CyberSource.InlineResponse2022, root.CyberSource.InlineResponse401);
  }
}(this, function(ApiClient, Body, InlineResponse20012, InlineResponse20013, InlineResponse20014, InlineResponse2022, InlineResponse401) {
  'use strict';

  /**
   * Batches service.
   * @module api/BatchesApi
   * @version 0.0.1
   */

  /**
   * Constructs a new BatchesApi. 
   * @alias module:api/BatchesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the getBatchReport operation.
     * @callback module:api/BatchesApi~getBatchReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Batch Report
     * **Get Batch Report**&lt;br&gt;This resource accepts a batch id and returns: - The batch status. - The total number of accepted, rejected, updated records. - The total number of card association responses. - The billable quantities of:   - New Account Numbers (NAN)   - New Expiry Dates (NED)   - Account Closures (ACL)   - Contact Card Holders (CCH) - Source record information including token ids, masked card number, expiration dates &amp; card type. - Response record information including response code, reason, token ids, masked card number, expiration dates &amp; card type. 
     * @param {String} batchId Unique identification number assigned to the submitted request.
     * @param {module:api/BatchesApi~getBatchReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20014}
     */
    this.getBatchReport = function(batchId, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'batchId' is set
      if (batchId === undefined || batchId === null) {
        throw new Error("Missing the required parameter 'batchId' when calling getBatchReport");
      }


      var pathParams = {
        'batchId': batchId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/accountupdater/v1/batches/{batchId}/report', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBatchStatus operation.
     * @callback module:api/BatchesApi~getBatchStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20013} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Batch Status
     * **Get Batch Status**&lt;br&gt;This resource accepts a batch id and returns: - The batch status. - The total number of accepted, rejected, updated records. - The total number of card association responses. - The billable quantities of:   - New Account Numbers (NAN)   - New Expiry Dates (NED)   - Account Closures (ACL)   - Contact Card Holders (CCH) 
     * @param {String} batchId Unique identification number assigned to the submitted request.
     * @param {module:api/BatchesApi~getBatchStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20013}
     */
    this.getBatchStatus = function(batchId, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'batchId' is set
      if (batchId === undefined || batchId === null) {
        throw new Error("Missing the required parameter 'batchId' when calling getBatchStatus");
      }


      var pathParams = {
        'batchId': batchId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse20013;

      return this.apiClient.callApi(
        '/accountupdater/v1/batches/{batchId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBatchesList operation.
     * @callback module:api/BatchesApi~getBatchesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Batches
     * **List Batches**&lt;br&gt;This resource accepts a optional date range, record offset and limit, returning a paginated response of batches containing: - The batch id. - The batch status. - The batch created / modified dates. - The total number of accepted, rejected, updated records. - The total number of card association responses. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Starting record in zero-based dataset that should be returned as the first object in the array. (default to 0)
     * @param {Number} opts.limit The maximum number that can be returned in the array starting from the offset record in zero-based dataset. (default to 20)
     * @param {String} opts.fromDate ISO-8601 format: yyyyMMddTHHmmssZ
     * @param {String} opts.toDate ISO-8601 format: yyyyMMddTHHmmssZ
     * @param {module:api/BatchesApi~getBatchesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20012}
     */
    this.getBatchesList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse20012;

      return this.apiClient.callApi(
        '/accountupdater/v1/batches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postBatch operation.
     * @callback module:api/BatchesApi~postBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2022} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Batch
     * **Create a Batch**&lt;br&gt;This resource accepts TMS tokens ids of a Customer, Payment Instrument or Instrument Identifier. &lt;br&gt; The card numbers for the supplied tokens ids are then sent to the relevant card associations to check for updates.&lt;br&gt;The following type of batches can be submitted: -  **oneOff** batch containing tokens id for Visa or MasterCard card numbers. - **amexRegistration** batch containing tokens id for Amex card numbers.  A batch id will be returned on a successful response which can be used to get the batch status and the batch report. 
     * @param {module:model/Body} body 
     * @param {module:api/BatchesApi~postBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2022}
     */
    this.postBatch = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postBatch");
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
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse2022;

      return this.apiClient.callApi(
        '/accountupdater/v1/batches', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));