const Common = require("./Common/CommonPlatformClient");

const Lead = require("./Lead/LeadPlatformClient");

const Billing = require("./Billing/BillingPlatformClient");

const Communication = require("./Communication/CommunicationPlatformClient");

const Payment = require("./Payment/PaymentPlatformClient");

const Order = require("./Order/OrderPlatformClient");

const Catalog = require("./Catalog/CatalogPlatformClient");

const CompanyProfile = require("./CompanyProfile/CompanyProfilePlatformClient");

const FileStorage = require("./FileStorage/FileStoragePlatformClient");

const Inventory = require("./Inventory/InventoryPlatformClient");

const Configuration = require("./Configuration/ConfigurationPlatformClient");

const Analytics = require("./Analytics/AnalyticsPlatformClient");

const Discount = require("./Discount/DiscountPlatformClient");

const Webhook = require("./Webhook/WebhookPlatformClient");

const AuditTrail = require("./AuditTrail/AuditTrailPlatformClient");

const PlatformApplicationClient = require("./PlatformApplicationClient");
const { FDKClientValidationError } = require("../common/FDKError");

class PlatformClient {
  constructor(config) {
    this.config = config;

    this.common = new Common(config);

    this.lead = new Lead(config);

    this.billing = new Billing(config);

    this.communication = new Communication(config);

    this.payment = new Payment(config);

    this.order = new Order(config);

    this.catalog = new Catalog(config);

    this.companyProfile = new CompanyProfile(config);

    this.fileStorage = new FileStorage(config);

    this.inventory = new Inventory(config);

    this.configuration = new Configuration(config);

    this.analytics = new Analytics(config);

    this.discount = new Discount(config);

    this.webhook = new Webhook(config);

    this.auditTrail = new AuditTrail(config);
  }
  application(applicationId) {
    if (typeof applicationId == "string") {
      return new PlatformApplicationClient(applicationId, this.config);
    }
    throw new Error(
      `Application Id should be of type string, ${typeof applicationId} provided`
    );
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

/**
 * @typedef ApplicationResponse
 * @property {Application} [application]
 */

/**
 * @typedef Currency
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */

/**
 * @typedef Domain
 * @property {boolean} [verified]
 * @property {boolean} [is_primary]
 * @property {boolean} [is_shortlink]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {boolean} [is_predefined]
 */

/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled]
 * @property {string} [basepath]
 */

/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */

/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled]
 */

/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [type]
 */

/**
 * @typedef ApplicationMeta
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef SecureUrl
 * @property {string} [secure_url]
 */

/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description]
 * @property {string} [channel_type]
 * @property {number} [cache_ttl]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {number} [company_id]
 * @property {string} [token]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type]
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 */

/**
 * @typedef NotFound
 * @property {string} [message]
 */

/**
 * @typedef BadRequest
 * @property {string} [message]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name]
 * @property {string} [code]
 */

/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef LocationCountry
 * @property {string} [capital]
 * @property {string} [currency]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 */

/**
 * @typedef Locations
 * @property {Object[]} [items]
 */

/**
 * @typedef TicketList
 * @property {Ticket[]} [items]
 * @property {Filter} [filters]
 * @property {Page} [page]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateCustomFormPayload
 * @property {string} slug
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {string} [header_image]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */

/**
 * @typedef EditCustomFormPayload
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {PriorityEnum} priority
 * @property {string} [header_image]
 * @property {boolean} [should_notify]
 * @property {boolean} [login_required]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */

/**
 * @typedef EditTicketPayload
 * @property {TicketContent} [content]
 * @property {string} [category]
 * @property {string} [sub_category]
 * @property {string} [source]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {AgentChangePayload} [assigned_to]
 * @property {string[]} [tags]
 */

/**
 * @typedef AgentChangePayload
 * @property {string} agent_id
 */

/**
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name
 */

/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success
 */

/**
 * @typedef CreateVideoRoomPayload
 * @property {string} unique_name
 * @property {NotifyUser[]} [notify]
 */

/**
 * @typedef NotifyUser
 * @property {string} country_code
 * @property {string} phone_number
 */

/**
 * @typedef Filter
 * @property {Priority[]} priorities
 * @property {TicketCategory[]} [categories]
 * @property {Status[]} statuses
 * @property {Object[]} assignees
 */

/**
 * @typedef TicketHistoryPayload
 * @property {Object} value
 * @property {HistoryTypeEnum} type
 */

/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response
 * @property {TicketAsset[]} [attachments]
 */

/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token
 */

/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants
 */

/**
 * @typedef Participant
 * @property {UserSchema} [user]
 * @property {string} [identity]
 * @property {string} [status]
 */

/**
 * @typedef UserSchema
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [first_name]
 * @property {Object} [meta]
 * @property {string} [last_name]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {Email[]} [emails]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [active]
 * @property {string} [profile_pic_url]
 * @property {string} [username]
 * @property {string} [account_type]
 * @property {Debug} [debug]
 * @property {boolean} [has_old_password_hash]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [phone]
 * @property {number} [country_code]
 */

/**
 * @typedef Email
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {boolean} [active]
 */

/**
 * @typedef Debug
 * @property {string} [source]
 * @property {string} [platform]
 */

/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message
 * @property {Ticket} [ticket]
 */

/**
 * @typedef TicketContext
 * @property {string} [application_id]
 * @property {string} company_id
 */

/**
 * @typedef CreatedOn
 * @property {string} user_agent
 */

/**
 * @typedef TicketAsset
 * @property {string} [display]
 * @property {string} value
 * @property {TicketAssetTypeEnum} type
 */

/**
 * @typedef TicketContent
 * @property {string} title
 * @property {string} [description]
 * @property {TicketAsset[]} [attachments]
 */

/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {string} category
 * @property {TicketContent} content
 * @property {Object} [_custom_json]
 */

/**
 * @typedef Priority
 * @property {PriorityEnum} key
 * @property {string} display
 * @property {string} color
 */

/**
 * @typedef Status
 * @property {string} key
 * @property {string} display
 * @property {string} color
 */

/**
 * @typedef TicketFeedbackForm
 * @property {string} title
 * @property {Object[]} [display]
 */

/**
 * @typedef TicketFeedbackList
 * @property {TicketFeedback[]} [items]
 */

/**
 * @typedef TicketFeedbackPayload
 * @property {Object} [form_response]
 */

/**
 * @typedef SubmitButton
 * @property {string} title
 * @property {string} title_color
 * @property {string} background_color
 */

/**
 * @typedef PollForAssignment
 * @property {number} duration
 * @property {string} message
 * @property {string} success_message
 * @property {string} failure_message
 */

/**
 * @typedef CustomForm
 * @property {string} application_id
 * @property {string} slug
 * @property {string} [header_image]
 * @property {string} title
 * @property {string} [description]
 * @property {Priority} priority
 * @property {boolean} login_required
 * @property {boolean} should_notify
 * @property {string} [success_message]
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string} _id
 */

/**
 * @typedef CommunicationDetails
 * @property {string} [type]
 * @property {string} [title]
 * @property {string} [value]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SupportGeneralConfig
 * @property {string} [_id]
 * @property {CommunicationDetails} [support_email]
 * @property {CommunicationDetails} [support_phone]
 * @property {CommunicationDetails} [support_faq]
 * @property {boolean} [show_communication_info]
 * @property {CommunicationDetails} [support_communication]
 * @property {boolean} [show_support_dris]
 * @property {Object} [integration]
 */

/**
 * @typedef FeedbackForm
 * @property {Object} [inputs]
 * @property {string} [title]
 * @property {Object} [timestamps]
 */

/**
 * @typedef TicketSubCategory
 * @property {string} key
 * @property {string} display
 * @property {TicketSubCategory} [sub_categories]
 */

/**
 * @typedef TicketCategory
 * @property {string} display
 * @property {string} key
 * @property {TicketCategory} [sub_categories]
 * @property {number} [group_id]
 * @property {FeedbackForm} [feedback_form]
 */

/**
 * @typedef CategoryData
 * @property {TicketCategory} [list]
 */

/**
 * @typedef IntegrationConfig
 * @property {string} [_id]
 * @property {string} integration_type
 * @property {string} [base_url]
 * @property {string} [create_ticket_apikey]
 * @property {string} [update_ticket_apikey]
 * @property {string} [category_sync_apikey]
 * @property {CategoryData} [category_data]
 * @property {string} [webhook_apikey]
 * @property {boolean} [config_completed]
 * @property {boolean} allow_ticket_creation
 * @property {boolean} show_listing
 */

/**
 * @typedef FeedbackResponseItem
 * @property {string} display
 * @property {string} key
 * @property {string} value
 */

/**
 * @typedef TicketFeedback
 * @property {string} _id
 * @property {string} ticket_id
 * @property {string} company_id
 * @property {FeedbackResponseItem[]} response
 * @property {string} [category]
 * @property {Object} [user]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef TicketHistory
 * @property {string} type
 * @property {Object} value
 * @property {string} ticket_id
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id]
 * @property {TicketContent} [content]
 * @property {TicketCategory} category
 * @property {string} [sub_category]
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {Object} [created_by]
 * @property {Object} [assigned_to]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_feedback_pending]
 * @property {Object} [integration]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef AvailablePageSchema
 * @property {string} [value]
 * @property {string} [text]
 * @property {string} [path]
 * @property {string} [type]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {string} [theme]
 * @property {AvailablePageSeo} [seo]
 * @property {Object[]} [props]
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */

/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {AvailablePagePredicate} [predicate]
 */

/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [mobile]
 * @property {boolean} [desktop]
 * @property {boolean} [tablet]
 */

/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [authenticated]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [selected]
 * @property {string} [exact_url]
 * @property {Object} [query]
 */

/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 */

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
 */

/**
 * @typedef ThemesListingResponseSchema
 * @property {ThemesSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */

/**
 * @typedef UpgradableThemeSchema
 * @property {string} [parent_theme]
 * @property {string} [applied_theme]
 * @property {boolean} [upgrade]
 */

/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */

/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef BlitzkriegNotFoundSchema
 * @property {string} [message]
 */

/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef FontsSchemaItems
 * @property {string} [family]
 * @property {string[]} [variants]
 * @property {string[]} [subsets]
 * @property {string} [version]
 * @property {string} [last_modified]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [category]
 * @property {string} [kind]
 */

/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [regular]
 * @property {string} [italic]
 * @property {string} [bold]
 */

/**
 * @typedef ThemesSchema
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [customized]
 * @property {boolean} [published]
 * @property {boolean} [archived]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [version]
 * @property {string} [parent_theme_version]
 * @property {string} [parent_theme]
 * @property {Information} [information]
 * @property {string[]} [tags]
 * @property {Src} [src]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Object} [styles]
 * @property {Config} [config]
 * @property {Font} [font]
 * @property {string} [_id]
 * @property {number} [__v]
 * @property {Colors} [colors]
 */

/**
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [name]
 * @property {string} [label]
 * @property {BlocksProps[]} [props]
 */

/**
 * @typedef Information
 * @property {Images} [images]
 * @property {string[]} [features]
 * @property {string} [name]
 * @property {string} [description]
 */

/**
 * @typedef Images
 * @property {string[]} [desktop]
 * @property {string[]} [android]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */

/**
 * @typedef Src
 * @property {string} [link]
 */

/**
 * @typedef AssetsSchema
 * @property {UmdJs} [umd_js]
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 */

/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef CommonJs
 * @property {string} [link]
 */

/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef Sections
 * @property {string} [attributes]
 */

/**
 * @typedef Config
 * @property {Preset} [preset]
 * @property {GlobalSchema} [global_schema]
 * @property {string} [current]
 * @property {ListSchemaItem[]} [list]
 */

/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */

/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {ConfigPage[]} [page]
 * @property {string} [name]
 */

/**
 * @typedef Colors
 * @property {string} [bg_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 * @property {string} [accent_color]
 * @property {string} [link_color]
 * @property {string} [button_secondary_color]
 */

/**
 * @typedef Custom
 * @property {Object} [props]
 */

/**
 * @typedef ConfigPage
 * @property {Object} [settings]
 * @property {string} [page]
 */

/**
 * @typedef Font
 * @property {string} [family]
 * @property {Variants} [variants]
 */

/**
 * @typedef Variants
 * @property {Medium} [medium]
 * @property {SemiBold} [semi_bold]
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Regular} [regular]
 */

/**
 * @typedef Medium
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef SemiBold
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Bold
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Light
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Regular
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Blocks
 * @property {string} [type]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 */

/**
 * @typedef GlobalSchemaProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 * @property {string} [category]
 */

/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */

/**
 * @typedef BlockUserRequestSchema
 * @property {boolean} [status]
 * @property {string[]} [user_id]
 * @property {string} [reason]
 */

/**
 * @typedef ArchiveUserRequestSchema
 * @property {string} [user_id]
 */

/**
 * @typedef DeleteApplicationUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 * @property {string} [request_id]
 * @property {string} [otp]
 */

/**
 * @typedef UnDeleteUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 */

/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */

/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified]
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 */

/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */

/**
 * @typedef EditProfileRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} [profile_pic_url]
 * @property {string} [android_hash]
 * @property {string} [sender]
 * @property {string} [register_token]
 */

/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone]
 * @property {string} [country_code]
 */

/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [register_token]
 */

/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [register_token]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [request_id]
 * @property {string} [register_token]
 * @property {string} [otp]
 */

/**
 * @typedef SendMobileOtpRequestSchema
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [android_hash]
 * @property {string} [force]
 * @property {string} [captcha_code]
 */

/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [old_password]
 * @property {string} [new_password]
 */

/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [password]
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token]
 */

/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token]
 */

/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code]
 * @property {string} [password]
 */

/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code]
 */

/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [email]
 * @property {string} [captcha_code]
 */

/**
 * @typedef SendResetPasswordMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {string} [captcha_code]
 */

/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef SendOtpRequestSchema
 * @property {string} [country_code]
 * @property {string} [captcha_code]
 * @property {string} [mobile]
 * @property {string} [android_hash]
 */

/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */

/**
 * @typedef OAuthRequestAppleSchema
 * @property {string} [user_identifier]
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 */

/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef AuthSuccess
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 * @property {UserSchema} [user]
 */

/**
 * @typedef SendOtpResponse
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [register_token]
 * @property {string} [resend_email_token]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [email]
 * @property {string} [request_id]
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 */

/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [request_id]
 * @property {string} [register_token]
 */

/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 * @property {string} [register_token]
 */

/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */

/**
 * @typedef RegisterFormSuccess
 * @property {string} [email]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */

/**
 * @typedef HasPasswordSuccess
 * @property {boolean} [result]
 */

/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */

/**
 * @typedef BlockUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef ArchiveUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef DeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef UnDeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef OtpSuccess
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 */

/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */

/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */

/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
 */

/**
 * @typedef SessionListResponseSchema
 * @property {string[]} [items]
 */

/**
 * @typedef SessionDeleteResponseSchema
 * @property {string[]} [items]
 */

/**
 * @typedef UnauthorizedSchema
 * @property {string} [message]
 */

/**
 * @typedef UnauthenticatedSchema
 * @property {boolean} [authenticated]
 */

/**
 * @typedef NotFoundSchema
 * @property {string} [message]
 */

/**
 * @typedef AuthenticationInternalServerErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef ProfileEditSuccessSchema
 * @property {string} [email]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [user]
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code]
 * @property {string} [mobile]
 */

/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token]
 * @property {number} [expiry]
 * @property {string} [refresh_token]
 */

/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [last_name]
 * @property {string} [image]
 * @property {string} [id]
 * @property {string} [email]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */

/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token]
 */

/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [last_name]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */

/**
 * @typedef AuthSuccessUser
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {AuthSuccessUserDebug} [debug]
 * @property {boolean} [active]
 * @property {AuthSuccessUserEmails} [emails]
 */

/**
 * @typedef AuthSuccessUserDebug
 * @property {string} [platform]
 */

/**
 * @typedef AuthSuccessUserEmails
 * @property {string} [email]
 * @property {boolean} [verified]
 * @property {boolean} [primary]
 * @property {boolean} [active]
 */

/**
 * @typedef CreateUserRequestSchema
 * @property {string} phone_number
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} username
 * @property {Object} [meta]
 */

/**
 * @typedef CreateUserResponseSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef CreateUserSessionRequestSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {string} [user_id]
 */

/**
 * @typedef CreateUserSessionResponseSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {boolean} [secure]
 * @property {boolean} [http_only]
 * @property {Object} [cookie]
 */

/**
 * @typedef PlatformSchema
 * @property {string} [display]
 * @property {LookAndFeel} [look_and_feel]
 * @property {string} [updated_at]
 * @property {boolean} [active]
 * @property {boolean} [forgot_password]
 * @property {Login} [login]
 * @property {boolean} [skip_captcha]
 * @property {string} [name]
 * @property {MetaSchema} [meta]
 * @property {string} [_id]
 * @property {Social} [social]
 * @property {RequiredFields} [required_fields]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {boolean} [skip_login]
 * @property {FlashCard} [flash_card]
 * @property {string} [subtext]
 * @property {SocialTokens} [social_tokens]
 * @property {string} [created_at]
 * @property {boolean} [register]
 * @property {string} [mobile_image]
 * @property {string} [desktop_image]
 * @property {number} [delete_account_day]
 * @property {DeleteAccountReasons[]} [delete_account_reasons]
 * @property {Object} [delete_account_consent]
 * @property {Object} [session_config]
 */

/**
 * @typedef LookAndFeel
 * @property {string} [card_position]
 * @property {string} [background_color]
 */

/**
 * @typedef Login
 * @property {boolean} [password]
 * @property {boolean} [otp]
 */

/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default]
 */

/**
 * @typedef Social
 * @property {boolean} [account_kit]
 * @property {boolean} [facebook]
 * @property {boolean} [google]
 * @property {boolean} [apple]
 */

/**
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */

/**
 * @typedef PlatformEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef PlatformMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 */

/**
 * @typedef RegisterRequiredFieldsEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef RegisterRequiredFieldsMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef FlashCard
 * @property {string} [text]
 * @property {string} [text_color]
 * @property {string} [background_color]
 */

/**
 * @typedef SocialTokens
 * @property {Facebook} [facebook]
 * @property {Accountkit} [account_kit]
 * @property {Google} [google]
 */

/**
 * @typedef DeleteAccountReasons
 * @property {string} [reason_text]
 * @property {string} [reason_id]
 * @property {boolean} [show_text_area]
 */

/**
 * @typedef DeleteAccountConsent
 * @property {string} [consent_text]
 */

/**
 * @typedef Facebook
 * @property {string} [app_id]
 */

/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */

/**
 * @typedef Google
 * @property {string} [app_id]
 */

/**
 * @typedef SessionExpiry
 * @property {number} [duration]
 * @property {string} [type]
 * @property {boolean} [is_rolling]
 */

/**
 * @typedef UpdateUserRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [external_id]
 * @property {Object} [meta]
 */

/**
 * @typedef UserSchema
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [first_name]
 * @property {Object} [meta]
 * @property {string} [last_name]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {Email[]} [emails]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [active]
 * @property {string} [profile_pic_url]
 * @property {string} [username]
 * @property {string} [account_type]
 * @property {Debug} [debug]
 * @property {boolean} [has_old_password_hash]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [phone]
 * @property {number} [country_code]
 */

/**
 * @typedef Email
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {boolean} [active]
 */

/**
 * @typedef Debug
 * @property {string} [source]
 * @property {string} [platform]
 */

/**
 * @typedef ApplicationLegal
 * @property {string} [application]
 * @property {string} [tnc]
 * @property {string} [policy]
 * @property {string} [shipping]
 * @property {string} [returns]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question]
 * @property {string} [answer]
 */

/**
 * @typedef PathMappingSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */

/**
 * @typedef SeoSchema
 * @property {string} [app]
 * @property {string} [_id]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {Object[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomMetaTag
 * @property {string} [name]
 * @property {string} [content]
 * @property {string} [_id]
 */

/**
 * @typedef Detail
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */

/**
 * @typedef EditorMeta
 * @property {string} [foreground_color]
 * @property {string} [background_color]
 * @property {string} [content_type]
 * @property {string} [content]
 */

/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {string[]} [platforms]
 * @property {string} [title]
 * @property {string} [announcement]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {EditorMeta} [editor_meta]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {string} [app]
 * @property {string} [modified_at]
 * @property {ScheduleSchema} [_schedule]
 */

/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */

/**
 * @typedef ScheduleStartSchema
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */

/**
 * @typedef Author
 * @property {string} [designation]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef BlogSchema
 * @property {string} [_id]
 * @property {Object} [_custom_json]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 */

/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */

/**
 * @typedef SEOImage
 * @property {string} [url]
 */

/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef BlogRequest
 * @property {string} [application]
 * @property {Object} [_custom_json]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 */

/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateAnnouncementSchema
 * @property {string} [message]
 * @property {AdminAnnouncementSchema} [data]
 */

/**
 * @typedef DataLoaderResponseSchema
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 */

/**
 * @typedef DataLoaderResetResponseSchema
 * @property {string} [reset]
 */

/**
 * @typedef Navigation
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [orientation]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {NavigationReference} [navigation]
 */

/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */

/**
 * @typedef Language
 * @property {string} [display]
 */

/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
 */

/**
 * @typedef NavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 */

/**
 * @typedef LandingPage
 * @property {LandingPageSchema} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef ConfigurationSchema
 * @property {number} [sleep_time]
 * @property {boolean} [start_on_launch]
 * @property {number} [duration]
 * @property {string} [slide_direction]
 */

/**
 * @typedef SlideshowMedia
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {boolean} [auto_decide_duration]
 * @property {Action} [action]
 */

/**
 * @typedef Slideshow
 * @property {SlideshowSchema} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {number} [refresh_rate]
 * @property {string[]} [refresh_pages]
 */

/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */

/**
 * @typedef HandpickedTagSchema
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [content]
 */

/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */

/**
 * @typedef CreateTagSchema
 * @property {string} [name]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {Object[]} [pages]
 * @property {string} [content]
 */

/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */

/**
 * @typedef DataLoaderSchema
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 */

/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */

/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */

/**
 * @typedef CommonError
 * @property {string} [message]
 */

/**
 * @typedef CategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ChildrenSchema
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 */

/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */

/**
 * @typedef FAQCategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string[]} [tags]
 */

/**
 * @typedef FAQ
 * @property {string} [slug]
 * @property {string} [question]
 * @property {string} [answer]
 */

/**
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */

/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */

/**
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef CreateFaqCategoryRequestSchema
 * @property {CategoryRequestSchema} [category]
 */

/**
 * @typedef CreateFaqCategorySchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories]
 */

/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LandingPageSchema
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */

/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Orientation
 * @property {string[]} [portrait]
 * @property {string[]} [landscape]
 */

/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version]
 * @property {NavigationReference[]} [navigation]
 */

/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationReference[]} [navigation]
 */

/**
 * @typedef CustomPageSchema
 * @property {string} [_id]
 * @property {string} [platform]
 * @property {string} [title]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [orientation]
 * @property {string} [application]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {Object[]} [content]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {ScheduleSchema} [_schedule]
 */

/**
 * @typedef ContentSchema
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef CustomPage
 * @property {CustomPageSchema} [data]
 */

/**
 * @typedef FeatureImage
 * @property {string} [secure_url]
 */

/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PageSpec
 * @property {Object[]} [specifications]
 */

/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */

/**
 * @typedef PageSpecItem
 * @property {string} [page_type]
 * @property {string} [display_name]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */

/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [component_ids]
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta]
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {SEO} [seo]
 * @property {Object} [visibility]
 * @property {boolean} [archived]
 */

/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */

/**
 * @typedef PageContent
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef PageMeta
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PageRequest
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {string} [title]
 */

/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 */

/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */

/**
 * @typedef PageMetaSchema
 * @property {NavigationSchema[]} [system_pages]
 * @property {PageSchema[]} [custom_pages]
 * @property {string} [application_id]
 */

/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SlideshowSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {DateMeta} [date_meta]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media]
 * @property {boolean} [active]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef SlideshowRequest
 * @property {string} [slug]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {boolean} [active]
 */

/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [config_type]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {ContactSchema} [contact]
 */

/**
 * @typedef PhoneProperties
 * @property {string} [key]
 * @property {string} [code]
 * @property {string} [number]
 */

/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */

/**
 * @typedef EmailProperties
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailSchema
 * @property {boolean} [active]
 * @property {EmailProperties[]} [email]
 */

/**
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */

/**
 * @typedef TagsSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {TagSchema[]} [tags]
 */

/**
 * @typedef TagSchema
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {Object[]} [pages]
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef UnauthenticatedUser
 * @property {string} [message]
 */

/**
 * @typedef UnauthenticatedApplication
 * @property {string} [message]
 */

/**
 * @typedef BadRequest
 * @property {string} [message]
 */

/**
 * @typedef ResourceNotFound
 * @property {string} [message]
 */

/**
 * @typedef InternalServerError
 * @property {string} [message]
 * @property {string} [code]
 */

/**
 * @typedef CheckValidityResponse
 * @property {boolean} [is_valid]
 * @property {number} [discount_amount]
 */

/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */

/**
 * @typedef Plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef DetailedPlanComponents
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {boolean} [enabled]
 * @property {string} [display_text]
 */

/**
 * @typedef DetailedPlan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {DetailedPlanComponents[]} [components]
 */

/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */

/**
 * @typedef EntityChargePrice
 * @property {number} amount
 * @property {string} currency_code
 */

/**
 * @typedef EntityChargeRecurring
 * @property {string} interval
 */

/**
 * @typedef ChargeLineItem
 * @property {string} name
 * @property {string} term
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {number} [trial_days]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */

/**
 * @typedef CreateSubscriptionCharge
 * @property {string} name
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test]
 * @property {string} return_url
 */

/**
 * @typedef CurrentPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */

/**
 * @typedef SubscriptionCharge
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [term]
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {string} [billing_date]
 * @property {CurrentPeriod} [current_period]
 * @property {string} [status]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */

/**
 * @typedef EntitySubscription
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {number} [trial_days]
 * @property {SubscriptionTrialPeriod} [trial_period]
 * @property {Object} [metadata]
 * @property {SubscriptionCharge[]} [line_items]
 */

/**
 * @typedef CreateSubscriptionResponse
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url]
 */

/**
 * @typedef InvoiceDetailsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoiceDetailsClient
 * @property {string[]} [address_lines]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 */

/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id]
 * @property {string} [value]
 * @property {string} [timestamp]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataChecks
 * @property {string} [cvc_check]
 * @property {string} [address_line1_check]
 * @property {string} [address_postal_code_check]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataNetworks
 * @property {string[]} [available]
 * @property {string} [preferred]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
 * @property {boolean} [supported]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsData
 * @property {string} [brand]
 * @property {string} [last4]
 * @property {InvoiceDetailsPaymentMethodsDataChecks} [checks]
 * @property {string} [wallet]
 * @property {string} [country]
 * @property {string} [funding]
 * @property {number} [exp_year]
 * @property {InvoiceDetailsPaymentMethodsDataNetworks} [networks]
 * @property {number} [exp_month]
 * @property {string} [fingerprint]
 * @property {string} [generated_from]
 * @property {InvoiceDetailsPaymentMethodsDataThreeDSecureUsage} [three_d_secure_usage]
 */

/**
 * @typedef InvoiceDetailsPaymentMethods
 * @property {number} [id]
 * @property {string} [type]
 * @property {string} [pg_payment_method_id]
 * @property {InvoiceDetailsPaymentMethodsData} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef InvoicePaymentMethod
 * @property {string} [pg_payment_method_id]
 */

/**
 * @typedef InvoiceDetails
 * @property {InvoiceDetailsPeriod} [period]
 * @property {InvoiceDetailsClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [_id]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicePaymentMethod} [payment_method]
 */

/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */

/**
 * @typedef InvoiceItemsPlan
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoiceItems
 * @property {string} [_id]
 * @property {string} [currency]
 * @property {InvoiceItemsPlan} [plan]
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {string} [description]
 * @property {InvoiceItemsPeriod} [period]
 * @property {number} [unit_amount]
 * @property {number} [amount]
 * @property {string} [type]
 * @property {string} [invoice_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef Invoice
 * @property {InvoiceDetails} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 */

/**
 * @typedef InvoicesDataClient
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string[]} [address_lines]
 */

/**
 * @typedef InvoicesDataPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id]
 */

/**
 * @typedef InvoicesData
 * @property {string} [_id]
 * @property {InvoicesDataClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {InvoicesDataPeriod} [period]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoiceItems[]} [invoice_items]
 */

/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [start]
 * @property {number} [end]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [total]
 */

/**
 * @typedef Phone
 * @property {string} [phone_number]
 * @property {string} [phone_country_code]
 */

/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 */

/**
 * @typedef SubscriptionCustomer
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [_id]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {Object} [data]
 */

/**
 * @typedef SubscriptionCustomerCreate
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior]
 * @property {string} [resume_at]
 */

/**
 * @typedef SubscriptionTrial
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [generation]
 * @property {boolean} [charging]
 */

/**
 * @typedef Subscription
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {SubscriptionTrial} [trial]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active]
 * @property {boolean} [cancel_at_period_end]
 * @property {string} [_id]
 * @property {string} [subscriber_id]
 * @property {string} [plan_id]
 * @property {string} [product_suite_id]
 * @property {Plan} [plan_data]
 * @property {string} [current_status]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [latest_invoice]
 */

/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled]
 * @property {Subscription} [subscription]
 */

/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
 */

/**
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled]
 */

/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled]
 */

/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitExtensions
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitIntegrations
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimit
 * @property {SubscriptionLimitApplication} [application]
 * @property {SubscriptionLimitMarketplace} [marketplace]
 * @property {SubscriptionLimitOtherPlatform} [other_platform]
 * @property {SubscriptionLimitTeam} [team]
 * @property {SubscriptionLimitProducts} [products]
 * @property {SubscriptionLimitExtensions} [extensions]
 * @property {SubscriptionLimitIntegrations} [integrations]
 * @property {boolean} [is_trial_plan]
 */

/**
 * @typedef SubscriptionActivateReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [plan_id]
 * @property {string} [payment_method]
 */

/**
 * @typedef SubscriptionActivateRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */

/**
 * @typedef CancelSubscriptionReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [subscription_id]
 */

/**
 * @typedef CancelSubscriptionRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */

/**
 * @typedef StatsImported
 * @property {number} [count]
 */

/**
 * @typedef StatsProcessedEmail
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */

/**
 * @typedef StatsProcessedSms
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */

/**
 * @typedef StatsProcessed
 * @property {StatsProcessedEmail} [email]
 * @property {StatsProcessedSms} [sms]
 */

/**
 * @typedef Stats
 * @property {string} [_id]
 * @property {Object} [imported]
 * @property {Object} [processed]
 */

/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */

/**
 * @typedef CampaignReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */

/**
 * @typedef RecipientHeaders
 * @property {string} [email]
 */

/**
 * @typedef CampaignEmailTemplate
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef CampignEmailProvider
 * @property {string} [_id]
 * @property {string} [from_name]
 * @property {string} [from_email]
 */

/**
 * @typedef CampaignEmail
 * @property {CampaignEmailTemplate} [template]
 * @property {CampignEmailProvider} [provider]
 */

/**
 * @typedef Campaign
 * @property {RecipientHeaders} [recipient_headers]
 * @property {CampaignEmail} [email]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [datasource]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef Campaigns
 * @property {Campaign[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BadRequestSchema
 * @property {string} [status]
 * @property {string} [message]
 */

/**
 * @typedef NotFound
 * @property {string} [message]
 */

/**
 * @typedef BigqueryHeadersReq
 * @property {string} [query]
 * @property {string} [type]
 */

/**
 * @typedef BigqueryHeadersResHeaders
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef BigqueryHeadersRes
 * @property {BigqueryHeadersResHeaders[]} [headers]
 */

/**
 * @typedef GetNRecordsCsvReq
 * @property {string} [url]
 * @property {boolean} [header]
 * @property {number} [count]
 */

/**
 * @typedef GetNRecordsCsvResItems
 * @property {string} [phone_number]
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [orderid]
 */

/**
 * @typedef GetNRecordsCsvRes
 * @property {GetNRecordsCsvResItems[]} [items]
 */

/**
 * @typedef AudienceReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */

/**
 * @typedef Audience
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef Audiences
 * @property {Audience[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EmailProviderReqFrom
 * @property {string} [name]
 * @property {string} [email]
 * @property {boolean} [is_default]
 */

/**
 * @typedef EmailProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 */

/**
 * @typedef EmailProvider
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef EmailProviders
 * @property {EmailProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EmailTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef EmailTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef EmailTemplateKeys
 * @property {string} [to]
 * @property {string} [cc]
 * @property {string} [bcc]
 */

/**
 * @typedef EmailTemplateHeaders
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {EmailTemplateKeys} [keys]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */

/**
 * @typedef TemplateAndType
 * @property {string} [template_type]
 * @property {string} [template]
 */

/**
 * @typedef EmailTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef EmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SystemEmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [_id]
 */

/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailTemplateStructure} [template]
 * @property {PayloadEmailProviderStructure} [provider]
 */

/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [_id]
 */

/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsTemplateStructure} [template]
 * @property {PayloadSmsProviderStructure} [provider]
 */

/**
 * @typedef PayloadStructure
 * @property {Object[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 * @property {string} [application]
 */

/**
 * @typedef MetaStructure
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {string} [trace]
 * @property {string} [timestamp]
 */

/**
 * @typedef EngineRequest
 * @property {PayloadStructure} [payload]
 * @property {MetaStructure} [meta]
 */

/**
 * @typedef EngineResponse
 * @property {boolean} [success]
 */

/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateSms} [sms]
 * @property {EventSubscriptionTemplateEmail} [email]
 */

/**
 * @typedef EventSubscription
 * @property {EventSubscriptionTemplate} [template]
 * @property {boolean} [is_default]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [event]
 * @property {string} [slug]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef EventSubscriptions
 * @property {EventSubscription[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TriggerJobResponse
 * @property {number} [status]
 */

/**
 * @typedef TriggerJobRequest
 * @property {string} [job_id]
 */

/**
 * @typedef Job
 * @property {boolean} [completed]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [campaign]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef Jobs
 * @property {Job[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef JobLog
 * @property {Object} [imported]
 * @property {Object} [processed]
 * @property {string} [_id]
 * @property {string} [job]
 * @property {string} [campaign]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef JobLogs
 * @property {JobLog[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LogEmail
 * @property {string} [template]
 */

/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */

/**
 * @typedef LogMeta
 * @property {string} [type]
 * @property {string} [identifier]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 */

/**
 * @typedef Log
 * @property {LogEmail} [email]
 * @property {LogPushnotification} [pushnotification]
 * @property {LogMeta} [meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [service]
 * @property {string} [step]
 * @property {string} [status]
 * @property {Object} [data]
 * @property {string} [expire_at]
 * @property {string} [created_at]
 */

/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SendOtpSmsCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef SendOtpSmsCommsProvider
 * @property {string} [slug]
 * @property {string} [_id]
 */

/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef SendOtpCommsReqData
 * @property {boolean} [send_same_otp_to_channel]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [to]
 */

/**
 * @typedef SendOtpCommsReqSms
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpSmsCommsTemplate} [template]
 * @property {SendOtpSmsCommsProvider} [provider]
 */

/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpEmailCommsTemplate} [template]
 */

/**
 * @typedef SendOtpCommsResSms
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {number} [resend_timer]
 */

/**
 * @typedef SendOtpCommsResEmail
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [to]
 * @property {number} [resend_timer]
 */

/**
 * @typedef SendOtpCommsReq
 * @property {SendOtpCommsReqData} [data]
 * @property {SendOtpCommsReqSms} [sms]
 * @property {SendOtpCommsReqEmail} [email]
 */

/**
 * @typedef SendOtpCommsRes
 * @property {SendOtpCommsResSms} [sms]
 * @property {SendOtpCommsResEmail} [email]
 */

/**
 * @typedef VerifyOtpCommsReq
 * @property {string} [request_id]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyOtpCommsSuccessRes
 * @property {boolean} [success]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [message]
 */

/**
 * @typedef VerifyOtpCommsErrorRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 */

/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 * @property {string} [platform]
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [expired_at]
 */

/**
 * @typedef SmsProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [type]
 * @property {string} [provider]
 */

/**
 * @typedef SmsProvider
 * @property {number} [rpt]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef SmsProviders
 * @property {SmsProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SmsTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsTemplateMessage
 * @property {string} [template_type]
 * @property {string} [template]
 */

/**
 * @typedef SmsTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */

/**
 * @typedef SmsTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef SmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string} [priority]
 * @property {Object[]} [tags]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SystemSmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SmsTemplates
 * @property {SmsTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SystemSmsTemplates
 * @property {SystemSmsTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Notification
 * @property {string} [title]
 * @property {string} [body]
 * @property {string} [subtitle]
 * @property {string} [icon]
 * @property {string} [deeplink]
 * @property {string} [click_action]
 */

/**
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef SystemNotificationSettings
 * @property {boolean} [sound]
 * @property {string} [priority]
 * @property {string} [time_to_live]
 */

/**
 * @typedef SystemNotification
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [user]
 * @property {SystemNotificationUser} [settings]
 * @property {string} [_id]
 * @property {string} [group]
 * @property {string} [created_at]
 */

/**
 * @typedef SystemNotificationsPage
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */

/**
 * @typedef SystemNotifications
 * @property {SystemNotification[]} [items]
 * @property {number} [last_read_anchor]
 * @property {Page} [page]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef PaymentGatewayConfigResponse
 * @property {Object[]} [aggregators]
 * @property {boolean} success
 * @property {string} app_id
 * @property {string[]} excluded_fields
 * @property {string[]} display_fields
 * @property {boolean} created
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} description
 * @property {string} code
 * @property {boolean} success
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} key
 * @property {string} secret
 * @property {string} config_type
 * @property {boolean} [is_active]
 * @property {string} merchant_salt
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {boolean} [is_active]
 * @property {string} app_id
 * @property {PaymentGatewayConfig} [aggregator_name]
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregator
 * @property {boolean} success
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} description
 * @property {string} code
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} error
 * @property {boolean} success
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} large
 * @property {string} small
 */

/**
 * @typedef IntentApp
 * @property {string} [package_name]
 * @property {string} [code]
 * @property {string} [display_name]
 * @property {PaymentModeLogo} [logos]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [code]
 * @property {string} [card_number]
 * @property {string} [card_brand]
 * @property {string} [display_name]
 * @property {string} aggregator_name
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string} [name]
 * @property {string} [fynd_vpa]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_token]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_type]
 * @property {number} [exp_year]
 * @property {string} [nickname]
 * @property {string} [merchant_code]
 * @property {boolean} [intent_flow]
 * @property {number} [timeout]
 * @property {string} [card_name]
 * @property {string} [card_issuer]
 * @property {string} [card_reference]
 * @property {number} [display_priority]
 * @property {number} [exp_month]
 * @property {number} [remaining_limit]
 * @property {number} [cod_limit_per_order]
 * @property {string} [card_id]
 * @property {number} [cod_limit]
 * @property {number} [retry_count]
 * @property {string} [card_fingerprint]
 * @property {string[]} [intent_app_error_list]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {boolean} [expired]
 * @property {string} [card_brand_image]
 * @property {string} [card_isin]
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [add_card_enabled]
 * @property {boolean} [save_card]
 * @property {string} display_name
 * @property {boolean} [is_pay_by_card_pl]
 * @property {string} [aggregator_name]
 * @property {boolean} [anonymous_enable]
 * @property {string} name
 * @property {number} display_priority
 * @property {PaymentModeList[]} [list]
 */

/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */

/**
 * @typedef PaymentOptionsResponse
 * @property {PaymentOptions} payment_options
 * @property {boolean} success
 */

/**
 * @typedef PayoutsResponse
 * @property {Object} customers
 * @property {Object} more_attributes
 * @property {Object} unique_transfer_no
 * @property {Object[]} payouts_aggregators
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} transfer_type
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} [branch_name]
 * @property {string} [account_holder]
 * @property {string} [bank_name]
 * @property {string} [account_no]
 * @property {string} [country]
 * @property {string} ifsc_code
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} account_type
 */

/**
 * @typedef PayoutRequest
 * @property {string} unique_external_id
 * @property {string} aggregator
 * @property {Object} users
 * @property {boolean} is_active
 * @property {PayoutBankDetails} bank_details
 * @property {string} transfer_type
 */

/**
 * @typedef PayoutResponse
 * @property {string} aggregator
 * @property {boolean} success
 * @property {string} payment_status
 * @property {Object} users
 * @property {string} unique_transfer_no
 * @property {boolean} is_active
 * @property {Object} bank_details
 * @property {boolean} created
 * @property {Object} payouts
 * @property {string} transfer_type
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_default
 * @property {boolean} success
 * @property {boolean} is_active
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {string} unique_external_id
 * @property {boolean} is_default
 * @property {boolean} is_active
 */

/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {Object[]} data
 * @property {boolean} success
 */

/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionConfigResponse
 * @property {Object} config
 * @property {string} aggregator
 * @property {boolean} success
 */

/**
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id
 */

/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {Object} data
 * @property {boolean} success
 */

/**
 * @typedef RefundAccountResponse
 * @property {string} message
 * @property {boolean} [is_verified_flag]
 * @property {Object} [data]
 * @property {boolean} success
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} description
 * @property {string} code
 * @property {boolean} success
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} branch_name
 * @property {string} bank_name
 * @property {string} account_holder
 * @property {string} account_no
 * @property {string} ifsc_code
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} bank_name
 * @property {string} branch_name
 * @property {boolean} [success]
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} [mobile]
 * @property {string} address
 * @property {string} beneficiary_id
 * @property {string} subtitle
 * @property {string} display_name
 * @property {number} id
 * @property {boolean} is_active
 * @property {string} modified_on
 * @property {string} [branch_name]
 * @property {string} created_on
 * @property {string} [comment]
 * @property {string} [delights_user_name]
 * @property {string} transfer_mode
 * @property {string} title
 * @property {string} bank_name
 * @property {string} email
 * @property {string} account_holder
 * @property {string} account_no
 * @property {string} ifsc_code
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [order_id]
 * @property {string} [payment_gateway]
 * @property {string} [payment_id]
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} [name]
 * @property {string} mode
 * @property {number} amount
 * @property {MultiTenderPaymentMeta} [meta]
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} message
 * @property {string} order_id
 * @property {boolean} success
 */

/**
 * @typedef CODdata
 * @property {number} limit
 * @property {string} user_id
 * @property {number} remaining_limit
 * @property {boolean} is_active
 * @property {number} usages
 */

/**
 * @typedef GetUserCODLimitResponse
 * @property {CODdata} user_cod_data
 * @property {boolean} success
 */

/**
 * @typedef SetCODForUserRequest
 * @property {string} merchant_user_id
 * @property {string} mobileno
 * @property {boolean} is_active
 */

/**
 * @typedef SetCODOptionResponse
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef ShipmentStatus
 * @property {string} title
 * @property {string} hex_code
 * @property {string} status
 * @property {string} ops_status
 * @property {string} actual_status
 */

/**
 * @typedef Prices
 * @property {number} [discount]
 * @property {number} [tax_collected_at_source]
 * @property {number} [value_of_good]
 * @property {number} [price_effective]
 * @property {number} [refund_credit]
 * @property {number} [promotion_effective_discount]
 * @property {number} [refund_amount]
 * @property {number} [cod_charges]
 * @property {number} [fynd_credits]
 * @property {number} [price_marked]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [coupon_value]
 * @property {number} [amount_paid]
 * @property {number} [delivery_charge]
 * @property {number} [cashback_applied]
 * @property {number} [cashback]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} tax_collected_at_source
 * @property {number} value_of_good
 * @property {number} brand_calculated_amount
 * @property {string} gstin_code
 * @property {number} gst_fee
 */

/**
 * @typedef PlatformItem
 * @property {boolean} [can_cancel]
 * @property {number} [id]
 * @property {boolean} [can_return]
 * @property {string[]} [l1_category]
 * @property {number} [l3_category]
 * @property {string} [l3_category_name]
 * @property {number} [department_id]
 * @property {string} [code]
 * @property {string} [name]
 * @property {string[]} [images]
 * @property {string} [color]
 * @property {string} [size]
 * @property {string[]} [image]
 */

/**
 * @typedef BagUnit
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {Prices} [prices]
 * @property {string} shipment_id
 * @property {number} item_quantity
 * @property {number} total_shipment_bags
 * @property {GSTDetailsData} [gst]
 * @property {Object} status
 * @property {string} ordering_channel
 * @property {number} bag_id
 * @property {PlatformItem} [item]
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} type
 * @property {string} logo
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} id
 * @property {string} code
 */

/**
 * @typedef UserDataInfo
 * @property {string} [mobile]
 * @property {number} [uid]
 * @property {string} [avis_user_id]
 * @property {string} [first_name]
 * @property {string} [email]
 * @property {string} [last_name]
 * @property {string} [name]
 * @property {string} [gender]
 * @property {boolean} [is_anonymous_user]
 */

/**
 * @typedef ShipmentItem
 * @property {Object} [sla]
 * @property {ShipmentStatus} [shipment_status]
 * @property {Prices} [prices]
 * @property {string} id
 * @property {BagUnit[]} [bags]
 * @property {number} total_shipments_in_order
 * @property {number} total_bags_count
 * @property {Object} [application]
 * @property {Object} [payment_methods]
 * @property {string} created_at
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {string} fulfilling_centre
 * @property {Object} [channel]
 * @property {number} shipment_created_at
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {UserDataInfo} [user]
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [name]
 * @property {string} text
 * @property {string} [value]
 */

/**
 * @typedef FiltersInfo
 * @property {string} type
 * @property {string} text
 * @property {FilterInfoOption[]} [options]
 * @property {string} value
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {Object} [page]
 * @property {ShipmentItem[]} [items]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [applied_filters]
 */

/**
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef BagStateMapper
 * @property {string} display_name
 * @property {number} bs_id
 * @property {boolean} [is_active]
 * @property {string} name
 * @property {string} journey_type
 * @property {string} state_type
 * @property {string} [app_display_name]
 * @property {string} [app_state_name]
 * @property {boolean} [app_facing]
 * @property {boolean} [notify_customer]
 */

/**
 * @typedef BagStatusHistory
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [display_name]
 * @property {string} [updated_at]
 * @property {Object[]} [reasons]
 * @property {string} [shipment_id]
 * @property {string} [delivery_awb_number]
 * @property {boolean} [forward]
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {string} status
 * @property {string} [created_at]
 * @property {string} [app_display_name]
 * @property {boolean} [kafka_sync]
 * @property {number} [delivery_partner_id]
 * @property {number} [bag_id]
 * @property {number} [bsh_id]
 * @property {number} [store_id]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [order_date]
 * @property {string} [cod_charges]
 * @property {string} fynd_order_id
 * @property {string} [order_value]
 * @property {string} [affiliate_id]
 * @property {Object} [tax_details]
 * @property {string} [ordering_channel]
 * @property {string} [source]
 * @property {Object} [ordering_channel_logo]
 */

/**
 * @typedef DPDetailsData
 * @property {number} [id]
 * @property {string} [awb_no]
 * @property {string} [eway_bill_id]
 * @property {string} [pincode]
 * @property {string} [name]
 * @property {string} [country]
 * @property {string} [track_url]
 * @property {string} [gst_tag]
 */

/**
 * @typedef UserDetailsData
 * @property {string} [email]
 * @property {string} city
 * @property {string} pincode
 * @property {string} name
 * @property {string} address
 * @property {string} country
 * @property {string} state
 * @property {string} phone
 */

/**
 * @typedef TrackingList
 * @property {boolean} [is_passed]
 * @property {string} [time]
 * @property {string} text
 * @property {string} status
 * @property {boolean} [is_current]
 */

/**
 * @typedef OrderBagArticle
 * @property {string} [uid]
 * @property {Object} [return_config]
 * @property {Object} [identifiers]
 */

/**
 * @typedef OrderBrandName
 * @property {string} [company]
 * @property {string} logo
 * @property {number} id
 * @property {string} [modified_on]
 * @property {string} created_on
 * @property {string} brand_name
 */

/**
 * @typedef BagGST
 * @property {number} [value_of_good]
 * @property {string} [hsn_code]
 * @property {number} [brand_calculated_amount]
 * @property {string} [gstin_code]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_fee]
 * @property {string} [gst_tag]
 * @property {number} [gst_tax_percentage]
 */

/**
 * @typedef CurrentStatus
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [updated_at]
 * @property {string} [delivery_awb_number]
 * @property {string} [shipment_id]
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {number} current_status_id
 * @property {boolean} [kafka_sync]
 * @property {number} [delivery_partner_id]
 * @property {number} [bag_id]
 * @property {number} [store_id]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} value_of_good
 * @property {number} price_marked
 * @property {number} transfer_price
 * @property {number} gst_tax_percentage
 * @property {string} size
 * @property {number} price_effective
 * @property {number} refund_credit
 * @property {number} promotion_effective_discount
 * @property {number} fynd_credits
 * @property {number} brand_calculated_amount
 * @property {number} total_units
 * @property {number} cashback
 * @property {boolean} added_to_fynd_cash
 * @property {string} gst_tag
 * @property {Identifier} identifiers
 * @property {number} cod_charges
 * @property {number} gst_fee
 * @property {number} coupon_value
 * @property {number} cashback_applied
 * @property {number} discount
 * @property {number} [tax_collected_at_source]
 * @property {string} item_name
 * @property {number} coupon_effective_discount
 * @property {string} hsn_code
 * @property {number} [amount_paid_roundoff]
 * @property {number} amount_paid
 * @property {number} delivery_charge
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {number} [longitude]
 * @property {string} [email]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {string} [address_type]
 * @property {string} [address_category]
 * @property {string} [version]
 * @property {string} [pincode]
 * @property {number} [latitude]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [contact_person]
 * @property {string} [state]
 * @property {string} [area]
 * @property {string} [phone]
 */

/**
 * @typedef BagConfigs
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} allow_force_return
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_returnable
 * @property {boolean} is_active
 */

/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions]
 * @property {ItemCriterias} [item_criteria]
 */

/**
 * @typedef DiscountRules
 * @property {string} [type]
 * @property {number} [value]
 */

/**
 * @typedef AppliedPromos
 * @property {number} [amount]
 * @property {BuyRules[]} [buy_rules]
 * @property {boolean} [mrp_promotion]
 * @property {DiscountRules[]} [discount_rules]
 * @property {number} [article_quantity]
 * @property {string} [promotion_type]
 * @property {string} [promotion_name]
 * @property {string} [promo_id]
 */

/**
 * @typedef OrderBags
 * @property {number} [line_number]
 * @property {OrderBagArticle} [article]
 * @property {string} [entity_type]
 * @property {boolean} [can_cancel]
 * @property {OrderBrandName} [brand]
 * @property {BagGST} [gst_details]
 * @property {CurrentStatus} [current_status]
 * @property {Object} [parent_promo_bags]
 * @property {PlatformItem} [item]
 * @property {number} [quantity]
 * @property {string} [seller_identifier]
 * @property {string} [display_name]
 * @property {Prices} [prices]
 * @property {boolean} [can_return]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {number} bag_id
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {BagConfigs} [bag_configs]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {string} [identifier]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [logo]
 * @property {string} [mode]
 * @property {string} [source]
 */

/**
 * @typedef ShipmentStatusData
 * @property {number} [id]
 * @property {string[]} [bag_list]
 * @property {string} [shipment_id]
 * @property {string} [created_at]
 * @property {string} [status]
 */

/**
 * @typedef FulfillingStore
 * @property {string} phone
 * @property {number} id
 * @property {string} store_name
 * @property {string} city
 * @property {Object} meta
 * @property {string} code
 * @property {string} pincode
 * @property {string} address
 * @property {string} country
 * @property {string} contact_person
 * @property {string} state
 * @property {string} fulfillment_channel
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {string} [vertical]
 * @property {string} [order_created_time]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {boolean} is_fynd_coupon
 * @property {string[]} [shipment_images]
 * @property {string} order_type
 * @property {boolean} [beneficiary_details]
 * @property {Object[]} [forward_order_status]
 * @property {string} [operational_status]
 * @property {OrderDetailsData} [order]
 * @property {string} [user_agent]
 * @property {string} [journey_type]
 * @property {string} email_id
 * @property {DPDetailsData} [dp_details]
 * @property {string} [due_date]
 * @property {Object} [escalation]
 * @property {boolean} is_invoiced
 * @property {boolean} is_packaging_order
 * @property {Object} order_status
 * @property {Object} invoice
 * @property {boolean} [can_cancel]
 * @property {string[]} [child_nodes]
 * @property {string} [payment_mode]
 * @property {string} [pay_button]
 * @property {string} [packaging_type]
 * @property {GSTDetailsData} [gst_details]
 * @property {Object[]} [custom_meta]
 * @property {string} [kirana_store_id]
 * @property {string} shipment_id
 * @property {string} [picked_date]
 * @property {Object[]} [forward_tracking_list]
 * @property {Object[]} delivery_status
 * @property {Object} ordering_store
 * @property {Object} [refund_details]
 * @property {number} [total_bags]
 * @property {Object} [bank_data]
 * @property {string} [replacement_details]
 * @property {string} can_break
 * @property {boolean} platform_logo
 * @property {string} [secured_delivery_flag]
 * @property {string} [shipment_status]
 * @property {string} user_id
 * @property {Prices} [prices]
 * @property {UserDetailsData} [delivery_details]
 * @property {boolean} [can_return]
 * @property {Object} [delivery_slot]
 * @property {boolean} is_not_fynd_source
 * @property {boolean} [enable_dp_tracking]
 * @property {string} [priority_text]
 * @property {string} affiliate_shipment_id
 * @property {number} status_progress
 * @property {string} [refund_text]
 * @property {TrackingList[]} [tracking_list]
 * @property {number} [shipment_quantity]
 * @property {Object[]} items
 * @property {Object[]} [forward_shipment_status]
 * @property {UserDetailsData} [billing_details]
 * @property {number} [total_items]
 * @property {Object} company
 * @property {string} tracking_url
 * @property {Object} [user_info]
 * @property {boolean} [enable_tracking]
 * @property {string} [mid]
 * @property {Object} [coupon]
 * @property {OrderBags[]} [bags]
 * @property {boolean} [go_green]
 * @property {string} [is_pdsr]
 * @property {string} credit_note_id
 * @property {string} lock_status
 * @property {ShipmentPayments} [payments]
 * @property {ShipmentStatusData} [status]
 * @property {Object} fyndstore_emp
 * @property {Object} current_shipment_status
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} [is_fynd_store]
 */

/**
 * @typedef OrderMeta
 * @property {string} [currency_symbol]
 * @property {string} [payment_type]
 * @property {string} [order_platform]
 * @property {Object} [staff]
 * @property {string} [order_type]
 * @property {string[]} [order_child_entities]
 * @property {Object[]} [order_tags]
 * @property {Object[]} [files]
 * @property {number} [cart_id]
 * @property {Object} [extra_meta]
 * @property {number} [employee_id]
 * @property {number} [ordering_store]
 * @property {string} [customer_note]
 * @property {number} [mongo_cart_id]
 * @property {string} [comment]
 */

/**
 * @typedef OrderDict
 * @property {string} order_date
 * @property {Prices} [prices]
 * @property {string} fynd_order_id
 * @property {OrderMeta} [meta]
 * @property {Object} [payment_methods]
 */

/**
 * @typedef PlatformShipment
 * @property {string} [vertical]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string[]} [shipment_images]
 * @property {string} [operational_status]
 * @property {OrderDetailsData} [order]
 * @property {string} [user_agent]
 * @property {string} [journey_type]
 * @property {DPDetailsData} [dp_details]
 * @property {string} [payment_mode]
 * @property {string} [packaging_type]
 * @property {GSTDetailsData} [gst_details]
 * @property {Object[]} [custom_meta]
 * @property {string} shipment_id
 * @property {string} [picked_date]
 * @property {number} [total_bags]
 * @property {string} [platform_logo]
 * @property {string} [shipment_status]
 * @property {Prices} [prices]
 * @property {UserDetailsData} [delivery_details]
 * @property {Object} [delivery_slot]
 * @property {boolean} [enable_dp_tracking]
 * @property {string} [priority_text]
 * @property {TrackingList[]} [tracking_list]
 * @property {number} [shipment_quantity]
 * @property {UserDetailsData} [billing_details]
 * @property {number} [total_items]
 * @property {Object} [coupon]
 * @property {OrderBags[]} [bags]
 * @property {ShipmentPayments} [payments]
 * @property {ShipmentStatusData} [status]
 * @property {FulfillingStore} [fulfilling_store]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {boolean} success
 * @property {OrderDict} [order]
 * @property {PlatformShipment[]} [shipments]
 */

/**
 * @typedef SubLane
 * @property {number} [total_items]
 * @property {string} [value]
 * @property {number} [index]
 * @property {string} [text]
 * @property {Object[]} [actions]
 */

/**
 * @typedef SuperLane
 * @property {number} [total_items]
 * @property {string} text
 * @property {SubLane[]} [options]
 * @property {string} value
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [display]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef PlatformOrderItems
 * @property {string} [order_id]
 * @property {string} [order_created_time]
 * @property {string} [payment_mode]
 * @property {Object} [meta]
 * @property {number} [order_value]
 * @property {PlatformShipment[]} [shipments]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {number} [total_order_value]
 * @property {PlatformChannel} [channel]
 * @property {UserDataInfo} [user_info]
 */

/**
 * @typedef OrderListingResponse
 * @property {string} [lane]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [total_count]
 * @property {Page} [page]
 * @property {PlatformOrderItems[]} [items]
 */

/**
 * @typedef Options
 * @property {string} [text]
 * @property {number} [value]
 */

/**
 * @typedef MetricsCount
 * @property {string} key
 * @property {string} text
 * @property {Options[]} [options]
 * @property {number} value
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [awb]
 * @property {string} [reason]
 * @property {string} [raw_status]
 * @property {Object} [meta]
 * @property {string} [account_name]
 * @property {string} [shipment_type]
 * @property {string} [last_location_recieved_at]
 * @property {string} [status]
 * @property {string} [updated_at]
 * @property {string} [updated_time]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta]
 * @property {PlatformTrack[]} [results]
 */

/**
 * @typedef FiltersResponse
 * @property {Object[]} [advance]
 */

/**
 * @typedef Success
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef OmsReports
 * @property {string} [report_id]
 * @property {string} [display_name]
 * @property {string} [report_type]
 * @property {string} [report_name]
 * @property {string} [report_requested_at]
 * @property {string} [report_created_at]
 * @property {Object} [request_details]
 * @property {string} [s3_key]
 * @property {string} [status]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [jio_code]
 * @property {string} [item_id]
 * @property {string} [article_id]
 * @property {string} [company_id]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [type]
 * @property {string} [message]
 * @property {string} [value]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {boolean} [success]
 * @property {string} [trace_id]
 * @property {string} [identifier]
 * @property {Object[]} [data]
 * @property {NestedErrorSchemaDataSet[]} [error]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {string} [message]
 * @property {boolean} success
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} batch_id
 * @property {Object} [invoice]
 * @property {string} [store_name]
 * @property {string} [store_code]
 * @property {string} [company_id]
 * @property {string} [invoice_status]
 * @property {Object} [data]
 * @property {Object} [label]
 * @property {string} [store_id]
 * @property {boolean} do_invoice_label_generated
 */

/**
 * @typedef FileUploadResponse
 * @property {string} [url]
 * @property {number} [expiry]
 */

/**
 * @typedef URL
 * @property {string} [url]
 */

/**
 * @typedef FileResponse
 * @property {string} [namespace]
 * @property {string} [operation]
 * @property {string} [file_name]
 * @property {FileUploadResponse} [upload]
 * @property {string[]} [tags]
 * @property {URL} [cdn]
 * @property {string} [content_type]
 * @property {string} [method]
 * @property {string} [file_path]
 * @property {number} [size]
 */

/**
 * @typedef bulkListingData
 * @property {string} [file_name]
 * @property {string} [uploaded_on]
 * @property {string[]} [processing_shipments]
 * @property {string} [id]
 * @property {number} [total]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {string} [excel_url]
 * @property {string} [batch_id]
 * @property {number} [successful]
 * @property {string} [store_name]
 * @property {string} [user_name]
 * @property {Object[]} [failed_shipments]
 * @property {Object[]} [successful_shipments]
 * @property {number} [failed]
 * @property {string} [user_id]
 * @property {number} [company_id]
 * @property {number} [processing]
 * @property {string} [status]
 */

/**
 * @typedef BulkListingPage
 * @property {number} [current]
 * @property {number} [total]
 * @property {string} [type]
 * @property {number} [size]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 */

/**
 * @typedef BulkListingResponse
 * @property {bulkListingData[]} [data]
 * @property {string} [error]
 * @property {boolean} [success]
 * @property {BulkListingPage} [page]
 */

/**
 * @typedef DateRange
 * @property {string} [from_date]
 * @property {string} [to_date]
 */

/**
 * @typedef ManifestFilter
 * @property {string} [lane]
 * @property {string} [stores]
 * @property {string} [sales_channels]
 * @property {string} [store_name]
 * @property {string} [dp_ids]
 * @property {DateRange} [date_range]
 * @property {string} [sales_channel_name]
 * @property {string} [dp_name]
 */

/**
 * @typedef GeneratedManifestItem
 * @property {string} [manifest_id]
 * @property {ManifestFilter} [filters]
 * @property {number} [company_id]
 * @property {boolean} [is_active]
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [created_by]
 */

/**
 * @typedef ManifestPage
 * @property {string} [size]
 * @property {string} [current]
 * @property {number} [total]
 * @property {string} [type]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 */

/**
 * @typedef GeneratedManifestResponse
 * @property {GeneratedManifestItem[]} [items]
 * @property {ManifestPage} [page]
 */

/**
 * @typedef ManifestDetailItem
 * @property {string} [awb]
 * @property {string} [order_id]
 * @property {number} [item_qty]
 * @property {string} [shipment_id]
 * @property {string} [invoice_id]
 */

/**
 * @typedef ManifestDetailTotalShipmentPricesCount
 * @property {number} [shipment_count]
 * @property {number} [total_price]
 */

/**
 * @typedef ManifestDetailMeta
 * @property {ManifestDetailTotalShipmentPricesCount} [total_shipment_prices_count]
 * @property {ManifestFilter} [filters]
 */

/**
 * @typedef ManifestDetail
 * @property {number} [uid]
 * @property {string} [manifest_id]
 * @property {ManifestFilter} [filters]
 * @property {number} [user_id]
 * @property {ManifestDetailMeta} [meta]
 * @property {number} [id]
 * @property {number} [company_id]
 * @property {boolean} [is_active]
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [created_by]
 */

/**
 * @typedef ManifestDetailResponse
 * @property {ManifestPage} [page]
 * @property {number} [additional_shipment_count]
 * @property {ManifestDetailItem[]} [items]
 * @property {ManifestDetail[]} [manifest_details]
 */

/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */

/**
 * @typedef Reason
 * @property {number} [id]
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
 * @property {string} [display_name]
 */

/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {Reason[]} [reasons]
 * @property {boolean} [success]
 */

/**
 * @typedef BulkActionPayload
 * @property {string} url
 */

/**
 * @typedef BulkActionResponse
 * @property {string} [message]
 * @property {boolean} [status]
 */

/**
 * @typedef BulkActionDetailsDataField
 * @property {string} [batch_id]
 * @property {number} [successful_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {string} [company_id]
 * @property {number} [processing_shipments_count]
 * @property {number} [total_shipments_count]
 * @property {number} [failed_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [uploaded_on]
 * @property {string} [success]
 * @property {string[]} [failed_records]
 * @property {string} [user_id]
 * @property {string} [message]
 * @property {string} [uploaded_by]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {boolean} [status]
 * @property {string[]} [error]
 */

/**
 * @typedef B2BPODetails
 * @property {number} [po_tax_amount]
 * @property {number} [po_line_amount]
 * @property {string} [docker_number]
 * @property {number} [item_base_price]
 * @property {number} [total_gst_percentage]
 * @property {boolean} [partial_can_ret]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef ReturnConfig
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef Dimensions
 * @property {number} [width]
 * @property {number} [height]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 * @property {number} [length]
 */

/**
 * @typedef Weight
 * @property {number} [shipping]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 */

/**
 * @typedef Article
 * @property {ReturnConfig} [return_config]
 * @property {string} uid
 * @property {boolean} [is_set]
 * @property {Object} [a_set]
 * @property {Object} [raw_meta]
 * @property {string} seller_identifier
 * @property {string} _id
 * @property {string} [code]
 * @property {Object} [child_details]
 * @property {Dimensions} [dimensions]
 * @property {Weight} [weight]
 * @property {Identifier} identifiers
 * @property {string} size
 * @property {Object} [esp_modified]
 */

/**
 * @typedef Brand
 * @property {boolean} [credit_note_allowed]
 * @property {string} company
 * @property {string} [logo]
 * @property {string} [pickup_location]
 * @property {number} brand_id
 * @property {number} [modified_on]
 * @property {string} [invoice_prefix]
 * @property {number} [created_on]
 * @property {number} [credit_note_expiry_days]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} brand_name
 * @property {string} [script_last_ran]
 * @property {string} [start_date]
 */

/**
 * @typedef BagGSTDetails
 * @property {number} tax_collected_at_source
 * @property {number} sgst_tax_percentage
 * @property {number} value_of_good
 * @property {number} igst_tax_percentage
 * @property {string} hsn_code_id
 * @property {string} sgst_gst_fee
 * @property {string} hsn_code
 * @property {number} brand_calculated_amount
 * @property {string} igst_gst_fee
 * @property {string} [gstin_code]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} gst_fee
 * @property {string} cgst_gst_fee
 * @property {string} gst_tag
 * @property {number} cgst_tax_percentage
 * @property {number} gst_tax_percentage
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [password]
 * @property {string} [username]
 * @property {string} [user]
 */

/**
 * @typedef Document
 * @property {string} value
 * @property {string} ds_type
 * @property {string} legal_name
 * @property {boolean} verified
 * @property {string} [url]
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef StoreEinvoice
 * @property {boolean} enabled
 * @property {string} [password]
 * @property {string} [username]
 * @property {string} [user]
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEinvoice} [e_invoice]
 * @property {StoreEwaybill} [e_waybill]
 */

/**
 * @typedef StoreMeta
 * @property {string} [gst_number]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {string[]} [notification_emails]
 * @property {string} display_name
 * @property {string} stage
 * @property {Object} [product_return_config]
 * @property {Object[]} [timing]
 * @property {StoreDocuments} [documents]
 * @property {StoreGstCredentials} gst_credentials
 * @property {Object} [additional_contact_details]
 * @property {Object} [ewaybill_portal_details]
 */

/**
 * @typedef StoreAddress
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {string} city
 * @property {string} [version]
 * @property {string} contact_person
 * @property {string} state
 * @property {string} address_category
 * @property {number} latitude
 * @property {string} country
 * @property {string} updated_at
 * @property {number} longitude
 * @property {string} [email]
 * @property {string} address1
 * @property {string} created_at
 * @property {string} phone
 * @property {string} country_code
 * @property {string} address_type
 * @property {number} pincode
 * @property {string} [area]
 */

/**
 * @typedef Store
 * @property {string} s_id
 * @property {string} [address2]
 * @property {StoreMeta} meta
 * @property {string} city
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} contact_person
 * @property {string} store_email
 * @property {string} state
 * @property {string} [order_integration_id]
 * @property {StoreAddress} [store_address_json]
 * @property {Object} [brand_id]
 * @property {boolean} [is_active]
 * @property {number} latitude
 * @property {string} country
 * @property {string} location_type
 * @property {string} login_username
 * @property {string} [store_active_from]
 * @property {string} [updated_at]
 * @property {number} longitude
 * @property {number} [alohomora_user_id]
 * @property {boolean} [is_archived]
 * @property {string[]} [brand_store_tags]
 * @property {string} [vat_no]
 * @property {string} address1
 * @property {number} company_id
 * @property {string} [code]
 * @property {string} name
 * @property {string} created_at
 * @property {number} [packaging_material_count]
 * @property {number} [parent_store_id]
 * @property {number} phone
 * @property {string} [mall_name]
 * @property {string} [mall_area]
 * @property {string} pincode
 * @property {string} fulfillment_channel
 */

/**
 * @typedef Attributes
 * @property {string} [essential]
 * @property {string} [primary_material]
 * @property {string} [name]
 * @property {string[]} [gender]
 * @property {string} [marketer_name]
 * @property {string} [primary_color]
 * @property {string} [marketer_address]
 * @property {string} [brand_name]
 * @property {string} [primary_color_hex]
 */

/**
 * @typedef Item
 * @property {Object} [meta]
 * @property {string[]} [l1_category]
 * @property {number} [l3_category]
 * @property {string} [l3_category_name]
 * @property {number} item_id
 * @property {string} [color]
 * @property {string[]} [l2_category]
 * @property {string} [branch_url]
 * @property {string} size
 * @property {boolean} [can_cancel]
 * @property {string} brand
 * @property {number} brand_id
 * @property {Attributes} attributes
 * @property {string} [gender]
 * @property {number} [l1_category_id]
 * @property {string} [last_updated_at]
 * @property {boolean} [can_return]
 * @property {string} [code]
 * @property {string} name
 * @property {number} [l2_category_id]
 * @property {number} [department_id]
 * @property {string} slug_key
 * @property {string} [webstore_product_url]
 * @property {string[]} image
 */

/**
 * @typedef EInvoice
 * @property {string} [irn]
 * @property {string} [error_code]
 * @property {string} [acknowledge_date]
 * @property {string} [error_message]
 * @property {string} [signed_invoice]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_qr_code]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [invoice]
 * @property {EInvoice} [credit_note]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef LockData
 * @property {boolean} [mto]
 * @property {boolean} [locked]
 * @property {string} [lock_message]
 */

/**
 * @typedef BuyerDetails
 * @property {string} [ajio_site_id]
 * @property {string} city
 * @property {number} pincode
 * @property {string} name
 * @property {string} address
 * @property {string} gstin
 * @property {string} state
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_max]
 * @property {string} [t_min]
 */

/**
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */

/**
 * @typedef ShipmentMeta
 * @property {boolean} same_store_available
 * @property {string} [box_type]
 * @property {string} [order_type]
 * @property {string} [return_awb_number]
 * @property {Object} [return_details]
 * @property {string} [due_date]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [dp_name]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {Object} [b2c_buyer_details]
 * @property {DebugInfo} [debug_info]
 * @property {Object} [bag_weight]
 * @property {LockData} [lock_data]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [return_affiliate_shipment_id]
 * @property {Object} [external]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {number} weight
 * @property {string} [awb_number]
 * @property {Object} [ewaybill_info]
 * @property {string} [packaging_name]
 * @property {Object} [dp_options]
 * @property {number} [return_store_node]
 * @property {number} [shipment_weight]
 * @property {string} [store_invoice_updated_date]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [marketplace_store_id]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [dp_id]
 * @property {string} [dp_sort_key]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [po_number]
 * @property {Formatted} [formatted]
 */

/**
 * @typedef PDFLinks
 * @property {string} [label_pos]
 * @property {string} [invoice]
 * @property {string} [label_a6]
 * @property {string} [b2b]
 * @property {string} [label_a4]
 * @property {string} [credit_note_url]
 * @property {string} [invoice_a4]
 * @property {string} [invoice_pos]
 * @property {string} [po_invoice]
 * @property {string} invoice_type
 * @property {string} [invoice_a6]
 * @property {string} [label]
 * @property {string} label_type
 */

/**
 * @typedef AffiliateMeta
 * @property {number} [size_level_total_qty]
 * @property {number} [employee_discount]
 * @property {string} [coupon_code]
 * @property {string} [box_type]
 * @property {number} [loyalty_discount]
 * @property {string} [due_date]
 * @property {string} [channel_order_id]
 * @property {string} [order_item_id]
 * @property {string} [channel_shipment_id]
 * @property {number} [quantity]
 * @property {boolean} [is_priority]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} [ad_id]
 * @property {string} affiliate_store_id
 * @property {string} affiliate_bag_id
 * @property {ShipmentMeta} shipment_meta
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_order_id
 * @property {PDFLinks} [pdf_links]
 * @property {string} [affiliate_id]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} [company_affiliate_tag]
 */

/**
 * @typedef Dates
 * @property {Object} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {number} [employee_discount]
 * @property {number} [loyalty_discount]
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_order_id
 * @property {AffiliateMeta} affiliate_meta
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_returnable
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {BagStatusHistory} [bag_status_history]
 * @property {number} b_id
 * @property {number} [line_number]
 * @property {BagMeta} [meta]
 * @property {Article} article
 * @property {string[]} [tags]
 * @property {string} [operational_status]
 * @property {string} journey_type
 * @property {string} [entity_type]
 * @property {string} [b_type]
 * @property {Brand} brand
 * @property {BagStatusHistory[]} bag_status
 * @property {BagStatusHistory} current_status
 * @property {BagGSTDetails} gst_details
 * @property {Object[]} [reasons]
 * @property {Object} [parent_promo_bags]
 * @property {string} [shipment_id]
 * @property {ArticleDetails} [article_details]
 * @property {Store} [ordering_store]
 * @property {Item} item
 * @property {AffiliateDetails} [affiliate_details]
 * @property {number} [quantity]
 * @property {string} [display_name]
 * @property {string} [seller_identifier]
 * @property {Prices} prices
 * @property {boolean} [restore_coupon]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {Dates} [dates]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {Object} [restore_promos]
 * @property {Object} [qc_required]
 * @property {number} [no_of_bags_order]
 * @property {Object[]} [applied_promos]
 * @property {string} [identifier]
 * @property {number[]} [original_bag_list]
 * @property {BagStatusHistory} current_operational_status
 * @property {BagReturnableCancelableStatus} status
 * @property {number} [bag_update_time]
 * @property {string} [order_integration_id]
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} error
 */

/**
 * @typedef Page1
 * @property {number} current
 * @property {string} page_type
 * @property {number} item_total
 * @property {number} size
 * @property {boolean} has_next
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {BagDetailsPlatformResponse[]} items
 * @property {Page1} page
 */

/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} shipment_ids
 */

/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [message]
 * @property {string} [error]
 * @property {number} [status]
 * @property {string} [shipment_id]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef ErrorResponse1
 * @property {string} message
 * @property {number} status
 * @property {string} [error_trace]
 */

/**
 * @typedef StoreReassign
 * @property {string} [affiliate_id]
 * @property {number[]} [reason_ids]
 * @property {string} [mongo_article_id]
 * @property {string} [fynd_order_id]
 * @property {string} [affiliate_order_id]
 * @property {string} [item_id]
 * @property {string} [affiliate_bag_id]
 * @property {number} store_id
 * @property {number} [bag_id]
 * @property {string} [set_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef Entities
 * @property {string} [affiliate_id]
 * @property {string} [id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} reason_text
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_bag_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action_type
 * @property {string} action
 * @property {string} entity_type
 * @property {Entities[]} entities
 */

/**
 * @typedef Bags
 * @property {string} [affiliate_order_id]
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_bag_id]
 * @property {number} [bag_id]
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef CheckResponse
 * @property {string} [affiliate_id]
 * @property {boolean} [is_shipment_locked]
 * @property {Bags[]} [bags]
 * @property {boolean} [is_bag_locked]
 * @property {string} [affiliate_shipment_id]
 * @property {boolean} [lock_status]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {OriginalFilter} [original_filter]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {string} [message]
 * @property {CheckResponse[]} [check_response]
 * @property {boolean} [success]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [platform_id]
 * @property {string} [description]
 * @property {number} id
 * @property {string} [title]
 * @property {string} [logo_url]
 * @property {string} [from_datetime]
 * @property {string} [created_at]
 * @property {number} [company_id]
 * @property {string} [platform_name]
 * @property {string} [to_datetime]
 */

/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 */

/**
 * @typedef BaseResponse
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef Click2CallResponse
 * @property {boolean} status
 * @property {string} call_id
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {number} [line_number]
 * @property {string} [identifier]
 * @property {number} [quantity]
 */

/**
 * @typedef ProductsReasonsData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsFilters[]} [filters]
 * @property {ProductsReasonsData} [data]
 */

/**
 * @typedef EntityReasonData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef EntitiesReasons
 * @property {Object[]} [filters]
 * @property {EntityReasonData} [data]
 */

/**
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products]
 * @property {EntitiesReasons[]} [entities]
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {number} [line_number]
 * @property {string} [identifier]
 */

/**
 * @typedef ProductsDataUpdates
 * @property {ProductsDataUpdatesFilters[]} [filters]
 * @property {Object} [data]
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object[]} [filters]
 * @property {Object} [data]
 */

/**
 * @typedef DataUpdates
 * @property {ProductsDataUpdates[]} [products]
 * @property {EntitiesDataUpdates[]} [entities]
 */

/**
 * @typedef Products
 * @property {number} [line_number]
 * @property {string} [identifier]
 * @property {number} [quantity]
 */

/**
 * @typedef ShipmentsRequest
 * @property {ReasonsData} [reasons]
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier
 * @property {Products[]} [products]
 */

/**
 * @typedef StatuesRequest
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [exclude_bags_next_state]
 * @property {string} [status]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [task]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [force_transition]
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [unlock_before_transition]
 */

/**
 * @typedef ShipmentsResponse
 * @property {string} [code]
 * @property {string} [exception]
 * @property {Object} [final_state]
 * @property {string} [stack_trace]
 * @property {string} [message]
 * @property {number} [status]
 * @property {Object} [meta]
 * @property {string} [identifier]
 */

/**
 * @typedef StatuesResponse
 * @property {ShipmentsResponse[]} [shipments]
 */

/**
 * @typedef UpdateShipmentStatusResponseBody
 * @property {StatuesResponse[]} [statuses]
 */

/**
 * @typedef OrderUser
 * @property {string} [address2]
 * @property {string} city
 * @property {string} country
 * @property {string} state
 * @property {string} last_name
 * @property {number} phone
 * @property {number} mobile
 * @property {string} first_name
 * @property {string} pincode
 * @property {string} [address1]
 * @property {string} email
 */

/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [label]
 * @property {string} [invoice]
 */

/**
 * @typedef AffiliateBag
 * @property {Object} affiliate_meta
 * @property {string} fynd_store_id
 * @property {number} transfer_price
 * @property {number} unit_price
 * @property {number} price_marked
 * @property {number} delivery_charge
 * @property {string} modified_on
 * @property {Object} identifier
 * @property {string} item_size
 * @property {string} hsn_code_id
 * @property {number} company_id
 * @property {string} seller_identifier
 * @property {string} affiliate_store_id
 * @property {number} item_id
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} discount
 * @property {string} _id
 * @property {number} store_id
 * @property {number} amount_paid
 * @property {string} sku
 * @property {number} avl_qty
 * @property {number} quantity
 * @property {number} price_effective
 */

/**
 * @typedef OrderPriority
 * @property {string} [affiliate_priority_code]
 * @property {string} [fulfilment_priority_text]
 * @property {number} [fulfilment_priority]
 */

/**
 * @typedef ArticleDetails1
 * @property {Object} attributes
 * @property {Object} weight
 * @property {Object} dimension
 * @property {number} brand_id
 * @property {string} _id
 * @property {Object} category
 * @property {number} quantity
 */

/**
 * @typedef ShipmentDetails
 * @property {number} shipments
 * @property {string} affiliate_shipment_id
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 * @property {string} [box_type]
 * @property {Object} [meta]
 * @property {number} [dp_id]
 */

/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef ShipmentConfig
 * @property {string} source
 * @property {string} to_pincode
 * @property {string} journey
 * @property {string} action
 * @property {ShipmentDetails[]} shipment
 * @property {string} payment_mode
 * @property {LocationDetails} [location_details]
 * @property {string} identifier
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderInfo
 * @property {number} delivery_charges
 * @property {UserData} user
 * @property {AffiliateBag[]} bags
 * @property {string} [coupon]
 * @property {OrderUser} shipping_address
 * @property {OrderPriority} [order_priority]
 * @property {Object} items
 * @property {OrderUser} billing_address
 * @property {number} discount
 * @property {string} [affiliate_order_id]
 * @property {ShipmentData} [shipment]
 * @property {number} cod_charges
 * @property {number} order_value
 * @property {string} payment_mode
 * @property {Object} [payment]
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} token
 * @property {string} [description]
 * @property {string} name
 * @property {string} id
 * @property {string} created_at
 * @property {string} secret
 * @property {string} updated_at
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} owner
 */

/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */

/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {AffiliateInventoryConfig} [inventory]
 */

/**
 * @typedef Affiliate
 * @property {AffiliateConfig} [config]
 * @property {string} token
 * @property {string} id
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {string} marketplace_store_id
 * @property {number} store_id
 */

/**
 * @typedef OrderConfig
 * @property {boolean} [create_user]
 * @property {Affiliate} affiliate
 * @property {string} [store_lookup]
 * @property {string} [bag_end_state]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [article_lookup]
 */

/**
 * @typedef CreateOrderPayload
 * @property {string} affiliate_id
 * @property {OrderInfo} order_info
 * @property {OrderConfig} order_config
 */

/**
 * @typedef CreateOrderResponse
 * @property {string} fynd_order_id
 */

/**
 * @typedef DispatchManifest
 * @property {string} manifest_id
 */

/**
 * @typedef SuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ActionInfo
 * @property {string} description
 * @property {string} slug
 * @property {number} id
 * @property {string} display_text
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} user
 * @property {string} [l2_detail]
 * @property {string} [ticket_id]
 * @property {string} createdat
 * @property {string} [ticket_url]
 * @property {string} message
 * @property {string} [l3_detail]
 * @property {string} type
 * @property {string} [l1_detail]
 * @property {number} [bag_id]
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} [activity_history]
 */

/**
 * @typedef ErrorDetail
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SmsDataPayload
 * @property {string} order_id
 * @property {string} customer_name
 * @property {number} phone_number
 * @property {string} brand_name
 * @property {string} country_code
 * @property {number} shipment_id
 * @property {string} message
 * @property {string} payment_mode
 * @property {number} amount_paid
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {number} bag_id
 * @property {SmsDataPayload} [data]
 */

/**
 * @typedef Meta
 * @property {string} [state_manager_used]
 * @property {number} [kafka_emission_status]
 */

/**
 * @typedef ShipmentDetail
 * @property {number} id
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {Meta} meta
 * @property {number[]} [bag_list]
 * @property {string} [remarks]
 */

/**
 * @typedef OrderDetails
 * @property {string} [fynd_order_id]
 * @property {string} [created_at]
 */

/**
 * @typedef OrderStatusData
 * @property {string[]} [errors]
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {OrderDetails} order_details
 */

/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {string[]} [shipment_ids]
 * @property {string} qc_required
 * @property {number} dp_id
 * @property {string} order_type
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef Tax
 * @property {string} name
 * @property {Object} amount
 * @property {number} rate
 * @property {Object[]} [breakup]
 */

/**
 * @typedef Charge
 * @property {string} [code]
 * @property {string} name
 * @property {Tax} [tax]
 * @property {string} type
 * @property {Object} amount
 */

/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {string} seller_identifier
 * @property {Object} [meta]
 * @property {string} [custom_messasge]
 * @property {number} [quantity]
 * @property {string} [external_line_id]
 */

/**
 * @typedef ProcessingDates
 * @property {Object} [dp_pickup_slot]
 * @property {string} [dispatch_after_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [confirm_by_date]
 * @property {string} [pack_by_date]
 * @property {string} [dispatch_by_date]
 */

/**
 * @typedef Shipment
 * @property {LineItem[]} line_items
 * @property {string} [external_shipment_id]
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {number} location_id
 */

/**
 * @typedef ShippingInfo
 * @property {string} [title]
 * @property {string} [address_type]
 * @property {string} country
 * @property {string} [last_name]
 * @property {string} [house_no]
 * @property {string} [alternate_mobile_number]
 * @property {string} [country_code]
 * @property {string} [customer_code]
 * @property {string} [alternate_email]
 * @property {string} pincode
 * @property {string} [state_code]
 * @property {string} [middle_name]
 * @property {string} state
 * @property {string} [external_customer_code]
 * @property {string} [gender]
 * @property {string} primary_email
 * @property {string} address1
 * @property {string} [address2]
 * @property {string} [floor_no]
 * @property {Object[]} [slot]
 * @property {string} [shipping_type]
 * @property {string} city
 * @property {string} primary_mobile_number
 * @property {Object} [geo_location]
 * @property {string} [landmark]
 * @property {string} first_name
 */

/**
 * @typedef BillingInfo
 * @property {string} [title]
 * @property {string} country
 * @property {string} [last_name]
 * @property {string} [house_no]
 * @property {string} [alternate_mobile_number]
 * @property {string} [country_code]
 * @property {string} [customer_code]
 * @property {string} [alternate_email]
 * @property {string} pincode
 * @property {string} [state_code]
 * @property {string} [middle_name]
 * @property {string} state
 * @property {string} [external_customer_code]
 * @property {string} [gender]
 * @property {string} primary_email
 * @property {string} address1
 * @property {string} [address2]
 * @property {string} [floor_no]
 * @property {string} city
 * @property {string} primary_mobile_number
 * @property {string} first_name
 */

/**
 * @typedef PaymentMethod
 * @property {string} name
 * @property {Object} [transaction_data]
 * @property {string} collect_by
 * @property {string} refund_by
 * @property {string} mode
 * @property {Object} [meta]
 * @property {number} amount
 */

/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */

/**
 * @typedef CreateOrderAPI
 * @property {Shipment[]} shipments
 * @property {Charge[]} [charges]
 * @property {string} [external_creation_date]
 * @property {ShippingInfo} shipping_info
 * @property {BillingInfo} billing_info
 * @property {PaymentInfo} payment_info
 * @property {string} [external_order_id]
 * @property {TaxInfo} [tax_info]
 * @property {Object} [meta]
 * @property {Object} [currency_info]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [code]
 * @property {string} [request_id]
 * @property {string} [exception]
 * @property {Object} [info]
 * @property {string} [stack_trace]
 * @property {string} message
 * @property {number} status
 * @property {string} [meta]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [mode]
 * @property {string} [collect_by]
 * @property {string} [refund_by]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 * @property {PaymentMethods[]} [payment_methods]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef CreateChannelConfig
 * @property {boolean} [location_reassignment]
 * @property {Object} [logo_url]
 * @property {string} [shipment_assignment]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {DpConfiguration} [dp_configuration]
 * @property {string[]} [lock_states]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_inserted]
 * @property {boolean} [is_upserted]
 */

/**
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef UploadConsent
 * @property {string} consent_url
 * @property {string} manifest_id
 */

/**
 * @typedef PlatformOrderUpdate
 * @property {string} order_id
 */

/**
 * @typedef ResponseDetail
 * @property {string[]} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */

/**
 * @typedef OrderStatus
 * @property {string} start_date
 * @property {string} end_date
 * @property {number} mobile
 * @property {FyndOrderIdList[]} [order_details]
 */

/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */

/**
 * @typedef CreateSearchKeyword
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {SearchKeywordResult} result
 */

/**
 * @typedef GetSearchWordsData
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {Object} [result]
 * @property {string} [uid]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [error]
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef GetSearchWordsDetailResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData} [items]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData[]} [items]
 */

/**
 * @typedef AutocompletePageAction
 * @property {string} [type]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {Object} [params]
 */

/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */

/**
 * @typedef Media
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef AutocompleteResult
 * @property {AutocompleteAction} [action]
 * @property {Media} [logo]
 * @property {Object} [_custom_json]
 * @property {string} [display]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {AutocompleteResult[]} [results]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {Object[]} [results]
 * @property {string} [uid]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {Page} [page]
 * @property {GetAutocompleteWordsData[]} [items]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 */

/**
 * @typedef ProductBundleItem
 * @property {boolean} [allow_remove]
 * @property {number} max_quantity
 * @property {boolean} [auto_select]
 * @property {number} product_uid
 * @property {boolean} [auto_add_to_cart]
 * @property {number} min_quantity
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {string} slug
 * @property {Object} [created_by]
 * @property {boolean} is_active
 * @property {ProductBundleItem[]} products
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {Object} [meta]
 * @property {string} name
 * @property {string} [logo]
 * @property {Object} [modified_by]
 * @property {string} choice
 * @property {string} [created_on]
 * @property {boolean} [same_store_assignment]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */

/**
 * @typedef ProductBundleRequest
 * @property {string} slug
 * @property {Object} [created_by]
 * @property {boolean} is_active
 * @property {ProductBundleItem[]} products
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {Object} [meta]
 * @property {string} name
 * @property {string} [logo]
 * @property {Object} [modified_by]
 * @property {string} choice
 * @property {string} [created_on]
 * @property {boolean} [same_store_assignment]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} slug
 * @property {boolean} is_active
 * @property {ProductBundleItem[]} products
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {Object} [meta]
 * @property {string} name
 * @property {string} [logo]
 * @property {Object} [modified_by]
 * @property {string} choice
 * @property {boolean} [same_store_assignment]
 */

/**
 * @typedef Price
 * @property {number} [min_marked]
 * @property {number} [max_marked]
 * @property {number} [min_effective]
 * @property {number} [max_effective]
 * @property {string} [currency]
 */

/**
 * @typedef LimitedProductData
 * @property {string} [slug]
 * @property {Object} [identifier]
 * @property {Object} [attributes]
 * @property {string} [country_of_origin]
 * @property {Object} [price]
 * @property {string[]} [images]
 * @property {string[]} [sizes]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {number} [quantity]
 * @property {string} [short_description]
 * @property {string} [item_code]
 */

/**
 * @typedef Size
 * @property {string} [value]
 * @property {number} [quantity]
 * @property {boolean} [is_available]
 * @property {string} [display]
 */

/**
 * @typedef GetProducts
 * @property {boolean} [allow_remove]
 * @property {Price} [price]
 * @property {LimitedProductData} [product_details]
 * @property {Size[]} [sizes]
 * @property {number} [max_quantity]
 * @property {boolean} [auto_select]
 * @property {number} [product_uid]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} [min_quantity]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {GetProducts[]} [products]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [choice]
 * @property {boolean} [same_store_assignment]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef Meta
 * @property {Object[]} [values]
 * @property {string} [unit]
 * @property {Object} [headers]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {Object} [created_by]
 * @property {string} [image]
 * @property {number} [brand_id]
 * @property {string} [tag]
 * @property {number} [company_id]
 * @property {Guide} [guide]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {string} name
 * @property {Object} [modified_by]
 * @property {string} [subtitle]
 * @property {boolean} [active]
 * @property {string} [description]
 * @property {string} title
 */

/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef SizeGuideResponse
 * @property {Object} [created_by]
 * @property {Object} [guide]
 * @property {number} [brand_id]
 * @property {string} [tag]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Object} [modified_by]
 * @property {string} [subtitle]
 * @property {boolean} [active]
 * @property {string} [created_on]
 * @property {string} [title]
 */

/**
 * @typedef MetaFields
 * @property {Object} value
 * @property {Object} key
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 * @property {number} [minimum]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {MetaFields[]} [_custom_meta]
 * @property {ApplicationItemSEO} [seo]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_gift]
 * @property {boolean} [is_cod]
 * @property {ApplicationItemMOQ} [moq]
 * @property {Object} [alt_text]
 */

/**
 * @typedef SuccessResponse1
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef SEOData
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef MOQData
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 * @property {number} [minimum]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {SEOData} [seo]
 * @property {boolean} [is_gift]
 * @property {boolean} [is_cod]
 * @property {MOQData} [moq]
 * @property {Object} [alt_text]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [condition]
 * @property {Object[]} data
 * @property {Object[]} [values]
 */

/**
 * @typedef PageResponseType
 * @property {number} next
 * @property {boolean} has_next
 * @property {number} total_count
 * @property {number} current
 */

/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
 * @property {PageResponseType} page
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {string} [slug]
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [unit]
 * @property {string} name
 * @property {string} [logo]
 * @property {string} [key]
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string} slug
 * @property {string[]} [template_slugs]
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {boolean} is_active
 * @property {string} app_id
 * @property {number} priority
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {string} [logo]
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {string} default_key
 * @property {boolean} is_active
 * @property {string} app_id
 * @property {number} priority
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {string} [logo]
 * @property {string} key
 */

/**
 * @typedef AllowSingleRequest
 * @property {boolean} allow_single
 */

/**
 * @typedef DefaultKeyRequest
 * @property {string} default_key
 */

/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string[]} [filter_types]
 * @property {string} [key]
 * @property {string} [display]
 * @property {Object[]} [units]
 */

/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [key]
 * @property {string} [display]
 */

/**
 * @typedef MetaDataListingSortResponse
 * @property {MetaDataListingSortMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingFilterResponse} filter
 * @property {MetaDataListingSortResponse} sort
 */

/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [compare]
 * @property {Object} [variant]
 * @property {Object} [similar]
 * @property {Object} [detail]
 */

/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef ConfigurationBucketPoints
 * @property {string} [display]
 * @property {number} [start]
 * @property {number} [end]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {string} [sort]
 * @property {string} [condition]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {Object[]} [map_values]
 * @property {Object} [map]
 * @property {string} [value]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [logo]
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} type
 * @property {string} key
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} key
 */

/**
 * @typedef ConfigurationListingSort
 * @property {string} default_key
 * @property {ConfigurationListingSortConfig[]} [config]
 */

/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingFilter} filter
 * @property {ConfigurationListingSort} sort
 */

/**
 * @typedef ProductSize
 * @property {number} min
 * @property {number} max
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} display_type
 * @property {ProductSize} size
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} name
 * @property {string} [logo]
 * @property {string} key
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {ProductSize} [size]
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {string} key
 */

/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */

/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductVariant} variant
 * @property {ConfigurationProductSimilar} similar
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {Object} [created_by]
 * @property {ConfigurationListing} [listing]
 * @property {string} [created_on]
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {string} [type]
 * @property {Object} [modified_by]
 * @property {ConfigurationProduct} [product]
 * @property {string} config_type
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {boolean} [is_default]
 * @property {AppCatalogConfiguration} [data]
 */

/**
 * @typedef AppConfiguration
 * @property {Object} [created_by]
 * @property {ConfigurationListing} [listing]
 * @property {string} [created_on]
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} [modified_on]
 * @property {string} [type]
 * @property {Object} [modified_by]
 * @property {ConfigurationProduct} [product]
 * @property {string} config_type
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */

/**
 * @typedef EntityConfiguration
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} [id]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} config_type
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {boolean} [is_default]
 * @property {EntityConfiguration} [data]
 */

/**
 * @typedef ProductSortOn
 * @property {string} [value]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */

/**
 * @typedef ProductFiltersValue
 * @property {string} [query_format]
 * @property {number} [selected_max]
 * @property {number} [selected_min]
 * @property {number} [min]
 * @property {string} [currency_code]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 * @property {string} display
 * @property {number} [count]
 * @property {Object} value
 * @property {boolean} is_selected
 * @property {string} [display_format]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string[]} [operators]
 * @property {string} [kind]
 * @property {string} name
 * @property {string} [logo]
 * @property {string} display
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} operators
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef CollectionQuery
 * @property {Object[]} value
 * @property {string} op
 * @property {string} attribute
 */

/**
 * @typedef BannerImage
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [portrait]
 * @property {BannerImage} [landscape]
 */

/**
 * @typedef Media1
 * @property {string} [type]
 * @property {string} url
 * @property {Object} [meta]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
 */

/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {string[]} [visible_facets_keys]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {Object} [meta]
 * @property {string} [uid]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 * @property {string} [app_id]
 * @property {Object} [badge]
 * @property {Media1} [logo]
 * @property {string} [type]
 * @property {boolean} [allow_sort]
 * @property {Action} [action]
 * @property {string} [description]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {boolean} [is_selected]
 * @property {string} [display]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {boolean} [is_selected]
 * @property {string} [display]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags]
 * @property {CollectionListingFilterType[]} [type]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {Page} [page]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {CollectionListingFilter} [filters]
 */

/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef CollectionSchedule
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [start]
 * @property {string} [end]
 * @property {string} [cron]
 * @property {number} [duration]
 */

/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef CollectionImage
 * @property {string} aspect_ratio
 * @property {string} url
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
 */

/**
 * @typedef UserInfo
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [email]
 */

/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */

/**
 * @typedef CreateCollection
 * @property {string} [sort_on]
 * @property {string[]} [visible_facets_keys]
 * @property {number} [priority]
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {boolean} [is_visible]
 * @property {boolean} [allow_facets]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {SeoDetail} [seo]
 * @property {boolean} [published]
 * @property {CollectionBanner} banners
 * @property {Object} [meta]
 * @property {string[]} [tags]
 * @property {UserInfo} [modified_by]
 * @property {string} slug
 * @property {UserInfo} [created_by]
 * @property {boolean} [is_active]
 * @property {string} app_id
 * @property {CollectionBadge} [badge]
 * @property {Object} [_locale_language]
 * @property {CollectionImage} logo
 * @property {string} type
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {string} [sort_on]
 * @property {string[]} [visible_facets_keys]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {Object} [meta]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 * @property {string} [app_id]
 * @property {Object} [badge]
 * @property {BannerImage} [logo]
 * @property {string} [type]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {string[]} [visible_facets_keys]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {Object} [meta]
 * @property {string} [uid]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 * @property {string} [app_id]
 * @property {Object} [badge]
 * @property {Media1} [logo]
 * @property {string} [type]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 */

/**
 * @typedef UpdateCollection
 * @property {string} [sort_on]
 * @property {string[]} [visible_facets_keys]
 * @property {number} [priority]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {boolean} [is_visible]
 * @property {boolean} [allow_facets]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {SeoDetail} [seo]
 * @property {boolean} [published]
 * @property {CollectionBanner} [banners]
 * @property {Object} [meta]
 * @property {string[]} [tags]
 * @property {UserInfo} [modified_by]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {CollectionBadge} [badge]
 * @property {Object} [_locale_language]
 * @property {CollectionImage} [logo]
 * @property {string} [type]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 */

/**
 * @typedef ProductBrand
 * @property {number} [uid]
 * @property {Media1} [logo]
 * @property {Action} [action]
 * @property {string} [name]
 */

/**
 * @typedef Price1
 * @property {number} [min]
 * @property {string} [currency_code]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [key]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details]
 * @property {string} [title]
 */

/**
 * @typedef ProductListingDetail
 * @property {Object} [attributes]
 * @property {string[]} [similars]
 * @property {string} [item_type]
 * @property {string} [name]
 * @property {string} [description]
 * @property {boolean} [sellable]
 * @property {number} [uid]
 * @property {string[]} [highlights]
 * @property {string} [item_code]
 * @property {number} [rating_count]
 * @property {string} slug
 * @property {ProductBrand} [brand]
 * @property {string} [discount]
 * @property {string} [type]
 * @property {Media1[]} [medias]
 * @property {string[]} [tryouts]
 * @property {ProductListingPrice} [price]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [product_online_date]
 * @property {string} [image_nature]
 * @property {number} [rating]
 * @property {Object} [teaser_tag]
 * @property {string} [short_description]
 * @property {Object} [promo_meta]
 * @property {string} [color]
 * @property {boolean} [has_variant]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {Page} [page]
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductListingDetail[]} [items]
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {string} [action]
 * @property {number} [item_id]
 */

/**
 * @typedef CollectionItemRequest
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 * @property {ItemQueryForUserCollection[]} [item]
 */

/**
 * @typedef UpdatedResponse
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [total_sizes]
 * @property {number} [article_freshness]
 * @property {string} [name]
 * @property {number} [available_sizes]
 * @property {number} [available_articles]
 * @property {number} [total_articles]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [sellable_count]
 * @property {number} [out_of_stock_count]
 * @property {number} [count]
 */

/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CatalogInsightItem} [item]
 */

/**
 * @typedef CrossSellingData
 * @property {number} [articles]
 * @property {number} [products]
 */

/**
 * @typedef CrossSellingResponse
 * @property {CrossSellingData} [data]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef OptInPostRequest
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {number[]} [store_ids]
 * @property {boolean} [enabled]
 * @property {string} opt_level
 * @property {string} [platform]
 */

/**
 * @typedef CompanyOptIn
 * @property {Object} [created_by]
 * @property {number[]} brand_ids
 * @property {number} company_id
 * @property {number} modified_on
 * @property {number[]} store_ids
 * @property {boolean} enabled
 * @property {Object} [modified_by]
 * @property {string} opt_level
 * @property {number} created_on
 * @property {string} platform
 */

/**
 * @typedef GetOptInPlatform
 * @property {Page} page
 * @property {CompanyOptIn[]} items
 */

/**
 * @typedef OptinCompanyDetail
 * @property {number} [uid]
 * @property {string} [company_type]
 * @property {string} [business_type]
 * @property {string} [name]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {number} [company_id]
 * @property {number} [total_article]
 * @property {string} [brand_name]
 * @property {number} [brand_id]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {Page} [page]
 * @property {CompanyBrandDetail[]} [items]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {string} [company]
 * @property {number} [brand]
 * @property {number} [store]
 */

/**
 * @typedef StoreDetail
 * @property {Object} [address]
 * @property {number} [company_id]
 * @property {string} [store_code]
 * @property {Object[]} [additional_contacts]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {Object} [manager]
 * @property {string} [created_on]
 * @property {Object} [timing]
 * @property {Object[]} [documents]
 */

/**
 * @typedef OptinStoreDetails
 * @property {Page} [page]
 * @property {StoreDetail[]} [items]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {number} [priority]
 * @property {boolean} indexing
 * @property {string[]} [depends_on]
 */

/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys]
 */

/**
 * @typedef AttributeMasterMeta
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 * @property {boolean} [enriched]
 */

/**
 * @typedef AttributeSchemaRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AttributeMaster
 * @property {AttributeSchemaRange} [range]
 * @property {boolean} [mandatory]
 * @property {string} [format]
 * @property {string} type
 * @property {string[]} [allowed_values]
 * @property {boolean} [multi]
 */

/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */

/**
 * @typedef GenderDetail
 * @property {string} [slug]
 * @property {AttributeMasterFilter} [filters]
 * @property {string[]} [departments]
 * @property {string} [id]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [name]
 * @property {AttributeMaster} [schema]
 * @property {AttributeMasterDetails} [details]
 * @property {string} [logo]
 * @property {boolean} [is_nested]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [description]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Page} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef PTErrorResponse
 * @property {Object} [errors]
 * @property {string} [code]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {number} [status]
 */

/**
 * @typedef UserSerializer
 * @property {string} [uid]
 * @property {string} [_id]
 * @property {string} [username]
 * @property {string} [contact]
 * @property {string} [user_id]
 */

/**
 * @typedef GetDepartment
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {UserSerializer} [created_by]
 * @property {number} [page_no]
 * @property {boolean} [is_active]
 * @property {string} [item_type]
 * @property {number} [priority_order]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [logo]
 * @property {UserSerializer} [modified_by]
 * @property {number} [page_size]
 * @property {string} [search]
 * @property {string} [created_on]
 */

/**
 * @typedef DepartmentsResponse
 * @property {Page} [page]
 * @property {GetDepartment[]} [items]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {Object} [errors]
 * @property {string} [code]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {number} [status]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {boolean} [is_active]
 * @property {number} priority_order
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {number} [uid]
 * @property {string[]} [tags]
 * @property {string} logo
 * @property {Object} [platforms]
 * @property {string} [_cls]
 */

/**
 * @typedef DepartmentCreateResponse
 * @property {number} uid
 * @property {string} message
 */

/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef UserDetail
 * @property {boolean} [super_user]
 * @property {string} username
 * @property {string} [contact]
 * @property {string} user_id
 */

/**
 * @typedef DepartmentModel
 * @property {Object} [slug]
 * @property {UserDetail} [created_by]
 * @property {Object[]} [synonyms]
 * @property {boolean} [is_active]
 * @property {number} priority_order
 * @property {string} [verified_on]
 * @property {string} modified_on
 * @property {Object} [_custom_json]
 * @property {Object} name
 * @property {number} [uid]
 * @property {Object} [_id]
 * @property {string} logo
 * @property {UserDetail} [modified_by]
 * @property {string} created_on
 * @property {Object} [_cls]
 * @property {UserDetail} [verified_by]
 */

/**
 * @typedef ProductTemplate
 * @property {string} slug
 * @property {Object} [created_by]
 * @property {string[]} [attributes]
 * @property {boolean} [is_active]
 * @property {string} [tag]
 * @property {boolean} [is_archived]
 * @property {string} [created_on]
 * @property {string[]} [departments]
 * @property {string} [modified_on]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {Object} [modified_by]
 * @property {string[]} [categories]
 * @property {boolean} is_expirable
 * @property {boolean} is_physical
 */

/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */

/**
 * @typedef Properties
 * @property {Object} [trader]
 * @property {Object} [item_type]
 * @property {Object} [name]
 * @property {Object} [no_of_boxes]
 * @property {Object} [category_slug]
 * @property {Object} [country_of_origin]
 * @property {Object} [custom_order]
 * @property {Object} [tags]
 * @property {Object} [highlights]
 * @property {Object} [command]
 * @property {Object} [item_code]
 * @property {Object} [slug]
 * @property {Object} [media]
 * @property {Object} [size_guide]
 * @property {Object} [variants]
 * @property {Object} [multi_size]
 * @property {Object} [is_active]
 * @property {Object} [hsn_code]
 * @property {Object} [trader_type]
 * @property {Object} [currency]
 * @property {Object} [is_dependent]
 * @property {Object} [product_publish]
 * @property {Object} [brand_uid]
 * @property {Object} [sizes]
 * @property {Object} [teaser_tag]
 * @property {Object} [short_description]
 * @property {Object} [return_config]
 * @property {Object} [product_group_tag]
 * @property {Object} [description]
 */

/**
 * @typedef GlobalValidation
 * @property {Object} [definitions]
 * @property {Properties} [properties]
 * @property {string[]} [required]
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string} slug
 * @property {string[]} [attributes]
 * @property {boolean} [is_active]
 * @property {string} [tag]
 * @property {boolean} [is_archived]
 * @property {string[]} [departments]
 * @property {string} [id]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string[]} [categories]
 * @property {boolean} is_expirable
 * @property {boolean} is_physical
 */

/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateValidationData} [data]
 * @property {TemplateDetails} [template_details]
 */

/**
 * @typedef InventoryValidationResponse
 * @property {Object} [data]
 * @property {string} [message]
 */

/**
 * @typedef HSNData
 * @property {string[]} [country_of_origin]
 * @property {string[]} [hsn_code]
 */

/**
 * @typedef HSNCodesResponse
 * @property {HSNData} [data]
 * @property {string} [message]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductDownloadItemsData
 * @property {string[]} [templates]
 * @property {string[]} [brand]
 * @property {string} [type]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {VerifiedBy} [created_by]
 * @property {number} [seller_id]
 * @property {Object} [template_tags]
 * @property {string} [trigger_on]
 * @property {string} [task_id]
 * @property {string} [id]
 * @property {string} [completed_on]
 * @property {string} [url]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [status]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {Page} [page]
 * @property {ProductDownloadsItems} [items]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
 */

/**
 * @typedef Media2
 * @property {string} portrait
 * @property {string} logo
 * @property {string} landscape
 */

/**
 * @typedef Hierarchy
 * @property {number} l1
 * @property {number} l2
 * @property {number} department
 */

/**
 * @typedef CategoryMappingValues
 * @property {string} name
 * @property {number} [catalog_id]
 */

/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [facebook]
 */

/**
 * @typedef Category
 * @property {Media2} [media]
 * @property {number} level
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {boolean} is_active
 * @property {Object} [created_by]
 * @property {number} [priority]
 * @property {number[]} departments
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {string} name
 * @property {number} [uid]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string[]} [tryouts]
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {CategoryMapping} [marketplaces]
 */

/**
 * @typedef CategoryResponse
 * @property {Page} [page]
 * @property {Category[]} [items]
 */

/**
 * @typedef CategoryRequestBody
 * @property {Media2} [media]
 * @property {number} level
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {boolean} is_active
 * @property {number} [priority]
 * @property {number[]} departments
 * @property {string} name
 * @property {Hierarchy[]} [hierarchy]
 * @property {string[]} [tryouts]
 * @property {CategoryMapping} [marketplaces]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
 */

/**
 * @typedef CategoryUpdateResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */

/**
 * @typedef Logo
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */

/**
 * @typedef Brand
 * @property {number} [uid]
 * @property {Logo} [logo]
 * @property {string} [name]
 */

/**
 * @typedef Image
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */

/**
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {number} [product_online_date]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {boolean} [returnable]
 * @property {string} [unit]
 * @property {number} [time]
 */

/**
 * @typedef NetQuantityResponse
 * @property {number} [value]
 * @property {string} [unit]
 */

/**
 * @typedef Product
 * @property {Object} [category]
 * @property {Object} [attributes]
 * @property {Object[]} [all_sizes]
 * @property {number[]} [all_company_ids]
 * @property {Object[]} [trader]
 * @property {string} [item_type]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {number} [no_of_boxes]
 * @property {string} [category_slug]
 * @property {string} [created_on]
 * @property {string} [country_of_origin]
 * @property {string} [pending]
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {string[]} [l3_mapping]
 * @property {Object} [custom_order]
 * @property {number} [uid]
 * @property {string[]} [tags]
 * @property {Object} [modified_by]
 * @property {string[]} [highlights]
 * @property {string} [item_code]
 * @property {Object} [moq]
 * @property {string} [slug]
 * @property {boolean} [is_set]
 * @property {Media1[]} [media]
 * @property {Object} [variants]
 * @property {boolean} [multi_size]
 * @property {boolean} [is_active]
 * @property {string} [size_guide]
 * @property {Object} [created_by]
 * @property {Brand} [brand]
 * @property {Image[]} [images]
 * @property {string} [hsn_code]
 * @property {number[]} [departments]
 * @property {string} [id]
 * @property {string[]} [all_identifiers]
 * @property {string} [stage]
 * @property {string} [currency]
 * @property {boolean} [is_dependent]
 * @property {ProductPublished} [product_publish]
 * @property {boolean} [is_expirable]
 * @property {boolean} [is_physical]
 * @property {Object} [tax_identifier]
 * @property {Object} [variant_media]
 * @property {string} [template_tag]
 * @property {VerifiedBy} [verified_by]
 * @property {number} [brand_uid]
 * @property {string} [color]
 * @property {number} [company_id]
 * @property {Object[]} [sizes]
 * @property {string} [primary_color]
 * @property {string} [image_nature]
 * @property {Object} [variant_group]
 * @property {boolean} [is_image_less_product]
 * @property {Object} [teaser_tag]
 * @property {string} [short_description]
 * @property {ReturnConfigResponse} [return_config]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string[]} [product_group_tag]
 * @property {string} [description]
 * @property {number} [category_uid]
 */

/**
 * @typedef ProductListingResponse
 * @property {Page} [page]
 * @property {Product[]} [items]
 */

/**
 * @typedef Trader
 * @property {string} [type]
 * @property {string[]} [address]
 * @property {Object} name
 */

/**
 * @typedef CustomOrder
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 */

/**
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 */

/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */

/**
 * @typedef ReturnConfig
 * @property {boolean} returnable
 * @property {string} unit
 * @property {number} time
 */

/**
 * @typedef NetQuantity
 * @property {number} [value]
 * @property {Object} [unit]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {Object} [attributes]
 * @property {Trader[]} trader
 * @property {string} item_type
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {number} [no_of_boxes]
 * @property {string} category_slug
 * @property {string} country_of_origin
 * @property {string} [requester]
 * @property {CustomOrder} [custom_order]
 * @property {number} [uid]
 * @property {string[]} [tags]
 * @property {string[]} [highlights]
 * @property {string} item_code
 * @property {string} slug
 * @property {boolean} [is_set]
 * @property {Media1[]} [media]
 * @property {Object} [variants]
 * @property {boolean} [is_active]
 * @property {boolean} [multi_size]
 * @property {string} [size_guide]
 * @property {number[]} departments
 * @property {string} currency
 * @property {boolean} [is_dependent]
 * @property {ProductPublish} [product_publish]
 * @property {TaxIdentifier} tax_identifier
 * @property {Object} [variant_media]
 * @property {string} template_tag
 * @property {string} [action]
 * @property {number} brand_uid
 * @property {number} company_id
 * @property {Object[]} sizes
 * @property {boolean} [is_image_less_product]
 * @property {Object} [variant_group]
 * @property {string} [bulk_job_id]
 * @property {TeaserTag} [teaser_tag]
 * @property {string} [short_description]
 * @property {ReturnConfig} return_config
 * @property {NetQuantity} [net_quantity]
 * @property {string[]} [product_group_tag]
 * @property {string} [description]
 * @property {Object} [change_request_id]
 */

/**
 * @typedef ProductVariants
 * @property {Media1[]} [media]
 * @property {number} [brand_uid]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [item_code]
 * @property {number} [category_uid]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {ProductVariants[]} [variants]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {AttributeMasterFilter} filters
 * @property {boolean} [variant]
 * @property {string} [name]
 * @property {AttributeMaster} schema
 * @property {string} [created_on]
 * @property {Object} [synonyms]
 * @property {string} [modified_on]
 * @property {string[]} [tags]
 * @property {AttributeMasterDetails} details
 * @property {Object} [modified_by]
 * @property {boolean} [is_nested]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} slug
 * @property {Object} [created_by]
 * @property {string} [unit]
 * @property {string[]} departments
 * @property {string} [logo]
 * @property {string} [raw_key]
 * @property {string} [suggestion]
 * @property {string} [description]
 */

/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */

/**
 * @typedef SingleProductResponse
 * @property {Product} [data]
 */

/**
 * @typedef ValidateIdentifier
 * @property {boolean} [primary]
 * @property {string} gtin_value
 * @property {string} gtin_type
 */

/**
 * @typedef AllSizes
 * @property {Object} size
 * @property {number} item_length
 * @property {number} item_width
 * @property {number} item_height
 * @property {string} item_dimensions_unit_of_measure
 * @property {Object} item_weight_unit_of_measure
 * @property {number} item_weight
 * @property {ValidateIdentifier[]} [identifiers]
 */

/**
 * @typedef GetAllSizes
 * @property {AllSizes[]} [all_sizes]
 */

/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */

/**
 * @typedef UserDetail1
 * @property {string} [username]
 * @property {string} [full_name]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductBulkRequest
 * @property {string} [file_path]
 * @property {UserDetail1} [created_by]
 * @property {string} [template_tag]
 * @property {string[]} [cancelled_records]
 * @property {boolean} [is_active]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {UserDetail1} [modified_by]
 * @property {string} [created_on]
 * @property {string[]} [failed_records]
 * @property {ProductTemplate} [template]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {Page} [page]
 * @property {ProductBulkRequest} [items]
 */

/**
 * @typedef UserInfo1
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [email]
 */

/**
 * @typedef BulkJob
 * @property {string} [file_path]
 * @property {UserInfo1} [created_by]
 * @property {string} [template_tag]
 * @property {Object[]} [cancelled_records]
 * @property {boolean} [is_active]
 * @property {number} [failed]
 * @property {number} company_id
 * @property {string} [modified_on]
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {UserInfo1} [modified_by]
 * @property {string} [tracking_url]
 * @property {string} [custom_template_tag]
 * @property {string} created_on
 * @property {Object[]} [failed_records]
 */

/**
 * @typedef BulkResponse
 * @property {UserInfo1} [created_by]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {UserInfo1} [modified_by]
 * @property {string} batch_id
 * @property {string} created_on
 */

/**
 * @typedef BulkProductRequest
 * @property {number} company_id
 * @property {string} batch_id
 * @property {string} template_tag
 * @property {Object[]} data
 */

/**
 * @typedef NestedTags
 * @property {string[]} [tags]
 */

/**
 * @typedef ProductTagsViewResponse
 * @property {NestedTags} [items]
 */

/**
 * @typedef UserCommon
 * @property {number} [company_id]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef Items
 * @property {string} [file_path]
 * @property {UserCommon} [created_by]
 * @property {string[]} [cancelled_records]
 * @property {boolean} [is_active]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {string} [id]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {UserCommon} [modified_by]
 * @property {string} [tracking_url]
 * @property {number} [retry]
 * @property {string} [created_on]
 * @property {string[]} [failed_records]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Page} [page]
 * @property {Items[]} [items]
 */

/**
 * @typedef ProductBulkAssets
 * @property {number} [company_id]
 * @property {Object} user
 * @property {string} url
 */

/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [company_id]
 * @property {string} [size]
 * @property {number} [item_id]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {ProductSizeDeleteDataResponse} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef InventoryResponse
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {number} [price_transfer]
 * @property {number} [price]
 * @property {string} [inventory_updated_on]
 * @property {number} [price_effective]
 * @property {number} [item_id]
 * @property {number} [sellable_quantity]
 * @property {string} [uid]
 * @property {Object} [store]
 * @property {number} [quantity]
 * @property {string} [currency]
 * @property {Object} [identifiers]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
 */

/**
 * @typedef SetSize
 * @property {string} size
 * @property {number} pieces
 */

/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */

/**
 * @typedef InventorySet
 * @property {number} [quantity]
 * @property {SizeDistribution} size_distribution
 * @property {string} [name]
 */

/**
 * @typedef GTIN
 * @property {boolean} [primary]
 * @property {Object} gtin_value
 * @property {string} gtin_type
 */

/**
 * @typedef InvSize
 * @property {boolean} [is_set]
 * @property {Object} size
 * @property {number} [price_transfer]
 * @property {number} [item_width]
 * @property {number} [price]
 * @property {number} [item_length]
 * @property {number} [item_height]
 * @property {string} store_code
 * @property {number} price_effective
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} quantity
 * @property {string} currency
 * @property {number} [item_weight]
 * @property {InventorySet} [set]
 * @property {string} [expiration_date]
 * @property {GTIN[]} identifiers
 */

/**
 * @typedef ItemQuery
 * @property {number} [uid]
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 */

/**
 * @typedef InventoryRequest
 * @property {number} company_id
 * @property {InvSize[]} sizes
 * @property {ItemQuery} item
 */

/**
 * @typedef Trader1
 * @property {string} type
 * @property {string[]} address
 * @property {string} name
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef StoreMeta
 * @property {number} id
 */

/**
 * @typedef QuantityBase
 * @property {string} [updated_at]
 * @property {number} [count]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [not_available]
 */

/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef ManufacturerResponse
 * @property {boolean} is_default
 * @property {string} address
 * @property {string} name
 */

/**
 * @typedef PriceMeta
 * @property {string} [updated_at]
 * @property {number} transfer
 * @property {number} effective
 * @property {Object} [tp_notes]
 * @property {string} currency
 * @property {number} marked
 */

/**
 * @typedef WeightResponse
 * @property {boolean} is_default
 * @property {number} shipping
 * @property {string} unit
 */

/**
 * @typedef ReturnConfig1
 * @property {boolean} [returnable]
 * @property {string} [unit]
 * @property {number} [time]
 */

/**
 * @typedef DimensionResponse
 * @property {number} height
 * @property {number} length
 * @property {string} unit
 * @property {boolean} is_default
 * @property {number} width
 */

/**
 * @typedef InventorySellerResponse
 * @property {Trader1[]} [trader]
 * @property {Object} [_custom_json]
 * @property {number} item_id
 * @property {string} fynd_item_code
 * @property {CompanyMeta} company
 * @property {number} total_quantity
 * @property {Object} [fynd_meta]
 * @property {string} country_of_origin
 * @property {string} fynd_article_code
 * @property {string} [added_on_store]
 * @property {Object} [meta]
 * @property {string} uid
 * @property {StoreMeta} store
 * @property {Object} [raw_meta]
 * @property {boolean} [track_inventory]
 * @property {string[]} [tags]
 * @property {UserSerializer} [modified_by]
 * @property {Quantities} [quantities]
 * @property {InventorySet} [set]
 * @property {boolean} [is_set]
 * @property {Object} identifier
 * @property {string} seller_identifier
 * @property {boolean} [is_active]
 * @property {UserSerializer} [created_by]
 * @property {BrandMeta} brand
 * @property {ManufacturerResponse} manufacturer
 * @property {string} [trace_id]
 * @property {string} [stage]
 * @property {Object} [tax_identifier]
 * @property {string} size
 * @property {PriceMeta} price
 * @property {boolean} fragile
 * @property {WeightResponse} weight
 * @property {ReturnConfig1} [return_config]
 * @property {DimensionResponse} dimension
 * @property {string} [expiration_date]
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */

/**
 * @typedef Trader2
 * @property {string} [type]
 * @property {string[]} [address]
 * @property {string} [name]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {number} [uid]
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {string} [name]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [order_committed]
 * @property {Quantity} [sellable]
 * @property {Quantity} [damaged]
 * @property {Quantity} [not_available]
 */

/**
 * @typedef BrandMeta1
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {boolean} [is_default]
 * @property {string} [address]
 * @property {string} [name]
 */

/**
 * @typedef DateMeta
 * @property {string} [added_on_store]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [inventory_updated_on]
 */

/**
 * @typedef PriceArticle
 * @property {number} [transfer]
 * @property {number} [effective]
 * @property {Object} [tp_notes]
 * @property {string} [currency]
 * @property {number} [marked]
 */

/**
 * @typedef WeightResponse1
 * @property {number} [shipping]
 * @property {string} [unit]
 */

/**
 * @typedef ReturnConfig2
 * @property {boolean} [returnable]
 * @property {string} [unit]
 * @property {number} [time]
 */

/**
 * @typedef DimensionResponse1
 * @property {number} [height]
 * @property {string} [unit]
 * @property {number} [length]
 * @property {number} [width]
 */

/**
 * @typedef GetInventories
 * @property {Trader2[]} [trader]
 * @property {number} [item_id]
 * @property {CompanyMeta1} [company]
 * @property {Object} [platforms]
 * @property {number} [total_quantity]
 * @property {string} [country_of_origin]
 * @property {string} [inventory_updated_on]
 * @property {string} [uid]
 * @property {ArticleStoreResponse} [store]
 * @property {string[]} [tags]
 * @property {boolean} [track_inventory]
 * @property {UserSerializer} [modified_by]
 * @property {QuantitiesArticle} [quantities]
 * @property {boolean} [is_set]
 * @property {Object} [identifier]
 * @property {string} [seller_identifier]
 * @property {UserSerializer} [created_by]
 * @property {BrandMeta1} [brand]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {string} [id]
 * @property {DateMeta} [date_meta]
 * @property {string} [trace_id]
 * @property {string} [stage]
 * @property {Object} [tax_identifier]
 * @property {string} [size]
 * @property {PriceArticle} [price]
 * @property {WeightResponse1} [weight]
 * @property {ReturnConfig2} [return_config]
 * @property {DimensionResponse1} [dimension]
 * @property {string} [expiration_date]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {Page} [page]
 * @property {GetInventories[]} [items]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {string} [file_path]
 * @property {Object} [created_by]
 * @property {string[]} [cancelled_records]
 * @property {boolean} [is_active]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {number} [cancelled]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {number} [succeed]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {string[]} [failed_records]
 */

/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} seller_identifier
 * @property {number} [price_marked]
 * @property {number} [price]
 * @property {string} store_code
 * @property {number} [price_effective]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [quantity]
 * @property {string[]} [tags]
 * @property {string} [currency]
 * @property {string} [trace_id]
 * @property {string} [expiration_date]
 * @property {number} [total_quantity]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {number} company_id
 * @property {InventoryJobPayload[]} sizes
 * @property {Object} [user]
 * @property {string} batch_id
 */

/**
 * @typedef InventoryExportJob
 * @property {number} seller_id
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {string} [completed_on]
 * @property {string} [url]
 * @property {Object} [request_params]
 * @property {string} [status]
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [brand]
 * @property {string} [type]
 * @property {number[]} [store]
 */

/**
 * @typedef InventoryExportResponse
 * @property {number} seller_id
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {Object} [request_params]
 * @property {string} [status]
 */

/**
 * @typedef FilerList
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef InventoryConfig
 * @property {boolean} [multivalues]
 * @property {FilerList[]} [data]
 */

/**
 * @typedef InventoryPayload
 * @property {string} seller_identifier
 * @property {number} [price_marked]
 * @property {number} store_id
 * @property {number} [price_effective]
 * @property {string[]} [tags]
 * @property {string} [trace_id]
 * @property {string} [expiration_date]
 * @property {number} [total_quantity]
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {number} company_id
 * @property {InventoryPayload[]} [payload]
 * @property {Object} [meta]
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} [errors]
 * @property {string} message
 */

/**
 * @typedef InventoryResponseItem
 * @property {InventoryFailedReason} [reason]
 * @property {InventoryPayload} [data]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {string} message
 * @property {InventoryResponseItem[]} [items]
 */

/**
 * @typedef PageResponse
 * @property {boolean} [has_previous]
 * @property {number} [size]
 * @property {string} [current]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */

/**
 * @typedef HsnCodesObject
 * @property {boolean} [tax_on_esp]
 * @property {number} [threshold2]
 * @property {number} [company_id]
 * @property {string} [hs2_code]
 * @property {string} [hsn_code]
 * @property {boolean} [tax_on_mrp]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {number} [tax1]
 * @property {number} [threshold1]
 * @property {number} [tax2]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {PageResponse} [page]
 * @property {HsnCodesObject[]} [items]
 */

/**
 * @typedef HsnUpsert
 * @property {boolean} [tax_on_esp]
 * @property {number} [threshold2]
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {string} hs2_code
 * @property {string} hsn_code
 * @property {boolean} tax_on_mrp
 * @property {number} [uid]
 * @property {number} tax1
 * @property {number} threshold1
 * @property {number} [tax2]
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef BulkHsnUpsert
 * @property {HsnUpsert[]} data
 */

/**
 * @typedef BulkHsnResponse
 * @property {boolean} [success]
 */

/**
 * @typedef TaxSlab
 * @property {string} effective_date
 * @property {number} [cess]
 * @property {number} threshold
 * @property {number} rate
 */

/**
 * @typedef HSNDataInsertV2
 * @property {Object} [created_by]
 * @property {TaxSlab[]} taxes
 * @property {string} [created_on]
 * @property {string} reporting_hsn
 * @property {string} hsn_code
 * @property {string} [modified_on]
 * @property {string} country_code
 * @property {string} type
 * @property {Object} [modified_by]
 * @property {string} description
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef ArticleQuery
 * @property {string} size
 * @property {number} item_id
 * @property {number[]} [ignored_stores]
 */

/**
 * @typedef AssignStoreArticle
 * @property {ArticleAssignment} [article_assignment]
 * @property {Object} [meta]
 * @property {string} [group_id]
 * @property {number} [quantity]
 * @property {ArticleQuery} [query]
 */

/**
 * @typedef AssignStore
 * @property {string} pincode
 * @property {number} [company_id]
 * @property {string} [channel_type]
 * @property {string} app_id
 * @property {number[]} [store_ids]
 * @property {string} [channel_identifier]
 * @property {AssignStoreArticle[]} articles
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef StoreAssignResponse
 * @property {string} size
 * @property {ArticleAssignment1} article_assignment
 * @property {number} [price_marked]
 * @property {number} [company_id]
 * @property {number} [store_id]
 * @property {number} [price_effective]
 * @property {number} item_id
 * @property {Object} [meta]
 * @property {string} [group_id]
 * @property {string} [uid]
 * @property {string} [_id]
 * @property {number} quantity
 * @property {number} [index]
 * @property {string} [s_city]
 * @property {Object[]} [strategy_wise_listing]
 * @property {boolean} status
 * @property {number} [store_pincode]
 */

/**
 * @typedef BrandItem
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [departments]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [discount]
 * @property {Media} [logo]
 */

/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */

/**
 * @typedef Department
 * @property {string} [slug]
 * @property {number} [priority_order]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Media} [logo]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef ThirdLevelChild
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object[]} [childs]
 */

/**
 * @typedef SecondLevelChild
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ThirdLevelChild[]} [childs]
 */

/**
 * @typedef Child
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {SecondLevelChild[]} [childs]
 */

/**
 * @typedef CategoryItems
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Child[]} [childs]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */

/**
 * @typedef DepartmentIdentifier
 * @property {number} [uid]
 * @property {string} [slug]
 */

/**
 * @typedef CategoryListingResponse
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */

/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 * @property {Object} [operators]
 * @property {ProductListingDetail[]} [items]
 * @property {Page} page
 */

/**
 * @typedef ProductDetail
 * @property {Object} [attributes]
 * @property {string[]} [similars]
 * @property {string} [item_type]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [uid]
 * @property {string[]} [highlights]
 * @property {string} [item_code]
 * @property {number} [rating_count]
 * @property {string} slug
 * @property {ProductBrand} [brand]
 * @property {string} [type]
 * @property {Media1[]} [medias]
 * @property {string[]} [tryouts]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [product_online_date]
 * @property {string} [image_nature]
 * @property {number} [rating]
 * @property {Object} [teaser_tag]
 * @property {string} [short_description]
 * @property {Object} [promo_meta]
 * @property {string} [color]
 * @property {boolean} [has_variant]
 */

/**
 * @typedef InventoryPage
 * @property {boolean} [has_previous]
 * @property {string} type
 * @property {number} item_total
 * @property {string} [next_id]
 * @property {boolean} [has_next]
 */

/**
 * @typedef InventoryStockResponse
 * @property {InventoryPage} page
 * @property {Object[]} [items]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [username]
 * @property {string} [contact]
 * @property {string} [user_id]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [country_code]
 * @property {string} [city]
 * @property {string} [address_type]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {string} [state]
 */

/**
 * @typedef GetCompanySerializer
 * @property {UserSerializer1} [created_by]
 * @property {string} [company_type]
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {UserSerializer1} [modified_by]
 * @property {string} [created_on]
 * @property {string} [business_type]
 * @property {UserSerializer1} [verified_by]
 */

/**
 * @typedef Document
 * @property {string} [legal_name]
 * @property {boolean} [verified]
 * @property {string} type
 * @property {string} [url]
 * @property {string} value
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {string} number
 * @property {number} country_code
 */

/**
 * @typedef UserSerializer2
 * @property {string} [username]
 * @property {string} [contact]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {string} weekday
 * @property {LocationTimingSerializer} [closing]
 * @property {LocationTimingSerializer} [opening]
 * @property {boolean} open
 */

/**
 * @typedef GetLocationSerializer
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} code
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {GetCompanySerializer} [company]
 * @property {string} [created_on]
 * @property {Object} [warnings]
 * @property {string} phone_number
 * @property {Document[]} [documents]
 * @property {LocationIntegrationType} [integration_type]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {UserSerializer2} [modified_by]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {UserSerializer2} [created_by]
 * @property {string} [store_type]
 * @property {string} [stage]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer2} [verified_by]
 * @property {GetAddressSerializer} address
 * @property {string} display_name
 * @property {LocationManagerSerializer} [manager]
 * @property {LocationDayWiseSerializer[]} [timing]
 */

/**
 * @typedef LocationListSerializer
 * @property {Page} [page]
 * @property {GetLocationSerializer[]} [items]
 */

/**
 * @typedef ApplicationBrandJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationCategoryJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationDepartment
 * @property {boolean} [is_active]
 * @property {string} app_id
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {number} uid
 * @property {string} [logo]
 */

/**
 * @typedef ApplicationDepartmentListingResponse
 * @property {Page} page
 * @property {ApplicationDepartment[]} [items]
 */

/**
 * @typedef ApplicationDepartmentJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */

/**
 * @typedef Website
 * @property {string} [url]
 */

/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */

/**
 * @typedef UserSerializer
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [landmark]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {number} longitude
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [address_type]
 * @property {number} [pincode]
 * @property {number} latitude
 * @property {string} [address2]
 */

/**
 * @typedef Document
 * @property {string} type
 * @property {string} [url]
 * @property {string} [legal_name]
 * @property {boolean} [verified]
 * @property {string} value
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {number} [rate]
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {number} uid
 * @property {string} [name]
 * @property {BusinessDetails} [business_details]
 * @property {Object} [warnings]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {UserSerializer} [verified_by]
 * @property {string} [stage]
 * @property {boolean} [franchise_enabled]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {Document[]} [documents]
 * @property {string} company_type
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [created_by]
 * @property {string[]} [notification_emails]
 * @property {string} business_type
 * @property {string} [mode]
 * @property {string} [verified_on]
 * @property {string} [business_info]
 * @property {ContactDetails} [contact_details]
 * @property {CompanyTaxesSerializer[]} [taxes]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {string} [message]
 * @property {number} [status]
 * @property {Object} [meta]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} address_type
 * @property {string} [landmark]
 * @property {string} city
 * @property {string} address1
 * @property {number} longitude
 * @property {string} state
 * @property {string} country
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {number} pincode
 * @property {number} latitude
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {number} [rate]
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 */

/**
 * @typedef UpdateCompany
 * @property {string} [name]
 * @property {BusinessDetails} [business_details]
 * @property {Object} [warnings]
 * @property {string} [company_type]
 * @property {string} [business_info]
 * @property {Document[]} [documents]
 * @property {boolean} [franchise_enabled]
 * @property {Object} [_custom_json]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {ContactDetails} [contact_details]
 * @property {string} [reject_reason]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {string[]} [notification_emails]
 * @property {string} [business_type]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [verified]
 * @property {number} [pending]
 */

/**
 * @typedef MetricsSerializer
 * @property {number} [uid]
 * @property {DocumentsObj} [product]
 * @property {string} [stage]
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [store_documents]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {number} [uid]
 * @property {string} name
 * @property {Object} [warnings]
 * @property {string} [reject_reason]
 * @property {BrandBannerSerializer} [banner]
 * @property {UserSerializer} [verified_by]
 * @property {string} [stage]
 * @property {Object} [_locale_language]
 * @property {string} [created_on]
 * @property {string} [logo]
 * @property {string[]} [synonyms]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [created_by]
 * @property {string} [mode]
 * @property {string} [verified_on]
 * @property {string} [slug_key]
 * @property {string} [description]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {number} [uid]
 * @property {string} name
 * @property {Object} [_locale_language]
 * @property {string} [brand_tier]
 * @property {Object} [_custom_json]
 * @property {string} [description]
 * @property {string} logo
 * @property {string[]} [synonyms]
 * @property {BrandBannerSerializer} [banner]
 * @property {number} [company_id]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef CompanyDetails
 * @property {string} [website_url]
 * @property {CompanySocialAccounts[]} [socials]
 */

/**
 * @typedef CompanySerializer
 * @property {number} [uid]
 * @property {string} [verified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [name]
 * @property {string[]} [market_channels]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {string} company_type
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [reject_reason]
 * @property {string} [created_on]
 * @property {CompanyDetails} [details]
 * @property {UserSerializer} [created_by]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string[]} [notification_emails]
 * @property {string} business_type
 * @property {UserSerializer} [verified_by]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {number} [uid]
 * @property {string} [verified_on]
 * @property {UserSerializer} [modified_by]
 * @property {CompanySerializer} [company]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {Object} [warnings]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [reject_reason]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [verified_by]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} [uid]
 * @property {number[]} brands
 * @property {number} company
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [name]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [email]
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} end_date
 * @property {string} start_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {string} holiday_type
 * @property {string} title
 * @property {HolidayDateSerializer} date
 */

/**
 * @typedef GetCompanySerializer
 * @property {number} [uid]
 * @property {string} [verified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [name]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {string} [company_type]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [reject_reason]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [business_type]
 * @property {UserSerializer} [verified_by]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} hour
 * @property {number} minute
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [opening]
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {string} weekday
 */

/**
 * @typedef GetLocationSerializer
 * @property {number} [uid]
 * @property {string} name
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {Object} [warnings]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} [store_type]
 * @property {UserSerializer} [verified_by]
 * @property {string} display_name
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} [stage]
 * @property {GetAddressSerializer} address
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [created_on]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {GetCompanySerializer} [company]
 * @property {UserSerializer} [modified_by]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [modified_on]
 * @property {Document[]} [documents]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [created_by]
 * @property {string[]} [notification_emails]
 * @property {string} [verified_on]
 * @property {string} [phone_number]
 * @property {string} code
 */

/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AddressSerializer
 * @property {string} [landmark]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {number} longitude
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [address_type]
 * @property {number} [pincode]
 * @property {number} latitude
 * @property {string} [address2]
 */

/**
 * @typedef LocationSerializer
 * @property {number} [uid]
 * @property {string} name
 * @property {number} company
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [stage]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {Object} [warnings]
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} [store_type]
 * @property {AddressSerializer} address
 * @property {Object} [_custom_json]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} code
 * @property {string[]} [notification_emails]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} display_name
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */

/**
 * @typedef _ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef _ArticleQuery
 * @property {number[]} [ignored_stores]
 * @property {string} [size]
 * @property {number} [item_id]
 */

/**
 * @typedef _AssignStoreArticle
 * @property {Object} [meta]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {_ArticleQuery} [query]
 * @property {number} [quantity]
 * @property {string} [group_id]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [channel_type]
 * @property {string} [channel_identifier]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {number[]} [store_ids]
 * @property {string} [app_id]
 * @property {string} [pincode]
 * @property {number} [company_id]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {number} [company_id]
 * @property {Object} [meta]
 * @property {string} [size]
 * @property {number} [store_id]
 * @property {number} [price_marked]
 * @property {number} [index]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {string} [s_city]
 * @property {boolean} [status]
 * @property {number} [preice_effective]
 * @property {string} [store_pincode]
 * @property {number} [quantity]
 * @property {number} [item_id]
 */

/**
 * @typedef FailedResponse
 * @property {string} message
 */

/**
 * @typedef CDN
 * @property {string} url
 * @property {string} [absolute_url]
 * @property {string} [relative_url]
 */

/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */

/**
 * @typedef StartResponse
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */

/**
 * @typedef StartRequest
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */

/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 */

/**
 * @typedef Opts
 * @property {number} [attempts]
 * @property {number} [timestamp]
 * @property {number} [delay]
 */

/**
 * @typedef CopyFileTask
 * @property {string} id
 * @property {string} name
 * @property {BulkRequest} data
 * @property {Opts} opts
 * @property {number} progress
 * @property {number} delay
 * @property {number} timestamp
 * @property {number} attempts_made
 * @property {string[]} [stacktrace]
 * @property {number} finished_on
 * @property {number} processed_on
 */

/**
 * @typedef BulkUploadResponse
 * @property {string} tracking_url
 * @property {CopyFileTask} task
 */

/**
 * @typedef ReqConfiguration
 * @property {number} [concurrency]
 */

/**
 * @typedef Destination
 * @property {string} namespace
 * @property {string} rewrite
 * @property {string} [basepath]
 */

/**
 * @typedef BulkRequest
 * @property {string[]} urls
 * @property {Destination} destination
 * @property {ReqConfiguration} [configuration]
 */

/**
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */

/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */

/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef DbRecord
 * @property {boolean} success
 * @property {string[]} tags
 * @property {string} _id
 * @property {string} file_name
 * @property {string} [operation]
 * @property {string} namespace
 * @property {string} content_type
 * @property {string} file_path
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string} created_on
 * @property {string} modified_on
 */

/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */

/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web]
 */

/**
 * @typedef CampaignShortLink
 * @property {string} [source]
 * @property {string} [medium]
 */

/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */

/**
 * @typedef SocialMediaTags
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */

/**
 * @typedef ShortLinkReq
 * @property {string} title
 * @property {string} url
 * @property {string} [hash]
 * @property {boolean} [active]
 * @property {string} [expire_at]
 * @property {boolean} [enable_tracking]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */

/**
 * @typedef UrlInfo
 * @property {string} [original]
 * @property {string} [short]
 * @property {string} [hash]
 */

/**
 * @typedef ShortLinkRes
 * @property {string} [title]
 * @property {UrlInfo} [url]
 * @property {string} [created_by]
 * @property {boolean} [app_redirect]
 * @property {string} [fallback]
 * @property {boolean} [active]
 * @property {string} [_id]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [application]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [updated_at]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ErrorRes
 * @property {string} [message]
 */

/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [safe_stock]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 */

/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */

/**
 * @typedef JobConfigDTO
 * @property {Object} [integration_data]
 * @property {string} [company_name]
 * @property {string} integration
 * @property {number} company_id
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 * @property {string} [job_code]
 * @property {string} [alias]
 */

/**
 * @typedef TaskDTO
 * @property {number} [type]
 * @property {GenericDTO[]} [group_list]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef ResponseEnvelopeString
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {string} [items]
 * @property {string} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef KafkaMetaModel
 * @property {string} [job_type]
 * @property {number} [batch_id]
 * @property {string} [action]
 * @property {string[]} [trace]
 * @property {string} [created_on]
 * @property {number} [created_timestamp]
 */

/**
 * @typedef SuppressStoreModel
 * @property {number[]} [stores]
 */

/**
 * @typedef SuppressStorePayload
 * @property {SuppressStoreModel[]} [payload]
 * @property {KafkaMetaModel} [meta]
 */

/**
 * @typedef KafkaResponse
 * @property {number} [offset]
 * @property {number} [partition]
 */

/**
 * @typedef ResponseEnvelopeKafkaResponse
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {KafkaResponse} [items]
 * @property {KafkaResponse} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef GCompany
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [name]
 * @property {GStore[]} [stores]
 */

/**
 * @typedef GStore
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [code]
 * @property {string} [name]
 * @property {StoreData} [data]
 */

/**
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef ResponseEnvelopeListSlingshotConfigurationDetail
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail[]} [items]
 * @property {SlingshotConfigurationDetail[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef SlingshotConfigurationDetail
 * @property {SlingshotIntegration} [integration]
 * @property {GCompany[]} [companies]
 */

/**
 * @typedef SlingshotIntegration
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Metum[]} [meta]
 */

/**
 * @typedef StoreData
 * @property {string} [location_id]
 */

/**
 * @typedef AWSS3config
 * @property {string} [bucket]
 * @property {string} [region]
 * @property {string} [dir]
 * @property {string} [access_key]
 * @property {string} [secret_key]
 * @property {string} [local_file_path]
 * @property {string} [archive_path]
 * @property {boolean} [archive]
 * @property {boolean} [delete]
 * @property {boolean} [unzip]
 * @property {string} [zip_format]
 * @property {string} [file_regex]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef ArchiveConfig
 * @property {boolean} [delete]
 * @property {boolean} [archive]
 * @property {string} [archive_dir]
 */

/**
 * @typedef Audit
 * @property {string} [created_by]
 * @property {string} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CatalogMasterConfig
 * @property {string} [source_slug]
 */

/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {number[]} [exclude_steps]
 * @property {string[]} [hidden_closet_keys]
 * @property {Object} [open_tags]
 * @property {string[]} [tax_identifiers]
 * @property {number} [delete_quantity_threshold]
 */

/**
 * @typedef DBConfig
 * @property {string} [vendor]
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [dbname]
 * @property {string} [query]
 * @property {boolean} [procedure]
 * @property {string} [driver_class]
 * @property {string} [jdbc_url]
 * @property {Object} [optional_properties]
 */

/**
 * @typedef DBConnectionProfile
 * @property {string} [inventory]
 */

/**
 * @typedef DBParamConfig
 * @property {Object} [params]
 */

/**
 * @typedef DefaultHeadersDTO
 * @property {PropBeanDTO} [store]
 * @property {PropBeanDTO} [intf_article_id]
 * @property {PropBeanDTO} [price_effective]
 * @property {PropBeanDTO} [quantity]
 */

/**
 * @typedef DocMappingConfig
 * @property {Object} [properties]
 * @property {number} [junk_data_threshold_count]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {string} [unwind_field]
 * @property {DefaultHeadersDTO} [default_headers]
 */

/**
 * @typedef EmailConfig
 * @property {string} [recepient]
 * @property {string} [host]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {boolean} [read_from_content]
 * @property {boolean} [filter_based_on_recepients]
 * @property {string} [pcol]
 * @property {string} [subject_line_regex]
 * @property {string} [sender_address]
 * @property {string} [local_dir]
 * @property {string[]} [folder_name_hierarchies]
 * @property {string} [attachment_regex]
 * @property {string} [body_content_regex]
 * @property {boolean} [password_protected]
 * @property {string} [zip_format]
 * @property {boolean} [attachment_mandate]
 * @property {boolean} [filter_files_after_extraction]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_unread_mails]
 * @property {string} [content_type]
 * @property {boolean} [downloadable_link]
 * @property {Object} [properties]
 */

/**
 * @typedef FTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {string} [zip_file_regex]
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef FileConfig
 * @property {string} [delimiter]
 * @property {string} [charset]
 * @property {Object} [properties]
 * @property {boolean} [file_has_header]
 * @property {number} [header_index]
 * @property {string[]} [header_array]
 * @property {number} [data_start_index]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {number} [junk_data_threshold_count]
 * @property {string} [file_type]
 * @property {boolean} [line_validity_check]
 * @property {string[]} [sheet_names]
 * @property {boolean} [read_all_sheets]
 * @property {string} [quote_char]
 * @property {string} [escape_char]
 * @property {DefaultHeadersDTO} [default_headers]
 */

/**
 * @typedef GoogleSpreadSheetConfig
 * @property {string} [range]
 * @property {string} [sheet_id]
 * @property {string} [client_secret_location]
 * @property {string} [cred_storage_directory]
 * @property {string} [local_dir]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef HttpConfig
 * @property {string} [hosturl]
 * @property {string} [username]
 * @property {string} [password]
 * @property {Object} [request_params]
 * @property {string} [http_method]
 * @property {string} [request_payload]
 * @property {string} [local_path]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef JobConfig
 * @property {number} [_id]
 * @property {string} [job_code]
 * @property {string} [task_type]
 * @property {number} [sync_delay]
 * @property {string} [cron_expression]
 * @property {StoreFilter} [store_filter]
 * @property {ProcessConfig} [process_config]
 * @property {StoreConfig[]} [store_config]
 * @property {Object} [properties]
 * @property {boolean} [immediate_first_run]
 * @property {boolean} [disable]
 * @property {string[]} [dependent_job_codes]
 * @property {CompanyConfig[]} [company_config]
 * @property {number[]} [company_ids]
 * @property {string[]} [tax_identifiers]
 * @property {string} [priority]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {DBConnectionProfile} [db_connection_profile]
 * @property {Object} [params]
 * @property {Object} [open_tags]
 * @property {number} [delete_quantity_threshold]
 * @property {CatalogMasterConfig} [catalog_master_config]
 * @property {string[]} [aggregator_types]
 * @property {string} [integration_type]
 * @property {number} [min_price]
 * @property {Audit} [audit]
 * @property {number} [version]
 * @property {string} [alias]
 */

/**
 * @typedef JobConfigRawDTO
 * @property {string} company_name
 * @property {string} integration
 * @property {number} company_id
 * @property {JobConfig} [data]
 */

/**
 * @typedef JsonDocConfig
 * @property {PropBeanConfig[]} [prop_bean_configs]
 */

/**
 * @typedef LocalFileConfig
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [working_dir]
 * @property {boolean} [unzip]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef MongoDocConfig
 * @property {string} [collection_name]
 * @property {Object} [find_query]
 * @property {Object} [projection_query]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {Object[]} [aggregate_pipeline]
 * @property {boolean} [skip_save]
 */

/**
 * @typedef OAuthConfig
 * @property {number} [limit]
 * @property {number} [pages]
 * @property {number} [interval]
 * @property {string} [consumer_key]
 * @property {string} [consumer_secret]
 * @property {string} [token]
 * @property {string} [token_secret]
 * @property {string} [rest_url]
 * @property {string} [rest_base_url]
 * @property {string} [function_name]
 */

/**
 * @typedef ProcessConfig
 * @property {DBConfig} [db_config]
 * @property {DBParamConfig} [db_param_config]
 * @property {SFTPConfig} [sftp_config]
 * @property {AWSS3config} [aws_s3_config]
 * @property {MongoDocConfig} [mongo_doc_config]
 * @property {FTPConfig} [ftp_config]
 * @property {EmailConfig} [email_config]
 * @property {FileConfig} [file_config]
 * @property {JsonDocConfig} [json_doc_config]
 * @property {DocMappingConfig} [doc_mapping_config]
 * @property {TaskStepConfig} [task_step_config]
 * @property {HttpConfig} [http_config]
 * @property {LocalFileConfig} [local_file_config]
 * @property {OAuthConfig} [oauth_config]
 * @property {GoogleSpreadSheetConfig} [google_spreadsheet_config]
 */

/**
 * @typedef PropBeanConfig
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {Send} [send]
 * @property {Object[]} [validations]
 * @property {string[]} [values]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */

/**
 * @typedef PropBeanDTO
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigRawDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigRawDTO[]} [items]
 * @property {JobConfigRawDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef SFTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [private_key_path]
 * @property {boolean} [strict_host_key_checking]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {boolean} [password_protected]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef Send
 * @property {boolean} [raw]
 * @property {boolean} [processed]
 */

/**
 * @typedef StoreConfig
 * @property {string} [job_code]
 * @property {string} [storeid]
 * @property {string} [store_alias]
 * @property {string} [store_file_regex]
 * @property {string} [store_file_name]
 * @property {ProcessConfig} [process_config]
 * @property {Object} [properties]
 */

/**
 * @typedef StoreFilter
 * @property {string[]} [include_tags]
 * @property {string[]} [exclude_tags]
 * @property {Object} [query]
 */

/**
 * @typedef TaskConfig
 * @property {string} [name]
 * @property {number} [task_config_id]
 * @property {TaskParam[]} [task_params]
 */

/**
 * @typedef TaskParam
 * @property {string} [name]
 * @property {Object} [value]
 */

/**
 * @typedef TaskStepConfig
 * @property {TaskConfig[]} [task_configs]
 * @property {number[]} [task_config_ids]
 * @property {number[]} [task_config_group_ids]
 */

/**
 * @typedef JobStepsDTO
 * @property {string} [step_name]
 * @property {string} [type]
 * @property {number} [step_execution_time]
 * @property {number} [start_count]
 * @property {number} [end_count]
 * @property {number} [deleted_count]
 * @property {string} [processed_start_time]
 * @property {string} [processed_at]
 */

/**
 * @typedef ResponseEnvelopeListJobStepsDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobStepsDTO[]} [items]
 * @property {JobStepsDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {JobConfigDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {JobConfigDTO} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef JobHistoryDto
 * @property {number} [total_added_count]
 * @property {number} [total_updated_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_initial_count]
 * @property {number} [job_id]
 * @property {string} [status]
 * @property {string} [job_code]
 * @property {string} [processed_on]
 * @property {string[]} [filename]
 * @property {string} [error_type]
 * @property {string} [message]
 */

/**
 * @typedef JobMetricsDto
 * @property {string} [job_code]
 * @property {string} [is_run_more_than_usual]
 * @property {JobHistoryDto[]} [job_history]
 * @property {number} [total_success_count]
 * @property {number} [total_failure_count]
 * @property {number} [total_warning_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_job_runs]
 */

/**
 * @typedef ResponseEnvelopeJobMetricsDto
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobMetricsDto} [items]
 * @property {JobMetricsDto} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef JobConfigListDTO
 * @property {string} [code]
 * @property {string} [alias]
 * @property {string} [modified_by]
 * @property {string} [created_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {boolean} [active]
 * @property {string} [type]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigListDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigListDTO[]} [items]
 * @property {JobConfigListDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ApplicationInventory
 * @property {AppInventoryConfig} [inventory]
 * @property {AuthenticationConfig} [authentication]
 * @property {ArticleAssignmentConfig} [article_assignment]
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {AppOrderConfig} [order]
 * @property {AppLogisticsConfig} [logistics]
 * @property {string} [business]
 * @property {boolean} [comms_enabled]
 * @property {string[]} [platforms]
 * @property {string} [_id]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [modified_by]
 */

/**
 * @typedef AppInventoryConfig
 * @property {InventoryBrand} [brand]
 * @property {InventoryStore} [store]
 * @property {InventoryCategory} [category]
 * @property {InventoryPrice} [price]
 * @property {InventoryDiscount} [discount]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {boolean} [franchise_enabled]
 * @property {Object[]} [exclude_category]
 * @property {string[]} [image]
 * @property {Object[]} [company_store]
 */

/**
 * @typedef InventoryBrand
 * @property {string} [criteria]
 * @property {Object[]} [brands]
 */

/**
 * @typedef InventoryStore
 * @property {string} [criteria]
 * @property {Object[]} [stores]
 * @property {AppStoreRules} [rules]
 */

/**
 * @typedef AppStoreRules
 * @property {number[]} [companies]
 * @property {Object[]} [brands]
 */

/**
 * @typedef InventoryCategory
 * @property {string} [criteria]
 * @property {Object[]} [categories]
 */

/**
 * @typedef InventoryPrice
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef InventoryDiscount
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AuthenticationConfig
 * @property {boolean} [required]
 * @property {string} [provider]
 */

/**
 * @typedef ArticleAssignmentConfig
 * @property {ArticleAssignmentRules} [rules]
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef ArticleAssignmentRules
 * @property {StorePriority} [store_priority]
 */

/**
 * @typedef StorePriority
 * @property {boolean} [enabled]
 * @property {Object[]} [storetype_order]
 */

/**
 * @typedef AppCartConfig
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [enabled]
 * @property {number} [max_cart_items]
 * @property {number} [min_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {boolean} [revenue_engine_coupon]
 */

/**
 * @typedef DeliveryCharges
 * @property {boolean} [enabled]
 * @property {Charges} [charges]
 */

/**
 * @typedef Charges
 * @property {number} [threshold]
 * @property {number} [charges]
 */

/**
 * @typedef AppPaymentConfig
 * @property {CallbackUrl} [callback_url]
 * @property {Methods} [methods]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 * @property {boolean} [enabled]
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 */

/**
 * @typedef CallbackUrl
 * @property {string} [app]
 * @property {string} [web]
 */

/**
 * @typedef Methods
 * @property {PaymentModeConfig} [pl]
 * @property {PaymentModeConfig} [card]
 * @property {PaymentModeConfig} [nb]
 * @property {PaymentModeConfig} [wl]
 * @property {PaymentModeConfig} [ps]
 * @property {PaymentModeConfig} [upi]
 * @property {PaymentModeConfig} [qr]
 * @property {PaymentModeConfig} [cod]
 * @property {PaymentModeConfig} [pp]
 * @property {PaymentModeConfig} [jp]
 * @property {PaymentModeConfig} [pac]
 * @property {PaymentModeConfig} [fc]
 * @property {PaymentModeConfig} [jiopp]
 * @property {PaymentModeConfig} [stripepg]
 * @property {PaymentModeConfig} [juspaypg]
 * @property {PaymentModeConfig} [payubizpg]
 * @property {PaymentModeConfig} [payumoneypg]
 * @property {PaymentModeConfig} [rupifipg]
 * @property {PaymentModeConfig} [simpl]
 */

/**
 * @typedef PaymentModeConfig
 * @property {boolean} [enabled]
 */

/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef AppOrderConfig
 * @property {boolean} [enabled]
 * @property {boolean} [force_reassignment]
 * @property {string} [message]
 */

/**
 * @typedef AppLogisticsConfig
 * @property {boolean} [logistics_by_seller]
 * @property {boolean} [serviceability_check]
 * @property {boolean} [same_day_delivery]
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef LoyaltyPointsConfig
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 */

/**
 * @typedef AppInventoryPartialUpdate
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {boolean} [comms_enabled]
 */

/**
 * @typedef BrandCompanyInfo
 * @property {string} [company_name]
 * @property {number} [company_id]
 */

/**
 * @typedef CompanyByBrandsRequest
 * @property {number} brands
 * @property {string} [search_text]
 */

/**
 * @typedef CompanyByBrandsResponse
 * @property {BrandCompanyInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef StoreByBrandsRequest
 * @property {number} [company_id]
 * @property {number} brands
 * @property {string} [search_text]
 */

/**
 * @typedef StoreByBrandsResponse
 * @property {BrandStoreInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BrandStoreInfo
 * @property {string} [store_name]
 * @property {number} [store_id]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {OptedStoreAddress} [store_address]
 * @property {OptedCompany} [company]
 */

/**
 * @typedef CompanyBrandInfo
 * @property {string} [name]
 * @property {number} [value]
 * @property {string} [brand_logo_url]
 * @property {string} [brand_banner_url]
 * @property {string} [brand_banner_portrait_url]
 */

/**
 * @typedef BrandsByCompanyResponse
 * @property {CompanyBrandInfo} [brands]
 */

/**
 * @typedef CreateApplicationRequest
 * @property {App} [app]
 * @property {AppInventory} [configuration]
 * @property {AppDomain} [domain]
 */

/**
 * @typedef CreateAppResponse
 * @property {Application} [app]
 * @property {ApplicationInventory} [configuration]
 */

/**
 * @typedef ApplicationsResponse
 * @property {Application[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef MobileAppConfiguration
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {string} [package_name]
 */

/**
 * @typedef LandingImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef SplashImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef MobileAppConfigRequest
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {boolean} [is_active]
 */

/**
 * @typedef BuildVersionHistory
 * @property {BuildVersion} [versions]
 * @property {string} [latest_available_version_name]
 */

/**
 * @typedef BuildVersion
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [build_status]
 * @property {string} [version_name]
 * @property {number} [version_code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef AppSupportedCurrency
 * @property {string} [_id]
 * @property {string[]} [supported_currency]
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef DefaultCurrency
 * @property {string} [ref]
 * @property {string} [code]
 */

/**
 * @typedef CurrencyConfig
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */

/**
 * @typedef DomainAdd
 * @property {string} [name]
 */

/**
 * @typedef DomainAddRequest
 * @property {DomainAdd} [domain]
 */

/**
 * @typedef DomainsResponse
 * @property {Domain[]} [domains]
 */

/**
 * @typedef UpdateDomain
 * @property {string} [_id]
 */

/**
 * @typedef UpdateDomainTypeRequest
 * @property {UpdateDomain} [domain]
 * @property {string} [action]
 */

/**
 * @typedef DomainStatusRequest
 * @property {string} [domain_url]
 */

/**
 * @typedef DomainStatus
 * @property {string} [display]
 * @property {boolean} [status]
 */

/**
 * @typedef DomainStatusResponse
 * @property {boolean} [connected]
 * @property {DomainStatus[]} [status]
 */

/**
 * @typedef DomainSuggestionsRequest
 * @property {string} [domain_url]
 * @property {boolean} [custom]
 */

/**
 * @typedef DomainSuggestion
 * @property {string} name
 * @property {boolean} [unsupported]
 * @property {boolean} is_available
 * @property {number} [price]
 * @property {string} [currency]
 */

/**
 * @typedef DomainSuggestionsResponse
 * @property {DomainSuggestion[]} [domains]
 */

/**
 * @typedef GetIntegrationsOptInsResponse
 * @property {IntegrationOptIn[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef IntegrationOptIn
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {string} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */

/**
 * @typedef Validators
 * @property {CompanyValidator} [company]
 * @property {StoreValidator} [store]
 * @property {InventoryValidator} [inventory]
 * @property {OrderValidator} [order]
 */

/**
 * @typedef CompanyValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef JsonSchema
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [tooltip]
 */

/**
 * @typedef StoreValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef InventoryValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef OrderValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef IntegrationMeta
 * @property {boolean} [is_public]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef Integration
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {Object} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */

/**
 * @typedef IntegrationConfigResponse
 * @property {IntegrationLevel[]} [items]
 */

/**
 * @typedef IntegrationLevel
 * @property {boolean} [opted]
 * @property {Object[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {Object} [data]
 */

/**
 * @typedef UpdateIntegrationLevelRequest
 * @property {IntegrationLevel[]} [items]
 */

/**
 * @typedef OptedStoreIntegration
 * @property {boolean} [other_opted]
 * @property {IntegrationOptIn} [other_integration]
 * @property {OtherEntity} [other_entity]
 */

/**
 * @typedef OtherEntity
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {OtherEntityData} [data]
 * @property {Object[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef LastPatch
 * @property {string} [op]
 * @property {string} [path]
 * @property {string} [value]
 */

/**
 * @typedef OtherEntityData
 * @property {string} [article_identifier]
 */

/**
 * @typedef App
 * @property {string} [company_id]
 * @property {string} [channel_type]
 * @property {ApplicationAuth} [auth]
 * @property {string} [name]
 * @property {string} [desc]
 */

/**
 * @typedef AppInventory
 * @property {InventoryBrandRule} [brand]
 * @property {InventoryStoreRule} [store]
 * @property {string[]} [image]
 * @property {boolean} [franchise_enabled]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {InventoryPaymentConfig} [payment]
 * @property {InventoryArticleAssignment} [article_assignment]
 */

/**
 * @typedef AppDomain
 * @property {string} [name]
 */

/**
 * @typedef CompaniesResponse
 * @property {AppInventoryCompanies} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AppInventoryCompanies
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [company_type]
 */

/**
 * @typedef StoresResponse
 * @property {AppInventoryStores} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AppInventoryStores
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [company_id]
 */

/**
 * @typedef FilterOrderingStoreRequest
 * @property {boolean} [all_stores]
 * @property {number[]} [deployed_stores]
 * @property {string} [q]
 */

/**
 * @typedef DeploymentMeta
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 */

/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */

/**
 * @typedef OtherSellerCompany
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef OtherSellerApplication
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OtherSellerCompany} [company]
 * @property {string} [opt_type]
 */

/**
 * @typedef OtherSellerApplications
 * @property {OtherSellerApplication[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptedApplicationResponse
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OptedCompany} [company]
 * @property {OptedInventory} [opted_inventory]
 * @property {OptOutInventory} [opt_out_inventory]
 */

/**
 * @typedef OptedCompany
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef OptedInventory
 * @property {OptType} [opt_type]
 * @property {Object} [items]
 */

/**
 * @typedef OptType
 * @property {string} [key]
 * @property {string} [display]
 */

/**
 * @typedef OptedStore
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {OptedStoreAddress} [address]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {number} [company_id]
 */

/**
 * @typedef OptOutInventory
 * @property {number[]} store
 * @property {number[]} company
 */

/**
 * @typedef TokenResponse
 * @property {Tokens} [tokens]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef Tokens
 * @property {Firebase} [firebase]
 * @property {Moengage} [moengage]
 * @property {Segment} [segment]
 * @property {Gtm} [gtm]
 * @property {Freshchat} [freshchat]
 * @property {Safetynet} [safetynet]
 * @property {FyndRewards} [fynd_rewards]
 * @property {GoogleMap} [google_map]
 */

/**
 * @typedef Firebase
 * @property {Credentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef Credentials
 * @property {Ios} [ios]
 * @property {Android} [android]
 * @property {string} [project_id]
 * @property {string} [gcm_sender_id]
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Ios
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Android
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Moengage
 * @property {MoengageCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef MoengageCredentials
 * @property {string} [app_id]
 */

/**
 * @typedef Segment
 * @property {SegmentCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SegmentCredentials
 * @property {string} [write_key]
 */

/**
 * @typedef Gtm
 * @property {GtmCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef GtmCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef Freshchat
 * @property {FreshchatCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef FreshchatCredentials
 * @property {string} [app_id]
 * @property {string} [app_key]
 * @property {string} [web_token]
 */

/**
 * @typedef Safetynet
 * @property {SafetynetCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SafetynetCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef FyndRewards
 * @property {FyndRewardsCredentials} [credentials]
 */

/**
 * @typedef FyndRewardsCredentials
 * @property {string} [public_key]
 */

/**
 * @typedef GoogleMap
 * @property {GoogleMapCredentials} [credentials]
 */

/**
 * @typedef GoogleMapCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef RewardPointsConfig
 * @property {Credit} [credit]
 * @property {Debit} [debit]
 */

/**
 * @typedef Credit
 * @property {boolean} [enabled]
 */

/**
 * @typedef Debit
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 * @property {string} [strategy_channel]
 */

/**
 * @typedef ProductDetailFeature
 * @property {string[]} [similar]
 * @property {boolean} [seller_selection]
 * @property {boolean} [update_product_meta]
 * @property {boolean} [request_product]
 */

/**
 * @typedef LaunchPage
 * @property {string} [page_type]
 * @property {Object} [params]
 * @property {Object} [query]
 */

/**
 * @typedef LandingPageFeature
 * @property {LaunchPage} [launch_page]
 * @property {boolean} [continue_as_guest]
 * @property {string} [login_btn_text]
 * @property {boolean} [show_domain_textbox]
 * @property {boolean} [show_register_btn]
 */

/**
 * @typedef RegistrationPageFeature
 * @property {boolean} [ask_store_address]
 */

/**
 * @typedef AppFeature
 * @property {ProductDetailFeature} [product_detail]
 * @property {LandingPageFeature} [landing_page]
 * @property {RegistrationPageFeature} [registration_page]
 * @property {HomePageFeature} [home_page]
 * @property {CommonFeature} [common]
 * @property {CartFeature} [cart]
 * @property {QrFeature} [qr]
 * @property {PcrFeature} [pcr]
 * @property {OrderFeature} [order]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef HomePageFeature
 * @property {boolean} [order_processing]
 */

/**
 * @typedef CommonFeature
 * @property {CommunicationOptinDialogFeature} [communication_optin_dialog]
 * @property {DeploymentStoreSelectionFeature} [deployment_store_selection]
 * @property {ListingPriceFeature} [listing_price]
 * @property {CurrencyFeature} [currency]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {FeedbackFeature} [feedback]
 * @property {CompareProductsFeature} [compare_products]
 * @property {RewardPointsConfig} [reward_points]
 */

/**
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility]
 */

/**
 * @typedef DeploymentStoreSelectionFeature
 * @property {boolean} [enabled]
 * @property {string} [type]
 */

/**
 * @typedef ListingPriceFeature
 * @property {string} [value]
 */

/**
 * @typedef CurrencyFeature
 * @property {string[]} [value]
 * @property {string} [type]
 * @property {string} [default_currency]
 */

/**
 * @typedef RevenueEngineFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef FeedbackFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef CartFeature
 * @property {boolean} [gst_input]
 * @property {boolean} [staff_selection]
 * @property {boolean} [placing_for_customer]
 * @property {boolean} [google_map]
 * @property {boolean} [revenue_engine_coupon]
 */

/**
 * @typedef QrFeature
 * @property {boolean} [application]
 * @property {boolean} [products]
 * @property {boolean} [collections]
 */

/**
 * @typedef PcrFeature
 * @property {boolean} [staff_selection]
 */

/**
 * @typedef OrderFeature
 * @property {boolean} [buy_again]
 */

/**
 * @typedef AppFeatureRequest
 * @property {AppFeature} [feature]
 */

/**
 * @typedef AppFeatureResponse
 * @property {AppFeature} [feature]
 */

/**
 * @typedef Currency
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */

/**
 * @typedef Domain
 * @property {boolean} [verified]
 * @property {boolean} [is_primary]
 * @property {boolean} [is_shortlink]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {boolean} [is_predefined]
 */

/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled]
 * @property {string} [basepath]
 */

/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */

/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled]
 */

/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [type]
 */

/**
 * @typedef ApplicationMeta
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef SecureUrl
 * @property {string} [secure_url]
 */

/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description]
 * @property {string} [channel_type]
 * @property {number} [cache_ttl]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {number} [company_id]
 * @property {string} [token]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type]
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 */

/**
 * @typedef NotFound
 * @property {string} [message]
 */

/**
 * @typedef UnhandledError
 * @property {string} [message]
 */

/**
 * @typedef InvalidPayloadRequest
 * @property {string} [message]
 */

/**
 * @typedef SuccessMessageResponse
 * @property {string} [message]
 */

/**
 * @typedef InventoryBrandRule
 * @property {string} [criteria]
 * @property {number[]} [brands]
 */

/**
 * @typedef StoreCriteriaRule
 * @property {number[]} [companies]
 * @property {number[]} [brands]
 */

/**
 * @typedef InventoryStoreRule
 * @property {string} [criteria]
 * @property {StoreCriteriaRule[]} [rules]
 * @property {number[]} [stores]
 */

/**
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */

/**
 * @typedef StorePriorityRule
 * @property {boolean} [enabled]
 * @property {string[]} [storetype_order]
 */

/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */

/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment]
 * @property {ArticleAssignmentRule} [rules]
 */

/**
 * @typedef CompanyAboutAddress
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [address_type]
 */

/**
 * @typedef UserEmail
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 */

/**
 * @typedef UserPhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {number} [country_code]
 * @property {string} [phone]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef ApplicationInformation
 * @property {InformationAddress} [address]
 * @property {InformationSupport} [support]
 * @property {SocialLinks} [social_links]
 * @property {Links} [links]
 * @property {string} [copyright_text]
 * @property {string} [_id]
 * @property {BusinessHighlights} [business_highlights]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef InformationAddress
 * @property {string} [loc]
 * @property {string[]} [address_line]
 * @property {InformationPhone} [phone]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [pincode]
 */

/**
 * @typedef InformationPhone
 * @property {string} [code]
 * @property {string} [number]
 */

/**
 * @typedef InformationSupport
 * @property {string[]} [phone]
 * @property {string[]} [email]
 * @property {string} [timing]
 */

/**
 * @typedef SocialLinks
 * @property {FacebookLink} [facebook]
 * @property {InstagramLink} [instagram]
 * @property {TwitterLink} [twitter]
 * @property {PinterestLink} [pinterest]
 * @property {GooglePlusLink} [google_plus]
 * @property {YoutubeLink} [youtube]
 * @property {LinkedInLink} [linked_in]
 * @property {VimeoLink} [vimeo]
 * @property {BlogLink} [blog_link]
 */

/**
 * @typedef FacebookLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef InstagramLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef TwitterLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef PinterestLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef GooglePlusLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef YoutubeLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef LinkedInLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef VimeoLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef BlogLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef Links
 * @property {string} [title]
 * @property {string} [link]
 */

/**
 * @typedef BusinessHighlights
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [sub_title]
 */

/**
 * @typedef ApplicationDetail
 * @property {string} name
 * @property {string} description
 * @property {SecureUrl} logo
 * @property {SecureUrl} mobile_logo
 * @property {SecureUrl} favicon
 * @property {SecureUrl} banner
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {string} [_id]
 */

/**
 * @typedef CurrenciesResponse
 * @property {Currency[]} [items]
 */

/**
 * @typedef AppCurrencyResponse
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 */

/**
 * @typedef StoreLatLong
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */

/**
 * @typedef OptedStoreAddress
 * @property {string} [state]
 * @property {string} [address1]
 * @property {StoreLatLong} [lat_long]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [city]
 */

/**
 * @typedef OrderingStore
 * @property {OptedStoreAddress} [address]
 * @property {string} [_id]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [pincode]
 * @property {string} [code]
 */

/**
 * @typedef OrderingStores
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {number} [__v]
 */

/**
 * @typedef OrderingStoresResponse
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef Identifier
 * @property {number[]} [company_id]
 * @property {number[]} [brand_id]
 * @property {number[]} [item_id]
 * @property {number[]} [exclude_brand_id]
 * @property {number[]} [store_id]
 * @property {number[]} [category_id]
 * @property {string[]} [user_id]
 * @property {string[]} [article_id]
 * @property {string[]} [collection_id]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [types]
 * @property {string[]} [networks]
 * @property {string[]} [codes]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [app]
 * @property {number} [total]
 * @property {number} [user]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [remaining]
 * @property {UsesRemaining} [maximum]
 */

/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef Restrictions
 * @property {boolean} [coupon_allowed]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {string[]} [platforms]
 * @property {number[]} [user_groups]
 * @property {PostOrder} [post_order]
 * @property {number[]} [ordering_stores]
 * @property {Object} [payments]
 * @property {UsesRestriction} [uses]
 * @property {PriceRange} [price_range]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef RuleDefinition
 * @property {boolean} [is_exact]
 * @property {string} [currency_code]
 * @property {string} type
 * @property {string} calculate_on
 * @property {string[]} [scope]
 * @property {boolean} [auto_apply]
 * @property {string} value_type
 * @property {string} applicable_on
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef State
 * @property {boolean} [is_public]
 * @property {boolean} [is_display]
 * @property {boolean} [is_archived]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [description]
 * @property {string} [title]
 * @property {DisplayMetaDict} [remove]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */

/**
 * @typedef Rule
 * @property {number} [key]
 * @property {number} [discount_qty]
 * @property {number} [min]
 * @property {number} [max]
 * @property {number} [value]
 */

/**
 * @typedef CouponAdd
 * @property {Validation} [validation]
 * @property {Identifier} identifiers
 * @property {Restrictions} [restrictions]
 * @property {CouponAuthor} [author]
 * @property {RuleDefinition} rule_definition
 * @property {Ownership} ownership
 * @property {State} [state]
 * @property {Validity} validity
 * @property {DisplayMeta} display_meta
 * @property {string[]} [tags]
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponSchedule} [_schedule]
 * @property {string} type_slug
 * @property {CouponAction} [action]
 * @property {Rule[]} rule
 * @property {string} code
 */

/**
 * @typedef CouponsResponse
 * @property {Page} [page]
 * @property {CouponAdd} [items]
 */

/**
 * @typedef SuccessMessage
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef OperationErrorResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef CouponUpdate
 * @property {Validation} [validation]
 * @property {Identifier} identifiers
 * @property {Restrictions} [restrictions]
 * @property {CouponAuthor} [author]
 * @property {RuleDefinition} rule_definition
 * @property {Ownership} ownership
 * @property {State} [state]
 * @property {Validity} validity
 * @property {DisplayMeta} display_meta
 * @property {string[]} [tags]
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponSchedule} [_schedule]
 * @property {string} type_slug
 * @property {CouponAction} [action]
 * @property {Rule[]} rule
 * @property {string} code
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef CompareObject
 * @property {number} [greater_than_equals]
 * @property {number} [greater_than]
 * @property {number} [less_than_equals]
 * @property {number} [equals]
 * @property {number} [less_than]
 */

/**
 * @typedef ItemCriteria
 * @property {string[]} [item_sku]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_category]
 * @property {string[]} [buy_rules]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_exclude_company]
 * @property {boolean} [all_items]
 * @property {number[]} [item_category]
 * @property {CompareObject} [cart_total]
 * @property {string[]} [item_size]
 * @property {number[]} [item_company]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_store]
 * @property {string[]} [item_exclude_sku]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */

/**
 * @typedef DiscountOffer
 * @property {number} [max_offer_quantity]
 * @property {number} [discount_amount]
 * @property {number} [max_discount_amount]
 * @property {number} [discount_price]
 * @property {number} [discount_percentage]
 * @property {number} [min_offer_quantity]
 * @property {string} [code]
 */

/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {DiscountOffer} offer
 * @property {ItemCriteria} item_criteria
 * @property {string} discount_type
 */

/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */

/**
 * @typedef UserRegistered
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */

/**
 * @typedef PromotionPaymentModes
 * @property {PaymentAllowValue1} [uses]
 * @property {string} type
 * @property {string[]} [codes]
 */

/**
 * @typedef UsesRemaining1
 * @property {number} [total]
 * @property {number} [user]
 */

/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [remaining]
 * @property {UsesRemaining1} [maximum]
 */

/**
 * @typedef Restrictions1
 * @property {UserRegistered} [user_registered]
 * @property {string[]} [platforms]
 * @property {number[]} [user_groups]
 * @property {PostOrder1} [post_order]
 * @property {boolean} [anonymous_users]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {number} [order_quantity]
 * @property {string[]} [user_id]
 * @property {UsesRestriction1} uses
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [name]
 * @property {string} [offer_text]
 * @property {string} [description]
 */

/**
 * @typedef PromotionSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 * @property {string} start
 * @property {string} [end]
 * @property {boolean} published
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef PromotionListItem
 * @property {PromotionAuthor} [author]
 * @property {Object} buy_rules
 * @property {string} promotion_type
 * @property {Ownership1} ownership
 * @property {string} [currency]
 * @property {PromotionAction} [post_order_action]
 * @property {boolean} [stackable]
 * @property {DiscountRule[]} discount_rules
 * @property {string} [code]
 * @property {Visibility} [visiblility]
 * @property {string} [apply_exclusive]
 * @property {Object} [_custom_json]
 * @property {Restrictions1} [restrictions]
 * @property {string} application_id
 * @property {DisplayMeta1} display_meta
 * @property {string} promo_group
 * @property {number} [apply_priority]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} mode
 * @property {boolean} [apply_all_discount]
 * @property {PromotionDateMeta} [date_meta]
 */

/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */

/**
 * @typedef PromotionAdd
 * @property {PromotionAuthor} [author]
 * @property {Object} buy_rules
 * @property {string} promotion_type
 * @property {Ownership1} ownership
 * @property {string} [currency]
 * @property {PromotionAction} [post_order_action]
 * @property {boolean} [stackable]
 * @property {DiscountRule[]} discount_rules
 * @property {string} [code]
 * @property {Visibility} [visiblility]
 * @property {string} [apply_exclusive]
 * @property {Object} [_custom_json]
 * @property {Restrictions1} [restrictions]
 * @property {string} application_id
 * @property {DisplayMeta1} display_meta
 * @property {string} promo_group
 * @property {number} [apply_priority]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} mode
 * @property {boolean} [apply_all_discount]
 * @property {PromotionDateMeta} [date_meta]
 */

/**
 * @typedef PromotionUpdate
 * @property {PromotionAuthor} [author]
 * @property {Object} buy_rules
 * @property {string} promotion_type
 * @property {Ownership1} ownership
 * @property {string} [currency]
 * @property {PromotionAction} [post_order_action]
 * @property {boolean} [stackable]
 * @property {DiscountRule[]} discount_rules
 * @property {string} [code]
 * @property {Visibility} [visiblility]
 * @property {string} [apply_exclusive]
 * @property {Object} [_custom_json]
 * @property {Restrictions1} [restrictions]
 * @property {string} application_id
 * @property {DisplayMeta1} display_meta
 * @property {string} promo_group
 * @property {number} [apply_priority]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} mode
 * @property {boolean} [apply_all_discount]
 * @property {PromotionDateMeta} [date_meta]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef CartItem
 * @property {string} product_id
 * @property {number} [quantity]
 * @property {string} size
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef BasePrice
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [effective]
 * @property {number} [marked]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ProductArticle
 * @property {Object} [_custom_json]
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [extra_meta]
 * @property {string} [type]
 * @property {BaseInfo} [seller]
 * @property {number} [quantity]
 * @property {string} [size]
 * @property {string} [uid]
 * @property {Object} [parent_item_identifiers]
 * @property {BaseInfo} [store]
 * @property {string[]} [product_group_tags]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef Ownership2
 * @property {string} [payable_by]
 * @property {string} [payable_category]
 */

/**
 * @typedef AppliedPromotion
 * @property {boolean} [mrp_promotion]
 * @property {string} [promotion_type]
 * @property {string} [offer_text]
 * @property {Ownership2} [ownership]
 * @property {number} [amount]
 * @property {string} [promo_id]
 * @property {number} [article_quantity]
 */

/**
 * @typedef ProductPrice
 * @property {number} [add_on]
 * @property {string} [currency_code]
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {number} [selling]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
 */

/**
 * @typedef ProductImage
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */

/**
 * @typedef ProductAction
 * @property {ActionQuery} [query]
 * @property {string} [url]
 * @property {string} [type]
 */

/**
 * @typedef CartProduct
 * @property {ProductImage[]} [images]
 * @property {CategoryInfo[]} [categories]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {ProductAction} [action]
 * @property {BaseInfo} [brand]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [out_of_stock]
 * @property {string[]} [sizes]
 * @property {number} [other_store_quantity]
 * @property {boolean} [deliverable]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef CartProductInfo
 * @property {ProductArticle} [article]
 * @property {string} [key]
 * @property {CartProductIdentifer} identifiers
 * @property {PromoMeta} [promo_meta]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {ProductPriceInfo} [price]
 * @property {Object} [bulk_offer]
 * @property {string} [message]
 * @property {CartProduct} [product]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {boolean} [is_set]
 * @property {number} [quantity]
 * @property {string} [discount]
 * @property {ProductAvailability} [availability]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [coupon_message]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [key]
 * @property {string} [currency_code]
 * @property {string} [display]
 * @property {string[]} [message]
 * @property {string} [currency_symbol]
 * @property {number} [value]
 */

/**
 * @typedef RawBreakup
 * @property {number} [gst_charges]
 * @property {number} [you_saved]
 * @property {number} [mrp_total]
 * @property {number} [delivery_charge]
 * @property {number} [cod_charge]
 * @property {number} [vog]
 * @property {number} [total]
 * @property {number} [coupon]
 * @property {number} [convenience_fee]
 * @property {number} [discount]
 * @property {number} [fynd_cash]
 * @property {number} [subtotal]
 */

/**
 * @typedef CouponBreakup
 * @property {boolean} [is_applied]
 * @property {string} [type]
 * @property {string} [message]
 * @property {string} [uid]
 * @property {number} [value]
 * @property {string} [code]
 */

/**
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 * @property {number} [total]
 * @property {string} [description]
 */

/**
 * @typedef CartBreakup
 * @property {DisplayBreakup[]} [display]
 * @property {RawBreakup} [raw]
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {boolean} [success]
 */

/**
 * @typedef ShippingAddress
 * @property {string} [email]
 * @property {string} [city]
 * @property {string} [area]
 * @property {string} [name]
 * @property {string} [state]
 * @property {string} [country]
 * @property {number} [phone]
 * @property {string} [address]
 * @property {number} [pincode]
 * @property {string} [country_code]
 * @property {string} [area_code_slug]
 * @property {string} [address_type]
 * @property {string} area_code
 * @property {string} [landmark]
 * @property {Object} [meta]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem} [cart_items]
 * @property {ShippingAddress} shipping_address
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [max]
 * @property {string} [min]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseFormatted} [formatted]
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_id]
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 * @property {string} [payment_gateway]
 * @property {string} [current_status]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} mode
 * @property {string} [name]
 * @property {number} amount
 * @property {MultiTenderPaymentMeta} [meta]
 */

/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */

/**
 * @typedef OpenApiOrderItem
 * @property {number} delivery_charges
 * @property {number} product_id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cod_charges
 * @property {number} cashback_applied
 * @property {Object} [extra_meta]
 * @property {number} [employee_discount]
 * @property {number} price_marked
 * @property {number} [loyalty_discount]
 * @property {number} amount_paid
 * @property {number} [quantity]
 * @property {number} coupon_effective_discount
 * @property {string} size
 * @property {number} discount
 * @property {number} price_effective
 * @property {OpenApiFiles[]} [files]
 * @property {CartItemMeta} [meta]
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [affiliate_order_id]
 * @property {number} delivery_charges
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} [gstin]
 * @property {string} [currency_code]
 * @property {Object} [employee_discount]
 * @property {OpenApiOrderItem[]} cart_items
 * @property {string} [order_id]
 * @property {number} [loyalty_discount]
 * @property {string} coupon_code
 * @property {string} [coupon]
 * @property {ShippingAddress} [shipping_address]
 * @property {number} cart_value
 * @property {ShippingAddress} billing_address
 * @property {number} cod_charges
 * @property {number} cashback_applied
 * @property {number} coupon_value
 * @property {string} [comment]
 * @property {OpenApiFiles[]} [files]
 * @property {string} [payment_mode]
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} [message]
 * @property {string} order_id
 * @property {boolean} [success]
 * @property {string} [order_ref_id]
 */

/**
 * @typedef AbandonedCart
 * @property {boolean} is_default
 * @property {Object} [delivery_charges]
 * @property {boolean} [is_active]
 * @property {Object[]} [payment_methods]
 * @property {string} [app_id]
 * @property {string} [gstin]
 * @property {number[]} [fc_index_map]
 * @property {string} created_on
 * @property {string} [order_id]
 * @property {Object} [promotion]
 * @property {number} uid
 * @property {boolean} [merge_qty]
 * @property {string} [comment]
 * @property {number} [bulk_coupon_discount]
 * @property {Object} [payments]
 * @property {string} _id
 * @property {Object} [meta]
 * @property {boolean} [is_archive]
 * @property {string} expire_at
 * @property {string} [checkout_mode]
 * @property {Object} cashback
 * @property {boolean} [buy_now]
 * @property {string} user_id
 * @property {Object} [coupon]
 * @property {Object} [fynd_credits]
 * @property {number} [cart_value]
 * @property {Object} [pick_up_customer_details]
 * @property {Object} [cod_charges]
 * @property {Object[]} [shipments]
 * @property {Object[]} articles
 * @property {number} [discount]
 * @property {string} last_modified
 * @property {string} [payment_mode]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {boolean} [success]
 * @property {Page} [page]
 * @property {AbandonedCart[]} [items]
 * @property {string} [message]
 * @property {Object} [result]
 */

/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef CartCurrency
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef CartDetailResponse
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [restrict_checkout]
 * @property {string} [gstin]
 * @property {CartCurrency} [currency]
 * @property {boolean} [buy_now]
 * @property {string} [delivery_charge_info]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [comment]
 * @property {string} [last_modified]
 * @property {boolean} [is_valid]
 * @property {string} [id]
 */

/**
 * @typedef AddProductCart
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 * @property {number} [seller_id]
 * @property {number} [store_id]
 * @property {string} [display]
 * @property {Object} [article_assignment]
 * @property {string} [article_id]
 * @property {boolean} [pos]
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {Object} [_custom_json]
 * @property {Object} [parent_item_identifiers]
 * @property {string[]} [product_group_tags]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {string} [message]
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [success]
 * @property {boolean} [partial]
 */

/**
 * @typedef UpdateProductCart
 * @property {CartProductIdentifer} identifiers
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 * @property {number} [item_index]
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {string} [article_id]
 * @property {Object} [_custom_json]
 * @property {Object} [parent_item_identifiers]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {string} [message]
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [success]
 */

/**
 * @typedef E
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 */

/**
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Giveaway
 * @property {string} [_id]
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {RewardsAudience} [audience]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {RewardsRule} [rule]
 * @property {string} [title]
 * @property {string} [updated_at]
 */

/**
 * @typedef Schedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 * @property {string} [cron]
 */

/**
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */

/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */

/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef Offer
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {Object} [rule]
 * @property {ShareMessages} [share]
 * @property {string} [sub_text]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [url]
 */

/**
 * @typedef ShareMessages
 * @property {number} [email]
 * @property {string} [facebook]
 * @property {string} [fallback]
 * @property {string} [message]
 * @property {string} [messenger]
 * @property {string} [sms]
 * @property {string} [text]
 * @property {string} [twitter]
 * @property {string} [whatsapp]
 */

/**
 * @typedef UserRes
 * @property {Points} [points]
 * @property {RewardUser} [user]
 */

/**
 * @typedef Points
 * @property {number} [available]
 */

/**
 * @typedef RewardUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Referral} [referral]
 * @property {number} [uid]
 * @property {string} [updated_at]
 * @property {string} [user_block_reason]
 * @property {string} [user_id]
 */

/**
 * @typedef Referral
 * @property {string} [code]
 */

/**
 * @typedef AppUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [block_reason]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [user_id]
 */

/**
 * @typedef GiveawayAudience
 * @property {string} [audience_id]
 * @property {number} [current_count]
 */

/**
 * @typedef HistoryRes
 * @property {PointsHistory[]} [items]
 * @property {Page} [page]
 * @property {number} [points]
 */

/**
 * @typedef PointsHistory
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
 * @property {Object} [meta]
 * @property {number} [points]
 * @property {number} [remaining_points]
 * @property {string} [text_1]
 * @property {string} [text_2]
 * @property {string} [text_3]
 * @property {string} [txn_name]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */

/**
 * @typedef ConfigurationRes
 * @property {string[]} [valid_android_packages]
 * @property {string} [terms_conditions_link]
 * @property {string} [application_id]
 * @property {boolean} [success]
 */

/**
 * @typedef SetConfigurationRes
 * @property {boolean} [success]
 */

/**
 * @typedef ConfigurationRequest
 * @property {string[]} [valid_android_packages]
 * @property {string} [terms_conditions_link]
 */

/**
 * @typedef StatGroup
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 */

/**
 * @typedef ErrorRes
 * @property {string} [message]
 */

/**
 * @typedef StatsGroups
 * @property {StatGroup[]} [groups]
 */

/**
 * @typedef StatsGroupComponent
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [filters]
 */

/**
 * @typedef StatsGroupComponents
 * @property {string} [title]
 * @property {StatsGroupComponent[]} [components]
 */

/**
 * @typedef StatsRes
 * @property {string} [key]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [data]
 */

/**
 * @typedef ReceivedAt
 * @property {string} [value]
 */

/**
 * @typedef AbandonCartsDetail
 * @property {string} [properties_cart_id]
 * @property {string} [context_traits_first_name]
 * @property {string} [context_traits_last_name]
 * @property {string} [context_traits_phone_number]
 * @property {string} [context_traits_email]
 * @property {string} [context_app_application_id]
 * @property {string} [properties_breakup_values_raw_total]
 * @property {ReceivedAt} [received_at]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef AbandonCartsList
 * @property {AbandonCartsDetail[]} [items]
 * @property {string} [cart_total]
 * @property {Page} [page]
 */

/**
 * @typedef AbandonCartDetail
 * @property {string} [_id]
 * @property {string} [user_id]
 * @property {string} [cart_value]
 * @property {Object[]} [articles]
 * @property {Object} [breakup]
 * @property {Object} [address]
 */

/**
 * @typedef ExportJobReq
 * @property {string} [marketplace_name]
 * @property {string} [start_time]
 * @property {string} [end_time]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 */

/**
 * @typedef ExportJobRes
 * @property {string} [status]
 * @property {string} [job_id]
 */

/**
 * @typedef ExportJobStatusRes
 * @property {string} [status]
 * @property {string} [job_id]
 * @property {string} [download_url]
 */

/**
 * @typedef GetLogsListReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 */

/**
 * @typedef MkpLogsResp
 * @property {string} [start_time_iso]
 * @property {string} [end_time_iso]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 * @property {string} [count]
 * @property {string} [status]
 */

/**
 * @typedef GetLogsListRes
 * @property {MkpLogsResp[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SearchLogReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {string} [identifier]
 * @property {string} [identifier_value]
 */

/**
 * @typedef LogInfo
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [event_type]
 * @property {string} [marketplace_name]
 * @property {string} [event]
 * @property {string} [trace_id]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {string} [seller_identifier]
 */

/**
 * @typedef SearchLogRes
 * @property {LogInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ValidityObject
 * @property {string} start
 * @property {string} end
 */

/**
 * @typedef CreateUpdateDiscount
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} app_ids
 * @property {string[]} extension_ids
 * @property {string} job_type
 * @property {string} discount_type
 * @property {string} discount_level
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 */

/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} [app_ids]
 * @property {string} [job_type]
 * @property {string} [discount_type]
 * @property {string} [discount_level]
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {string} created_on
 * @property {string} modified_on
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta]
 */

/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */

/**
 * @typedef DiscountItems
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {string} [seller_identifier]
 * @property {string} discount_type
 * @property {number} value
 */

/**
 * @typedef BulkDiscount
 * @property {number} company_id
 * @property {DiscountItems[]} items
 */

/**
 * @typedef FileJobResponse
 * @property {string} stage
 * @property {number} total
 * @property {number} failed
 * @property {number} company_id
 * @property {Object} [body]
 * @property {string} type
 * @property {string} file_type
 */

/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef UserDetails
 * @property {string} username
 * @property {string} user_id
 */

/**
 * @typedef BadRequestObject
 * @property {string} message
 */

/**
 * @typedef AddProxyReq
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 */

/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [extension_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {Object} [meta]
 */

/**
 * @typedef RemoveProxyResponse
 * @property {string} [message]
 * @property {Object} [data]
 */

/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 */

/**
 * @typedef EventConfigList
 * @property {EventConfig[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef EventProcessedStatus
 * @property {number} [id]
 * @property {string} [subscriber_id]
 * @property {number} [attempt]
 * @property {string} [response_code]
 * @property {string} [response_message]
 * @property {string} [created_on]
 * @property {string} [processed_on]
 * @property {boolean} [status]
 */

/**
 * @typedef EventPayload
 * @property {number} [id]
 * @property {string} [event_trace_id]
 * @property {string} [message_id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 * @property {boolean} [status]
 */

/**
 * @typedef SubscriberConfig
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */

/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {SubscriberStatus} [status]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef SubscriberEvent
 * @property {number} [id]
 * @property {number} [subscriber_id]
 * @property {number} [event_id]
 * @property {string} [created_date]
 */

/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */

/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */

/**
 * @typedef EventConfigBase
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */

/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */

/**
 * @typedef CreateLogResponse
 * @property {string} [message]
 * @property {string} [internal_message]
 */

/**
 * @typedef LogMetaObj
 * @property {Object} [modifier]
 * @property {string} [application]
 * @property {EntityObject} [entity]
 * @property {Object} [device_info]
 * @property {Object} [location]
 */

/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 */

/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */

/**
 * @typedef LogDocs
 * @property {EntityObj} [entity]
 * @property {Modifier} [modifier]
 * @property {DeviceInfo} [device_info]
 * @property {Location} [location]
 * @property {string} [_id]
 * @property {string} [company]
 * @property {string} [application]
 * @property {string} [sessions]
 * @property {string} [date]
 * @property {Object} [logs]
 */

/**
 * @typedef EntityObj
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 * @property {Object} [entity_details]
 */

/**
 * @typedef Modifier
 * @property {string} [user_id]
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 */

/**
 * @typedef DeviceInfo
 * @property {string} [user_agent]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */

/**
 * @typedef BadRequest
 * @property {string} [message]
 */

/**
 * @typedef ResourceNotFound
 * @property {string} [message]
 */

/**
 * @typedef InternalServerError
 * @property {string} [message]
 * @property {string} [code]
 */

/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */

/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */

module.exports = PlatformClient;
