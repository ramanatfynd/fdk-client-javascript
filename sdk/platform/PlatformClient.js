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
 * @property {boolean} [is_deleted]
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
 * @property {Object[]} [pages]
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
 * @property {string} [value]
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
 * @property {string[]} excluded_fields
 * @property {string[]} display_fields
 * @property {boolean} success
 * @property {boolean} created
 * @property {string} app_id
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} description
 * @property {string} code
 * @property {boolean} success
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} secret
 * @property {string} key
 * @property {string} merchant_salt
 * @property {string} config_type
 * @property {boolean} [is_active]
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id
 * @property {boolean} [is_active]
 * @property {PaymentGatewayConfig} [aggregator_name]
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
 * @property {ErrorCodeAndDescription} error
 * @property {boolean} success
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} small
 * @property {string} large
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */

/**
 * @typedef IntentApp
 * @property {PaymentModeLogo} [logos]
 * @property {string} [display_name]
 * @property {string} [code]
 * @property {string} [package_name]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [name]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [card_brand_image]
 * @property {string} [card_id]
 * @property {string} [fynd_vpa]
 * @property {boolean} [expired]
 * @property {string} [card_token]
 * @property {string} [card_type]
 * @property {string} [card_issuer]
 * @property {string} aggregator_name
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [merchant_code]
 * @property {number} [retry_count]
 * @property {string} [code]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string} [nickname]
 * @property {string} [display_name]
 * @property {string} [card_number]
 * @property {string} [card_reference]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {string} [card_name]
 * @property {string} [card_brand]
 * @property {number} [display_priority]
 * @property {number} [exp_year]
 * @property {number} [exp_month]
 * @property {boolean} [intent_flow]
 * @property {string} [card_isin]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_fingerprint]
 * @property {number} [timeout]
 */

/**
 * @typedef RootPaymentMode
 * @property {number} display_priority
 * @property {boolean} [is_pay_by_card_pl]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [aggregator_name]
 * @property {string} name
 * @property {boolean} [anonymous_enable]
 * @property {string} display_name
 * @property {boolean} [add_card_enabled]
 * @property {PaymentModeList[]} [list]
 * @property {boolean} [save_card]
 * @property {string} [logo]
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
 * @property {Object} unique_transfer_no
 * @property {string} transfer_type
 * @property {Object} more_attributes
 * @property {Object[]} payouts_aggregators
 * @property {Object} customers
 * @property {boolean} is_default
 * @property {boolean} is_active
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} [city]
 * @property {string} [account_no]
 * @property {string} [bank_name]
 * @property {string} [state]
 * @property {string} account_type
 * @property {string} ifsc_code
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [account_holder]
 * @property {string} [branch_name]
 */

/**
 * @typedef PayoutRequest
 * @property {string} unique_external_id
 * @property {string} aggregator
 * @property {Object} users
 * @property {string} transfer_type
 * @property {boolean} is_active
 * @property {PayoutBankDetails} bank_details
 */

/**
 * @typedef PayoutResponse
 * @property {string} aggregator
 * @property {string} unique_transfer_no
 * @property {Object} users
 * @property {string} transfer_type
 * @property {string} payment_status
 * @property {Object} payouts
 * @property {boolean} success
 * @property {boolean} created
 * @property {boolean} is_active
 * @property {Object} bank_details
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {boolean} success
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_default
 * @property {string} unique_external_id
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
 * @property {boolean} success
 * @property {string} aggregator
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
 * @property {Object} [data]
 * @property {boolean} [is_verified_flag]
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
 * @property {string} account_no
 * @property {string} bank_name
 * @property {string} ifsc_code
 * @property {string} account_holder
 * @property {string} branch_name
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {BankDetailsForOTP} details
 * @property {string} order_id
 */

/**
 * @typedef IfscCodeResponse
 * @property {boolean} [success]
 * @property {string} bank_name
 * @property {string} branch_name
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} [comment]
 * @property {string} created_on
 * @property {string} ifsc_code
 * @property {string} address
 * @property {string} bank_name
 * @property {string} transfer_mode
 * @property {string} modified_on
 * @property {string} [delights_user_name]
 * @property {boolean} is_active
 * @property {string} email
 * @property {string} beneficiary_id
 * @property {string} display_name
 * @property {string} title
 * @property {string} account_holder
 * @property {string} [branch_name]
 * @property {string} account_no
 * @property {number} id
 * @property {string} subtitle
 * @property {string} [mobile]
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [current_status]
 * @property {string} [payment_id]
 * @property {string} [payment_gateway]
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {number} amount
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
 * @property {string} [name]
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
 * @typedef Prices
 * @property {number} [refund_amount]
 * @property {number} [value_of_good]
 * @property {number} [cashback]
 * @property {number} [cod_charges]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} [tax_collected_at_source]
 * @property {number} [refund_credit]
 * @property {number} [discount]
 * @property {number} [fynd_credits]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [cashback_applied]
 * @property {number} [promotion_effective_discount]
 * @property {number} [amount_paid]
 * @property {number} [delivery_charge]
 * @property {number} [coupon_value]
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} type
 * @property {string} logo
 */

/**
 * @typedef ShipmentStatus
 * @property {string} title
 * @property {string} actual_status
 * @property {string} hex_code
 * @property {string} status
 * @property {string} ops_status
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} id
 * @property {string} code
 */

/**
 * @typedef PlatformItem
 * @property {string} [size]
 * @property {string} [l3_category_name]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {string[]} [images]
 * @property {string[]} [image]
 * @property {number} [l3_category]
 * @property {string[]} [l1_category]
 * @property {boolean} [can_return]
 * @property {boolean} [can_cancel]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [code]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} value_of_good
 * @property {string} gstin_code
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {number} gst_fee
 */

/**
 * @typedef BagUnit
 * @property {Prices} [prices]
 * @property {number} bag_id
 * @property {PlatformItem} [item]
 * @property {Object} status
 * @property {boolean} [can_cancel]
 * @property {string} shipment_id
 * @property {boolean} [can_return]
 * @property {string} ordering_channel
 * @property {number} item_quantity
 * @property {GSTDetailsData} [gst]
 * @property {number} total_shipment_bags
 */

/**
 * @typedef UserDataInfo
 * @property {string} [email]
 * @property {string} [last_name]
 * @property {string} [avis_user_id]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [mobile]
 * @property {string} [first_name]
 * @property {number} [uid]
 * @property {string} [gender]
 * @property {string} [name]
 */

/**
 * @typedef ShipmentItem
 * @property {Prices} [prices]
 * @property {number} shipment_created_at
 * @property {number} total_shipments_in_order
 * @property {Object} [sla]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {Object} [payment_methods]
 * @property {number} total_bags_count
 * @property {string} fulfilling_centre
 * @property {Object} [application]
 * @property {ShipmentStatus} [shipment_status]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {BagUnit[]} [bags]
 * @property {Object} [channel]
 * @property {UserDataInfo} [user]
 * @property {string} created_at
 * @property {string} id
 */

/**
 * @typedef FilterInfoOption
 * @property {string} text
 * @property {string} [value]
 * @property {string} [name]
 */

/**
 * @typedef FiltersInfo
 * @property {string} text
 * @property {string} value
 * @property {string} type
 * @property {FilterInfoOption[]} [options]
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {ShipmentItem[]} [items]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [applied_filters]
 * @property {Object} [page]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef FulfillingStore
 * @property {string} city
 * @property {string} pincode
 * @property {Object} meta
 * @property {string} store_name
 * @property {string} address
 * @property {string} contact_person
 * @property {string} country
 * @property {string} phone
 * @property {string} state
 * @property {string} id
 * @property {string} fulfillment_channel
 * @property {string} code
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [status]
 * @property {number[]} [bag_list]
 * @property {string} [shipment_id]
 * @property {string} [created_at]
 * @property {number} [id]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [track_url]
 * @property {string} [pincode]
 * @property {string} [gst_tag]
 * @property {string} [awb_no]
 * @property {string} [country]
 * @property {string} [eway_bill_id]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef BagStateMapper
 * @property {string} [app_state_name]
 * @property {boolean} [notify_customer]
 * @property {string} [app_display_name]
 * @property {string} state_type
 * @property {boolean} [is_active]
 * @property {string} display_name
 * @property {boolean} [app_facing]
 * @property {number} bs_id
 * @property {string} journey_type
 * @property {string} name
 */

/**
 * @typedef BagStatusHistory
 * @property {number} bag_id
 * @property {boolean} [app_display_name]
 * @property {number} [delivery_partner_id]
 * @property {string} [state_type]
 * @property {string} [updated_at]
 * @property {string} status
 * @property {number} store_id
 * @property {boolean} [kafka_sync]
 * @property {BagStateMapper} bag_state_mapper
 * @property {boolean} [display_name]
 * @property {boolean} [forward]
 * @property {number} state_id
 * @property {string} shipment_id
 * @property {number} bsh_id
 * @property {string} created_at
 * @property {string} [delivery_awb_number]
 * @property {Object[]} [reasons]
 */

/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */

/**
 * @typedef BuyRules
 * @property {ItemCriterias} [item_criteria]
 * @property {Object} [cart_conditions]
 */

/**
 * @typedef DiscountRules
 * @property {number} [value]
 * @property {string} [type]
 */

/**
 * @typedef AppliedPromos
 * @property {number} [amount]
 * @property {BuyRules[]} [buy_rules]
 * @property {number} [article_quantity]
 * @property {string} [promo_id]
 * @property {boolean} [mrp_promotion]
 * @property {DiscountRules[]} [discount_rules]
 * @property {string} [promotion_name]
 * @property {string} [promotion_type]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [email]
 * @property {number} [longitude]
 * @property {string} [city]
 * @property {string} [pincode]
 * @property {string} [area]
 * @property {number} [latitude]
 * @property {string} [address_type]
 * @property {string} [version]
 * @property {string} [updated_at]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 * @property {string} [address1]
 * @property {string} [phone]
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {string} [created_at]
 * @property {string} [country]
 * @property {string} [address2]
 */

/**
 * @typedef BagGST
 * @property {number} [value_of_good]
 * @property {string} [hsn_code]
 * @property {string} [gstin_code]
 * @property {string} [gst_tag]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {number} [brand_calculated_amount]
 * @property {number} [gst_fee]
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [return_config]
 * @property {Object} [identifiers]
 * @property {string} [uid]
 */

/**
 * @typedef OrderBrandName
 * @property {number} created_on
 * @property {string} brand_name
 * @property {string} company
 * @property {number} [modified_on]
 * @property {number} id
 * @property {string} logo
 */

/**
 * @typedef BagConfigs
 * @property {boolean} allow_force_return
 * @property {boolean} is_returnable
 * @property {boolean} enable_tracking
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {string} hsn_code
 * @property {string} gst_tag
 * @property {number} price_marked
 * @property {number} gst_tax_percentage
 * @property {number} total_units
 * @property {number} promotion_effective_discount
 * @property {number} delivery_charge
 * @property {number} amount_paid
 * @property {number} price_effective
 * @property {number} coupon_value
 * @property {number} cod_charges
 * @property {boolean} added_to_fynd_cash
 * @property {number} refund_credit
 * @property {number} discount
 * @property {number} [amount_paid_roundoff]
 * @property {number} brand_calculated_amount
 * @property {number} cashback_applied
 * @property {Identifier} identifiers
 * @property {Object} pm_price_split
 * @property {string} size
 * @property {string} item_name
 * @property {number} fynd_credits
 * @property {number} coupon_effective_discount
 * @property {number} transfer_price
 * @property {number} value_of_good
 * @property {number} [tax_collected_at_source]
 * @property {number} cashback
 * @property {string} gst_fee
 */

/**
 * @typedef OrderBags
 * @property {number} [quantity]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {Prices} [prices]
 * @property {PlatformItem} [item]
 * @property {BagGST} [gst_details]
 * @property {OrderBagArticle} [article]
 * @property {number} [line_number]
 * @property {boolean} [can_return]
 * @property {string} [identifier]
 * @property {number} bag_id
 * @property {OrderBrandName} [brand]
 * @property {string} [current_status]
 * @property {string} [seller_identifier]
 * @property {string} [entity_type]
 * @property {BagConfigs} [bag_configs]
 * @property {Object} [parent_promo_bags]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {string} [display_name]
 * @property {boolean} [can_cancel]
 */

/**
 * @typedef UserDetailsData
 * @property {string} email
 * @property {string} city
 * @property {string} pincode
 * @property {string} address
 * @property {string} phone
 * @property {string} state
 * @property {string} country
 * @property {string} name
 */

/**
 * @typedef TrackingList
 * @property {string} text
 * @property {string} status
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} [time]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} mode
 * @property {string} [logo]
 * @property {string} [source]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [order_date]
 * @property {string} [source]
 * @property {Object} [tax_details]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [cod_charges]
 * @property {string} fynd_order_id
 * @property {string} [affiliate_id]
 * @property {string} [order_value]
 * @property {string} [ordering_channel]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {string} [enable_dp_tracking]
 * @property {Object} [escalation]
 * @property {Object} [delivery_slot]
 * @property {string} [refund_text]
 * @property {Object} [bank_data]
 * @property {boolean} [can_cancel]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object[]} [custom_meta]
 * @property {string} [due_date]
 * @property {boolean} [go_green]
 * @property {string} [mid]
 * @property {Object[]} delivery_status
 * @property {string} order_type
 * @property {number} [total_bags]
 * @property {Object[]} [forward_order_status]
 * @property {Prices} [prices]
 * @property {string} email_id
 * @property {string} can_break
 * @property {number} [total_items]
 * @property {boolean} [beneficiary_details]
 * @property {string} [priority_text]
 * @property {ShipmentStatusData} [status]
 * @property {GSTDetailsData} [gst_details]
 * @property {DPDetailsData} [dp_details]
 * @property {string} lock_status
 * @property {boolean} [can_return]
 * @property {string} user_id
 * @property {Object} current_shipment_status
 * @property {boolean} is_packaging_order
 * @property {Object} [refund_details]
 * @property {boolean} platform_logo
 * @property {boolean} is_invoiced
 * @property {string} [payment_mode]
 * @property {string} [replacement_details]
 * @property {string} [picked_date]
 * @property {string} [vertical]
 * @property {Object[]} [forward_tracking_list]
 * @property {boolean} is_not_fynd_source
 * @property {string} [secured_delivery_flag]
 * @property {Object[]} [forward_shipment_status]
 * @property {string} [shipment_status]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {Object} [user_info]
 * @property {OrderBags[]} [bags]
 * @property {boolean} is_fynd_coupon
 * @property {number} [shipment_quantity]
 * @property {string} affiliate_shipment_id
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [is_fynd_store]
 * @property {string[]} [child_nodes]
 * @property {string} [journey_type]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [pay_button]
 * @property {string} credit_note_id
 * @property {string} [operational_status]
 * @property {UserDetailsData} [billing_details]
 * @property {Object} invoice
 * @property {Object} fyndstore_emp
 * @property {Object} [coupon]
 * @property {boolean} [enable_tracking]
 * @property {number} status_progress
 * @property {string} [is_pdsr]
 * @property {string} [user_agent]
 * @property {Object[]} items
 * @property {string} [kirana_store_id]
 * @property {string} tracking_url
 * @property {string} [order_created_time]
 * @property {string} [packaging_type]
 * @property {string} shipment_id
 * @property {ShipmentPayments} [payments]
 * @property {Object} company
 * @property {string[]} [shipment_images]
 * @property {Object} order_status
 * @property {OrderDetailsData} [order]
 * @property {Object} ordering_store
 */

/**
 * @typedef OrderDict
 * @property {number} shipment_count
 * @property {string} fynd_order_id
 * @property {string} order_date
 */

/**
 * @typedef PlatformShipment
 * @property {string} [enable_dp_tracking]
 * @property {Object} [delivery_slot]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object[]} [custom_meta]
 * @property {number} [total_bags]
 * @property {Prices} [prices]
 * @property {number} [total_items]
 * @property {string} [priority_text]
 * @property {ShipmentStatusData} [status]
 * @property {GSTDetailsData} [gst_details]
 * @property {DPDetailsData} [dp_details]
 * @property {string} [platform_logo]
 * @property {string} [payment_mode]
 * @property {string} [picked_date]
 * @property {string} [vertical]
 * @property {string} [shipment_status]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {OrderBags[]} [bags]
 * @property {number} [shipment_quantity]
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [journey_type]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [operational_status]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [user_agent]
 * @property {string} [packaging_type]
 * @property {string} shipment_id
 * @property {ShipmentPayments} [payments]
 * @property {string[]} [shipment_images]
 * @property {OrderDetailsData} [order]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {Object[]} [custom_meta]
 * @property {boolean} success
 * @property {OrderDict} [order]
 * @property {PlatformShipment[]} [shipments]
 */

/**
 * @typedef SubLane
 * @property {string} [value]
 * @property {string} [text]
 * @property {number} [total_items]
 * @property {Object[]} [actions]
 * @property {number} [index]
 */

/**
 * @typedef SuperLane
 * @property {string} text
 * @property {string} value
 * @property {SubLane[]} [options]
 * @property {number} [total_items]
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [value]
 * @property {string} [name]
 * @property {string} [display]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef PlatformOrderItems
 * @property {number} [total_order_value]
 * @property {string} [payment_mode]
 * @property {Object} [meta]
 * @property {PlatformShipment[]} [shipments]
 * @property {UserDataInfo} [user_info]
 * @property {number} [order_value]
 * @property {string} [order_created_time]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {string} [order_id]
 * @property {PlatformChannel} [channel]
 */

/**
 * @typedef OrderListingResponse
 * @property {PlatformOrderItems[]} [items]
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {number} [total_count]
 * @property {string} [lane]
 * @property {string} [message]
 */

/**
 * @typedef Options
 * @property {string} [text]
 * @property {number} [value]
 */

/**
 * @typedef MetricsCount
 * @property {string} text
 * @property {number} value
 * @property {Options[]} [options]
 * @property {string} key
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {Object} [meta]
 * @property {string} [awb]
 * @property {string} [updated_at]
 * @property {string} [updated_time]
 * @property {string} [reason]
 * @property {string} [status]
 * @property {string} [shipment_type]
 * @property {string} [last_location_recieved_at]
 * @property {string} [raw_status]
 * @property {string} [account_name]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {PlatformTrack[]} [results]
 * @property {Object} [meta]
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
 * @property {Object} [request_details]
 * @property {string} [s3_key]
 * @property {string} [status]
 * @property {string} [report_type]
 * @property {string} [display_name]
 * @property {string} [report_requested_at]
 * @property {string} [report_id]
 * @property {string} [report_name]
 * @property {string} [report_created_at]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [company_id]
 * @property {string} [article_id]
 * @property {string} [jio_code]
 * @property {string} [item_id]
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
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {boolean} [success]
 * @property {string} [identifier]
 * @property {Object[]} [data]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} [company_id]
 * @property {Object} [invoice]
 * @property {Object} [data]
 * @property {string} [store_name]
 * @property {string} batch_id
 * @property {string} [store_code]
 * @property {string} [invoice_status]
 * @property {string} [store_id]
 * @property {Object} [label]
 * @property {boolean} do_invoice_label_generated
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
 * @property {string} [file_name]
 * @property {string} [namespace]
 * @property {number} [size]
 * @property {string} [content_type]
 * @property {string} [file_path]
 * @property {URL} [cdn]
 * @property {FileUploadResponse} [upload]
 * @property {string} [operation]
 * @property {string[]} [tags]
 * @property {string} [method]
 */

/**
 * @typedef BulkListingPage
 * @property {string} [type]
 * @property {number} [size]
 * @property {number} [current]
 * @property {boolean} [has_previous]
 * @property {number} [total]
 * @property {boolean} [has_next]
 */

/**
 * @typedef bulkListingData
 * @property {string} [file_name]
 * @property {string} [store_code]
 * @property {number} [company_id]
 * @property {string} [excel_url]
 * @property {number} [processing]
 * @property {string} [status]
 * @property {string[]} [processing_shipments]
 * @property {string} [uploaded_on]
 * @property {string} [user_id]
 * @property {number} [failed]
 * @property {string} [store_name]
 * @property {Object[]} [successful_shipments]
 * @property {number} [successful]
 * @property {number} [total]
 * @property {string} [id]
 * @property {string} [batch_id]
 * @property {Object[]} [failed_shipments]
 * @property {number} [store_id]
 * @property {string} [user_name]
 */

/**
 * @typedef BulkListingResponse
 * @property {BulkListingPage} [page]
 * @property {string} [error]
 * @property {boolean} [success]
 * @property {bulkListingData[]} [data]
 */

/**
 * @typedef DateRange
 * @property {string} [to_date]
 * @property {string} [from_date]
 */

/**
 * @typedef ManifestFilter
 * @property {string} [dp_ids]
 * @property {string} [store_name]
 * @property {DateRange} [date_range]
 * @property {string} [stores]
 * @property {string} [sales_channel_name]
 * @property {string} [sales_channels]
 * @property {string} [lane]
 * @property {string} [dp_name]
 */

/**
 * @typedef GeneratedManifestItem
 * @property {number} [company_id]
 * @property {boolean} [is_active]
 * @property {string} [status]
 * @property {string} [manifest_id]
 * @property {ManifestFilter} [filters]
 * @property {string} [created_at]
 * @property {string} [created_by]
 */

/**
 * @typedef ManifestPage
 * @property {string} [type]
 * @property {string} [size]
 * @property {string} [current]
 * @property {boolean} [has_previous]
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
 * @property {string} [awb]
 * @property {string} [invoice_id]
 * @property {string} [order_id]
 * @property {string} [shipment_id]
 */

/**
 * @typedef ManifestDetailTotalShipmentPricesCount
 * @property {number} [shipment_count]
 * @property {number} [total_price]
 */

/**
 * @typedef ManifestDetailMeta
 * @property {ManifestFilter} [filters]
 * @property {ManifestDetailTotalShipmentPricesCount} [total_shipment_prices_count]
 */

/**
 * @typedef ManifestDetail
 * @property {number} [company_id]
 * @property {ManifestDetailMeta} [meta]
 * @property {boolean} [is_active]
 * @property {string} [status]
 * @property {string} [manifest_id]
 * @property {number} [uid]
 * @property {ManifestFilter} [filters]
 * @property {number} [user_id]
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {string} [created_by]
 */

/**
 * @typedef ManifestDetailResponse
 * @property {ManifestDetailItem[]} [items]
 * @property {number} [additional_shipment_count]
 * @property {ManifestPage} [page]
 * @property {ManifestDetail[]} [manifest_details]
 */

/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */

/**
 * @typedef Reason
 * @property {QuestionSet[]} [question_set]
 * @property {string} [display_name]
 * @property {number} [id]
 * @property {string[]} [qc_type]
 */

/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {boolean} [success]
 * @property {Reason[]} [reasons]
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
 * @property {string} [company_id]
 * @property {number} [successful_shipments_count]
 * @property {string} [batch_id]
 * @property {number} [total_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [processing_shipments_count]
 * @property {number} [failed_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [uploaded_by]
 * @property {boolean} [status]
 * @property {string[]} [error]
 * @property {string} [success]
 * @property {string} [uploaded_on]
 * @property {string} [user_id]
 * @property {string[]} [failed_records]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string} [message]
 */

/**
 * @typedef B2BPODetails
 * @property {number} [item_base_price]
 * @property {string} [docker_number]
 * @property {number} [po_tax_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [total_gst_percentage]
 * @property {number} [po_line_amount]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef Attributes
 * @property {string} [primary_color]
 * @property {string} [primary_color_hex]
 * @property {string} [marketer_address]
 * @property {string} [marketer_name]
 * @property {string} [brand_name]
 * @property {string} [essential]
 * @property {string[]} [gender]
 * @property {string} [primary_material]
 * @property {string} [name]
 */

/**
 * @typedef Item
 * @property {number} brand_id
 * @property {string[]} [l1_category]
 * @property {number} [l2_category_id]
 * @property {Attributes} attributes
 * @property {Object} [meta]
 * @property {string} slug_key
 * @property {number} [l3_category]
 * @property {boolean} [can_return]
 * @property {string} name
 * @property {string} brand
 * @property {string[]} [l2_category]
 * @property {string} size
 * @property {string} [gender]
 * @property {string} [branch_url]
 * @property {number} [l1_category_id]
 * @property {string} [l3_category_name]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {string} [webstore_product_url]
 * @property {string[]} image
 * @property {string} [last_updated_at]
 * @property {number} item_id
 * @property {boolean} [can_cancel]
 * @property {string} [code]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_returnable
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef BagGSTDetails
 * @property {string} hsn_code_id
 * @property {number} value_of_good
 * @property {string} igst_gst_fee
 * @property {string} hsn_code
 * @property {string} cgst_gst_fee
 * @property {string} [gstin_code]
 * @property {string} gst_tag
 * @property {number} sgst_tax_percentage
 * @property {boolean} [is_default_hsn_code]
 * @property {number} tax_collected_at_source
 * @property {number} gst_tax_percentage
 * @property {number} cgst_tax_percentage
 * @property {string} sgst_gst_fee
 * @property {number} igst_tax_percentage
 * @property {number} brand_calculated_amount
 * @property {number} gst_fee
 */

/**
 * @typedef Weight
 * @property {number} [shipping]
 * @property {boolean} [is_default]
 * @property {string} [unit]
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
 * @property {number} [length]
 * @property {number} [height]
 * @property {boolean} [is_default]
 * @property {string} [unit]
 */

/**
 * @typedef Article
 * @property {Object} [esp_modified]
 * @property {string} _id
 * @property {string} size
 * @property {Weight} [weight]
 * @property {Object} [a_set]
 * @property {ReturnConfig} [return_config]
 * @property {Dimensions} [dimensions]
 * @property {string} seller_identifier
 * @property {Object} [raw_meta]
 * @property {string} uid
 * @property {Identifier} identifiers
 * @property {Object} [child_details]
 * @property {boolean} [is_set]
 * @property {string} [code]
 */

/**
 * @typedef Brand
 * @property {string} [invoice_prefix]
 * @property {boolean} [is_virtual_invoice]
 * @property {number} brand_id
 * @property {number} [created_on]
 * @property {number} [credit_note_expiry_days]
 * @property {string} [pickup_location]
 * @property {string} [start_date]
 * @property {string} brand_name
 * @property {string} company
 * @property {number} [modified_on]
 * @property {boolean} [credit_note_allowed]
 * @property {string} [script_last_ran]
 * @property {string} [logo]
 */

/**
 * @typedef Dates
 * @property {Object} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef PDFLinks
 * @property {string} [invoice]
 * @property {string} [label_a6]
 * @property {string} [label_pos]
 * @property {string} label_type
 * @property {string} [invoice_a6]
 * @property {string} [po_invoice]
 * @property {string} [credit_note_url]
 * @property {string} [invoice_a4]
 * @property {string} [invoice_pos]
 * @property {string} [label_a4]
 * @property {string} invoice_type
 * @property {string} [label]
 * @property {string} [b2b]
 */

/**
 * @typedef BuyerDetails
 * @property {string} city
 * @property {number} pincode
 * @property {string} address
 * @property {string} [ajio_site_id]
 * @property {string} state
 * @property {string} gstin
 * @property {string} name
 */

/**
 * @typedef Formatted
 * @property {string} [f_min]
 * @property {string} [f_max]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_max]
 * @property {string} [t_min]
 */

/**
 * @typedef LockData
 * @property {boolean} [locked]
 * @property {boolean} [mto]
 * @property {string} [lock_message]
 */

/**
 * @typedef EInvoice
 * @property {string} [signed_invoice]
 * @property {string} [error_code]
 * @property {string} [acknowledge_date]
 * @property {string} [irn]
 * @property {string} [error_message]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_qr_code]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef ShipmentMeta
 * @property {string} [dp_id]
 * @property {string} [awb_number]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [marketplace_store_id]
 * @property {string} [return_affiliate_order_id]
 * @property {Object} [bag_weight]
 * @property {string} [packaging_name]
 * @property {number} [shipment_weight]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {string} [due_date]
 * @property {string} [po_number]
 * @property {string} [order_type]
 * @property {Object} [dp_options]
 * @property {boolean} [assign_dp_from_sb]
 * @property {Object} [ewaybill_info]
 * @property {string} [box_type]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [store_invoice_updated_date]
 * @property {number} [return_store_node]
 * @property {Formatted} [formatted]
 * @property {Object} [b2c_buyer_details]
 * @property {number} weight
 * @property {string} [fulfilment_priority_text]
 * @property {number} [shipment_volumetric_weight]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {LockData} [lock_data]
 * @property {string} [return_awb_number]
 * @property {Object} [return_details]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {boolean} same_store_available
 * @property {string} [dp_sort_key]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [return_affiliate_shipment_id]
 * @property {Object} [external]
 * @property {DebugInfo} [debug_info]
 * @property {string} [dp_name]
 */

/**
 * @typedef AffiliateMeta
 * @property {number} [employee_discount]
 * @property {number} [quantity]
 * @property {string} [box_type]
 * @property {number} [size_level_total_qty]
 * @property {string} [order_item_id]
 * @property {string} [channel_order_id]
 * @property {string} [coupon_code]
 * @property {string} [due_date]
 * @property {boolean} [is_priority]
 * @property {string} [channel_shipment_id]
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_order_id
 * @property {PDFLinks} [pdf_links]
 * @property {string} [ad_id]
 * @property {string} [affiliate_id]
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_store_id
 * @property {ShipmentMeta} shipment_meta
 * @property {string} [company_affiliate_tag]
 * @property {string} affiliate_bag_id
 * @property {AffiliateMeta} affiliate_meta
 */

/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_order_id
 * @property {number} [employee_discount]
 * @property {string} affiliate_bag_id
 * @property {number} [loyalty_discount]
 * @property {AffiliateMeta} affiliate_meta
 */

/**
 * @typedef Document
 * @property {string} value
 * @property {string} legal_name
 * @property {boolean} verified
 * @property {string} [url]
 * @property {string} ds_type
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [password]
 * @property {string} [username]
 * @property {string} [user]
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [password]
 * @property {boolean} enabled
 * @property {string} [username]
 * @property {string} [user]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */

/**
 * @typedef StoreMeta
 * @property {Object} [additional_contact_details]
 * @property {Object[]} [timing]
 * @property {Object} [product_return_config]
 * @property {StoreDocuments} [documents]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {string} [gst_number]
 * @property {string} display_name
 * @property {string[]} [notification_emails]
 * @property {Object} [ewaybill_portal_details]
 * @property {StoreGstCredentials} gst_credentials
 * @property {string} stage
 */

/**
 * @typedef StoreAddress
 * @property {string} [email]
 * @property {string} city
 * @property {string} [version]
 * @property {string} [landmark]
 * @property {number} longitude
 * @property {number} pincode
 * @property {number} latitude
 * @property {string} contact_person
 * @property {string} address1
 * @property {string} state
 * @property {string} country_code
 * @property {string} [area]
 * @property {string} updated_at
 * @property {string} created_at
 * @property {string} [address2]
 * @property {string} address_type
 * @property {string} address_category
 * @property {string} phone
 * @property {string} country
 */

/**
 * @typedef Store
 * @property {string} city
 * @property {Object} [brand_id]
 * @property {string} store_email
 * @property {number} [packaging_material_count]
 * @property {string} fulfillment_channel
 * @property {number} company_id
 * @property {number} longitude
 * @property {string} pincode
 * @property {StoreMeta} meta
 * @property {number} latitude
 * @property {string[]} [brand_store_tags]
 * @property {string} contact_person
 * @property {string} address1
 * @property {string} state
 * @property {string} name
 * @property {string} login_username
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [order_integration_id]
 * @property {boolean} [is_active]
 * @property {string} [updated_at]
 * @property {number} [alohomora_user_id]
 * @property {string} [vat_no]
 * @property {string} s_id
 * @property {string} created_at
 * @property {string} [store_active_from]
 * @property {string} location_type
 * @property {string} [address2]
 * @property {number} [parent_store_id]
 * @property {boolean} [is_archived]
 * @property {string} [mall_area]
 * @property {string} [mall_name]
 * @property {number} phone
 * @property {StoreAddress} [store_address_json]
 * @property {string} country
 * @property {string} [code]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {number} [quantity]
 * @property {Object[]} [applied_promos]
 * @property {number[]} [original_bag_list]
 * @property {BagStatusHistory} current_operational_status
 * @property {Prices} prices
 * @property {boolean} [restore_coupon]
 * @property {Object} [restore_promos]
 * @property {BagMeta} [meta]
 * @property {Item} item
 * @property {Object} [qc_required]
 * @property {BagReturnableCancelableStatus} status
 * @property {BagGSTDetails} gst_details
 * @property {Article} article
 * @property {number} b_id
 * @property {number} [line_number]
 * @property {string} [identifier]
 * @property {Object[]} [reasons]
 * @property {Brand} brand
 * @property {string} [order_integration_id]
 * @property {BagStatusHistory} current_status
 * @property {BagStatusHistory[]} bag_status
 * @property {BagStatusHistory} [bag_status_history]
 * @property {Dates} [dates]
 * @property {string} [b_type]
 * @property {number} [no_of_bags_order]
 * @property {string} [seller_identifier]
 * @property {string} [entity_type]
 * @property {string[]} [tags]
 * @property {string} journey_type
 * @property {string} [operational_status]
 * @property {Object} [parent_promo_bags]
 * @property {ArticleDetails} [article_details]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {string} [display_name]
 * @property {string} [shipment_id]
 * @property {number} [bag_update_time]
 * @property {Store} [ordering_store]
 */

/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */

/**
 * @typedef Page1
 * @property {number} size
 * @property {number} current
 * @property {number} item_total
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
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [shipment_id]
 * @property {string} [error]
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
 * @property {string} [set_id]
 * @property {string} [mongo_article_id]
 * @property {string} [affiliate_bag_id]
 * @property {number} store_id
 * @property {number} [bag_id]
 * @property {string} [affiliate_id]
 * @property {string} [fynd_order_id]
 * @property {number[]} [reason_ids]
 * @property {string} [item_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef Entities
 * @property {string} [affiliate_bag_id]
 * @property {string} reason_text
 * @property {string} [id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} entity_type
 * @property {string} action
 * @property {string} action_type
 * @property {Entities[]} entities
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef Bags
 * @property {number} [bag_id]
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_bag_id]
 */

/**
 * @typedef CheckResponse
 * @property {boolean} [lock_status]
 * @property {boolean} [is_bag_locked]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {string} [affiliate_id]
 * @property {OriginalFilter} [original_filter]
 * @property {Bags[]} [bags]
 * @property {string} [affiliate_shipment_id]
 * @property {boolean} [is_shipment_locked]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {CheckResponse[]} [check_response]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [to_datetime]
 * @property {number} [company_id]
 * @property {string} [from_datetime]
 * @property {string} [created_at]
 * @property {string} [platform_id]
 * @property {number} id
 * @property {string} [description]
 * @property {string} [logo_url]
 * @property {string} [platform_name]
 * @property {string} [title]
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
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
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
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {number} [quantity]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
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
 * @typedef ShipmentsRequest
 * @property {DataUpdates} [data_updates]
 * @property {Products[]} [products]
 * @property {string} identifier
 * @property {ReasonsData} [reasons]
 */

/**
 * @typedef StatuesRequest
 * @property {string} [status]
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [exclude_bags_next_state]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [force_transition]
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [task]
 */

/**
 * @typedef ShipmentsResponse
 * @property {string} identifier
 * @property {string} [message]
 * @property {string} [exception]
 * @property {string} [stack_trace]
 * @property {string} [code]
 * @property {Object} [final_state]
 * @property {number} [status]
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
 * @typedef ArticleDetails1
 * @property {string} _id
 * @property {Object} attributes
 * @property {Object} dimension
 * @property {number} quantity
 * @property {Object} category
 * @property {Object} weight
 * @property {number} brand_id
 */

/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type
 * @property {ArticleDetails1[]} articles
 * @property {number} fulfillment_id
 */

/**
 * @typedef ShipmentDetails
 * @property {number} [dp_id]
 * @property {number} shipments
 * @property {number} fulfillment_id
 * @property {string} [box_type]
 * @property {Object} [meta]
 * @property {string} affiliate_shipment_id
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef ShipmentConfig
 * @property {string} source
 * @property {string} identifier
 * @property {LocationDetails} [location_details]
 * @property {string} journey
 * @property {string} payment_mode
 * @property {string} to_pincode
 * @property {string} action
 * @property {ShipmentDetails[]} shipment
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderUser
 * @property {string} [address1]
 * @property {string} country
 * @property {string} email
 * @property {string} state
 * @property {string} pincode
 * @property {number} mobile
 * @property {string} city
 * @property {number} phone
 * @property {string} last_name
 * @property {string} first_name
 * @property {string} [address2]
 */

/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */

/**
 * @typedef OrderPriority
 * @property {string} [fulfilment_priority_text]
 * @property {string} [affiliate_priority_code]
 * @property {number} [fulfilment_priority]
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [label]
 * @property {string} [invoice]
 */

/**
 * @typedef AffiliateBag
 * @property {MarketPlacePdf} [pdf_links]
 * @property {string} fynd_store_id
 * @property {number} store_id
 * @property {string} affiliate_store_id
 * @property {number} quantity
 * @property {number} price_effective
 * @property {string} hsn_code_id
 * @property {number} item_id
 * @property {number} avl_qty
 * @property {string} _id
 * @property {Object} affiliate_meta
 * @property {Object} identifier
 * @property {number} amount_paid
 * @property {string} sku
 * @property {string} modified_on
 * @property {number} unit_price
 * @property {string} item_size
 * @property {number} discount
 * @property {number} company_id
 * @property {number} transfer_price
 * @property {string} seller_identifier
 * @property {number} price_marked
 * @property {number} delivery_charge
 */

/**
 * @typedef OrderInfo
 * @property {number} order_value
 * @property {ShipmentData} [shipment]
 * @property {UserData} user
 * @property {Object} [payment]
 * @property {number} cod_charges
 * @property {string} [coupon]
 * @property {string} payment_mode
 * @property {OrderPriority} [order_priority]
 * @property {Object} items
 * @property {OrderUser} shipping_address
 * @property {number} delivery_charges
 * @property {AffiliateBag[]} bags
 * @property {OrderUser} billing_address
 * @property {string} [affiliate_order_id]
 * @property {number} discount
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {string} marketplace_store_id
 * @property {number} store_id
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} token
 * @property {string} name
 * @property {string} owner
 * @property {string} created_at
 * @property {string} secret
 * @property {string} id
 * @property {string} updated_at
 * @property {string} [description]
 * @property {AffiliateAppConfigMeta[]} [meta]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
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
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {AffiliateInventoryConfig} [inventory]
 */

/**
 * @typedef Affiliate
 * @property {string} token
 * @property {AffiliateConfig} [config]
 * @property {string} id
 */

/**
 * @typedef OrderConfig
 * @property {string} [article_lookup]
 * @property {string} [bag_end_state]
 * @property {boolean} [create_user]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [store_lookup]
 * @property {Affiliate} affiliate
 */

/**
 * @typedef CreateOrderPayload
 * @property {OrderInfo} order_info
 * @property {OrderConfig} order_config
 * @property {string} affiliate_id
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
 * @property {string} slug
 * @property {string} display_text
 * @property {string} description
 * @property {number} id
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} createdat
 * @property {string} message
 * @property {string} user
 * @property {string} [l1_detail]
 * @property {string} [ticket_id]
 * @property {string} type
 * @property {string} [l2_detail]
 * @property {number} [bag_id]
 * @property {string} [l3_detail]
 * @property {string} [ticket_url]
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
 * @property {string} message
 * @property {number} amount_paid
 * @property {number} phone_number
 * @property {number} shipment_id
 * @property {string} payment_mode
 * @property {string} customer_name
 * @property {string} brand_name
 * @property {string} country_code
 * @property {string} order_id
 */

/**
 * @typedef SendSmsPayload
 * @property {number} bag_id
 * @property {SmsDataPayload} [data]
 * @property {string} slug
 */

/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [remarks]
 * @property {string} [shipment_id]
 * @property {number} id
 * @property {number[]} [bag_list]
 * @property {string} [status]
 * @property {Meta} meta
 */

/**
 * @typedef OrderDetails
 * @property {string} [created_at]
 * @property {string} [fynd_order_id]
 */

/**
 * @typedef OrderStatusData
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {OrderDetails} order_details
 * @property {string[]} [errors]
 */

/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {number} dp_id
 * @property {string[]} [shipment_ids]
 * @property {string} order_type
 * @property {string} qc_required
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef TaxInfo
 * @property {string} [gstin]
 * @property {string} [b2b_gstin_number]
 */

/**
 * @typedef BillingInfo
 * @property {string} country
 * @property {string} [external_customer_code]
 * @property {string} city
 * @property {string} [middle_name]
 * @property {string} state_code
 * @property {string} [last_name]
 * @property {string} first_name
 * @property {string} house_no
 * @property {string} [address2]
 * @property {string} [alternate_mobile_number]
 * @property {string} address1
 * @property {string} floor_no
 * @property {string} state
 * @property {string} [title]
 * @property {string} [alternate_email]
 * @property {string} [customer_code]
 * @property {string} primary_mobile_number
 * @property {string} pincode
 * @property {string} [gender]
 * @property {string} country_code
 * @property {string} primary_email
 */

/**
 * @typedef Tax
 * @property {Object[]} breakup
 * @property {string} name
 * @property {Object} amount
 * @property {boolean} tax_exempt
 */

/**
 * @typedef Charge
 * @property {string} name
 * @property {Tax} tax
 * @property {string} type
 * @property {string} [code]
 * @property {Object} amount
 */

/**
 * @typedef ProcessingDates
 * @property {string} [pack_by_date]
 * @property {string} [confirm_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_by_date]
 * @property {string} [dispatch_after_date]
 * @property {Object} [dp_pickup_slot]
 */

/**
 * @typedef LineItem
 * @property {Charge[]} charges
 * @property {string} seller_identifier
 * @property {number} [quantity]
 * @property {Object} [meta]
 * @property {string} [custom_messasge]
 * @property {string} [external_line_id]
 */

/**
 * @typedef Shipment
 * @property {number} location_id
 * @property {ProcessingDates} [processing_dates]
 * @property {LineItem[]} line_items
 * @property {number} [external_shipment_id]
 * @property {Object} [meta]
 * @property {number} [priority]
 */

/**
 * @typedef PaymentMethod
 * @property {string} refund_by
 * @property {string} name
 * @property {string} collect_by
 * @property {Object} [transaction_data]
 * @property {string} mode
 * @property {Object} [meta]
 * @property {number} amount
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef ShippingInfo
 * @property {Object[]} [slot]
 * @property {string} country
 * @property {string} [external_customer_code]
 * @property {string} city
 * @property {string} [middle_name]
 * @property {string} state_code
 * @property {string} [last_name]
 * @property {string} [shipping_type]
 * @property {string} first_name
 * @property {string} [house_no]
 * @property {string} [address2]
 * @property {string} [alternate_mobile_number]
 * @property {string} address1
 * @property {string} [floor_no]
 * @property {string} state
 * @property {string} [title]
 * @property {string} [landmark]
 * @property {string} [address_type]
 * @property {string} [alternate_email]
 * @property {string} [customer_code]
 * @property {string} primary_mobile_number
 * @property {string} pincode
 * @property {string} [gender]
 * @property {Object} [geo_location]
 * @property {string} country_code
 * @property {string} primary_email
 */

/**
 * @typedef CreateOrderAPI
 * @property {TaxInfo} [tax_info]
 * @property {BillingInfo} billing_info
 * @property {Charge[]} charges
 * @property {string} [external_order_id]
 * @property {Shipment[]} shipments
 * @property {PaymentInfo} payment_info
 * @property {Object} currency_info
 * @property {string} [application_id]
 * @property {Object} [meta]
 * @property {ShippingInfo} shipping_info
 * @property {string} [external_creation_date]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {Object} [info]
 * @property {string} message
 * @property {string} [exception]
 * @property {string} [stack_trace]
 * @property {string} [code]
 * @property {number} status
 * @property {string} [meta]
 * @property {string} [request_id]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [refund_by]
 * @property {string} [collect_by]
 * @property {string} [mode]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [source]
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef CreateChannelConfig
 * @property {string} [lock_states]
 * @property {string} [shipment_assignment]
 * @property {boolean} [location_reassignment]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {Object} [logo_url]
 * @property {DpConfiguration} [dp_configuration]
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
 * @property {string} manifest_id
 * @property {string} consent_url
 */

/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */

/**
 * @typedef OrderStatus
 * @property {string} end_date
 * @property {number} mobile
 * @property {string} start_date
 * @property {FyndOrderIdList[]} [order_details]
 */

/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */

/**
 * @typedef CreateSearchKeyword
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {SearchKeywordResult} result
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 */

/**
 * @typedef GetSearchWordsData
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {Object} [result]
 * @property {string[]} [words]
 * @property {string} [uid]
 * @property {boolean} [is_active]
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
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
 * @property {Object} [query]
 * @property {Object} [params]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */

/**
 * @typedef Media
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */

/**
 * @typedef AutocompleteResult
 * @property {Object} [_custom_json]
 * @property {string} [display]
 * @property {AutocompleteAction} [action]
 * @property {Media} [logo]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {AutocompleteResult[]} [results]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {string[]} [words]
 * @property {string} [uid]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {Page} [page]
 * @property {GetAutocompleteWordsData[]} [items]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {Object[]} [results]
 * @property {string[]} [words]
 */

/**
 * @typedef ProductBundleItem
 * @property {number} max_quantity
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_select]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} min_quantity
 * @property {number} product_uid
 */

/**
 * @typedef ProductBundleRequest
 * @property {string} name
 * @property {string} choice
 * @property {Object} [created_by]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {string} slug
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {string} name
 * @property {string} choice
 * @property {Object} [created_by]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {boolean} is_active
 * @property {string} [id]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {string} slug
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} name
 * @property {string} choice
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {string} slug
 */

/**
 * @typedef LimitedProductData
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string[]} [images]
 * @property {number} [quantity]
 * @property {Object} [price]
 * @property {string} [country_of_origin]
 * @property {number} [uid]
 * @property {string[]} [sizes]
 * @property {string} [item_code]
 * @property {string} [short_description]
 * @property {Object} [identifier]
 * @property {string} [slug]
 */

/**
 * @typedef Price
 * @property {string} [currency]
 * @property {number} [max_marked]
 * @property {number} [max_effective]
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 */

/**
 * @typedef Size
 * @property {boolean} [is_available]
 * @property {string} [display]
 * @property {string} [value]
 * @property {number} [quantity]
 */

/**
 * @typedef GetProducts
 * @property {number} [max_quantity]
 * @property {LimitedProductData} [product_details]
 * @property {Price} [price]
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_select]
 * @property {boolean} [auto_add_to_cart]
 * @property {Size[]} [sizes]
 * @property {number} [min_quantity]
 * @property {number} [product_uid]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {boolean} [same_store_assignment]
 * @property {string} [name]
 * @property {string} [choice]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 * @property {GetProducts[]} [products]
 * @property {Object} [meta]
 * @property {string} [slug]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} title
 * @property {string} name
 * @property {Object} [created_by]
 * @property {number} [company_id]
 * @property {Guide} [guide]
 * @property {string} [description]
 * @property {string} [tag]
 * @property {string} [created_on]
 * @property {string} [subtitle]
 * @property {string} [id]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {number} [brand_id]
 * @property {boolean} [active]
 * @property {string} [image]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef SizeGuideResponse
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {string} [title]
 * @property {number} [company_id]
 * @property {Object} [guide]
 * @property {string} [tag]
 * @property {string} [created_on]
 * @property {string} [subtitle]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {number} [brand_id]
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
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef ApplicationItemResponse
 * @property {Object} [alt_text]
 * @property {MOQ} [moq]
 * @property {SEO} [seo]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [condition]
 * @property {Object[]} [values]
 * @property {Object[]} data
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {number} priority
 * @property {string} name
 * @property {string} display_type
 * @property {string} [key]
 * @property {string} [unit]
 * @property {string} [slug]
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef AppConfigurationDetail
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {number} priority
 * @property {string[]} [template_slugs]
 * @property {string} [name]
 * @property {string} app_id
 * @property {boolean} is_default
 * @property {string} slug
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef PageResponseType
 * @property {number} total_count
 * @property {number} current
 * @property {number} next
 * @property {boolean} has_next
 */

/**
 * @typedef GetConfigResponse
 * @property {PageResponseType} page
 * @property {Object[]} data
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {number} priority
 * @property {string} [name]
 * @property {string} default_key
 * @property {string} key
 * @property {string} app_id
 * @property {boolean} is_default
 * @property {string} [logo]
 * @property {boolean} is_active
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
 * @property {Object[]} [units]
 * @property {string} [display]
 * @property {string[]} [filter_types]
 * @property {string} [key]
 */

/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
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
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingFilterResponse} filter
 * @property {MetaDataListingSortResponse} sort
 */

/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [compare]
 * @property {Object} [detail]
 * @property {Object} [variant]
 * @property {Object} [similar]
 */

/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef ConfigurationBucketPoints
 * @property {number} [end]
 * @property {number} [start]
 * @property {string} [display]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [condition]
 * @property {string} [value]
 * @property {Object[]} [map_values]
 * @property {string} [sort]
 * @property {Object} [map]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {number} priority
 * @property {string} [name]
 * @property {string} key
 * @property {string} [display_name]
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} type
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {number} priority
 * @property {string} [name]
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */

/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingFilter} filter
 * @property {ConfigurationListingSort} sort
 */

/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {number} priority
 * @property {string} name
 * @property {string} display_type
 * @property {string} key
 * @property {ProductSize} size
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {number} priority
 * @property {string} [title]
 * @property {string} key
 * @property {string} [subtitle]
 * @property {ProductSize} [size]
 * @property {string} [logo]
 * @property {boolean} is_active
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
 * @property {Object} [created_by]
 * @property {string} app_id
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [config_id]
 * @property {ConfigurationListing} [listing]
 * @property {string} [type]
 * @property {ConfigurationProduct} [product]
 * @property {string} config_type
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {Object} [created_by]
 * @property {string} app_id
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [config_id]
 * @property {ConfigurationListing} [listing]
 * @property {string} [type]
 * @property {ConfigurationProduct} [product]
 * @property {string} config_type
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {boolean} [is_default]
 * @property {AppCatalogConfiguration} [data]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */

/**
 * @typedef EntityConfiguration
 * @property {string} app_id
 * @property {string} [id]
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
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
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef ProductFiltersValue
 * @property {number} [selected_max]
 * @property {number} [max]
 * @property {string} [query_format]
 * @property {number} [min]
 * @property {Object} value
 * @property {string} [currency_symbol]
 * @property {number} [selected_min]
 * @property {string} [currency_code]
 * @property {number} [count]
 * @property {boolean} is_selected
 * @property {string} display
 * @property {string} [display_format]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string[]} [operators]
 * @property {string} name
 * @property {string} [kind]
 * @property {string} display
 * @property {string} [logo]
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef CollectionSchedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [cron]
 */

/**
 * @typedef CollectionBadge
 * @property {string} [text]
 * @property {string} [color]
 */

/**
 * @typedef UserInfo
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [email]
 * @property {string} [uid]
 */

/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */

/**
 * @typedef CollectionQuery
 * @property {string} op
 * @property {Object[]} value
 * @property {string} attribute
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
 * @typedef CreateCollection
 * @property {number} [priority]
 * @property {boolean} [allow_sort]
 * @property {CollectionSchedule} [_schedule]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [description]
 * @property {CollectionBadge} [badge]
 * @property {UserInfo} [modified_by]
 * @property {boolean} [is_active]
 * @property {boolean} [published]
 * @property {string} slug
 * @property {string[]} [tags]
 * @property {boolean} [is_visible]
 * @property {CollectionImage} logo
 * @property {Object} [meta]
 * @property {UserInfo} [created_by]
 * @property {string} name
 * @property {string} app_id
 * @property {Object} [_locale_language]
 * @property {CollectionQuery[]} [query]
 * @property {CollectionBanner} banners
 * @property {Object} [_custom_json]
 * @property {boolean} [allow_facets]
 * @property {string} [sort_on]
 * @property {string} type
 * @property {SeoDetail} [seo]
 */

/**
 * @typedef BannerImage
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [portrait]
 * @property {BannerImage} [landscape]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {number} [priority]
 * @property {boolean} [allow_sort]
 * @property {Object} [_schedule]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [description]
 * @property {Object} [badge]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 * @property {Object} [meta]
 * @property {BannerImage} [logo]
 * @property {string} [name]
 * @property {string} [app_id]
 * @property {CollectionQuery[]} [query]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {boolean} [allow_facets]
 * @property {string} [sort_on]
 * @property {string} [type]
 */

/**
 * @typedef Media1
 * @property {string} [type]
 * @property {string} url
 * @property {Object} [meta]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {number} [priority]
 * @property {boolean} [allow_sort]
 * @property {Object} [_schedule]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [description]
 * @property {string} [uid]
 * @property {Object} [badge]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 * @property {Object} [meta]
 * @property {Media1} [logo]
 * @property {string} [name]
 * @property {string} [app_id]
 * @property {CollectionQuery[]} [query]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {Object} [cron]
 * @property {boolean} [allow_facets]
 * @property {string} [type]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {Page} [page]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {CollectionListingFilter} [filters]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {string} [app_id]
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [description]
 * @property {string} [slug]
 * @property {string[]} [tag]
 * @property {Object} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {string} [type]
 * @property {Media1} [logo]
 * @property {boolean} [is_active]
 */

/**
 * @typedef UpdateCollection
 * @property {number} [priority]
 * @property {boolean} [allow_sort]
 * @property {CollectionSchedule} [_schedule]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [description]
 * @property {CollectionBadge} [badge]
 * @property {UserInfo} [modified_by]
 * @property {boolean} [is_active]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {boolean} [is_visible]
 * @property {Object} [meta]
 * @property {CollectionImage} [logo]
 * @property {string} [name]
 * @property {Object} [_locale_language]
 * @property {CollectionQuery[]} [query]
 * @property {CollectionBanner} [banners]
 * @property {Object} [_custom_json]
 * @property {boolean} [allow_facets]
 * @property {string} [sort_on]
 * @property {string} [type]
 * @property {SeoDetail} [seo]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {string} [action]
 * @property {number} [item_id]
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
 * @typedef Price1
 * @property {string} [currency_symbol]
 * @property {number} [max]
 * @property {number} [min]
 * @property {string} [currency_code]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */

/**
 * @typedef ProductBrand
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Media1} [logo]
 */

/**
 * @typedef ProductListingDetail
 * @property {number} [rating]
 * @property {string} [description]
 * @property {number} [uid]
 * @property {boolean} [has_variant]
 * @property {string} [short_description]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [product_online_date]
 * @property {string[]} [similars]
 * @property {string} [color]
 * @property {string} slug
 * @property {string} [item_type]
 * @property {ProductListingPrice} [price]
 * @property {string[]} [highlights]
 * @property {string} [image_nature]
 * @property {number} [rating_count]
 * @property {string} [discount]
 * @property {Object} [teaser_tag]
 * @property {Media1[]} [medias]
 * @property {string} [name]
 * @property {ProductBrand} [brand]
 * @property {Object} [attributes]
 * @property {boolean} [sellable]
 * @property {Object} [promo_meta]
 * @property {string} [item_code]
 * @property {string[]} [tryouts]
 * @property {string} [type]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {Page} [page]
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [sellable_count]
 * @property {number} [count]
 * @property {number} [out_of_stock_count]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [total_articles]
 * @property {string} [name]
 * @property {number} [available_articles]
 * @property {number} [total_sizes]
 * @property {number} [available_sizes]
 * @property {number} [article_freshness]
 */

/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightItem} [item]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef CrossSellingData
 * @property {number} [articles]
 * @property {number} [products]
 */

/**
 * @typedef CrossSellingResponse
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CrossSellingData} [data]
 */

/**
 * @typedef OptInPostRequest
 * @property {number[]} [store_ids]
 * @property {number} [company_id]
 * @property {boolean} [enabled]
 * @property {number[]} [brand_ids]
 * @property {string} opt_level
 * @property {string} [platform]
 */

/**
 * @typedef CompanyOptIn
 * @property {Object} [created_by]
 * @property {number} company_id
 * @property {number[]} store_ids
 * @property {boolean} enabled
 * @property {number} created_on
 * @property {number} modified_on
 * @property {Object} [modified_by]
 * @property {number[]} brand_ids
 * @property {string} opt_level
 * @property {string} platform
 */

/**
 * @typedef GetOptInPlatform
 * @property {Page} page
 * @property {CompanyOptIn[]} items
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [business_type]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {number} [company_id]
 * @property {number} [total_article]
 * @property {number} [brand_id]
 * @property {string} [brand_name]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {Page} [page]
 * @property {CompanyBrandDetail[]} [items]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {number} [brand]
 * @property {number} [store]
 * @property {string} [company]
 */

/**
 * @typedef StoreDetail
 * @property {string} [name]
 * @property {Object} [address]
 * @property {Object[]} [additional_contacts]
 * @property {string} [store_type]
 * @property {number} [company_id]
 * @property {Object} [manager]
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {string} [store_code]
 * @property {Object[]} [documents]
 * @property {string} [display_name]
 * @property {string} [modified_on]
 * @property {Object} [timing]
 */

/**
 * @typedef OptinStoreDetails
 * @property {Page} [page]
 * @property {StoreDetail[]} [items]
 */

/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */

/**
 * @typedef AttributeSchemaRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef AttributeMaster
 * @property {boolean} [multi]
 * @property {boolean} [mandatory]
 * @property {string} [format]
 * @property {string[]} [allowed_values]
 * @property {AttributeSchemaRange} [range]
 * @property {string} type
 */

/**
 * @typedef AttributeMasterFilter
 * @property {number} [priority]
 * @property {string[]} [depends_on]
 * @property {boolean} indexing
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
 * @typedef GenderDetail
 * @property {string} [name]
 * @property {AttributeMasterDetails} [details]
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {string} [logo]
 * @property {AttributeMaster} [schema]
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [id]
 * @property {boolean} [is_nested]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [slug]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Page} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef PTErrorResponse
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {string} [code]
 * @property {number} [status]
 * @property {Object} [meta]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {Object} [_custom_json]
 * @property {number} priority_order
 * @property {string} name
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {Object} [platforms]
 * @property {string} [_cls]
 * @property {string[]} [synonyms]
 * @property {string} logo
 * @property {boolean} [is_active]
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
 * @property {string} [contact]
 * @property {string} [_id]
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [user_id]
 */

/**
 * @typedef GetDepartment
 * @property {number} [priority_order]
 * @property {string} [name]
 * @property {UserSerializer} [created_by]
 * @property {number} [page_size]
 * @property {string} [item_type]
 * @property {number} [page_no]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [search]
 * @property {string[]} [synonyms]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 */

/**
 * @typedef DepartmentsResponse
 * @property {Page} [page]
 * @property {GetDepartment[]} [items]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {string} [code]
 * @property {number} [status]
 * @property {Object} [meta]
 */

/**
 * @typedef UserDetail
 * @property {string} user_id
 * @property {string} username
 * @property {string} [contact]
 * @property {boolean} [super_user]
 */

/**
 * @typedef DepartmentModel
 * @property {Object} [_custom_json]
 * @property {number} priority_order
 * @property {UserDetail} [created_by]
 * @property {Object} name
 * @property {Object} [_id]
 * @property {string} [verified_on]
 * @property {UserDetail} [verified_by]
 * @property {number} [uid]
 * @property {string} created_on
 * @property {boolean} [is_active]
 * @property {string} modified_on
 * @property {UserDetail} [modified_by]
 * @property {Object} [_cls]
 * @property {Object[]} [synonyms]
 * @property {string} logo
 * @property {Object} [slug]
 */

/**
 * @typedef ProductTemplate
 * @property {string[]} [attributes]
 * @property {string} [name]
 * @property {Object} [created_by]
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {string} [tag]
 * @property {boolean} [is_archived]
 * @property {boolean} is_physical
 * @property {string} [created_on]
 * @property {boolean} [is_active]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string[]} [categories]
 * @property {boolean} is_expirable
 * @property {string} [logo]
 * @property {string} slug
 */

/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */

/**
 * @typedef TemplateDetails
 * @property {string[]} [attributes]
 * @property {string} [name]
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {string} [tag]
 * @property {boolean} [is_archived]
 * @property {boolean} is_physical
 * @property {boolean} [is_active]
 * @property {string} [id]
 * @property {string[]} [categories]
 * @property {boolean} is_expirable
 * @property {string} [logo]
 * @property {string} slug
 */

/**
 * @typedef Properties
 * @property {Object} [currency]
 * @property {Object} [size_guide]
 * @property {Object} [product_group_tag]
 * @property {Object} [brand_uid]
 * @property {Object} [description]
 * @property {Object} [multi_size]
 * @property {Object} [no_of_boxes]
 * @property {Object} [command]
 * @property {Object} [trader_type]
 * @property {Object} [short_description]
 * @property {Object} [hsn_code]
 * @property {Object} [slug]
 * @property {Object} [custom_order]
 * @property {Object} [is_active]
 * @property {Object} [item_type]
 * @property {Object} [tags]
 * @property {Object} [sizes]
 * @property {Object} [category_slug]
 * @property {Object} [highlights]
 * @property {Object} [teaser_tag]
 * @property {Object} [product_publish]
 * @property {Object} [media]
 * @property {Object} [name]
 * @property {Object} [country_of_origin]
 * @property {Object} [variants]
 * @property {Object} [return_config]
 * @property {Object} [trader]
 * @property {Object} [item_code]
 * @property {Object} [is_dependent]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [title]
 * @property {Properties} [properties]
 * @property {Object} [definitions]
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
 * @typedef TemplatesValidationResponse
 * @property {TemplateDetails} [template_details]
 * @property {TemplateValidationData} [data]
 */

/**
 * @typedef InventoryValidationResponse
 * @property {string} [message]
 * @property {Object} [data]
 */

/**
 * @typedef HSNData
 * @property {string[]} [hsn_code]
 * @property {string[]} [country_of_origin]
 */

/**
 * @typedef HSNCodesResponse
 * @property {string} [message]
 * @property {HSNData} [data]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductDownloadItemsData
 * @property {string[]} [brand]
 * @property {string} [type]
 * @property {string[]} [templates]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {string} [task_id]
 * @property {VerifiedBy} [created_by]
 * @property {Object} [template_tags]
 * @property {number} [seller_id]
 * @property {string} [id]
 * @property {string} [url]
 * @property {string} [trigger_on]
 * @property {string} [completed_on]
 * @property {string} [status]
 * @property {ProductDownloadItemsData} [data]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {Page} [page]
 * @property {ProductDownloadsItems} [items]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {boolean} [multivalue]
 * @property {Object[]} [data]
 */

/**
 * @typedef Media2
 * @property {string} portrait
 * @property {string} logo
 * @property {string} landscape
 */

/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id]
 * @property {string} name
 */

/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [ajio]
 */

/**
 * @typedef Hierarchy
 * @property {number} l2
 * @property {number} department
 * @property {number} l1
 */

/**
 * @typedef CategoryRequestBody
 * @property {Media2} [media]
 * @property {number} [priority]
 * @property {string} name
 * @property {number[]} departments
 * @property {string} [slug]
 * @property {boolean} is_active
 * @property {string[]} [tryouts]
 * @property {CategoryMapping} [marketplaces]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string[]} [synonyms]
 * @property {number} level
 */

/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
 */

/**
 * @typedef Category
 * @property {Media2} [media]
 * @property {number} [priority]
 * @property {string} name
 * @property {Object} [created_by]
 * @property {number[]} departments
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {string} [created_on]
 * @property {boolean} is_active
 * @property {string} [id]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string[]} [tryouts]
 * @property {CategoryMapping} [marketplaces]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string[]} [synonyms]
 * @property {number} level
 */

/**
 * @typedef CategoryResponse
 * @property {Page} [page]
 * @property {Category[]} [items]
 */

/**
 * @typedef CategoryUpdateResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */

/**
 * @typedef CustomOrder
 * @property {number} [manufacturing_time]
 * @property {boolean} [is_custom_order]
 * @property {string} [manufacturing_time_unit]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code_id]
 * @property {string} [hsn_code]
 */

/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */

/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef NetQuantity
 * @property {number} [value]
 * @property {Object} [unit]
 */

/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef ProductCreateUpdate
 * @property {string} currency
 * @property {string} [size_guide]
 * @property {string[]} [product_group_tag]
 * @property {number} brand_uid
 * @property {string} [description]
 * @property {number} [uid]
 * @property {boolean} [multi_size]
 * @property {number} [no_of_boxes]
 * @property {boolean} [is_image_less_product]
 * @property {string} [bulk_job_id]
 * @property {string} [short_description]
 * @property {string} template_tag
 * @property {string} slug
 * @property {CustomOrder} [custom_order]
 * @property {boolean} [is_active]
 * @property {string} item_type
 * @property {Object} [variant_media]
 * @property {string} [requester]
 * @property {string[]} [tags]
 * @property {string} category_slug
 * @property {string[]} [highlights]
 * @property {boolean} [is_set]
 * @property {TaxIdentifier} tax_identifier
 * @property {TeaserTag} [teaser_tag]
 * @property {ProductPublish} [product_publish]
 * @property {Media1[]} [media]
 * @property {string} name
 * @property {string} [action]
 * @property {NetQuantity} [net_quantity]
 * @property {Object} [_custom_json]
 * @property {Object} [variants]
 * @property {string} country_of_origin
 * @property {number} company_id
 * @property {ReturnConfig} return_config
 * @property {number[]} departments
 * @property {Trader[]} trader
 * @property {Object} item_code
 * @property {boolean} [is_dependent]
 * @property {Object} [change_request_id]
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
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef Logo
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */

/**
 * @typedef Product
 * @property {string} [currency]
 * @property {string} [size_guide]
 * @property {Image[]} [images]
 * @property {number} [brand_uid]
 * @property {string} [description]
 * @property {number} [uid]
 * @property {boolean} [multi_size]
 * @property {string} [id]
 * @property {string} [short_description]
 * @property {string} [template_tag]
 * @property {string} [hsn_code]
 * @property {string} [color]
 * @property {string} [slug]
 * @property {Object} [custom_order]
 * @property {boolean} [is_active]
 * @property {string} [item_type]
 * @property {Object[]} [sizes]
 * @property {string} [category_slug]
 * @property {string[]} [highlights]
 * @property {string} [primary_color]
 * @property {string} [image_nature]
 * @property {boolean} [is_set]
 * @property {Object} [tax_identifier]
 * @property {ProductPublished} [product_publish]
 * @property {Media1[]} [media]
 * @property {string} [name]
 * @property {boolean} [is_physical]
 * @property {Brand} [brand]
 * @property {boolean} [is_expirable]
 * @property {Object} [_custom_json]
 * @property {string} [country_of_origin]
 * @property {Object} [variants]
 * @property {number[]} [departments]
 * @property {Object[]} [all_sizes]
 * @property {string} [item_code]
 * @property {boolean} [is_dependent]
 * @property {number} [category_uid]
 * @property {string[]} [l3_mapping]
 */

/**
 * @typedef ProductListingResponse
 * @property {Page} [page]
 * @property {Product[]} [items]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {boolean} [variant]
 * @property {string} [raw_key]
 * @property {string} [description]
 * @property {string} [unit]
 * @property {Object} [modified_by]
 * @property {boolean} [is_nested]
 * @property {string} slug
 * @property {string[]} [tags]
 * @property {string} [suggestion]
 * @property {Object} [synonyms]
 * @property {string} [logo]
 * @property {string} [name]
 * @property {Object} [created_by]
 * @property {AttributeMasterDetails} details
 * @property {string} [modified_on]
 * @property {string[]} departments
 * @property {string} [created_on]
 * @property {AttributeMaster} schema
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterFilter} filters
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
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [email]
 * @property {string} [uid]
 */

/**
 * @typedef BulkJob
 * @property {UserInfo1} [created_by]
 * @property {string} [tracking_url]
 * @property {number} company_id
 * @property {Object[]} [cancelled_records]
 * @property {number} [succeed]
 * @property {string} created_on
 * @property {string} [template_tag]
 * @property {string} [file_path]
 * @property {UserInfo1} [modified_by]
 * @property {string} [modified_on]
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {Object[]} [failed_records]
 * @property {number} [failed]
 * @property {number} total
 * @property {string} [custom_template_tag]
 * @property {boolean} [is_active]
 */

/**
 * @typedef BulkResponse
 * @property {UserInfo1} [created_by]
 * @property {string} created_on
 * @property {string} batch_id
 * @property {UserInfo1} [modified_by]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 */

/**
 * @typedef UserDetail1
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [full_name]
 */

/**
 * @typedef ProductBulkRequest
 * @property {UserDetail1} [created_by]
 * @property {number} [company_id]
 * @property {string[]} [cancelled_records]
 * @property {number} [succeed]
 * @property {string} [created_on]
 * @property {number} [total]
 * @property {string} [file_path]
 * @property {string} [modified_on]
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {UserDetail1} [modified_by]
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {string} [template_tag]
 * @property {ProductTemplate} [template]
 * @property {boolean} [is_active]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {Page} [page]
 * @property {ProductBulkRequest} [items]
 */

/**
 * @typedef BulkProductRequest
 * @property {number} company_id
 * @property {string} template_tag
 * @property {string} batch_id
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
 * @typedef ProductBulkAssets
 * @property {number} [company_id]
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef UserCommon
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {number} [company_id]
 */

/**
 * @typedef Items
 * @property {UserCommon} [created_by]
 * @property {string} [tracking_url]
 * @property {number} [retry]
 * @property {number} [company_id]
 * @property {string[]} [cancelled_records]
 * @property {number} [succeed]
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {string} [file_path]
 * @property {string} [modified_on]
 * @property {UserCommon} [modified_by]
 * @property {string} [stage]
 * @property {number} [cancelled]
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {number} [total]
 * @property {boolean} [is_active]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Page} [page]
 * @property {Items[]} [items]
 */

/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [company_id]
 * @property {string} [size]
 * @property {number} [item_id]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {boolean} [success]
 * @property {ProductSizeDeleteDataResponse} [data]
 */

/**
 * @typedef ItemQuery
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 * @property {number} [uid]
 */

/**
 * @typedef GTIN
 * @property {string} gtin_value
 * @property {string} gtin_type
 * @property {boolean} [primary]
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
 * @typedef InvSize
 * @property {number} [item_weight]
 * @property {number} [item_length]
 * @property {GTIN[]} identifiers
 * @property {string} currency
 * @property {number} [item_width]
 * @property {number} [item_height]
 * @property {InventorySet} [set]
 * @property {number} [price]
 * @property {number} quantity
 * @property {boolean} [is_set]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [price_transfer]
 * @property {string} store_code
 * @property {number} price_effective
 * @property {string} [expiration_date]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} size
 */

/**
 * @typedef InventoryRequest
 * @property {number} company_id
 * @property {ItemQuery} item
 * @property {InvSize[]} sizes
 */

/**
 * @typedef InventoryResponse
 * @property {string} [currency]
 * @property {Object} [identifiers]
 * @property {Object} [store]
 * @property {string} [inventory_updated_on]
 * @property {number} [price]
 * @property {number} [quantity]
 * @property {string} [uid]
 * @property {number} [price_transfer]
 * @property {number} [price_effective]
 * @property {string} [size]
 * @property {number} [sellable_quantity]
 * @property {string} [seller_identifier]
 * @property {number} [item_id]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [not_available]
 */

/**
 * @typedef PriceMeta
 * @property {string} currency
 * @property {number} effective
 * @property {number} transfer
 * @property {string} [updated_at]
 * @property {number} marked
 * @property {Object} [tp_notes]
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} name
 * @property {boolean} is_default
 * @property {string} address
 */

/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef WeightResponse
 * @property {number} shipping
 * @property {string} unit
 * @property {boolean} is_default
 */

/**
 * @typedef ReturnConfig1
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef DimensionResponse
 * @property {string} unit
 * @property {boolean} is_default
 * @property {number} width
 * @property {number} height
 * @property {number} length
 */

/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} name
 * @property {string} type
 */

/**
 * @typedef InventorySellerResponse
 * @property {string} uid
 * @property {UserSerializer} [modified_by]
 * @property {string} [stage]
 * @property {CompanyMeta} company
 * @property {boolean} [is_active]
 * @property {Quantities} [quantities]
 * @property {InventorySet} [set]
 * @property {PriceMeta} price
 * @property {ManufacturerResponse} manufacturer
 * @property {string[]} [tags]
 * @property {string} fynd_item_code
 * @property {number} total_quantity
 * @property {string} fynd_article_code
 * @property {boolean} [is_set]
 * @property {Object} [tax_identifier]
 * @property {boolean} fragile
 * @property {string} seller_identifier
 * @property {Object} identifier
 * @property {string} size
 * @property {Object} [meta]
 * @property {StoreMeta} store
 * @property {UserSerializer} [created_by]
 * @property {string} [added_on_store]
 * @property {BrandMeta} brand
 * @property {boolean} [track_inventory]
 * @property {string} [expiration_date]
 * @property {Object} [fynd_meta]
 * @property {WeightResponse} weight
 * @property {Object} [_custom_json]
 * @property {Object} [raw_meta]
 * @property {ReturnConfig1} [return_config]
 * @property {string} country_of_origin
 * @property {DimensionResponse} dimension
 * @property {Trader1[]} [trader]
 * @property {number} item_id
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {Object} [created_by]
 * @property {number} [company_id]
 * @property {string[]} [cancelled_records]
 * @property {number} [succeed]
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {string} [file_path]
 * @property {Object} [modified_by]
 * @property {number} [cancelled]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {number} [total]
 * @property {boolean} [is_active]
 */

/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} [currency]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} [price]
 * @property {number} [quantity]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} store_code
 * @property {string[]} [tags]
 * @property {number} [total_quantity]
 * @property {string} [expiration_date]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} seller_identifier
 */

/**
 * @typedef InventoryBulkRequest
 * @property {number} company_id
 * @property {string} batch_id
 * @property {Object} [user]
 * @property {InventoryJobPayload[]} sizes
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [brand]
 * @property {number[]} [store]
 * @property {string} [type]
 */

/**
 * @typedef InventoryExportResponse
 * @property {string} task_id
 * @property {number} seller_id
 * @property {Object} [request_params]
 * @property {string} [trigger_on]
 * @property {string} [status]
 */

/**
 * @typedef InventoryExportJob
 * @property {string} task_id
 * @property {number} seller_id
 * @property {Object} [request_params]
 * @property {string} [url]
 * @property {string} [trigger_on]
 * @property {string} [completed_on]
 * @property {string} [status]
 */

/**
 * @typedef FilerList
 * @property {string} [display]
 * @property {string} [value]
 */

/**
 * @typedef InventoryConfig
 * @property {boolean} [multivalues]
 * @property {FilerList[]} [data]
 */

/**
 * @typedef InventoryPayload
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} store_id
 * @property {string[]} [tags]
 * @property {number} [total_quantity]
 * @property {string} [expiration_date]
 * @property {string} seller_identifier
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {number} company_id
 * @property {InventoryPayload[]} [payload]
 * @property {Object} [meta]
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} message
 * @property {string} [errors]
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
 * @typedef HsnUpsert
 * @property {boolean} [tax_on_esp]
 * @property {string} hs2_code
 * @property {number} [threshold2]
 * @property {boolean} tax_on_mrp
 * @property {number} company_id
 * @property {number} threshold1
 * @property {number} [uid]
 * @property {number} [tax2]
 * @property {string} hsn_code
 * @property {number} tax1
 * @property {boolean} [is_active]
 */

/**
 * @typedef HsnCodesObject
 * @property {boolean} [tax_on_esp]
 * @property {string} [hs2_code]
 * @property {number} [threshold2]
 * @property {boolean} [tax_on_mrp]
 * @property {number} [company_id]
 * @property {number} [threshold1]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {number} [tax2]
 * @property {string} [hsn_code]
 * @property {number} [tax1]
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef PageResponse
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [current]
 * @property {number} [size]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {PageResponse} [page]
 * @property {HsnCodesObject[]} [items]
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
 * @property {number} threshold
 * @property {number} [cess]
 * @property {number} rate
 */

/**
 * @typedef HSNDataInsertV2
 * @property {TaxSlab[]} taxes
 * @property {Object} [created_by]
 * @property {string} description
 * @property {string} [created_on]
 * @property {string} reporting_hsn
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} country_code
 * @property {string} hsn_code
 * @property {string} type
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */

/**
 * @typedef BrandItem
 * @property {string} [name]
 * @property {string[]} [departments]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {string} [discount]
 * @property {Media} [logo]
 * @property {string} [slug]
 */

/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */

/**
 * @typedef Department
 * @property {number} [priority_order]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Media} [logo]
 * @property {string} [slug]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef DepartmentIdentifier
 * @property {number} [uid]
 * @property {string} [slug]
 */

/**
 * @typedef ThirdLevelChild
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {Object[]} [childs]
 * @property {string} [slug]
 */

/**
 * @typedef SecondLevelChild
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [slug]
 */

/**
 * @typedef Child
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [slug]
 */

/**
 * @typedef CategoryItems
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {Child[]} [childs]
 * @property {string} [slug]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */

/**
 * @typedef CategoryListingResponse
 * @property {DepartmentIdentifier[]} [departments]
 * @property {DepartmentCategoryTree[]} [data]
 */

/**
 * @typedef ApplicationProductListingResponse
 * @property {Object} [operators]
 * @property {ProductFilters[]} [filters]
 * @property {Page} page
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef ProductDetail
 * @property {number} [rating]
 * @property {string} [description]
 * @property {number} [uid]
 * @property {boolean} [has_variant]
 * @property {string} [short_description]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [product_online_date]
 * @property {string[]} [similars]
 * @property {string} [color]
 * @property {string} slug
 * @property {string} [item_type]
 * @property {string[]} [highlights]
 * @property {string} [image_nature]
 * @property {number} [rating_count]
 * @property {Object} [teaser_tag]
 * @property {Media1[]} [medias]
 * @property {string} [name]
 * @property {ProductBrand} [brand]
 * @property {Object} [attributes]
 * @property {Object} [promo_meta]
 * @property {string} [item_code]
 * @property {string[]} [tryouts]
 * @property {string} [type]
 */

/**
 * @typedef InventoryPage
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {number} item_total
 * @property {boolean} [has_next]
 * @property {string} type
 */

/**
 * @typedef InventoryStockResponse
 * @property {InventoryPage} page
 * @property {Object[]} [items]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [contact]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [opening]
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {string} weekday
 */

/**
 * @typedef UserSerializer2
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [contact]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {number} [latitude]
 * @property {string} [landmark]
 * @property {string} [address1]
 * @property {string} [country]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [country_code]
 * @property {number} [longitude]
 * @property {string} [city]
 */

/**
 * @typedef GetCompanySerializer
 * @property {UserSerializer2} [created_by]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {string} [business_type]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [company_type]
 * @property {string} [modified_on]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [stage]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [username]
 * @property {string} [password]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */

/**
 * @typedef GetLocationSerializer
 * @property {string} code
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {string} display_name
 * @property {UserSerializer1} [modified_by]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [stage]
 * @property {GetCompanySerializer} [company]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer1} [verified_by]
 * @property {LocationIntegrationType} [integration_type]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer1} [created_by]
 * @property {string} name
 * @property {GetAddressSerializer} address
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [store_type]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {Document[]} [documents]
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {string} phone_number
 * @property {Object} [_custom_json]
 * @property {string} [created_on]
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
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
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
 * @typedef ContactDetails
 * @property {SellerPhoneNumber[]} [phone]
 * @property {string[]} [emails]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {number} [rate]
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {UserSerializer} [created_by]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [created_on]
 * @property {string} [business_info]
 * @property {BusinessDetails} [business_details]
 * @property {Object} [warnings]
 * @property {string} [verified_on]
 * @property {Document[]} [documents]
 * @property {string} [name]
 * @property {UserSerializer} [verified_by]
 * @property {string} [stage]
 * @property {ContactDetails} [contact_details]
 * @property {boolean} [franchise_enabled]
 * @property {string[]} [notification_emails]
 * @property {string} [mode]
 * @property {UserSerializer} [modified_by]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {number} uid
 * @property {string} company_type
 * @property {string} [modified_on]
 * @property {string} business_type
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {number} [rate]
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} address_type
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {number} longitude
 * @property {string} city
 * @property {number} latitude
 * @property {number} pincode
 * @property {string} [landmark]
 * @property {string} state
 * @property {string} country
 * @property {string} address1
 */

/**
 * @typedef UpdateCompany
 * @property {Document[]} [documents]
 * @property {string} [name]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {string} [company_type]
 * @property {string} [business_info]
 * @property {BusinessDetails} [business_details]
 * @property {boolean} [franchise_enabled]
 * @property {Object} [_custom_json]
 * @property {ContactDetails} [contact_details]
 * @property {string[]} [notification_emails]
 * @property {string} [business_type]
 * @property {string} [reject_reason]
 * @property {Object} [warnings]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [verified]
 * @property {number} [pending]
 */

/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [brand]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [product]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {string[]} [synonyms]
 * @property {string} [slug_key]
 * @property {Object} [warnings]
 * @property {string} [verified_on]
 * @property {string} name
 * @property {string} [description]
 * @property {UserSerializer} [verified_by]
 * @property {string} [stage]
 * @property {Object} [_locale_language]
 * @property {string} [mode]
 * @property {string} [logo]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [modified_by]
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [reject_reason]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string} name
 * @property {string} logo
 * @property {number} [uid]
 * @property {string} [description]
 * @property {string[]} [synonyms]
 * @property {Object} [_custom_json]
 * @property {number} [company_id]
 * @property {Object} [_locale_language]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [brand_tier]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} url
 * @property {string} name
 */

/**
 * @typedef CompanyDetails
 * @property {string} [website_url]
 * @property {CompanySocialAccounts[]} [socials]
 */

/**
 * @typedef CompanySerializer
 * @property {CompanyDetails} [details]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [stage]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [created_on]
 * @property {string} company_type
 * @property {string[]} [market_channels]
 * @property {Object} [_custom_json]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string[]} [notification_emails]
 * @property {string} business_type
 * @property {string} [reject_reason]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {CompanySerializer} [company]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [reject_reason]
 * @property {Object} [warnings]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {Page} [page]
 * @property {CompanyBrandSerializer[]} [items]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} company
 * @property {number[]} brands
 * @property {number} [uid]
 */

/**
 * @typedef LocationSerializer
 * @property {string} [store_type]
 * @property {string} code
 * @property {Document[]} [documents]
 * @property {string} name
 * @property {string} display_name
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {number} company
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {GetAddressSerializer} address
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Object} [_custom_json]
 * @property {LocationManagerSerializer} [manager]
 * @property {string[]} [notification_emails]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {Object} [warnings]
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
 * @property {boolean} [empty_cart]
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
 * @property {PaymentModeConfig} [jiopplink]
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
 * @typedef State
 * @property {boolean} [is_archived]
 * @property {boolean} [is_public]
 * @property {boolean} [is_display]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [end]
 * @property {string} [start]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [auto]
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [description]
 * @property {DisplayMetaDict} [apply]
 */

/**
 * @typedef Ownership
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
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
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [types]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [codes]
 * @property {string[]} [networks]
 */

/**
 * @typedef Restrictions
 * @property {UsesRestriction} [uses]
 * @property {string[]} [platforms]
 * @property {number[]} [user_groups]
 * @property {PostOrder} [post_order]
 * @property {boolean} [coupon_allowed]
 * @property {number[]} [ordering_stores]
 * @property {PriceRange} [price_range]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {Object} [payments]
 */

/**
 * @typedef RuleDefinition
 * @property {boolean} [is_exact]
 * @property {string} applicable_on
 * @property {boolean} [auto_apply]
 * @property {string} [currency_code]
 * @property {string} calculate_on
 * @property {string[]} [scope]
 * @property {string} value_type
 * @property {string} type
 */

/**
 * @typedef Rule
 * @property {number} [max]
 * @property {number} [min]
 * @property {number} [value]
 * @property {number} [key]
 * @property {number} [discount_qty]
 */

/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef CouponAdd
 * @property {string} code
 * @property {State} [state]
 * @property {CouponSchedule} [_schedule]
 * @property {Validity} validity
 * @property {CouponAction} [action]
 * @property {DisplayMeta} display_meta
 * @property {Ownership} ownership
 * @property {string} type_slug
 * @property {CouponAuthor} [author]
 * @property {CouponDateMeta} [date_meta]
 * @property {Identifier} identifiers
 * @property {string[]} [tags]
 * @property {Restrictions} [restrictions]
 * @property {RuleDefinition} rule_definition
 * @property {Rule[]} rule
 * @property {Validation} [validation]
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
 * @property {string} code
 * @property {State} [state]
 * @property {CouponSchedule} [_schedule]
 * @property {Validity} validity
 * @property {CouponAction} [action]
 * @property {DisplayMeta} display_meta
 * @property {Ownership} ownership
 * @property {string} type_slug
 * @property {CouponAuthor} [author]
 * @property {CouponDateMeta} [date_meta]
 * @property {Identifier} identifiers
 * @property {string[]} [tags]
 * @property {Restrictions} [restrictions]
 * @property {RuleDefinition} rule_definition
 * @property {Rule[]} rule
 * @property {Validation} [validation]
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef PromotionSchedule
 * @property {string} [end]
 * @property {boolean} published
 * @property {string} start
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 */

/**
 * @typedef CompareObject
 * @property {number} [less_than_equals]
 * @property {number} [greater_than_equals]
 * @property {number} [equals]
 * @property {number} [greater_than]
 * @property {number} [less_than]
 */

/**
 * @typedef ItemCriteria
 * @property {number[]} [item_exclude_category]
 * @property {string[]} [item_size]
 * @property {number[]} [item_brand]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_store]
 * @property {number[]} [item_company]
 * @property {string[]} [item_exclude_sku]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_exclude_company]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_exclude_store]
 * @property {boolean} [all_items]
 * @property {number[]} [item_category]
 * @property {string[]} [available_zones]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_brand]
 * @property {CompareObject} [cart_quantity]
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [max_offer_quantity]
 * @property {string} [code]
 * @property {number} [max_discount_amount]
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_percentage]
 * @property {number} [discount_price]
 * @property {number} [discount_amount]
 * @property {number} [max_usage_per_transaction]
 * @property {boolean} [partial_can_ret]
 * @property {boolean} [apportion_discount]
 */

/**
 * @typedef DiscountRule
 * @property {ItemCriteria} item_criteria
 * @property {string} discount_type
 * @property {DiscountOffer} offer
 * @property {string} buy_condition
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [offer_text]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
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
 * @property {string[]} [codes]
 * @property {string} type
 */

/**
 * @typedef Restrictions1
 * @property {UsesRestriction1} uses
 * @property {string[]} [platforms]
 * @property {UserRegistered} [user_registered]
 * @property {number[]} [user_groups]
 * @property {PostOrder1} [post_order]
 * @property {string[]} [user_id]
 * @property {number} [order_quantity]
 * @property {boolean} [anonymous_users]
 * @property {PromotionPaymentModes[]} [payments]
 */

/**
 * @typedef PromotionListItem
 * @property {string} [apply_exclusive]
 * @property {PromotionSchedule} [_schedule]
 * @property {Object} [_custom_json]
 * @property {Object} buy_rules
 * @property {boolean} [stackable]
 * @property {string} [code]
 * @property {boolean} [apply_all_discount]
 * @property {Visibility} [visiblility]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {string} application_id
 * @property {string} mode
 * @property {string} promotion_type
 * @property {DiscountRule[]} discount_rules
 * @property {string} [currency]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {string} [calculate_on]
 * @property {Restrictions1} [restrictions]
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {string} [apply_exclusive]
 * @property {PromotionSchedule} [_schedule]
 * @property {Object} [_custom_json]
 * @property {Object} buy_rules
 * @property {boolean} [stackable]
 * @property {string} [code]
 * @property {boolean} [apply_all_discount]
 * @property {Visibility} [visiblility]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {string} application_id
 * @property {string} mode
 * @property {string} promotion_type
 * @property {DiscountRule[]} discount_rules
 * @property {string} [currency]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {string} [calculate_on]
 * @property {Restrictions1} [restrictions]
 */

/**
 * @typedef PromotionUpdate
 * @property {string} [apply_exclusive]
 * @property {PromotionSchedule} [_schedule]
 * @property {Object} [_custom_json]
 * @property {Object} buy_rules
 * @property {boolean} [stackable]
 * @property {string} [code]
 * @property {boolean} [apply_all_discount]
 * @property {Visibility} [visiblility]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {string} application_id
 * @property {string} mode
 * @property {string} promotion_type
 * @property {DiscountRule[]} discount_rules
 * @property {string} [currency]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {string} [calculate_on]
 * @property {Restrictions1} [restrictions]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [subtitle]
 * @property {string} [created_on]
 * @property {string} [title]
 * @property {string} [modified_on]
 * @property {string} [entity_type]
 * @property {string} [description]
 * @property {boolean} [is_hidden]
 * @property {string} [entity_slug]
 * @property {string} [example]
 * @property {string} [type]
 */

/**
 * @typedef CartItem
 * @property {string} size
 * @property {string} product_id
 * @property {number} [quantity]
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [code]
 * @property {boolean} [is_applied]
 * @property {number} [value]
 * @property {string} [uid]
 * @property {string} [message]
 * @property {string} [type]
 */

/**
 * @typedef LoyaltyPoints
 * @property {number} [applicable]
 * @property {string} [description]
 * @property {number} [total]
 * @property {boolean} [is_applied]
 */

/**
 * @typedef RawBreakup
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {number} [gst_charges]
 * @property {number} [you_saved]
 * @property {number} [discount]
 * @property {number} [convenience_fee]
 * @property {number} [fynd_cash]
 * @property {number} [mrp_total]
 * @property {number} [delivery_charge]
 * @property {number} [cod_charge]
 * @property {number} [coupon]
 * @property {number} [vog]
 */

/**
 * @typedef DisplayBreakup
 * @property {number} [value]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {string} [key]
 * @property {string[]} [message]
 * @property {string} [display]
 */

/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 * @property {DisplayBreakup[]} [display]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 * @property {number} [other_store_quantity]
 * @property {boolean} [deliverable]
 * @property {string[]} [sizes]
 */

/**
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef ProductImage
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
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
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef CartProduct
 * @property {CategoryInfo[]} [categories]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {ProductImage[]} [images]
 * @property {ProductAction} [action]
 * @property {number} [uid]
 * @property {BaseInfo} [brand]
 * @property {string} [type]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef BasePrice
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */

/**
 * @typedef ProductArticle
 * @property {string} [size]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {BaseInfo} [seller]
 * @property {string} [uid]
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [extra_meta]
 * @property {BaseInfo} [store]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [type]
 */

/**
 * @typedef ProductPrice
 * @property {number} [marked]
 * @property {number} [add_on]
 * @property {number} [selling]
 * @property {number} [effective]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef FreeGiftItem
 * @property {Object} [item_price_details]
 * @property {string} [item_name]
 * @property {string[]} [item_images_url]
 * @property {string} [item_slug]
 * @property {string} [item_brand_name]
 * @property {number} [item_id]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {string} [parent_item_identifier]
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {string} [article_id]
 * @property {number} [quantity]
 */

/**
 * @typedef DiscountRulesApp
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [item_criteria]
 * @property {Object} [offer]
 * @property {Object} [raw_offer]
 */

/**
 * @typedef AppliedPromotion
 * @property {string} [promotion_type]
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {boolean} [mrp_promotion]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_group]
 * @property {string} [promotion_name]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [promo_id]
 * @property {string} [offer_text]
 */

/**
 * @typedef CartProductInfo
 * @property {number} [quantity]
 * @property {ProductAvailability} [availability]
 * @property {string} [coupon_message]
 * @property {string} [discount]
 * @property {CartProduct} [product]
 * @property {boolean} [is_set]
 * @property {PromoMeta} [promo_meta]
 * @property {ProductArticle} [article]
 * @property {ProductPriceInfo} [price]
 * @property {Object} [bulk_offer]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [key]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [message]
 * @property {ProductPriceInfo} [price_per_unit]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {boolean} [is_valid]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {Object} [errors]
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef ShippingAddress
 * @property {string} [city]
 * @property {string} [address]
 * @property {Object} [meta]
 * @property {string} [area]
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [name]
 * @property {string} [landmark]
 * @property {string} area_code
 * @property {string} [area_code_slug]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {number} [phone]
 * @property {string} [address_type]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem} [cart_items]
 * @property {ShippingAddress} shipping_address
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [min]
 * @property {string} [max]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseFormatted} [formatted]
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 */

/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item]
 * @property {string} [group_id]
 */

/**
 * @typedef OpenApiOrderItem
 * @property {number} product_id
 * @property {OpenApiFiles[]} [files]
 * @property {CartItemMeta} [meta]
 * @property {number} amount_paid
 * @property {number} [quantity]
 * @property {number} price_marked
 * @property {number} discount
 * @property {number} price_effective
 * @property {string} size
 * @property {number} [employee_discount]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} delivery_charges
 * @property {Object} [extra_meta]
 * @property {number} [loyalty_discount]
 * @property {number} cashback_applied
 * @property {number} coupon_effective_discount
 * @property {number} cod_charges
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {ShippingAddress} billing_address
 * @property {number} cart_value
 * @property {OpenApiFiles[]} [files]
 * @property {string} coupon_code
 * @property {ShippingAddress} [shipping_address]
 * @property {Object} [employee_discount]
 * @property {number} delivery_charges
 * @property {string} [comment]
 * @property {number} cashback_applied
 * @property {OpenApiOrderItem[]} cart_items
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} [payment_mode]
 * @property {string} [gstin]
 * @property {number} [loyalty_discount]
 * @property {string} [order_id]
 * @property {string} [currency_code]
 * @property {string} [coupon]
 * @property {number} coupon_value
 * @property {number} cod_charges
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} [order_ref_id]
 * @property {string} [message]
 * @property {string} order_id
 */

/**
 * @typedef AbandonedCart
 * @property {string} expire_at
 * @property {number} [cart_value]
 * @property {string} user_id
 * @property {Object[]} articles
 * @property {Object[]} [shipments]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [comment]
 * @property {Object} [payments]
 * @property {boolean} [is_active]
 * @property {string} [checkout_mode]
 * @property {boolean} [is_archive]
 * @property {number} [discount]
 * @property {number[]} [fc_index_map]
 * @property {Object} [fynd_credits]
 * @property {string} [payment_mode]
 * @property {Object} [coupon]
 * @property {Object} [cod_charges]
 * @property {string} _id
 * @property {number} [bulk_coupon_discount]
 * @property {number} uid
 * @property {Object} [delivery_charges]
 * @property {Object} [promotion]
 * @property {Object} cashback
 * @property {boolean} is_default
 * @property {boolean} [buy_now]
 * @property {string} [app_id]
 * @property {Object} [meta]
 * @property {string} created_on
 * @property {boolean} [merge_qty]
 * @property {Object[]} [payment_methods]
 * @property {string} [gstin]
 * @property {string} [order_id]
 * @property {string} last_modified
 */

/**
 * @typedef AbandonedCartResponse
 * @property {Object} [result]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {AbandonedCart[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AddProductCart
 * @property {Object} [article_assignment]
 * @property {number} [store_id]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {boolean} [pos]
 * @property {number} [seller_id]
 * @property {string} [item_size]
 * @property {Object} [extra_meta]
 * @property {string} [article_id]
 * @property {number} [item_id]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [display]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef CartCurrency
 * @property {string} [code]
 * @property {string} [symbol]
 */

/**
 * @typedef CartDetailResponse
 * @property {string} [delivery_charge_info]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [restrict_checkout]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {boolean} [is_valid]
 * @property {CartCurrency} [currency]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [id]
 * @property {string} [gstin]
 * @property {string} [comment]
 * @property {string} [last_modified]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {string} [message]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [partial]
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 */

/**
 * @typedef UpdateProductCart
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {number} [item_index]
 * @property {Object} [extra_meta]
 * @property {string} [article_id]
 * @property {number} [item_id]
 * @property {CartProductIdentifer} identifiers
 * @property {Object} [parent_item_identifiers]
 */

/**
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
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
