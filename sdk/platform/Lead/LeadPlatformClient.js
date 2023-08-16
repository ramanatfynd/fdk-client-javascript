const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const LeadPlatformValidator = require("./LeadPlatformValidator");
const LeadPlatformModel = require("./LeadPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Lead {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {LeadPlatformValidator.CreateHistoryParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
   * @name createHistory
   * @summary: Create history for specific company level ticket
   * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createHistory/).
   */
  async createHistory({ id, body } = {}, { headers } = { headers: false }) {
    const { error } = LeadPlatformValidator.createHistory().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPlatformValidator.createHistory().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > createHistory \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}/history`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadPlatformModel.TicketHistory().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > createHistory \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.CreateTicketParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
   * @name createTicket
   * @summary: Creates a company level ticket
   * @description: Creates a company level ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createTicket/).
   */
  async createTicket({ body } = {}, { headers } = { headers: false }) {
    const { error } = LeadPlatformValidator.createTicket().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPlatformValidator.createTicket().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > createTicket \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadPlatformModel.Ticket().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > createTicket \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.EditTicketParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
   * @name editTicket
   * @summary: Edits ticket details of a company level ticket
   * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editTicket/).
   */
  async editTicket({ id, body } = {}, { headers } = { headers: false }) {
    const { error } = LeadPlatformValidator.editTicket().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPlatformValidator.editTicket().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > editTicket \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadPlatformModel.Ticket().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > editTicket \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.GetFeedbacksParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.TicketFeedbackList>} - Success response
   * @name getFeedbacks
   * @summary: Gets a list of feedback submitted against that ticket
   * @description: Gets a list of feedback submitted against that ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getFeedbacks/).
   */
  async getFeedbacks({ id } = {}, { headers } = { headers: false }) {
    const { error } = LeadPlatformValidator.getFeedbacks().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPlatformValidator.getFeedbacks().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getFeedbacks \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}/feedback`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadPlatformModel.TicketFeedbackList().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getFeedbacks \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.GetGeneralConfigParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.CloseVideoRoomResponse>} - Success response
   * @name getGeneralConfig
   * @summary: Get general support configuration.
   * @description: Get general support configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getGeneralConfig/).
   */
  async getGeneralConfig({ headers } = { headers: false }) {
    const { error } = LeadPlatformValidator.getGeneralConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPlatformValidator.getGeneralConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getGeneralConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/general-config`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadPlatformModel.CloseVideoRoomResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getGeneralConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.GetTicketParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
   * @name getTicket
   * @summary: Retreives ticket details of a company level ticket with ticket ID
   * @description: Retreives ticket details of a company level ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTicket/).
   */
  async getTicket({ id } = {}, { headers } = { headers: false }) {
    const { error } = LeadPlatformValidator.getTicket().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPlatformValidator.getTicket().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getTicket \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadPlatformModel.Ticket().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getTicket \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.GetTicketHistoryParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
   * @name getTicketHistory
   * @summary: Gets history list for specific company level ticket
   * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTicketHistory/).
   */
  async getTicketHistory({ id } = {}, { headers } = { headers: false }) {
    const { error } = LeadPlatformValidator.getTicketHistory().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPlatformValidator.getTicketHistory().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getTicketHistory \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}/history`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadPlatformModel.TicketHistoryList().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getTicketHistory \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.GetTicketsParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
   * @name getTickets
   * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
   * @description: Gets the list of company level tickets and/or ticket filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTickets/).
   */
  async getTickets(
    { items, filters, q, status, priority, category, pageNo, pageSize } = {},
    { headers } = { headers: false }
  ) {
    const { error } = LeadPlatformValidator.getTickets().validate(
      {
        items,
        filters,
        q,
        status,
        priority,
        category,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPlatformValidator.getTickets().validate(
      {
        items,
        filters,
        q,
        status,
        priority,
        category,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getTickets \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["items"] = items;
    query_params["filters"] = filters;
    query_params["q"] = q;
    query_params["status"] = status;
    query_params["priority"] = priority;
    query_params["category"] = category;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadPlatformModel.TicketList().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getTickets \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.items] - Decides that the reponse will contain the
   *   list of tickets
   * @param {boolean} [arg.filters] - Decides that the reponse will contain
   *   the ticket filters
   * @param {string} [arg.q] - Search through ticket titles and description
   * @param {string} [arg.status] - Filter tickets on status
   * @param {LeadPlatformModel.PriorityEnum} [arg.priority] - Filter tickets on priority
   * @param {string} [arg.category] - Filter tickets on category
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @returns {Paginator<LeadPlatformModel.TicketList>}
   * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
   * @description: Gets the list of company level tickets and/or ticket filters
   */
  getTicketsPaginator({
    items,
    filters,
    q,
    status,
    priority,
    category,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getTickets({
        items: items,
        filters: filters,
        q: q,
        status: status,
        priority: priority,
        category: category,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {LeadPlatformValidator.GetTokenForVideoRoomParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
   *   Success response
   * @name getTokenForVideoRoom
   * @summary: Get Token to join a specific Video Room using it's unqiue name
   * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTokenForVideoRoom/).
   */
  async getTokenForVideoRoom(
    { uniqueName } = {},
    { headers } = { headers: false }
  ) {
    const { error } = LeadPlatformValidator.getTokenForVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPlatformValidator.getTokenForVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getTokenForVideoRoom \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/video/room/${uniqueName}/token`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadPlatformModel.GetTokenForVideoRoomResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getTokenForVideoRoom \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.GetVideoParticipantsParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>}
   *   - Success response
   *
   * @name getVideoParticipants
   * @summary: Get participants of a specific Video Room using it's unique name
   * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getVideoParticipants/).
   */
  async getVideoParticipants(
    { uniqueName } = {},
    { headers } = { headers: false }
  ) {
    const { error } = LeadPlatformValidator.getVideoParticipants().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPlatformValidator.getVideoParticipants().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getVideoParticipants \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/video/room/${uniqueName}/participants`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadPlatformModel.GetParticipantsInsideVideoRoomResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getVideoParticipants \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.SubmitFeedbackParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.TicketFeedback>} - Success response
   * @name submitFeedback
   * @summary: Submit a response for feeback form against that ticket
   * @description: Submit a response for feeback form against that ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/submitFeedback/).
   */
  async submitFeedback({ id, body } = {}, { headers } = { headers: false }) {
    const { error } = LeadPlatformValidator.submitFeedback().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPlatformValidator.submitFeedback().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > submitFeedback \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}/feedback`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadPlatformModel.TicketFeedback().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > submitFeedback \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Lead;
