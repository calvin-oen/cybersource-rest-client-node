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
    define(['ApiClient', 'model/PtsV2PaymentsRefundPost400Response', 'model/SearchRequest', 'model/UmsV1UsersGet200Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PtsV2PaymentsRefundPost400Response'), require('../model/SearchRequest'), require('../model/UmsV1UsersGet200Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.UserManagementSearchApi = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsRefundPost400Response, root.CyberSource.SearchRequest, root.CyberSource.UmsV1UsersGet200Response);
  }
}(this, function(ApiClient, PtsV2PaymentsRefundPost400Response, SearchRequest, UmsV1UsersGet200Response) {
  'use strict';

  /**
   * UserManagementSearch service.
   * @module api/UserManagementSearchApi
   * @version 0.0.1
   */

  /**
   * Constructs a new UserManagementSearchApi. 
   * @alias module:api/UserManagementSearchApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the searchUsers operation.
     * @callback module:api/UserManagementSearchApi~searchUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UmsV1UsersGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search User Information
     * This endpoint is to get all the user information depending on the filter criteria passed in request body.
     * @param {module:model/SearchRequest} searchRequest 
     * @param {module:api/UserManagementSearchApi~searchUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UmsV1UsersGet200Response}
     *
     */
    this.searchUsers = function(searchRequest, callback) {
      var postBody = searchRequest;

      // verify the required parameter 'searchRequest' is set
      if (searchRequest === undefined || searchRequest === null) {
        throw new Error("Missing the required parameter 'searchRequest' when calling searchUsers");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/SearchRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = UmsV1UsersGet200Response;

      return this.apiClient.callApi(
        '/ums/v1/users/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
