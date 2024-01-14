/*
 * Ukraine Alert API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0
 * Contact: support@stfalcon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.52
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The TimeSpan model module.
 * @module model/TimeSpan
 * @version 3.0
 */
export class TimeSpan {
  /**
   * Constructs a new <code>TimeSpan</code>.
   * @alias module:model/TimeSpan
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TimeSpan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeSpan} obj Optional instance to populate.
   * @return {module:model/TimeSpan} The populated <code>TimeSpan</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TimeSpan();
      if (data.hasOwnProperty('ticks'))
        obj.ticks = ApiClient.convertToType(data['ticks'], 'Number');
      if (data.hasOwnProperty('days'))
        obj.days = ApiClient.convertToType(data['days'], 'Number');
      if (data.hasOwnProperty('hours'))
        obj.hours = ApiClient.convertToType(data['hours'], 'Number');
      if (data.hasOwnProperty('milliseconds'))
        obj.milliseconds = ApiClient.convertToType(data['milliseconds'], 'Number');
      if (data.hasOwnProperty('minutes'))
        obj.minutes = ApiClient.convertToType(data['minutes'], 'Number');
      if (data.hasOwnProperty('seconds'))
        obj.seconds = ApiClient.convertToType(data['seconds'], 'Number');
      if (data.hasOwnProperty('totalDays'))
        obj.totalDays = ApiClient.convertToType(data['totalDays'], 'Number');
      if (data.hasOwnProperty('totalHours'))
        obj.totalHours = ApiClient.convertToType(data['totalHours'], 'Number');
      if (data.hasOwnProperty('totalMilliseconds'))
        obj.totalMilliseconds = ApiClient.convertToType(data['totalMilliseconds'], 'Number');
      if (data.hasOwnProperty('totalMinutes'))
        obj.totalMinutes = ApiClient.convertToType(data['totalMinutes'], 'Number');
      if (data.hasOwnProperty('totalSeconds'))
        obj.totalSeconds = ApiClient.convertToType(data['totalSeconds'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} ticks
 */
TimeSpan.prototype.ticks = undefined;

/**
 * @member {Number} days
 */
TimeSpan.prototype.days = undefined;

/**
 * @member {Number} hours
 */
TimeSpan.prototype.hours = undefined;

/**
 * @member {Number} milliseconds
 */
TimeSpan.prototype.milliseconds = undefined;

/**
 * @member {Number} minutes
 */
TimeSpan.prototype.minutes = undefined;

/**
 * @member {Number} seconds
 */
TimeSpan.prototype.seconds = undefined;

/**
 * @member {Number} totalDays
 */
TimeSpan.prototype.totalDays = undefined;

/**
 * @member {Number} totalHours
 */
TimeSpan.prototype.totalHours = undefined;

/**
 * @member {Number} totalMilliseconds
 */
TimeSpan.prototype.totalMilliseconds = undefined;

/**
 * @member {Number} totalMinutes
 */
TimeSpan.prototype.totalMinutes = undefined;

/**
 * @member {Number} totalSeconds
 */
TimeSpan.prototype.totalSeconds = undefined;

