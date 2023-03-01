export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    common: Common;
    lead: Lead;
    billing: Billing;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    companyProfile: CompanyProfile;
    fileStorage: FileStorage;
    inventory: Inventory;
    configuration: Configuration;
    analytics: Analytics;
    discount: Discount;
    webhook: Webhook;
    auditTrail: AuditTrail;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, Code, PaymentCode, GetPaymentCode, getPaymentCodeResponse, FilterInfoOption, FiltersInfo, PaymentModeInfo, ShipmentItemFulFillingStore, Prices, ShipmentStatus, PlatformItem, GSTDetailsData, BagUnit, UserDataInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, ShipmentPayments, DPDetailsData, PlatformDeliveryAddress, BagConfigs, Identifier, FinancialBreakup, OrderBagArticle, OrderBrandName, BagGST, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBags, OrderDetailsData, TrackingList, FulfillingStore, UserDetailsData, BagStateMapper, BagStatusHistory, ShipmentStatusData, ShipmentInfoResponse, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailItem, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, StoreAddress, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, Document, StoreDocuments, StoreMeta, Store, B2BPODetails, BagMeta, Weight, ReturnConfig, Dimensions, Article, Brand, AffiliateMeta, AffiliateBagDetails, BagGSTDetails, Attributes, Item, Dates, LockData, EInvoice, EinvoiceInfo, BuyerDetails, Formatted, ShipmentTimeStamp, DebugInfo, ShipmentMeta, PDFLinks, AffiliateDetails, ArticleDetails, BagReturnableCancelableStatus, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, OrderUser, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, UserData, OrderPriority, MarketPlacePdf, AffiliateBag, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ProcessingDates, Tax, Charge, LineItem, Shipment, ShippingInfo, TaxInfo, BillingInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQ, ApplicationItemResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, BannerImage, ImageUrls, CollectionQuery, Media1, GetCollectionDetailNest, GetCollectionListingResponse, UserInfo, CollectionBadge, CollectionImage, CollectionBanner, SeoDetail, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, CategoryMappingValues, CategoryMapping, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, Image, Logo, ProductPublished, Product, ProductListingResponse, ProductPublish, TaxIdentifier, TeaserTag, CustomOrder, Trader, NetQuantity, ProductCreateUpdate, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, ManufacturerResponse, BrandMeta, CompanyMeta, ReturnConfig1, QuantityBase, Quantities, PriceMeta, Trader1, WeightResponse, DimensionResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, SellerPhoneNumber, LocationManagerSerializer, UserSerializer1, LocationIntegrationType, UserSerializer2, GetAddressSerializer, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationTimingSerializer, LocationDayWiseSerializer, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationStoreJson, CompanyTaxesSerializer, ContactDetails, Website, BusinessDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validation, Rule, CouponDateMeta, CouponSchedule, CouponAuthor, State, DisplayMetaDict, DisplayMeta, CouponAction, PostOrder, PriceRange, PaymentAllowValue, PaymentModes, BulkBundleRestriction, UsesRemaining, UsesRestriction, Restrictions, Validity, RuleDefinition, Ownership, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionDateMeta, CompareObject, ItemCriteria, PromotionSchedule, Visibility, PostOrder1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, Restrictions1, PromotionAction, DiscountOffer, DiscountRule, PromotionAuthor, DisplayMeta1, Ownership1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductAvailability, PromoMeta, ProductPrice, ProductPriceInfo, CategoryInfo, ProductImage, BaseInfo, ActionQuery, ProductAction, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, CartProductIdentifer, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, CartProductInfo, LoyaltyPoints, RawBreakup, DisplayBreakup, CouponBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
import Common = require("./client/CommonPlatformClient");
import Lead = require("./client/LeadPlatformClient");
import Billing = require("./client/BillingPlatformClient");
import Communication = require("./client/CommunicationPlatformClient");
import Payment = require("./client/PaymentPlatformClient");
import Order = require("./client/OrderPlatformClient");
import Catalog = require("./client/CatalogPlatformClient");
import CompanyProfile = require("./client/CompanyProfilePlatformClient");
import FileStorage = require("./client/FileStoragePlatformClient");
import Inventory = require("./client/InventoryPlatformClient");
import Configuration = require("./client/ConfigurationPlatformClient");
import Analytics = require("./client/AnalyticsPlatformClient");
import Discount = require("./client/DiscountPlatformClient");
import Webhook = require("./client/WebhookPlatformClient");
import AuditTrail = require("./client/AuditTrailPlatformClient");
import PlatformApplicationClient = require("./PlatformApplicationClient");
type ApplicationResponse = {
    application?: Application;
};
type Currency = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
    symbol?: string;
};
type Domain = {
    verified?: boolean;
    is_primary?: boolean;
    is_shortlink?: boolean;
    _id?: string;
    name?: string;
    is_predefined?: boolean;
};
type ApplicationWebsite = {
    enabled?: boolean;
    basepath?: string;
};
type ApplicationCors = {
    domains?: string[];
};
type ApplicationAuth = {
    enabled?: boolean;
};
type ApplicationRedirections = {
    redirect_from?: string;
    redirect_to?: string;
    type?: string;
};
type ApplicationMeta = {
    name?: string;
    value?: string;
};
type SecureUrl = {
    secure_url?: string;
};
type Application = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    description?: string;
    channel_type?: string;
    cache_ttl?: number;
    is_internal?: boolean;
    is_active?: boolean;
    _id?: string;
    name?: string;
    owner?: string;
    company_id?: number;
    token?: string;
    redirections?: ApplicationRedirections[];
    meta?: ApplicationMeta[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Domain[];
    app_type?: string;
    mobile_logo?: SecureUrl;
    domain?: Domain;
};
type NotFound = {
    message?: string;
};
type BadRequest = {
    message?: string;
};
type LocationDefaultLanguage = {
    name?: string;
    code?: string;
};
type LocationDefaultCurrency = {
    name?: string;
    symbol?: string;
    code?: string;
};
type LocationCountry = {
    capital?: string;
    currency?: string;
    iso2?: string;
    iso3?: string;
    name?: string;
    parent?: string;
    phone_code?: string;
    type?: string;
    uid?: number;
    __v?: number;
    _id?: string;
    default_currency?: LocationDefaultCurrency;
    default_language?: LocationDefaultLanguage;
};
type Locations = {
    items?: any[];
};
type TicketList = {
    items?: Ticket[];
    filters?: Filter;
    page?: Page;
};
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
type TicketHistoryList = {
    items?: TicketHistory[];
    page?: Page;
};
type CustomFormList = {
    items?: CustomForm[];
    page?: Page;
};
type CreateCustomFormPayload = {
    slug: string;
    title: string;
    inputs: any[];
    description?: string;
    header_image?: string;
    priority: any;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: any[];
    description?: string;
    priority: any;
    header_image?: string;
    should_notify?: boolean;
    login_required?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditTicketPayload = {
    content?: TicketContent;
    category?: string;
    sub_category?: string;
    source?: string;
    status?: string;
    priority?: any;
    assigned_to?: AgentChangePayload;
    tags?: string[];
};
type AgentChangePayload = {
    agent_id: string;
};
type CreateVideoRoomResponse = {
    unique_name: string;
};
type CloseVideoRoomResponse = {
    success: boolean;
};
type CreateVideoRoomPayload = {
    unique_name: string;
    notify?: NotifyUser[];
};
type NotifyUser = {
    country_code: string;
    phone_number: string;
};
type Filter = {
    priorities: Priority[];
    categories?: TicketCategory[];
    statuses: Status[];
    assignees: any[];
};
type TicketHistoryPayload = {
    value: any;
    type: any;
};
type CustomFormSubmissionPayload = {
    response: any[];
    attachments?: TicketAsset[];
};
type GetTokenForVideoRoomResponse = {
    access_token: string;
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Participant[];
};
type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
};
type Email = {
    primary?: boolean;
    verified?: boolean;
    email?: string;
    active?: boolean;
};
type Debug = {
    source?: string;
    platform?: string;
};
type SubmitCustomFormResponse = {
    message: string;
    ticket: Ticket;
};
type TicketContext = {
    application_id?: string;
    company_id: string;
};
type CreatedOn = {
    user_agent: string;
};
type TicketAsset = {
    display?: string;
    value: string;
    type: any;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: TicketAsset[];
};
type AddTicketPayload = {
    created_by?: any;
    status?: string;
    priority?: any;
    category: string;
    content: TicketContent;
    _custom_json?: any;
};
type Priority = {
    key: any;
    display: string;
    color: string;
};
type Status = {
    key: string;
    display: string;
    color: string;
};
type TicketFeedbackForm = {
    title: string;
    display?: any[];
};
type TicketFeedbackList = {
    items?: TicketFeedback[];
};
type TicketFeedbackPayload = {
    form_response?: any;
};
type SubmitButton = {
    title: string;
    title_color: string;
    background_color: string;
};
type PollForAssignment = {
    duration: number;
    message: string;
    success_message: string;
    failure_message: string;
};
type CustomForm = {
    application_id: string;
    slug: string;
    header_image?: string;
    title: string;
    description?: string;
    priority: Priority;
    login_required: boolean;
    should_notify: boolean;
    success_message?: string;
    submit_button?: SubmitButton;
    inputs: any[];
    created_on?: CreatedOn;
    poll_for_assignment?: PollForAssignment;
    _id: string;
};
type CommunicationDetails = {
    type?: string;
    title?: string;
    value?: string;
    description?: string;
    enabled?: boolean;
};
type SupportGeneralConfig = {
    _id?: string;
    support_email?: CommunicationDetails;
    support_phone?: CommunicationDetails;
    support_faq?: CommunicationDetails;
    show_communication_info?: boolean;
    support_communication?: CommunicationDetails;
    show_support_dris?: boolean;
    integration?: any;
};
type FeedbackForm = {
    inputs?: any;
    title?: string;
    timestamps?: any;
};
type TicketSubCategory = {
    key: string;
    display: string;
    sub_categories?: TicketSubCategory;
};
type TicketCategory = {
    display: string;
    key: string;
    sub_categories?: TicketCategory;
    group_id?: number;
    feedback_form?: FeedbackForm;
};
type CategoryData = {
    list?: TicketCategory;
};
type IntegrationConfig = {
    _id?: string;
    integration_type: string;
    base_url?: string;
    create_ticket_apikey?: string;
    update_ticket_apikey?: string;
    category_sync_apikey?: string;
    category_data?: CategoryData;
    webhook_apikey?: string;
    config_completed?: boolean;
    allow_ticket_creation: boolean;
    show_listing: boolean;
};
type FeedbackResponseItem = {
    display: string;
    key: string;
    value: string;
};
type TicketFeedback = {
    _id: string;
    ticket_id: string;
    company_id: string;
    response: FeedbackResponseItem[];
    category?: string;
    user?: any;
    updated_at?: string;
    created_at?: string;
};
type TicketHistory = {
    type: string;
    value: any;
    ticket_id: string;
    created_on?: CreatedOn;
    created_by?: any;
    _id: string;
    updated_at?: string;
    created_at?: string;
};
type Ticket = {
    context?: TicketContext;
    created_on?: CreatedOn;
    response_id?: string;
    content?: TicketContent;
    category: string;
    sub_category?: string;
    source: any;
    status: Status;
    priority: Priority;
    created_by?: any;
    assigned_to?: any;
    tags?: string[];
    _custom_json?: any;
    is_feedback_pending?: boolean;
    integration?: any;
    _id: string;
    updated_at?: string;
    created_at?: string;
};
type AvailablePageSchema = {
    value?: string;
    text?: string;
    path?: string;
    type?: string;
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    theme?: string;
    seo?: AvailablePageSeo;
    props?: any[];
    _id?: string;
};
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
type AvailablePageSeo = {
    title?: string;
    description?: string;
    _id?: string;
};
type AvailablePageSchemaSections = {
    name?: string;
    label?: string;
    props?: any;
    blocks?: any[];
    preset?: any;
    predicate?: AvailablePagePredicate;
};
type AvailablePageScreenPredicate = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
type AvailablePageUserPredicate = {
    authenticated?: boolean;
    anonymous?: boolean;
};
type AvailablePageRoutePredicate = {
    selected?: string;
    exact_url?: string;
    query?: any;
};
type AvailablePagePredicate = {
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
    route?: AvailablePageRoutePredicate;
};
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
type PaginationSchema = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    type?: string;
    current?: number;
};
type ThemesListingResponseSchema = {
    items?: ThemesSchema[];
    page?: PaginationSchema;
};
type AddThemeRequestSchema = {
    theme_id?: string;
};
type UpgradableThemeSchema = {
    parent_theme?: string;
    applied_theme?: string;
    upgrade?: boolean;
};
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
type BlitzkriegApiErrorSchema = {
    message?: string;
};
type BlitzkriegNotFoundSchema = {
    message?: string;
};
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
type FontsSchemaItems = {
    family?: string;
    variants?: string[];
    subsets?: string[];
    version?: string;
    last_modified?: string;
    files?: FontsSchemaItemsFiles;
    category?: string;
    kind?: string;
};
type FontsSchemaItemsFiles = {
    regular?: string;
    italic?: string;
    bold?: string;
};
type ThemesSchema = {
    application?: string;
    applied?: boolean;
    customized?: boolean;
    published?: boolean;
    archived?: boolean;
    created_at?: string;
    updated_at?: string;
    version?: string;
    parent_theme_version?: string;
    parent_theme?: string;
    information?: Information;
    tags?: string[];
    src?: Src;
    assets?: AssetsSchema;
    available_sections?: availableSectionSchema[];
    styles?: any;
    config?: Config;
    font?: Font;
    _id?: string;
    __v?: number;
    colors?: Colors;
};
type availableSectionSchema = {
    blocks?: Blocks[];
    name?: string;
    label?: string;
    props?: BlocksProps[];
};
type Information = {
    images?: Images;
    features?: string[];
    name?: string;
    description?: string;
};
type Images = {
    desktop?: string[];
    android?: string[];
    ios?: string[];
    thumbnail?: string[];
};
type Src = {
    link?: string;
};
type AssetsSchema = {
    umd_js?: UmdJs;
    common_js?: CommonJs;
    css?: Css;
};
type UmdJs = {
    link?: string;
    links?: string[];
};
type CommonJs = {
    link?: string;
};
type Css = {
    link?: string;
    links?: string[];
};
type Sections = {
    attributes?: string;
};
type Config = {
    preset?: Preset;
    global_schema?: GlobalSchema;
    current?: string;
    list?: ListSchemaItem[];
};
type Preset = {
    pages?: AvailablePageSchema[];
};
type GlobalSchema = {
    props?: GlobalSchemaProps[];
};
type ListSchemaItem = {
    global_config?: any;
    page?: ConfigPage[];
    name?: string;
};
type Colors = {
    bg_color?: string;
    primary_color?: string;
    secondary_color?: string;
    accent_color?: string;
    link_color?: string;
    button_secondary_color?: string;
};
type Custom = {
    props?: any;
};
type ConfigPage = {
    settings?: any;
    page?: string;
};
type Font = {
    family?: string;
    variants?: Variants;
};
type Variants = {
    medium?: Medium;
    semi_bold?: SemiBold;
    bold?: Bold;
    light?: Light;
    regular?: Regular;
};
type Medium = {
    name?: string;
    file?: string;
};
type SemiBold = {
    name?: string;
    file?: string;
};
type Bold = {
    name?: string;
    file?: string;
};
type Light = {
    name?: string;
    file?: string;
};
type Regular = {
    name?: string;
    file?: string;
};
type Blocks = {
    type?: string;
    name?: string;
    props?: BlocksProps[];
};
type GlobalSchemaProps = {
    id?: string;
    label?: string;
    type?: string;
    category?: string;
};
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type BlockUserRequestSchema = {
    status?: boolean;
    user_id?: string[];
    reason?: string;
};
type ArchiveUserRequestSchema = {
    user_id?: string;
};
type DeleteApplicationUserRequestSchema = {
    user_id?: string;
    reason?: string;
    reason_id?: string;
    request_id?: string;
    otp?: string;
};
type UnDeleteUserRequestSchema = {
    user_id?: string;
    reason?: string;
    reason_id?: string;
};
type EditEmailRequestSchema = {
    email?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
};
type EditMobileRequestSchema = {
    country_code?: string;
    phone?: string;
};
type EditProfileRequestSchema = {
    first_name?: string;
    last_name?: string;
    mobile?: EditProfileMobileSchema;
    country_code?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profile_pic_url?: string;
    android_hash?: string;
    sender?: string;
    register_token?: string;
};
type EditProfileMobileSchema = {
    phone?: string;
    country_code?: string;
};
type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    register_token?: string;
};
type VerifyEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    register_token?: string;
    otp?: string;
};
type VerifyOtpRequestSchema = {
    request_id?: string;
    register_token?: string;
    otp?: string;
};
type SendMobileOtpRequestSchema = {
    mobile?: string;
    country_code?: string;
    action?: string;
    token?: string;
    android_hash?: string;
    force?: string;
    captcha_code?: string;
};
type UpdatePasswordRequestSchema = {
    old_password?: string;
    new_password?: string;
};
type FormRegisterRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    email?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    register_token?: string;
};
type TokenRequestBodySchema = {
    token?: string;
};
type ForgotPasswordRequestSchema = {
    code?: string;
    password?: string;
};
type CodeRequestBodySchema = {
    code?: string;
};
type SendResetPasswordEmailRequestSchema = {
    email?: string;
    captcha_code?: string;
};
type SendResetPasswordMobileRequestSchema = {
    country_code?: string;
    mobile?: string;
    captcha_code?: string;
};
type PasswordLoginRequestSchema = {
    captcha_code?: string;
    password?: string;
    username?: string;
};
type SendOtpRequestSchema = {
    country_code?: string;
    captcha_code?: string;
    mobile?: string;
    android_hash?: string;
};
type OAuthRequestSchema = {
    is_signed_in?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type OAuthRequestAppleSchema = {
    user_identifier?: string;
    oauth?: OAuthRequestAppleSchemaOauth;
    profile?: OAuthRequestAppleSchemaProfile;
};
type UserObjectSchema = {
    user?: UserSchema;
};
type AuthSuccess = {
    register_token?: string;
    user_exists?: boolean;
    user?: UserSchema;
};
type SendOtpResponse = {
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    email?: string;
    resend_email_token?: string;
    register_token?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
type ProfileEditSuccess = {
    user?: UserSchema;
    register_token?: string;
    resend_email_token?: string;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    email?: string;
    request_id?: string;
    country_code?: string;
    mobile?: string;
    success?: boolean;
    message?: string;
    resend_timer?: number;
    resend_token?: string;
};
type LoginSuccess = {
    user?: UserSchema;
    request_id?: string;
    register_token?: string;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    user_exists?: boolean;
    register_token?: string;
};
type ResetPasswordSuccess = {
    status?: string;
};
type RegisterFormSuccess = {
    email?: string;
    resend_timer?: number;
    resend_token?: string;
    resend_email_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
type VerifyEmailSuccess = {
    message?: string;
};
type HasPasswordSuccess = {
    result?: boolean;
};
type LogoutSuccess = {
    logout?: boolean;
};
type BlockUserSuccess = {
    success?: boolean;
};
type ArchiveUserSuccess = {
    success?: boolean;
};
type DeleteUserSuccess = {
    success?: boolean;
};
type UnDeleteUserSuccess = {
    success?: boolean;
};
type OtpSuccess = {
    resend_timer?: number;
    resend_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
};
type EmailOtpSuccess = {
    success?: boolean;
};
type SessionListSuccess = {
    sessions?: string[];
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verify_mobile_link?: boolean;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verify_email_link?: boolean;
};
type SendMobileVerifyLinkSuccess = {
    verify_mobile_link?: boolean;
};
type SendEmailVerifyLinkSuccess = {
    verify_email_link?: boolean;
};
type UserSearchResponseSchema = {
    users?: UserSchema[];
};
type CustomerListResponseSchema = {
    items?: UserSchema[];
    page?: PaginationSchema;
};
type SessionListResponseSchema = {
    items?: string[];
};
type SessionDeleteResponseSchema = {
    items?: string[];
};
type UnauthorizedSchema = {
    message?: string;
};
type UnauthenticatedSchema = {
    authenticated?: boolean;
};
type NotFoundSchema = {
    message?: string;
};
type AuthenticationInternalServerErrorSchema = {
    message?: string;
};
type AuthenticationApiErrorSchema = {
    message?: string;
};
type ProfileEditSuccessSchema = {
    email?: string;
    verify_email_otp?: boolean;
    verify_email_link?: boolean;
    verify_mobile_otp?: boolean;
    user?: string;
    register_token?: string;
    user_exists?: boolean;
};
type FormRegisterRequestSchemaPhone = {
    country_code?: string;
    mobile?: string;
};
type OAuthRequestSchemaOauth2 = {
    access_token?: string;
    expiry?: number;
    refresh_token?: string;
};
type OAuthRequestSchemaProfile = {
    last_name?: string;
    image?: string;
    id?: string;
    email?: string;
    full_name?: string;
    first_name?: string;
};
type OAuthRequestAppleSchemaOauth = {
    identity_token?: string;
};
type OAuthRequestAppleSchemaProfile = {
    last_name?: string;
    full_name?: string;
    first_name?: string;
};
type AuthSuccessUser = {
    first_name?: string;
    last_name?: string;
    debug?: AuthSuccessUserDebug;
    active?: boolean;
    emails?: AuthSuccessUserEmails;
};
type AuthSuccessUserDebug = {
    platform?: string;
};
type AuthSuccessUserEmails = {
    email?: string;
    verified?: boolean;
    primary?: boolean;
    active?: boolean;
};
type CreateUserRequestSchema = {
    phone_number: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    gender?: string;
    username: string;
    meta?: any;
};
type CreateUserResponseSchema = {
    user?: UserSchema;
};
type CreateUserSessionRequestSchema = {
    domain?: string;
    max_age?: number;
    user_id?: string;
};
type CreateUserSessionResponseSchema = {
    domain?: string;
    max_age?: number;
    secure?: boolean;
    http_only?: boolean;
    cookie?: any;
};
type PlatformSchema = {
    display?: string;
    look_and_feel?: LookAndFeel;
    updated_at?: string;
    active?: boolean;
    forgot_password?: boolean;
    login?: Login;
    skip_captcha?: boolean;
    name?: string;
    meta?: MetaSchema;
    _id?: string;
    social?: Social;
    required_fields?: RequiredFields;
    register_required_fields?: RegisterRequiredFields;
    skip_login?: boolean;
    flash_card?: FlashCard;
    subtext?: string;
    social_tokens?: SocialTokens;
    created_at?: string;
    register?: boolean;
    mobile_image?: string;
    desktop_image?: string;
    delete_account_day?: number;
    delete_account_reasons?: DeleteAccountReasons[];
    delete_account_consent?: any;
    session_config?: any;
};
type LookAndFeel = {
    card_position?: string;
    background_color?: string;
};
type Login = {
    password?: boolean;
    otp?: boolean;
};
type MetaSchema = {
    fynd_default?: boolean;
};
type Social = {
    account_kit?: boolean;
    facebook?: boolean;
    google?: boolean;
    apple?: boolean;
};
type RequiredFields = {
    email?: PlatformEmail;
    mobile?: PlatformMobile;
};
type PlatformEmail = {
    is_required?: boolean;
    level?: string;
};
type PlatformMobile = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
};
type RegisterRequiredFieldsEmail = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFieldsMobile = {
    is_required?: boolean;
    level?: string;
};
type FlashCard = {
    text?: string;
    text_color?: string;
    background_color?: string;
};
type SocialTokens = {
    facebook?: Facebook;
    account_kit?: Accountkit;
    google?: Google;
};
type DeleteAccountReasons = {
    reason_text?: string;
    reason_id?: string;
    show_text_area?: boolean;
};
type DeleteAccountConsent = {
    consent_text?: string;
};
type Facebook = {
    app_id?: string;
};
type Accountkit = {
    app_id?: string;
};
type Google = {
    app_id?: string;
};
type SessionExpiry = {
    duration?: number;
    type?: string;
    is_rolling?: boolean;
};
type UpdateUserRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    external_id?: string;
    meta?: any;
};
type UserSchema = {
    application_id?: string;
    user_id?: string;
    first_name?: string;
    meta?: any;
    last_name?: string;
    phone_numbers?: PhoneNumber[];
    emails?: Email[];
    gender?: string;
    dob?: string;
    active?: boolean;
    profile_pic_url?: string;
    username?: string;
    account_type?: string;
    debug?: Debug;
    has_old_password_hash?: boolean;
    _id?: string;
    created_at?: string;
    updated_at?: string;
};
type PhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    country_code?: number;
};
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    returns?: string;
    faq?: ApplicationLegalFAQ[];
    _id?: string;
    updated_at?: string;
    created_at?: string;
};
type ApplicationLegalFAQ = {
    question?: string;
    answer?: string;
};
type PathMappingSchema = {
    application?: string;
    _id?: string;
    redirect_from?: string;
    redirect_to?: string;
    updated_at?: string;
    created_at?: string;
    __source?: TagSourceSchema;
};
type SeoComponent = {
    seo?: SeoSchema;
};
type SeoSchema = {
    app?: string;
    _id?: string;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    custom_meta_tags?: any[];
    details?: Detail;
    created_at?: string;
    updated_at?: string;
};
type CustomMetaTag = {
    name?: string;
    content?: string;
    _id?: string;
};
type Detail = {
    title?: string;
    description?: string;
};
type AnnouncementPageSchema = {
    page_slug?: string;
    type?: string;
};
type EditorMeta = {
    foreground_color?: string;
    background_color?: string;
    content_type?: string;
    content?: string;
};
type AnnouncementAuthorSchema = {
    created_by?: string;
    modified_by?: string;
};
type AdminAnnouncementSchema = {
    _id?: string;
    platforms?: string[];
    title?: string;
    announcement?: string;
    pages?: AnnouncementPageSchema[];
    editor_meta?: EditorMeta;
    author?: AnnouncementAuthorSchema;
    created_at?: string;
    app?: string;
    modified_at?: string;
    _schedule?: ScheduleSchema;
};
type ScheduleSchema = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
};
type NextSchedule = {
    start?: string;
    end?: string;
};
type AnnouncementSchema = {
    announcement?: string;
    schedule?: ScheduleStartSchema;
};
type ScheduleStartSchema = {
    start?: string;
    end?: string;
};
type BlogGetResponse = {
    items?: BlogSchema[];
    page?: Page;
};
type ResourceContent = {
    type?: string;
    value?: string;
};
type Asset = {
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
};
type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
type BlogSchema = {
    _id?: string;
    _custom_json?: any;
    application?: string;
    archived?: boolean;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    seo?: SEO;
    _schedule?: CronSchedule;
    title?: string;
    date_meta?: DateMeta;
};
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
type SEOImage = {
    url?: string;
};
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
type BlogRequest = {
    application?: string;
    _custom_json?: any;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    title?: string;
    seo?: SEO;
    _schedule?: CronSchedule;
};
type GetAnnouncementListSchema = {
    items?: AdminAnnouncementSchema[];
    page?: Page;
};
type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
type DataLoaderResponseSchema = {
    application?: string;
    company?: string;
    _id?: string;
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
};
type DataLoaderResetResponseSchema = {
    reset?: string;
};
type Navigation = {
    name?: string;
    slug?: string;
    orientation?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    position?: string;
    application?: string;
    platform?: string;
    navigation?: NavigationReference;
};
type LocaleLanguage = {
    hi?: Language;
    ar?: Language;
    en_us?: Language;
};
type Language = {
    display?: string;
};
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
type ActionPage = {
    params?: any;
    query?: any;
    url?: string;
    type: any;
};
type NavigationReference = {
    acl?: string[];
    tags?: string[];
    _locale_language?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sort_order?: number;
    sub_navigation?: SubNavigationReference[];
};
type SubNavigationReference = {
    acl?: string[];
    tags?: string[];
    _locale_language?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sort_order?: number;
    sub_navigation?: NavigationReference[];
};
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
type ConfigurationSchema = {
    sleep_time?: number;
    start_on_launch?: boolean;
    duration?: number;
    slide_direction?: string;
};
type SlideshowMedia = {
    type?: string;
    url?: string;
    bg_color?: string;
    duration?: number;
    auto_decide_duration?: boolean;
    action?: Action;
};
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
type AnnouncementsResponseSchema = {
    announcements?: any;
    refresh_rate?: number;
    refresh_pages?: string[];
};
type FaqResponseSchema = {
    faqs?: FaqSchema[];
};
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
type HandpickedTagSchema = {
    position?: string;
    attributes?: any;
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    content?: string;
};
type RemoveHandpickedSchema = {
    tags?: string[];
};
type CreateTagSchema = {
    name?: string;
    sub_type?: string;
    _id?: string;
    type?: string;
    url?: string;
    position?: string;
    attributes?: any;
    pages?: any[];
    content?: string;
};
type CreateTagRequestSchema = {
    tags?: CreateTagSchema[];
};
type DataLoaderSchema = {
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
    _id?: string;
};
type DataLoaderSourceSchema = {
    type?: string;
    id?: string;
};
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
type TagDeleteSuccessResponse = {
    success?: boolean;
};
type ContentAPIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
    info?: string;
    request_id?: string;
    stack_trace?: string;
    meta?: any;
};
type CommonError = {
    message?: string;
};
type CategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: string[];
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
type ChildrenSchema = {
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    _id?: string;
};
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
type FAQCategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: ChildrenSchema[];
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
type FaqSchema = {
    slug?: string;
    application?: string;
    _id?: string;
    question?: string;
    answer?: string;
    tags?: string[];
};
type FAQ = {
    slug?: string;
    question?: string;
    answer?: string;
};
type CreateFaqResponseSchema = {
    faq?: FaqSchema;
};
type CreateFaqSchema = {
    faq?: FAQ;
};
type GetFaqSchema = {
    faqs?: FaqSchema[];
};
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
type CreateFaqCategoryRequestSchema = {
    category?: CategoryRequestSchema;
};
type CreateFaqCategorySchema = {
    category?: CategorySchema;
};
type GetFaqCategoriesSchema = {
    categories?: CategorySchema[];
};
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
type LandingPageGetResponse = {
    items?: LandingPageSchema[];
    page?: Page;
};
type LandingPageSchema = {
    slug?: string;
    action?: Action;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    application?: string;
    archived?: boolean;
    _custom_json?: any;
};
type DefaultNavigationResponse = {
    items?: NavigationSchema[];
};
type NavigationGetResponse = {
    items?: NavigationSchema[];
    page?: Page;
};
type Orientation = {
    portrait?: string[];
    landscape?: string[];
};
type NavigationSchema = {
    _id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    orientation?: Orientation;
    version?: number;
    navigation?: NavigationReference[];
};
type NavigationRequest = {
    name?: string;
    slug?: string;
    platform?: string[];
    orientation?: Orientation;
    navigation?: NavigationReference[];
};
type CustomPageSchema = {
    _id?: string;
    platform?: string;
    title?: string;
    slug?: string;
    type?: string;
    orientation?: string;
    application?: string;
    description?: string;
    published?: boolean;
    tags?: string[];
    content?: any[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _schedule?: ScheduleSchema;
};
type ContentSchema = {
    type?: string;
    value?: any;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type FeatureImage = {
    secure_url?: string;
};
type PageGetResponse = {
    items?: PageSchema[];
    page?: Page;
};
type PageSpec = {
    specifications?: any[];
};
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
type PageSpecItem = {
    page_type?: string;
    display_name?: string;
    params?: PageSpecParam[];
    query?: PageSpecParam[];
};
type PageSchema = {
    _id?: string;
    application?: string;
    component_ids?: string[];
    content?: any[];
    content_path?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    feature_image?: Asset;
    page_meta?: any[];
    _schedule?: ScheduleSchema;
    _custom_json?: any;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
    seo?: SEO;
    visibility?: any;
    archived?: boolean;
};
type CreatedBySchema = {
    id?: string;
};
type PageContent = {
    type?: string;
    value?: any;
};
type PageMeta = {
    key?: string;
    value?: any;
};
type PageRequest = {
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    _custom_json?: any;
    orientation?: string;
    content?: any[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    seo?: SEO;
    title?: string;
};
type CronSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
};
type PagePublishRequest = {
    publish?: boolean;
};
type PageMetaSchema = {
    system_pages?: NavigationSchema[];
    custom_pages?: PageSchema[];
    application_id?: string;
};
type SlideshowGetResponse = {
    items?: SlideshowSchema[];
    page?: Page;
};
type SlideshowSchema = {
    _id?: string;
    slug?: string;
    date_meta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia[];
    active?: boolean;
    archived?: boolean;
    _custom_json?: any;
};
type SlideshowRequest = {
    slug?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
    active?: boolean;
};
type Support = {
    created?: boolean;
    _id?: string;
    config_type?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    contact?: ContactSchema;
};
type PhoneProperties = {
    key?: string;
    code?: string;
    number?: string;
};
type PhoneSchema = {
    active?: boolean;
    phone?: PhoneProperties[];
};
type EmailProperties = {
    key?: string;
    value?: string;
};
type EmailSchema = {
    active?: boolean;
    email?: EmailProperties[];
};
type ContactSchema = {
    phone?: PhoneSchema;
    email?: EmailSchema;
};
type TagsSchema = {
    application?: string;
    _id?: string;
    tags?: TagSchema[];
};
type TagSchema = {
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    _id?: string;
    position?: string;
    attributes?: any;
    content?: string;
    pages?: any[];
    __source?: TagSourceSchema;
};
type TagSourceSchema = {
    type?: string;
    id?: string;
};
type UnauthenticatedUser = {
    message?: string;
};
type UnauthenticatedApplication = {
    message?: string;
};
type ResourceNotFound = {
    message?: string;
};
type InternalServerError = {
    message?: string;
    code?: string;
};
type CheckValidityResponse = {
    is_valid?: boolean;
    discount_amount?: number;
};
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type Plan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type DetailedPlanComponents = {
    name?: string;
    slug?: string;
    description?: string;
    group?: string;
    icon?: string;
    links?: any;
    enabled?: boolean;
    display_text?: string;
};
type DetailedPlan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
    components?: DetailedPlanComponents[];
};
type SubscriptionTrialPeriod = {
    start_date?: string;
    end_date?: string;
};
type EntityChargePrice = {
    amount: number;
    currency_code: string;
};
type EntityChargeRecurring = {
    interval: string;
};
type ChargeLineItem = {
    name: string;
    term: string;
    pricing_type: string;
    price: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    trial_days?: number;
    is_test?: boolean;
    metadata?: any;
};
type CreateSubscriptionCharge = {
    name: string;
    trial_days?: number;
    line_items: ChargeLineItem[];
    is_test?: boolean;
    return_url: string;
};
type CurrentPeriod = {
    start_date?: string;
    end_date?: string;
};
type SubscriptionCharge = {
    _id?: string;
    name?: string;
    term?: string;
    pricing_type?: string;
    price?: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    activated_on?: string;
    cancelled_on?: string;
    billing_date?: string;
    current_period?: CurrentPeriod;
    status?: string;
    is_test?: boolean;
    metadata?: any;
};
type EntitySubscription = {
    _id?: string;
    name?: string;
    status?: string;
    company_id?: number;
    activated_on?: string;
    cancelled_on?: string;
    trial_days?: number;
    trial_period?: SubscriptionTrialPeriod;
    metadata?: any;
    line_items?: SubscriptionCharge[];
};
type CreateSubscriptionResponse = {
    subscription?: EntitySubscription;
    confirm_url?: string;
};
type InvoiceDetailsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceDetailsClient = {
    address_lines?: string[];
    name?: string;
    email?: string;
    phone?: string;
};
type InvoiceDetailsStatusTrail = {
    _id?: string;
    value?: string;
    timestamp?: string;
};
type InvoiceDetailsPaymentMethodsDataChecks = {
    cvc_check?: string;
    address_line1_check?: string;
    address_postal_code_check?: string;
};
type InvoiceDetailsPaymentMethodsDataNetworks = {
    available?: string[];
    preferred?: string;
};
type InvoiceDetailsPaymentMethodsDataThreeDSecureUsage = {
    supported?: boolean;
};
type InvoiceDetailsPaymentMethodsData = {
    brand?: string;
    last4?: string;
    checks?: InvoiceDetailsPaymentMethodsDataChecks;
    wallet?: string;
    country?: string;
    funding?: string;
    exp_year?: number;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    exp_month?: number;
    fingerprint?: string;
    generated_from?: string;
    three_d_secure_usage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
};
type InvoiceDetailsPaymentMethods = {
    id?: number;
    type?: string;
    pg_payment_method_id?: string;
    data?: InvoiceDetailsPaymentMethodsData;
    is_default?: boolean;
};
type InvoicePaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoiceDetails = {
    period?: InvoiceDetailsPeriod;
    client?: InvoiceDetailsClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    _id?: string;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicePaymentMethod;
};
type InvoiceItemsPlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type InvoiceItemsPlan = {
    recurring?: InvoiceItemsPlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type InvoiceItemsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceItems = {
    _id?: string;
    currency?: string;
    plan?: InvoiceItemsPlan;
    name?: string;
    quantity?: number;
    description?: string;
    period?: InvoiceItemsPeriod;
    unit_amount?: number;
    amount?: number;
    type?: string;
    invoice_id?: string;
    created_at?: string;
    modified_at?: string;
};
type Invoice = {
    invoice?: InvoiceDetails;
    invoice_items?: InvoiceItems[];
};
type InvoicesDataClient = {
    name?: string;
    email?: string;
    phone?: string;
    address_lines?: string[];
};
type InvoicesDataPeriod = {
    start?: string;
    end?: string;
};
type InvoicesDataPaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoicesData = {
    _id?: string;
    client?: InvoicesDataClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    period?: InvoicesDataPeriod;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicesDataPaymentMethod;
    invoice_items?: InvoiceItems[];
};
type Invoices = {
    data?: InvoicesData[];
    start?: number;
    end?: number;
    limit?: number;
    page?: number;
    total?: number;
};
type Phone = {
    phone_number?: string;
    phone_country_code?: string;
};
type SubscriptionBillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
};
type SubscriptionCustomer = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    _id?: string;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
    created_at?: string;
    modified_at?: string;
    data?: any;
};
type SubscriptionCustomerCreate = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
};
type SubscriptionCurrentPeriod = {
    start?: string;
    end?: string;
};
type SubscriptionPauseCollection = {
    behavior?: string;
    resume_at?: string;
};
type SubscriptionTrial = {
    start?: string;
    end?: string;
};
type SubscriptionInvoiceSettings = {
    generation?: boolean;
    charging?: boolean;
};
type Subscription = {
    current_period?: SubscriptionCurrentPeriod;
    pause_collection?: SubscriptionPauseCollection;
    trial?: SubscriptionTrial;
    invoice_settings?: SubscriptionInvoiceSettings;
    is_active?: boolean;
    cancel_at_period_end?: boolean;
    _id?: string;
    subscriber_id?: string;
    plan_id?: string;
    product_suite_id?: string;
    plan_data?: Plan;
    current_status?: string;
    collection_method?: string;
    created_at?: string;
    modified_at?: string;
    latest_invoice?: string;
};
type SubscriptionStatus = {
    is_enabled?: boolean;
    subscription?: Subscription;
};
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hard_limit?: number;
    soft_limit?: number;
};
type SubscriptionLimitMarketplace = {
    enabled?: boolean;
};
type SubscriptionLimitOtherPlatform = {
    enabled?: boolean;
};
type SubscriptionLimitTeam = {
    limit?: number;
};
type SubscriptionLimitProducts = {
    bulk?: boolean;
    limit?: number;
};
type SubscriptionLimitExtensions = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimitIntegrations = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimit = {
    application?: SubscriptionLimitApplication;
    marketplace?: SubscriptionLimitMarketplace;
    other_platform?: SubscriptionLimitOtherPlatform;
    team?: SubscriptionLimitTeam;
    products?: SubscriptionLimitProducts;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    is_trial_plan?: boolean;
};
type SubscriptionActivateReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    plan_id?: string;
    payment_method?: string;
};
type SubscriptionActivateRes = {
    success?: boolean;
    data?: Subscription;
};
type CancelSubscriptionReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    subscription_id?: string;
};
type CancelSubscriptionRes = {
    success?: boolean;
    data?: Subscription;
};
type StatsImported = {
    count?: number;
};
type StatsProcessedEmail = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessedSms = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessed = {
    email?: StatsProcessedEmail;
    sms?: StatsProcessedSms;
};
type Stats = {
    _id?: string;
    imported?: any;
    processed?: any;
};
type GetStats = {
    items?: Stats[];
};
type CampaignReq = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
type RecipientHeaders = {
    email?: string;
};
type CampaignEmailTemplate = {
    key?: string;
    value?: string;
};
type CampignEmailProvider = {
    _id?: string;
    from_name?: string;
    from_email?: string;
};
type CampaignEmail = {
    template?: CampaignEmailTemplate;
    provider?: CampignEmailProvider;
};
type Campaign = {
    recipient_headers?: RecipientHeaders;
    email?: CampaignEmail;
    description?: string;
    tags?: any[];
    is_active?: boolean;
    _id?: string;
    datasource?: string;
    type?: string;
    name?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type Campaigns = {
    items?: Campaign[];
    page?: Page;
};
type BadRequestSchema = {
    status?: string;
    message?: string;
};
type BigqueryHeadersReq = {
    query?: string;
    type?: string;
};
type BigqueryHeadersResHeaders = {
    name?: string;
    type?: string;
};
type BigqueryHeadersRes = {
    headers?: BigqueryHeadersResHeaders[];
};
type GetNRecordsCsvReq = {
    url?: string;
    header?: boolean;
    count?: number;
};
type GetNRecordsCsvResItems = {
    phone_number?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
};
type GetNRecordsCsvRes = {
    items?: GetNRecordsCsvResItems[];
};
type AudienceReq = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
type Audience = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    _id?: string;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type Audiences = {
    items?: Audience[];
    page?: Page;
};
type EmailProviderReqFrom = {
    name?: string;
    email?: string;
    is_default?: boolean;
};
type EmailProviderReq = {
    name?: string;
    description?: string;
    api_key?: string;
    type?: string;
    provider?: string;
    from_address?: EmailProviderReqFrom[];
};
type EmailProvider = {
    type?: string;
    provider?: string;
    from_address?: EmailProviderReqFrom[];
    _id?: string;
    name?: string;
    description?: string;
    api_key?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailProviders = {
    items?: EmailProvider[];
    page?: Page;
};
type EmailTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateKeys = {
    to?: string;
    cc?: string;
    bcc?: string;
};
type EmailTemplateHeaders = {
    key?: string;
    value?: string;
};
type EmailTemplateReq = {
    name?: string;
    description?: string;
    keys?: EmailTemplateKeys;
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    reply_to?: string;
    headers?: EmailTemplateHeaders[];
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: any[];
    priority?: string;
};
type TemplateAndType = {
    template_type?: string;
    template?: string;
};
type EmailTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    keys?: EmailTemplateKeys;
    reply_to?: string;
    headers?: EmailTemplateHeaders[];
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: any[];
    static_cc?: any[];
    static_bcc?: any[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: any[];
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemEmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: any[];
    static_cc?: any[];
    static_bcc?: any[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: any[];
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EmailTemplates = {
    items?: EmailTemplate[];
    page?: Page;
};
type SystemEmailTemplates = {
    items?: SystemEmailTemplate[];
    page?: Page;
};
type PayloadEmailTemplateStructure = {
    key?: string;
    value?: any;
};
type PayloadEmailProviderStructure = {
    _id?: string;
};
type PayloadEmailStructure = {
    template?: PayloadEmailTemplateStructure;
    provider?: PayloadEmailProviderStructure;
};
type PayloadSmsTemplateStructure = {
    key?: string;
    value?: any;
};
type PayloadSmsProviderStructure = {
    _id?: string;
};
type PayloadSmsStructure = {
    template?: PayloadSmsTemplateStructure;
    provider?: PayloadSmsProviderStructure;
};
type PayloadStructure = {
    data?: any[];
    email?: PayloadEmailStructure;
    sms?: PayloadSmsStructure;
    application?: string;
};
type MetaStructure = {
    job_type?: string;
    action?: string;
    trace?: string;
    timestamp?: string;
};
type EngineRequest = {
    payload?: PayloadStructure;
    meta?: MetaStructure;
};
type EngineResponse = {
    success?: boolean;
};
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplate = {
    sms?: EventSubscriptionTemplateSms;
    email?: EventSubscriptionTemplateEmail;
};
type EventSubscription = {
    template?: EventSubscriptionTemplate;
    is_default?: boolean;
    _id?: string;
    application?: string;
    event?: string;
    slug?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EventSubscriptions = {
    items?: EventSubscription[];
    page?: Page;
};
type TriggerJobResponse = {
    status?: number;
};
type TriggerJobRequest = {
    job_id?: string;
};
type Job = {
    completed?: boolean;
    is_active?: boolean;
    _id?: string;
    campaign?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Jobs = {
    items?: Job[];
    page?: Page;
};
type JobLog = {
    imported?: any;
    processed?: any;
    _id?: string;
    job?: string;
    campaign?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type JobLogs = {
    items?: JobLog[];
    page?: Page;
};
type LogEmail = {
    template?: string;
};
type LogPushnotification = {
    pushtokens?: string[];
};
type LogMeta = {
    type?: string;
    identifier?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
};
type Log = {
    email?: LogEmail;
    pushnotification?: LogPushnotification;
    meta?: LogMeta;
    _id?: string;
    application?: string;
    service?: string;
    step?: string;
    status?: string;
    data?: any;
    expire_at?: string;
    created_at?: string;
};
type Logs = {
    items?: Log[];
    page?: Page;
};
type SendOtpSmsCommsTemplate = {
    key?: string;
    value?: any;
};
type SendOtpSmsCommsProvider = {
    slug?: string;
    _id?: string;
};
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: any;
};
type SendOtpCommsReqData = {
    send_same_otp_to_channel?: boolean;
    mobile?: string;
    country_code?: string;
    to?: string;
};
type SendOtpCommsReqSms = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpSmsCommsTemplate;
    provider?: SendOtpSmsCommsProvider;
};
type SendOtpCommsReqEmail = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpEmailCommsTemplate;
};
type SendOtpCommsResSms = {
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    resend_timer?: number;
};
type SendOtpCommsResEmail = {
    success?: boolean;
    request_id?: string;
    message?: string;
    to?: string;
    resend_timer?: number;
};
type SendOtpCommsReq = {
    data?: SendOtpCommsReqData;
    sms?: SendOtpCommsReqSms;
    email?: SendOtpCommsReqEmail;
};
type SendOtpCommsRes = {
    sms?: SendOtpCommsResSms;
    email?: SendOtpCommsResEmail;
};
type VerifyOtpCommsReq = {
    request_id?: string;
    otp?: string;
};
type VerifyOtpCommsSuccessRes = {
    success?: boolean;
    mobile?: string;
    country_code?: string;
    message?: string;
};
type VerifyOtpCommsErrorRes = {
    success?: boolean;
    message?: string;
};
type PushtokenReq = {
    action?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
};
type PushtokenRes = {
    _id?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
    type?: string;
    platform?: string;
    application_id?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    expired_at?: string;
};
type SmsProviderReq = {
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    type?: string;
    provider?: string;
};
type SmsProvider = {
    rpt?: number;
    type?: string;
    provider?: string;
    _id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type SmsProviders = {
    items?: SmsProvider[];
    page?: Page;
};
type SmsTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateMessage = {
    template_type?: string;
    template?: string;
};
type SmsTemplateReq = {
    name?: string;
    description?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    attachments?: any[];
    priority?: string;
};
type SmsTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type SmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    priority?: string;
    tags?: any[];
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemSmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SmsTemplates = {
    items?: SmsTemplate[];
    page?: Page;
};
type SystemSmsTemplates = {
    items?: SystemSmsTemplate[];
    page?: Page;
};
type Notification = {
    title?: string;
    body?: string;
    subtitle?: string;
    icon?: string;
    deeplink?: string;
    click_action?: string;
};
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
type SystemNotificationSettings = {
    sound?: boolean;
    priority?: string;
    time_to_live?: string;
};
type SystemNotification = {
    notification?: Notification;
    user?: SystemNotificationUser;
    settings?: SystemNotificationUser;
    _id?: string;
    group?: string;
    created_at?: string;
};
type SystemNotificationsPage = {
    type?: string;
    current?: number;
    size?: number;
    item_total?: number;
    has_next?: boolean;
};
type SystemNotifications = {
    items?: SystemNotification[];
    last_read_anchor?: number;
    page?: Page;
};
type PaymentGatewayConfigResponse = {
    display_fields: string[];
    app_id: string;
    aggregators?: any[];
    success: boolean;
    excluded_fields: string[];
    created: boolean;
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    is_active?: boolean;
    key: string;
    merchant_salt: string;
    config_type: string;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
    is_active?: boolean;
};
type PaymentGatewayToBeReviewed = {
    aggregator: string[];
    success: boolean;
};
type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type IntentApp = {
    package_name?: string;
    display_name?: string;
    outage?: any;
    logos?: PaymentModeLogo;
    code?: string;
};
type PaymentModeList = {
    name?: string;
    logo_url?: PaymentModeLogo;
    card_token?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_name?: string;
    exp_month?: number;
    card_id?: string;
    intent_flow?: boolean;
    card_fingerprint?: string;
    expired?: boolean;
    fynd_vpa?: string;
    timeout?: number;
    intent_app_error_list?: string[];
    card_isin?: string;
    aggregator_name: string;
    card_issuer?: string;
    display_name?: string;
    outage?: any;
    intent_app_error_dict_list?: IntentAppErrorList[];
    display_priority?: number;
    card_number?: string;
    card_brand_image?: string;
    exp_year?: number;
    nickname?: string;
    code?: string;
    intent_app?: IntentApp[];
    card_reference?: string;
    card_type?: string;
    retry_count?: number;
    merchant_code?: string;
    card_brand?: string;
};
type RootPaymentMode = {
    logo?: string;
    name: string;
    logo_url?: PaymentModeLogo;
    aggregator_name?: string;
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
    display_name: string;
    display_priority: number;
    add_card_enabled?: boolean;
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    unique_transfer_no: any;
    transfer_type: string;
    is_active: boolean;
    customers: any;
    payouts_aggregators: any[];
    is_default: boolean;
    more_attributes: any;
};
type PayoutBankDetails = {
    ifsc_code: string;
    account_holder?: string;
    branch_name?: string;
    bank_name?: string;
    account_type: string;
    city?: string;
    pincode?: number;
    country?: string;
    account_no?: string;
    state?: string;
};
type PayoutRequest = {
    transfer_type: string;
    is_active: boolean;
    users: any;
    unique_external_id: string;
    aggregator: string;
    bank_details: PayoutBankDetails;
};
type PayoutResponse = {
    unique_transfer_no: string;
    transfer_type: string;
    is_active: boolean;
    users: any;
    payouts: any;
    payment_status: string;
    bank_details: any;
    success: boolean;
    aggregator: string;
    created: boolean;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
};
type UpdatePayoutRequest = {
    is_default: boolean;
    unique_external_id: string;
    is_active: boolean;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    data: any[];
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    config: any;
    aggregator: string;
    success: boolean;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
type RefundAccountResponse = {
    is_verified_flag?: boolean;
    message: string;
    data?: any;
    success: boolean;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    account_holder: string;
    bank_name: string;
    branch_name: string;
    account_no: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    branch_name: string;
    bank_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    account_holder: string;
    ifsc_code: string;
    created_on: string;
    subtitle: string;
    modified_on: string;
    title: string;
    id: number;
    account_no: string;
    address: string;
    is_active: boolean;
    beneficiary_id: string;
    display_name: string;
    bank_name: string;
    email: string;
    branch_name?: string;
    transfer_mode: string;
    comment?: string;
    mobile?: string;
    delights_user_name?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    payment_gateway?: string;
    order_id?: string;
    payment_id?: string;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    amount: number;
    name?: string;
    mode: string;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    message: string;
    order_id: string;
    success: boolean;
};
type Code = {
    name: string;
    code: string;
    merchant_code: string;
};
type PaymentCode = {
    name: string;
    networks: string;
    codes: Code;
    types: string;
};
type GetPaymentCode = {
    method_code: PaymentCode;
};
type getPaymentCodeResponse = {
    data: GetPaymentCode;
    success: boolean;
};
type FilterInfoOption = {
    text: string;
    value?: string;
    name?: string;
};
type FiltersInfo = {
    type: string;
    options?: FilterInfoOption[];
    text: string;
    value: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type Prices = {
    delivery_charge?: number;
    price_marked?: number;
    cashback?: number;
    promotion_effective_discount?: number;
    cod_charges?: number;
    discount?: number;
    price_effective?: number;
    coupon_value?: number;
    amount_paid?: number;
    refund_credit?: number;
    amount_paid_roundoff?: number;
    fynd_credits?: number;
    tax_collected_at_source?: number;
    refund_amount?: number;
    value_of_good?: number;
    cashback_applied?: number;
};
type ShipmentStatus = {
    hex_code: string;
    actual_status: string;
    title: string;
    status: string;
    ops_status: string;
};
type PlatformItem = {
    can_cancel?: boolean;
    image?: string[];
    code?: string;
    l3_category?: number;
    id?: number;
    can_return?: boolean;
    size?: string;
    l3_category_name?: string;
    department_id?: number;
    name?: string;
    images?: string[];
    color?: string;
    l1_category?: string[];
};
type GSTDetailsData = {
    gst_fee: number;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    gstin_code: string;
    value_of_good: number;
};
type BagUnit = {
    line_number: number;
    item?: PlatformItem;
    identifier: string;
    shipment_id: string;
    gst?: GSTDetailsData;
    prices?: Prices;
    can_return?: boolean;
    parent_promo_bags?: any;
    bag_id: number;
    quantity: number;
    can_cancel?: boolean;
    total_shipment_bags: number;
    ordering_channel: string;
    applied_promos?: any;
    status: any;
    group_id?: string;
};
type UserDataInfo = {
    is_anonymous_user?: boolean;
    gender?: string;
    mobile?: string;
    first_name?: string;
    uid?: number;
    avis_user_id?: string;
    name?: string;
    email?: string;
    last_name?: string;
};
type ShipmentItem = {
    fulfilling_centre: string;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    sla?: any;
    prices?: Prices;
    total_bags_count: number;
    shipment_created_at: number;
    id: string;
    channel?: any;
    created_at: string;
    shipment_status?: ShipmentStatus;
    payment_methods?: any;
    application?: any;
    bags?: BagUnit[];
    user?: UserDataInfo;
    total_shipments_in_order: number;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    filters?: FiltersInfo[];
    page?: any;
    items?: ShipmentItem[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type ShipmentPayments = {
    mode: string;
    logo?: string;
    source?: string;
};
type DPDetailsData = {
    eway_bill_id?: string;
    id?: string;
    track_url?: string;
    name?: string;
    gst_tag?: string;
    pincode?: string;
    country?: string;
    awb_no?: string;
};
type PlatformDeliveryAddress = {
    landmark?: string;
    area?: string;
    version?: string;
    address_category?: string;
    address2?: string;
    address_type?: string;
    phone?: string;
    updated_at?: string;
    created_at?: string;
    city?: string;
    address1?: string;
    latitude?: number;
    email?: string;
    pincode?: string;
    country?: string;
    contact_person?: string;
    state?: string;
    longitude?: number;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    allow_force_return: boolean;
    is_active: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    hsn_code: string;
    promotion_effective_discount: number;
    discount: number;
    tax_collected_at_source?: number;
    value_of_good: number;
    price_effective: number;
    transfer_price: number;
    amount_paid: number;
    total_units: number;
    gst_tag: string;
    coupon_effective_discount: number;
    item_name: string;
    delivery_charge: number;
    amount_paid_roundoff?: number;
    size: string;
    identifiers: Identifier;
    fynd_credits: number;
    pm_price_split: any;
    gst_tax_percentage: number;
    gst_fee: string;
    cashback: number;
    price_marked: number;
    brand_calculated_amount: number;
    cod_charges: number;
    coupon_value: number;
    refund_credit: number;
    added_to_fynd_cash: boolean;
    cashback_applied: number;
};
type OrderBagArticle = {
    uid?: string;
    return_config?: any;
    identifiers?: any;
};
type OrderBrandName = {
    logo: string;
    id: number;
    created_on: number;
    company: string;
    modified_on?: number;
    brand_name: string;
};
type BagGST = {
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
    hsn_code?: string;
    gst_fee?: number;
    brand_calculated_amount?: number;
    gstin_code?: string;
    gst_tag?: string;
    value_of_good?: number;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type AppliedPromos = {
    amount?: number;
    promotion_type?: string;
    discount_rules?: DiscountRules[];
    promo_id?: string;
    promotion_name?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
};
type OrderBags = {
    delivery_address?: PlatformDeliveryAddress;
    bag_configs?: BagConfigs;
    financial_breakup?: FinancialBreakup[];
    identifier?: string;
    article?: OrderBagArticle;
    brand?: OrderBrandName;
    can_return?: boolean;
    can_cancel?: boolean;
    gst_details?: BagGST;
    applied_promos?: AppliedPromos[];
    line_number?: number;
    item?: PlatformItem;
    prices?: Prices;
    display_name?: string;
    parent_promo_bags?: any;
    entity_type?: string;
    seller_identifier?: string;
    current_status?: string;
    bag_id: number;
    quantity?: number;
};
type OrderDetailsData = {
    source?: string;
    fynd_order_id: string;
    ordering_channel_logo?: any;
    cod_charges?: string;
    order_date?: string;
    ordering_channel?: string;
    order_value?: string;
    tax_details?: any;
    affiliate_id?: string;
};
type TrackingList = {
    time?: string;
    text: string;
    is_current?: boolean;
    is_passed?: boolean;
    status: string;
};
type FulfillingStore = {
    address: string;
    code: string;
    phone: string;
    id: string;
    meta: any;
    city: string;
    fulfillment_channel: string;
    pincode: string;
    store_name: string;
    country: string;
    contact_person: string;
    state: string;
};
type UserDetailsData = {
    address: string;
    phone: string;
    city: string;
    name: string;
    email: string;
    pincode: string;
    country: string;
    state: string;
};
type BagStateMapper = {
    notify_customer?: boolean;
    app_state_name?: string;
    app_display_name?: string;
    is_active?: boolean;
    display_name: string;
    state_type: string;
    bs_id: number;
    name: string;
    app_facing?: boolean;
    journey_type: string;
};
type BagStatusHistory = {
    bag_state_mapper: BagStateMapper;
    store_id: number;
    shipment_id: string;
    app_display_name?: boolean;
    forward?: boolean;
    display_name?: boolean;
    state_id: number;
    updated_at?: string;
    reasons?: any[];
    created_at: string;
    bag_id: number;
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    delivery_awb_number?: string;
    bsh_id: number;
    state_type?: string;
    status: string;
};
type ShipmentStatusData = {
    bag_list?: number[];
    shipment_id?: string;
    id?: number;
    created_at?: string;
    status?: string;
};
type ShipmentInfoResponse = {
    payments?: ShipmentPayments;
    fyndstore_emp: any;
    ordering_store: any;
    child_nodes?: string[];
    dp_details?: DPDetailsData;
    delivery_status: any[];
    is_not_fynd_source: boolean;
    total_items?: number;
    invoice: any;
    vertical?: string;
    escalation?: any;
    lock_status: string;
    bags?: OrderBags[];
    shipment_status?: string;
    mid?: string;
    refund_details?: any;
    packaging_type?: string;
    secured_delivery_flag?: string;
    beneficiary_details?: boolean;
    platform_logo: boolean;
    delivery_slot?: any;
    payment_mode?: string;
    order?: OrderDetailsData;
    coupon?: any;
    user_agent?: string;
    can_return?: boolean;
    go_green?: boolean;
    total_bags?: number;
    operational_status?: string;
    email_id: string;
    tracking_url: string;
    can_cancel?: boolean;
    is_packaging_order: boolean;
    gst_details?: GSTDetailsData;
    tracking_list?: TrackingList[];
    items: any[];
    company: any;
    kirana_store_id?: string;
    current_shipment_status: any;
    shipment_quantity?: number;
    fulfilling_store?: FulfillingStore;
    billing_details?: UserDetailsData;
    shipment_id: string;
    can_break: string;
    bag_status_history?: BagStatusHistory[];
    prices?: Prices;
    priority_text?: string;
    forward_order_status?: any[];
    is_fynd_coupon: boolean;
    bank_data?: any;
    order_created_time?: string;
    user_info?: any;
    pay_button?: string;
    credit_note_id: string;
    custom_meta?: any[];
    status?: ShipmentStatusData;
    journey_type?: string;
    is_fynd_store?: string;
    forward_tracking_list?: any[];
    user_id: string;
    due_date?: string;
    is_pdsr?: string;
    enable_dp_tracking?: string;
    shipment_images?: string[];
    order_type: string;
    forward_shipment_status?: any[];
    is_invoiced: boolean;
    order_status: any;
    picked_date?: string;
    status_progress: number;
    refund_text?: string;
    affiliate_shipment_id: string;
    replacement_details?: string;
    enable_tracking?: boolean;
    delivery_details?: UserDetailsData;
};
type OrderDict = {
    order_date: string;
    shipment_count: number;
    fynd_order_id: string;
};
type PlatformShipment = {
    payments?: ShipmentPayments;
    dp_details?: DPDetailsData;
    total_items?: number;
    vertical?: string;
    bags?: OrderBags[];
    shipment_status?: string;
    packaging_type?: string;
    platform_logo?: string;
    delivery_slot?: any;
    payment_mode?: string;
    order?: OrderDetailsData;
    user_agent?: string;
    total_bags?: number;
    operational_status?: string;
    gst_details?: GSTDetailsData;
    tracking_list?: TrackingList[];
    shipment_quantity?: number;
    fulfilling_store?: FulfillingStore;
    billing_details?: UserDetailsData;
    shipment_id: string;
    bag_status_history?: BagStatusHistory[];
    prices?: Prices;
    priority_text?: string;
    custom_meta?: any[];
    status?: ShipmentStatusData;
    journey_type?: string;
    enable_dp_tracking?: string;
    shipment_images?: string[];
    picked_date?: string;
    delivery_details?: UserDetailsData;
};
type ShipmentDetailsResponse = {
    custom_meta?: any[];
    order?: OrderDict;
    success: boolean;
    shipments?: PlatformShipment[];
};
type SubLane = {
    value?: string;
    total_items?: number;
    actions?: any[];
    text?: string;
    index?: number;
};
type SuperLane = {
    options?: SubLane[];
    text: string;
    value: string;
    total_items?: number;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformBreakupValues = {
    value?: string;
    display?: string;
    name?: string;
};
type PlatformOrderItems = {
    payment_mode?: string;
    shipments?: PlatformShipment[];
    order_created_time?: string;
    channel?: PlatformChannel;
    meta?: any;
    order_value?: number;
    user_info?: UserDataInfo;
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    order_id?: string;
};
type OrderListingResponse = {
    success?: boolean;
    message?: string;
    lane?: string;
    page?: Page;
    items?: PlatformOrderItems[];
    total_count?: number;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    options?: Options[];
    text: string;
    value: number;
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    shipment_type?: string;
    awb?: string;
    account_name?: string;
    raw_status?: string;
    updated_at?: string;
    updated_time?: string;
    meta?: any;
    reason?: string;
    last_location_recieved_at?: string;
    status?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    request_details?: any;
    report_created_at?: string;
    report_type?: string;
    s3_key?: string;
    report_id?: string;
    display_name?: string;
    report_requested_at?: string;
    report_name?: string;
    status?: string;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    jio_code?: string;
    item_id?: string;
    article_id?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    type?: string;
    value?: string;
    message?: string;
};
type JioCodeUpsertResponse = {
    success?: boolean;
    data?: any[];
    identifier?: string;
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    data?: any;
    invoice_status?: string;
    do_invoice_label_generated: boolean;
    store_id?: string;
    batch_id: string;
    label?: any;
    invoice?: any;
    company_id?: string;
    store_name?: string;
    store_code?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type URL = {
    url?: string;
};
type FileResponse = {
    tags?: string[];
    file_name?: string;
    method?: string;
    upload?: FileUploadResponse;
    size?: number;
    operation?: string;
    content_type?: string;
    cdn?: URL;
    namespace?: string;
    file_path?: string;
};
type bulkListingData = {
    failed?: number;
    total?: number;
    processing?: number;
    company_id?: number;
    store_name?: string;
    store_code?: string;
    successful?: number;
    store_id?: number;
    batch_id?: string;
    file_name?: string;
    failed_shipments?: any[];
    user_name?: string;
    excel_url?: string;
    status?: string;
    processing_shipments?: string[];
    user_id?: string;
    id?: string;
    uploaded_on?: string;
    successful_shipments?: any[];
};
type BulkListingPage = {
    total?: number;
    has_next?: boolean;
    size?: number;
    type?: string;
    current?: number;
    has_previous?: boolean;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    success?: boolean;
    error?: string;
    page?: BulkListingPage;
};
type ManifestPage = {
    total?: number;
    has_next?: boolean;
    size?: string;
    type?: string;
    current?: string;
    has_previous?: boolean;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    date_range?: DateRange;
    dp_ids?: string;
    lane?: string;
    stores?: string;
    dp_name?: string;
    sales_channels?: string;
    store_name?: string;
    sales_channel_name?: string;
};
type GeneratedManifestItem = {
    manifest_id?: string;
    is_active?: boolean;
    created_by?: string;
    filters?: ManifestFilter;
    created_at?: string;
    company_id?: number;
    status?: string;
};
type GeneratedManifestResponse = {
    page?: ManifestPage;
    items?: GeneratedManifestItem[];
};
type ManifestDetailTotalShipmentPricesCount = {
    total_price?: number;
    shipment_count?: number;
};
type ManifestDetailMeta = {
    filters?: ManifestFilter;
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
};
type ManifestDetail = {
    manifest_id?: string;
    user_id?: number;
    is_active?: boolean;
    created_by?: string;
    id?: number;
    filters?: ManifestFilter;
    uid?: number;
    created_at?: string;
    meta?: ManifestDetailMeta;
    company_id?: number;
    status?: string;
};
type ManifestDetailItem = {
    awb?: string;
    shipment_id?: string;
    item_qty?: number;
    invoice_id?: string;
    order_id?: string;
};
type ManifestDetailResponse = {
    manifest_details?: ManifestDetail[];
    page?: ManifestPage;
    additional_shipment_count?: number;
    items?: ManifestDetailItem[];
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    question_set?: QuestionSet[];
    display_name?: string;
    qc_type?: string[];
    id?: number;
};
type PlatformShipmentReasonsResponse = {
    success?: boolean;
    reasons?: Reason[];
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    successful_shipments_count?: number;
    total_shipments_count?: number;
    processing_shipments_count?: number;
    batch_id?: string;
    failed_shipments_count?: number;
    successful_shipment_ids?: string[];
    company_id?: string;
};
type BulkActionDetailsResponse = {
    data?: BulkActionDetailsDataField[];
    success?: string;
    message?: string;
    error?: string[];
    uploaded_by?: string;
    user_id?: string;
    failed_records?: string[];
    uploaded_on?: string;
    status?: boolean;
};
type StoreAddress = {
    updated_at: string;
    city: string;
    state: string;
    address_category: string;
    latitude: number;
    pincode: number;
    country: string;
    area?: string;
    version?: string;
    address2?: string;
    created_at: string;
    email?: string;
    contact_person: string;
    country_code: string;
    landmark?: string;
    address_type: string;
    phone: string;
    address1: string;
    longitude: number;
};
type StoreEinvoice = {
    enabled: boolean;
    username?: string;
    user?: string;
    password?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type EInvoicePortalDetails = {
    username?: string;
    user?: string;
    password?: string;
};
type Document = {
    url?: string;
    value: string;
    verified: boolean;
    ds_type: string;
    legal_name: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    gst_credentials: StoreGstCredentials;
    display_name: string;
    gst_number?: string;
    notification_emails?: string[];
    stage: string;
    ewaybill_portal_details?: any;
    timing?: any[];
    einvoice_portal_details?: EInvoicePortalDetails;
    additional_contact_details?: any;
    product_return_config?: any;
    documents?: StoreDocuments;
};
type Store = {
    store_address_json?: StoreAddress;
    parent_store_id?: number;
    updated_at?: string;
    meta: StoreMeta;
    city: string;
    company_id: number;
    state: string;
    mall_area?: string;
    brand_store_tags?: string[];
    fulfillment_channel: string;
    latitude: number;
    brand_id?: any;
    pincode: string;
    country: string;
    packaging_material_count?: number;
    mall_name?: string;
    name: string;
    store_active_from?: string;
    s_id: string;
    store_email: string;
    is_active?: boolean;
    address2?: string;
    is_archived?: boolean;
    is_enabled_for_recon?: boolean;
    created_at: string;
    login_username: string;
    order_integration_id?: string;
    vat_no?: string;
    contact_person: string;
    location_type: string;
    code?: string;
    phone: number;
    address1: string;
    alohomora_user_id?: number;
    longitude: number;
};
type B2BPODetails = {
    partial_can_ret?: boolean;
    total_gst_percentage?: number;
    item_base_price?: number;
    docker_number?: string;
    po_tax_amount?: number;
    po_line_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Weight = {
    shipping?: number;
    is_default?: boolean;
    unit?: string;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Dimensions = {
    height?: number;
    unit?: string;
    is_default?: boolean;
    length?: number;
    width?: number;
};
type Article = {
    esp_modified?: any;
    raw_meta?: any;
    seller_identifier: string;
    weight?: Weight;
    code?: string;
    return_config?: ReturnConfig;
    child_details?: any;
    size: string;
    identifiers: Identifier;
    uid: string;
    dimensions?: Dimensions;
    _id: string;
    is_set?: boolean;
    a_set?: any;
};
type Brand = {
    invoice_prefix?: string;
    logo?: string;
    credit_note_expiry_days?: number;
    script_last_ran?: string;
    start_date?: string;
    created_on?: number;
    brand_id: number;
    credit_note_allowed?: boolean;
    pickup_location?: string;
    company: string;
    modified_on?: number;
    brand_name: string;
    is_virtual_invoice?: boolean;
};
type AffiliateMeta = {
    is_priority?: boolean;
    channel_order_id?: string;
    due_date?: string;
    box_type?: string;
    size_level_total_qty?: number;
    channel_shipment_id?: string;
    loyalty_discount?: number;
    employee_discount?: number;
    quantity?: number;
    coupon_code?: string;
    order_item_id?: string;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    affiliate_bag_id: string;
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
};
type BagGSTDetails = {
    gst_tax_percentage: number;
    cgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    hsn_code: string;
    gst_fee: number;
    brand_calculated_amount: number;
    igst_tax_percentage: number;
    igst_gst_fee: string;
    sgst_gst_fee: string;
    tax_collected_at_source: number;
    cgst_tax_percentage: number;
    gstin_code?: string;
    gst_tag: string;
    value_of_good: number;
    sgst_tax_percentage: number;
    hsn_code_id: string;
};
type Attributes = {
    marketer_name?: string;
    primary_color?: string;
    primary_color_hex?: string;
    marketer_address?: string;
    gender?: string[];
    name?: string;
    primary_material?: string;
    essential?: string;
    brand_name?: string;
};
type Item = {
    gender?: string;
    slug_key: string;
    meta?: any;
    last_updated_at?: string;
    webstore_product_url?: string;
    image: string[];
    l3_category?: number;
    brand: string;
    can_return?: boolean;
    can_cancel?: boolean;
    brand_id: number;
    color?: string;
    item_id: number;
    size: string;
    department_id?: number;
    l1_category_id?: number;
    l2_category?: string[];
    branch_url?: string;
    code?: string;
    l2_category_id?: number;
    l3_category_name?: string;
    attributes: Attributes;
    name: string;
    l1_category?: string[];
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type LockData = {
    locked?: boolean;
    mto?: boolean;
    lock_message?: string;
};
type EInvoice = {
    error_message?: string;
    acknowledge_date?: string;
    error_code?: string;
    signed_invoice?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    irn?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type BuyerDetails = {
    address: string;
    city: string;
    ajio_site_id?: string;
    name: string;
    pincode: number;
    gstin: string;
    state: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    fulfilment_priority_text?: string;
    lock_data?: LockData;
    weight: number;
    return_store_node?: number;
    einvoice_info?: EinvoiceInfo;
    assign_dp_from_sb?: boolean;
    b2b_buyer_details?: BuyerDetails;
    forward_affiliate_order_id?: string;
    marketplace_store_id?: string;
    packaging_name?: string;
    same_store_available: boolean;
    ewaybill_info?: any;
    return_awb_number?: string;
    return_details?: any;
    dp_options?: any;
    bag_weight?: any;
    b2c_buyer_details?: any;
    box_type?: string;
    dp_id?: string;
    formatted?: Formatted;
    return_affiliate_order_id?: string;
    shipment_volumetric_weight?: number;
    auto_trigger_dp_assignment_acf: boolean;
    timestamp?: ShipmentTimeStamp;
    awb_number?: string;
    due_date?: string;
    dp_sort_key?: string;
    return_affiliate_shipment_id?: string;
    store_invoice_updated_date?: string;
    external?: any;
    order_type?: string;
    po_number?: string;
    shipment_weight?: number;
    dp_name?: string;
    debug_info?: DebugInfo;
    forward_affiliate_shipment_id?: string;
};
type PDFLinks = {
    label_a4?: string;
    label_pos?: string;
    label_type: string;
    po_invoice?: string;
    label?: string;
    invoice?: string;
    invoice_pos?: string;
    invoice_type: string;
    b2b?: string;
    label_a6?: string;
    invoice_a4?: string;
    invoice_a6?: string;
    credit_note_url?: string;
};
type AffiliateDetails = {
    company_affiliate_tag?: string;
    affiliate_order_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_bag_id: string;
    ad_id?: string;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    affiliate_shipment_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_id?: string;
};
type ArticleDetails = {
    status?: any;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_active: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
};
type BagDetailsPlatformResponse = {
    ordering_store?: Store;
    current_operational_status: BagStatusHistory;
    b_type?: string;
    meta?: BagMeta;
    financial_breakup: FinancialBreakup[];
    identifier?: string;
    article: Article;
    brand: Brand;
    affiliate_bag_details: AffiliateBagDetails;
    operational_status?: string;
    gst_details: BagGSTDetails;
    applied_promos?: any[];
    b_id: number;
    item: Item;
    line_number?: number;
    dates?: Dates;
    affiliate_details?: AffiliateDetails;
    tags?: string[];
    shipment_id?: string;
    bag_status_history?: BagStatusHistory;
    display_name?: string;
    prices: Prices;
    article_details?: ArticleDetails;
    parent_promo_bags?: any;
    restore_coupon?: boolean;
    order_integration_id?: string;
    restore_promos?: any;
    status: BagReturnableCancelableStatus;
    journey_type: string;
    entity_type?: string;
    bag_status: BagStatusHistory[];
    seller_identifier?: string;
    current_status: BagStatusHistory;
    reasons?: any[];
    no_of_bags_order?: number;
    quantity?: number;
    bag_update_time?: number;
    original_bag_list?: number[];
    qc_required?: any;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    page_type: string;
    has_next: boolean;
    size: number;
    item_total: number;
    current: number;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    shipment_id?: string;
    status?: number;
    message?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    error_trace?: string;
    status: number;
    message: string;
};
type StoreReassign = {
    fynd_order_id?: string;
    set_id?: string;
    item_id?: string;
    affiliate_order_id?: string;
    store_id: number;
    affiliate_id?: string;
    bag_id?: number;
    reason_ids?: number[];
    affiliate_bag_id?: string;
    mongo_article_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    id?: string;
    affiliate_order_id?: string;
    reason_text: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action_type: string;
    entities: Entities[];
    action: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    is_locked?: boolean;
    affiliate_bag_id?: string;
    bag_id?: number;
    affiliate_order_id?: string;
};
type CheckResponse = {
    lock_status?: boolean;
    is_bag_locked?: boolean;
    status?: string;
    is_shipment_locked?: boolean;
    affiliate_id?: string;
    original_filter?: OriginalFilter;
    affiliate_shipment_id?: string;
    bags?: Bags[];
    shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    platform_id?: string;
    created_at?: string;
    description?: string;
    company_id?: number;
    from_datetime?: string;
    id: number;
    platform_name?: string;
    logo_url?: string;
    title?: string;
    to_datetime?: string;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
};
type BaseResponse = {
    success: boolean;
    message: string;
};
type Click2CallResponse = {
    status: boolean;
    call_id: string;
};
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
};
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasonsFilters = {
    identifier?: string;
    quantity?: number;
    line_number?: number;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type Products = {
    identifier?: string;
    quantity?: number;
    line_number?: number;
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    identifier: string;
    reasons?: ReasonsData;
    products?: Products[];
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    force_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    status?: number;
    stack_trace?: string;
    exception?: string;
    message?: string;
    final_state?: any;
    meta?: any;
    identifier?: string;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    created_at: string;
    owner: string;
    description?: string;
    token: string;
    id: string;
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    secret: string;
    name: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    token: string;
    config?: AffiliateConfig;
    id: string;
};
type OrderConfig = {
    bag_end_state?: string;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
    affiliate: Affiliate;
    store_lookup?: string;
};
type OrderUser = {
    address1?: string;
    phone: number;
    pincode: string;
    city: string;
    email: string;
    mobile: number;
    address2?: string;
    country: string;
    first_name: string;
    last_name: string;
    state: string;
};
type ArticleDetails1 = {
    brand_id: number;
    attributes: any;
    dimension: any;
    category: any;
    _id: string;
    quantity: number;
    weight: any;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentDetails = {
    shipments: number;
    articles: ArticleDetails1[];
    box_type?: string;
    dp_id?: number;
    affiliate_shipment_id: string;
    meta?: any;
    fulfillment_id: number;
};
type ShipmentConfig = {
    source: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    to_pincode: string;
    journey: string;
    identifier: string;
    action: string;
    payment_mode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    price_effective: number;
    delivery_charge: number;
    company_id: number;
    unit_price: number;
    modified_on: string;
    discount: number;
    item_id: number;
    transfer_price: number;
    amount_paid: number;
    _id: string;
    item_size: string;
    sku: string;
    identifier: any;
    seller_identifier: string;
    pdf_links?: MarketPlacePdf;
    store_id: number;
    price_marked: number;
    fynd_store_id: string;
    quantity: number;
    avl_qty: number;
    affiliate_meta: any;
    affiliate_store_id: string;
    hsn_code_id: string;
};
type OrderInfo = {
    order_value: number;
    billing_address: OrderUser;
    delivery_charges: number;
    shipment?: ShipmentData;
    user: UserData;
    affiliate_order_id?: string;
    items: any;
    payment?: any;
    shipping_address: OrderUser;
    order_priority?: OrderPriority;
    bags: AffiliateBag[];
    coupon?: string;
    cod_charges: number;
    discount: number;
    payment_mode: string;
};
type CreateOrderPayload = {
    order_config: OrderConfig;
    affiliate_id: string;
    order_info: OrderInfo;
};
type CreateOrderResponse = {
    fynd_order_id: string;
};
type DispatchManifest = {
    manifest_id: string;
};
type SuccessResponse = {
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    display_text: string;
    slug: string;
    id: number;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    createdat: string;
    l3_detail?: string;
    user: string;
    type: string;
    message: string;
    ticket_id?: string;
    l1_detail?: string;
    ticket_url?: string;
    bag_id?: number;
    l2_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    brand_name: string;
    phone_number: number;
    order_id: string;
    message: string;
    amount_paid: number;
    country_code: string;
    shipment_id: number;
    payment_mode: string;
    customer_name: string;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    status?: string;
    bag_list?: number[];
    id: number;
    meta: Meta;
    shipment_id?: string;
    remarks?: string;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    order_details: OrderDetails;
    errors?: string[];
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    qc_required: string;
    shipment_ids?: string[];
    order_type: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type ProcessingDates = {
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    pack_by_date?: string;
    confirm_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
};
type Tax = {
    amount: any;
    rate: number;
    name: string;
    breakup?: any[];
};
type Charge = {
    amount: any;
    name: string;
    type: string;
    code?: string;
    tax?: Tax;
};
type LineItem = {
    external_line_id?: string;
    charges: Charge[];
    custom_messasge?: string;
    quantity?: number;
    meta?: any;
    seller_identifier: string;
};
type Shipment = {
    external_shipment_id?: number;
    processing_dates?: ProcessingDates;
    priority?: number;
    location_id: number;
    meta?: any;
    line_items: LineItem[];
};
type ShippingInfo = {
    state_code?: string;
    address1: string;
    customer_code?: string;
    address2?: string;
    alternate_mobile_number?: string;
    slot?: any[];
    address_type?: string;
    house_no?: string;
    pincode: string;
    alternate_email?: string;
    first_name: string;
    external_customer_code?: string;
    primary_mobile_number: string;
    landmark?: string;
    middle_name?: string;
    floor_no?: string;
    shipping_type?: string;
    last_name?: string;
    gender?: string;
    primary_email: string;
    geo_location?: any;
    city: string;
    state: string;
    country: string;
    title?: string;
    country_code?: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type BillingInfo = {
    state_code?: string;
    address1: string;
    customer_code?: string;
    address2?: string;
    alternate_mobile_number?: string;
    house_no?: string;
    pincode: string;
    alternate_email?: string;
    first_name: string;
    external_customer_code?: string;
    primary_mobile_number: string;
    middle_name?: string;
    floor_no?: string;
    last_name?: string;
    gender?: string;
    primary_email: string;
    city: string;
    state: string;
    country: string;
    title?: string;
    country_code?: string;
};
type PaymentMethod = {
    meta?: any;
    amount: number;
    transaction_data?: any;
    collect_by: string;
    mode: string;
    refund_by: string;
    name: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type CreateOrderAPI = {
    external_creation_date?: string;
    shipments: Shipment[];
    currency_info?: any;
    charges: Charge[];
    shipping_info: ShippingInfo;
    external_order_id?: string;
    tax_info?: TaxInfo;
    meta?: any;
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    meta?: string;
    status: number;
    stack_trace?: string;
    exception?: string;
    message: string;
    info?: any;
    code?: string;
    request_id?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    mode?: string;
    refund_by?: string;
    collect_by?: string;
};
type CreateChannelPaymentInfo = {
    mode_of_payment?: string;
    source?: string;
    payment_methods?: PaymentMethods[];
};
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    location_reassignment?: boolean;
    shipment_assignment?: string;
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_inserted?: boolean;
    is_upserted?: boolean;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type UploadConsent = {
    manifest_id: string;
    consent_url: string;
};
type PlatformOrderUpdate = {
    order_id: string;
};
type ResponseDetail = {
    success?: boolean;
    message?: string[];
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    mobile: number;
    order_details?: FyndOrderIdList[];
    start_date: string;
    end_date: string;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    words?: string[];
    result: SearchKeywordResult;
    is_active?: boolean;
    _custom_json?: any;
    app_id?: string;
};
type GetSearchWordsData = {
    words?: string[];
    result?: any;
    is_active?: boolean;
    _custom_json?: any;
    app_id?: string;
    uid?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type Media = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type AutocompletePageAction = {
    params?: any;
    query?: any;
    type?: string;
    url?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    logo?: Media;
    display?: string;
    action?: AutocompleteAction;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    results?: AutocompleteResult[];
    words?: string[];
    is_active?: boolean;
    _custom_json?: any;
    app_id?: string;
};
type GetAutocompleteWordsData = {
    results?: any[];
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    words?: string[];
    _custom_json?: any;
    app_id?: string;
};
type ProductBundleItem = {
    product_uid: number;
    auto_select?: boolean;
    allow_remove?: boolean;
    min_quantity: number;
    auto_add_to_cart?: boolean;
    max_quantity: number;
};
type GetProductBundleCreateResponse = {
    same_store_assignment?: boolean;
    name: string;
    page_visibility?: string[];
    id?: string;
    meta?: any;
    modified_on?: string;
    slug: string;
    modified_by?: any;
    created_on?: string;
    products: ProductBundleItem[];
    logo?: string;
    created_by?: any;
    is_active: boolean;
    company_id?: number;
    choice: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    same_store_assignment?: boolean;
    name: string;
    page_visibility?: string[];
    meta?: any;
    modified_on?: string;
    slug: string;
    modified_by?: any;
    created_on?: string;
    products: ProductBundleItem[];
    logo?: string;
    created_by?: any;
    is_active: boolean;
    company_id?: number;
    choice: string;
};
type ProductBundleUpdateRequest = {
    same_store_assignment?: boolean;
    name: string;
    page_visibility?: string[];
    meta?: any;
    modified_on?: string;
    slug: string;
    modified_by?: any;
    products: ProductBundleItem[];
    logo?: string;
    is_active: boolean;
    company_id?: number;
    choice: string;
};
type Size = {
    display?: string;
    is_available?: boolean;
    value?: string;
    quantity?: number;
};
type LimitedProductData = {
    images?: string[];
    name?: string;
    sizes?: string[];
    quantity?: number;
    slug?: string;
    identifier?: any;
    price?: any;
    country_of_origin?: string;
    attributes?: any;
    item_code?: string;
    short_description?: string;
    uid?: number;
};
type Price = {
    min_marked?: number;
    max_marked?: number;
    currency?: string;
    min_effective?: number;
    max_effective?: number;
};
type GetProducts = {
    sizes?: Size[];
    product_uid?: number;
    auto_select?: boolean;
    allow_remove?: boolean;
    product_details?: LimitedProductData;
    price?: Price;
    auto_add_to_cart?: boolean;
    min_quantity?: number;
    max_quantity?: number;
};
type GetProductBundleResponse = {
    same_store_assignment?: boolean;
    name?: string;
    page_visibility?: string[];
    meta?: any;
    slug?: string;
    products?: GetProducts[];
    logo?: string;
    is_active?: boolean;
    company_id?: number;
    choice?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    name: string;
    description?: string;
    image?: string;
    modified_on?: string;
    tag?: string;
    active?: boolean;
    modified_by?: any;
    created_on?: string;
    id?: string;
    created_by?: any;
    subtitle?: string;
    brand_id?: number;
    company_id?: number;
    title: string;
    guide?: Guide;
};
type SizeGuideResponse = {
    name?: string;
    id?: string;
    modified_on?: string;
    tag?: string;
    active?: boolean;
    created_on?: string;
    modified_by?: any;
    title?: string;
    created_by?: any;
    subtitle?: string;
    brand_id?: number;
    company_id?: number;
    guide?: any;
};
type MOQ = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type ApplicationItemResponse = {
    moq?: MOQ;
    seo?: SEO;
    alt_text?: any;
};
type MetaFields = {
    value: string;
    key: string;
};
type ApplicationItemMeta = {
    _custom_meta?: MetaFields[];
    _custom_json?: any;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    data: any[];
    condition?: any[];
    values?: any[];
};
type PageResponseType = {
    total_count: number;
    current: number;
    next: number;
    has_next: boolean;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    name: string;
    key?: string;
    slug?: string;
    logo?: string;
    is_active: boolean;
    display_type: string;
    priority: number;
    unit?: string;
};
type AppConfigurationDetail = {
    name?: string;
    slug: string;
    is_default: boolean;
    template_slugs?: string[];
    logo?: string;
    is_active: boolean;
    priority: number;
    attributes?: AttributeDetailsGroup[];
    app_id: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    name?: string;
    default_key: string;
    key: string;
    is_default: boolean;
    logo?: string;
    is_active: boolean;
    priority: number;
    app_id: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    filter_types?: string[];
    units?: any[];
    key?: string;
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    detail?: any;
    compare?: any;
    variant?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationBucketPoints = {
    display?: string;
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    value?: string;
    map_values?: any[];
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    sort?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    name?: string;
    key: string;
    logo?: string;
    is_active: boolean;
    priority: number;
    type: string;
    display_name?: string;
    value_config?: ConfigurationListingFilterValue;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    name?: string;
    key: string;
    logo?: string;
    is_active: boolean;
    priority: number;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    key: string;
    logo?: string;
    subtitle?: string;
    is_active: boolean;
    priority: number;
    size?: ProductSize;
    title?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    name: string;
    key: string;
    logo?: string;
    is_active: boolean;
    display_type: string;
    priority: number;
    size: ProductSize;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppCatalogConfiguration = {
    config_type: string;
    listing?: ConfigurationListing;
    id?: string;
    modified_on?: string;
    created_on?: string;
    modified_by?: any;
    config_id?: string;
    created_by?: any;
    product?: ConfigurationProduct;
    type?: string;
    app_id: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    config_type: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    created_on?: string;
    modified_by?: any;
    config_id?: string;
    created_by?: any;
    product?: ConfigurationProduct;
    type?: string;
    app_id: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    config_type: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersValue = {
    count?: number;
    selected_min?: number;
    currency_symbol?: string;
    display: string;
    max?: number;
    selected_max?: number;
    value: any;
    currency_code?: string;
    is_selected: boolean;
    query_format?: string;
    min?: number;
    display_format?: string;
};
type ProductFiltersKey = {
    name: string;
    kind?: string;
    display: string;
    operators?: string[];
    logo?: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    value?: string;
    is_selected?: boolean;
    name?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators: any;
};
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type BannerImage = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionQuery = {
    op: string;
    value: any[];
    attribute: string;
};
type Media1 = {
    type?: string;
    url: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    name?: string;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    badge?: any;
    cron?: any;
    description?: string;
    banners?: ImageUrls;
    meta?: any;
    tag?: string[];
    is_active?: boolean;
    slug?: string;
    query?: CollectionQuery[];
    priority?: number;
    type?: string;
    uid?: string;
    allow_facets?: boolean;
    action?: Action;
    logo?: Media1;
    _schedule?: any;
    app_id?: string;
};
type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
};
type UserInfo = {
    user_id?: string;
    username?: string;
    uid?: string;
    email?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    end?: string;
    start?: string;
    duration?: number;
    cron?: string;
};
type CreateCollection = {
    published?: boolean;
    name: string;
    created_by?: UserInfo;
    visible_facets_keys?: string[];
    allow_sort?: boolean;
    badge?: CollectionBadge;
    _custom_json?: any;
    _locale_language?: any;
    description?: string;
    banners: CollectionBanner;
    meta?: any;
    modified_by?: UserInfo;
    is_active?: boolean;
    is_visible?: boolean;
    slug: string;
    seo?: SeoDetail;
    sort_on?: string;
    query?: CollectionQuery[];
    priority?: number;
    type: string;
    allow_facets?: boolean;
    tags?: string[];
    logo: CollectionImage;
    _schedule?: CollectionSchedule;
    app_id: string;
};
type CollectionCreateResponse = {
    name?: string;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    badge?: any;
    cron?: any;
    description?: string;
    banners?: ImageUrls;
    meta?: any;
    tag?: string[];
    is_active?: boolean;
    slug?: string;
    sort_on?: string;
    query?: CollectionQuery[];
    priority?: number;
    type?: string;
    allow_facets?: boolean;
    logo?: BannerImage;
    _schedule?: any;
    app_id?: string;
};
type CollectionDetailResponse = {
    name?: string;
    meta?: any;
    tag?: string[];
    slug?: string;
    app_id?: string;
    logo?: Media1;
    allow_sort?: boolean;
    is_active?: boolean;
    query?: CollectionQuery[];
    priority?: number;
    type?: string;
    visible_facets_keys?: string[];
    cron?: any;
    _schedule?: any;
    badge?: any;
    description?: string;
    allow_facets?: boolean;
    banners?: ImageUrls;
};
type UpdateCollection = {
    published?: boolean;
    name?: string;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    badge?: CollectionBadge;
    _custom_json?: any;
    _locale_language?: any;
    description?: string;
    banners?: CollectionBanner;
    meta?: any;
    modified_by?: UserInfo;
    is_active?: boolean;
    is_visible?: boolean;
    slug?: string;
    seo?: SeoDetail;
    sort_on?: string;
    query?: CollectionQuery[];
    priority?: number;
    type?: string;
    allow_facets?: boolean;
    tags?: string[];
    logo?: CollectionImage;
    _schedule?: CollectionSchedule;
};
type ProductBrand = {
    logo?: Media1;
    action?: Action;
    name?: string;
    uid?: number;
};
type Price1 = {
    max?: number;
    currency_code?: string;
    min?: number;
    currency_symbol?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductDetailAttribute = {
    value?: string;
    type?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductListingDetail = {
    name?: string;
    has_variant?: boolean;
    attributes?: any;
    item_code?: string;
    discount?: string;
    similars?: string[];
    product_online_date?: string;
    description?: string;
    rating?: number;
    color?: string;
    brand?: ProductBrand;
    highlights?: string[];
    short_description?: string;
    rating_count?: number;
    image_nature?: string;
    sellable?: boolean;
    teaser_tag?: any;
    medias?: Media1[];
    slug: string;
    item_type?: string;
    price?: ProductListingPrice;
    type?: string;
    promo_meta?: any;
    uid?: number;
    tryouts?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
};
type GetCollectionItemsResponse = {
    page?: Page;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    query?: CollectionQuery[];
    type?: string;
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightItem = {
    count?: number;
    sellable_count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    available_sizes?: number;
    name?: string;
    total_articles?: number;
    total_sizes?: number;
    available_articles?: number;
    article_freshness?: number;
};
type CatalogInsightResponse = {
    item?: CatalogInsightItem;
    brand_distribution?: CatalogInsightBrand;
};
type CrossSellingData = {
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    company_id?: number;
    store_ids?: number[];
    brand_ids?: number[];
    platform?: string;
    opt_level: string;
    enabled?: boolean;
};
type CompanyOptIn = {
    modified_on: number;
    created_on: number;
    modified_by?: any;
    brand_ids: number[];
    created_by?: any;
    company_id: number;
    store_ids: number[];
    opt_level: string;
    platform: string;
    enabled: boolean;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    business_type?: string;
    name?: string;
    uid?: number;
    company_type?: string;
};
type CompanyBrandDetail = {
    brand_id?: number;
    company_id?: number;
    brand_name?: string;
    total_article?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    store?: number;
    brand?: number;
    company?: string;
};
type StoreDetail = {
    name?: string;
    modified_on?: string;
    created_on?: string;
    manager?: any;
    store_type?: string;
    company_id?: number;
    display_name?: string;
    store_code?: string;
    documents?: any[];
    additional_contacts?: any[];
    address?: any;
    uid?: number;
    timing?: any;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeMasterFilter = {
    indexing: boolean;
    depends_on?: string[];
    priority?: number;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    range?: AttributeSchemaRange;
    allowed_values?: string[];
    mandatory?: boolean;
    multi?: boolean;
    format?: string;
    type: string;
};
type GenderDetail = {
    name?: string;
    details?: AttributeMasterDetails;
    departments?: string[];
    id?: string;
    meta?: AttributeMasterMeta;
    slug?: string;
    filters?: AttributeMasterFilter;
    is_nested?: boolean;
    schema?: AttributeMaster;
    logo?: string;
    description?: string;
    enabled_for_end_consumer?: boolean;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    code?: string;
    message?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
type UserSerializer = {
    username?: string;
    contact?: string;
    _id?: string;
    user_id?: string;
    uid?: string;
};
type GetDepartment = {
    priority_order?: number;
    page_size?: number;
    name?: string;
    modified_on?: string;
    search?: string;
    slug?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    item_type?: string;
    logo?: string;
    created_by?: UserSerializer;
    is_active?: boolean;
    page_no?: number;
    uid?: number;
    synonyms?: string[];
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    code?: string;
    message?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
type DepartmentCreateUpdate = {
    priority_order: number;
    name: string;
    slug?: string;
    _cls?: string;
    platforms?: any;
    tags?: string[];
    logo: string;
    is_active?: boolean;
    _custom_json?: any;
    uid?: number;
    synonyms?: string[];
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    user_id: string;
    username: string;
    super_user?: boolean;
    contact?: string;
};
type DepartmentModel = {
    priority_order: number;
    name: any;
    modified_on: string;
    _id?: any;
    created_on: string;
    modified_by?: UserDetail;
    verified_by?: UserDetail;
    slug?: any;
    _cls?: any;
    verified_on?: string;
    created_by?: UserDetail;
    logo: string;
    is_active?: boolean;
    _custom_json?: any;
    uid?: number;
    synonyms?: any[];
};
type ProductTemplate = {
    categories?: string[];
    is_expirable: boolean;
    name?: string;
    departments?: string[];
    modified_on?: string;
    tag?: string;
    slug: string;
    is_archived?: boolean;
    modified_by?: any;
    created_on?: string;
    logo?: string;
    is_physical: boolean;
    is_active?: boolean;
    created_by?: any;
    attributes?: string[];
    description?: string;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    name?: any;
    command?: any;
    size_guide?: any;
    trader_type?: any;
    item_code?: any;
    product_group_tag?: any;
    description?: any;
    currency?: any;
    category_slug?: any;
    is_active?: any;
    variants?: any;
    highlights?: any;
    return_config?: any;
    short_description?: any;
    multi_size?: any;
    no_of_boxes?: any;
    sizes?: any;
    teaser_tag?: any;
    slug?: any;
    item_type?: any;
    brand_uid?: any;
    is_dependent?: any;
    custom_order?: any;
    trader?: any;
    tags?: any;
    country_of_origin?: any;
    hsn_code?: any;
    product_publish?: any;
    media?: any;
};
type GlobalValidation = {
    description?: string;
    required?: string[];
    definitions?: any;
    properties?: Properties;
    type?: string;
    title?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    categories?: string[];
    is_expirable: boolean;
    name?: string;
    departments?: string[];
    id?: string;
    tag?: string;
    slug: string;
    is_archived?: boolean;
    logo?: string;
    is_physical: boolean;
    is_active?: boolean;
    attributes?: string[];
    description?: string;
};
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
};
type InventoryValidationResponse = {
    data?: any;
    message?: string;
};
type HSNData = {
    country_of_origin?: string[];
    hsn_code?: string[];
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadItemsData = {
    templates?: string[];
    type?: string;
    brand?: string[];
};
type ProductDownloadsItems = {
    completed_on?: string;
    status?: string;
    id?: string;
    seller_id?: number;
    created_by?: VerifiedBy;
    data?: ProductDownloadItemsData;
    template_tags?: any;
    url?: string;
    trigger_on?: string;
    task_id?: string;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Media2 = {
    logo: string;
    landscape: string;
    portrait: string;
};
type Category = {
    name: string;
    departments: number[];
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    modified_on?: string;
    id?: string;
    slug?: string;
    created_on?: string;
    modified_by?: any;
    created_by?: any;
    is_active: boolean;
    priority?: number;
    marketplaces?: CategoryMapping;
    level: number;
    uid?: number;
    synonyms?: string[];
    media?: Media2;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    name: string;
    departments: number[];
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    slug?: string;
    is_active: boolean;
    priority?: number;
    marketplaces?: CategoryMapping;
    level: number;
    synonyms?: string[];
    media?: Media2;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type Image = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type Logo = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Product = {
    name?: string;
    id?: string;
    size_guide?: string;
    _custom_json?: any;
    item_code?: string;
    description?: string;
    images?: Image[];
    tax_identifier?: any;
    color?: string;
    currency?: string;
    category_slug?: string;
    brand?: Brand;
    is_physical?: boolean;
    is_active?: boolean;
    variants?: any;
    highlights?: string[];
    short_description?: string;
    multi_size?: boolean;
    image_nature?: string;
    departments?: number[];
    sizes?: any[];
    slug?: string;
    brand_uid?: number;
    item_type?: string;
    primary_color?: string;
    is_dependent?: boolean;
    custom_order?: any;
    is_set?: boolean;
    uid?: number;
    is_expirable?: boolean;
    template_tag?: string;
    category_uid?: number;
    l3_mapping?: string[];
    country_of_origin?: string;
    hsn_code?: string;
    all_sizes?: any[];
    product_publish?: ProductPublished;
    media?: Media1[];
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type Trader = {
    name?: string;
    type?: string;
    address?: string[];
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type ProductCreateUpdate = {
    name: string;
    product_publish?: ProductPublish;
    bulk_job_id?: string;
    size_guide?: string;
    _custom_json?: any;
    item_code: any;
    product_group_tag?: string[];
    description?: string;
    tax_identifier: TaxIdentifier;
    category_slug: string;
    currency: string;
    requester?: string;
    is_active?: boolean;
    company_id: number;
    variants?: any;
    highlights?: string[];
    return_config: ReturnConfig;
    short_description?: string;
    multi_size?: boolean;
    no_of_boxes?: number;
    departments: number[];
    teaser_tag?: TeaserTag;
    slug: string;
    brand_uid: number;
    item_type: string;
    is_image_less_product?: boolean;
    is_dependent?: boolean;
    custom_order?: CustomOrder;
    is_set?: boolean;
    variant_media?: any;
    trader: Trader[];
    uid?: number;
    template_tag: string;
    action?: string;
    tags?: string[];
    net_quantity?: NetQuantity;
    country_of_origin: string;
    change_request_id?: any;
    media?: Media1[];
};
type AttributeMasterSerializer = {
    name?: string;
    raw_key?: string;
    is_nested?: boolean;
    schema: AttributeMaster;
    created_by?: any;
    variant?: boolean;
    description?: string;
    enabled_for_end_consumer?: boolean;
    modified_by?: any;
    filters: AttributeMasterFilter;
    suggestion?: string;
    unit?: string;
    departments: string[];
    details: AttributeMasterDetails;
    modified_on?: string;
    slug: string;
    created_on?: string;
    synonyms?: any;
    tags?: string[];
    logo?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    template_tag?: string;
    file_path?: string;
    succeed?: number;
    modified_on?: string;
    created_on?: string;
    cancelled?: number;
    failed_records?: string[];
    modified_by?: UserDetail1;
    failed?: number;
    created_by?: UserDetail1;
    is_active?: boolean;
    company_id?: number;
    stage?: string;
    template?: ProductTemplate;
    total?: number;
    cancelled_records?: string[];
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    user_id?: string;
    username?: string;
    uid?: string;
    email?: string;
};
type BulkJob = {
    template_tag?: string;
    succeed?: number;
    file_path?: string;
    modified_on?: string;
    modified_by?: UserInfo1;
    created_on: string;
    cancelled?: number;
    failed_records?: any[];
    failed?: number;
    created_by?: UserInfo1;
    custom_template_tag?: string;
    is_active?: boolean;
    company_id: number;
    stage?: string;
    total: number;
    tracking_url?: string;
    cancelled_records?: any[];
};
type BulkResponse = {
    batch_id: string;
    modified_on?: string;
    modified_by?: UserInfo1;
    created_on: string;
    created_by?: UserInfo1;
    is_active?: boolean;
};
type BulkProductRequest = {
    batch_id: string;
    data: any[];
    company_id: number;
    template_tag: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    user_id?: string;
    username?: string;
    company_id?: number;
};
type Items = {
    retry?: number;
    file_path?: string;
    succeed?: number;
    modified_on?: string;
    id?: string;
    created_on?: string;
    modified_by?: UserCommon;
    failed_records?: string[];
    cancelled?: number;
    failed?: number;
    created_by?: UserCommon;
    is_active?: boolean;
    company_id?: number;
    stage?: string;
    total?: number;
    tracking_url?: string;
    cancelled_records?: string[];
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    item_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    seller_identifier?: string;
    identifiers?: any;
    quantity?: number;
    item_id?: number;
    uid?: string;
    currency?: string;
    store?: any;
    price?: number;
    inventory_updated_on?: string;
    size?: string;
    price_transfer?: number;
    price_effective?: number;
    sellable_quantity?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type GTIN = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    name?: string;
    size_distribution: SizeDistribution;
    quantity?: number;
};
type InvSize = {
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    identifiers: GTIN[];
    quantity: number;
    item_width?: number;
    item_weight_unit_of_measure?: string;
    item_height?: number;
    currency: string;
    set?: InventorySet;
    price?: number;
    item_weight?: number;
    size: string;
    store_code: string;
    is_set?: boolean;
    price_transfer?: number;
    price_effective: number;
    item_length?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type ManufacturerResponse = {
    name: string;
    address: string;
    is_default: boolean;
};
type BrandMeta = {
    name: string;
    id: number;
};
type CompanyMeta = {
    id: number;
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
};
type PriceMeta = {
    tp_notes?: any;
    currency: string;
    effective: number;
    updated_at?: string;
    marked: number;
    transfer: number;
};
type Trader1 = {
    name: string;
    type: string;
    address: string[];
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type DimensionResponse = {
    is_default: boolean;
    length: number;
    width: number;
    height: number;
    unit: string;
};
type InventorySellerResponse = {
    fynd_article_code: string;
    manufacturer: ManufacturerResponse;
    store: StoreMeta;
    created_by?: UserSerializer;
    _custom_json?: any;
    tax_identifier?: any;
    track_inventory?: boolean;
    expiration_date?: string;
    meta?: any;
    total_quantity: number;
    modified_by?: UserSerializer;
    item_id: number;
    raw_meta?: any;
    brand: BrandMeta;
    trace_id?: string;
    is_active?: boolean;
    size: string;
    fynd_meta?: any;
    company: CompanyMeta;
    return_config?: ReturnConfig1;
    quantities?: Quantities;
    set?: InventorySet;
    identifier: any;
    price: PriceMeta;
    added_on_store?: string;
    stage?: string;
    is_set?: boolean;
    fragile: boolean;
    uid: string;
    trader?: Trader1[];
    seller_identifier: string;
    tags?: string[];
    weight: WeightResponse;
    country_of_origin: string;
    fynd_item_code: string;
    dimension: DimensionResponse;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    file_path?: string;
    id?: string;
    modified_on?: string;
    succeed?: number;
    cancelled?: number;
    created_on?: string;
    failed_records?: string[];
    modified_by?: any;
    failed?: number;
    created_by?: any;
    is_active?: boolean;
    company_id?: number;
    stage?: string;
    total?: number;
    cancelled_records?: string[];
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    seller_identifier: string;
    expiration_date?: string;
    quantity?: number;
    total_quantity?: number;
    item_weight_unit_of_measure?: string;
    tags?: string[];
    price_marked?: number;
    currency?: string;
    trace_id?: string;
    price?: number;
    store_code: string;
    price_effective?: number;
    item_dimensions_unit_of_measure?: string;
};
type InventoryBulkRequest = {
    batch_id: string;
    company_id: number;
    sizes: InventoryJobPayload[];
    user?: any;
};
type InventoryExportJob = {
    completed_on?: string;
    status?: string;
    seller_id: number;
    request_params?: any;
    url?: string;
    trigger_on?: string;
    task_id: string;
};
type InventoryExportRequest = {
    store?: number[];
    type?: string;
    brand?: number[];
};
type InventoryExportResponse = {
    status?: string;
    seller_id: number;
    request_params?: any;
    trigger_on?: string;
    task_id: string;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    data?: FilerList[];
    multivalues?: boolean;
};
type InventoryPayload = {
    seller_identifier: string;
    expiration_date?: string;
    total_quantity?: number;
    tags?: string[];
    price_marked?: number;
    trace_id?: string;
    price_effective?: number;
    store_id: number;
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    payload?: InventoryPayload[];
    meta?: any;
};
type InventoryFailedReason = {
    errors?: string;
    message: string;
};
type InventoryResponseItem = {
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type PageResponse = {
    has_next?: boolean;
    current?: string;
    size?: number;
    item_total?: number;
    has_previous?: boolean;
};
type HsnCodesObject = {
    tax2?: number;
    threshold1?: number;
    tax_on_mrp?: boolean;
    id?: string;
    modified_on?: string;
    threshold2?: number;
    tax_on_esp?: boolean;
    company_id?: number;
    tax1?: number;
    hsn_code?: string;
    hs2_code?: string;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    tax2?: number;
    threshold1: number;
    tax_on_mrp: boolean;
    threshold2?: number;
    tax_on_esp?: boolean;
    is_active?: boolean;
    company_id: number;
    tax1: number;
    hsn_code: string;
    hs2_code: string;
    uid?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    effective_date: string;
    threshold: number;
    cess?: number;
    rate: number;
};
type HSNDataInsertV2 = {
    modified_on?: string;
    modified_by?: any;
    created_on?: string;
    reporting_hsn: string;
    created_by?: any;
    taxes: TaxSlab[];
    type: string;
    hsn_code: string;
    country_code: string;
    description: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    name?: string;
    action?: Action;
    departments?: string[];
    slug?: string;
    logo?: Media;
    discount?: string;
    uid?: number;
    banners?: ImageUrls;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    priority_order?: number;
    name?: string;
    slug?: string;
    logo?: Media;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    name?: string;
    action?: Action;
    slug?: string;
    childs?: any[];
    _custom_json?: any;
    uid?: number;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    name?: string;
    action?: Action;
    slug?: string;
    childs?: ThirdLevelChild[];
    _custom_json?: any;
    uid?: number;
    banners?: ImageUrls;
};
type Child = {
    name?: string;
    action?: Action;
    slug?: string;
    childs?: SecondLevelChild[];
    _custom_json?: any;
    uid?: number;
    banners?: ImageUrls;
};
type CategoryItems = {
    name?: string;
    action?: Action;
    slug?: string;
    childs?: Child[];
    uid?: number;
    banners?: ImageUrls;
};
type DepartmentCategoryTree = {
    items?: CategoryItems[];
    department?: string;
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type CategoryListingResponse = {
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
type ApplicationProductListingResponse = {
    page: Page;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators?: any;
    items?: ProductListingDetail[];
};
type ProductDetail = {
    name?: string;
    has_variant?: boolean;
    attributes?: any;
    item_code?: string;
    similars?: string[];
    product_online_date?: string;
    description?: string;
    rating?: number;
    color?: string;
    brand?: ProductBrand;
    highlights?: string[];
    short_description?: string;
    rating_count?: number;
    image_nature?: string;
    teaser_tag?: any;
    medias?: Media1[];
    slug: string;
    item_type?: string;
    type?: string;
    promo_meta?: any;
    uid?: number;
    tryouts?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
};
type InventoryPage = {
    has_next?: boolean;
    next_id?: string;
    type: string;
    item_total: number;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type UserSerializer1 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type UserSerializer2 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type GetAddressSerializer = {
    landmark?: string;
    latitude?: number;
    longitude?: number;
    pincode?: number;
    address2?: string;
    address_type?: string;
    address1?: string;
    state?: string;
    country_code?: string;
    country?: string;
    city?: string;
};
type GetCompanySerializer = {
    name?: string;
    modified_on?: string;
    created_on?: string;
    verified_by?: UserSerializer2;
    modified_by?: UserSerializer2;
    reject_reason?: string;
    verified_on?: string;
    created_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    business_type?: string;
    stage?: string;
    company_type?: string;
    uid?: number;
};
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetLocationSerializer = {
    name: string;
    code: string;
    manager?: LocationManagerSerializer;
    verified_on?: string;
    created_by?: UserSerializer1;
    phone_number: string;
    _custom_json?: any;
    contact_numbers?: SellerPhoneNumber[];
    modified_by?: UserSerializer1;
    store_type?: string;
    display_name: string;
    integration_type?: LocationIntegrationType;
    documents?: Document[];
    company?: GetCompanySerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    notification_emails?: string[];
    modified_on?: string;
    created_on?: string;
    verified_by?: UserSerializer1;
    address: GetAddressSerializer;
    stage?: string;
    warnings?: any;
    uid?: number;
    timing?: LocationDayWiseSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
};
type LocationListSerializer = {
    page?: Page;
    items?: GetLocationSerializer[];
};
type ApplicationBrandJson = {
    _custom_json: any;
};
type ApplicationCategoryJson = {
    _custom_json: any;
};
type ApplicationStoreJson = {
    _custom_json: any;
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type GetCompanyProfileSerializerResponse = {
    taxes?: CompanyTaxesSerializer[];
    warnings?: any;
    uid: number;
    stage?: string;
    documents?: Document[];
    modified_on?: string;
    business_info?: string;
    _custom_json?: any;
    contact_details?: ContactDetails;
    name?: string;
    franchise_enabled?: boolean;
    addresses?: GetAddressSerializer[];
    business_type: string;
    notification_emails?: string[];
    created_on?: string;
    business_details?: BusinessDetails;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    company_type: string;
    verified_on?: string;
    mode?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    latitude: number;
    longitude: number;
    address2?: string;
    state: string;
    country: string;
    country_code?: string;
    pincode: number;
    address_type: string;
    landmark?: string;
    city: string;
    address1: string;
};
type UpdateCompany = {
    taxes?: CompanyTaxesSerializer1[];
    notification_emails?: string[];
    warnings?: any;
    contact_details?: ContactDetails;
    name?: string;
    business_details?: BusinessDetails;
    reject_reason?: string;
    franchise_enabled?: boolean;
    addresses?: CreateUpdateAddressSerializer[];
    documents?: Document[];
    business_info?: string;
    business_type?: string;
    company_type?: string;
    _custom_json?: any;
};
type ProfileSuccessResponse = {
    success?: boolean;
    uid?: number;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    uid?: number;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    stage?: string;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    warnings?: any;
    logo?: string;
    banner?: BrandBannerSerializer;
    stage?: string;
    uid?: number;
    modified_on?: string;
    _custom_json?: any;
    _locale_language?: any;
    name: string;
    reject_reason?: string;
    slug_key?: string;
    synonyms?: string[];
    created_on?: string;
    created_by?: UserSerializer;
    verified_on?: string;
    mode?: string;
    verified_by?: UserSerializer;
    description?: string;
    modified_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    synonyms?: string[];
    uid?: number;
    _locale_language?: any;
    description?: string;
    company_id?: number;
    name: string;
    logo: string;
    banner?: BrandBannerSerializer;
    brand_tier?: string;
    _custom_json?: any;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanyDetails = {
    socials?: CompanySocialAccounts[];
    website_url?: string;
};
type CompanySerializer = {
    verified_on?: string;
    details?: CompanyDetails;
    stage?: string;
    verified_by?: UserSerializer;
    notification_emails?: string[];
    name?: string;
    addresses?: GetAddressSerializer[];
    created_on?: string;
    modified_by?: UserSerializer;
    market_channels?: string[];
    reject_reason?: string;
    uid?: number;
    modified_on?: string;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    company_type: string;
    _custom_json?: any;
};
type CompanyBrandSerializer = {
    verified_on?: string;
    stage?: string;
    verified_by?: UserSerializer;
    warnings?: any;
    company?: CompanySerializer;
    created_on?: string;
    modified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    reject_reason?: string;
    uid?: number;
    modified_on?: string;
    created_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    company: number;
    uid?: number;
};
type LocationSerializer = {
    code: string;
    stage?: string;
    store_type?: string;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    notification_emails?: string[];
    warnings?: any;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
    manager?: LocationManagerSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    company: number;
    documents?: Document[];
    address: GetAddressSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    _custom_json?: any;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _ArticleQuery = {
    size?: string;
    item_id?: number;
    ignored_stores?: number[];
};
type _AssignStoreArticle = {
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    meta?: any;
    query?: _ArticleQuery;
    group_id?: string;
};
type AssignStoreRequestValidator = {
    channel_identifier?: string;
    app_id?: string;
    articles?: _AssignStoreArticle[];
    channel_type?: string;
    pincode?: string;
    store_ids?: number[];
    company_id?: number;
};
type AssignStoreResponseSerializer = {
    store_pincode?: string;
    _id?: string;
    article_assignment?: _ArticleAssignment;
    index?: number;
    preice_effective?: number;
    quantity?: number;
    status?: boolean;
    item_id?: number;
    price_marked?: number;
    store_id?: number;
    s_city?: string;
    meta?: any;
    uid?: string;
    size?: string;
    company_id?: number;
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
};
type Upload = {
    expiry: number;
    url: string;
};
type StartResponse = {
    file_name: string;
    file_path: string;
    content_type: string;
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    tags?: string[];
};
type StartRequest = {
    file_name: string;
    content_type: string;
    size: number;
    tags?: string[];
    params?: any;
};
type CompleteResponse = {
    _id: string;
    file_name: string;
    file_path: string;
    content_type: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: boolean;
    tags?: string[];
    created_on: string;
    modified_on: string;
};
type Opts = {
    attempts?: number;
    timestamp?: number;
    delay?: number;
};
type CopyFileTask = {
    id: string;
    name: string;
    data: BulkRequest;
    opts: Opts;
    progress: number;
    delay: number;
    timestamp: number;
    attempts_made: number;
    stacktrace?: string[];
    finished_on: number;
    processed_on: number;
};
type BulkUploadResponse = {
    tracking_url: string;
    task: CopyFileTask;
};
type ReqConfiguration = {
    concurrency?: number;
};
type Destination = {
    namespace: string;
    rewrite: string;
    basepath?: string;
};
type BulkRequest = {
    urls: string[];
    destination: Destination;
    configuration?: ReqConfiguration;
};
type Urls = {
    url: string;
    signed_url: string;
    expiry: number;
};
type SignUrlResponse = {
    urls: Urls[];
};
type SignUrlRequest = {
    expiry: number;
    urls: string[];
};
type DbRecord = {
    success: boolean;
    tags: string[];
    _id: string;
    file_name: string;
    operation?: string;
    namespace: string;
    content_type: string;
    file_path: string;
    upload: Upload;
    cdn: CDN;
    created_on: string;
    modified_on: string;
};
type BrowseResponse = {
    items: DbRecord[];
    page: Page;
};
type RedirectDevice = {
    link?: string;
    type?: string;
};
type WebRedirect = {
    link?: string;
    type?: string;
};
type Redirects = {
    ios?: RedirectDevice;
    android?: RedirectDevice;
    web?: WebRedirect;
    force_web?: boolean;
};
type CampaignShortLink = {
    source?: string;
    medium?: string;
};
type Attribution = {
    campaign_cookie_expiry?: string;
};
type SocialMediaTags = {
    title?: string;
    description?: string;
    image?: string;
};
type ShortLinkReq = {
    title: string;
    url: string;
    hash?: string;
    active?: boolean;
    expire_at?: string;
    enable_tracking?: boolean;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
};
type UrlInfo = {
    original?: string;
    short?: string;
    hash?: string;
};
type ShortLinkRes = {
    title?: string;
    url?: UrlInfo;
    created_by?: string;
    app_redirect?: boolean;
    fallback?: string;
    active?: boolean;
    _id?: string;
    enable_tracking?: boolean;
    expire_at?: string;
    application?: string;
    user_id?: string;
    created_at?: string;
    meta?: any;
    updated_at?: string;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
};
type ShortLinkList = {
    items?: ShortLinkRes[];
    page?: Page;
};
type ErrorRes = {
    message?: string;
};
type GCompany = {
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    name?: string;
    stores?: GStore[];
    gstores?: GStore[];
};
type GStore = {
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    code?: string;
    name?: string;
    data?: StoreData;
};
type Metum = {
    _id?: string;
    name?: string;
    value?: string;
};
type ResponseEnvelopeListSlingshotConfigurationDetail = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: SlingshotConfigurationDetail[];
    payload?: SlingshotConfigurationDetail[];
    trace_id?: string;
    page?: Page;
};
type SlingshotConfigurationDetail = {
    integration?: SlingshotIntegration;
    companies?: GCompany[];
};
type SlingshotIntegration = {
    _id?: string;
    description?: string;
    name?: string;
    slug?: string;
    meta?: Metum[];
};
type StoreData = {
    location_id?: string;
};
type KafkaMetaModel = {
    job_type?: string;
    batch_id?: number;
    action?: string;
    trace?: string[];
    created_on?: string;
    created_timestamp?: number;
};
type SuppressStoreModel = {
    stores?: number[];
};
type SuppressStorePayload = {
    payload?: SuppressStoreModel[];
    meta?: KafkaMetaModel;
};
type KafkaResponse = {
    offset?: number;
    partition?: number;
};
type ResponseEnvelopeKafkaResponse = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: KafkaResponse;
    payload?: KafkaResponse;
    trace_id?: string;
    page?: Page;
};
type DataTresholdDTO = {
    min_price?: number;
    safe_stock?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: GenericDTO[];
};
type GenericDTO = {
    text?: string;
    value?: any;
};
type JobConfigDTO = {
    integration: string;
    integration_data?: any;
    company_name?: string;
    company_id: number;
    task_details?: TaskDTO;
    threshold_details?: DataTresholdDTO;
    job_code?: string;
    alias?: string;
};
type TaskDTO = {
    type?: number;
    group_list?: GenericDTO[];
};
type ResponseEnvelopeString = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: string;
    payload?: string;
    trace_id?: string;
    page?: Page;
};
type AWSS3config = {
    bucket?: string;
    region?: string;
    dir?: string;
    access_key?: string;
    secret_key?: string;
    local_file_path?: string;
    archive_path?: string;
    archive?: boolean;
    delete?: boolean;
    unzip?: boolean;
    zip_format?: string;
    file_regex?: string;
    archive_config?: ArchiveConfig;
};
type ArchiveConfig = {
    delete?: boolean;
    archive?: boolean;
    archive_dir?: string;
};
type Audit = {
    created_by?: string;
    modified_by?: string;
    created_on?: string;
    modified_on?: string;
};
type CatalogMasterConfig = {
    source_slug?: string;
};
type CompanyConfig = {
    company_id?: number;
    exclude_steps?: number[];
    hidden_closet_keys?: string[];
    open_tags?: any;
    tax_identifiers?: string[];
    delete_quantity_threshold?: number;
};
type DBConfig = {
    vendor?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    dbname?: string;
    query?: string;
    procedure?: boolean;
    driver_class?: string;
    jdbc_url?: string;
    optional_properties?: any;
};
type DBConnectionProfile = {
    inventory?: string;
};
type DBParamConfig = {
    params?: any;
};
type DefaultHeadersDTO = {
    store?: PropBeanDTO;
    intf_article_id?: PropBeanDTO;
    price_effective?: PropBeanDTO;
    quantity?: PropBeanDTO;
};
type DocMappingConfig = {
    properties?: any;
    junk_data_threshold_count?: number;
    prop_bean_configs?: PropBeanConfig[];
    unwind_field?: string;
    default_headers?: DefaultHeadersDTO;
};
type EmailConfig = {
    recepient?: string;
    host?: string;
    username?: string;
    password?: string;
    unzip?: boolean;
    read_from_content?: boolean;
    filter_based_on_recepients?: boolean;
    pcol?: string;
    subject_line_regex?: string;
    sender_address?: string;
    local_dir?: string;
    folder_name_hierarchies?: string[];
    attachment_regex?: string;
    body_content_regex?: string;
    password_protected?: boolean;
    zip_format?: string;
    attachment_mandate?: boolean;
    filter_files_after_extraction?: boolean;
    archive_config?: ArchiveConfig;
    read_all_unread_mails?: boolean;
    content_type?: string;
    downloadable_link?: boolean;
    properties?: any;
};
type FTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    local_dir?: string;
    remote_dir?: string;
    zip_file_regex?: string;
    archive_config?: ArchiveConfig;
    file_regex?: string;
    zip_format?: string;
    read_all_files?: boolean;
};
type FileConfig = {
    delimiter?: string;
    charset?: string;
    properties?: any;
    file_has_header?: boolean;
    header_index?: number;
    header_array?: string[];
    data_start_index?: number;
    prop_bean_configs?: PropBeanConfig[];
    junk_data_threshold_count?: number;
    file_type?: string;
    line_validity_check?: boolean;
    sheet_names?: string[];
    read_all_sheets?: boolean;
    quote_char?: string;
    escape_char?: string;
    default_headers?: DefaultHeadersDTO;
};
type GoogleSpreadSheetConfig = {
    range?: string;
    sheet_id?: string;
    client_secret_location?: string;
    cred_storage_directory?: string;
    local_dir?: string;
    archive_config?: ArchiveConfig;
};
type HttpConfig = {
    hosturl?: string;
    username?: string;
    password?: string;
    request_params?: any;
    http_method?: string;
    request_payload?: string;
    local_path?: string;
    archive_config?: ArchiveConfig;
};
type JobConfig = {
    _id?: number;
    job_code?: string;
    task_type?: string;
    sync_delay?: number;
    cron_expression?: string;
    store_filter?: StoreFilter;
    process_config?: ProcessConfig;
    store_config?: StoreConfig[];
    properties?: any;
    immediate_first_run?: boolean;
    disable?: boolean;
    dependent_job_codes?: string[];
    company_config?: CompanyConfig[];
    company_ids?: number[];
    tax_identifiers?: string[];
    priority?: string;
    period_threshold?: number;
    period_threshold_type?: string;
    db_connection_profile?: DBConnectionProfile;
    params?: any;
    open_tags?: any;
    delete_quantity_threshold?: number;
    catalog_master_config?: CatalogMasterConfig;
    aggregator_types?: string[];
    integration_type?: string;
    min_price?: number;
    audit?: Audit;
    version?: number;
    alias?: string;
};
type JobConfigRawDTO = {
    integration: string;
    company_name: string;
    company_id: number;
    data?: JobConfig;
};
type JsonDocConfig = {
    prop_bean_configs?: PropBeanConfig[];
};
type LocalFileConfig = {
    retries?: number;
    interval?: number;
    local_dir?: string;
    working_dir?: string;
    unzip?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type MongoDocConfig = {
    collection_name?: string;
    find_query?: any;
    projection_query?: any;
    prop_bean_configs?: PropBeanConfig[];
    aggregate_pipeline?: any[];
    skip_save?: boolean;
};
type OAuthConfig = {
    limit?: number;
    pages?: number;
    interval?: number;
    consumer_key?: string;
    consumer_secret?: string;
    token?: string;
    token_secret?: string;
    rest_url?: string;
    rest_base_url?: string;
    function_name?: string;
};
type ProcessConfig = {
    db_config?: DBConfig;
    db_param_config?: DBParamConfig;
    sftp_config?: SFTPConfig;
    aws_s3_config?: AWSS3config;
    mongo_doc_config?: MongoDocConfig;
    ftp_config?: FTPConfig;
    email_config?: EmailConfig;
    file_config?: FileConfig;
    json_doc_config?: JsonDocConfig;
    doc_mapping_config?: DocMappingConfig;
    task_step_config?: TaskStepConfig;
    http_config?: HttpConfig;
    local_file_config?: LocalFileConfig;
    oauth_config?: OAuthConfig;
    google_spreadsheet_config?: GoogleSpreadSheetConfig;
};
type PropBeanConfig = {
    required?: boolean;
    mapping?: any;
    optional?: boolean;
    send?: Send;
    validations?: any[];
    values?: string[];
    include?: boolean;
    source_field?: string;
    source_fields?: string[];
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type PropBeanDTO = {
    required?: boolean;
    optional?: boolean;
    include?: boolean;
    source_field?: string;
    source_fields?: string[];
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type ResponseEnvelopeListJobConfigRawDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigRawDTO[];
    payload?: JobConfigRawDTO[];
    trace_id?: string;
    page?: Page;
};
type SFTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    private_key_path?: string;
    strict_host_key_checking?: boolean;
    local_dir?: string;
    remote_dir?: string;
    password_protected?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type Send = {
    raw?: boolean;
    processed?: boolean;
};
type StoreConfig = {
    job_code?: string;
    storeid?: string;
    store_alias?: string;
    store_file_regex?: string;
    store_file_name?: string;
    process_config?: ProcessConfig;
    properties?: any;
};
type StoreFilter = {
    include_tags?: string[];
    exclude_tags?: string[];
    query?: any;
};
type TaskConfig = {
    name?: string;
    task_config_id?: number;
    task_params?: TaskParam[];
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    task_configs?: TaskConfig[];
    task_config_ids?: number[];
    task_config_group_ids?: number[];
};
type JobStepsDTO = {
    step_name?: string;
    type?: string;
    step_execution_time?: number;
    start_count?: number;
    end_count?: number;
    deleted_count?: number;
    processed_start_time?: string;
    processed_at?: string;
};
type ResponseEnvelopeListJobStepsDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobStepsDTO[];
    payload?: JobStepsDTO[];
    trace_id?: string;
    page?: Page;
};
type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO[];
    payload?: JobConfigDTO[];
    trace_id?: string;
    page?: Page;
};
type ResponseEnvelopeJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO;
    payload?: JobConfigDTO;
    trace_id?: string;
    page?: Page;
};
type JobHistoryDto = {
    total_added_count?: number;
    total_updated_count?: number;
    total_suppressed_count?: number;
    total_initial_count?: number;
    job_id?: number;
    status?: string;
    job_code?: string;
    processed_on?: string;
    filename?: string[];
    error_type?: string;
    message?: string;
};
type JobMetricsDto = {
    job_code?: string;
    is_run_more_than_usual?: string;
    job_history?: JobHistoryDto[];
    total_success_count?: number;
    total_failure_count?: number;
    total_warning_count?: number;
    total_suppressed_count?: number;
    total_job_runs?: number;
};
type ResponseEnvelopeJobMetricsDto = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobMetricsDto;
    payload?: JobMetricsDto;
    trace_id?: string;
    page?: Page;
};
type JobConfigListDTO = {
    code?: string;
    alias?: string;
    modified_by?: string;
    created_by?: string;
    modified_on?: string;
    created_on?: string;
    active?: boolean;
    type?: string;
};
type ResponseEnvelopeListJobConfigListDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigListDTO[];
    payload?: JobConfigListDTO[];
    trace_id?: string;
    page?: Page;
};
type ApplicationInventory = {
    inventory?: AppInventoryConfig;
    authentication?: AuthenticationConfig;
    article_assignment?: ArticleAssignmentConfig;
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    order?: AppOrderConfig;
    logistics?: AppLogisticsConfig;
    business?: string;
    comms_enabled?: boolean;
    platforms?: string[];
    _id?: string;
    loyalty_points?: LoyaltyPointsConfig;
    app?: string;
    created_at?: string;
    updated_at?: string;
    modified_by?: string;
};
type AppInventoryConfig = {
    brand?: InventoryBrand;
    store?: InventoryStore;
    category?: InventoryCategory;
    price?: InventoryPrice;
    discount?: InventoryDiscount;
    out_of_stock?: boolean;
    only_verified_products?: boolean;
    franchise_enabled?: boolean;
    exclude_category?: any[];
    image?: string[];
    company_store?: any[];
};
type InventoryBrand = {
    criteria?: string;
    brands?: any[];
};
type InventoryStore = {
    criteria?: string;
    stores?: any[];
    rules?: AppStoreRules;
};
type AppStoreRules = {
    companies?: number[];
    brands?: any[];
};
type InventoryCategory = {
    criteria?: string;
    categories?: any[];
};
type InventoryPrice = {
    min?: number;
    max?: number;
};
type InventoryDiscount = {
    min?: number;
    max?: number;
};
type AuthenticationConfig = {
    required?: boolean;
    provider?: string;
};
type ArticleAssignmentConfig = {
    rules?: ArticleAssignmentRules;
    post_order_reassignment?: boolean;
};
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
};
type StorePriority = {
    enabled?: boolean;
    storetype_order?: any[];
};
type AppCartConfig = {
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    max_cart_items?: number;
    min_cart_value?: number;
    bulk_coupons?: boolean;
    revenue_engine_coupon?: boolean;
    empty_cart?: boolean;
};
type DeliveryCharges = {
    enabled?: boolean;
    charges?: Charges;
};
type Charges = {
    threshold?: number;
    charges?: number;
};
type AppPaymentConfig = {
    callback_url?: CallbackUrl;
    methods?: Methods;
    payment_selection_lock?: PaymentSelectionLock;
    mode_of_payment?: string;
    source?: string;
    enabled?: boolean;
    cod_amount_limit?: number;
    cod_charges?: number;
};
type CallbackUrl = {
    app?: string;
    web?: string;
};
type Methods = {
    pl?: PaymentModeConfig;
    card?: PaymentModeConfig;
    nb?: PaymentModeConfig;
    wl?: PaymentModeConfig;
    ps?: PaymentModeConfig;
    upi?: PaymentModeConfig;
    qr?: PaymentModeConfig;
    cod?: PaymentModeConfig;
    pp?: PaymentModeConfig;
    jp?: PaymentModeConfig;
    pac?: PaymentModeConfig;
    fc?: PaymentModeConfig;
    jiopp?: PaymentModeConfig;
    stripepg?: PaymentModeConfig;
    juspaypg?: PaymentModeConfig;
    payubizpg?: PaymentModeConfig;
    payumoneypg?: PaymentModeConfig;
    rupifipg?: PaymentModeConfig;
    simpl?: PaymentModeConfig;
};
type PaymentModeConfig = {
    enabled?: boolean;
};
type PaymentSelectionLock = {
    enabled?: boolean;
    default_options?: string;
    payment_identifier?: string;
};
type AppOrderConfig = {
    enabled?: boolean;
    force_reassignment?: boolean;
    message?: string;
};
type AppLogisticsConfig = {
    logistics_by_seller?: boolean;
    serviceability_check?: boolean;
    same_day_delivery?: boolean;
    dp_assignment?: boolean;
};
type LoyaltyPointsConfig = {
    enabled?: boolean;
    auto_apply?: boolean;
};
type AppInventoryPartialUpdate = {
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyalty_points?: LoyaltyPointsConfig;
    comms_enabled?: boolean;
};
type BrandCompanyInfo = {
    company_name?: string;
    company_id?: number;
};
type CompanyByBrandsRequest = {
    brands: number;
    search_text?: string;
};
type CompanyByBrandsResponse = {
    items?: BrandCompanyInfo[];
    page?: Page;
};
type StoreByBrandsRequest = {
    company_id?: number;
    brands: number;
    search_text?: string;
};
type StoreByBrandsResponse = {
    items?: BrandStoreInfo[];
    page?: Page;
};
type BrandStoreInfo = {
    store_name?: string;
    store_id?: number;
    store_type?: string;
    store_code?: string;
    store_address?: OptedStoreAddress;
    company?: OptedCompany;
};
type CompanyBrandInfo = {
    name?: string;
    value?: number;
    brand_logo_url?: string;
    brand_banner_url?: string;
    brand_banner_portrait_url?: string;
};
type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo;
};
type CreateApplicationRequest = {
    app?: App;
    configuration?: AppInventory;
    domain?: AppDomain;
};
type CreateAppResponse = {
    app?: Application;
    configuration?: ApplicationInventory;
};
type ApplicationsResponse = {
    items?: Application[];
    page?: Page;
};
type MobileAppConfiguration = {
    is_active?: boolean;
    _id?: string;
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    application?: string;
    platform_type?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    package_name?: string;
};
type LandingImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type SplashImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type MobileAppConfigRequest = {
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    is_active?: boolean;
};
type BuildVersionHistory = {
    versions?: BuildVersion;
    latest_available_version_name?: string;
};
type BuildVersion = {
    _id?: string;
    application?: string;
    platform_type?: string;
    build_status?: string;
    version_name?: string;
    version_code?: number;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type AppSupportedCurrency = {
    _id?: string;
    supported_currency?: string[];
    application?: string;
    default_currency?: DefaultCurrency;
    created_at?: string;
    updated_at?: string;
};
type DefaultCurrency = {
    ref?: string;
    code?: string;
};
type CurrencyConfig = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
    symbol?: string;
};
type DomainAdd = {
    name?: string;
};
type DomainAddRequest = {
    domain?: DomainAdd;
};
type DomainsResponse = {
    domains?: Domain[];
};
type UpdateDomain = {
    _id?: string;
};
type UpdateDomainTypeRequest = {
    domain?: UpdateDomain;
    action?: string;
};
type DomainStatusRequest = {
    domain_url?: string;
};
type DomainStatus = {
    display?: string;
    status?: boolean;
};
type DomainStatusResponse = {
    connected?: boolean;
    status?: DomainStatus[];
};
type DomainSuggestionsRequest = {
    domain_url?: string;
    custom?: boolean;
};
type DomainSuggestion = {
    name: string;
    unsupported?: boolean;
    is_available: boolean;
    price?: number;
    currency?: string;
};
type DomainSuggestionsResponse = {
    domains?: DomainSuggestion[];
};
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn[];
    page?: Page;
};
type IntegrationOptIn = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: string;
    companies?: any[];
    support?: string[];
    _id?: string;
    name?: string;
    meta?: IntegrationMeta[];
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type Validators = {
    company?: CompanyValidator;
    store?: StoreValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
};
type CompanyValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    type?: string;
    tooltip?: string;
};
type StoreValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type InventoryValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type OrderValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type IntegrationMeta = {
    is_public?: boolean;
    _id?: string;
    name?: string;
    value?: string;
};
type Integration = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: any;
    companies?: any[];
    support?: string[];
    _id?: string;
    name?: string;
    meta?: IntegrationMeta[];
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel[];
};
type IntegrationLevel = {
    opted?: boolean;
    permissions?: any[];
    last_patch?: LastPatch[];
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    meta?: IntegrationMeta[];
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    data?: any;
};
type UpdateIntegrationLevelRequest = {
    items?: IntegrationLevel[];
};
type OptedStoreIntegration = {
    other_opted?: boolean;
    other_integration?: IntegrationOptIn;
    other_entity?: OtherEntity;
};
type OtherEntity = {
    opted?: boolean;
    permissions?: string[];
    last_patch?: LastPatch[];
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    data?: OtherEntityData;
    meta?: any[];
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type LastPatch = {
    op?: string;
    path?: string;
    value?: string;
};
type OtherEntityData = {
    article_identifier?: string;
};
type App = {
    company_id?: string;
    channel_type?: string;
    auth?: ApplicationAuth;
    name?: string;
    desc?: string;
};
type AppInventory = {
    brand?: InventoryBrandRule;
    store?: InventoryStoreRule;
    image?: string[];
    franchise_enabled?: boolean;
    out_of_stock?: boolean;
    only_verified_products?: boolean;
    payment?: InventoryPaymentConfig;
    article_assignment?: InventoryArticleAssignment;
};
type AppDomain = {
    name?: string;
};
type CompaniesResponse = {
    items?: AppInventoryCompanies;
    page?: Page;
};
type AppInventoryCompanies = {
    uid?: number;
    name?: string;
    company_type?: string;
};
type StoresResponse = {
    items?: AppInventoryStores;
    page?: Page;
};
type AppInventoryStores = {
    _id?: string;
    modified_on?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    company_id?: number;
};
type FilterOrderingStoreRequest = {
    all_stores?: boolean;
    deployed_stores?: number[];
    q?: string;
};
type DeploymentMeta = {
    deployed_stores?: number[];
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
};
type OrderingStoreConfig = {
    deployment_meta?: DeploymentMeta;
};
type OtherSellerCompany = {
    uid?: number;
    name?: string;
};
type OtherSellerApplication = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OtherSellerCompany;
    opt_type?: string;
};
type OtherSellerApplications = {
    items?: OtherSellerApplication[];
    page?: Page;
};
type OptedApplicationResponse = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OptedCompany;
    opted_inventory?: OptedInventory;
    opt_out_inventory?: OptOutInventory;
};
type OptedCompany = {
    uid?: number;
    name?: string;
};
type OptedInventory = {
    opt_type?: OptType;
    items?: any;
};
type OptType = {
    key?: string;
    display?: string;
};
type OptedStore = {
    name?: string;
    store_code?: string;
    _id?: string;
    modified_on?: string;
    uid?: number;
    address?: OptedStoreAddress;
    display_name?: string;
    store_type?: string;
    company_id?: number;
};
type OptOutInventory = {
    store: number[];
    company: number[];
};
type TokenResponse = {
    tokens?: Tokens;
    _id?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Tokens = {
    firebase?: Firebase;
    moengage?: Moengage;
    segment?: Segment;
    gtm?: Gtm;
    freshchat?: Freshchat;
    safetynet?: Safetynet;
    fynd_rewards?: FyndRewards;
    google_map?: GoogleMap;
};
type Firebase = {
    credentials?: Credentials;
    enabled?: boolean;
};
type Credentials = {
    ios?: Ios;
    android?: Android;
    project_id?: string;
    gcm_sender_id?: string;
    application_id?: string;
    api_key?: string;
};
type Ios = {
    application_id?: string;
    api_key?: string;
};
type Android = {
    application_id?: string;
    api_key?: string;
};
type Moengage = {
    credentials?: MoengageCredentials;
    enabled?: boolean;
};
type MoengageCredentials = {
    app_id?: string;
};
type Segment = {
    credentials?: SegmentCredentials;
    enabled?: boolean;
};
type SegmentCredentials = {
    write_key?: string;
};
type Gtm = {
    credentials?: GtmCredentials;
    enabled?: boolean;
};
type GtmCredentials = {
    api_key?: string;
};
type Freshchat = {
    credentials?: FreshchatCredentials;
    enabled?: boolean;
};
type FreshchatCredentials = {
    app_id?: string;
    app_key?: string;
    web_token?: string;
};
type Safetynet = {
    credentials?: SafetynetCredentials;
    enabled?: boolean;
};
type SafetynetCredentials = {
    api_key?: string;
};
type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
type FyndRewardsCredentials = {
    public_key?: string;
};
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
type GoogleMapCredentials = {
    api_key?: string;
};
type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
type Credit = {
    enabled?: boolean;
};
type Debit = {
    enabled?: boolean;
    auto_apply?: boolean;
    strategy_channel?: string;
};
type ProductDetailFeature = {
    similar?: string[];
    seller_selection?: boolean;
    update_product_meta?: boolean;
    request_product?: boolean;
};
type LaunchPage = {
    page_type?: string;
    params?: any;
    query?: any;
};
type LandingPageFeature = {
    launch_page?: LaunchPage;
    continue_as_guest?: boolean;
    login_btn_text?: string;
    show_domain_textbox?: boolean;
    show_register_btn?: boolean;
};
type RegistrationPageFeature = {
    ask_store_address?: boolean;
};
type AppFeature = {
    product_detail?: ProductDetailFeature;
    landing_page?: LandingPageFeature;
    registration_page?: RegistrationPageFeature;
    home_page?: HomePageFeature;
    common?: CommonFeature;
    cart?: CartFeature;
    qr?: QrFeature;
    pcr?: PcrFeature;
    order?: OrderFeature;
    _id?: string;
    app?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type HomePageFeature = {
    order_processing?: boolean;
};
type CommonFeature = {
    communication_optin_dialog?: CommunicationOptinDialogFeature;
    deployment_store_selection?: DeploymentStoreSelectionFeature;
    listing_price?: ListingPriceFeature;
    currency?: CurrencyFeature;
    revenue_engine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compare_products?: CompareProductsFeature;
    reward_points?: RewardPointsConfig;
};
type CommunicationOptinDialogFeature = {
    visibility?: boolean;
};
type DeploymentStoreSelectionFeature = {
    enabled?: boolean;
    type?: string;
};
type ListingPriceFeature = {
    value?: string;
};
type CurrencyFeature = {
    value?: string[];
    type?: string;
    default_currency?: string;
};
type RevenueEngineFeature = {
    enabled?: boolean;
};
type FeedbackFeature = {
    enabled?: boolean;
};
type CompareProductsFeature = {
    enabled?: boolean;
};
type CartFeature = {
    gst_input?: boolean;
    staff_selection?: boolean;
    placing_for_customer?: boolean;
    google_map?: boolean;
    revenue_engine_coupon?: boolean;
};
type QrFeature = {
    application?: boolean;
    products?: boolean;
    collections?: boolean;
};
type PcrFeature = {
    staff_selection?: boolean;
};
type OrderFeature = {
    buy_again?: boolean;
};
type AppFeatureRequest = {
    feature?: AppFeature;
};
type AppFeatureResponse = {
    feature?: AppFeature;
};
type UnhandledError = {
    message?: string;
};
type InvalidPayloadRequest = {
    message?: string;
};
type SuccessMessageResponse = {
    message?: string;
};
type InventoryBrandRule = {
    criteria?: string;
    brands?: number[];
};
type StoreCriteriaRule = {
    companies?: number[];
    brands?: number[];
};
type InventoryStoreRule = {
    criteria?: string;
    rules?: StoreCriteriaRule[];
    stores?: number[];
};
type InventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type StorePriorityRule = {
    enabled?: boolean;
    storetype_order?: string[];
};
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
};
type InventoryArticleAssignment = {
    post_order_reassignment?: boolean;
    rules?: ArticleAssignmentRule;
};
type CompanyAboutAddress = {
    pincode?: number;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    address_type?: string;
};
type UserEmail = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    email?: string;
};
type UserPhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    country_code?: number;
    phone?: string;
};
type ApplicationInformation = {
    address?: InformationAddress;
    support?: InformationSupport;
    social_links?: SocialLinks;
    links?: Links;
    copyright_text?: string;
    _id?: string;
    business_highlights?: BusinessHighlights;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type InformationAddress = {
    loc?: string;
    address_line?: string[];
    phone?: InformationPhone;
    city?: string;
    country?: string;
    pincode?: number;
};
type InformationPhone = {
    code?: string;
    number?: string;
};
type InformationSupport = {
    phone?: string[];
    email?: string[];
    timing?: string;
};
type SocialLinks = {
    facebook?: FacebookLink;
    instagram?: InstagramLink;
    twitter?: TwitterLink;
    pinterest?: PinterestLink;
    google_plus?: GooglePlusLink;
    youtube?: YoutubeLink;
    linked_in?: LinkedInLink;
    vimeo?: VimeoLink;
    blog_link?: BlogLink;
};
type FacebookLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type InstagramLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type TwitterLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type PinterestLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type GooglePlusLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type YoutubeLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type LinkedInLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type VimeoLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type BlogLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type Links = {
    title?: string;
    link?: string;
};
type BusinessHighlights = {
    _id?: string;
    title?: string;
    icon?: string;
    sub_title?: string;
};
type ApplicationDetail = {
    name: string;
    description: string;
    logo: SecureUrl;
    mobile_logo: SecureUrl;
    favicon: SecureUrl;
    banner: SecureUrl;
    domain?: Domain;
    domains?: Domain[];
    _id?: string;
};
type CurrenciesResponse = {
    items?: Currency[];
};
type AppCurrencyResponse = {
    application?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: Currency[];
};
type StoreLatLong = {
    type?: string;
    coordinates?: number[];
};
type OptedStoreAddress = {
    state?: string;
    address1?: string;
    lat_long?: StoreLatLong;
    address2?: string;
    pincode?: number;
    country?: string;
    city?: string;
};
type OrderingStore = {
    address?: OptedStoreAddress;
    _id?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    pincode?: number;
    code?: string;
};
type OrderingStores = {
    page?: Page;
    items?: OrderingStore[];
    deployed_stores?: number[];
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
    __v?: number;
};
type OrderingStoresResponse = {
    page?: Page;
    items?: OrderingStore[];
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type Rule = {
    min?: number;
    value?: number;
    max?: number;
    key?: number;
    discount_qty?: number;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponSchedule = {
    cron?: string;
    duration?: number;
    next_schedule?: any[];
    end?: string;
    start?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    subtitle?: string;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    description?: string;
    title?: string;
    auto?: DisplayMetaDict;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    types?: string[];
    iins?: string[];
    codes?: string[];
    networks?: string[];
    uses?: PaymentAllowValue;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type UsesRemaining = {
    user?: number;
    app?: number;
    total?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type Restrictions = {
    post_order?: PostOrder;
    user_groups?: number[];
    price_range?: PriceRange;
    ordering_stores?: number[];
    coupon_allowed?: boolean;
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    platforms?: string[];
    uses?: UsesRestriction;
};
type Validity = {
    priority?: number;
};
type RuleDefinition = {
    type: string;
    currency_code?: string;
    scope?: string[];
    applicable_on: string;
    value_type: string;
    calculate_on: string;
    auto_apply?: boolean;
    is_exact?: boolean;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponAdd = {
    validation?: Validation;
    tags?: string[];
    rule: Rule[];
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    author?: CouponAuthor;
    state?: State;
    type_slug: string;
    display_meta: DisplayMeta;
    action?: CouponAction;
    restrictions?: Restrictions;
    validity: Validity;
    rule_definition: RuleDefinition;
    ownership: Ownership;
    identifiers: Identifier;
    code: string;
};
type CouponsResponse = {
    page?: Page;
    items?: CouponAdd;
};
type SuccessMessage = {
    success?: boolean;
    message?: string;
};
type OperationErrorResponse = {
    success?: boolean;
    message?: string;
};
type CouponUpdate = {
    validation?: Validation;
    tags?: string[];
    rule: Rule[];
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    author?: CouponAuthor;
    state?: State;
    type_slug: string;
    display_meta: DisplayMeta;
    action?: CouponAction;
    restrictions?: Restrictions;
    validity: Validity;
    rule_definition: RuleDefinition;
    ownership: Ownership;
    identifiers: Identifier;
    code: string;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CompareObject = {
    less_than_equals?: number;
    greater_than_equals?: number;
    equals?: number;
    less_than?: number;
    greater_than?: number;
};
type ItemCriteria = {
    item_category?: number[];
    cart_unique_item_quantity?: CompareObject;
    available_zones?: string[];
    cart_unique_item_amount?: CompareObject;
    item_id?: number[];
    cart_total?: CompareObject;
    item_exclude_category?: number[];
    buy_rules?: string[];
    item_exclude_store?: number[];
    item_store?: number[];
    item_brand?: number[];
    item_exclude_company?: number[];
    item_exclude_brand?: number[];
    cart_quantity?: CompareObject;
    item_sku?: string[];
    item_size?: string[];
    item_exclude_sku?: string[];
    all_items?: boolean;
    item_company?: number[];
    item_exclude_id?: number[];
};
type PromotionSchedule = {
    cron?: string;
    duration?: number;
    next_schedule?: any[];
    published: boolean;
    end?: string;
    start: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    codes?: string[];
    uses?: PaymentAllowValue1;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type Restrictions1 = {
    post_order?: PostOrder1;
    user_groups?: number[];
    anonymous_users?: boolean;
    user_registered?: UserRegistered;
    payments?: PromotionPaymentModes[];
    order_quantity?: number;
    uses: UsesRestriction1;
    platforms?: string[];
    user_id?: string[];
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type DiscountOffer = {
    max_usage_per_transaction?: number;
    max_offer_quantity?: number;
    apportion_discount?: boolean;
    discount_price?: number;
    code?: string;
    discount_percentage?: number;
    max_discount_amount?: number;
    min_offer_quantity?: number;
    partial_can_ret?: boolean;
    discount_amount?: number;
};
type DiscountRule = {
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    discount_type: string;
    buy_condition: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type DisplayMeta1 = {
    offer_text?: string;
    description?: string;
    name?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionListItem = {
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    promo_group: string;
    code?: string;
    buy_rules: any;
    _schedule?: PromotionSchedule;
    promotion_type: string;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    stackable?: boolean;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    application_id: string;
    author?: PromotionAuthor;
    display_meta: DisplayMeta1;
    apply_priority?: number;
    mode: string;
    ownership: Ownership1;
    currency?: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    promo_group: string;
    code?: string;
    buy_rules: any;
    _schedule?: PromotionSchedule;
    promotion_type: string;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    stackable?: boolean;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    application_id: string;
    author?: PromotionAuthor;
    display_meta: DisplayMeta1;
    apply_priority?: number;
    mode: string;
    ownership: Ownership1;
    currency?: string;
};
type PromotionUpdate = {
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    promo_group: string;
    code?: string;
    buy_rules: any;
    _schedule?: PromotionSchedule;
    promotion_type: string;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    stackable?: boolean;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    application_id: string;
    author?: PromotionAuthor;
    display_meta: DisplayMeta1;
    apply_priority?: number;
    mode: string;
    ownership: Ownership1;
    currency?: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    type?: string;
    example?: string;
    is_hidden?: boolean;
    subtitle?: string;
    description?: string;
    entity_type?: string;
    title?: string;
    modified_on?: string;
    entity_slug?: string;
    created_on?: string;
};
type CartItem = {
    product_id: string;
    size: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductAvailability = {
    out_of_stock?: boolean;
    is_valid?: boolean;
    sizes?: string[];
    deliverable?: boolean;
    other_store_quantity?: number;
};
type PromoMeta = {
    message?: string;
};
type ProductPrice = {
    currency_code?: string;
    add_on?: number;
    marked?: number;
    selling?: number;
    currency_symbol?: string;
    effective?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    type?: string;
    query?: ActionQuery;
};
type CartProduct = {
    type?: string;
    categories?: CategoryInfo[];
    images?: ProductImage[];
    uid?: number;
    brand?: BaseInfo;
    action?: ProductAction;
    name?: string;
    slug?: string;
};
type BasePrice = {
    marked?: number;
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    type?: string;
    extra_meta?: any;
    quantity?: number;
    size?: string;
    seller?: BaseInfo;
    uid?: string;
    store?: BaseInfo;
    price?: ArticlePriceInfo;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
};
type CartProductIdentifer = {
    identifier?: string;
};
type FreeGiftItem = {
    item_slug?: string;
    item_price_details?: any;
    item_id?: number;
    item_name?: string;
    item_images_url?: string[];
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
    parent_item_identifier?: string;
};
type DiscountRulesApp = {
    item_criteria?: any;
    offer?: any;
    raw_offer?: any;
    matched_buy_rules?: string[];
};
type AppliedPromotion = {
    mrp_promotion?: boolean;
    article_quantity?: number;
    offer_text?: string;
    applied_free_articles?: AppliedFreeArticles[];
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRulesApp[];
    amount?: number;
    promotion_group?: string;
    promotion_type?: string;
    promo_id?: string;
    promotion_name?: string;
};
type CartProductInfo = {
    availability?: ProductAvailability;
    bulk_offer?: any;
    promo_meta?: PromoMeta;
    price_per_unit?: ProductPriceInfo;
    quantity?: number;
    message?: string;
    product?: CartProduct;
    price?: ProductPriceInfo;
    discount?: string;
    parent_item_identifiers?: any;
    article?: ProductArticle;
    coupon_message?: string;
    key?: string;
    identifiers: CartProductIdentifer;
    promotions_applied?: AppliedPromotion[];
    is_set?: boolean;
};
type LoyaltyPoints = {
    description?: string;
    is_applied?: boolean;
    applicable?: number;
    total?: number;
};
type RawBreakup = {
    gst_charges?: number;
    vog?: number;
    you_saved?: number;
    convenience_fee?: number;
    mrp_total?: number;
    coupon?: number;
    fynd_cash?: number;
    delivery_charge?: number;
    total?: number;
    discount?: number;
    subtotal?: number;
    cod_charge?: number;
};
type DisplayBreakup = {
    currency_code?: string;
    message?: string[];
    currency_symbol?: string;
    value?: number;
    key?: string;
    display?: string;
};
type CouponBreakup = {
    type?: string;
    message?: string;
    coupon_type?: string;
    is_applied?: boolean;
    uid?: string;
    description?: string;
    value?: number;
    coupon_value?: number;
    minimum_cart_value?: number;
    title?: string;
    sub_title?: string;
    max_discount_value?: number;
    code?: string;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
};
type OpenapiCartDetailsResponse = {
    items?: CartProductInfo[];
    is_valid?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    address?: string;
    phone?: number;
    email?: string;
    address_type?: string;
    country?: string;
    meta?: any;
    area_code_slug?: string;
    city?: string;
    area_code: string;
    state?: string;
    pincode?: number;
    area?: string;
    country_code?: string;
    name?: string;
    landmark?: string;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
};
type PromiseTimestamp = {
    max?: number;
    min?: number;
};
type PromiseFormatted = {
    max?: string;
    min?: string;
};
type ShipmentPromise = {
    timestamp?: PromiseTimestamp;
    formatted?: PromiseFormatted;
};
type OpenApiCartServiceabilityResponse = {
    delivery_promise?: ShipmentPromise;
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiOrderItem = {
    files?: OpenApiFiles[];
    extra_meta?: any;
    quantity?: number;
    cashback_applied: number;
    size: string;
    meta?: CartItemMeta;
    delivery_charges: number;
    discount: number;
    product_id: number;
    price_effective: number;
    price_marked: number;
    employee_discount?: number;
    cod_charges: number;
    loyalty_discount?: number;
    amount_paid: number;
    coupon_effective_discount: number;
    payment_methods: MultiTenderPaymentMethod[];
};
type OpenApiPlatformCheckoutReq = {
    cashback_applied: number;
    order_id?: string;
    affiliate_order_id?: string;
    gstin?: string;
    shipping_address?: ShippingAddress;
    loyalty_discount?: number;
    files?: OpenApiFiles[];
    cart_items: OpenApiOrderItem[];
    currency_code?: string;
    comment?: string;
    delivery_charges: number;
    coupon?: string;
    coupon_value: number;
    billing_address: ShippingAddress;
    coupon_code: string;
    payment_mode?: string;
    employee_discount?: any;
    cod_charges: number;
    cart_value: number;
    payment_methods: MultiTenderPaymentMethod[];
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    success?: boolean;
    message?: string;
    order_id: string;
};
type AbandonedCart = {
    is_active?: boolean;
    payments?: any;
    articles: any[];
    coupon?: any;
    promotion?: any;
    last_modified: string;
    payment_mode?: string;
    cod_charges?: any;
    app_id?: string;
    user_id: string;
    expire_at: string;
    order_id?: string;
    meta?: any;
    merge_qty?: boolean;
    gstin?: string;
    buy_now?: boolean;
    cashback: any;
    pick_up_customer_details?: any;
    _id: string;
    checkout_mode?: string;
    is_archive?: boolean;
    fc_index_map?: number[];
    fynd_credits?: any;
    bulk_coupon_discount?: number;
    shipments?: any[];
    is_default: boolean;
    uid: number;
    delivery_charges?: any;
    discount?: number;
    comment?: string;
    cart_value?: number;
    created_on: string;
    payment_methods?: any[];
};
type AbandonedCartResponse = {
    page?: Page;
    message?: string;
    items?: AbandonedCart[];
    success?: boolean;
    result?: any;
};
type AddProductCart = {
    extra_meta?: any;
    article_id?: string;
    quantity?: number;
    item_size?: string;
    article_assignment?: any;
    item_id?: number;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    pos?: boolean;
    display?: string;
    store_id?: number;
    seller_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    delivery_promise?: ShipmentPromise;
    delivery_charge_info?: string;
    comment?: string;
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    id?: string;
    gstin?: string;
    last_modified?: string;
    restrict_checkout?: boolean;
    is_valid?: boolean;
    currency?: CartCurrency;
    payment_selection_lock?: PaymentSelectionLock;
    checkout_mode?: string;
    coupon_text?: string;
};
type AddCartDetailResponse = {
    partial?: boolean;
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
};
type UpdateProductCart = {
    extra_meta?: any;
    article_id?: string;
    quantity?: number;
    item_size?: string;
    item_id?: number;
    item_index?: number;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
};
type E = {
    code?: number;
    exception?: string;
    info?: string;
    message?: string;
};
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
};
type Giveaway = {
    _id?: string;
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    audience?: RewardsAudience;
    banner_image?: Asset;
    created_at?: string;
    description?: string;
    name?: string;
    rule?: RewardsRule;
    title?: string;
    updated_at?: string;
};
type Schedule = {
    duration?: number;
    end?: string;
    start?: string;
    cron?: string;
};
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
};
type Offer = {
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    banner_image?: Asset;
    created_at?: string;
    name?: string;
    rule?: any;
    share?: ShareMessages;
    sub_text?: string;
    text?: string;
    type?: string;
    updated_at?: string;
    updated_by?: string;
    url?: string;
};
type ShareMessages = {
    email?: number;
    facebook?: string;
    fallback?: string;
    message?: string;
    messenger?: string;
    sms?: string;
    text?: string;
    twitter?: string;
    whatsapp?: string;
};
type UserRes = {
    points?: Points;
    user?: RewardUser;
};
type Points = {
    available?: number;
};
type RewardUser = {
    _id?: string;
    active?: boolean;
    created_at?: string;
    referral?: Referral;
    uid?: number;
    updated_at?: string;
    user_block_reason?: string;
    user_id?: string;
};
type Referral = {
    code?: string;
};
type AppUser = {
    _id?: string;
    active?: boolean;
    application_id?: string;
    block_reason?: string;
    updated_at?: string;
    updated_by?: string;
    user_id?: string;
};
type GiveawayAudience = {
    audience_id?: string;
    current_count?: number;
};
type HistoryRes = {
    items?: PointsHistory[];
    page?: Page;
    points?: number;
};
type PointsHistory = {
    _id?: string;
    application_id?: string;
    claimed?: boolean;
    created_at?: string;
    expires_on?: string;
    meta?: any;
    points?: number;
    remaining_points?: number;
    text_1?: string;
    text_2?: string;
    text_3?: string;
    txn_name?: string;
    updated_at?: string;
    user_id?: string;
};
type StatGroup = {
    key?: string;
    url?: string;
    title?: string;
};
type StatsGroups = {
    groups?: StatGroup[];
};
type StatsGroupComponent = {
    key?: string;
    url?: string;
    title?: string;
    type?: string;
    filters?: any;
};
type StatsGroupComponents = {
    title?: string;
    components?: StatsGroupComponent[];
};
type StatsRes = {
    key?: string;
    title?: string;
    type?: string;
    data?: any;
};
type ReceivedAt = {
    value?: string;
};
type AbandonCartsDetail = {
    properties_cart_id?: string;
    context_traits_first_name?: string;
    context_traits_last_name?: string;
    context_traits_phone_number?: string;
    context_traits_email?: string;
    context_app_application_id?: string;
    properties_breakup_values_raw_total?: string;
    received_at?: ReceivedAt;
};
type AbandonCartsList = {
    items?: AbandonCartsDetail[];
    cart_total?: string;
    page?: Page;
};
type AbandonCartDetail = {
    _id?: string;
    user_id?: string;
    cart_value?: string;
    articles?: any[];
    breakup?: any;
    address?: any;
};
type ExportJobReq = {
    marketplace_name?: string;
    start_time?: string;
    end_time?: string;
    event_type?: string;
    trace_id?: string;
};
type ExportJobRes = {
    status?: string;
    job_id?: string;
};
type ExportJobStatusRes = {
    status?: string;
    job_id?: string;
    download_url?: string;
};
type GetLogsListReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
};
type MkpLogsResp = {
    start_time_iso?: string;
    end_time_iso?: string;
    event_type?: string;
    trace_id?: string;
    count?: string;
    status?: string;
};
type GetLogsListRes = {
    items?: MkpLogsResp[];
    page?: Page;
};
type SearchLogReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
    identifier?: string;
    identifier_value?: string;
};
type LogInfo = {
    _id?: string;
    status?: string;
    event_type?: string;
    marketplace_name?: string;
    event?: string;
    trace_id?: string;
    company_id?: number;
    brand_id?: number;
    store_code?: string;
    store_id?: number;
    item_id?: number;
    article_id?: string;
    seller_identifier?: string;
};
type SearchLogRes = {
    items?: LogInfo[];
    page?: Page;
};
type ValidityObject = {
    start: string;
    end: string;
};
type CreateUpdateDiscount = {
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids: string[];
    extension_ids: string[];
    job_type: string;
    discount_type: string;
    discount_level: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    validity: ValidityObject;
};
type DiscountJob = {
    _id: string;
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids?: string[];
    job_type?: string;
    discount_type?: string;
    discount_level?: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    validity: ValidityObject;
    created_on: string;
    modified_on: string;
    created_by: UserDetails;
    modified_by: UserDetails;
    meta?: any;
};
type ListOrCalender = {
    items: DiscountJob[];
    page: Page;
};
type DiscountItems = {
    item_code?: string;
    brand_uid?: number;
    seller_identifier?: string;
    discount_type: string;
    value: number;
};
type BulkDiscount = {
    company_id: number;
    items: DiscountItems[];
};
type FileJobResponse = {
    stage: string;
    total: number;
    failed: number;
    company_id: number;
    body?: any;
    type: string;
    file_type: string;
};
type DownloadFileJob = {
    brand_ids?: number[];
    store_ids?: number[];
};
type CancelJobResponse = {
    success: boolean;
};
type UserDetails = {
    username: string;
    user_id: string;
};
type BadRequestObject = {
    message: string;
};
type AddProxyReq = {
    attached_path?: string;
    proxy_url?: string;
};
type AddProxyResponse = {
    _id?: string;
    attached_path?: string;
    proxy_url?: string;
    company_id?: string;
    application_id?: string;
    extension_id?: string;
    created_at?: string;
    modified_at?: string;
};
type APIError = {
    code?: string;
    message?: string;
    info?: string;
    request_id?: string;
    meta?: any;
};
type RemoveProxyResponse = {
    message?: string;
    data?: any;
};
type EventConfig = {
    id?: number;
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
    display_name?: string;
    description?: string;
    created_on?: string;
};
type EventConfigList = {
    items?: EventConfig[];
    page?: Page;
};
type EventConfigResponse = {
    event_configs?: EventConfig[];
};
type SubscriberConfigList = {
    items?: SubscriberResponse[];
    page?: Page;
};
type EventProcessedStatus = {
    id?: number;
    subscriber_id?: string;
    attempt?: number;
    response_code?: string;
    response_message?: string;
    created_on?: string;
    processed_on?: string;
    status?: boolean;
};
type EventPayload = {
    id?: number;
    event_trace_id?: string;
    message_id?: string;
    event_name?: string;
    event_type?: string;
    version?: string;
    status?: boolean;
};
type SubscriberConfig = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    status?: any;
    email_id?: string;
    auth_meta?: AuthMeta;
    event_id?: number[];
};
type SubscriberResponse = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    email_id?: string;
    status?: any;
    auth_meta?: AuthMeta;
    created_on?: string;
    updated_on?: string;
    event_configs?: EventConfig[];
};
type SubscriberEvent = {
    id?: number;
    subscriber_id?: number;
    event_id?: number;
    created_date?: string;
};
type AuthMeta = {
    type?: string;
    secret?: string;
};
type Association = {
    company_id?: number;
    application_id?: string[];
    extension_id?: string;
    criteria?: string;
};
type EventConfigBase = {
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
};
type RequestBodyAuditLog = {
    log_meta: LogMetaObj;
    log_payload: any;
};
type CreateLogResponse = {
    message?: string;
    internal_message?: string;
};
type LogMetaObj = {
    modifier?: any;
    application?: string;
    entity?: EntityObject;
    device_info?: any;
    location?: any;
};
type EntityObject = {
    id?: string;
    type?: string;
    action?: string;
};
type LogSchemaResponse = {
    docs?: LogDocs[];
};
type LogDocs = {
    entity?: EntityObj;
    modifier?: Modifier;
    device_info?: DeviceInfo;
    location?: Location;
    _id?: string;
    company?: string;
    application?: string;
    sessions?: string;
    date?: string;
    logs?: any;
};
type EntityObj = {
    id?: string;
    type?: string;
    action?: string;
    entity_details?: any;
};
type Modifier = {
    user_id?: string;
    as_administrator?: boolean;
    user_details?: any;
};
type DeviceInfo = {
    user_agent?: string;
    extra_meta?: any;
};
type Location = {
    extra_meta?: any;
};
type EntityTypesResponse = {
    items?: EntityTypeObj[];
};
type EntityTypeObj = {
    entity_value?: string;
    display_name?: string;
};
