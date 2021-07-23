/**
 * OAuth2 API
 * OAuth2 Token Service (OAuth2)
 *
 * OpenAPI spec version: v3
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.AccessTokenResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AccessTokenResponse', function() {
    it('should create an instance of AccessTokenResponse', function() {
      // uncomment below and update the code to test AccessTokenResponse
      //var instane = new CyberSource.AccessTokenResponse();
      //expect(instance).to.be.a(CyberSource.AccessTokenResponse);
    });

    it('should have the property accessToken (base name: "access_token")', function() {
      // uncomment below and update the code to test the property accessToken
      //var instane = new CyberSource.AccessTokenResponse();
      //expect(instance).to.be();
    });

    it('should have the property tokenType (base name: "token_type")', function() {
      // uncomment below and update the code to test the property tokenType
      //var instane = new CyberSource.AccessTokenResponse();
      //expect(instance).to.be();
    });

    it('should have the property refreshToken (base name: "refresh_token")', function() {
      // uncomment below and update the code to test the property refreshToken
      //var instane = new CyberSource.AccessTokenResponse();
      //expect(instance).to.be();
    });

    it('should have the property expiresIn (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property expiresIn
      //var instane = new CyberSource.AccessTokenResponse();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new CyberSource.AccessTokenResponse();
      //expect(instance).to.be();
    });

    it('should have the property refreshTokenExpiresIn (base name: "refresh_token_expires_in")', function() {
      // uncomment below and update the code to test the property refreshTokenExpiresIn
      //var instane = new CyberSource.AccessTokenResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientStatus (base name: "client_status")', function() {
      // uncomment below and update the code to test the property clientStatus
      //var instane = new CyberSource.AccessTokenResponse();
      //expect(instance).to.be();
    });

  });

}));
