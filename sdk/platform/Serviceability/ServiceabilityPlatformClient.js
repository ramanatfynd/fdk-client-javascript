const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ServiceabilityValidator = require("./ServiceabilityPlatformValidator");
const ServiceabilityModel = require("./ServiceabilityPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Serviceability {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ZoneRequest} arg.body
   * @returns {Promise<ZoneResponse>} - Success response
   * @summary: Insertion of zone in database.
   * @description: This API returns response of insertion of zone in mongo database.<br>Correction- `zone_id` in the path must be removed.<br> path is `/service/platform/logistics-internal/v1.0/company/{}/zone/`
   */
  async createZone({ body } = {}) {
    const { error } = ServiceabilityValidator.createZone().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ServiceabilityValidator.createZone().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createZone",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zone`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.ZoneResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createZone",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<GetStoresViewResponse>} - Success response
   * @summary: GET stores data
   * @description: This API returns stores data.
   */
  async getAllStores({} = {}) {
    const { error } = ServiceabilityValidator.getAllStores().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ServiceabilityValidator.getAllStores().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAllStores",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/logistics/stores`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.GetStoresViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAllStores",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<CompanyStoreView_Response>} - Success response
   * @summary: Company Store View of application.
   * @description: This API returns Company Store View of the application.
   */
  async getCompanyStoreView({} = {}) {
    const { error } = ServiceabilityValidator.getCompanyStoreView().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.getCompanyStoreView().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCompanyStoreView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/all-stores`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.CompanyStoreView_Response().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCompanyStoreView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<DPCompanyRuleResponse>} - Success response
   * @summary: Get All DpCompanyRules applied to company from database.
   * @description: This API returns response of all DpCompanyRules from mongo database.
   */
  async getDpCompanyRulesView({} = {}) {
    const { error } = ServiceabilityValidator.getDpCompanyRulesView().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.getDpCompanyRulesView().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDpCompanyRulesView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/logistics`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.DPCompanyRuleResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDpCompanyRulesView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<DpMultipleRuleSuccessResponse>} - Success response
   * @summary: Fetching of DpRules from database.
   * @description: This API returns response of DpRules from mongo database.
   */
  async getDpRuleInsertView({} = {}) {
    const { error } = ServiceabilityValidator.getDpRuleInsertView().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.getDpRuleInsertView().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDpRuleInsertView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/dp-rules`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.DpMultipleRuleSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDpRuleInsertView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.ruleUid - A `rule_uid` is a unique identifier for a
   *   particular Dp.
   * @returns {Promise<DpRuleSuccessResponse>} - Success response
   * @summary: Fetching of DpRules from database.
   * @description: This API returns response of DpRules from mongo database.
   */
  async getDpRulesView({ ruleUid } = {}) {
    const { error } = ServiceabilityValidator.getDpRulesView().validate(
      {
        ruleUid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.getDpRulesView().validate(
      {
        ruleUid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDpRulesView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/dp-rules/${ruleUid}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.DpRuleSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDpRulesView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EntityRegionView_Request} arg.body
   * @returns {Promise<EntityRegionView_Response>} - Success response
   * @summary: Get country and state list
   * @description: This API returns response for Entity Region View.
   */
  async getEntityRegionView({ body } = {}) {
    const { error } = ServiceabilityValidator.getEntityRegionView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.getEntityRegionView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getEntityRegionView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/regions`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.EntityRegionView_Response().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getEntityRegionView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNumber] - Index of the item to start returning with
   * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
   * @param {string} [arg.name] - Name of particular zone in the seller account
   * @param {boolean} [arg.isActive] - Status of zone whether active or inactive
   * @param {string} [arg.channelIds] - Zones associated with the given channel ids'
   * @param {string} [arg.q] - Search with name as a free text
   * @returns {Promise<ListViewResponse>} - Success response
   * @summary: Zone List of application.
   * @description: This API returns Zone List View of the application.
   */
  async getListView({
    pageNumber,
    pageSize,
    name,
    isActive,
    channelIds,
    q,
  } = {}) {
    const { error } = ServiceabilityValidator.getListView().validate(
      {
        pageNumber,
        pageSize,
        name,
        isActive,
        channelIds,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ServiceabilityValidator.getListView().validate(
      {
        pageNumber,
        pageSize,
        name,
        isActive,
        channelIds,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getListView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_number"] = pageNumber;
    query_params["page_size"] = pageSize;
    query_params["name"] = name;
    query_params["is_active"] = isActive;
    query_params["channel_ids"] = channelIds;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zones`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.ListViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getListView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ReAssignStoreRequest} arg.body
   * @returns {Promise<ReAssignStoreResponse>} - Success response
   * @summary: Get serviceable store of the item
   * @description: This API returns serviceable store of the item.
   */
  async getOptimalLocations({ body } = {}) {
    const { error } = ServiceabilityValidator.getOptimalLocations().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.getOptimalLocations().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOptimalLocations",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/reassign`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.ReAssignStoreResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOptimalLocations",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.storeUid - A `store_uid` contains a specific ID of a store.
   * @returns {Promise<GetStoresViewResponse>} - Success response
   * @summary: GET stores data
   * @description: This API returns stores data.
   */
  async getStore({ storeUid } = {}) {
    const { error } = ServiceabilityValidator.getStore().validate(
      {
        storeUid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ServiceabilityValidator.getStore().validate(
      {
        storeUid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getStore",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/stores/${storeUid}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.GetStoresViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getStore",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.zoneId - A `zone_id` is a unique identifier for a
   *   particular zone.
   * @returns {Promise<GetSingleZoneDataViewResponse>} - Success response
   * @summary: Zone Data View of application.
   * @description: This API returns Zone Data View of the application.
   */
  async getZoneDataView({ zoneId } = {}) {
    const { error } = ServiceabilityValidator.getZoneDataView().validate(
      {
        zoneId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.getZoneDataView().validate(
      {
        zoneId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getZoneDataView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zone/${zoneId}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.GetSingleZoneDataViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getZoneDataView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.ruleUid - A `rule_uid` is a unique identifier for a
   *   particular Dp.
   * @param {DpRulesUpdateRequest} arg.body
   * @returns {Promise<DpRuleUpdateSuccessResponse>} - Success response
   * @summary: Updating of DpRules from database.
   * @description: This API updates and returns response of DpRules from mongo database.
   */
  async updateDpRuleView({ ruleUid, body } = {}) {
    const { error } = ServiceabilityValidator.updateDpRuleView().validate(
      {
        ruleUid,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.updateDpRuleView().validate(
      {
        ruleUid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateDpRuleView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/dp-rules/${ruleUid}`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.DpRuleUpdateSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateDpRuleView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.zoneId - A `zone_id` is a unique identifier for a
   *   particular zone.
   * @param {ZoneUpdateRequest} arg.body
   * @returns {Promise<ZoneSuccessResponse>} - Success response
   * @summary: Updation of zone collections in database.
   * @description: This API returns response of updation of zone in mongo database.
   */
  async updateZoneControllerView({
    zoneId,

    body,
  } = {}) {
    const {
      error,
    } = ServiceabilityValidator.updateZoneControllerView().validate(
      {
        zoneId,

        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.updateZoneControllerView().validate(
      {
        zoneId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateZoneControllerView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zone/${zoneId}`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.ZoneSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateZoneControllerView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CompanyDpAccountRequest} arg.body
   * @returns {Promise<CompanyDpAccountResponse>} - Success response
   * @summary: Upsertion of DpAccount in database.
   * @description: This API returns response of upsertion of DpAccount in mongo database.
   */
  async upsertDpAccountView({ body } = {}) {
    const { error } = ServiceabilityValidator.upsertDpAccountView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.upsertDpAccountView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for upsertDpAccountView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/dp-account`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.CompanyDpAccountResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for upsertDpAccountView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DPCompanyRuleRequest} arg.body
   * @returns {Promise<DPCompanyRuleResponse>} - Success response
   * @summary: Upsert of DpCompanyRules in database.
   * @description: This API returns response of upsert of DpCompanyRules in mongo database.
   */
  async upsertDpCompanyRulesView({ body } = {}) {
    const {
      error,
    } = ServiceabilityValidator.upsertDpCompanyRulesView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.upsertDpCompanyRulesView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for upsertDpCompanyRulesView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/logistics`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.DPCompanyRuleResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for upsertDpCompanyRulesView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DpRuleRequest} arg.body
   * @returns {Promise<DpRuleSuccessResponse>} - Success response
   * @summary: Upsert of DpRules in database.
   * @description: This API returns response of upsert of DpRules in mongo database.
   */
  async upsertDpRulesView({ body } = {}) {
    const { error } = ServiceabilityValidator.upsertDpRulesView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.upsertDpRulesView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for upsertDpRulesView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/dp-rules`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.DpRuleSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for upsertDpRulesView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Serviceability;
