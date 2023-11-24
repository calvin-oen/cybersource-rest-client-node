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
    define(['ApiClient', 'model/ReportingV3PaymentBatchSummariesGet200Response', 'model/Reportingv3ReportDownloadsGet400Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ReportingV3PaymentBatchSummariesGet200Response'), require('../model/Reportingv3ReportDownloadsGet400Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentBatchSummariesApi = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3PaymentBatchSummariesGet200Response, root.CyberSource.Reportingv3ReportDownloadsGet400Response);
  }
}(this, function(ApiClient, ReportingV3PaymentBatchSummariesGet200Response, Reportingv3ReportDownloadsGet400Response) {
  'use strict';

  /**
   * PaymentBatchSummaries service.
   * @module api/PaymentBatchSummariesApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PaymentBatchSummariesApi. 
   * @alias module:api/PaymentBatchSummariesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the getPaymentBatchSummary operation.
     * @callback module:api/PaymentBatchSummariesApi~getPaymentBatchSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportingV3PaymentBatchSummariesGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payment Batch Summary Data
     * Scope can be either account/merchant or reseller.
     * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Organization Id
     * @param {String} opts.rollUp Conditional - RollUp for data for day/week/month. Required while getting breakdown data for a Merchant
     * @param {String} opts.breakdown Conditional - Breakdown on account_rollup/all_merchant/selected_merchant. Required while getting breakdown data for a Merchant.
     * @param {Number} opts.startDayOfWeek Optional - Start day of week to breakdown data for weeks in a month
     * @param {module:api/PaymentBatchSummariesApi~getPaymentBatchSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportingV3PaymentBatchSummariesGet200Response}
     * 
     */
    this.getPaymentBatchSummary = function(startTime, endTime, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getPaymentBatchSummary");
      }

      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getPaymentBatchSummary");
      }


      var pathParams = {
      };
      var queryParams = {
        'startTime': startTime,
        'endTime': endTime,
        'organizationId': opts['organizationId'],
        'rollUp': opts['rollUp'],
        'breakdown': opts['breakdown'],
        'startDayOfWeek': opts['startDayOfWeek']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json', 'text/csv', 'application/xml'];
      var returnType = ReportingV3PaymentBatchSummariesGet200Response;

      return this.apiClient.callApi(
        '/reporting/v3/payment-batch-summaries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
