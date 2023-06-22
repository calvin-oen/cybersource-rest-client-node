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
    define(['ApiClient', 'model/CreatePlanRequest', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse201', 'model/InlineResponse4001', 'model/InlineResponse404', 'model/PtsV2PaymentsPost502Response', 'model/UpdatePlanRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreatePlanRequest'), require('../model/InlineResponse200'), require('../model/InlineResponse2001'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/InlineResponse2004'), require('../model/InlineResponse2005'), require('../model/InlineResponse201'), require('../model/InlineResponse4001'), require('../model/InlineResponse404'), require('../model/PtsV2PaymentsPost502Response'), require('../model/UpdatePlanRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PlansApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreatePlanRequest, root.CyberSource.InlineResponse200, root.CyberSource.InlineResponse2001, root.CyberSource.InlineResponse2002, root.CyberSource.InlineResponse2003, root.CyberSource.InlineResponse2004, root.CyberSource.InlineResponse2005, root.CyberSource.InlineResponse201, root.CyberSource.InlineResponse4001, root.CyberSource.InlineResponse404, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.UpdatePlanRequest);
  }
}(this, function(ApiClient, CreatePlanRequest, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse201, InlineResponse4001, InlineResponse404, PtsV2PaymentsPost502Response, UpdatePlanRequest) {
  'use strict';

  /**
   * Plans service.
   * @module api/PlansApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PlansApi. 
   * @alias module:api/PlansApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the activatePlan operation.
     * @callback module:api/PlansApi~activatePlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate a Plan
     * Activate a Plan
     * @param {String} id Plan Id
     * @param {module:api/PlansApi~activatePlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.activatePlan = function(id, callback) {
      var postBody = null;
      if ('POST' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling activatePlan");
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
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/rbs/v1/plans/{id}/activate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createPlan operation.
     * @callback module:api/PlansApi~createPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Plan
     * The recurring billing service enables you to manage payment plans and subscriptions for recurring payment schedules. It securely stores your customer&#39;s payment information and personal data within secure Visa data centers, reducing storage risks and PCI DSS scope through the use of *Token Management* (*TMS*).  The three key elements of *Cybersource* Recurring Billing are:  -  **Token**: stores customer billing, shipping, and payment details.  -  **Plan**: stores the billing schedule.  -  **Subscription**: combines the token and plan, and defines the subscription start date, name, and description.  The APIs in this section demonstrate the management of the Plans and Subscriptions. For Tokens please refer to [Token Management](#token-management) 
     * @param {module:model/CreatePlanRequest} createPlanRequest 
     * @param {module:api/PlansApi~createPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */
    this.createPlan = function(createPlanRequest, callback) {
      var postBody = createPlanRequest;

      // verify the required parameter 'createPlanRequest' is set
      if (createPlanRequest === undefined || createPlanRequest === null) {
        throw new Error("Missing the required parameter 'createPlanRequest' when calling createPlan");
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
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/rbs/v1/plans', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deactivatePlan operation.
     * @callback module:api/PlansApi~deactivatePlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deactivate a Plan
     * Deactivate a Plan
     * @param {String} id Plan Id
     * @param {module:api/PlansApi~deactivatePlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.deactivatePlan = function(id, callback) {
      var postBody = null;
      if ('POST' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deactivatePlan");
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
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/rbs/v1/plans/{id}/deactivate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePlan operation.
     * @callback module:api/PlansApi~deletePlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Plan
     * Delete a Plan is only allowed: - plan status is in &#x60;DRAFT&#x60; - plan status is in &#x60;ACTIVE&#x60;, and &#x60;INACTIVE&#x60; only allowed when no subscriptions attached to a plan in the lifetime of a plan 
     * @param {String} id Plan Id
     * @param {module:api/PlansApi~deletePlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    this.deletePlan = function(id, callback) {
      var postBody = null;
      if ('DELETE' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePlan");
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
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/rbs/v1/plans/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPlan operation.
     * @callback module:api/PlansApi~getPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Plan
     * Retrieve a Plan details by Plan Id.
     * @param {String} id Plan Id
     * @param {module:api/PlansApi~getPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.getPlan = function(id, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPlan");
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
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/rbs/v1/plans/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPlanCode operation.
     * @callback module:api/PlansApi~getPlanCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Plan Code
     * Get a Unique Plan Code
     * @param {module:api/PlansApi~getPlanCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.getPlanCode = function(callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
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
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/rbs/v1/plans/code', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPlans operation.
     * @callback module:api/PlansApi~getPlansCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a List of Plans
     * Retrieve Plans by Plan Code &amp; Plan Status. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Page offset number.
     * @param {Number} opts.limit Number of items to be returned. Default - &#x60;20&#x60;, Max - &#x60;100&#x60; 
     * @param {String} opts.code Filter by Plan Code
     * @param {String} opts.status Filter by Plan Status
     * @param {String} opts.name Filter by Plan Name. (First sub string or full string) **[Not Recommended]** 
     * @param {module:api/PlansApi~getPlansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.getPlans = function(opts, callback) {
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
        'code': opts['code'],
        'status': opts['status'],
        'name': opts['name']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/rbs/v1/plans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePlan operation.
     * @callback module:api/PlansApi~updatePlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Plan
     * Update a Plan  Plan in &#x60;DRAFT&#x60; status - All updates are allowed on Plan with &#x60;DRAFT&#x60; status  Plan in &#x60;ACTIVE&#x60; status [Following fields are **Not Updatable**] - &#x60;planInformation.billingPeriod&#x60; - &#x60;planInformation.billingCycles&#x60; [Update is only allowed to **increase** billingCycles] - &#x60;orderInformation.amountDetails.currency&#x60; 
     * @param {String} id Plan Id
     * @param {module:model/UpdatePlanRequest} updatePlanRequest 
     * @param {module:api/PlansApi~updatePlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.updatePlan = function(id, updatePlanRequest, callback) {
      var postBody = updatePlanRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePlan");
      }

      // verify the required parameter 'updatePlanRequest' is set
      if (updatePlanRequest === undefined || updatePlanRequest === null) {
        throw new Error("Missing the required parameter 'updatePlanRequest' when calling updatePlan");
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
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/rbs/v1/plans/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
