const Joi = require("joi");

/**
 * @typedef Association
 * @property {string[]} [application_id]
 * @property {number} [company_id]
 * @property {string} [criteria]
 * @property {string} [extension_id]
 */

/**
 * @typedef AssociationDetails
 * @property {number} [company_id]
 */

/**
 * @typedef AuthMeta
 * @property {string} [secret]
 * @property {string} [type]
 */

/**
 * @typedef CancelResponse
 * @property {number} [code] - The HTTP status code of the response (e.g., 200).
 */

/**
 * @typedef CdnObject
 * @property {Url[]} [urls]
 */

/**
 * @typedef Error
 * @property {string} [error] - Error message describing the reason for the failure.
 */

/**
 * @typedef Event
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 */

/**
 * @typedef EventConfig
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {string} [version]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef EventCountItem
 * @property {number} [count] - The count of events with the specified status
 * @property {string} [status] - The status of the event (e.g., "FAILED").
 */

/**
 * @typedef EventProcessedSuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef EventProcessReportObject
 * @property {number} [attempt] - The attempt number of the event.
 * @property {string} [data] - The data associated with the event.
 * @property {string} [event_name] - The name of the processed event.
 * @property {number} [last_attempted_on] - The timestamp of the last attempted event.
 * @property {string} [name] - The name of the event.
 * @property {number} [response_code] - The response code of the event.
 * @property {string} [response_message] - The response message of the event.
 * @property {number} [response_time] - The response time of the event.
 * @property {string} [status] - The status of the event (e.g., "FAILED").
 * @property {string} [webhook_url] - The webhook URL associated with the event.
 */

/**
 * @typedef EventProcessReports
 * @property {Page} [page]
 * @property {EventProcessReportObject[]} [rows]
 */

/**
 * @typedef EventProcessRequest
 * @property {string} [end_date]
 * @property {Event[]} [event]
 * @property {string} [search_text]
 * @property {string} [start_date]
 * @property {number[]} [subscriber_ids]
 */

/**
 * @typedef EventSuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef FailedEventsCountSuccessResponse
 * @property {EventCountItem[]} [items]
 */

/**
 * @typedef FilterResponseObject
 * @property {string} [filter_name] - The name of the filter.
 * @property {FilterValues[]} [values]
 */

/**
 * @typedef FilterValues
 * @property {string} [text] - The display text for the filter value.
 * @property {Object} [value] - The value associated with the filter value.
 */

/**
 * @typedef HistoryFilters
 * @property {string} [end_date] - The end date and time of the history report.
 * @property {string} [start_date] - The start date and time of the history report.
 * @property {string} [status] - The status of the history report (e.g., "FAILED").
 * @property {number[]} [subscribers] - An array of subscriber IDs associated
 *   with the history report.
 */

/**
 * @typedef HistoryPayload
 * @property {number} [page_no] - The page number of the history report.
 * @property {number} [page_size] - The number of records per page.
 * @property {string} [type] - The type of history report (e.g., "platform").
 */

/**
 * @typedef HistoryResponse
 * @property {HistoryResponseObject[]} [items]
 */

/**
 * @typedef HistoryResponseObject
 * @property {AssociationDetails} [association]
 * @property {string} [created_on] - The date and time when the history report
 *   was created.
 * @property {string} [filename] - The filename of the history report.
 * @property {HistoryFilters} [filters]
 * @property {number} [id] - The ID of the history report.
 * @property {string} [message] - A message related to the history report.
 * @property {string} [status] - The status of the history report (e.g., "COMPLETED").
 * @property {string} [updated_on] - The date and time when the history report
 *   was last updated.
 * @property {UploadServiceObject} [upload_service_response]
 */

/**
 * @typedef ManualRetryFailedResponse
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {boolean} [success]
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef PingWebhook
 * @property {Object} [auth_meta] - Authentication metadata (if required by the
 *   subscriber).
 * @property {Object} [custom_headers] - Custom headers to include in the ping request.
 * @property {string} [webhook_url] - The URL of the subscriber's webhook to ping.
 */

/**
 * @typedef PingWebhookResponse
 * @property {number} [code] - The HTTP status code of the ping response (e.g., 200).
 * @property {string} [message] - An optional message related to the ping.
 * @property {string} [status] - The status of the ping (e.g., "SUCCESS").
 */

/**
 * @typedef ReportFilterResponse
 * @property {FilterResponseObject[]} [items]
 */

/**
 * @typedef ReportFiltersPayload
 * @property {number[]} [subscriber_ids] - An array of subscriber IDs for
 *   filtering filters (optional).
 */

/**
 * @typedef RetryStatusResponse
 * @property {number} [failure_count] - The count of failed retry attempts.
 * @property {string} [status] - The overall status of the retry process (e.g.,
 *   "completed").
 * @property {number} [success_count] - The count of successfully retried events.
 * @property {number} [total_event] - The total number of events that require retry.
 */

/**
 * @typedef SubscriberConfig
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {number[]} [event_id]
 * @property {number} [id]
 * @property {string} [name]
 * @property {SubscriberStatus} [status]
 * @property {string} [webhook_url]
 */

/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SubscriberResponse
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {EventConfig[]} [event_configs]
 * @property {number} [id]
 * @property {string} [name]
 * @property {SubscriberStatus} [status]
 * @property {string} [updated_on]
 * @property {string} [webhook_url]
 */

/**
 * @typedef UploadServiceObject
 * @property {CdnObject} [cdn]
 */

/**
 * @typedef Url
 * @property {string} [name] - The name of the uploaded report file.
 * @property {string} [url] - The URL of the uploaded report file.
 */

/** @typedef {"active" | "inactive" | "blocked"} SubscriberStatus */

class WebhookPlatformModel {
  /** @returns {Association} */
  static Association() {
    return Joi.object({
      application_id: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      criteria: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
    });
  }

  /** @returns {AssociationDetails} */
  static AssociationDetails() {
    return Joi.object({
      company_id: Joi.number(),
    });
  }

  /** @returns {AuthMeta} */
  static AuthMeta() {
    return Joi.object({
      secret: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CancelResponse} */
  static CancelResponse() {
    return Joi.object({
      code: Joi.number(),
    });
  }

  /** @returns {CdnObject} */
  static CdnObject() {
    return Joi.object({
      urls: Joi.array().items(WebhookPlatformModel.Url()),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  /** @returns {Event} */
  static Event() {
    return Joi.object({
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfig} */
  static EventConfig() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      id: Joi.number(),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfigResponse} */
  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookPlatformModel.EventConfig()),
    });
  }

  /** @returns {EventCountItem} */
  static EventCountItem() {
    return Joi.object({
      count: Joi.number(),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {EventProcessedSuccessResponse} */
  static EventProcessedSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {EventProcessReportObject} */
  static EventProcessReportObject() {
    return Joi.object({
      attempt: Joi.number(),
      data: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      last_attempted_on: Joi.number(),
      name: Joi.string().allow(""),
      response_code: Joi.number(),
      response_message: Joi.string().allow(""),
      response_time: Joi.number(),
      status: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {EventProcessReports} */
  static EventProcessReports() {
    return Joi.object({
      page: WebhookPlatformModel.Page(),
      rows: Joi.array().items(WebhookPlatformModel.EventProcessReportObject()),
    });
  }

  /** @returns {EventProcessRequest} */
  static EventProcessRequest() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      event: Joi.array().items(WebhookPlatformModel.Event()),
      search_text: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      subscriber_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {EventSuccessResponse} */
  static EventSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {FailedEventsCountSuccessResponse} */
  static FailedEventsCountSuccessResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.EventCountItem()),
    });
  }

  /** @returns {FilterResponseObject} */
  static FilterResponseObject() {
    return Joi.object({
      filter_name: Joi.string().allow(""),
      values: Joi.array().items(WebhookPlatformModel.FilterValues()),
    });
  }

  /** @returns {FilterValues} */
  static FilterValues() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {HistoryFilters} */
  static HistoryFilters() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      status: Joi.string().allow(""),
      subscribers: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {HistoryPayload} */
  static HistoryPayload() {
    return Joi.object({
      page_no: Joi.number(),
      page_size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {HistoryResponse} */
  static HistoryResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.HistoryResponseObject()),
    });
  }

  /** @returns {HistoryResponseObject} */
  static HistoryResponseObject() {
    return Joi.object({
      association: WebhookPlatformModel.AssociationDetails(),
      created_on: Joi.string().allow(""),
      filename: Joi.string().allow(""),
      filters: WebhookPlatformModel.HistoryFilters(),
      id: Joi.number(),
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      upload_service_response: WebhookPlatformModel.UploadServiceObject(),
    });
  }

  /** @returns {ManualRetryFailedResponse} */
  static ManualRetryFailedResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      meta: Joi.any(),
      request_id: Joi.string().allow(""),
      stack_trace: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PingWebhook} */
  static PingWebhook() {
    return Joi.object({
      auth_meta: Joi.any(),
      custom_headers: Joi.any(),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {PingWebhookResponse} */
  static PingWebhookResponse() {
    return Joi.object({
      code: Joi.number(),
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {ReportFilterResponse} */
  static ReportFilterResponse() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.FilterResponseObject()),
    });
  }

  /** @returns {ReportFiltersPayload} */
  static ReportFiltersPayload() {
    return Joi.object({
      subscriber_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {RetryStatusResponse} */
  static RetryStatusResponse() {
    return Joi.object({
      failure_count: Joi.number(),
      status: Joi.string().allow(""),
      success_count: Joi.number(),
      total_event: Joi.number(),
    });
  }

  /** @returns {SubscriberConfig} */
  static SubscriberConfig() {
    return Joi.object({
      association: WebhookPlatformModel.Association(),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_id: Joi.array().items(Joi.number()),
      id: Joi.number(),
      name: Joi.string().allow(""),
      status: WebhookPlatformModel.SubscriberStatus(),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriberConfigList} */
  static SubscriberConfigList() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.SubscriberResponse()),
      page: WebhookPlatformModel.Page(),
    });
  }

  /** @returns {SubscriberResponse} */
  static SubscriberResponse() {
    return Joi.object({
      association: WebhookPlatformModel.Association(),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      created_on: Joi.string().allow(""),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_configs: Joi.array().items(WebhookPlatformModel.EventConfig()),
      id: Joi.number(),
      name: Joi.string().allow(""),
      status: WebhookPlatformModel.SubscriberStatus(),
      updated_on: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {UploadServiceObject} */
  static UploadServiceObject() {
    return Joi.object({
      cdn: WebhookPlatformModel.CdnObject(),
    });
  }

  /** @returns {Url} */
  static Url() {
    return Joi.object({
      name: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /**
   * Enum: SubscriberStatus Used By: Webhook
   *
   * @returns {SubscriberStatus}
   */
  static SubscriberStatus() {
    return Joi.string().valid(
      "active",

      "inactive",

      "blocked"
    );
  }
}
module.exports = WebhookPlatformModel;
