const Common = require("./client/CommonPlatformClient");

const Lead = require("./client/LeadPlatformClient");

const Billing = require("./client/BillingPlatformClient");

const Communication = require("./client/CommunicationPlatformClient");

const Payment = require("./client/PaymentPlatformClient");

const Order = require("./client/OrderPlatformClient");

const Catalog = require("./client/CatalogPlatformClient");

const CompanyProfile = require("./client/CompanyProfilePlatformClient");

const FileStorage = require("./client/FileStoragePlatformClient");

const Inventory = require("./client/InventoryPlatformClient");

const Configuration = require("./client/ConfigurationPlatformClient");

const Analytics = require("./client/AnalyticsPlatformClient");

const Discount = require("./client/DiscountPlatformClient");

const Webhook = require("./client/WebhookPlatformClient");

const AuditTrail = require("./client/AuditTrailPlatformClient");

const Orders = require("./client/OrdersPlatformClient");

const OrderManage = require("./client/OrderManagePlatformClient");

const Serviceability = require("./client/ServiceabilityPlatformClient");

const DocumentEngine = require("./client/DocumentEnginePlatformClient");
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
    this.orders = new Orders(config);
    this.orderManage = new OrderManage(config);
    this.serviceability = new Serviceability(config);
    this.documentEngine = new DocumentEngine(config);
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
 * @property {Ticket} ticket
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
 * @typedef TicketCategory
 * @property {string} key
 * @property {string} display
 * @property {CustomForm} [form]
 * @property {TicketSubCategory[]} [sub_categories]
 * @property {TicketFeedbackForm} [feedback_form]
 */

/**
 * @typedef TicketSubCategory
 * @property {string} key
 * @property {string} display
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
 * @property {boolean} [show_support_dris]
 * @property {Object} [integration]
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
 * @property {string} ticket_id
 * @property {TicketCategory} category
 * @property {TicketSubCategory} [sub_category]
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {Object} [created_by]
 * @property {Object} [assigned_to]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_feedback_pending]
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
 * @property {RedirectionSchema[]} [redirections]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef RedirectionSchema
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
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
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
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
 * @property {string} [value]
 */

/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {string} [value]
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
 */

/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpSmsCommsTemplate} [template]
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
 * @typedef PaymentGatewayConfigResponse
 * @property {Object[]} [aggregators]
 * @property {string[]} display_fields
 * @property {boolean} created
 * @property {boolean} success
 * @property {string} app_id
 * @property {string[]} excluded_fields
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} description
 * @property {boolean} success
 * @property {string} code
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} merchant_salt
 * @property {boolean} [is_active]
 * @property {string} secret
 * @property {string} key
 * @property {string} config_type
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {boolean} [is_active]
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {boolean} success
 * @property {string[]} aggregator
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} description
 * @property {string} code
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {boolean} success
 * @property {ErrorCodeAndDescription} error
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} small
 * @property {string} large
 */

/**
 * @typedef IntentApp
 * @property {string} [display_name]
 * @property {string} [code]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [package_name]
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */

/**
 * @typedef PaymentModeList
 * @property {number} [retry_count]
 * @property {string} [card_name]
 * @property {string} [card_isin]
 * @property {string} [card_brand_image]
 * @property {number} [exp_year]
 * @property {number} [timeout]
 * @property {string} [card_reference]
 * @property {string} [card_token]
 * @property {number} [display_priority]
 * @property {boolean} [intent_flow]
 * @property {string} [fynd_vpa]
 * @property {string} [card_number]
 * @property {IntentApp[]} [intent_app]
 * @property {string} aggregator_name
 * @property {string} [card_id]
 * @property {string} [card_issuer]
 * @property {number} [exp_month]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [name]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [display_name]
 * @property {string} [card_type]
 * @property {string} [card_fingerprint]
 * @property {string} [card_brand]
 * @property {string} [nickname]
 * @property {boolean} [expired]
 * @property {string} [code]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string} [merchant_code]
 */

/**
 * @typedef RootPaymentMode
 * @property {string} display_name
 * @property {PaymentModeList[]} [list]
 * @property {number} display_priority
 * @property {boolean} [anonymous_enable]
 * @property {boolean} [add_card_enabled]
 * @property {string} [aggregator_name]
 * @property {string} name
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
 * @property {Object[]} payouts_aggregators
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {Object} more_attributes
 * @property {string} transfer_type
 * @property {Object} unique_transfer_no
 * @property {Object} customers
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} account_type
 * @property {string} [city]
 * @property {string} [bank_name]
 * @property {number} [pincode]
 * @property {string} [account_holder]
 * @property {string} [country]
 * @property {string} ifsc_code
 * @property {string} [state]
 * @property {string} [account_no]
 * @property {string} [branch_name]
 */

/**
 * @typedef PayoutRequest
 * @property {boolean} is_active
 * @property {PayoutBankDetails} bank_details
 * @property {string} transfer_type
 * @property {Object} users
 * @property {string} unique_external_id
 * @property {string} aggregator
 */

/**
 * @typedef PayoutResponse
 * @property {boolean} is_active
 * @property {string} payment_status
 * @property {boolean} created
 * @property {Object} payouts
 * @property {Object} bank_details
 * @property {string} transfer_type
 * @property {boolean} success
 * @property {string} unique_transfer_no
 * @property {Object} users
 * @property {string} aggregator
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} success
 * @property {boolean} is_active
 * @property {boolean} is_default
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {string} unique_external_id
 */

/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {boolean} success
 * @property {Object[]} data
 */

/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionConfigResponse
 * @property {Object} config
 * @property {boolean} success
 * @property {string} aggregator
 */

/**
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id
 */

/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {boolean} success
 * @property {Object} data
 */

/**
 * @typedef BeneficiaryModeDetails
 * @property {string} [address]
 * @property {string} bank_name
 * @property {string} email
 * @property {string} account_holder
 * @property {string} [wallet]
 * @property {string} [vpa]
 * @property {string} ifsc_code
 * @property {string} mobile
 * @property {string} [comment]
 * @property {string} account_no
 * @property {string} branch_name
 */

/**
 * @typedef AddBeneficiaryDetailsRequest
 * @property {string} shipment_id
 * @property {string} [request_id]
 * @property {string} transfer_mode
 * @property {string} [otp]
 * @property {string} order_id
 * @property {boolean} delights
 * @property {BeneficiaryModeDetails} details
 */

/**
 * @typedef RefundAccountResponse
 * @property {string} message
 * @property {boolean} [is_verified_flag]
 * @property {boolean} success
 * @property {Object} [data]
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} description
 * @property {boolean} success
 * @property {string} code
 */

/**
 * @typedef IfscCodeResponse
 * @property {boolean} [success]
 * @property {string} branch_name
 * @property {string} bank_name
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} address
 * @property {string} transfer_mode
 * @property {string} modified_on
 * @property {string} [delights_user_name]
 * @property {string} subtitle
 * @property {boolean} is_active
 * @property {string} bank_name
 * @property {string} beneficiary_id
 * @property {string} email
 * @property {string} account_holder
 * @property {string} ifsc_code
 * @property {string} title
 * @property {number} id
 * @property {string} [comment]
 * @property {string} [branch_name]
 * @property {string} display_name
 * @property {string} created_on
 * @property {string} [mobile]
 * @property {string} account_no
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */

/**
 * @typedef PaymentConfirmationMode
 * @property {string} mode
 * @property {number} amount
 * @property {Object} [meta]
 * @property {string} [name]
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {PaymentConfirmationMode[]} payment_methods
 * @property {string} order_id
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} message
 * @property {boolean} success
 * @property {string} order_id
 */

/**
 * @typedef GetActivityStatus
 * @property {ActivityHistory} activity_history
 */

/**
 * @typedef ActivityHistory
 * @property {string} [createdat]
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [user]
 */

/**
 * @typedef CanBreakRequestBody
 * @property {string[]} shipment_ids
 */

/**
 * @typedef CanBreakResponse
 * @property {boolean} status
 * @property {Object} valid_actions
 */

/**
 * @typedef FailedOrders
 * @property {FailOrder} orders
 */

/**
 * @typedef FailOrder
 * @property {string} [updated_at]
 * @property {string} [_id]
 * @property {string} [reason]
 * @property {MarketplaceOrder} [marketplace_order]
 * @property {string} [marketplace_order_id]
 * @property {string} [created_at]
 * @property {string} [app_id]
 * @property {string} [marketplace]
 * @property {number} [company_id]
 */

/**
 * @typedef MarketplaceOrder
 * @property {string} [order_status_url]
 * @property {string} [admin_graphql_api_id]
 * @property {string} [email]
 * @property {boolean} [test]
 * @property {string} [note]
 * @property {string} [total_price]
 * @property {number} [app_id]
 * @property {TotalDiscountsSet} [total_discounts_set]
 * @property {TotalPriceSet} [total_price_set]
 * @property {TotalTaxSet} [total_tax_set]
 * @property {string} [gateway]
 * @property {string} [name]
 * @property {SubtotalPriceSet} [subtotal_price_set]
 * @property {number} [number]
 * @property {boolean} [buyer_accepts_marketing]
 * @property {string} [contact_email]
 * @property {string} [token]
 * @property {string} [source_name]
 * @property {Object[]} [payment_gateway_names]
 * @property {string} [presentment_currency]
 * @property {string} [subtotal_price]
 * @property {string} [processed_at]
 * @property {number} [order_number]
 * @property {string} [total_tip_received]
 * @property {number} [id]
 * @property {boolean} [confirmed]
 * @property {string} [currency]
 * @property {string} [total_line_items_price]
 * @property {LineItems} [line_items]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [total_weight]
 * @property {BillingAddress} [billing_address]
 * @property {TotalShippingPriceSet} [total_shipping_price_set]
 * @property {Customer} [customer]
 * @property {string} [total_discounts]
 * @property {TotalLineItemsPriceSet} [total_line_items_price_set]
 * @property {string} [tags]
 * @property {string} [total_price_usd]
 * @property {number} [user_id]
 * @property {string} [total_tax]
 * @property {string} [processing_method]
 * @property {OrderShippingAddress} [shipping_address]
 * @property {boolean} [taxes_included]
 * @property {string} [financial_status]
 */

/**
 * @typedef TotalDiscountsSet
 * @property {PresentmentMoney} [presentment_money]
 * @property {ShopMoney} [shop_money]
 */

/**
 * @typedef PresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef ShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef TotalPriceSet
 * @property {TotalPriceSetShopMoney} [shop_money]
 * @property {TotalPriceSetPresentmentMoney} [presentment_money]
 */

/**
 * @typedef TotalPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef TotalPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef TotalTaxSet
 * @property {TotalTaxSetShopMoney} [shop_money]
 * @property {TotalTaxSetPresentmentMoney} [presentment_money]
 */

/**
 * @typedef TotalTaxSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef TotalTaxSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef SubtotalPriceSet
 * @property {SubtotalPriceSetShopMoney} [shop_money]
 * @property {SubtotalPriceSetPresentmentMoney} [presentment_money]
 */

/**
 * @typedef SubtotalPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef SubtotalPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef LineItems
 * @property {string} [sku]
 * @property {number} [fulfillable_quantity]
 * @property {number} [grams]
 * @property {string} [total_discount]
 * @property {LineItemsArticle} [article]
 * @property {string} [title]
 * @property {string} [variant_inventory_management]
 * @property {number} [id]
 * @property {number} [variant_id]
 * @property {string} [variant_title]
 * @property {boolean} [product_exists]
 * @property {string} [price]
 * @property {string} [admin_graphql_api_id]
 * @property {number} [quantity]
 * @property {string} [vendor]
 * @property {string} [fulfillment_service]
 * @property {boolean} [taxable]
 * @property {string} [name]
 * @property {number} [product_id]
 * @property {PriceSet} [price_set]
 * @property {TaxLines} [tax_lines]
 * @property {boolean} [requires_shipping]
 * @property {boolean} [gift_card]
 * @property {TotalDiscountSet} [total_discount_set]
 */

/**
 * @typedef LineItemsArticle
 * @property {Quantities} [quantities]
 * @property {string} [old_article_uid]
 * @property {number} [total_quantity]
 * @property {Manufacturer} [manufacturer]
 * @property {ArticlePrice} [price]
 * @property {boolean} [track_inventory]
 * @property {Company} [company]
 * @property {boolean} [is_active]
 * @property {FailOrderDateMeta} [date_meta]
 * @property {boolean} [fragile]
 * @property {MarketplaceIdentifiers} [marketplace_identifiers]
 * @property {string} [size]
 * @property {boolean} [is_set]
 * @property {Dimension} [dimension]
 * @property {Weight} [weight]
 * @property {Store} [store]
 * @property {ArticleMeta} [meta]
 * @property {string} [uid]
 * @property {ArticleBrand} [brand]
 * @property {number} [item_id]
 * @property {string} [fynd_article_code]
 * @property {string} [_id]
 * @property {LineItemsArticleIdentifier} [identifier]
 * @property {string} [seller_identifier]
 * @property {string} [fynd_item_code]
 * @property {string} [country_of_origin]
 */

/**
 * @typedef Quantities
 * @property {NotAvailable} [not_available]
 * @property {Sellable} [sellable]
 * @property {OrderCommitted} [order_committed]
 * @property {Damaged} [damaged]
 */

/**
 * @typedef NotAvailable
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef Sellable
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef OrderCommitted
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef Damaged
 * @property {string} [updated_at]
 * @property {number} [count]
 */

/**
 * @typedef Manufacturer
 * @property {boolean} [is_default]
 * @property {string} [address]
 * @property {string} [name]
 */

/**
 * @typedef ArticlePrice
 * @property {number} [marked]
 * @property {string} [currency]
 * @property {number} [effective]
 * @property {number} [transfer]
 */

/**
 * @typedef Company
 * @property {number} [id]
 * @property {string} [company_type]
 * @property {string} [business_type]
 * @property {string} [company_name]
 * @property {string} [created_on]
 * @property {string} [pan_no]
 * @property {boolean} [return_allowed]
 * @property {string} [meta]
 * @property {boolean} [exchange_allowed]
 * @property {string} [agreement_start_date]
 * @property {number} [exchange_within_days]
 * @property {number} [payment_procesing_charge]
 * @property {boolean} [fynd_a_fit_available]
 * @property {string} [modified_on]
 * @property {number} [return_within_days]
 */

/**
 * @typedef FailOrderDateMeta
 * @property {string} [added_on_store]
 * @property {string} [inventory_updated_on]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef MarketplaceIdentifiers
 * @property {TatacliqLuxury} [tatacliq_luxury]
 */

/**
 * @typedef TatacliqLuxury
 * @property {string} [sku]
 */

/**
 * @typedef Dimension
 * @property {number} [height]
 * @property {number} [width]
 * @property {string} [unit]
 * @property {number} [length]
 * @property {boolean} [is_default]
 */

/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {string} [unit]
 * @property {number} [shipping]
 */

/**
 * @typedef Store
 * @property {number} [id]
 */

/**
 * @typedef ArticleMeta
 * @property {string} [service]
 */

/**
 * @typedef ArticleBrand
 * @property {string} [name]
 * @property {number} [id]
 */

/**
 * @typedef LineItemsArticleIdentifier
 * @property {string} [sku_code]
 */

/**
 * @typedef PriceSet
 * @property {PriceSetShopMoney} [shop_money]
 * @property {PriceSetPresentmentMoney} [presentment_money]
 */

/**
 * @typedef PriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef PriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef TaxLines
 * @property {string} [title]
 * @property {string} [price]
 * @property {number} [rate]
 * @property {TaxLinesPriceSet} [price_set]
 */

/**
 * @typedef TaxLinesPriceSet
 * @property {TaxLinesPriceSetShopMoney} [shop_money]
 * @property {TaxLinesPriceSetPresentmentMoney} [presentment_money]
 */

/**
 * @typedef TaxLinesPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef TaxLinesPriceSetPresentmentMoney
 * @property {string} [currency_code]
 * @property {string} [amount]
 */

/**
 * @typedef TotalDiscountSet
 * @property {TotalDiscountSetPresentmentMoney} [presentment_money]
 * @property {TotalDiscountSetShopMoney} [shop_money]
 */

/**
 * @typedef TotalDiscountSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef TotalDiscountSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef BillingAddress
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [zip]
 * @property {string} [last_name]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [province_code]
 * @property {string} [phone]
 * @property {string} [company]
 * @property {string} [name]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [first_name]
 * @property {string} [province]
 */

/**
 * @typedef TotalShippingPriceSet
 * @property {TotalShippingPriceSetShopMoney} [shop_money]
 * @property {TotalShippingPriceSetPresentmentMoney} [presentment_money]
 */

/**
 * @typedef TotalShippingPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef TotalShippingPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef Customer
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {string} [last_name]
 * @property {string} [state]
 * @property {number} [last_order_id]
 * @property {string} [note]
 * @property {boolean} [verified_email]
 * @property {string} [phone]
 * @property {boolean} [accepts_marketing]
 * @property {string} [first_name]
 * @property {string} [tags]
 * @property {string} [last_order_name]
 * @property {number} [orders_count]
 * @property {string} [total_spent]
 * @property {boolean} [tax_exempt]
 * @property {string} [currency]
 * @property {string} [accepts_marketing_updated_at]
 * @property {string} [email]
 * @property {string} [updated_at]
 * @property {string} [admin_graphql_api_id]
 * @property {DefaultAddress} [default_address]
 */

/**
 * @typedef DefaultAddress
 * @property {string} [last_name]
 * @property {string} [name]
 * @property {string} [province_code]
 * @property {string} [country_code]
 * @property {boolean} [is_default]
 * @property {number} [id]
 * @property {number} [customer_id]
 * @property {string} [first_name]
 * @property {string} [address1]
 * @property {string} [phone]
 * @property {string} [country_name]
 * @property {string} [company]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [province]
 * @property {string} [country]
 * @property {string} [zip]
 */

/**
 * @typedef TotalLineItemsPriceSet
 * @property {TotalLineItemsPriceSetShopMoney} [shop_money]
 * @property {TotalLineItemsPriceSetPresentmentMoney} [presentment_money]
 */

/**
 * @typedef TotalLineItemsPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef TotalLineItemsPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */

/**
 * @typedef OrderShippingAddress
 * @property {string} [address1]
 * @property {string} [zip]
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {string} [country]
 * @property {string} [last_name]
 * @property {string} [province_code]
 * @property {string} [first_name]
 * @property {string} [phone]
 * @property {string} [province]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [city]
 * @property {string} [company]
 * @property {string} [name]
 */

/**
 * @typedef OrderListing
 * @property {OrderItems[]} items
 * @property {Filters} filters
 * @property {Object} next_order_status
 * @property {PlatformOrderPage} page
 * @property {AppliedFilters} applied_filters
 */

/**
 * @typedef OrderItems
 * @property {PlatformOrderUserInfo} [user]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {Channel} [channel]
 * @property {string} [id]
 * @property {PlatformApplication} [application]
 * @property {PlatformShipment} [shipments]
 * @property {string} [created_at]
 * @property {number} [total_shipments_in_order]
 */

/**
 * @typedef PlatformOrderUserInfo
 * @property {string} [mobile]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [last_name]
 * @property {boolean} [is_anonymous_user]
 * @property {number} [uid]
 * @property {string} [avis_user_id]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [area]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [version]
 * @property {string} [address1]
 * @property {string} [updated_at]
 * @property {string} [city]
 * @property {string} [landmark]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {string} [address]
 * @property {string} [phone]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [address_type]
 * @property {string} [email]
 * @property {string} [pincode]
 * @property {string} [address2]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 */

/**
 * @typedef Channel
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef PlatformApplication
 * @property {string} [id]
 */

/**
 * @typedef PlatformShipment
 * @property {PlatformShipmentStatus} [status]
 * @property {Bags} [bags]
 * @property {ShipmentPrices} [prices]
 * @property {string} [id]
 * @property {ShipmentGst} [gst]
 * @property {number} [priority]
 * @property {string} [priority_text]
 * @property {boolean} [lock_status]
 * @property {string} [ordering_channel]
 * @property {number} [total_shipment_bags]
 */

/**
 * @typedef PlatformShipmentStatus
 * @property {number} [id]
 * @property {number[]} [bag_list]
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [name]
 * @property {number} [progress]
 * @property {string} [shipment_id]
 * @property {string} [current_shipment_status]
 * @property {string} [color_code]
 */

/**
 * @typedef Bags
 * @property {BagItem} [item]
 * @property {number} [id]
 */

/**
 * @typedef BagItem
 * @property {number} [id]
 * @property {string} [size]
 * @property {string} [slug_key]
 * @property {boolean} [can_return]
 * @property {number} [brand_id]
 * @property {string[]} [l2_category]
 * @property {string} [name]
 * @property {string} [code]
 * @property {boolean} [can_cancel]
 * @property {BagItemAttributes} [attributes]
 * @property {string} [l3_category_name]
 * @property {number} [l3_category]
 * @property {string[]} [l1_category]
 * @property {string[]} [image]
 * @property {string} [brand]
 * @property {string} [last_updated_at]
 * @property {number} [quantity]
 */

/**
 * @typedef BagItemAttributes
 * @property {string} [item_code]
 * @property {string} [brand_name]
 * @property {string} [country_of_origin]
 */

/**
 * @typedef ShipmentPrices
 * @property {number} [refund_amount]
 * @property {number} [cashback_applied]
 * @property {number} [transfer_price]
 * @property {number} [coupon_value]
 * @property {number} [amount_paid]
 * @property {number} [delivery_charge]
 * @property {number} [coupon_effective_discount]
 * @property {number} [cod_charges]
 * @property {number} [refund_credit]
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [gst_tax_percentage]
 * @property {number} [price_marked]
 * @property {number} [price_effective]
 * @property {number} [discount]
 * @property {number} [promotion_effective_discount]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [fynd_credits]
 * @property {number} [brand_calculated_amount]
 * @property {number} [cashback]
 * @property {number} [value_of_good]
 */

/**
 * @typedef Payments
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [logo]
 * @property {string} [source]
 * @property {string} [source_nickname]
 * @property {number} [display_priority]
 * @property {number} [id]
 * @property {string} [mode]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef Filters
 * @property {Stage} [stage]
 * @property {Stages} [stages]
 */

/**
 * @typedef Stage
 * @property {string} [text]
 * @property {string} [value]
 * @property {boolean} [is_default]
 * @property {StagesFilters} [filters]
 */

/**
 * @typedef StagesFilters
 * @property {string} [text]
 * @property {string} [value]
 * @property {string} [type]
 * @property {Options} [options]
 */

/**
 * @typedef Options
 * @property {string} [text]
 * @property {string} [value]
 */

/**
 * @typedef PlatformOrderPage
 * @property {string} [next]
 * @property {string} [previous]
 * @property {string} [type]
 * @property {number} [size]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [total]
 * @property {ItemTotal} [item_total]
 */

/**
 * @typedef AppliedFilters
 * @property {string} [stage]
 * @property {string[]} [stores]
 * @property {string[]} [deployment_stores]
 * @property {number[]} [dp]
 * @property {string} [from_date]
 * @property {string} [to_date]
 */

/**
 * @typedef OrderDetails
 * @property {OrderPicklistListing[]} items
 * @property {PlatformOrderPage} page
 * @property {Filters} filters
 * @property {Object} next_order_status
 * @property {AppliedFilters} applied_filters
 */

/**
 * @typedef OrderDetailsItem
 * @property {PlatformOrderUserInfo} [user]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {Channel} [channel]
 * @property {Object} [fyndstore_emp]
 * @property {Object} [ordering_store]
 * @property {PlatformBreakupValues} [breakup_values]
 * @property {string} [id]
 * @property {PlatformApplication} [application]
 * @property {PlatformShipmentDetails} [shipments]
 * @property {string} [created_at]
 * @property {number} [total_shipments_in_order]
 * @property {ItemsPayments} [payments]
 * @property {Object} [payment_methods]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [display]
 * @property {number} [value]
 * @property {string} [name]
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef PlatformShipmentDetails
 * @property {PlatformShipmentDetailsStatus} [status]
 * @property {BagsDetails} [bags]
 * @property {ShipmentPrices} [prices]
 * @property {ShipmentBreakupValues} [breakup_values]
 * @property {string} [id]
 * @property {DpDetails} [dp_details]
 * @property {Object} [payment_methods]
 * @property {ShipmentInvoice} [invoice]
 * @property {PlatformFulfillingStore} [fulfilling_store]
 * @property {Payments} [payments]
 * @property {ShipmentGst} [gst]
 * @property {Company} [company]
 * @property {PlatformShipmentDetailsBrand} [brand]
 * @property {Object} [coupon]
 * @property {string} [order_source]
 * @property {boolean} [is_not_fynd_source]
 * @property {Object} [can_break]
 * @property {string} [comment]
 * @property {Promise} [promise]
 * @property {ShipmentTrackingDetails} [tracking_details]
 * @property {boolean} [is_fynd_coupon]
 * @property {string} [order_type]
 * @property {number} [total_shipment_bags]
 * @property {Object} [pod]
 * @property {boolean} [lock_status]
 * @property {number} [priority]
 * @property {string} [priority_text]
 * @property {string} [ordering_channel]
 * @property {string} [credit_note_id]
 * @property {boolean} [auto_trigger_dp_assignment]
 * @property {string} [packaging_type]
 * @property {ShipmentDates} [dates]
 */

/**
 * @typedef PlatformShipmentDetailsStatus
 * @property {number} [id]
 * @property {number[]} [bag_list]
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [name]
 * @property {number} [progress]
 * @property {string} [shipment_id]
 * @property {string} [current_shipment_status]
 * @property {string} [color_code]
 */

/**
 * @typedef BagsDetails
 * @property {BagFinancialBreakup[]} [financial_breakup]
 * @property {BagCurrStatus} [status]
 * @property {BagItem} [item]
 * @property {BagArticle} [article]
 * @property {number} [id]
 * @property {BagPrices} [prices]
 * @property {GstDetails} [gst_details]
 * @property {BagBreakupValues} [breakup_values]
 * @property {number} [update_time]
 * @property {BagCurrentStatus} [current_status]
 * @property {BagStatus} [bag_status]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {Object} [payment_methods]
 */

/**
 * @typedef BagFinancialBreakup
 * @property {number} [value_of_good]
 * @property {string} [hsn_code]
 * @property {number} [price_effective]
 * @property {number} [cod_charges]
 * @property {number} [gst_fee]
 * @property {number} [fynd_credits]
 * @property {number} [refund_amount]
 * @property {number} [cashback_applied]
 * @property {number} [transfer_price]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [coupon_value]
 * @property {number} [amount_paid]
 * @property {number} [gst_tax_percentage]
 * @property {string} [size]
 * @property {number} [total_units]
 * @property {number} [discount]
 * @property {number} [coupon_effective_discount]
 * @property {number} [cashback]
 * @property {number} [promotion_effective_discount]
 * @property {string} [gst_tag]
 * @property {number} [delivery_charge]
 * @property {number} [refund_credit]
 * @property {number} [price_marked]
 * @property {Identifiers} [identifiers]
 * @property {string} [item_name]
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [brand_calculated_amount]
 */

/**
 * @typedef Identifiers
 * @property {string} [ean]
 */

/**
 * @typedef BagCurrStatus
 * @property {boolean} [enable_tracking]
 * @property {boolean} [is_customer_return_allowed]
 * @property {boolean} [is_active]
 * @property {boolean} [is_returnable]
 * @property {boolean} [can_be_cancelled]
 */

/**
 * @typedef BagArticle
 * @property {ArticleIdentifiers} [identifiers]
 * @property {boolean} [esp_modified]
 * @property {boolean} [is_set]
 * @property {string} [size]
 * @property {string} [code]
 * @property {Set} [set]
 * @property {string} [seller_identifier]
 * @property {BagArticleReturnConfig} [return_config]
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {Object} [child_details]
 */

/**
 * @typedef ArticleIdentifiers
 * @property {string} [ean]
 */

/**
 * @typedef Set
 * @property {number} [quantity]
 * @property {SetSizeDistribution} [size_distribution]
 */

/**
 * @typedef SetSizeDistribution
 * @property {Sizes} [sizes]
 */

/**
 * @typedef Sizes
 * @property {string} [size]
 * @property {number} [pieces]
 */

/**
 * @typedef BagArticleReturnConfig
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */

/**
 * @typedef GstDetails
 * @property {number} [brand_calculated_amount]
 * @property {number} [gst_fee]
 * @property {string} [gst_tag]
 * @property {string} [hsn_code]
 * @property {number} [value_of_good]
 * @property {number} [gst_tax_percentage]
 * @property {boolean} [is_default_hsn_code]
 */

/**
 * @typedef BagBreakupValues
 * @property {string} [name]
 * @property {string} [display]
 * @property {number} [value]
 */

/**
 * @typedef BagCurrentStatus
 * @property {string} [updated_at]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [status]
 * @property {string} [state_type]
 */

/**
 * @typedef BagStateMapper
 * @property {string} [app_state_name]
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [app_display_name]
 */

/**
 * @typedef BagStatus
 * @property {string} [status]
 * @property {string} [state_type]
 * @property {string} [updated_at]
 * @property {BagStatusBagStateMapper} [bag_state_mapper]
 */

/**
 * @typedef BagStatusBagStateMapper
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [app_display_name]
 * @property {string} [app_state_name]
 */

/**
 * @typedef BagPrices
 * @property {number} [cashback]
 * @property {number} [refund_credit]
 * @property {number} [coupon_value]
 * @property {number} [delivery_charge]
 * @property {number} [fynd_credits]
 * @property {number} [price_marked]
 * @property {number} [cashback_applied]
 * @property {number} [value_of_good]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [amount_paid]
 * @property {number} [cod_charges]
 * @property {number} [price_effective]
 * @property {number} [refund_amount]
 * @property {number} [discount]
 */

/**
 * @typedef ShipmentBreakupValues
 * @property {string} [name]
 * @property {string} [display]
 * @property {number} [value]
 */

/**
 * @typedef DpDetails
 * @property {string} [gst_tag]
 */

/**
 * @typedef ShipmentInvoice
 * @property {string} [payment_type]
 * @property {string} [updated_date]
 * @property {string} [invoice_url]
 * @property {string} [label_url]
 * @property {string} [payment_mode]
 * @property {number} [amount_to_collect]
 * @property {RtoAddress} [rto_address]
 */

/**
 * @typedef RtoAddress
 * @property {string} [name]
 * @property {number} [id]
 * @property {string} [phone]
 * @property {string} [location_type]
 * @property {StoreAddressJson} [store_address_json]
 * @property {string} [code]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {number} [company_id]
 * @property {string} [contact_person]
 * @property {string} [state]
 * @property {string} [store_email]
 * @property {string} [address2]
 */

/**
 * @typedef StoreAddressJson
 * @property {string} [country]
 * @property {string} [updated_at]
 * @property {string} [area]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [pincode]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [created_at]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 * @property {string} [version]
 * @property {string} [landmark]
 */

/**
 * @typedef PlatformFulfillingStore
 * @property {number} [packaging_material_count]
 * @property {string} [location_type]
 * @property {string} [code]
 * @property {string} [city]
 * @property {FulfillingStoreMeta} [meta]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {string} [address1]
 * @property {string} [store_email]
 * @property {boolean} [is_archived]
 * @property {string} [state]
 * @property {string} [address2]
 * @property {string} [contact_person]
 * @property {string} [phone]
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [fulfillment_channel]
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {string} [pincode]
 * @property {string[]} [brand_store_tags]
 * @property {number} [company_id]
 * @property {FulfillingStoreStoreAddressJson} [store_address_json]
 * @property {string} [updated_at]
 * @property {string} [login_username]
 * @property {string} [country]
 */

/**
 * @typedef FulfillingStoreMeta
 * @property {AdditionalContactDetails} [additional_contact_details]
 * @property {Documents} [documents]
 * @property {string} [gst_number]
 * @property {string} [display_name]
 * @property {ProductReturnConfig} [product_return_config]
 * @property {boolean} [allow_dp_assignment_from_fynd]
 * @property {string} [stage]
 * @property {Timing} [timing]
 */

/**
 * @typedef AdditionalContactDetails
 * @property {string[]} [number]
 */

/**
 * @typedef Documents
 * @property {Gst} [gst]
 */

/**
 * @typedef Gst
 * @property {string} [legal_name]
 * @property {string} [type]
 * @property {string} [value]
 * @property {boolean} [verified]
 */

/**
 * @typedef ProductReturnConfig
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef Timing
 * @property {Opening} [opening]
 * @property {string} [weekday]
 * @property {boolean} [open]
 * @property {Closing} [closing]
 */

/**
 * @typedef Opening
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef Closing
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef FulfillingStoreStoreAddressJson
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [state]
 * @property {string} [contact_person]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [version]
 * @property {string} [created_at]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [updated_at]
 * @property {string} [address_category]
 */

/**
 * @typedef ShipmentGst
 * @property {number} [brand_calculated_amount]
 * @property {number} [value_of_good]
 * @property {number} [gst_fee]
 */

/**
 * @typedef PlatformShipmentDetailsBrand
 * @property {boolean} [credit_note_allowed]
 * @property {string} [brand_name]
 * @property {string} [modified_on]
 * @property {number} [id]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [created_on]
 * @property {string} [logo]
 */

/**
 * @typedef Promise
 * @property {Timestamp} [timestamp]
 */

/**
 * @typedef Timestamp
 * @property {string} [min]
 * @property {string} [max]
 */

/**
 * @typedef ShipmentTrackingDetails
 * @property {string} [status]
 * @property {string} [time]
 * @property {boolean} [is_passed]
 * @property {boolean} [is_current]
 */

/**
 * @typedef ItemsPayments
 * @property {number} [display_priority]
 * @property {number} [id]
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [logo]
 * @property {string} [payment_identifier]
 * @property {string} [source_nickname]
 * @property {string} [mode]
 * @property {string} [source]
 */

/**
 * @typedef PlatformOrderDetailsPage
 * @property {string} [next]
 * @property {string} [previous]
 */

/**
 * @typedef ShipmentDates
 * @property {string} [due_date]
 */

/**
 * @typedef OrderLanesCount
 * @property {StageItem[]} stages
 */

/**
 * @typedef StageItem
 * @property {number} [count]
 * @property {string} [text]
 * @property {string} [value]
 */

/**
 * @typedef UpdateOrderReprocessResponse
 * @property {string} status
 */

/**
 * @typedef PlatformOrderTrack
 * @property {boolean} success
 * @property {string} request_id
 * @property {string} message
 * @property {string} mobile
 * @property {string} country_code
 * @property {number} resend_timer
 * @property {string} [resend_token]
 */

/**
 * @typedef OrderPicklistListing
 * @property {PlatformOrderUserInfo} [user]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {Channel} [channel]
 * @property {Object} [fyndstore_emp]
 * @property {Object} [ordering_store]
 * @property {PlatformBreakupValues} [breakup_values]
 * @property {string} [id]
 * @property {PlatformApplication} [application]
 * @property {PlatformShipmentDetails} [shipments]
 * @property {string} [created_at]
 * @property {number} [total_shipments_in_order]
 * @property {ItemsPayments} [payments]
 * @property {Object} [payment_methods]
 */

/**
 * @typedef Stages
 * @property {string} [text]
 * @property {string} [value]
 * @property {boolean} [is_default]
 * @property {StagesFilters} [filters]
 */

/**
 * @typedef ItemTotal
 * @property {number} [new]
 * @property {number} [processing]
 * @property {number} [returns]
 * @property {number} [all]
 */

/**
 * @typedef GetPingResponse
 * @property {string} ping
 */

/**
 * @typedef GetShipmentAddressResponse
 * @property {string} message
 * @property {DataShipmentAddress} data
 * @property {boolean} success
 */

/**
 * @typedef DataShipmentAddress
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [phone]
 * @property {string} [area]
 * @property {string} [address]
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {string} [address_category]
 * @property {string} [email]
 * @property {string} [name]
 */

/**
 * @typedef UpdateShipmentAddressRequest
 * @property {string} email
 * @property {string} address
 * @property {string} pincode
 * @property {string} state
 * @property {string} address_type
 * @property {string} country
 * @property {string} name
 * @property {string} phone
 * @property {string} area
 * @property {string} landmark
 * @property {string} city
 */

/**
 * @typedef UpdateShipmentAddressResponse
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef ShipmentTrackResponse
 * @property {ShipmentTrackResponseBagListItem[]} bag_list
 * @property {string} message
 * @property {number} order_value
 */

/**
 * @typedef ShipmentTrackResponseBagListItem
 * @property {boolean} [enable_tracking]
 * @property {string} [price]
 * @property {string} [time_slot]
 * @property {string} [product_name]
 * @property {boolean} [can_return]
 * @property {string} [order_date]
 * @property {boolean} [is_try_at_home]
 * @property {ShipmentTrackResponseBagListItemBreakValues[]} [breakup_values]
 * @property {ShipmentTrackResponseBagListItemStatuses[]} [statuses]
 * @property {boolean} [is_active]
 * @property {string} [bag_id]
 * @property {string} [order_id]
 * @property {string} [size]
 * @property {string} [payment_mode_source]
 * @property {ShipmentTrackResponseBagListItemDpDetails} [dp_details]
 * @property {number} [product_id]
 * @property {ShipmentTrackResponseBagListItemsProductImage} [product_image]
 * @property {string} [brand_name]
 * @property {string} [price_marked]
 * @property {string} [status]
 * @property {boolean} [can_cancel]
 * @property {string} [payment_mode]
 * @property {string} [fynd_cash_msg]
 * @property {string} [delivery_address]
 */

/**
 * @typedef ShipmentTrackResponseBagListItemBreakValues
 * @property {string} [name]
 * @property {string} [display]
 * @property {string} [value]
 */

/**
 * @typedef ShipmentTrackResponseBagListItemStatuses
 * @property {number} [nps_rating]
 * @property {string} [nps_string]
 * @property {ShipmentTrackResponseBagListItemStatusesProgress[]} [progress_status]
 * @property {string} [flow_type]
 * @property {number} [status_progress]
 * @property {boolean} [is_nps_done]
 * @property {string} [header_message]
 * @property {string} [is_delayed]
 * @property {ShipmentTrackResponseBagListItemStatusesTrack[]} [tracking_list]
 */

/**
 * @typedef ShipmentTrackResponseBagListItemStatusesProgress
 * @property {string} [title]
 * @property {string} [type]
 * @property {boolean} [state]
 */

/**
 * @typedef ShipmentTrackResponseBagListItemStatusesTrack
 * @property {string} [status]
 * @property {string} [time]
 * @property {boolean} [is_passed]
 * @property {boolean} [is_current]
 */

/**
 * @typedef ShipmentTrackResponseBagListItemDpDetails
 * @property {string} [tracking_no]
 * @property {string} [courier]
 */

/**
 * @typedef ShipmentTrackResponseBagListItemsProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */

/**
 * @typedef UpdateShipmentStatusResponse
 * @property {Object} shipments
 * @property {any[]} [error_shipments]
 */

/**
 * @typedef UpdateShipmentStatusBody
 * @property {Object} shipments
 * @property {any[]} [statuses]
 * @property {boolean} force_transition
 * @property {boolean} task
 */

/**
 * @typedef ShipmentReasonsResponse
 * @property {boolean} success
 * @property {string} message
 * @property {ShipmentResponseReasons[]} reasons
 */

/**
 * @typedef ShipmentResponseReasons
 * @property {number} [reason_id]
 * @property {string} [reason]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {Results} results
 */

/**
 * @typedef Results
 * @property {string} [awb]
 * @property {string} [updated_at]
 * @property {string} [last_location_recieved_at]
 * @property {string} [reason]
 * @property {string} [shipment_type]
 * @property {string} [status]
 * @property {string} [updated_time]
 * @property {string} [account_name]
 */

/**
 * @typedef ShipmentUpdateRequest
 * @property {string[]} bags
 * @property {Object} reason
 * @property {string} comments
 * @property {string} action
 */

/**
 * @typedef ShipmentUpdateResponse
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef UpdateProcessShipmenstRequestBody
 * @property {string[]} shipment_ids
 * @property {string} expected_status
 */

/**
 * @typedef UpdateProcessShipmenstRequestResponse
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef GetVoiceCallbackResponse
 * @property {string} message
 */

/**
 * @typedef GetClickToCallResponse
 * @property {string} message
 */

/**
 * @typedef ApefaceApiError
 * @property {string} [message]
 */

/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */

/**
 * @typedef CreateSearchKeyword
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {SearchKeywordResult} result
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetSearchWordsData
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {Object} [result]
 * @property {string} [app_id]
 * @property {string} [uid]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [error]
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {number} [status]
 * @property {string} [message]
 */

/**
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AutocompletePageAction
 * @property {string} [url]
 * @property {Object} [query]
 * @property {string} [type]
 * @property {Object} [params]
 */

/**
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */

/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 */

/**
 * @typedef AutocompleteResult
 * @property {string} [display]
 * @property {AutocompleteAction} [action]
 * @property {Media} [logo]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {string[]} [words]
 * @property {AutocompleteResult[]} [results]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string[]} [words]
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {string} [uid]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ProductBundleItem
 * @property {number} product_uid
 * @property {number} max_quantity
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} min_quantity
 * @property {boolean} [auto_select]
 */

/**
 * @typedef ProductBundleRequest
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {number} [company_id]
 * @property {string} choice
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {string} name
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {string} slug
 * @property {string} [id]
 * @property {boolean} is_active
 * @property {number} [company_id]
 * @property {string} choice
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {string} name
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {number} [company_id]
 * @property {string} choice
 * @property {string} [logo]
 * @property {string} name
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef Size
 * @property {string} [display]
 * @property {boolean} [is_available]
 * @property {string} [value]
 * @property {number} [quantity]
 */

/**
 * @typedef LimitedProductData
 * @property {Object} [identifier]
 * @property {string[]} [sizes]
 * @property {string} [slug]
 * @property {string} [country_of_origin]
 * @property {string[]} [images]
 * @property {number} [quantity]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [item_code]
 * @property {string} [short_description]
 * @property {Object} [price]
 * @property {Object} [attributes]
 */

/**
 * @typedef Price
 * @property {string} [currency]
 * @property {number} [max_effective]
 * @property {number} [max_marked]
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 */

/**
 * @typedef GetProducts
 * @property {Size[]} [sizes]
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid]
 * @property {number} [max_quantity]
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} [min_quantity]
 * @property {boolean} [auto_select]
 * @property {Price} [price]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {string[]} [page_visibility]
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {string} [choice]
 * @property {string} [logo]
 * @property {string} [name]
 * @property {GetProducts[]} [products]
 */

/**
 * @typedef Meta
 * @property {Object[]} [values]
 * @property {Object} [headers]
 * @property {string} [unit]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} title
 * @property {number} [brand_id]
 * @property {string} [id]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [image]
 * @property {string} name
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {Guide} [guide]
 * @property {string} [tag]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {boolean} [active]
 */

/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */

/**
 * @typedef SizeGuideResponse
 * @property {string} [title]
 * @property {number} [brand_id]
 * @property {string} [id]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {Object} [guide]
 * @property {string} [subtitle]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [tag]
 * @property {string} [created_on]
 * @property {boolean} [active]
 */

/**
 * @typedef MetaFields
 * @property {string} value
 * @property {string} key
 */

/**
 * @typedef ApplicationItemMeta
 * @property {Object} [_custom_json]
 * @property {MetaFields[]} [_custom_meta]
 */

/**
 * @typedef SuccessResponse1
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef MOQ
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 * @property {number} [minimum]
 */

/**
 * @typedef ApplicationItemResponse
 * @property {SEO} [seo]
 * @property {Object} [alt_text]
 * @property {MOQ} [moq]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} data
 * @property {Object[]} [values]
 * @property {Object[]} [condition]
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {number} priority
 * @property {string} [slug]
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {string} [unit]
 * @property {string} [key]
 * @property {string} name
 */

/**
 * @typedef AppConfigurationDetail
 * @property {number} priority
 * @property {string[]} [template_slugs]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {boolean} is_default
 * @property {string} [name]
 * @property {string} app_id
 * @property {AttributeDetailsGroup[]} [attributes]
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef PageResponseType
 * @property {number} total_count
 * @property {boolean} has_next
 * @property {number} next
 * @property {number} current
 */

/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
 * @property {PageResponseType} page
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {string} key
 * @property {boolean} is_default
 * @property {string} [name]
 * @property {string} app_id
 * @property {string} default_key
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
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [variant]
 * @property {Object} [compare]
 * @property {Object} [detail]
 * @property {Object} [similar]
 */

/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [display]
 * @property {string} [key]
 */

/**
 * @typedef MetaDataListingSortResponse
 * @property {MetaDataListingSortMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string} [display]
 * @property {Object[]} [units]
 * @property {string[]} [filter_types]
 * @property {string} [key]
 */

/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingSortResponse} sort
 * @property {MetaDataListingFilterResponse} filter
 */

/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {MetaDataListingResponse} [listing]
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {string} key
 * @property {string} [name]
 */

/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */

/**
 * @typedef ConfigurationBucketPoints
 * @property {string} [display]
 * @property {number} [start]
 * @property {number} [end]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {Object[]} [map_values]
 * @property {string} [value]
 * @property {Object} [map]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [sort]
 * @property {string} [condition]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {string} key
 * @property {string} [name]
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} type
 * @property {string} [display_name]
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */

/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingSort} sort
 * @property {ConfigurationListingFilter} filter
 */

/**
 * @typedef ProductSize
 * @property {number} min
 * @property {number} max
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {number} priority
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {ProductSize} size
 * @property {string} key
 * @property {string} name
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} [title]
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {ProductSize} [size]
 * @property {string} key
 * @property {string} [subtitle]
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
 * @typedef AppConfiguration
 * @property {ConfigurationListing} [listing]
 * @property {ConfigurationProduct} [product]
 * @property {string} [config_id]
 * @property {Object} [created_by]
 * @property {string} app_id
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} config_type
 * @property {string} [created_on]
 * @property {string} [type]
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {ConfigurationListing} [listing]
 * @property {string} [id]
 * @property {ConfigurationProduct} [product]
 * @property {string} [config_id]
 * @property {Object} [created_by]
 * @property {string} app_id
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} config_type
 * @property {string} [created_on]
 * @property {string} [type]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {boolean} [is_default]
 * @property {AppCatalogConfiguration} [data]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [sort]
 * @property {Object} [filter]
 */

/**
 * @typedef EntityConfiguration
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} [id]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} [config_id]
 * @property {string} app_id
 * @property {string} config_type
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {boolean} [is_default]
 * @property {EntityConfiguration} [data]
 */

/**
 * @typedef ProductSortOn
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [value]
 */

/**
 * @typedef ProductFiltersValue
 * @property {string} display
 * @property {number} [count]
 * @property {string} [query_format]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {string} [display_format]
 * @property {Object} value
 * @property {number} [min]
 * @property {number} [selected_min]
 * @property {number} [selected_max]
 * @property {number} [max]
 * @property {boolean} is_selected
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} display
 * @property {string[]} [operators]
 * @property {string} [kind]
 * @property {string} [logo]
 * @property {string} name
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
 * @typedef CollectionSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [start]
 * @property {string} [end]
 * @property {NextSchedule[]} [next_schedule]
 */

/**
 * @typedef CollectionBadge
 * @property {string} [text]
 * @property {string} [color]
 */

/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
 */

/**
 * @typedef SeoDetail
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {Object[]} value
 * @property {string} op
 */

/**
 * @typedef UserInfo
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [email]
 * @property {string} [uid]
 */

/**
 * @typedef CreateCollection
 * @property {boolean} [is_active]
 * @property {boolean} [allow_facets]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionBadge} [badge]
 * @property {string} app_id
 * @property {boolean} [published]
 * @property {CollectionImage} logo
 * @property {string} name
 * @property {CollectionBanner} banners
 * @property {SeoDetail} [seo]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {string} [sort_on]
 * @property {string} slug
 * @property {UserInfo} [created_by]
 * @property {string} [description]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [_custom_json]
 * @property {boolean} [allow_sort]
 * @property {Object} [_locale_language]
 * @property {string[]} [tags]
 * @property {UserInfo} [modified_by]
 * @property {string} type
 * @property {boolean} [is_visible]
 */

/**
 * @typedef BannerImage
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [portrait]
 * @property {BannerImage} [landscape]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {boolean} [is_active]
 * @property {boolean} [allow_facets]
 * @property {Object} [cron]
 * @property {Object} [_schedule]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {BannerImage} [logo]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {string} [sort_on]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string[]} [visible_facets_keys]
 * @property {string[]} [tag]
 * @property {boolean} [allow_sort]
 * @property {string} [type]
 */

/**
 * @typedef Media1
 * @property {string} url
 * @property {Object} [meta]
 * @property {string} [type]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {boolean} [is_active]
 * @property {boolean} [allow_facets]
 * @property {Object} [cron]
 * @property {Object} [_schedule]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {Media1} [logo]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string} [description]
 * @property {string[]} [visible_facets_keys]
 * @property {string[]} [tag]
 * @property {boolean} [allow_sort]
 * @property {string} [uid]
 * @property {string} [type]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags]
 * @property {CollectionListingFilterType[]} [type]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 * @property {CollectionListingFilter} [filters]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {boolean} [allow_sort]
 * @property {Object} [cron]
 * @property {Media1} [logo]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [app_id]
 * @property {string[]} [tag]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [badge]
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 */

/**
 * @typedef UpdateCollection
 * @property {boolean} [is_active]
 * @property {boolean} [allow_facets]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionBadge} [badge]
 * @property {boolean} [published]
 * @property {CollectionImage} [logo]
 * @property {string} [name]
 * @property {CollectionBanner} [banners]
 * @property {SeoDetail} [seo]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {string} [sort_on]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [_custom_json]
 * @property {boolean} [allow_sort]
 * @property {Object} [_locale_language]
 * @property {string[]} [tags]
 * @property {UserInfo} [modified_by]
 * @property {string} [type]
 * @property {boolean} [is_visible]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {number} [item_id]
 * @property {string} [action]
 */

/**
 * @typedef CollectionItemRequest
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 */

/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */

/**
 * @typedef ProductBrand
 * @property {string} [name]
 * @property {Action} [action]
 * @property {Media1} [logo]
 * @property {number} [uid]
 */

/**
 * @typedef Price1
 * @property {number} [min]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [max]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [key]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */

/**
 * @typedef ProductListingDetail
 * @property {Object} [promo_meta]
 * @property {Object} [attributes]
 * @property {string} [discount]
 * @property {string} [name]
 * @property {string[]} [highlights]
 * @property {string} [short_description]
 * @property {string} [image_nature]
 * @property {boolean} [sellable]
 * @property {string} slug
 * @property {string} [description]
 * @property {Object} [teaser_tag]
 * @property {string} [item_code]
 * @property {ProductBrand} [brand]
 * @property {string[]} [tryouts]
 * @property {boolean} [has_variant]
 * @property {string} [product_online_date]
 * @property {Media1[]} [medias]
 * @property {ProductListingPrice} [price]
 * @property {string[]} [similars]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [item_type]
 * @property {string} [color]
 * @property {number} [rating_count]
 * @property {number} [uid]
 * @property {number} [rating]
 * @property {string} [type]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductListingDetail[]} [items]
 * @property {Page} [page]
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [out_of_stock_count]
 * @property {number} [sellable_count]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [total_articles]
 * @property {number} [total_sizes]
 * @property {number} [available_sizes]
 * @property {string} [name]
 * @property {number} [available_articles]
 * @property {number} [article_freshness]
 */

/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightItem} [item]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef CrossSellingData
 * @property {number} [products]
 * @property {number} [articles]
 */

/**
 * @typedef CrossSellingResponse
 * @property {CrossSellingData} [data]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef OptInPostRequest
 * @property {string} opt_level
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {string} [platform]
 * @property {number[]} [store_ids]
 * @property {boolean} [enabled]
 */

/**
 * @typedef CompanyOptIn
 * @property {string} opt_level
 * @property {number} company_id
 * @property {number[]} brand_ids
 * @property {Object} [created_by]
 * @property {number} modified_on
 * @property {Object} [modified_by]
 * @property {string} platform
 * @property {number} created_on
 * @property {number[]} store_ids
 * @property {boolean} enabled
 */

/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [name]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {number} [uid]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {string} [brand_name]
 * @property {number} [company_id]
 * @property {number} [total_article]
 * @property {number} [brand_id]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {number} [brand]
 * @property {string} [company]
 * @property {number} [store]
 */

/**
 * @typedef StoreDetail
 * @property {Object[]} [documents]
 * @property {number} [company_id]
 * @property {string} [store_type]
 * @property {string} [name]
 * @property {Object} [address]
 * @property {string} [modified_on]
 * @property {Object} [timing]
 * @property {string} [store_code]
 * @property {number} [uid]
 * @property {Object[]} [additional_contacts]
 * @property {string} [created_on]
 * @property {Object} [manager]
 * @property {string} [display_name]
 */

/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys]
 */

/**
 * @typedef AttributeMasterMeta
 * @property {boolean} [enriched]
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 */

/**
 * @typedef AttributeSchemaRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AttributeMaster
 * @property {boolean} [mandatory]
 * @property {AttributeSchemaRange} [range]
 * @property {string} [format]
 * @property {boolean} [multi]
 * @property {string} type
 * @property {string[]} [allowed_values]
 */

/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */

/**
 * @typedef AttributeMasterFilter
 * @property {string[]} [depends_on]
 * @property {boolean} indexing
 * @property {number} [priority]
 */

/**
 * @typedef GenderDetail
 * @property {AttributeMasterMeta} [meta]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [slug]
 * @property {string} [id]
 * @property {string} [logo]
 * @property {string} [name]
 * @property {string} [description]
 * @property {AttributeMaster} [schema]
 * @property {AttributeMasterDetails} [details]
 * @property {AttributeMasterFilter} [filters]
 * @property {string[]} [departments]
 * @property {boolean} [is_nested]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PTErrorResponse
 * @property {Object} [meta]
 * @property {Object} [errors]
 * @property {string} [code]
 * @property {number} [status]
 * @property {string} [message]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string} logo
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {string[]} [tags]
 * @property {Object} [platforms]
 * @property {number} [uid]
 * @property {string} [_cls]
 * @property {number} priority_order
 * @property {Object} [_custom_json]
 */

/**
 * @typedef DepartmentCreateResponse
 * @property {string} message
 * @property {number} uid
 */

/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef UserSerializer
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {string} [contact]
 */

/**
 * @typedef GetDepartment
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string} [logo]
 * @property {string[]} [synonyms]
 * @property {UserSerializer} [created_by]
 * @property {string} [item_type]
 * @property {string} [name]
 * @property {number} [page_no]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {number} [uid]
 * @property {number} [page_size]
 * @property {string} [created_on]
 * @property {number} [priority_order]
 * @property {string} [search]
 */

/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {Object} [meta]
 * @property {Object} [errors]
 * @property {string} [code]
 * @property {number} [status]
 * @property {string} [message]
 */

/**
 * @typedef UserDetail
 * @property {string} username
 * @property {string} user_id
 * @property {boolean} [super_user]
 * @property {string} [contact]
 */

/**
 * @typedef DepartmentModel
 * @property {Object} [slug]
 * @property {boolean} [is_active]
 * @property {string} [verified_on]
 * @property {string} logo
 * @property {Object[]} [synonyms]
 * @property {UserDetail} [created_by]
 * @property {Object} name
 * @property {Object} [_id]
 * @property {string} modified_on
 * @property {UserDetail} [modified_by]
 * @property {number} [uid]
 * @property {string} created_on
 * @property {Object} [_cls]
 * @property {UserDetail} [verified_by]
 * @property {number} priority_order
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ProductTemplate
 * @property {boolean} [is_archived]
 * @property {string} slug
 * @property {boolean} [is_active]
 * @property {boolean} is_expirable
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string[]} [categories]
 * @property {boolean} is_physical
 * @property {string} [tag]
 * @property {string} [created_on]
 * @property {string[]} [departments]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string[]} [attributes]
 */

/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Properties
 * @property {Object} [brand_uid]
 * @property {Object} [currency]
 * @property {Object} [multi_size]
 * @property {Object} [is_active]
 * @property {Object} [country_of_origin]
 * @property {Object} [media]
 * @property {Object} [trader]
 * @property {Object} [custom_order]
 * @property {Object} [trader_type]
 * @property {Object} [category_slug]
 * @property {Object} [name]
 * @property {Object} [product_publish]
 * @property {Object} [highlights]
 * @property {Object} [short_description]
 * @property {Object} [product_group_tag]
 * @property {Object} [command]
 * @property {Object} [size_guide]
 * @property {Object} [slug]
 * @property {Object} [return_config]
 * @property {Object} [description]
 * @property {Object} [teaser_tag]
 * @property {Object} [item_code]
 * @property {Object} [sizes]
 * @property {Object} [variants]
 * @property {Object} [hsn_code]
 * @property {Object} [item_type]
 * @property {Object} [tags]
 * @property {Object} [no_of_boxes]
 * @property {Object} [is_dependent]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [title]
 * @property {Object} [definitions]
 * @property {Properties} [properties]
 * @property {string} [description]
 * @property {string[]} [required]
 * @property {string} [type]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {boolean} [is_archived]
 * @property {string} slug
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {boolean} is_expirable
 * @property {string} [logo]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string[]} [categories]
 * @property {boolean} is_physical
 * @property {string} [tag]
 * @property {string[]} [departments]
 * @property {string[]} [attributes]
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
 * @typedef ProductDownloadItemsData
 * @property {string[]} [brand]
 * @property {string[]} [templates]
 * @property {string} [type]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {string} [url]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [task_id]
 * @property {number} [seller_id]
 * @property {string} [completed_on]
 * @property {string} [id]
 * @property {VerifiedBy} [created_by]
 * @property {string} [trigger_on]
 * @property {Object} [template_tags]
 * @property {string} [status]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {ProductDownloadsItems} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
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
 * @typedef Media2
 * @property {string} portrait
 * @property {string} logo
 * @property {string} landscape
 */

/**
 * @typedef Hierarchy
 * @property {number} l2
 * @property {number} department
 * @property {number} l1
 */

/**
 * @typedef CategoryRequestBody
 * @property {number} [priority]
 * @property {CategoryMapping} [marketplaces]
 * @property {string} [slug]
 * @property {number} level
 * @property {boolean} is_active
 * @property {Media2} [media]
 * @property {string[]} [synonyms]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string} name
 * @property {number[]} departments
 * @property {string[]} [tryouts]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
 */

/**
 * @typedef Category
 * @property {number} [priority]
 * @property {CategoryMapping} [marketplaces]
 * @property {string} [slug]
 * @property {number} level
 * @property {boolean} is_active
 * @property {string} [id]
 * @property {Media2} [media]
 * @property {string[]} [synonyms]
 * @property {Hierarchy[]} [hierarchy]
 * @property {Object} [created_by]
 * @property {string} name
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {number[]} departments
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {string[]} [tryouts]
 */

/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
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
 * @typedef TaxIdentifier
 * @property {string} [hsn_code_id]
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code]
 */

/**
 * @typedef Trader
 * @property {string} [name]
 * @property {string[]} [address]
 * @property {string} [type]
 */

/**
 * @typedef CustomOrder
 * @property {number} [manufacturing_time]
 * @property {boolean} [is_custom_order]
 * @property {string} [manufacturing_time_unit]
 */

/**
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef ReturnConfig
 * @property {number} time
 * @property {boolean} returnable
 * @property {string} unit
 */

/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */

/**
 * @typedef NetQuantity
 * @property {number} [value]
 * @property {Object} [unit]
 */

/**
 * @typedef ProductCreateUpdate
 * @property {number} brand_uid
 * @property {string} currency
 * @property {TaxIdentifier} tax_identifier
 * @property {boolean} [multi_size]
 * @property {boolean} [is_active]
 * @property {string} country_of_origin
 * @property {Media1[]} [media]
 * @property {Trader[]} trader
 * @property {string} template_tag
 * @property {boolean} [is_set]
 * @property {CustomOrder} [custom_order]
 * @property {number[]} departments
 * @property {string} category_slug
 * @property {Object} [change_request_id]
 * @property {string} name
 * @property {string} [bulk_job_id]
 * @property {ProductPublish} [product_publish]
 * @property {string[]} [highlights]
 * @property {string} [short_description]
 * @property {string[]} [product_group_tag]
 * @property {string} [size_guide]
 * @property {string} slug
 * @property {string} [requester]
 * @property {ReturnConfig} return_config
 * @property {string} [action]
 * @property {string} [description]
 * @property {TeaserTag} [teaser_tag]
 * @property {Object} item_code
 * @property {Object} [_custom_json]
 * @property {Object} [variant_media]
 * @property {number} company_id
 * @property {Object} [variants]
 * @property {string} item_type
 * @property {string[]} [tags]
 * @property {NetQuantity} [net_quantity]
 * @property {number} [uid]
 * @property {number} [no_of_boxes]
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [is_dependent]
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
 * @typedef Logo
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef Brand
 * @property {string} [name]
 * @property {Logo} [logo]
 * @property {number} [uid]
 */

/**
 * @typedef Product
 * @property {number} [brand_uid]
 * @property {string} [currency]
 * @property {Object} [tax_identifier]
 * @property {boolean} [multi_size]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {string} [country_of_origin]
 * @property {Image[]} [images]
 * @property {Media1[]} [media]
 * @property {string} [template_tag]
 * @property {boolean} [is_set]
 * @property {boolean} [is_physical]
 * @property {Object} [custom_order]
 * @property {number[]} [departments]
 * @property {string} [category_slug]
 * @property {number} [category_uid]
 * @property {string} [name]
 * @property {ProductPublished} [product_publish]
 * @property {string[]} [highlights]
 * @property {string} [primary_color]
 * @property {string} [short_description]
 * @property {string} [image_nature]
 * @property {string} [size_guide]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [item_code]
 * @property {Brand} [brand]
 * @property {Object} [_custom_json]
 * @property {Object[]} [sizes]
 * @property {boolean} [is_expirable]
 * @property {Object[]} [all_sizes]
 * @property {Object} [variants]
 * @property {string} [item_type]
 * @property {string} [hsn_code]
 * @property {string[]} [l3_mapping]
 * @property {string} [color]
 * @property {number} [uid]
 * @property {boolean} [is_dependent]
 */

/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {Object} [synonyms]
 * @property {string} [suggestion]
 * @property {string[]} departments
 * @property {AttributeMasterFilter} filters
 * @property {string} [raw_key]
 * @property {string} [logo]
 * @property {string} [name]
 * @property {AttributeMasterDetails} details
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} slug
 * @property {string} [unit]
 * @property {Object} [created_by]
 * @property {string} [description]
 * @property {Object} [modified_by]
 * @property {boolean} [is_nested]
 * @property {boolean} [variant]
 * @property {AttributeMaster} schema
 * @property {string[]} [tags]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */

/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */

/**
 * @typedef UserInfo1
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [email]
 * @property {string} [uid]
 */

/**
 * @typedef BulkJob
 * @property {string} [tracking_url]
 * @property {string} [custom_template_tag]
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {Object[]} [failed_records]
 * @property {string} [file_path]
 * @property {string} [stage]
 * @property {UserInfo1} [created_by]
 * @property {number} total
 * @property {string} [template_tag]
 * @property {string} [modified_on]
 * @property {string} created_on
 * @property {Object[]} [cancelled_records]
 * @property {number} [failed]
 * @property {UserInfo1} [modified_by]
 */

/**
 * @typedef BulkResponse
 * @property {string} batch_id
 * @property {boolean} [is_active]
 * @property {UserInfo1} [created_by]
 * @property {string} [modified_on]
 * @property {string} created_on
 * @property {UserInfo1} [modified_by]
 */

/**
 * @typedef UserDetail1
 * @property {string} [full_name]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductBulkRequest
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {string[]} [failed_records]
 * @property {string} [file_path]
 * @property {string} [stage]
 * @property {UserDetail1} [created_by]
 * @property {number} [total]
 * @property {string} [template_tag]
 * @property {ProductTemplate} [template]
 * @property {string} [modified_on]
 * @property {UserDetail1} [modified_by]
 * @property {string[]} [cancelled_records]
 * @property {number} [failed]
 * @property {string} [created_on]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkProductRequest
 * @property {string} batch_id
 * @property {number} company_id
 * @property {Object[]} data
 * @property {string} template_tag
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
 * @typedef ProductBulkAssets
 * @property {string} url
 * @property {number} [company_id]
 * @property {Object} user
 */

/**
 * @typedef UserCommon
 * @property {number} [company_id]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef Items
 * @property {string} [tracking_url]
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {string[]} [failed_records]
 * @property {string} [file_path]
 * @property {number} [retry]
 * @property {number} [company_id]
 * @property {string} [stage]
 * @property {UserCommon} [created_by]
 * @property {number} [total]
 * @property {string} [modified_on]
 * @property {UserCommon} [modified_by]
 * @property {string[]} [cancelled_records]
 * @property {number} [failed]
 * @property {string} [created_on]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [item_id]
 * @property {number} [company_id]
 * @property {string} [size]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {boolean} [success]
 * @property {ProductSizeDeleteDataResponse} [data]
 */

/**
 * @typedef ItemQuery
 * @property {number} [brand_uid]
 * @property {number} [uid]
 * @property {string} [item_code]
 */

/**
 * @typedef SetSize
 * @property {number} pieces
 * @property {string} size
 */

/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */

/**
 * @typedef InventorySet
 * @property {string} [name]
 * @property {SizeDistribution} size_distribution
 * @property {number} [quantity]
 */

/**
 * @typedef GTIN
 * @property {string} gtin_value
 * @property {string} gtin_type
 * @property {boolean} [primary]
 */

/**
 * @typedef InvSize
 * @property {string} currency
 * @property {number} price_effective
 * @property {number} [item_height]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [price_transfer]
 * @property {number} [item_weight]
 * @property {string} size
 * @property {number} quantity
 * @property {boolean} [is_set]
 * @property {number} [item_length]
 * @property {string} store_code
 * @property {InventorySet} [set]
 * @property {number} [item_width]
 * @property {GTIN[]} identifiers
 * @property {number} [price]
 * @property {string} [expiration_date]
 */

/**
 * @typedef InventoryRequest
 * @property {ItemQuery} item
 * @property {number} company_id
 * @property {InvSize[]} sizes
 */

/**
 * @typedef InventoryResponse
 * @property {string} [currency]
 * @property {number} [sellable_quantity]
 * @property {number} [price_effective]
 * @property {number} [item_id]
 * @property {number} [price_transfer]
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {number} [quantity]
 * @property {Object} [store]
 * @property {string} [uid]
 * @property {string} [inventory_updated_on]
 * @property {Object} [identifiers]
 * @property {number} [price]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Trader1
 * @property {string} name
 * @property {string[]} address
 * @property {string} type
 */

/**
 * @typedef StoreMeta
 * @property {number} id
 */

/**
 * @typedef DimensionResponse
 * @property {number} length
 * @property {string} unit
 * @property {boolean} is_default
 * @property {number} width
 * @property {number} height
 */

/**
 * @typedef WeightResponse
 * @property {boolean} is_default
 * @property {number} shipping
 * @property {string} unit
 */

/**
 * @typedef ManufacturerResponse
 * @property {boolean} is_default
 * @property {string} name
 * @property {string} address
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef ReturnConfig1
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */

/**
 * @typedef PriceMeta
 * @property {string} currency
 * @property {number} effective
 * @property {string} [updated_at]
 * @property {Object} [tp_notes]
 * @property {number} marked
 * @property {number} transfer
 */

/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef InventorySellerResponse
 * @property {Object} [tax_identifier]
 * @property {boolean} [is_active]
 * @property {string} country_of_origin
 * @property {Trader1[]} [trader]
 * @property {StoreMeta} store
 * @property {DimensionResponse} dimension
 * @property {number} total_quantity
 * @property {boolean} [is_set]
 * @property {string} [added_on_store]
 * @property {InventorySet} [set]
 * @property {Object} [raw_meta]
 * @property {number} item_id
 * @property {boolean} fragile
 * @property {WeightResponse} weight
 * @property {string} seller_identifier
 * @property {ManufacturerResponse} manufacturer
 * @property {CompanyMeta} company
 * @property {string} fynd_article_code
 * @property {boolean} [track_inventory]
 * @property {string} [expiration_date]
 * @property {Object} [meta]
 * @property {ReturnConfig1} [return_config]
 * @property {string} fynd_item_code
 * @property {string} size
 * @property {string} [stage]
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [modified_by]
 * @property {BrandMeta} brand
 * @property {Object} [_custom_json]
 * @property {PriceMeta} price
 * @property {Object} identifier
 * @property {string[]} [tags]
 * @property {string} uid
 * @property {Quantities} [quantities]
 * @property {Object} [fynd_meta]
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {string[]} [failed_records]
 * @property {string} [file_path]
 * @property {string} [stage]
 * @property {Object} [created_by]
 * @property {number} [total]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string[]} [cancelled_records]
 * @property {number} [failed]
 * @property {string} [created_on]
 */

/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} [currency]
 * @property {number} [price_effective]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} seller_identifier
 * @property {number} [quantity]
 * @property {number} [total_quantity]
 * @property {string[]} [tags]
 * @property {string} store_code
 * @property {number} [price_marked]
 * @property {number} [price]
 * @property {string} [expiration_date]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {string} batch_id
 * @property {number} company_id
 * @property {InventoryJobPayload[]} sizes
 * @property {Object} [user]
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [brand]
 * @property {string} [type]
 * @property {number[]} [store]
 */

/**
 * @typedef InventoryExportResponse
 * @property {string} task_id
 * @property {Object} [request_params]
 * @property {number} seller_id
 * @property {string} [trigger_on]
 * @property {string} [status]
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [url]
 * @property {string} task_id
 * @property {Object} [request_params]
 * @property {number} seller_id
 * @property {string} [completed_on]
 * @property {string} [trigger_on]
 * @property {string} [status]
 */

/**
 * @typedef FilerList
 * @property {string} [display]
 * @property {string} [value]
 */

/**
 * @typedef InventoryConfig
 * @property {FilerList[]} [data]
 * @property {boolean} [multivalues]
 */

/**
 * @typedef InventoryPayload
 * @property {number} store_id
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 * @property {number} [total_quantity]
 * @property {string[]} [tags]
 * @property {number} [price_marked]
 * @property {string} [expiration_date]
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {number} company_id
 * @property {Object} [meta]
 * @property {InventoryPayload[]} [payload]
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} message
 * @property {string} [errors]
 */

/**
 * @typedef InventoryResponseItem
 * @property {InventoryPayload} [data]
 * @property {InventoryFailedReason} [reason]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {string} message
 * @property {InventoryResponseItem[]} [items]
 */

/**
 * @typedef HsnUpsert
 * @property {number} tax1
 * @property {boolean} [tax_on_esp]
 * @property {boolean} tax_on_mrp
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {number} threshold1
 * @property {string} hsn_code
 * @property {string} hs2_code
 * @property {number} [tax2]
 * @property {number} [uid]
 * @property {number} [threshold2]
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [tax1]
 * @property {boolean} [tax_on_esp]
 * @property {boolean} [tax_on_mrp]
 * @property {string} [id]
 * @property {number} [company_id]
 * @property {number} [threshold1]
 * @property {string} [hsn_code]
 * @property {string} [hs2_code]
 * @property {string} [modified_on]
 * @property {number} [tax2]
 * @property {number} [threshold2]
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef PageResponse
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {number} [size]
 * @property {string} [current]
 * @property {boolean} [has_previous]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {HsnCodesObject[]} [items]
 * @property {PageResponse} [page]
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
 * @property {number} rate
 * @property {number} threshold
 * @property {number} [cess]
 * @property {string} effective_date
 */

/**
 * @typedef HSNDataInsertV2
 * @property {TaxSlab[]} taxes
 * @property {string} reporting_hsn
 * @property {Object} [created_by]
 * @property {string} hsn_code
 * @property {string} description
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} country_code
 * @property {string} type
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef BrandItem
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {string[]} [departments]
 * @property {string} [discount]
 */

/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */

/**
 * @typedef Department
 * @property {string} [slug]
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {number} [priority_order]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef ThirdLevelChild
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Object[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef SecondLevelChild
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef Child
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CategoryItems
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Child[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {CategoryItems[]} [items]
 * @property {string} [department]
 */

/**
 * @typedef DepartmentIdentifier
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef CategoryListingResponse
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */

/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductListingDetail[]} [items]
 * @property {Object} [operators]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} page
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef ProductDetail
 * @property {Object} [promo_meta]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string[]} [highlights]
 * @property {string} [short_description]
 * @property {string} [image_nature]
 * @property {string} slug
 * @property {string} [description]
 * @property {Object} [teaser_tag]
 * @property {string} [item_code]
 * @property {ProductBrand} [brand]
 * @property {string[]} [tryouts]
 * @property {boolean} [has_variant]
 * @property {string} [product_online_date]
 * @property {Media1[]} [medias]
 * @property {string[]} [similars]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [item_type]
 * @property {string} [color]
 * @property {number} [rating_count]
 * @property {number} [uid]
 * @property {number} [rating]
 * @property {string} [type]
 */

/**
 * @typedef InventoryPage
 * @property {number} item_total
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {string} [next_id]
 * @property {string} type
 */

/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [enabled]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [contact]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [country]
 * @property {string} [address_type]
 * @property {number} [latitude]
 * @property {string} [landmark]
 * @property {number} [pincode]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [address1]
 * @property {string} [country_code]
 * @property {number} [longitude]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [contact]
 */

/**
 * @typedef GetCompanySerializer
 * @property {string} [business_type]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {UserSerializer2} [created_by]
 * @property {string} [name]
 * @property {string} [company_type]
 * @property {string} [modified_on]
 * @property {UserSerializer2} [modified_by]
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {UserSerializer2} [verified_by]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSerializer} [closing]
 * @property {LocationTimingSerializer} [opening]
 */

/**
 * @typedef Document
 * @property {string} [url]
 * @property {string} value
 * @property {string} [legal_name]
 * @property {string} type
 * @property {boolean} [verified]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [name]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [email]
 */

/**
 * @typedef GetLocationSerializer
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string[]} [notification_emails]
 * @property {string} [store_type]
 * @property {UserSerializer1} [verified_by]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} [verified_on]
 * @property {string} name
 * @property {string} phone_number
 * @property {GetCompanySerializer} [company]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Object} [warnings]
 * @property {Document[]} [documents]
 * @property {string} [stage]
 * @property {UserSerializer1} [created_by]
 * @property {string} [created_on]
 * @property {LocationIntegrationType} [integration_type]
 * @property {Object} [_custom_json]
 * @property {string} display_name
 * @property {GetAddressSerializer} address
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {UserSerializer1} [modified_by]
 * @property {string} code
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {LocationManagerSerializer} [manager]
 */

/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
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
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */

/**
 * @typedef ContactDetails
 * @property {SellerPhoneNumber[]} [phone]
 * @property {string[]} [emails]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
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
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string[]} [notification_emails]
 * @property {string} [name]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {UserSerializer} [verified_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {ContactDetails} [contact_details]
 * @property {string} [business_info]
 * @property {string} [created_on]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {UserSerializer} [created_by]
 * @property {string} [modified_on]
 * @property {BusinessDetails} [business_details]
 * @property {UserSerializer} [modified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 * @property {string} [mode]
 * @property {string} business_type
 * @property {boolean} [franchise_enabled]
 * @property {Document[]} [documents]
 * @property {string} company_type
 * @property {number} uid
 * @property {string} [stage]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} address1
 * @property {string} [landmark]
 * @property {string} city
 * @property {string} state
 * @property {number} latitude
 * @property {string} country
 * @property {string} [address2]
 * @property {number} longitude
 * @property {string} address_type
 * @property {string} [country_code]
 * @property {number} pincode
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */

/**
 * @typedef UpdateCompany
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {ContactDetails} [contact_details]
 * @property {Object} [_custom_json]
 * @property {Document[]} [documents]
 * @property {string} [company_type]
 * @property {string[]} [notification_emails]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {Object} [warnings]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {boolean} [franchise_enabled]
 * @property {string} [business_type]
 * @property {BusinessDetails} [business_details]
 * @property {string} [business_info]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */

/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store]
 * @property {number} [uid]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [brand]
 * @property {string} [stage]
 * @property {DocumentsObj} [product]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {Object} [_locale_language]
 * @property {string} name
 * @property {UserSerializer} [verified_by]
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {UserSerializer} [created_by]
 * @property {string} [modified_on]
 * @property {string} [logo]
 * @property {UserSerializer} [modified_by]
 * @property {string} [slug_key]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 * @property {string} [mode]
 * @property {Object} [warnings]
 * @property {BrandBannerSerializer} [banner]
 * @property {Object} [_custom_json]
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 * @property {string} [stage]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {string[]} [synonyms]
 * @property {string} [description]
 * @property {string} name
 * @property {number} [uid]
 * @property {string} [brand_tier]
 * @property {number} [company_id]
 * @property {string} logo
 * @property {BrandBannerSerializer} [banner]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} url
 * @property {string} name
 */

/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */

/**
 * @typedef CompanySerializer
 * @property {GetAddressSerializer[]} [addresses]
 * @property {Object} [_custom_json]
 * @property {string} [created_on]
 * @property {string} company_type
 * @property {string[]} [notification_emails]
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [created_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {CompanyDetails} [details]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} business_type
 * @property {string[]} [market_channels]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {string} [created_on]
 * @property {CompanySerializer} [company]
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [created_by]
 * @property {string} [modified_on]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [reject_reason]
 * @property {Object} [warnings]
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number[]} brands
 * @property {number} [uid]
 * @property {number} company
 */

/**
 * @typedef LocationSerializer
 * @property {string} code
 * @property {GetAddressSerializer} address
 * @property {Object} [_custom_json]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {number} company
 * @property {Document[]} [documents]
 * @property {string} [store_type]
 * @property {string[]} [notification_emails]
 * @property {string} name
 * @property {number} [uid]
 * @property {Object} [warnings]
 * @property {string} [stage]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {LocationManagerSerializer} [manager]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} display_name
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */

/**
 * @typedef FailedResponse
 * @property {string} message
 */

/**
 * @typedef CDN
 * @property {string} url
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
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ErrorRes
 * @property {string} [message]
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
 * @property {GStore[]} [gstores]
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
 * @property {string} integration
 * @property {Object} [integration_data]
 * @property {string} [company_name]
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
 * @property {string} integration
 * @property {string} company_name
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
 * @property {Object} [mapping]
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
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [apply]
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [title]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [description]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef RuleDefinition
 * @property {string[]} [scope]
 * @property {string} type
 * @property {string} calculate_on
 * @property {string} value_type
 * @property {string} applicable_on
 * @property {boolean} [is_exact]
 * @property {string} [currency_code]
 * @property {boolean} [auto_apply]
 */

/**
 * @typedef Validation
 * @property {string} [user_registered_after]
 * @property {string[]} [app_id]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef State
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 */

/**
 * @typedef Rule
 * @property {number} [key]
 * @property {number} [value]
 * @property {number} [max]
 * @property {number} [discount_qty]
 * @property {number} [min]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [total]
 * @property {number} [user]
 * @property {number} [app]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [remaining]
 * @property {UsesRemaining} [maximum]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [networks]
 * @property {string[]} [codes]
 * @property {string[]} [types]
 * @property {PaymentAllowValue} [uses]
 */

/**
 * @typedef Restrictions
 * @property {PostOrder} [post_order]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {boolean} [coupon_allowed]
 * @property {number[]} [ordering_stores]
 * @property {PriceRange} [price_range]
 * @property {UsesRestriction} [uses]
 * @property {number[]} [user_groups]
 * @property {Object} [payments]
 * @property {string[]} [platforms]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */

/**
 * @typedef CouponSchedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 * @property {string} [start]
 */

/**
 * @typedef Identifier
 * @property {number[]} [company_id]
 * @property {string[]} [email_domain]
 * @property {number[]} [item_id]
 * @property {string[]} [user_id]
 * @property {string[]} [article_id]
 * @property {number[]} [category_id]
 * @property {number[]} [store_id]
 * @property {number[]} [brand_id]
 * @property {string[]} [collection_id]
 */

/**
 * @typedef CouponAdd
 * @property {DisplayMeta} display_meta
 * @property {CouponAuthor} [author]
 * @property {Ownership} ownership
 * @property {string} code
 * @property {RuleDefinition} rule_definition
 * @property {Validation} [validation]
 * @property {string} type_slug
 * @property {State} [state]
 * @property {Rule[]} rule
 * @property {Validity} validity
 * @property {Restrictions} [restrictions]
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponAction} [action]
 * @property {CouponSchedule} [_schedule]
 * @property {Identifier} identifiers
 * @property {string[]} [tags]
 */

/**
 * @typedef CouponsResponse
 * @property {CouponAdd} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SuccessMessage
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef OperationErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef CouponUpdate
 * @property {DisplayMeta} display_meta
 * @property {CouponAuthor} [author]
 * @property {Ownership} ownership
 * @property {string} code
 * @property {RuleDefinition} rule_definition
 * @property {Validation} [validation]
 * @property {string} type_slug
 * @property {State} [state]
 * @property {Rule[]} rule
 * @property {Validity} validity
 * @property {Restrictions} [restrictions]
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponAction} [action]
 * @property {CouponSchedule} [_schedule]
 * @property {Identifier} identifiers
 * @property {string[]} [tags]
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [offer_text]
 * @property {string} [name]
 * @property {string} [description]
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef CompareObject
 * @property {number} [less_than]
 * @property {number} [greater_than_equals]
 * @property {number} [equals]
 * @property {number} [less_than_equals]
 * @property {number} [greater_than]
 */

/**
 * @typedef ItemCriteria
 * @property {string[]} [item_size]
 * @property {boolean} [all_items]
 * @property {number[]} [item_exclude_company]
 * @property {CompareObject} [cart_total]
 * @property {CompareObject} [cart_quantity]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_store]
 * @property {number[]} [item_id]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_category]
 * @property {number[]} [item_company]
 * @property {string[]} [buy_rules]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_exclude_category]
 */

/**
 * @typedef PromotionSchedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 * @property {boolean} published
 * @property {string} start
 */

/**
 * @typedef DiscountOffer
 * @property {number} [max_discount_amount]
 * @property {string} [code]
 * @property {number} [discount_percentage]
 * @property {number} [discount_price]
 * @property {number} [max_offer_quantity]
 * @property {number} [discount_amount]
 * @property {number} [min_offer_quantity]
 */

/**
 * @typedef DiscountRule
 * @property {ItemCriteria} item_criteria
 * @property {DiscountOffer} offer
 * @property {string} buy_condition
 * @property {string} discount_type
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef UsesRemaining1
 * @property {number} [user]
 * @property {number} [total]
 */

/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [remaining]
 * @property {UsesRemaining1} [maximum]
 */

/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */

/**
 * @typedef PromotionPaymentModes
 * @property {string[]} [codes]
 * @property {PaymentAllowValue1} [uses]
 * @property {string} type
 */

/**
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef Restrictions1
 * @property {PostOrder1} [post_order]
 * @property {boolean} [anonymous_users]
 * @property {UsesRestriction1} uses
 * @property {number[]} [user_groups]
 * @property {string[]} [user_id]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {number} [order_quantity]
 * @property {string[]} [platforms]
 * @property {UserRegistered} [user_registered]
 */

/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
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
 * @typedef PromotionDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef PromotionListItem
 * @property {DisplayMeta1} display_meta
 * @property {PromotionAuthor} [author]
 * @property {string} [code]
 * @property {Object} [_custom_json]
 * @property {string} [apply_exclusive]
 * @property {boolean} [apply_all_discount]
 * @property {Object} buy_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {string} mode
 * @property {string} [calculate_on]
 * @property {DiscountRule[]} discount_rules
 * @property {string} promotion_type
 * @property {Restrictions1} [restrictions]
 * @property {string} [currency]
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {string} promo_group
 * @property {Visibility} [visiblility]
 * @property {number} [apply_priority]
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionDateMeta} [date_meta]
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {DisplayMeta1} display_meta
 * @property {PromotionAuthor} [author]
 * @property {string} [code]
 * @property {Object} [_custom_json]
 * @property {string} [apply_exclusive]
 * @property {boolean} [apply_all_discount]
 * @property {Object} buy_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {string} mode
 * @property {string} [calculate_on]
 * @property {DiscountRule[]} discount_rules
 * @property {string} promotion_type
 * @property {Restrictions1} [restrictions]
 * @property {string} [currency]
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {string} promo_group
 * @property {Visibility} [visiblility]
 * @property {number} [apply_priority]
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionDateMeta} [date_meta]
 */

/**
 * @typedef PromotionUpdate
 * @property {DisplayMeta1} display_meta
 * @property {PromotionAuthor} [author]
 * @property {string} [code]
 * @property {Object} [_custom_json]
 * @property {string} [apply_exclusive]
 * @property {boolean} [apply_all_discount]
 * @property {Object} buy_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {string} mode
 * @property {string} [calculate_on]
 * @property {DiscountRule[]} discount_rules
 * @property {string} promotion_type
 * @property {Restrictions1} [restrictions]
 * @property {string} [currency]
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {string} promo_group
 * @property {Visibility} [visiblility]
 * @property {number} [apply_priority]
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionDateMeta} [date_meta]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef CartItem
 * @property {number} [quantity]
 * @property {string} product_id
 * @property {string} size
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [key]
 * @property {string[]} [message]
 * @property {string} [display]
 * @property {number} [value]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 */

/**
 * @typedef RawBreakup
 * @property {number} [discount]
 * @property {number} [delivery_charge]
 * @property {number} [gst_charges]
 * @property {number} [coupon]
 * @property {number} [you_saved]
 * @property {number} [cod_charge]
 * @property {number} [vog]
 * @property {number} [mrp_total]
 * @property {number} [subtotal]
 * @property {number} [convenience_fee]
 * @property {number} [fynd_cash]
 * @property {number} [total]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [code]
 * @property {boolean} [is_applied]
 * @property {string} [type]
 * @property {string} [message]
 * @property {number} [value]
 * @property {string} [uid]
 */

/**
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 * @property {string} [description]
 * @property {number} [total]
 */

/**
 * @typedef CartBreakup
 * @property {DisplayBreakup[]} [display]
 * @property {RawBreakup} [raw]
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [deliverable]
 * @property {boolean} [out_of_stock]
 * @property {number} [other_store_quantity]
 * @property {string[]} [sizes]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef ProductPrice
 * @property {number} [selling]
 * @property {number} [add_on]
 * @property {number} [marked]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {string} [currency_code]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef BasePrice
 * @property {number} [marked]
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ProductArticle
 * @property {ArticlePriceInfo} [price]
 * @property {string} [size]
 * @property {string} [type]
 * @property {number} [quantity]
 * @property {Object} [extra_meta]
 * @property {Object} [identifier]
 * @property {string} [uid]
 * @property {string} [seller_identifier]
 * @property {BaseInfo} [seller]
 * @property {BaseInfo} [store]
 */

/**
 * @typedef AppliedPromotion
 * @property {number} [article_quantity]
 * @property {boolean} [mrp_promotion]
 * @property {string} [offer_text]
 * @property {string} [promo_id]
 * @property {string} [promotion_type]
 * @property {number} [amount]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef Tags
 * @property {Object} [tags]
 */

/**
 * @typedef ProductImage
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
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
 * @property {string} [slug]
 * @property {string} [name]
 * @property {BaseInfo} [brand]
 * @property {Tags} [teaser_tag]
 * @property {Object} [_custom_json]
 * @property {string} [type]
 * @property {ProductImage[]} [images]
 * @property {number} [uid]
 * @property {CategoryInfo[]} [categories]
 * @property {ProductAction} [action]
 * @property {string[]} [tags]
 */

/**
 * @typedef CartProductInfo
 * @property {boolean} [is_set]
 * @property {string} [key]
 * @property {ProductAvailability} [availability]
 * @property {ProductPriceInfo} [price]
 * @property {string} [discount]
 * @property {PromoMeta} [promo_meta]
 * @property {ProductArticle} [article]
 * @property {string} [message]
 * @property {number} [quantity]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {Object} [coupon]
 * @property {string} [coupon_message]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {Object} [bulk_offer]
 * @property {CartProductIdentifer} identifiers
 * @property {CartProduct} [product]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {Object} [errors]
 * @property {string} [message]
 */

/**
 * @typedef ShippingAddress
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [landmark]
 * @property {string} [address_type]
 * @property {string} area_code
 * @property {string} [country]
 * @property {string} [state]
 * @property {number} [pincode]
 * @property {Object} [meta]
 * @property {string} [area]
 * @property {number} [phone]
 * @property {string} [city]
 * @property {string} [country_code]
 * @property {string} [area_code_slug]
 * @property {string} [address]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem} [cart_items]
 * @property {ShippingAddress} shipping_address
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [min]
 * @property {string} [max]
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef OpenApiFiles
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item]
 * @property {string} [group_id]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [order_id]
 * @property {Object} [extra_meta]
 * @property {string} [current_status]
 * @property {string} [payment_id]
 * @property {string} [payment_gateway]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} mode
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {number} amount
 * @property {string} [name]
 */

/**
 * @typedef OpenApiOrderItem
 * @property {string} size
 * @property {number} [employee_discount]
 * @property {number} coupon_effective_discount
 * @property {number} cashback_applied
 * @property {number} discount
 * @property {OpenApiFiles[]} [files]
 * @property {Object} [extra_meta]
 * @property {number} [quantity]
 * @property {number} price_marked
 * @property {number} amount_paid
 * @property {number} [loyalty_discount]
 * @property {number} product_id
 * @property {CartItemMeta} [meta]
 * @property {number} price_effective
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} delivery_charges
 * @property {number} cod_charges
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [affiliate_order_id]
 * @property {number} cashback_applied
 * @property {string} [coupon]
 * @property {number} [loyalty_discount]
 * @property {string} coupon_code
 * @property {number} cart_value
 * @property {Object} [employee_discount]
 * @property {number} cod_charges
 * @property {string} [currency_code]
 * @property {ShippingAddress} [shipping_address]
 * @property {OpenApiOrderItem[]} cart_items
 * @property {OpenApiFiles[]} [files]
 * @property {string} [order_id]
 * @property {string} [payment_mode]
 * @property {number} coupon_value
 * @property {number} delivery_charges
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {ShippingAddress} billing_address
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} order_id
 * @property {boolean} [success]
 * @property {string} [order_ref_id]
 * @property {string} [message]
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
 * @typedef E
 * @property {Object} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
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
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef HistoryPretty
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
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
 * @typedef HistoryRes
 * @property {HistoryPretty[]} [items]
 * @property {Page} [page]
 * @property {number} [points]
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
 * @typedef Points
 * @property {number} [available]
 */

/**
 * @typedef Referral
 * @property {string} [code]
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
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */

/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */

/**
 * @typedef Schedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef ShareMessages
 * @property {string} [email]
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
 * @typedef StatGroup
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
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
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */

/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */

/**
 * @typedef UserDataInfo
 * @property {string} [mobile]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [avis_user_id]
 * @property {string} [gender]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [email]
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} logo
 * @property {string} type
 */

/**
 * @typedef GSTDetailsData
 * @property {number} tax_collected_at_source
 * @property {number} gst_fee
 * @property {number} value_of_good
 * @property {number} brand_calculated_amount
 * @property {string} gstin_code
 */

/**
 * @typedef PlatformItem
 * @property {string[]} [images]
 * @property {string} [color]
 * @property {string} [size]
 * @property {boolean} [can_cancel]
 * @property {string} [code]
 * @property {string[]} [image]
 * @property {number} [department_id]
 * @property {boolean} [can_return]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [l3_category_name]
 * @property {string[]} [l1_category]
 * @property {number} [l3_category]
 */

/**
 * @typedef Prices
 * @property {number} [refund_amount]
 * @property {number} [promotion_effective_discount]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [fynd_credits]
 * @property {number} [coupon_value]
 * @property {number} [tax_collected_at_source]
 * @property {number} [cashback]
 * @property {number} [amount_paid]
 * @property {number} [refund_credit]
 * @property {number} [price_effective]
 * @property {number} [cashback_applied]
 * @property {number} [value_of_good]
 * @property {number} [cod_charges]
 * @property {number} [delivery_charge]
 * @property {number} [price_marked]
 * @property {number} [discount]
 */

/**
 * @typedef BagUnit
 * @property {number} bag_id
 * @property {number} total_shipment_bags
 * @property {number} item_quantity
 * @property {string} shipment_id
 * @property {boolean} [can_cancel]
 * @property {GSTDetailsData} [gst]
 * @property {string} ordering_channel
 * @property {boolean} [can_return]
 * @property {Object} status
 * @property {PlatformItem} [item]
 * @property {Prices} [prices]
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} id
 * @property {string} code
 */

/**
 * @typedef ShipmentStatus
 * @property {string} actual_status
 * @property {string} ops_status
 * @property {string} hex_code
 * @property {string} status
 * @property {string} title
 */

/**
 * @typedef ShipmentItem
 * @property {number} total_shipments_in_order
 * @property {number} total_bags_count
 * @property {string} created_at
 * @property {UserDataInfo} [user]
 * @property {string} fulfilling_centre
 * @property {Object} [payment_methods]
 * @property {Object} [application]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {string} id
 * @property {Object} [sla]
 * @property {BagUnit[]} [bags]
 * @property {Object} [channel]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {Prices} [prices]
 * @property {ShipmentStatus} [shipment_status]
 * @property {number} shipment_created_at
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [value]
 * @property {string} [name]
 * @property {string} text
 */

/**
 * @typedef FiltersInfo
 * @property {string} value
 * @property {string} type
 * @property {FilterInfoOption[]} [options]
 * @property {string} text
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {ShipmentItem[]} [items]
 * @property {Object} [applied_filters]
 * @property {Object} [page]
 * @property {FiltersInfo[]} [filters]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef UserDetailsData
 * @property {string} state
 * @property {string} country
 * @property {string} pincode
 * @property {string} address
 * @property {string} name
 * @property {string} phone
 * @property {string} city
 * @property {string} email
 */

/**
 * @typedef BagStatusHistory
 * @property {Object[]} [reasons]
 * @property {number} bag_id
 * @property {boolean} [forward]
 * @property {string} shipment_id
 * @property {boolean} [kafka_sync]
 * @property {BagStateMapper} bag_state_mapper
 * @property {number} store_id
 * @property {string} [state_type]
 * @property {string} [updated_at]
 * @property {number} state_id
 * @property {boolean} [app_display_name]
 * @property {boolean} [display_name]
 * @property {string} status
 * @property {string} [delivery_awb_number]
 * @property {number} [delivery_partner_id]
 * @property {number} bsh_id
 * @property {string} created_at
 */

/**
 * @typedef OrderDetailsData
 * @property {string} fynd_order_id
 * @property {string} [order_value]
 * @property {string} [source]
 * @property {string} [ordering_channel]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [affiliate_id]
 * @property {string} [cod_charges]
 * @property {Object} [tax_details]
 * @property {string} [order_date]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} mode
 * @property {string} [logo]
 * @property {string} [source]
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
 * @property {number} [value]
 * @property {string} [type]
 */

/**
 * @typedef AppliedPromos
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_type]
 * @property {number} [amount]
 * @property {DiscountRules[]} [discount_rules]
 * @property {string} [promo_id]
 * @property {number} [article_quantity]
 * @property {string} [promotion_name]
 * @property {boolean} [mrp_promotion]
 */

/**
 * @typedef OrderBrandName
 * @property {number} created_on
 * @property {number} [modified_on]
 * @property {string} brand_name
 * @property {number} id
 * @property {string} company
 * @property {string} logo
 */

/**
 * @typedef FinancialBreakup
 * @property {number} coupon_value
 * @property {string} item_name
 * @property {number} delivery_charge
 * @property {string} gst_tag
 * @property {number} [amount_paid_roundoff]
 * @property {number} gst_tax_percentage
 * @property {string} size
 * @property {number} [tax_collected_at_source]
 * @property {string} gst_fee
 * @property {number} amount_paid
 * @property {string} hsn_code
 * @property {number} cashback_applied
 * @property {number} fynd_credits
 * @property {number} transfer_price
 * @property {Object} pm_price_split
 * @property {number} discount
 * @property {boolean} added_to_fynd_cash
 * @property {number} cashback
 * @property {number} price_marked
 * @property {number} coupon_effective_discount
 * @property {number} total_units
 * @property {number} refund_credit
 * @property {number} price_effective
 * @property {number} value_of_good
 * @property {number} brand_calculated_amount
 * @property {number} cod_charges
 * @property {number} promotion_effective_discount
 * @property {Identifier} identifiers
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [return_config]
 * @property {Object} [identifiers]
 * @property {string} [uid]
 */

/**
 * @typedef BagConfigs
 * @property {boolean} allow_force_return
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_active
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 */

/**
 * @typedef BagGST
 * @property {string} [gst_tag]
 * @property {number} [gst_tax_percentage]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_fee]
 * @property {string} [hsn_code]
 * @property {number} [value_of_good]
 * @property {number} [brand_calculated_amount]
 * @property {string} [gstin_code]
 */

/**
 * @typedef OrderBags
 * @property {Object} [parent_promo_bags]
 * @property {boolean} [can_return]
 * @property {string} [seller_identifier]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {Prices} [prices]
 * @property {OrderBrandName} [brand]
 * @property {number} [quantity]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {PlatformItem} [item]
 * @property {number} bag_id
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {string} [current_status]
 * @property {OrderBagArticle} [article]
 * @property {BagConfigs} [bag_configs]
 * @property {string} [display_name]
 * @property {BagGST} [gst_details]
 * @property {number} [line_number]
 * @property {string} [identifier]
 * @property {boolean} [can_cancel]
 * @property {string} [entity_type]
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [created_at]
 * @property {string} [shipment_id]
 * @property {number} [id]
 * @property {string} [status]
 * @property {number[]} [bag_list]
 */

/**
 * @typedef FulfillingStore
 * @property {string} state
 * @property {string} fulfillment_channel
 * @property {string} country
 * @property {string} pincode
 * @property {string} contact_person
 * @property {string} address
 * @property {string} code
 * @property {string} id
 * @property {string} store_name
 * @property {string} phone
 * @property {string} city
 * @property {Object} meta
 */

/**
 * @typedef TrackingList
 * @property {string} text
 * @property {boolean} [is_passed]
 * @property {string} status
 * @property {string} [time]
 * @property {boolean} [is_current]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [gst_tag]
 * @property {string} [awb_no]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [eway_bill_id]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [track_url]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {number} [total_items]
 * @property {string} [enable_dp_tracking]
 * @property {Object[]} [forward_order_status]
 * @property {string} [packaging_type]
 * @property {boolean} [go_green]
 * @property {string} [replacement_details]
 * @property {Object} [delivery_slot]
 * @property {UserDetailsData} [billing_details]
 * @property {boolean} [can_return]
 * @property {Object} current_shipment_status
 * @property {boolean} [beneficiary_details]
 * @property {number} [shipment_quantity]
 * @property {Prices} [prices]
 * @property {UserDetailsData} [delivery_details]
 * @property {Object} [user_info]
 * @property {boolean} [enable_tracking]
 * @property {string} credit_note_id
 * @property {Object} [bank_data]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [is_fynd_store]
 * @property {string} [user_agent]
 * @property {string} order_type
 * @property {OrderDetailsData} [order]
 * @property {Object} invoice
 * @property {number} status_progress
 * @property {string} lock_status
 * @property {string} [mid]
 * @property {string} tracking_url
 * @property {Object[]} items
 * @property {string} [due_date]
 * @property {boolean} is_invoiced
 * @property {Object} [coupon]
 * @property {string} [priority_text]
 * @property {Object} order_status
 * @property {string} [is_pdsr]
 * @property {string[]} [shipment_images]
 * @property {string} [payment_mode]
 * @property {ShipmentPayments} [payments]
 * @property {string} affiliate_shipment_id
 * @property {Object[]} [custom_meta]
 * @property {OrderBags[]} [bags]
 * @property {Object} company
 * @property {ShipmentStatusData} [status]
 * @property {string} [refund_text]
 * @property {string} [kirana_store_id]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} [vertical]
 * @property {GSTDetailsData} [gst_details]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [picked_date]
 * @property {Object} ordering_store
 * @property {Object} [refund_details]
 * @property {string} [shipment_status]
 * @property {string} [pay_button]
 * @property {Object[]} delivery_status
 * @property {string} [secured_delivery_flag]
 * @property {Object[]} [forward_shipment_status]
 * @property {boolean} is_packaging_order
 * @property {DPDetailsData} [dp_details]
 * @property {string} shipment_id
 * @property {boolean} is_fynd_coupon
 * @property {string} user_id
 * @property {Object} [escalation]
 * @property {boolean} platform_logo
 * @property {number} [total_bags]
 * @property {boolean} is_not_fynd_source
 * @property {string[]} [child_nodes]
 * @property {string} [journey_type]
 * @property {string} email_id
 * @property {boolean} [can_cancel]
 * @property {Object[]} [forward_tracking_list]
 * @property {string} [order_created_time]
 * @property {Object} fyndstore_emp
 * @property {string} [operational_status]
 * @property {string} can_break
 */

/**
 * @typedef OrderDict
 * @property {string} fynd_order_id
 * @property {number} shipment_count
 * @property {string} order_date
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {boolean} success
 * @property {OrderDict} [order]
 * @property {PlatformShipment[]} [shipments]
 * @property {Object[]} [custom_meta]
 */

/**
 * @typedef SubLane
 * @property {string} [value]
 * @property {number} [total_items]
 * @property {string} [text]
 * @property {number} [index]
 * @property {Object[]} [actions]
 */

/**
 * @typedef SuperLane
 * @property {string} value
 * @property {number} [total_items]
 * @property {SubLane[]} [options]
 * @property {string} text
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef PlatformOrderItems
 * @property {number} [total_order_value]
 * @property {number} [order_value]
 * @property {string} [payment_mode]
 * @property {PlatformShipment[]} [shipments]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {PlatformChannel} [channel]
 * @property {string} [order_created_time]
 * @property {string} [order_id]
 * @property {Object} [meta]
 * @property {UserDataInfo} [user_info]
 */

/**
 * @typedef OrderListingResponse
 * @property {number} [total_count]
 * @property {Page} [page]
 * @property {string} [lane]
 * @property {string} [message]
 * @property {PlatformOrderItems[]} [items]
 * @property {boolean} [success]
 */

/**
 * @typedef MetricsCount
 * @property {number} value
 * @property {string} key
 * @property {Options[]} [options]
 * @property {string} text
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [shipment_type]
 * @property {string} [last_location_recieved_at]
 * @property {string} [updated_time]
 * @property {string} [account_name]
 * @property {string} [raw_status]
 * @property {string} [updated_at]
 * @property {string} [reason]
 * @property {string} [status]
 * @property {Object} [meta]
 * @property {string} [awb]
 */

/**
 * @typedef FiltersResponse
 * @property {Object[]} [advance]
 */

/**
 * @typedef Success
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef OmsReports
 * @property {string} [report_requested_at]
 * @property {string} [report_id]
 * @property {string} [s3_key]
 * @property {Object} [request_details]
 * @property {string} [report_type]
 * @property {string} [display_name]
 * @property {string} [status]
 * @property {string} [report_created_at]
 * @property {string} [report_name]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [company_id]
 * @property {string} [item_id]
 * @property {string} [article_id]
 * @property {string} [jio_code]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [message]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {string} [trace_id]
 * @property {Object[]} [data]
 * @property {string} [identifier]
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {boolean} [success]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} [invoice_status]
 * @property {Object} [data]
 * @property {string} [store_id]
 * @property {Object} [invoice]
 * @property {string} [company_id]
 * @property {string} [store_name]
 * @property {boolean} do_invoice_label_generated
 * @property {string} batch_id
 * @property {string} [store_code]
 * @property {Object} [label]
 */

/**
 * @typedef URL
 * @property {string} [url]
 */

/**
 * @typedef FileUploadResponse
 * @property {string} [url]
 * @property {number} [expiry]
 */

/**
 * @typedef FileResponse
 * @property {URL} [cdn]
 * @property {FileUploadResponse} [upload]
 * @property {string} [method]
 * @property {number} [size]
 * @property {string} [namespace]
 * @property {string[]} [tags]
 * @property {string} [operation]
 * @property {string} [file_name]
 * @property {string} [file_path]
 * @property {string} [content_type]
 */

/**
 * @typedef bulkListingData
 * @property {string} [store_name]
 * @property {string} [id]
 * @property {string} [batch_id]
 * @property {string} [user_name]
 * @property {number} [successful]
 * @property {Object[]} [successful_shipments]
 * @property {string} [uploaded_on]
 * @property {string} [store_code]
 * @property {number} [failed]
 * @property {string} [file_name]
 * @property {string} [status]
 * @property {string[]} [processing_shipments]
 * @property {number} [processing]
 * @property {string} [user_id]
 * @property {number} [store_id]
 * @property {number} [total]
 * @property {number} [company_id]
 * @property {string} [excel_url]
 * @property {Object[]} [failed_shipments]
 */

/**
 * @typedef BulkListingPage
 * @property {boolean} [has_previous]
 * @property {number} [size]
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [total]
 * @property {boolean} [has_next]
 */

/**
 * @typedef BulkListingResponse
 * @property {bulkListingData[]} [data]
 * @property {boolean} [success]
 * @property {string} [error]
 * @property {BulkListingPage} [page]
 */

/**
 * @typedef DateRange
 * @property {string} [to_date]
 * @property {string} [from_date]
 */

/**
 * @typedef ManifestFilter
 * @property {string} [sales_channels]
 * @property {string} [dp_name]
 * @property {DateRange} [date_range]
 * @property {string} [dp_ids]
 * @property {string} [sales_channel_name]
 * @property {string} [store_name]
 * @property {string} [lane]
 * @property {string} [stores]
 */

/**
 * @typedef GeneratedManifestItem
 * @property {ManifestFilter} [filters]
 * @property {number} [company_id]
 * @property {string} [created_by]
 * @property {string} [manifest_id]
 * @property {string} [status]
 * @property {boolean} [is_active]
 * @property {string} [created_at]
 */

/**
 * @typedef ManifestPage
 * @property {boolean} [has_previous]
 * @property {string} [size]
 * @property {string} [type]
 * @property {string} [current]
 * @property {number} [total]
 * @property {boolean} [has_next]
 */

/**
 * @typedef GeneratedManifestResponse
 * @property {GeneratedManifestItem[]} [items]
 * @property {ManifestPage} [page]
 */

/**
 * @typedef ManifestDetailItem
 * @property {number} [item_qty]
 * @property {string} [shipment_id]
 * @property {string} [invoice_id]
 * @property {string} [order_id]
 * @property {string} [awb]
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
 * @property {ManifestFilter} [filters]
 * @property {number} [user_id]
 * @property {number} [company_id]
 * @property {number} [id]
 * @property {string} [created_by]
 * @property {string} [manifest_id]
 * @property {string} [status]
 * @property {number} [uid]
 * @property {ManifestDetailMeta} [meta]
 * @property {boolean} [is_active]
 * @property {string} [created_at]
 */

/**
 * @typedef ManifestDetailResponse
 * @property {ManifestDetailItem[]} [items]
 * @property {ManifestPage} [page]
 * @property {number} [additional_shipment_count]
 * @property {ManifestDetail[]} [manifest_details]
 */

/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */

/**
 * @typedef Reason
 * @property {string[]} [qc_type]
 * @property {number} [id]
 * @property {string} [display_name]
 * @property {QuestionSet[]} [question_set]
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
 * @property {boolean} [status]
 * @property {string} [message]
 */

/**
 * @typedef BulkActionDetailsDataField
 * @property {string[]} [successful_shipment_ids]
 * @property {string} [company_id]
 * @property {string} [batch_id]
 * @property {number} [processing_shipments_count]
 * @property {number} [failed_shipments_count]
 * @property {number} [total_shipments_count]
 * @property {number} [successful_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string} [user_id]
 * @property {string} [message]
 * @property {string[]} [failed_records]
 * @property {string[]} [error]
 * @property {boolean} [status]
 * @property {string} [uploaded_on]
 * @property {string} [success]
 * @property {string} [uploaded_by]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef Formatted
 * @property {string} [f_min]
 * @property {string} [f_max]
 */

/**
 * @typedef EInvoice
 * @property {string} [signed_invoice]
 * @property {string} [error_code]
 * @property {string} [error_message]
 * @property {string} [acknowledge_date]
 * @property {string} [irn]
 * @property {string} [signed_qr_code]
 * @property {number} [acknowledge_no]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [invoice]
 * @property {EInvoice} [credit_note]
 */

/**
 * @typedef BuyerDetails
 * @property {string} state
 * @property {number} pincode
 * @property {string} gstin
 * @property {string} address
 * @property {string} name
 * @property {string} [ajio_site_id]
 * @property {string} city
 */

/**
 * @typedef LockData
 * @property {boolean} [mto]
 * @property {string} [lock_message]
 * @property {boolean} [locked]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_max]
 * @property {string} [t_min]
 */

/**
 * @typedef ShipmentMeta
 * @property {DebugInfo} [debug_info]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [dp_sort_key]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {string} [return_affiliate_order_id]
 * @property {number} [return_store_node]
 * @property {Object} [return_details]
 * @property {Object} [external]
 * @property {Object} [ewaybill_info]
 * @property {Object} [dp_options]
 * @property {number} [shipment_volumetric_weight]
 * @property {Formatted} [formatted]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [po_number]
 * @property {string} [dp_id]
 * @property {string} [order_type]
 * @property {string} [dp_name]
 * @property {string} [return_awb_number]
 * @property {Object} [b2c_buyer_details]
 * @property {string} [store_invoice_updated_date]
 * @property {string} [due_date]
 * @property {number} [shipment_weight]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [packaging_name]
 * @property {string} [awb_number]
 * @property {string} [marketplace_store_id]
 * @property {number} weight
 * @property {LockData} [lock_data]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [box_type]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {string} [return_affiliate_shipment_id]
 * @property {boolean} same_store_available
 * @property {Object} [bag_weight]
 */

/**
 * @typedef PDFLinks
 * @property {string} [b2b]
 * @property {string} label_type
 * @property {string} [label_a6]
 * @property {string} [invoice_pos]
 * @property {string} [invoice_a4]
 * @property {string} [invoice]
 * @property {string} [label_pos]
 * @property {string} [po_invoice]
 * @property {string} [credit_note_url]
 * @property {string} invoice_type
 * @property {string} [invoice_a6]
 * @property {string} [label]
 * @property {string} [label_a4]
 */

/**
 * @typedef AffiliateMeta
 * @property {number} [quantity]
 * @property {string} [channel_shipment_id]
 * @property {string} [order_item_id]
 * @property {string} [box_type]
 * @property {string} [coupon_code]
 * @property {number} [employee_discount]
 * @property {number} [size_level_total_qty]
 * @property {string} [channel_order_id]
 * @property {string} [due_date]
 * @property {boolean} [is_priority]
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef AffiliateDetails
 * @property {ShipmentMeta} shipment_meta
 * @property {string} [company_affiliate_tag]
 * @property {PDFLinks} [pdf_links]
 * @property {string} affiliate_bag_id
 * @property {string} [ad_id]
 * @property {string} affiliate_shipment_id
 * @property {string} [affiliate_id]
 * @property {string} affiliate_order_id
 * @property {string} affiliate_store_id
 * @property {AffiliateMeta} affiliate_meta
 */

/**
 * @typedef Attributes
 * @property {string} [primary_color]
 * @property {string} [primary_material]
 * @property {string} [marketer_name]
 * @property {string[]} [gender]
 * @property {string} [marketer_address]
 * @property {string} [essential]
 * @property {string} [brand_name]
 * @property {string} [name]
 * @property {string} [primary_color_hex]
 */

/**
 * @typedef Item
 * @property {string} [gender]
 * @property {string[]} image
 * @property {boolean} [can_return]
 * @property {string} [webstore_product_url]
 * @property {string} slug_key
 * @property {string} brand
 * @property {string} size
 * @property {string} [code]
 * @property {number} [department_id]
 * @property {string} name
 * @property {string} [color]
 * @property {string} [last_updated_at]
 * @property {number} [l1_category_id]
 * @property {string[]} [l2_category]
 * @property {string} [l3_category_name]
 * @property {number} [l3_category]
 * @property {Object} [meta]
 * @property {number} [l2_category_id]
 * @property {number} item_id
 * @property {boolean} [can_cancel]
 * @property {string} [branch_url]
 * @property {Attributes} attributes
 * @property {string[]} [l1_category]
 * @property {number} brand_id
 */

/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_bag_id
 * @property {number} [employee_discount]
 * @property {number} [loyalty_discount]
 * @property {string} affiliate_order_id
 * @property {AffiliateMeta} affiliate_meta
 */

/**
 * @typedef Dimensions
 * @property {number} [height]
 * @property {string} [unit]
 * @property {number} [width]
 * @property {number} [length]
 * @property {boolean} [is_default]
 */

/**
 * @typedef Article
 * @property {Object} [a_set]
 * @property {ReturnConfig} [return_config]
 * @property {string} size
 * @property {boolean} [is_set]
 * @property {string} _id
 * @property {Object} [raw_meta]
 * @property {string} [code]
 * @property {Weight} [weight]
 * @property {Object} [esp_modified]
 * @property {string} seller_identifier
 * @property {string} uid
 * @property {Dimensions} [dimensions]
 * @property {Identifier} identifiers
 * @property {Object} [child_details]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} enable_tracking
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 */

/**
 * @typedef BagGSTDetails
 * @property {string} gst_tag
 * @property {string} cgst_gst_fee
 * @property {number} sgst_tax_percentage
 * @property {number} gst_tax_percentage
 * @property {number} igst_tax_percentage
 * @property {boolean} [is_default_hsn_code]
 * @property {number} tax_collected_at_source
 * @property {number} gst_fee
 * @property {string} sgst_gst_fee
 * @property {string} hsn_code
 * @property {number} value_of_good
 * @property {number} brand_calculated_amount
 * @property {string} [gstin_code]
 * @property {number} cgst_tax_percentage
 * @property {string} hsn_code_id
 * @property {string} igst_gst_fee
 */

/**
 * @typedef StoreAddress
 * @property {string} contact_person
 * @property {string} phone
 * @property {string} [version]
 * @property {string} address_type
 * @property {string} [address2]
 * @property {string} address_category
 * @property {string} created_at
 * @property {string} [landmark]
 * @property {string} state
 * @property {string} country
 * @property {number} pincode
 * @property {string} updated_at
 * @property {string} address1
 * @property {number} longitude
 * @property {string} city
 * @property {string} [email]
 * @property {string} country_code
 * @property {number} latitude
 * @property {string} [area]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [user]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [user]
 * @property {string} [password]
 * @property {string} [username]
 * @property {boolean} enabled
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef B2BPODetails
 * @property {string} [docker_number]
 * @property {number} [item_base_price]
 * @property {boolean} [partial_can_ret]
 * @property {number} [po_line_amount]
 * @property {number} [po_tax_amount]
 * @property {number} [total_gst_percentage]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {Object} [parent_promo_bags]
 * @property {number} b_id
 * @property {Object} [restore_promos]
 * @property {string} [seller_identifier]
 * @property {Object[]} [applied_promos]
 * @property {Prices} prices
 * @property {string} [order_integration_id]
 * @property {Brand} brand
 * @property {Object[]} [reasons]
 * @property {number} [quantity]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {number} [bag_update_time]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {BagStatusHistory[]} bag_status
 * @property {string} [b_type]
 * @property {Item} item
 * @property {number[]} [original_bag_list]
 * @property {boolean} [restore_coupon]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {FinancialBreakup[]} financial_breakup
 * @property {Article} article
 * @property {BagStatusHistory} current_status
 * @property {string[]} [tags]
 * @property {BagStatusHistory} current_operational_status
 * @property {string} [display_name]
 * @property {BagReturnableCancelableStatus} status
 * @property {BagGSTDetails} gst_details
 * @property {Store} [ordering_store]
 * @property {BagMeta} [meta]
 * @property {number} [line_number]
 * @property {string} [identifier]
 * @property {string} [shipment_id]
 * @property {Object} [qc_required]
 * @property {ArticleDetails} [article_details]
 * @property {Dates} [dates]
 * @property {string} journey_type
 * @property {number} [no_of_bags_order]
 * @property {string} [entity_type]
 * @property {string} [operational_status]
 */

/**
 * @typedef Page1
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
 * @property {string} page_type
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
 * @property {string} [shipment_id]
 * @property {number} [status]
 * @property {string} [message]
 * @property {string} [error]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef StoreReassign
 * @property {string} [set_id]
 * @property {string} [fynd_order_id]
 * @property {number} [bag_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [item_id]
 * @property {number} store_id
 * @property {string} [mongo_article_id]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_id]
 * @property {number[]} [reason_ids]
 */

/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Entities
 * @property {string} [affiliate_bag_id]
 * @property {string} [id]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} reason_text
 * @property {string} [affiliate_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action
 * @property {string} entity_type
 * @property {Entities[]} entities
 * @property {string} action_type
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef CheckResponse
 * @property {string} [shipment_id]
 * @property {OriginalFilter} [original_filter]
 * @property {string} [status]
 * @property {boolean} [is_bag_locked]
 * @property {string} [affiliate_shipment_id]
 * @property {boolean} [is_shipment_locked]
 * @property {boolean} [lock_status]
 * @property {Bags[]} [bags]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CheckResponse[]} [check_response]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [logo_url]
 * @property {number} [company_id]
 * @property {string} [platform_id]
 * @property {string} [description]
 * @property {string} [created_at]
 * @property {string} [to_datetime]
 * @property {string} [platform_name]
 * @property {number} id
 * @property {string} [from_datetime]
 * @property {string} [title]
 */

/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 */

/**
 * @typedef BaseResponse
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef Click2CallResponse
 * @property {string} call_id
 * @property {boolean} status
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters]
 */

/**
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {ProductsDataUpdates[]} [products]
 */

/**
 * @typedef Products
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {number} [line_number]
 */

/**
 * @typedef EntityReasonData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */

/**
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */

/**
 * @typedef ShipmentsRequest
 * @property {string} identifier
 * @property {DataUpdates} [data_updates]
 * @property {Products[]} [products]
 * @property {ReasonsData} [reasons]
 */

/**
 * @typedef StatuesRequest
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [exclude_bags_next_state]
 * @property {string} [status]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [lock_after_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 * @property {boolean} [force_transition]
 */

/**
 * @typedef ShipmentsResponse
 * @property {number} [status]
 * @property {Object} [final_state]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {string} identifier
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
 * @typedef AffiliateStoreIdMapping
 * @property {string} marketplace_store_id
 * @property {number} store_id
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */

/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} updated_at
 * @property {string} name
 * @property {string} [description]
 * @property {string} owner
 * @property {string} created_at
 * @property {string} id
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} token
 * @property {string} secret
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateInventoryConfig} [inventory]
 * @property {AffiliateAppConfig} [app]
 */

/**
 * @typedef Affiliate
 * @property {string} token
 * @property {string} id
 * @property {AffiliateConfig} [config]
 */

/**
 * @typedef OrderConfig
 * @property {string} [store_lookup]
 * @property {boolean} [create_user]
 * @property {string} [bag_end_state]
 * @property {string} [article_lookup]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {Affiliate} affiliate
 */

/**
 * @typedef ShipmentDetails
 * @property {number} shipments
 * @property {string} affiliate_shipment_id
 * @property {ArticleDetails[]} articles
 * @property {Object} [meta]
 * @property {number} [dp_id]
 * @property {string} [box_type]
 * @property {number} fulfillment_id
 */

/**
 * @typedef LocationDetails
 * @property {ArticleDetails[]} articles
 * @property {string} fulfillment_type
 * @property {number} fulfillment_id
 */

/**
 * @typedef ShipmentConfig
 * @property {ShipmentDetails[]} shipment
 * @property {string} action
 * @property {string} payment_mode
 * @property {string} source
 * @property {string} identifier
 * @property {LocationDetails} [location_details]
 * @property {string} journey
 * @property {string} to_pincode
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderPriority
 * @property {string} [fulfilment_priority_text]
 * @property {string} [affiliate_priority_code]
 * @property {number} [fulfilment_priority]
 */

/**
 * @typedef OrderUser
 * @property {number} phone
 * @property {string} first_name
 * @property {string} [address1]
 * @property {number} mobile
 * @property {string} email
 * @property {string} pincode
 * @property {string} city
 * @property {string} country
 * @property {string} last_name
 * @property {string} [address2]
 * @property {string} state
 */

/**
 * @typedef UserData
 * @property {OrderUser} [billing_user]
 * @property {OrderUser} [shipping_user]
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateBag
 * @property {string} hsn_code_id
 * @property {Object} affiliate_meta
 * @property {number} avl_qty
 * @property {number} price_effective
 * @property {number} discount
 * @property {number} item_id
 * @property {MarketPlacePdf} [pdf_links]
 * @property {string} modified_on
 * @property {Object} identifier
 * @property {string} fynd_store_id
 * @property {number} company_id
 * @property {string} item_size
 * @property {string} _id
 * @property {number} store_id
 * @property {number} quantity
 * @property {number} amount_paid
 * @property {number} price_marked
 * @property {number} unit_price
 * @property {string} sku
 * @property {string} affiliate_store_id
 * @property {string} seller_identifier
 * @property {number} delivery_charge
 * @property {number} transfer_price
 */

/**
 * @typedef OrderInfo
 * @property {number} discount
 * @property {ShipmentData} [shipment]
 * @property {number} cod_charges
 * @property {string} [coupon]
 * @property {OrderPriority} [order_priority]
 * @property {number} order_value
 * @property {string} payment_mode
 * @property {number} delivery_charges
 * @property {string} [affiliate_order_id]
 * @property {UserData} user
 * @property {OrderUser} shipping_address
 * @property {Object} [payment]
 * @property {AffiliateBag[]} bags
 * @property {Object} items
 * @property {OrderUser} billing_address
 */

/**
 * @typedef CreateOrderPayload
 * @property {string} affiliate_id
 * @property {OrderConfig} order_config
 * @property {OrderInfo} order_info
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
 * @typedef ActionInfo
 * @property {number} id
 * @property {string} description
 * @property {string} slug
 * @property {string} display_text
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {number} [bag_id]
 * @property {string} [l1_detail]
 * @property {string} createdat
 * @property {string} type
 * @property {string} message
 * @property {string} [l2_detail]
 * @property {string} user
 * @property {string} [ticket_url]
 * @property {string} [l3_detail]
 * @property {string} [ticket_id]
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} [activity_history]
 */

/**
 * @typedef ErrorDetail
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsDataPayload
 * @property {string} brand_name
 * @property {number} shipment_id
 * @property {string} customer_name
 * @property {string} message
 * @property {string} payment_mode
 * @property {number} amount_paid
 * @property {string} country_code
 * @property {string} order_id
 * @property {number} phone_number
 */

/**
 * @typedef SendSmsPayload
 * @property {number} bag_id
 * @property {SmsDataPayload} [data]
 * @property {string} slug
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {number[]} [bag_list]
 * @property {number} id
 * @property {Meta} meta
 * @property {string} [remarks]
 */

/**
 * @typedef OrderStatusData
 * @property {OrderDetails} order_details
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {string[]} [errors]
 */

/**
 * @typedef OrderStatusResult
 * @property {string} success
 * @property {OrderStatusData[]} [result]
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {string} order_type
 * @property {string} qc_required
 * @property {number} dp_id
 * @property {string[]} [shipment_ids]
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef BillingInfo
 * @property {string} [customer_code]
 * @property {string} first_name
 * @property {string} [middle_name]
 * @property {string} primary_email
 * @property {string} primary_mobile_number
 * @property {string} pincode
 * @property {string} city
 * @property {string} [last_name]
 * @property {string} [external_customer_code]
 * @property {string} [title]
 * @property {string} address1
 * @property {string} [alternate_email]
 * @property {string} house_no
 * @property {string} floor_no
 * @property {string} country
 * @property {string} [address2]
 * @property {string} state
 * @property {string} [alternate_mobile_number]
 * @property {string} state_code
 * @property {string} [gender]
 * @property {string} country_code
 */

/**
 * @typedef Tax
 * @property {boolean} tax_exempt
 * @property {string} name
 * @property {Object} amount
 * @property {Object[]} breakup
 */

/**
 * @typedef Charge
 * @property {string} name
 * @property {string} type
 * @property {string} [code]
 * @property {Object} amount
 * @property {Tax} tax
 */

/**
 * @typedef LineItem
 * @property {string} [custom_messasge]
 * @property {string} seller_identifier
 * @property {string} [external_line_id]
 * @property {Charge[]} charges
 * @property {number} [quantity]
 * @property {Object} [meta]
 */

/**
 * @typedef ProcessingDates
 * @property {string} [dispatch_by_date]
 * @property {string} [confirm_by_date]
 * @property {Object} [dp_pickup_slot]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_after_date]
 * @property {string} [pack_by_date]
 */

/**
 * @typedef Shipment
 * @property {number} [priority]
 * @property {number} [external_shipment_id]
 * @property {LineItem[]} line_items
 * @property {Object} [meta]
 * @property {number} location_id
 * @property {ProcessingDates} [processing_dates]
 */

/**
 * @typedef ShippingInfo
 * @property {string} [customer_code]
 * @property {string} first_name
 * @property {string} [shipping_type]
 * @property {string} [landmark]
 * @property {string} [middle_name]
 * @property {string} primary_email
 * @property {string} primary_mobile_number
 * @property {string} pincode
 * @property {string} city
 * @property {string} [last_name]
 * @property {string} [external_customer_code]
 * @property {string} [title]
 * @property {string} address1
 * @property {string} [alternate_email]
 * @property {string} [house_no]
 * @property {string} [floor_no]
 * @property {string} country
 * @property {string} [address2]
 * @property {string} state
 * @property {string} [alternate_mobile_number]
 * @property {string} state_code
 * @property {string} [gender]
 * @property {Object[]} [slot]
 * @property {string} country_code
 * @property {string} [address_type]
 * @property {Object} [geo_location]
 */

/**
 * @typedef TaxInfo
 * @property {string} [gstin]
 * @property {string} [b2b_gstin_number]
 */

/**
 * @typedef PaymentMethod
 * @property {string} name
 * @property {string} refund_by
 * @property {Object} [transaction_data]
 * @property {number} amount
 * @property {Object} [meta]
 * @property {string} collect_by
 * @property {string} mode
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef CreateOrderAPI
 * @property {BillingInfo} billing_info
 * @property {Shipment[]} shipments
 * @property {string} [external_order_id]
 * @property {string} [external_creation_date]
 * @property {ShippingInfo} shipping_info
 * @property {string} application_id
 * @property {Charge[]} charges
 * @property {TaxInfo} [tax_info]
 * @property {Object} [meta]
 * @property {PaymentInfo} payment_info
 * @property {Object} currency_info
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {number} status
 * @property {string} [exception]
 * @property {string} message
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {string} [request_id]
 * @property {string} [meta]
 * @property {Object} [info]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [collect_by]
 * @property {string} [refund_by]
 * @property {string} [mode]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef CreateChannelConfig
 * @property {Object} [logo_url]
 * @property {string} [shipment_assignment]
 * @property {DpConfiguration} [dp_configuration]
 * @property {string} [lock_states]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {boolean} [location_reassignment]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [is_inserted]
 * @property {boolean} [is_upserted]
 * @property {boolean} [acknowledged]
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
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */

/**
 * @typedef OrderStatus
 * @property {FyndOrderIdList[]} [order_details]
 * @property {string} start_date
 * @property {string} end_date
 * @property {number} mobile
 */

/**
 * @typedef ApplicationServiceabilityConfig
 * @property {string} serviceability_type
 */

/**
 * @typedef ApplicationServiceabilityResponse
 * @property {string} serviceability_type
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ServiceabilityErrorResponse
 * @property {string} value
 * @property {string} type
 * @property {string} message
 */

/**
 * @typedef ApplicationServiceabilityConfigResponse
 * @property {ApplicationServiceabilityResponse} [data]
 * @property {boolean} success
 * @property {ServiceabilityErrorResponse} [error]
 */

/**
 * @typedef EntityRegionView_Request
 * @property {string[]} sub_type
 * @property {string[]} [parent_id]
 */

/**
 * @typedef EntityRegionView_Items
 * @property {string} sub_type
 * @property {string} name
 * @property {string} uid
 */

/**
 * @typedef EntityRegionView_Error
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [message]
 */

/**
 * @typedef EntityRegionView_page
 * @property {number} item_total
 * @property {number} current
 * @property {string} type
 * @property {number} size
 * @property {boolean} has_next
 */

/**
 * @typedef EntityRegionView_Response
 * @property {EntityRegionView_Items[]} data
 * @property {boolean} success
 * @property {EntityRegionView_Error} error
 * @property {EntityRegionView_page} page
 */

/**
 * @typedef ListViewChannels
 * @property {string} channel_type
 * @property {string} channel_id
 */

/**
 * @typedef ListViewProduct
 * @property {string} type
 * @property {number} count
 */

/**
 * @typedef ListViewItems
 * @property {string} slug
 * @property {string} name
 * @property {boolean} is_active
 * @property {ListViewChannels} channels
 * @property {string} zone_id
 * @property {number} company_id
 * @property {ListViewProduct} product
 * @property {number} pincodes_count
 * @property {number} stores_count
 */

/**
 * @typedef ListViewSummary
 * @property {number} total_active_zones
 * @property {number} total_pincodes_served
 * @property {number} total_zones
 */

/**
 * @typedef ZoneDataItem
 * @property {number} item_total
 * @property {string} type
 * @property {number} current
 * @property {number} size
 * @property {boolean} has_next
 */

/**
 * @typedef ListViewResponse
 * @property {ListViewItems[]} items
 * @property {ListViewSummary[]} summary
 * @property {ZoneDataItem[]} page
 */

/**
 * @typedef CompanyStoreView_PageItems
 * @property {number} item_total
 * @property {number} current
 * @property {string} type
 * @property {number} size
 * @property {boolean} has_next
 */

/**
 * @typedef CompanyStoreView_Response
 * @property {Object[]} [items]
 * @property {CompanyStoreView_PageItems[]} page
 */

/**
 * @typedef GetZoneDataViewChannels
 * @property {string} channel_type
 * @property {string} channel_id
 */

/**
 * @typedef ZoneProductTypes
 * @property {string[]} tags
 * @property {string} type
 */

/**
 * @typedef ZoneMappingType
 * @property {string[]} [pincode]
 * @property {string[]} [state]
 * @property {string} country
 */

/**
 * @typedef GetZoneDataViewItems
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 * @property {number} stores_count
 * @property {number} pincodes_count
 */

/**
 * @typedef GetSingleZoneDataViewResponse
 * @property {GetZoneDataViewItems} data
 */

/**
 * @typedef UpdateZoneData
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 */

/**
 * @typedef ZoneUpdateRequest
 * @property {UpdateZoneData} data
 * @property {string} identifier
 */

/**
 * @typedef ZoneSuccessResponse
 * @property {boolean} success
 * @property {number} status_code
 */

/**
 * @typedef CreateZoneData
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 */

/**
 * @typedef ZoneRequest
 * @property {CreateZoneData} data
 * @property {string} identifier
 */

/**
 * @typedef ZoneResponse
 * @property {boolean} success
 * @property {string} zone_id
 * @property {number} status_code
 */

/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} pincode
 * @property {string} country
 */

/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {string[]} zones
 */

/**
 * @typedef WarningsResponse
 * @property {string} [store_address]
 */

/**
 * @typedef Dp
 * @property {string} [payment_mode]
 * @property {string} [transport_mode]
 * @property {number} [lm_priority]
 * @property {string[]} [operations]
 * @property {number} [fm_priority]
 * @property {number} [rvp_priority]
 * @property {boolean} [assign_dp_from_sb]
 * @property {number} [area_code]
 * @property {string} [external_account_id]
 * @property {string} [internal_account_id]
 */

/**
 * @typedef LogisticsResponse
 * @property {Dp} [dp]
 * @property {boolean} [override]
 */

/**
 * @typedef IntegrationTypeResponse
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef ProductReturnConfigResponse
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef ContactNumberResponse
 * @property {string} [number]
 * @property {number} [country_code]
 */

/**
 * @typedef OpeningClosing
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef TimmingResponse
 * @property {boolean} [open]
 * @property {string} [weekday]
 * @property {OpeningClosing} [opening]
 * @property {OpeningClosing} [closing]
 */

/**
 * @typedef AddressResponse
 * @property {string} [landmark]
 * @property {string} [city]
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [address1]
 * @property {string} [country]
 * @property {string} [address2]
 * @property {number} [longitude]
 * @property {number} [latitude]
 */

/**
 * @typedef EwayBillResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef EinvoiceResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef GstCredentialsResponse
 * @property {EwayBillResponse} [e_waybill]
 * @property {EinvoiceResponse} [e_invoice]
 */

/**
 * @typedef DocumentsResponse
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [legal_name]
 * @property {boolean} [verified]
 */

/**
 * @typedef ModifiedByResponse
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef CreatedByResponse
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef MobileNo
 * @property {string} [number]
 * @property {number} [country_code]
 */

/**
 * @typedef ManagerResponse
 * @property {string} [name]
 * @property {string} [email]
 * @property {MobileNo} [mobile_no]
 */

/**
 * @typedef ItemResponse
 * @property {WarningsResponse} [warnings]
 * @property {LogisticsResponse} [logistics]
 * @property {string} [_cls]
 * @property {IntegrationTypeResponse} [integration_type]
 * @property {ProductReturnConfigResponse} [product_return_config]
 * @property {string} [verified_on]
 * @property {ContactNumberResponse[]} [contact_numbers]
 * @property {string} [display_name]
 * @property {TimmingResponse[]} [timing]
 * @property {AddressResponse} [address]
 * @property {GstCredentialsResponse} [gst_credentials]
 * @property {string[]} [notification_emails]
 * @property {string} [name]
 * @property {string} [store_type]
 * @property {string} [sub_type]
 * @property {string} [code]
 * @property {DocumentsResponse[]} [documents]
 * @property {ModifiedByResponse} [modified_by]
 * @property {number} [company_id]
 * @property {number} [uid]
 * @property {CreatedByResponse} [created_by]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {number} [company]
 * @property {Object} [_custom_json]
 * @property {string} [modified_on]
 * @property {ManagerResponse} [manager]
 * @property {ModifiedByResponse} [verified_by]
 */

/**
 * @typedef GetStoresViewResponse
 * @property {ItemResponse[]} [items]
 * @property {PageResponse} page
 */

/**
 * @typedef GenerateBulkInvoiceLabelShipment
 * @property {number} store_id
 * @property {string} from_date
 * @property {string} to_date
 * @property {string} document_type
 * @property {string[]} [shipment_ids]
 */

/**
 * @typedef GenerateBulkInvoiceOrLabelUrl
 * @property {string} uid
 * @property {string} document_type
 * @property {number} batch_id
 */

/**
 * @typedef DocumentType
 * @property {string} invoice
 * @property {string} label
 */

/**
 * @typedef BulkListBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */

/**
 * @typedef BulkListFailedResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */

/**
 * @typedef SuccessResponseGenerateBulkShipment
 * @property {boolean} success
 * @property {number} job_id
 * @property {string} [trace_id]
 */

/**
 * @typedef SuccessResponseBulkStatus
 * @property {boolean} success
 * @property {string} status
 * @property {string} [trace_id]
 */

/**
 * @typedef GenerateBulkUrlSuccessResponse
 * @property {string} url
 * @property {string} uid
 * @property {number} expires_in
 * @property {string} presigned_type
 */

/**
 * @typedef InternalErrorResponseGenerateBulkShipment
 * @property {boolean} success
 * @property {string} error
 */

/**
 * @typedef BadRequestResponseGenerateBulkUrl
 * @property {boolean} success
 * @property {string} message
 * @property {string} [request_id]
 * @property {string} [exception]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */

/**
 * @typedef InternalErrorResponseGenerateBulkUrl
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef GenerateBulkShipment
 * @property {string} uid
 * @property {string} store_code
 * @property {string} batch_id
 * @property {string} document_type
 */

/**
 * @typedef GenerateBulkUrl
 * @property {number} [expires_in]
 * @property {string} document_type
 * @property {string} batch_id
 */

/**
 * @typedef GetBulkStatusRequest
 * @property {string} batch_id
 */

/**
 * @typedef BadRequestResponseGenerateBulkItemParameters
 * @property {string} [missing_property]
 * @property {string} [type]
 */

/**
 * @typedef BadRequestResponseGenerateBulkItem
 * @property {string} [keyword]
 * @property {string} [data_path]
 * @property {string} [schema_path]
 * @property {BadRequestResponseGenerateBulkItemParameters} [parameters]
 * @property {string} [message]
 */

/**
 * @typedef SuccessResponseGenerateBulk
 * @property {boolean} success
 */

/**
 * @typedef BadRequestResponseGenerateBulk
 * @property {boolean} success
 * @property {BadRequestResponseGenerateBulkItem[]} error_message
 */

/**
 * @typedef InternalErrorResponseGenerateBulk
 * @property {boolean} success
 * @property {string} [error_message]
 */

/**
 * @typedef ShippingToAddress
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef SellerAddress
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef BoxDetails
 * @property {string} box_id
 * @property {string} total_quantity
 * @property {string} package_count
 * @property {string} dimension
 * @property {string} weight
 */

/**
 * @typedef GenerateBulkBoxLabel
 * @property {string} stock_transfer_id
 * @property {string} label_type
 * @property {string} uid
 * @property {string} seller_name
 * @property {number} template_id
 * @property {BoxDetails[]} box_details
 */

/**
 * @typedef GenerateBulkShipmentLabel
 * @property {string} label_type
 * @property {string} uid
 * @property {number} template_id
 * @property {ShipmentDetails[]} shipments
 */

/**
 * @typedef GenerateNoc
 * @property {string} uid
 * @property {string} seller_name
 * @property {string} seller_gstin
 * @property {string} fc_gstin
 * @property {number} template_id
 * @property {SellerAddress} fc_address
 * @property {SellerAddress} seller_address
 */

/**
 * @typedef PackageDetails
 * @property {string} package_id
 * @property {string} item_quantity
 * @property {string} package_type
 * @property {string} packaging_type
 * @property {string} dimension
 * @property {string} weight
 */

/**
 * @typedef PackageItemDetails
 * @property {string} jio_code
 * @property {string} item_name
 * @property {string} mrp
 * @property {string} country_of_origin
 * @property {string} best_before_date
 * @property {string} ean
 * @property {PackageDetails[]} package_details
 */

/**
 * @typedef GenerateBulkPackageLabel
 * @property {string} stock_transfer_id
 * @property {string} label_type
 * @property {string} uid
 * @property {string} seller_name
 * @property {number} template_id
 * @property {PackageItemDetails[]} item_details
 */

/**
 * @typedef SignedSuccessResponse
 * @property {string} [uid]
 * @property {string} [url]
 * @property {number} [expires_in]
 */

/**
 * @typedef BulkPresignedSuccessResponse
 * @property {string} success
 * @property {string} [batch_id]
 * @property {string} [presigned_type]
 * @property {string} presigned_url
 * @property {number} [expires_in]
 */

/**
 * @typedef SignedBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef SignedFailedResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef StatusSuccessResponse
 * @property {boolean} [success]
 * @property {string} [status]
 */

/**
 * @typedef StatusBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef StatusFailedResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef GenerateManifest
 * @property {number} store_id
 * @property {string} from_date
 * @property {string} to_date
 * @property {string[]} [shipment_ids]
 */

/**
 * @typedef GeneratePresignedManifestUrl
 * @property {string} manifest_id
 * @property {string} uid
 */

/**
 * @typedef ManifestLink
 * @property {string} name
 * @property {string} manifest_id
 */

/**
 * @typedef GenerateManifestUrlSuccessResponse
 * @property {string} url
 * @property {string} uid
 * @property {string} manifest_id
 * @property {number} expires_in
 * @property {string} presigned_type
 */

/**
 * @typedef ManifestListFailedResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */

/**
 * @typedef InvoiceLabelPresignedRequestBody
 * @property {string} document_type
 * @property {string} entity_id
 * @property {number} [expires_in]
 */

module.exports = PlatformClient;
