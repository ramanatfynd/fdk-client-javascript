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
    documentEngine: DocumentEngine;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, FilterInfoOption, FiltersInfo, GSTDetailsData, Prices, PlatformItem, BagUnit, ShipmentStatus, UserDataInfo, ShipmentItemFulFillingStore, PaymentModeInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, BagStateMapper, BagStatusHistory, UserDetailsData, DPDetailsData, TrackingList, OrderBrandName, PlatformDeliveryAddress, BagGST, OrderBagArticle, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, Identifier, FinancialBreakup, BagConfigs, OrderBags, ShipmentPayments, ShipmentStatusData, OrderDetailsData, FulfillingStore, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailItem, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Document, StoreDocuments, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, StoreAddress, Store, Dimensions, ReturnConfig, Weight, Article, AffiliateMeta, LockData, ShipmentTimeStamp, EInvoice, EinvoiceInfo, Formatted, BuyerDetails, DebugInfo, ShipmentMeta, PDFLinks, AffiliateDetails, Dates, Brand, BagGSTDetails, B2BPODetails, BagMeta, Attributes, Item, AffiliateBagDetails, BagReturnableCancelableStatus, ArticleDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, UserData, MarketPlacePdf, AffiliateBag, OrderPriority, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, LineItem, ProcessingDates, Shipment, BillingInfo, PaymentMethod, PaymentInfo, ShippingInfo, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, MetaFields, ApplicationItemSEO, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, BannerImage, ImageUrls, Media1, CollectionQuery, GetCollectionDetailNest, GetCollectionListingResponse, CollectionBadge, CollectionSchedule, CollectionImage, CollectionBanner, SeoDetail, UserInfo, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, Media2, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Logo, Image, ProductPublished, Product, ProductListingResponse, NetQuantity, Trader, CustomOrder, TaxIdentifier, TeaserTag, ProductPublish, ProductCreateUpdate, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, BrandMeta, DimensionResponse, CompanyMeta, WeightResponse, Trader1, ReturnConfig1, QuantityBase, Quantities, PriceMeta, ManufacturerResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, SellerPhoneNumber, LocationManagerSerializer, UserSerializer1, GetAddressSerializer, GetCompanySerializer, UserSerializer2, LocationIntegrationType, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, Website, BusinessDetails, ContactDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validity, Rule, Validation, Ownership, State, CouponAuthor, CouponSchedule, DisplayMetaDict, DisplayMeta, CouponAction, BulkBundleRestriction, PriceRange, UsesRemaining, UsesRestriction, PostOrder, PaymentAllowValue, PaymentModes, Restrictions, RuleDefinition, CouponDateMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, PromotionDateMeta, PromotionAuthor, Visibility, UserRegistered, UsesRemaining1, UsesRestriction1, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, DisplayMeta1, PromotionAction, PromotionSchedule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductPrice, ProductPriceInfo, ProductAvailability, PromoMeta, CartProductIdentifer, ProductImage, ActionQuery, ProductAction, CategoryInfo, CartProduct, CartProductInfo, RawBreakup, DisplayBreakup, LoyaltyPoints, CouponBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, OverrideCartItemPromo, OverrideCartItem, OverrideCheckoutReq, OverrideCheckoutResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, Schedule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, GenerateBulkInvoiceLabelShipment, GenerateBulkInvoiceOrLabelUrl, DocumentType, BulkListBadRequestResponse, BulkListFailedResponse, SuccessResponseGenerateBulkShipment, SuccessResponseBulkStatus, GenerateBulkUrlSuccessResponse, InternalErrorResponseGenerateBulkShipment, BadRequestResponseGenerateBulkUrl, InternalErrorResponseGenerateBulkUrl, GenerateBulkShipment, GenerateBulkUrl, GetBulkStatusRequest, BadRequestResponseGenerateBulkItemParameters, BadRequestResponseGenerateBulkItem, SuccessResponseGenerateBulk, BadRequestResponseGenerateBulk, InternalErrorResponseGenerateBulk, ShippingToAddress, SellerAddress, BoxDetails, GenerateBulkBoxLabel, GenerateBulkShipmentLabel, GenerateNoc, PackageDetails, PackageItemDetails, GenerateBulkPackageLabel, SignedSuccessResponse, BulkPresignedSuccessResponse, SignedBadRequestResponse, SignedFailedResponse, StatusSuccessResponse, StatusBadRequestResponse, StatusFailedResponse, GenerateManifest, GeneratePresignedManifestUrl, ManifestLink, GenerateManifestUrlSuccessResponse, ManifestListFailedResponse, InvoiceLabelPresignedRequestBody };
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
import DocumentEngine = require("./client/DocumentEnginePlatformClient");
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
type TicketCategory = {
    key: string;
    display: string;
    form?: CustomForm;
    sub_categories?: TicketSubCategory[];
    feedback_form?: TicketFeedbackForm;
};
type TicketSubCategory = {
    key: string;
    display: string;
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
    show_support_dris?: boolean;
    integration?: any;
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
    ticket_id: string;
    category: TicketCategory;
    sub_category?: TicketSubCategory;
    source: any;
    status: Status;
    priority: Priority;
    created_by?: any;
    assigned_to?: any;
    tags?: string[];
    _custom_json?: any;
    is_feedback_pending?: boolean;
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
    value?: string;
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
    value?: string;
};
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: string;
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
};
type SendOtpCommsReqEmail = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpSmsCommsTemplate;
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
    success: boolean;
    app_id: string;
    aggregators?: any[];
    display_fields: string[];
    excluded_fields: string[];
    created: boolean;
};
type ErrorCodeDescription = {
    success: boolean;
    description: string;
    code: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    merchant_salt: string;
    key: string;
    is_active?: boolean;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    aggregator_name?: PaymentGatewayConfig;
    is_active?: boolean;
};
type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: string[];
};
type ErrorCodeAndDescription = {
    description: string;
    code: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    logos?: PaymentModeLogo;
    display_name?: string;
    code?: string;
    package_name?: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    exp_month?: number;
    card_brand_image?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_reference?: string;
    card_token?: string;
    card_isin?: string;
    exp_year?: number;
    display_name?: string;
    code?: string;
    intent_app?: IntentApp[];
    intent_flow?: boolean;
    retry_count?: number;
    card_fingerprint?: string;
    logo_url?: PaymentModeLogo;
    card_brand?: string;
    intent_app_error_list?: string[];
    aggregator_name: string;
    merchant_code?: string;
    card_name?: string;
    name?: string;
    nickname?: string;
    card_number?: string;
    fynd_vpa?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_type?: string;
    expired?: boolean;
    display_priority?: number;
    timeout?: number;
    card_id?: string;
    card_issuer?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    anonymous_enable?: boolean;
    aggregator_name?: string;
    display_priority: number;
    name: string;
    list?: PaymentModeList[];
    display_name: string;
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    transfer_type: string;
    is_default: boolean;
    more_attributes: any;
    customers: any;
    unique_transfer_no: any;
    is_active: boolean;
    payouts_aggregators: any[];
};
type PayoutBankDetails = {
    country?: string;
    account_holder?: string;
    state?: string;
    ifsc_code: string;
    city?: string;
    pincode?: number;
    branch_name?: string;
    account_no?: string;
    bank_name?: string;
    account_type: string;
};
type PayoutRequest = {
    unique_external_id: string;
    transfer_type: string;
    bank_details: PayoutBankDetails;
    aggregator: string;
    is_active: boolean;
    users: any;
};
type PayoutResponse = {
    success: boolean;
    transfer_type: string;
    payment_status: string;
    bank_details: any;
    payouts: any;
    aggregator: string;
    unique_transfer_no: string;
    is_active: boolean;
    created: boolean;
    users: any;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_active: boolean;
    is_default: boolean;
};
type UpdatePayoutRequest = {
    is_active: boolean;
    unique_external_id: string;
    is_default: boolean;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    success: boolean;
    data: any[];
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    success: boolean;
    aggregator: string;
    config: any;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    success: boolean;
    data: any;
};
type RefundAccountResponse = {
    success: boolean;
    is_verified_flag?: boolean;
    data?: any;
    message: string;
};
type NotFoundResourceError = {
    success: boolean;
    description: string;
    code: string;
};
type BankDetailsForOTP = {
    account_holder: string;
    ifsc_code: string;
    branch_name: string;
    account_no: string;
    bank_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    success?: boolean;
    branch_name: string;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    subtitle: string;
    account_holder: string;
    ifsc_code: string;
    created_on: string;
    display_name: string;
    title: string;
    is_active: boolean;
    beneficiary_id: string;
    id: number;
    mobile?: string;
    comment?: string;
    branch_name?: string;
    account_no: string;
    modified_on: string;
    address: string;
    bank_name: string;
    email: string;
    transfer_mode: string;
    delights_user_name?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_gateway?: string;
    extra_meta?: any;
    payment_id?: string;
    order_id?: string;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    name?: string;
    mode: string;
    amount: number;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    success: boolean;
    message: string;
    order_id: string;
};
type FilterInfoOption = {
    name?: string;
    text: string;
    value?: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    type: string;
    text: string;
    value: string;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    value_of_good: number;
    gstin_code: string;
    gst_fee: number;
    brand_calculated_amount: number;
};
type Prices = {
    cashback_applied?: number;
    amount_paid_roundoff?: number;
    tax_collected_at_source?: number;
    fynd_credits?: number;
    promotion_effective_discount?: number;
    refund_amount?: number;
    amount_paid?: number;
    price_marked?: number;
    cod_charges?: number;
    value_of_good?: number;
    coupon_value?: number;
    refund_credit?: number;
    cashback?: number;
    delivery_charge?: number;
    discount?: number;
    price_effective?: number;
};
type PlatformItem = {
    can_return?: boolean;
    can_cancel?: boolean;
    l3_category?: number;
    color?: string;
    department_id?: number;
    images?: string[];
    id?: number;
    size?: string;
    code?: string;
    name?: string;
    l3_category_name?: string;
    image?: string[];
    l1_category?: string[];
};
type BagUnit = {
    total_shipment_bags: number;
    shipment_id: string;
    status: any;
    gst?: GSTDetailsData;
    ordering_channel: string;
    bag_id: number;
    item_quantity: number;
    prices?: Prices;
    item?: PlatformItem;
};
type ShipmentStatus = {
    ops_status: string;
    status: string;
    hex_code: string;
    title: string;
    actual_status: string;
};
type UserDataInfo = {
    avis_user_id?: string;
    email?: string;
    gender?: string;
    mobile?: string;
    is_anonymous_user?: boolean;
    first_name?: string;
    uid?: number;
    name?: string;
    last_name?: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItem = {
    total_bags_count: number;
    channel?: any;
    bags?: BagUnit[];
    sla?: any;
    shipment_status?: ShipmentStatus;
    payment_methods?: any;
    id: string;
    created_at: string;
    application?: any;
    shipment_created_at: number;
    fulfilling_centre: string;
    user?: UserDataInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    prices?: Prices;
    payment_mode_info?: PaymentModeInfo;
    total_shipments_in_order: number;
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    filters?: FiltersInfo[];
    applied_filters?: any;
    items?: ShipmentItem[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type BagStateMapper = {
    journey_type: string;
    notify_customer?: boolean;
    app_display_name?: string;
    app_state_name?: string;
    state_type: string;
    is_active?: boolean;
    display_name: string;
    name: string;
    bs_id: number;
    app_facing?: boolean;
};
type BagStatusHistory = {
    updated_at?: string;
    delivery_partner_id?: number;
    shipment_id: string;
    status: string;
    bag_state_mapper: BagStateMapper;
    reasons?: any[];
    store_id: number;
    bsh_id: number;
    app_display_name?: boolean;
    state_type?: string;
    forward?: boolean;
    created_at: string;
    bag_id: number;
    delivery_awb_number?: string;
    kafka_sync?: boolean;
    display_name?: boolean;
    state_id: number;
};
type UserDetailsData = {
    city: string;
    country: string;
    state: string;
    email: string;
    address: string;
    pincode: string;
    name: string;
    phone: string;
};
type DPDetailsData = {
    track_url?: string;
    country?: string;
    awb_no?: string;
    eway_bill_id?: string;
    id?: string;
    gst_tag?: string;
    pincode?: string;
    name?: string;
};
type TrackingList = {
    status: string;
    is_current?: boolean;
    is_passed?: boolean;
    time?: string;
    text: string;
};
type OrderBrandName = {
    brand_name: string;
    modified_on?: number;
    company: string;
    logo: string;
    created_on: number;
    id: number;
};
type PlatformDeliveryAddress = {
    updated_at?: string;
    address2?: string;
    landmark?: string;
    country?: string;
    state?: string;
    email?: string;
    address_type?: string;
    contact_person?: string;
    version?: string;
    created_at?: string;
    pincode?: string;
    address_category?: string;
    latitude?: number;
    address1?: string;
    city?: string;
    longitude?: number;
    area?: string;
    phone?: string;
};
type BagGST = {
    hsn_code?: string;
    gst_tax_percentage?: number;
    value_of_good?: number;
    gstin_code?: string;
    gst_fee?: number;
    gst_tag?: string;
    is_default_hsn_code?: boolean;
    brand_calculated_amount?: number;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    item_criteria?: ItemCriterias;
    cart_conditions?: any;
};
type AppliedPromos = {
    promo_id?: string;
    discount_rules?: DiscountRules[];
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    article_quantity?: number;
    promotion_name?: string;
    amount?: number;
    promotion_type?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    cashback_applied: number;
    amount_paid: number;
    item_name: string;
    added_to_fynd_cash: boolean;
    gst_fee: string;
    size: string;
    coupon_effective_discount: number;
    price_effective: number;
    brand_calculated_amount: number;
    hsn_code: string;
    fynd_credits: number;
    value_of_good: number;
    cod_charges: number;
    pm_price_split: any;
    coupon_value: number;
    gst_tag: string;
    promotion_effective_discount: number;
    delivery_charge: number;
    discount: number;
    total_units: number;
    transfer_price: number;
    amount_paid_roundoff?: number;
    tax_collected_at_source?: number;
    gst_tax_percentage: number;
    identifiers: Identifier;
    price_marked: number;
    refund_credit: number;
    cashback: number;
};
type BagConfigs = {
    is_returnable: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
};
type OrderBags = {
    parent_promo_bags?: any;
    brand?: OrderBrandName;
    delivery_address?: PlatformDeliveryAddress;
    gst_details?: BagGST;
    seller_identifier?: string;
    article?: OrderBagArticle;
    quantity?: number;
    applied_promos?: AppliedPromos[];
    line_number?: number;
    financial_breakup?: FinancialBreakup[];
    entity_type?: string;
    bag_id: number;
    current_status?: string;
    display_name?: string;
    prices?: Prices;
    item?: PlatformItem;
    bag_configs?: BagConfigs;
    identifier?: string;
};
type ShipmentPayments = {
    logo?: string;
    mode: string;
    source?: string;
};
type ShipmentStatusData = {
    shipment_id?: string;
    status?: string;
    id?: number;
    created_at?: string;
    bag_list?: number[];
};
type OrderDetailsData = {
    source?: string;
    tax_details?: any;
    order_date?: string;
    order_value?: string;
    cod_charges?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    fynd_order_id: string;
    affiliate_id?: string;
};
type FulfillingStore = {
    country: string;
    state: string;
    fulfillment_channel: string;
    contact_person: string;
    id: string;
    address: string;
    pincode: string;
    store_name: string;
    code: string;
    city: string;
    meta: any;
    phone: string;
};
type ShipmentInfoResponse = {
    affiliate_shipment_id: string;
    journey_type?: string;
    can_cancel?: boolean;
    bag_status_history?: BagStatusHistory[];
    company: any;
    vertical?: string;
    coupon?: any;
    ordering_store: any;
    escalation?: any;
    user_id: string;
    refund_details?: any;
    refund_text?: string;
    beneficiary_details?: boolean;
    is_pdsr?: string;
    tracking_url: string;
    pay_button?: string;
    is_invoiced: boolean;
    platform_logo: boolean;
    order_created_time?: string;
    is_fynd_coupon: boolean;
    user_agent?: string;
    email_id: string;
    fyndstore_emp: any;
    gst_details?: GSTDetailsData;
    is_packaging_order: boolean;
    current_shipment_status: any;
    custom_meta?: any[];
    is_fynd_store?: string;
    mid?: string;
    invoice: any;
    shipment_quantity?: number;
    enable_dp_tracking?: string;
    secured_delivery_flag?: string;
    billing_details?: UserDetailsData;
    delivery_details?: UserDetailsData;
    dp_details?: DPDetailsData;
    items: any[];
    kirana_store_id?: string;
    delivery_status: any[];
    replacement_details?: string;
    tracking_list?: TrackingList[];
    due_date?: string;
    forward_order_status?: any[];
    lock_status: string;
    user_info?: any;
    order_type: string;
    status_progress: number;
    payment_mode?: string;
    prices?: Prices;
    bags?: OrderBags[];
    operational_status?: string;
    payments?: ShipmentPayments;
    total_bags?: number;
    can_break: string;
    shipment_id: string;
    status?: ShipmentStatusData;
    packaging_type?: string;
    order_status: any;
    credit_note_id: string;
    child_nodes?: string[];
    can_return?: boolean;
    shipment_images?: string[];
    bank_data?: any;
    shipment_status?: string;
    total_items?: number;
    delivery_slot?: any;
    forward_shipment_status?: any[];
    forward_tracking_list?: any[];
    order?: OrderDetailsData;
    priority_text?: string;
    fulfilling_store?: FulfillingStore;
    go_green?: boolean;
    picked_date?: string;
    enable_tracking?: boolean;
    is_not_fynd_source: boolean;
};
type PlatformShipment = {
    journey_type?: string;
    bag_status_history?: BagStatusHistory[];
    vertical?: string;
    platform_logo?: string;
    user_agent?: string;
    gst_details?: GSTDetailsData;
    custom_meta?: any[];
    shipment_quantity?: number;
    enable_dp_tracking?: string;
    billing_details?: UserDetailsData;
    delivery_details?: UserDetailsData;
    dp_details?: DPDetailsData;
    tracking_list?: TrackingList[];
    payment_mode?: string;
    prices?: Prices;
    bags?: OrderBags[];
    operational_status?: string;
    payments?: ShipmentPayments;
    total_bags?: number;
    shipment_id: string;
    status?: ShipmentStatusData;
    packaging_type?: string;
    shipment_images?: string[];
    shipment_status?: string;
    total_items?: number;
    delivery_slot?: any;
    order?: OrderDetailsData;
    priority_text?: string;
    fulfilling_store?: FulfillingStore;
    picked_date?: string;
};
type OrderDict = {
    fynd_order_id: string;
    shipment_count: number;
    order_date: string;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    custom_meta?: any[];
    order?: OrderDict;
    success: boolean;
};
type SubLane = {
    total_items?: number;
    index?: number;
    actions?: any[];
    value?: string;
    text?: string;
};
type SuperLane = {
    total_items?: number;
    options?: SubLane[];
    text: string;
    value: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformBreakupValues = {
    name?: string;
    display?: string;
    value?: string;
};
type PlatformOrderItems = {
    channel?: PlatformChannel;
    total_order_value?: number;
    order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    shipments?: PlatformShipment[];
    user_info?: UserDataInfo;
    payment_mode?: string;
    order_created_time?: string;
    order_id?: string;
    meta?: any;
};
type OrderListingResponse = {
    lane?: string;
    total_count?: number;
    success?: boolean;
    page?: Page;
    message?: string;
    items?: PlatformOrderItems[];
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    value: number;
    key: string;
    text: string;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    updated_at?: string;
    status?: string;
    reason?: string;
    account_name?: string;
    last_location_recieved_at?: string;
    updated_time?: string;
    meta?: any;
    raw_status?: string;
    awb?: string;
    shipment_type?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    status?: string;
    s3_key?: string;
    report_id?: string;
    report_name?: string;
    report_requested_at?: string;
    report_created_at?: string;
    request_details?: any;
    display_name?: string;
    report_type?: string;
};
type JioCodeUpsertDataSet = {
    article_id?: string;
    item_id?: string;
    jio_code?: string;
    company_id?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    type?: string;
    message?: string;
    value?: string;
};
type JioCodeUpsertResponse = {
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
    data?: any[];
    identifier?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    label?: any;
    batch_id: string;
    do_invoice_label_generated: boolean;
    store_id?: string;
    invoice?: any;
    invoice_status?: string;
    data?: any;
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
    namespace?: string;
    file_name?: string;
    file_path?: string;
    upload?: FileUploadResponse;
    cdn?: URL;
    tags?: string[];
    operation?: string;
    content_type?: string;
    size?: number;
    method?: string;
};
type BulkListingPage = {
    has_next?: boolean;
    has_previous?: boolean;
    type?: string;
    size?: number;
    current?: number;
    total?: number;
};
type bulkListingData = {
    store_id?: number;
    user_id?: string;
    successful_shipments?: any[];
    excel_url?: string;
    uploaded_on?: string;
    failed?: number;
    file_name?: string;
    processing_shipments?: string[];
    id?: string;
    company_id?: number;
    store_name?: string;
    total?: number;
    store_code?: string;
    status?: string;
    batch_id?: string;
    user_name?: string;
    successful?: number;
    failed_shipments?: any[];
    processing?: number;
};
type BulkListingResponse = {
    error?: string;
    page?: BulkListingPage;
    success?: boolean;
    data?: bulkListingData[];
};
type ManifestPage = {
    has_next?: boolean;
    has_previous?: boolean;
    type?: string;
    size?: string;
    current?: string;
    total?: number;
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    lane?: string;
    sales_channel_name?: string;
    dp_ids?: string;
    sales_channels?: string;
    date_range?: DateRange;
    dp_name?: string;
    store_name?: string;
    stores?: string;
};
type GeneratedManifestItem = {
    status?: string;
    filters?: ManifestFilter;
    created_by?: string;
    is_active?: boolean;
    manifest_id?: string;
    company_id?: number;
    created_at?: string;
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
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
    filters?: ManifestFilter;
};
type ManifestDetail = {
    status?: string;
    filters?: ManifestFilter;
    uid?: number;
    created_by?: string;
    user_id?: number;
    id?: number;
    is_active?: boolean;
    manifest_id?: string;
    company_id?: number;
    created_at?: string;
    meta?: ManifestDetailMeta;
};
type ManifestDetailItem = {
    shipment_id?: string;
    invoice_id?: string;
    awb?: string;
    order_id?: string;
    item_qty?: number;
};
type ManifestDetailResponse = {
    additional_shipment_count?: number;
    page?: ManifestPage;
    manifest_details?: ManifestDetail[];
    items?: ManifestDetailItem[];
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    display_name?: string;
    id?: number;
    qc_type?: string[];
    question_set?: QuestionSet[];
};
type PlatformShipmentReasonsResponse = {
    reasons?: Reason[];
    success?: boolean;
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    processing_shipments_count?: number;
    batch_id?: string;
    successful_shipments_count?: number;
    failed_shipments_count?: number;
    company_id?: string;
    total_shipments_count?: number;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    status?: boolean;
    failed_records?: string[];
    error?: string[];
    user_id?: string;
    uploaded_on?: string;
    success?: string;
    data?: BulkActionDetailsDataField[];
    uploaded_by?: string;
    message?: string;
};
type Document = {
    ds_type: string;
    value: string;
    url?: string;
    legal_name: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
};
type StoreEinvoice = {
    enabled: boolean;
    user?: string;
    username?: string;
    password?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type StoreMeta = {
    timing?: any[];
    documents?: StoreDocuments;
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
    notification_emails?: string[];
    stage: string;
    product_return_config?: any;
    gst_number?: string;
    display_name: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_credentials: StoreGstCredentials;
};
type StoreAddress = {
    updated_at: string;
    address_type: string;
    longitude: number;
    address1: string;
    country: string;
    email?: string;
    contact_person: string;
    created_at: string;
    phone: string;
    pincode: number;
    landmark?: string;
    area?: string;
    address2?: string;
    state: string;
    version?: string;
    country_code: string;
    address_category: string;
    latitude: number;
    city: string;
};
type Store = {
    store_email: string;
    updated_at?: string;
    is_archived?: boolean;
    fulfillment_channel: string;
    code?: string;
    address1: string;
    longitude: number;
    parent_store_id?: number;
    mall_name?: string;
    brand_id?: any;
    country: string;
    brand_store_tags?: string[];
    is_enabled_for_recon?: boolean;
    contact_person: string;
    packaging_material_count?: number;
    location_type: string;
    created_at: string;
    meta: StoreMeta;
    phone: number;
    mall_area?: string;
    vat_no?: string;
    company_id: number;
    pincode: string;
    login_username: string;
    s_id: string;
    name: string;
    address2?: string;
    alohomora_user_id?: number;
    store_address_json?: StoreAddress;
    state: string;
    is_active?: boolean;
    order_integration_id?: string;
    latitude: number;
    store_active_from?: string;
    city: string;
};
type Dimensions = {
    length?: number;
    unit?: string;
    height?: number;
    is_default?: boolean;
    width?: number;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type Article = {
    is_set?: boolean;
    dimensions?: Dimensions;
    child_details?: any;
    identifiers: Identifier;
    uid: string;
    return_config?: ReturnConfig;
    raw_meta?: any;
    weight?: Weight;
    a_set?: any;
    size: string;
    esp_modified?: any;
    code?: string;
    seller_identifier: string;
    _id: string;
};
type AffiliateMeta = {
    box_type?: string;
    channel_order_id?: string;
    is_priority?: boolean;
    loyalty_discount?: number;
    size_level_total_qty?: number;
    employee_discount?: number;
    due_date?: string;
    order_item_id?: string;
    channel_shipment_id?: string;
    quantity?: number;
    coupon_code?: string;
};
type LockData = {
    locked?: boolean;
    lock_message?: string;
    mto?: boolean;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type EInvoice = {
    error_message?: string;
    signed_qr_code?: string;
    error_code?: string;
    acknowledge_no?: number;
    signed_invoice?: string;
    irn?: string;
    acknowledge_date?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type BuyerDetails = {
    ajio_site_id?: string;
    state: string;
    address: string;
    name: string;
    pincode: number;
    gstin: string;
    city: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    box_type?: string;
    forward_affiliate_order_id?: string;
    store_invoice_updated_date?: string;
    b2c_buyer_details?: any;
    external?: any;
    auto_trigger_dp_assignment_acf: boolean;
    lock_data?: LockData;
    dp_name?: string;
    forward_affiliate_shipment_id?: string;
    timestamp?: ShipmentTimeStamp;
    awb_number?: string;
    return_store_node?: number;
    assign_dp_from_sb?: boolean;
    shipment_weight?: number;
    marketplace_store_id?: string;
    same_store_available: boolean;
    einvoice_info?: EinvoiceInfo;
    weight: number;
    fulfilment_priority_text?: string;
    dp_options?: any;
    dp_id?: string;
    return_affiliate_shipment_id?: string;
    packaging_name?: string;
    dp_sort_key?: string;
    due_date?: string;
    formatted?: Formatted;
    return_details?: any;
    order_type?: string;
    b2b_buyer_details?: BuyerDetails;
    shipment_volumetric_weight?: number;
    po_number?: string;
    return_affiliate_order_id?: string;
    debug_info?: DebugInfo;
    ewaybill_info?: any;
    bag_weight?: any;
    return_awb_number?: string;
};
type PDFLinks = {
    label?: string;
    label_a4?: string;
    invoice_a4?: string;
    invoice_type: string;
    label_a6?: string;
    invoice?: string;
    po_invoice?: string;
    invoice_a6?: string;
    label_pos?: string;
    invoice_pos?: string;
    credit_note_url?: string;
    b2b?: string;
    label_type: string;
};
type AffiliateDetails = {
    ad_id?: string;
    affiliate_shipment_id: string;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
    shipment_meta: ShipmentMeta;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    company_affiliate_tag?: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Brand = {
    brand_name: string;
    modified_on?: number;
    script_last_ran?: string;
    company: string;
    pickup_location?: string;
    credit_note_expiry_days?: number;
    credit_note_allowed?: boolean;
    created_on?: number;
    logo?: string;
    is_virtual_invoice?: boolean;
    start_date?: string;
    brand_id: number;
    invoice_prefix?: string;
};
type BagGSTDetails = {
    hsn_code: string;
    cgst_gst_fee: string;
    tax_collected_at_source: number;
    gst_tax_percentage: number;
    igst_tax_percentage: number;
    value_of_good: number;
    gstin_code?: string;
    igst_gst_fee: string;
    gst_fee: number;
    sgst_gst_fee: string;
    gst_tag: string;
    hsn_code_id: string;
    cgst_tax_percentage: number;
    sgst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    brand_calculated_amount: number;
};
type B2BPODetails = {
    docker_number?: string;
    item_base_price?: number;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
    po_line_amount?: number;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Attributes = {
    brand_name?: string;
    marketer_name?: string;
    essential?: string;
    gender?: string[];
    primary_color?: string;
    marketer_address?: string;
    name?: string;
    primary_color_hex?: string;
    primary_material?: string;
};
type Item = {
    can_cancel?: boolean;
    webstore_product_url?: string;
    l3_category?: number;
    attributes: Attributes;
    last_updated_at?: string;
    code?: string;
    item_id: number;
    slug_key: string;
    l3_category_name?: string;
    brand_id: number;
    l2_category?: string[];
    color?: string;
    brand: string;
    department_id?: number;
    branch_url?: string;
    l2_category_id?: number;
    size: string;
    meta?: any;
    l1_category?: string[];
    name: string;
    can_return?: boolean;
    gender?: string;
    l1_category_id?: number;
    image: string[];
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_bag_id: string;
    employee_discount?: number;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
};
type ArticleDetails = {
    status?: any;
};
type BagDetailsPlatformResponse = {
    parent_promo_bags?: any;
    journey_type: string;
    restore_promos?: any;
    bag_status_history?: BagStatusHistory;
    reasons?: any[];
    ordering_store?: Store;
    article: Article;
    affiliate_details?: AffiliateDetails;
    line_number?: number;
    financial_breakup: FinancialBreakup[];
    current_operational_status: BagStatusHistory;
    dates?: Dates;
    b_type?: string;
    identifier?: string;
    brand: Brand;
    gst_details: BagGSTDetails;
    original_bag_list?: number[];
    no_of_bags_order?: number;
    tags?: string[];
    seller_identifier?: string;
    meta?: BagMeta;
    restore_coupon?: boolean;
    current_status: BagStatusHistory;
    display_name?: string;
    prices: Prices;
    item: Item;
    affiliate_bag_details: AffiliateBagDetails;
    operational_status?: string;
    quantity?: number;
    status: BagReturnableCancelableStatus;
    shipment_id?: string;
    article_details?: ArticleDetails;
    bag_update_time?: number;
    applied_promos?: any[];
    b_id: number;
    entity_type?: string;
    bag_status: BagStatusHistory[];
    qc_required?: any;
    order_integration_id?: string;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    has_next: boolean;
    item_total: number;
    page_type: string;
    size: number;
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
    status?: number;
    error?: string;
    message?: string;
    shipment_id?: string;
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
    affiliate_order_id?: string;
    mongo_article_id?: string;
    store_id: number;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    item_id?: string;
    bag_id?: number;
    set_id?: string;
    reason_ids?: number[];
    fynd_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    id?: string;
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action: string;
    action_type: string;
    entities: Entities[];
};
type Bags = {
    is_locked?: boolean;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    bag_id?: number;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    affiliate_shipment_id?: string;
    lock_status?: boolean;
    bags?: Bags[];
    affiliate_id?: string;
    status?: string;
    is_bag_locked?: boolean;
    shipment_id?: string;
    original_filter?: OriginalFilter;
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    id: number;
    platform_id?: string;
    description?: string;
    title?: string;
    platform_name?: string;
    created_at?: string;
    from_datetime?: string;
    to_datetime?: string;
    logo_url?: string;
    company_id?: number;
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
type Products = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
};
type ProductsDataUpdates = {
    filters?: ProductsDataUpdatesFilters[];
    data?: any;
};
type EntitiesDataUpdates = {
    filters?: any[];
    data?: any;
};
type DataUpdates = {
    products?: ProductsDataUpdates[];
    entities?: EntitiesDataUpdates[];
};
type ProductsReasonsFilters = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasons = {
    filters?: ProductsReasonsFilters[];
    data?: ProductsReasonsData;
};
type EntityReasonData = {
    reason_text?: string;
    reason_id?: number;
};
type EntitiesReasons = {
    filters?: any[];
    data?: EntityReasonData;
};
type ReasonsData = {
    products?: ProductsReasons[];
    entities?: EntitiesReasons[];
};
type ShipmentsRequest = {
    products?: Products[];
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
    identifier: string;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    status?: string;
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    lock_after_transition?: boolean;
    force_transition?: boolean;
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
};
type ShipmentsResponse = {
    code?: string;
    identifier?: string;
    stack_trace?: string;
    final_state?: any;
    meta?: any;
    status?: number;
    message?: string;
    exception?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    id: string;
    description?: string;
    created_at: string;
    secret: string;
    name: string;
    meta?: AffiliateAppConfigMeta[];
    updated_at: string;
    owner: string;
    token: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    token: string;
    id: string;
    config?: AffiliateConfig;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    store_lookup?: string;
    article_lookup?: string;
    bag_end_state?: string;
    affiliate: Affiliate;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
};
type OrderUser = {
    address1?: string;
    last_name: string;
    state: string;
    address2?: string;
    phone: number;
    mobile: number;
    pincode: string;
    email: string;
    first_name: string;
    country: string;
    city: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    affiliate_meta: any;
    discount: number;
    unit_price: number;
    item_id: number;
    sku: string;
    delivery_charge: number;
    company_id: number;
    identifier: any;
    affiliate_store_id: string;
    transfer_price: number;
    seller_identifier: string;
    item_size: string;
    fynd_store_id: string;
    _id: string;
    store_id: number;
    hsn_code_id: string;
    price_marked: number;
    avl_qty: number;
    pdf_links?: MarketPlacePdf;
    quantity: number;
    price_effective: number;
    modified_on: string;
    amount_paid: number;
};
type OrderPriority = {
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
};
type ArticleDetails1 = {
    attributes: any;
    _id: string;
    dimension: any;
    brand_id: number;
    category: any;
    quantity: number;
    weight: any;
};
type LocationDetails = {
    fulfillment_type: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
};
type ShipmentDetails = {
    dp_id?: number;
    shipments: number;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    meta?: any;
    fulfillment_id: number;
    box_type?: string;
};
type ShipmentConfig = {
    action: string;
    payment_mode: string;
    identifier: string;
    source: string;
    to_pincode: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    journey: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    cod_charges: number;
    payment_mode: string;
    delivery_charges: number;
    user: UserData;
    shipping_address: OrderUser;
    affiliate_order_id?: string;
    bags: AffiliateBag[];
    discount: number;
    order_priority?: OrderPriority;
    billing_address: OrderUser;
    coupon?: string;
    payment?: any;
    shipment?: ShipmentData;
    order_value: number;
    items: any;
};
type CreateOrderPayload = {
    order_config: OrderConfig;
    order_info: OrderInfo;
    affiliate_id: string;
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
    id: number;
    slug: string;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    user: string;
    ticket_id?: string;
    type: string;
    l2_detail?: string;
    ticket_url?: string;
    l3_detail?: string;
    bag_id?: number;
    message: string;
    createdat: string;
    l1_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    country_code: string;
    order_id: string;
    amount_paid: number;
    phone_number: number;
    message: string;
    shipment_id: number;
    customer_name: string;
    brand_name: string;
    payment_mode: string;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    id: number;
    remarks?: string;
    meta: Meta;
    status?: string;
    shipment_id?: string;
    bag_list?: number[];
};
type OrderStatusData = {
    errors?: string[];
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    dp_id: number;
    shipment_ids?: string[];
    qc_required: string;
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type Tax = {
    amount: any;
    breakup?: any[];
    rate: number;
    name: string;
};
type Charge = {
    amount: any;
    code?: string;
    tax?: Tax;
    type: string;
    name: string;
};
type LineItem = {
    external_line_id?: string;
    charges: Charge[];
    custom_messasge?: string;
    meta?: any;
    quantity?: number;
    seller_identifier: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    pack_by_date?: string;
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
};
type Shipment = {
    line_items: LineItem[];
    meta?: any;
    priority?: number;
    processing_dates?: ProcessingDates;
    location_id: number;
    external_shipment_id?: number;
};
type BillingInfo = {
    title?: string;
    customer_code?: string;
    primary_email: string;
    gender?: string;
    first_name: string;
    address1: string;
    alternate_mobile_number?: string;
    state: string;
    pincode: string;
    primary_mobile_number: string;
    alternate_email?: string;
    state_code?: string;
    last_name?: string;
    floor_no?: string;
    external_customer_code?: string;
    house_no?: string;
    country: string;
    address2?: string;
    country_code?: string;
    middle_name?: string;
    city: string;
};
type PaymentMethod = {
    amount: number;
    transaction_data?: any;
    collect_by: string;
    name: string;
    mode: string;
    refund_by: string;
    meta?: any;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ShippingInfo = {
    geo_location?: any;
    address_type?: string;
    title?: string;
    customer_code?: string;
    primary_email: string;
    landmark?: string;
    gender?: string;
    first_name: string;
    address1: string;
    alternate_mobile_number?: string;
    state: string;
    pincode: string;
    primary_mobile_number: string;
    alternate_email?: string;
    state_code?: string;
    last_name?: string;
    floor_no?: string;
    external_customer_code?: string;
    house_no?: string;
    country: string;
    address2?: string;
    country_code?: string;
    slot?: any[];
    middle_name?: string;
    shipping_type?: string;
    city: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type CreateOrderAPI = {
    external_creation_date?: string;
    charges: Charge[];
    shipments: Shipment[];
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
    shipping_info: ShippingInfo;
    meta?: any;
    external_order_id?: string;
    tax_info?: TaxInfo;
    currency_info?: any;
};
type CreateOrderErrorReponse = {
    code?: string;
    request_id?: string;
    stack_trace?: string;
    meta?: string;
    status: number;
    message: string;
    info?: any;
    exception?: string;
};
type PaymentMethods = {
    refund_by?: string;
    collect_by?: string;
    mode?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    lock_states?: string[];
    location_reassignment?: boolean;
    logo_url?: any;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    is_upserted?: boolean;
    is_inserted?: boolean;
    acknowledged?: boolean;
};
type UploadConsent = {
    consent_url: string;
    manifest_id: string;
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
    order_details?: FyndOrderIdList[];
    mobile: number;
    start_date: string;
    end_date: string;
};
type GetSearchWordsData = {
    _custom_json?: any;
    is_active?: boolean;
    words?: string[];
    app_id?: string;
    uid?: string;
    result?: any;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    result: SearchKeywordResult;
    words?: string[];
    app_id?: string;
    is_active?: boolean;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    results?: any[];
    words?: string[];
    app_id?: string;
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type Media = {
    type?: string;
    url?: string;
    aspect_ratio?: string;
};
type AutocompletePageAction = {
    type?: string;
    params?: any;
    query?: any;
    url?: string;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    _custom_json?: any;
    logo?: Media;
    action?: AutocompleteAction;
    display?: string;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    results?: AutocompleteResult[];
    words?: string[];
    app_id?: string;
    is_active?: boolean;
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    results?: any[];
};
type ProductBundleItem = {
    min_quantity: number;
    max_quantity: number;
    product_uid: number;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
};
type GetProductBundleCreateResponse = {
    logo?: string;
    slug: string;
    is_active: boolean;
    created_by?: any;
    id?: string;
    modified_on?: string;
    choice: string;
    company_id?: number;
    meta?: any;
    created_on?: string;
    name: string;
    page_visibility?: string[];
    products: ProductBundleItem[];
    modified_by?: any;
    same_store_assignment?: boolean;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    logo?: string;
    slug: string;
    is_active: boolean;
    created_by?: any;
    modified_on?: string;
    choice: string;
    company_id?: number;
    meta?: any;
    created_on?: string;
    name: string;
    page_visibility?: string[];
    products: ProductBundleItem[];
    modified_by?: any;
    same_store_assignment?: boolean;
};
type Price = {
    min_effective?: number;
    min_marked?: number;
    max_effective?: number;
    max_marked?: number;
    currency?: string;
};
type Size = {
    value?: string;
    display?: string;
    quantity?: number;
    is_available?: boolean;
};
type LimitedProductData = {
    slug?: string;
    quantity?: number;
    price?: any;
    sizes?: string[];
    item_code?: string;
    identifier?: any;
    short_description?: string;
    images?: string[];
    attributes?: any;
    name?: string;
    country_of_origin?: string;
    uid?: number;
};
type GetProducts = {
    max_quantity?: number;
    auto_add_to_cart?: boolean;
    product_uid?: number;
    price?: Price;
    sizes?: Size[];
    allow_remove?: boolean;
    min_quantity?: number;
    auto_select?: boolean;
    product_details?: LimitedProductData;
};
type GetProductBundleResponse = {
    slug?: string;
    logo?: string;
    is_active?: boolean;
    choice?: string;
    company_id?: number;
    meta?: any;
    name?: string;
    page_visibility?: string[];
    products?: GetProducts[];
    same_store_assignment?: boolean;
};
type ProductBundleUpdateRequest = {
    logo?: string;
    slug: string;
    is_active: boolean;
    modified_on?: string;
    choice: string;
    company_id?: number;
    meta?: any;
    name: string;
    page_visibility?: string[];
    products: ProductBundleItem[];
    modified_by?: any;
    same_store_assignment?: boolean;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    created_by?: any;
    active?: boolean;
    title: string;
    id?: string;
    modified_by?: any;
    modified_on?: string;
    description?: string;
    company_id?: number;
    guide?: Guide;
    subtitle?: string;
    created_on?: string;
    name: string;
    image?: string;
    tag?: string;
    brand_id?: number;
};
type SizeGuideResponse = {
    created_by?: any;
    active?: boolean;
    title?: string;
    id?: string;
    modified_on?: string;
    modified_by?: any;
    guide?: any;
    company_id?: number;
    created_on?: string;
    subtitle?: string;
    name?: string;
    tag?: string;
    brand_id?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type MOQData = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type OwnerAppItemResponse = {
    is_cod?: boolean;
    seo?: SEOData;
    alt_text?: any;
    is_gift?: boolean;
    moq?: MOQData;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    is_cod?: boolean;
    _custom_meta?: MetaFields[];
    seo?: ApplicationItemSEO;
    alt_text?: any;
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type PageResponseType = {
    next: number;
    has_next: boolean;
    total_count: number;
    current: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    logo?: string;
    slug?: string;
    display_type: string;
    priority: number;
    name: string;
    key?: string;
    unit?: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    slug: string;
    logo?: string;
    is_default: boolean;
    priority: number;
    name?: string;
    attributes?: AttributeDetailsGroup[];
    app_id: string;
    is_active: boolean;
    template_slugs?: string[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    logo?: string;
    is_default: boolean;
    default_key: string;
    priority: number;
    name?: string;
    key: string;
    app_id: string;
    is_active: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    filter_types?: string[];
    display?: string;
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
    variant?: any;
    detail?: any;
    similar?: any;
    compare?: any;
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
    map_values?: any[];
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    map?: any;
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    logo?: string;
    display_name?: string;
    type: string;
    value_config?: ConfigurationListingFilterValue;
    priority: number;
    name?: string;
    key: string;
    is_active: boolean;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    logo?: string;
    priority: number;
    name?: string;
    key: string;
    is_active: boolean;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    logo?: string;
    size: ProductSize;
    display_type: string;
    priority: number;
    name: string;
    key: string;
    is_active: boolean;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    logo?: string;
    title?: string;
    size?: ProductSize;
    subtitle?: string;
    priority: number;
    key: string;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppCatalogConfiguration = {
    listing?: ConfigurationListing;
    created_by?: any;
    product?: ConfigurationProduct;
    id?: string;
    type?: string;
    modified_on?: string;
    created_on?: string;
    config_type: string;
    config_id?: string;
    app_id: string;
    modified_by?: any;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    created_by?: any;
    product?: ConfigurationProduct;
    type?: string;
    modified_on?: string;
    created_on?: string;
    config_type: string;
    config_id?: string;
    app_id: string;
    modified_by?: any;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    config_type: string;
    config_id?: string;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersValue = {
    display_format?: string;
    is_selected: boolean;
    selected_min?: number;
    value: any;
    display: string;
    count?: number;
    max?: number;
    selected_max?: number;
    currency_code?: string;
    currency_symbol?: string;
    query_format?: string;
    min?: number;
};
type ProductFiltersKey = {
    logo?: string;
    kind?: string;
    display: string;
    name: string;
    operators?: string[];
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    value?: string;
    name?: string;
    is_selected?: boolean;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
type CollectionListingFilterType = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilterTag = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
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
type Media1 = {
    type?: string;
    url: string;
    meta?: any;
};
type CollectionQuery = {
    value: any[];
    op: string;
    attribute: string;
};
type GetCollectionDetailNest = {
    visible_facets_keys?: string[];
    action?: Action;
    badge?: any;
    name?: string;
    _schedule?: any;
    banners?: ImageUrls;
    logo?: Media1;
    query?: CollectionQuery[];
    type?: string;
    allow_sort?: boolean;
    app_id?: string;
    priority?: number;
    tag?: string[];
    is_active?: boolean;
    cron?: any;
    slug?: string;
    description?: string;
    meta?: any;
    allow_facets?: boolean;
    uid?: string;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionSchedule = {
    cron?: string;
    start?: string;
    duration?: number;
    end?: string;
    next_schedule?: NextSchedule[];
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
type UserInfo = {
    username?: string;
    email?: string;
    uid?: string;
    user_id?: string;
};
type CreateCollection = {
    visible_facets_keys?: string[];
    badge?: CollectionBadge;
    name: string;
    _schedule?: CollectionSchedule;
    banners: CollectionBanner;
    logo: CollectionImage;
    query?: CollectionQuery[];
    type: string;
    allow_sort?: boolean;
    app_id: string;
    published?: boolean;
    _custom_json?: any;
    seo?: SeoDetail;
    is_visible?: boolean;
    sort_on?: string;
    priority?: number;
    tags?: string[];
    is_active?: boolean;
    slug: string;
    created_by?: UserInfo;
    description?: string;
    meta?: any;
    _locale_language?: any;
    allow_facets?: boolean;
    modified_by?: UserInfo;
};
type CollectionCreateResponse = {
    visible_facets_keys?: string[];
    badge?: any;
    name?: string;
    _schedule?: any;
    banners?: ImageUrls;
    logo?: BannerImage;
    query?: CollectionQuery[];
    type?: string;
    allow_sort?: boolean;
    app_id?: string;
    sort_on?: string;
    priority?: number;
    tag?: string[];
    is_active?: boolean;
    cron?: any;
    slug?: string;
    description?: string;
    meta?: any;
    allow_facets?: boolean;
};
type CollectionDetailResponse = {
    cron?: any;
    banners?: ImageUrls;
    logo?: Media1;
    query?: CollectionQuery[];
    slug?: string;
    visible_facets_keys?: string[];
    type?: string;
    _schedule?: any;
    description?: string;
    meta?: any;
    allow_sort?: boolean;
    priority?: number;
    badge?: any;
    name?: string;
    allow_facets?: boolean;
    tag?: string[];
    app_id?: string;
    is_active?: boolean;
};
type UpdateCollection = {
    visible_facets_keys?: string[];
    badge?: CollectionBadge;
    name?: string;
    _schedule?: CollectionSchedule;
    banners?: CollectionBanner;
    logo?: CollectionImage;
    query?: CollectionQuery[];
    type?: string;
    allow_sort?: boolean;
    published?: boolean;
    _custom_json?: any;
    seo?: SeoDetail;
    is_visible?: boolean;
    sort_on?: string;
    priority?: number;
    tags?: string[];
    is_active?: boolean;
    slug?: string;
    description?: string;
    meta?: any;
    _locale_language?: any;
    allow_facets?: boolean;
    modified_by?: UserInfo;
};
type ProductBrand = {
    logo?: Media1;
    uid?: number;
    name?: string;
    action?: Action;
};
type ProductDetailAttribute = {
    type?: string;
    value?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type Price1 = {
    max?: number;
    currency_symbol?: string;
    currency_code?: string;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    product_online_date?: string;
    medias?: Media1[];
    brand?: ProductBrand;
    highlights?: string[];
    name?: string;
    attributes?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    type?: string;
    rating?: number;
    similars?: string[];
    color?: string;
    image_nature?: string;
    item_type?: string;
    has_variant?: boolean;
    promo_meta?: any;
    item_code?: string;
    sellable?: boolean;
    slug: string;
    teaser_tag?: any;
    tryouts?: string[];
    rating_count?: number;
    discount?: string;
    price?: ProductListingPrice;
    description?: string;
    short_description?: string;
    uid?: number;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    type?: string;
    query?: CollectionQuery[];
    item?: ItemQueryForUserCollection[];
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightBrand = {
    total_articles?: number;
    total_sizes?: number;
    article_freshness?: number;
    available_sizes?: number;
    available_articles?: number;
    name?: string;
};
type CatalogInsightItem = {
    count?: number;
    out_of_stock_count?: number;
    sellable_count?: number;
};
type CatalogInsightResponse = {
    brand_distribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
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
    enabled?: boolean;
    store_ids?: number[];
    company_id?: number;
    opt_level: string;
    brand_ids?: number[];
    platform?: string;
};
type CompanyOptIn = {
    created_by?: any;
    enabled: boolean;
    modified_on: number;
    store_ids: number[];
    company_id: number;
    opt_level: string;
    created_on: number;
    brand_ids: number[];
    platform: string;
    modified_by?: any;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    uid?: number;
    name?: string;
    business_type?: string;
};
type CompanyBrandDetail = {
    total_article?: number;
    brand_name?: string;
    brand_id?: number;
    company_id?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    company?: string;
    store?: number;
    brand?: number;
};
type StoreDetail = {
    display_name?: string;
    documents?: any[];
    additional_contacts?: any[];
    manager?: any;
    address?: any;
    modified_on?: string;
    timing?: any;
    store_code?: string;
    company_id?: number;
    created_on?: string;
    name?: string;
    uid?: number;
    store_type?: string;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
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
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    type: string;
    range?: AttributeSchemaRange;
    multi?: boolean;
    format?: string;
    allowed_values?: string[];
    mandatory?: boolean;
};
type GenderDetail = {
    slug?: string;
    logo?: string;
    id?: string;
    enabled_for_end_consumer?: boolean;
    details?: AttributeMasterDetails;
    description?: string;
    meta?: AttributeMasterMeta;
    is_nested?: boolean;
    name?: string;
    filters?: AttributeMasterFilter;
    schema?: AttributeMaster;
    departments?: string[];
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    status?: number;
    code?: string;
    message?: string;
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
    logo?: string;
    slug?: string;
    created_by?: UserSerializer;
    priority_order?: number;
    synonyms?: string[];
    modified_on?: string;
    search?: string;
    created_on?: string;
    name?: string;
    page_size?: number;
    page_no?: number;
    uid?: number;
    is_active?: boolean;
    modified_by?: UserSerializer;
    item_type?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    status?: number;
    code?: string;
    message?: string;
    meta?: any;
    errors?: any;
};
type DepartmentCreateUpdate = {
    _custom_json?: any;
    logo: string;
    slug?: string;
    priority_order: number;
    synonyms?: string[];
    platforms?: any;
    _cls?: string;
    name: string;
    tags?: string[];
    uid?: number;
    is_active?: boolean;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    username: string;
    super_user?: boolean;
    contact?: string;
    user_id: string;
};
type DepartmentModel = {
    _custom_json?: any;
    slug?: any;
    created_by?: UserDetail;
    logo: string;
    priority_order: number;
    _id?: any;
    modified_on: string;
    synonyms?: any[];
    verified_by?: UserDetail;
    created_on: string;
    _cls?: any;
    name: any;
    verified_on?: string;
    uid?: number;
    is_active?: boolean;
    modified_by?: UserDetail;
};
type ProductTemplate = {
    is_expirable: boolean;
    slug: string;
    logo?: string;
    is_physical: boolean;
    created_by?: any;
    modified_on?: string;
    categories?: string[];
    is_archived?: boolean;
    description?: string;
    created_on?: string;
    name?: string;
    attributes?: string[];
    tag?: string;
    is_active?: boolean;
    modified_by?: any;
    departments?: string[];
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    product_group_tag?: any;
    highlights?: any;
    name?: any;
    multi_size?: any;
    trader_type?: any;
    variants?: any;
    media?: any;
    sizes?: any;
    currency?: any;
    item_type?: any;
    hsn_code?: any;
    trader?: any;
    item_code?: any;
    custom_order?: any;
    brand_uid?: any;
    tags?: any;
    country_of_origin?: any;
    return_config?: any;
    is_active?: any;
    no_of_boxes?: any;
    is_dependent?: any;
    size_guide?: any;
    slug?: any;
    category_slug?: any;
    command?: any;
    teaser_tag?: any;
    description?: any;
    product_publish?: any;
    short_description?: any;
};
type GlobalValidation = {
    required?: string[];
    definitions?: any;
    title?: string;
    type?: string;
    description?: string;
    properties?: Properties;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    is_expirable: boolean;
    slug: string;
    logo?: string;
    is_physical: boolean;
    id?: string;
    categories?: string[];
    is_archived?: boolean;
    description?: string;
    name?: string;
    attributes?: string[];
    tag?: string;
    is_active?: boolean;
    departments?: string[];
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
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadItemsData = {
    type?: string;
    templates?: string[];
    brand?: string[];
};
type ProductDownloadsItems = {
    task_id?: string;
    created_by?: VerifiedBy;
    url?: string;
    id?: string;
    status?: string;
    trigger_on?: string;
    completed_on?: string;
    template_tags?: any;
    data?: ProductDownloadItemsData;
    seller_id?: number;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
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
type Media2 = {
    logo: string;
    landscape: string;
    portrait: string;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Category = {
    slug?: string;
    is_active: boolean;
    created_by?: any;
    level: number;
    hierarchy?: Hierarchy[];
    media?: Media2;
    tryouts?: string[];
    modified_on?: string;
    id?: string;
    created_on?: string;
    priority?: number;
    name: string;
    uid?: number;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    modified_by?: any;
    departments: number[];
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    slug?: string;
    is_active: boolean;
    level: number;
    media?: Media2;
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    priority?: number;
    name: string;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    departments: number[];
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type Logo = {
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type Image = {
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Product = {
    template_tag?: string;
    brand?: Brand;
    highlights?: string[];
    primary_color?: string;
    name?: string;
    multi_size?: boolean;
    is_set?: boolean;
    variants?: any;
    media?: Media1[];
    id?: string;
    sizes?: any[];
    images?: Image[];
    color?: string;
    image_nature?: string;
    currency?: string;
    _custom_json?: any;
    item_type?: string;
    is_physical?: boolean;
    hsn_code?: string;
    item_code?: string;
    variant_group?: any;
    custom_order?: any;
    brand_uid?: number;
    country_of_origin?: string;
    l3_mapping?: string[];
    is_active?: boolean;
    size_guide?: string;
    departments?: number[];
    is_dependent?: boolean;
    is_expirable?: boolean;
    slug?: string;
    category_slug?: string;
    tax_identifier?: any;
    category_uid?: number;
    description?: string;
    product_publish?: ProductPublished;
    all_sizes?: any[];
    short_description?: string;
    uid?: number;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type Trader = {
    type?: string;
    address?: string[];
    name: any;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type ProductCreateUpdate = {
    variant_media?: any;
    net_quantity?: NetQuantity;
    variants_group?: any;
    bulk_job_id?: string;
    product_group_tag?: string[];
    action?: string;
    template_tag: string;
    highlights?: string[];
    name: any;
    multi_size?: boolean;
    is_set?: boolean;
    requester?: string;
    variants?: any;
    media?: Media1[];
    is_image_less_product?: boolean;
    change_request_id?: any;
    currency: string;
    _custom_json?: any;
    item_type: string;
    trader: Trader[];
    item_code: any;
    custom_order?: CustomOrder;
    brand_uid: number;
    tags?: string[];
    country_of_origin: string;
    return_config: ReturnConfig;
    is_active?: boolean;
    no_of_boxes?: number;
    is_dependent?: boolean;
    departments: number[];
    size_guide?: string;
    slug: string;
    category_slug: string;
    tax_identifier: TaxIdentifier;
    teaser_tag?: TeaserTag;
    description?: string;
    company_id: number;
    product_publish?: ProductPublish;
    short_description?: string;
    uid?: number;
};
type AttributeMasterSerializer = {
    suggestion?: string;
    created_on?: string;
    is_nested?: boolean;
    name?: string;
    filters: AttributeMasterFilter;
    synonyms?: any;
    logo?: string;
    modified_on?: string;
    details: AttributeMasterDetails;
    schema: AttributeMaster;
    enabled_for_end_consumer?: boolean;
    tags?: string[];
    departments: string[];
    raw_key?: string;
    variant?: boolean;
    slug: string;
    created_by?: any;
    description?: string;
    unit?: string;
    modified_by?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    username?: string;
    full_name?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    cancelled_records?: string[];
    total?: number;
    created_by?: UserDetail1;
    succeed?: number;
    cancelled?: number;
    stage?: string;
    modified_on?: string;
    template?: ProductTemplate;
    template_tag?: string;
    company_id?: number;
    created_on?: string;
    failed_records?: string[];
    file_path?: string;
    failed?: number;
    is_active?: boolean;
    modified_by?: UserDetail1;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    username?: string;
    email?: string;
    uid?: string;
    user_id?: string;
};
type BulkJob = {
    total: number;
    cancelled_records?: any[];
    created_by?: UserInfo1;
    succeed?: number;
    custom_template_tag?: string;
    cancelled?: number;
    modified_on?: string;
    stage?: string;
    template_tag?: string;
    company_id: number;
    created_on: string;
    failed_records?: any[];
    file_path?: string;
    failed?: number;
    tracking_url?: string;
    is_active?: boolean;
    modified_by?: UserInfo1;
};
type BulkResponse = {
    created_by?: UserInfo1;
    batch_id: string;
    modified_on?: string;
    created_on: string;
    is_active?: boolean;
    modified_by?: UserInfo1;
};
type BulkProductRequest = {
    batch_id: string;
    data: any[];
    template_tag: string;
    company_id: number;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    username?: string;
    user_id?: string;
    company_id?: number;
};
type Items = {
    cancelled_records?: string[];
    total?: number;
    created_by?: UserCommon;
    is_active?: boolean;
    cancelled?: number;
    retry?: number;
    id?: string;
    modified_on?: string;
    stage?: string;
    company_id?: number;
    created_on?: string;
    failed_records?: string[];
    file_path?: string;
    failed?: number;
    tracking_url?: string;
    succeed?: number;
    modified_by?: UserCommon;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductBulkAssets = {
    user: any;
    url: string;
    company_id?: number;
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    company_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    size?: string;
    store?: any;
    price_transfer?: number;
    quantity?: number;
    sellable_quantity?: number;
    price?: number;
    inventory_updated_on?: string;
    item_id?: number;
    price_effective?: number;
    identifiers?: any;
    uid?: string;
    seller_identifier?: string;
    currency?: string;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    quantity?: number;
    name?: string;
    size_distribution: SizeDistribution;
};
type GTIN = {
    gtin_value: any;
    primary?: boolean;
    gtin_type: string;
};
type InvSize = {
    item_height?: number;
    size: any;
    expiration_date?: string;
    price_transfer?: number;
    item_width?: number;
    set?: InventorySet;
    quantity: number;
    price?: number;
    item_length?: number;
    store_code: string;
    item_dimensions_unit_of_measure?: string;
    item_weight?: number;
    price_effective: number;
    identifiers: GTIN[];
    item_weight_unit_of_measure?: string;
    is_set?: boolean;
    currency: string;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type BrandMeta = {
    name: string;
    id: number;
};
type DimensionResponse = {
    is_default: boolean;
    length: number;
    height: number;
    unit: string;
    width: number;
};
type CompanyMeta = {
    id: number;
};
type WeightResponse = {
    is_default: boolean;
    unit: string;
    shipping: number;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    sellable?: QuantityBase;
    damaged?: QuantityBase;
};
type PriceMeta = {
    updated_at?: string;
    marked: number;
    effective: number;
    tp_notes?: any;
    transfer: number;
    currency: string;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type InventorySellerResponse = {
    brand: BrandMeta;
    trace_id?: string;
    total_quantity: number;
    seller_identifier: string;
    is_set?: boolean;
    dimension: DimensionResponse;
    fynd_article_code: string;
    track_inventory?: boolean;
    company: CompanyMeta;
    raw_meta?: any;
    fragile: boolean;
    size: string;
    store: StoreMeta;
    fynd_item_code: string;
    fynd_meta?: any;
    _custom_json?: any;
    weight: WeightResponse;
    expiration_date?: string;
    trader?: Trader1[];
    item_id: number;
    tags?: string[];
    country_of_origin: string;
    return_config?: ReturnConfig1;
    quantities?: Quantities;
    is_active?: boolean;
    created_by?: UserSerializer;
    tax_identifier?: any;
    modified_by?: UserSerializer;
    set?: InventorySet;
    stage?: string;
    price: PriceMeta;
    meta?: any;
    identifier: any;
    manufacturer: ManufacturerResponse;
    uid: string;
    added_on_store?: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    cancelled_records?: string[];
    total?: number;
    created_by?: any;
    succeed?: number;
    cancelled?: number;
    id?: string;
    modified_on?: string;
    stage?: string;
    company_id?: number;
    created_on?: string;
    failed_records?: string[];
    file_path?: string;
    failed?: number;
    is_active?: boolean;
    modified_by?: any;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    currency?: string;
    expiration_date?: string;
    quantity?: number;
    store_code: string;
    price?: number;
    item_dimensions_unit_of_measure?: string;
    tags?: string[];
    price_effective?: number;
    trace_id?: string;
    total_quantity?: number;
    seller_identifier: string;
    item_weight_unit_of_measure?: string;
    price_marked?: number;
};
type InventoryBulkRequest = {
    user?: any;
    batch_id: string;
    sizes: InventoryJobPayload[];
    company_id: number;
};
type InventoryExportJob = {
    task_id: string;
    url?: string;
    request_params?: any;
    status?: string;
    trigger_on?: string;
    completed_on?: string;
    seller_id: number;
};
type InventoryExportRequest = {
    type?: string;
    store?: number[];
    brand?: number[];
};
type InventoryExportResponse = {
    task_id: string;
    request_params?: any;
    status?: string;
    trigger_on?: string;
    seller_id: number;
};
type FilerList = {
    value?: string;
    display?: string;
};
type InventoryConfig = {
    data?: FilerList[];
    multivalues?: boolean;
};
type InventoryPayload = {
    expiration_date?: string;
    store_id: number;
    tags?: string[];
    price_effective?: number;
    trace_id?: string;
    total_quantity?: number;
    seller_identifier: string;
    price_marked?: number;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    company_id: number;
    meta?: any;
};
type InventoryFailedReason = {
    errors?: string;
    message: string;
};
type InventoryResponseItem = {
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    hsn_code?: string;
    tax1?: number;
    threshold2?: number;
    tax_on_mrp?: boolean;
    id?: string;
    modified_on?: string;
    company_id?: number;
    threshold1?: number;
    tax_on_esp?: boolean;
    hs2_code?: string;
    tax2?: number;
};
type PageResponse = {
    has_previous?: boolean;
    has_next?: boolean;
    current?: string;
    item_total?: number;
    size?: number;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    hsn_code: string;
    tax1: number;
    threshold2?: number;
    tax_on_mrp: boolean;
    company_id: number;
    threshold1: number;
    tax_on_esp?: boolean;
    hs2_code: string;
    tax2?: number;
    uid?: number;
    is_active?: boolean;
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
    threshold: number;
    effective_date: string;
    cess?: number;
    rate: number;
};
type HSNDataInsertV2 = {
    taxes: TaxSlab[];
    hsn_code: string;
    created_by?: any;
    type: string;
    modified_on?: string;
    description: string;
    created_on?: string;
    country_code: string;
    reporting_hsn: string;
    modified_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    logo?: Media;
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
    discount?: string;
    name?: string;
    uid?: number;
    departments?: string[];
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    logo?: Media;
    slug?: string;
    priority_order?: number;
    name?: string;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    _custom_json?: any;
    childs?: any[];
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
    name?: string;
    uid?: number;
};
type SecondLevelChild = {
    _custom_json?: any;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
    name?: string;
    uid?: number;
};
type Child = {
    _custom_json?: any;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
    name?: string;
    uid?: number;
};
type CategoryItems = {
    childs?: Child[];
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
    name?: string;
    uid?: number;
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
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page: Page;
    filters?: ProductFilters[];
    operators?: any;
};
type ProductDetail = {
    product_online_date?: string;
    medias?: Media1[];
    brand?: ProductBrand;
    highlights?: string[];
    name?: string;
    attributes?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    type?: string;
    rating?: number;
    similars?: string[];
    color?: string;
    image_nature?: string;
    item_type?: string;
    has_variant?: boolean;
    promo_meta?: any;
    item_code?: string;
    slug: string;
    teaser_tag?: any;
    tryouts?: string[];
    rating_count?: number;
    description?: string;
    short_description?: string;
    uid?: number;
};
type InventoryPage = {
    has_previous?: boolean;
    has_next?: boolean;
    type: string;
    item_total: number;
    next_id?: string;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type InvoiceCredSerializer = {
    username?: string;
    enabled?: boolean;
    password?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type UserSerializer1 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    city?: string;
    state?: string;
    country_code?: string;
    address1?: string;
    address_type?: string;
    country?: string;
    latitude?: number;
    address2?: string;
    pincode?: number;
    longitude?: number;
    landmark?: string;
};
type GetCompanySerializer = {
    reject_reason?: string;
    created_by?: UserSerializer1;
    modified_on?: string;
    stage?: string;
    verified_by?: UserSerializer1;
    business_type?: string;
    created_on?: string;
    addresses?: GetAddressSerializer[];
    name?: string;
    verified_on?: string;
    uid?: number;
    company_type?: string;
    modified_by?: UserSerializer1;
};
type UserSerializer2 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    opening?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
};
type GetLocationSerializer = {
    display_name: string;
    product_return_config?: ProductReturnConfigSerializer;
    code: string;
    created_on?: string;
    name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    manager?: LocationManagerSerializer;
    store_type?: string;
    documents?: Document[];
    modified_on?: string;
    company?: GetCompanySerializer;
    phone_number: string;
    _custom_json?: any;
    warnings?: any;
    address: GetAddressSerializer;
    verified_by?: UserSerializer2;
    created_by?: UserSerializer2;
    integration_type?: LocationIntegrationType;
    stage?: string;
    timing?: LocationDayWiseSerializer[];
    notification_emails?: string[];
    verified_on?: string;
    contact_numbers?: SellerPhoneNumber[];
    uid?: number;
    modified_by?: UserSerializer2;
};
type LocationListSerializer = {
    items?: GetLocationSerializer[];
    page?: Page;
};
type ApplicationBrandJson = {
    _custom_json: any;
};
type ApplicationCategoryJson = {
    _custom_json: any;
};
type ApplicationDepartment = {
    _custom_json?: any;
    logo?: string;
    name?: string;
    app_id: string;
    uid: number;
    is_active?: boolean;
};
type ApplicationDepartmentListingResponse = {
    items?: ApplicationDepartment[];
    page: Page;
};
type ApplicationDepartmentJson = {
    _custom_json: any;
};
type ApplicationStoreJson = {
    _custom_json: any;
};
type CompanyTaxesSerializer = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type GetCompanyProfileSerializerResponse = {
    created_on?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    created_by?: UserSerializer;
    business_type: string;
    _custom_json?: any;
    name?: string;
    notification_emails?: string[];
    verified_by?: UserSerializer;
    verified_on?: string;
    documents?: Document[];
    taxes?: CompanyTaxesSerializer[];
    stage?: string;
    business_details?: BusinessDetails;
    mode?: string;
    contact_details?: ContactDetails;
    business_country_info?: BusinessCountryInfo;
    warnings?: any;
    uid: number;
    addresses?: GetAddressSerializer[];
    franchise_enabled?: boolean;
    company_type: string;
    business_info?: string;
};
type CreateUpdateAddressSerializer = {
    country: string;
    address1: string;
    longitude: number;
    country_code?: string;
    landmark?: string;
    address2?: string;
    state: string;
    pincode: number;
    city: string;
    latitude: number;
    address_type: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type UpdateCompany = {
    notification_emails?: string[];
    warnings?: any;
    business_details?: BusinessDetails;
    addresses?: CreateUpdateAddressSerializer[];
    franchise_enabled?: boolean;
    contact_details?: ContactDetails;
    documents?: Document[];
    taxes?: CompanyTaxesSerializer1[];
    reject_reason?: string;
    company_type?: string;
    business_type?: string;
    _custom_json?: any;
    name?: string;
    business_info?: string;
};
type ProfileSuccessResponse = {
    uid?: number;
    success?: boolean;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    store?: DocumentsObj;
    uid?: number;
    store_documents?: DocumentsObj;
    product?: DocumentsObj;
    stage?: string;
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    created_on?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    created_by?: UserSerializer;
    reject_reason?: string;
    name: string;
    _locale_language?: any;
    verified_by?: UserSerializer;
    verified_on?: string;
    banner?: BrandBannerSerializer;
    description?: string;
    stage?: string;
    slug_key?: string;
    mode?: string;
    warnings?: any;
    uid?: number;
    synonyms?: string[];
    logo?: string;
    _custom_json?: any;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    _locale_language?: any;
    synonyms?: string[];
    company_id?: number;
    banner?: BrandBannerSerializer;
    description?: string;
    logo: string;
    brand_tier?: string;
    _custom_json?: any;
    name: string;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanyDetails = {
    website_url?: string;
    socials?: CompanySocialAccounts[];
};
type CompanySerializer = {
    details?: CompanyDetails;
    created_on?: string;
    uid?: number;
    verified_by?: UserSerializer;
    notification_emails?: string[];
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer;
    verified_on?: string;
    modified_on?: string;
    created_by?: UserSerializer;
    stage?: string;
    reject_reason?: string;
    company_type: string;
    market_channels?: string[];
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    _custom_json?: any;
    name?: string;
};
type CompanyBrandSerializer = {
    created_on?: string;
    uid?: number;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    reject_reason?: string;
    verified_on?: string;
    modified_on?: string;
    created_by?: UserSerializer;
    company?: CompanySerializer;
    stage?: string;
    brand?: GetBrandResponseSerializer;
    warnings?: any;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    uid?: number;
    company: number;
};
type LocationSerializer = {
    gst_credentials?: InvoiceDetailsSerializer;
    uid?: number;
    notification_emails?: string[];
    code: string;
    store_type?: string;
    manager?: LocationManagerSerializer;
    timing?: LocationDayWiseSerializer[];
    address: GetAddressSerializer;
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
    company: number;
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    display_name: string;
    _custom_json?: any;
    name: string;
    warnings?: any;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    ignored_stores?: number[];
    item_id?: number;
    size?: string;
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _AssignStoreArticle = {
    query?: _ArticleQuery;
    quantity?: number;
    meta?: any;
    article_assignment?: _ArticleAssignment;
    group_id?: string;
};
type AssignStoreRequestValidator = {
    store_ids?: number[];
    app_id?: string;
    company_id?: number;
    pincode?: string;
    channel_type?: string;
    channel_identifier?: string;
    articles?: _AssignStoreArticle[];
};
type AssignStoreResponseSerializer = {
    store_id?: number;
    index?: number;
    uid?: string;
    price_marked?: number;
    item_id?: number;
    _id?: string;
    preice_effective?: number;
    s_city?: string;
    quantity?: number;
    company_id?: number;
    meta?: any;
    article_assignment?: _ArticleAssignment;
    size?: string;
    store_pincode?: string;
    status?: boolean;
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
type Validity = {
    priority?: number;
};
type Rule = {
    min?: number;
    max?: number;
    key?: number;
    value?: number;
    discount_qty?: number;
};
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type State = {
    is_archived?: boolean;
    is_public?: boolean;
    is_display?: boolean;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponSchedule = {
    next_schedule?: any[];
    end?: string;
    start?: string;
    duration?: number;
    cron?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    title?: string;
    auto?: DisplayMetaDict;
    description?: string;
    subtitle?: string;
    remove?: DisplayMetaDict;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type UsesRemaining = {
    total?: number;
    app?: number;
    user?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    codes?: string[];
    networks?: string[];
    types?: string[];
};
type Restrictions = {
    bulk_bundle?: BulkBundleRestriction;
    coupon_allowed?: boolean;
    price_range?: PriceRange;
    user_groups?: number[];
    platforms?: string[];
    uses?: UsesRestriction;
    post_order?: PostOrder;
    ordering_stores?: number[];
    payments?: any;
};
type RuleDefinition = {
    type: string;
    is_exact?: boolean;
    applicable_on: string;
    currency_code?: string;
    scope?: string[];
    calculate_on: string;
    value_type: string;
    auto_apply?: boolean;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponAdd = {
    validity: Validity;
    rule: Rule[];
    validation?: Validation;
    code: string;
    ownership: Ownership;
    state?: State;
    author?: CouponAuthor;
    _schedule?: CouponSchedule;
    type_slug: string;
    display_meta: DisplayMeta;
    tags?: string[];
    action?: CouponAction;
    restrictions?: Restrictions;
    rule_definition: RuleDefinition;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
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
    validity: Validity;
    rule: Rule[];
    validation?: Validation;
    code: string;
    ownership: Ownership;
    state?: State;
    author?: CouponAuthor;
    _schedule?: CouponSchedule;
    type_slug: string;
    display_meta: DisplayMeta;
    tags?: string[];
    action?: CouponAction;
    restrictions?: Restrictions;
    rule_definition: RuleDefinition;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type DiscountOffer = {
    discount_percentage?: number;
    discount_amount?: number;
    code?: string;
    max_usage_per_transaction?: number;
    max_offer_quantity?: number;
    min_offer_quantity?: number;
    max_discount_amount?: number;
    discount_price?: number;
    partial_can_ret?: boolean;
    apportion_discount?: boolean;
};
type CompareObject = {
    greater_than_equals?: number;
    less_than_equals?: number;
    less_than?: number;
    greater_than?: number;
    equals?: number;
};
type ItemCriteria = {
    cart_quantity?: CompareObject;
    item_store?: number[];
    cart_total?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    item_exclude_sku?: string[];
    buy_rules?: string[];
    item_id?: number[];
    all_items?: boolean;
    item_size?: string[];
    cart_unique_item_quantity?: CompareObject;
    item_brand?: number[];
    available_zones?: string[];
    item_exclude_id?: number[];
    item_exclude_store?: number[];
    item_exclude_company?: number[];
    item_exclude_category?: number[];
    item_exclude_brand?: number[];
    item_company?: number[];
    item_sku?: string[];
    item_category?: number[];
};
type DiscountRule = {
    discount_type: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
    buy_condition: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    codes?: string[];
    uses?: PaymentAllowValue1;
};
type Restrictions1 = {
    user_registered?: UserRegistered;
    anonymous_users?: boolean;
    user_groups?: number[];
    order_quantity?: number;
    platforms?: string[];
    user_id?: string[];
    uses: UsesRestriction1;
    post_order?: PostOrder1;
    payments?: PromotionPaymentModes[];
};
type DisplayMeta1 = {
    description?: string;
    offer_text?: string;
    name?: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionSchedule = {
    published: boolean;
    end?: string;
    next_schedule?: any[];
    start: string;
    duration?: number;
    cron?: string;
};
type PromotionListItem = {
    apply_all_discount?: boolean;
    ownership: Ownership1;
    promotion_type: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    stackable?: boolean;
    promo_group: string;
    author?: PromotionAuthor;
    mode: string;
    visiblility?: Visibility;
    calculate_on?: string;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    display_meta: DisplayMeta1;
    application_id: string;
    post_order_action?: PromotionAction;
    apply_priority?: number;
    currency?: string;
    code?: string;
    _schedule?: PromotionSchedule;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    apply_all_discount?: boolean;
    ownership: Ownership1;
    promotion_type: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    stackable?: boolean;
    promo_group: string;
    author?: PromotionAuthor;
    mode: string;
    visiblility?: Visibility;
    calculate_on?: string;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    display_meta: DisplayMeta1;
    application_id: string;
    post_order_action?: PromotionAction;
    apply_priority?: number;
    currency?: string;
    code?: string;
    _schedule?: PromotionSchedule;
};
type PromotionUpdate = {
    apply_all_discount?: boolean;
    ownership: Ownership1;
    promotion_type: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    stackable?: boolean;
    promo_group: string;
    author?: PromotionAuthor;
    mode: string;
    visiblility?: Visibility;
    calculate_on?: string;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    display_meta: DisplayMeta1;
    application_id: string;
    post_order_action?: PromotionAction;
    apply_priority?: number;
    currency?: string;
    code?: string;
    _schedule?: PromotionSchedule;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    type?: string;
    created_on?: string;
    title?: string;
    description?: string;
    example?: string;
    subtitle?: string;
    modified_on?: string;
    is_hidden?: boolean;
    entity_type?: string;
    entity_slug?: string;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type FreeGiftItem = {
    item_images_url?: string[];
    item_price_details?: any;
    item_name?: string;
    item_brand_name?: string;
    item_slug?: string;
    item_id?: number;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
    article_id?: string;
};
type DiscountRulesApp = {
    offer?: any;
    raw_offer?: any;
    matched_buy_rules?: string[];
    item_criteria?: any;
};
type AppliedPromotion = {
    article_quantity?: number;
    applied_free_articles?: AppliedFreeArticles[];
    promotion_type?: string;
    promo_id?: string;
    offer_text?: string;
    promotion_name?: string;
    promotion_group?: string;
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    amount?: number;
    discount_rules?: DiscountRulesApp[];
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    currency_symbol?: string;
    marked?: number;
    currency_code?: string;
    effective?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    type?: string;
    seller_identifier?: string;
    seller?: BaseInfo;
    uid?: string;
    product_group_tags?: string[];
    identifier?: any;
    quantity?: number;
    store?: BaseInfo;
    extra_meta?: any;
    parent_item_identifiers?: any;
    price?: ArticlePriceInfo;
    size?: string;
};
type ProductPrice = {
    add_on?: number;
    marked?: number;
    currency_symbol?: string;
    currency_code?: string;
    effective?: number;
    selling?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type ProductAvailability = {
    other_store_quantity?: number;
    sizes?: string[];
    deliverable?: boolean;
    out_of_stock?: boolean;
    is_valid?: boolean;
};
type PromoMeta = {
    message?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    query?: ActionQuery;
    url?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type CartProduct = {
    slug?: string;
    type?: string;
    uid?: number;
    images?: ProductImage[];
    brand?: BaseInfo;
    action?: ProductAction;
    categories?: CategoryInfo[];
    name?: string;
};
type CartProductInfo = {
    discount?: string;
    promotions_applied?: AppliedPromotion[];
    article?: ProductArticle;
    message?: string;
    price_per_unit?: ProductPriceInfo;
    availability?: ProductAvailability;
    quantity?: number;
    is_set?: boolean;
    bulk_offer?: any;
    key?: string;
    promo_meta?: PromoMeta;
    identifiers: CartProductIdentifer;
    parent_item_identifiers?: any;
    product?: CartProduct;
    price?: ProductPriceInfo;
    coupon_message?: string;
};
type RawBreakup = {
    cod_charge?: number;
    gst_charges?: number;
    discount?: number;
    coupon?: number;
    vog?: number;
    delivery_charge?: number;
    subtotal?: number;
    total?: number;
    fynd_cash?: number;
    you_saved?: number;
    convenience_fee?: number;
    mrp_total?: number;
};
type DisplayBreakup = {
    currency_symbol?: string;
    message?: string[];
    currency_code?: string;
    key?: string;
    value?: number;
    display?: string;
};
type LoyaltyPoints = {
    total?: number;
    applicable?: number;
    is_applied?: boolean;
    description?: string;
};
type CouponBreakup = {
    type?: string;
    title?: string;
    uid?: string;
    code?: string;
    description?: string;
    message?: string;
    max_discount_value?: number;
    is_applied?: boolean;
    sub_title?: string;
    coupon_value?: number;
    minimum_cart_value?: number;
    coupon_type?: string;
    value?: number;
};
type CartBreakup = {
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    phone?: number;
    address_type?: string;
    country?: string;
    landmark?: string;
    state?: string;
    name?: string;
    pincode?: number;
    area_code_slug?: string;
    city?: string;
    country_code?: string;
    address?: string;
    area_code: string;
    meta?: any;
    area?: string;
    email?: string;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
};
type PromiseTimestamp = {
    min?: number;
    max?: number;
};
type PromiseFormatted = {
    min?: string;
    max?: string;
};
type ShipmentPromise = {
    timestamp?: PromiseTimestamp;
    formatted?: PromiseFormatted;
};
type OpenApiCartServiceabilityResponse = {
    message?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiOrderItem = {
    meta?: CartItemMeta;
    discount: number;
    delivery_charges: number;
    quantity?: number;
    amount_paid: number;
    cashback_applied: number;
    coupon_effective_discount: number;
    price_marked: number;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    cod_charges: number;
    loyalty_discount?: number;
    employee_discount?: number;
    extra_meta?: any;
    size: string;
    product_id: number;
};
type OpenApiPlatformCheckoutReq = {
    cart_value: number;
    gstin?: string;
    coupon_value: number;
    shipping_address?: ShippingAddress;
    affiliate_order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: any;
    loyalty_discount?: number;
    payment_mode?: string;
    coupon_code: string;
    coupon?: string;
    delivery_charges: number;
    order_id?: string;
    currency_code?: string;
    comment?: string;
    cashback_applied: number;
    files?: OpenApiFiles[];
    cod_charges: number;
    billing_address: ShippingAddress;
    cart_items: OpenApiOrderItem[];
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    success?: boolean;
    message?: string;
    order_id: string;
};
type AbandonedCart = {
    checkout_mode?: string;
    uid: number;
    user_id: string;
    payment_methods?: any[];
    merge_qty?: boolean;
    meta?: any;
    is_active?: boolean;
    coupon?: any;
    promotion?: any;
    comment?: string;
    fc_index_map?: number[];
    is_default: boolean;
    cart_value?: number;
    articles: any[];
    expire_at: string;
    fynd_credits?: any;
    last_modified: string;
    gstin?: string;
    _id: string;
    app_id?: string;
    buy_now?: boolean;
    bulk_coupon_discount?: number;
    shipments?: any[];
    payments?: any;
    is_archive?: boolean;
    payment_mode?: string;
    created_on: string;
    cashback: any;
    discount?: number;
    delivery_charges?: any;
    order_id?: string;
    pick_up_customer_details?: any;
    cod_charges?: any;
};
type AbandonedCartResponse = {
    page?: Page;
    result?: any;
    message?: string;
    success?: boolean;
    items?: AbandonedCart[];
};
type AddProductCart = {
    product_group_tags?: string[];
    quantity?: number;
    seller_id?: number;
    pos?: boolean;
    article_assignment?: any;
    extra_meta?: any;
    parent_item_identifiers?: any;
    store_id?: number;
    display?: string;
    item_size?: string;
    article_id?: string;
    item_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    checkout_mode?: string;
    currency?: CartCurrency;
    coupon_text?: string;
    message?: string;
    delivery_charge_info?: string;
    gstin?: string;
    last_modified?: string;
    buy_now?: boolean;
    comment?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    id?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
};
type AddCartDetailResponse = {
    success?: boolean;
    message?: string;
    partial?: boolean;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    identifiers: CartProductIdentifer;
    quantity?: number;
    extra_meta?: any;
    item_index?: number;
    parent_item_identifiers?: any;
    item_size?: string;
    article_id?: string;
    item_id?: number;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    success?: boolean;
    message?: string;
    cart?: CartDetailResponse;
};
type OverrideCartItemPromo = {
    promo_amount: string;
    promo_desc?: string;
    promo_id: string;
    item_list?: any[];
    rwrd_tndr?: string;
};
type OverrideCartItem = {
    seller_identifier?: string;
    discount: number;
    quantity?: number;
    amount_paid: number;
    price_marked: number;
    price_effective: number;
    extra_meta?: any;
    size: string;
    promo_list?: OverrideCartItemPromo[];
    item_id: number;
};
type OverrideCheckoutReq = {
    payment_mode: string;
    cart_id: string;
    payment_identifier: string;
    order_type: string;
    merchant_code: string;
    aggregator: string;
    ordering_store?: number;
    currency_code: string;
    shipping_address?: any;
    billing_address?: any;
    cart_items: OverrideCartItem[];
};
type OverrideCheckoutResponse = {
    success: string;
    message: string;
    order_id: string;
    data: any;
    cart: any;
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
type E = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    request_id?: string;
    stack_trace?: string;
    status?: number;
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
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
};
type HistoryPretty = {
    _id?: string;
    application_id?: string;
    claimed?: boolean;
    created_at?: string;
    expires_on?: string;
    points?: number;
    remaining_points?: number;
    text_1?: string;
    text_2?: string;
    text_3?: string;
    txn_name?: string;
    updated_at?: string;
    user_id?: string;
};
type HistoryRes = {
    items?: HistoryPretty[];
    page?: Page;
    points?: number;
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
type Points = {
    available?: number;
};
type Referral = {
    code?: string;
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
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
};
type Schedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
};
type ShareMessages = {
    email?: string;
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
type GenerateBulkInvoiceLabelShipment = {
    store_id: number;
    from_date: string;
    to_date: string;
    document_type: string;
    shipment_ids?: string[];
};
type GenerateBulkInvoiceOrLabelUrl = {
    uid: string;
    document_type: string;
    batch_id: number;
};
type DocumentType = {
    invoice: string;
    label: string;
};
type BulkListBadRequestResponse = {
    success?: boolean;
    error?: string;
};
type BulkListFailedResponse = {
    success?: boolean;
    error?: string;
};
type SuccessResponseGenerateBulkShipment = {
    success: boolean;
    job_id: number;
    trace_id?: string;
};
type SuccessResponseBulkStatus = {
    success: boolean;
    status: string;
    trace_id?: string;
};
type GenerateBulkUrlSuccessResponse = {
    url: string;
    uid: string;
    expires_in: number;
    presigned_type: string;
};
type InternalErrorResponseGenerateBulkShipment = {
    success: boolean;
    error: string;
};
type BadRequestResponseGenerateBulkUrl = {
    success: boolean;
    message: string;
    request_id?: string;
    exception?: string;
    stack_trace?: string;
    meta?: any;
};
type InternalErrorResponseGenerateBulkUrl = {
    success: boolean;
    message: string;
};
type GenerateBulkShipment = {
    uid: string;
    store_code: string;
    batch_id: string;
    document_type: string;
};
type GenerateBulkUrl = {
    expires_in?: number;
    document_type: string;
    batch_id: string;
};
type GetBulkStatusRequest = {
    batch_id: string;
};
type BadRequestResponseGenerateBulkItemParameters = {
    missing_property?: string;
    type?: string;
};
type BadRequestResponseGenerateBulkItem = {
    keyword?: string;
    data_path?: string;
    schema_path?: string;
    parameters?: BadRequestResponseGenerateBulkItemParameters;
    message?: string;
};
type SuccessResponseGenerateBulk = {
    success: boolean;
};
type BadRequestResponseGenerateBulk = {
    success: boolean;
    error_message: BadRequestResponseGenerateBulkItem[];
};
type InternalErrorResponseGenerateBulk = {
    success: boolean;
    error_message?: string;
};
type ShippingToAddress = {
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
};
type SellerAddress = {
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
};
type BoxDetails = {
    box_id: string;
    total_quantity: string;
    package_count: string;
    dimension: string;
    weight: string;
};
type GenerateBulkBoxLabel = {
    stock_transfer_id: string;
    label_type: string;
    uid: string;
    seller_name: string;
    template_id: number;
    box_details: BoxDetails[];
};
type GenerateBulkShipmentLabel = {
    label_type: string;
    uid: string;
    template_id: number;
    shipments: ShipmentDetails[];
};
type GenerateNoc = {
    uid: string;
    seller_name: string;
    seller_gstin: string;
    fc_gstin: string;
    template_id: number;
    fc_address: SellerAddress;
    seller_address: SellerAddress;
};
type PackageDetails = {
    package_id: string;
    item_quantity: string;
    package_type: string;
    packaging_type: string;
    dimension: string;
    weight: string;
};
type PackageItemDetails = {
    jio_code: string;
    item_name: string;
    mrp: string;
    country_of_origin: string;
    best_before_date: string;
    ean: string;
    package_details: PackageDetails[];
};
type GenerateBulkPackageLabel = {
    stock_transfer_id: string;
    label_type: string;
    uid: string;
    seller_name: string;
    template_id: number;
    item_details: PackageItemDetails[];
};
type SignedSuccessResponse = {
    uid?: string;
    url?: string;
    expires_in?: number;
};
type BulkPresignedSuccessResponse = {
    success: string;
    batch_id?: string;
    presigned_type?: string;
    presigned_url: string;
    expires_in?: number;
};
type SignedBadRequestResponse = {
    success?: boolean;
    error_message?: string;
};
type SignedFailedResponse = {
    success?: boolean;
    error_message?: string;
};
type StatusSuccessResponse = {
    success?: boolean;
    status?: string;
};
type StatusBadRequestResponse = {
    success?: boolean;
    error_message?: string;
};
type StatusFailedResponse = {
    success?: boolean;
    error_message?: string;
};
type GenerateManifest = {
    store_id: number;
    from_date: string;
    to_date: string;
    shipment_ids?: string[];
};
type GeneratePresignedManifestUrl = {
    manifest_id: string;
    uid: string;
};
type ManifestLink = {
    name: string;
    manifest_id: string;
};
type GenerateManifestUrlSuccessResponse = {
    url: string;
    uid: string;
    manifest_id: string;
    expires_in: number;
    presigned_type: string;
};
type ManifestListFailedResponse = {
    success?: boolean;
    error?: string;
};
type InvoiceLabelPresignedRequestBody = {
    document_type: string;
    entity_id: string;
    expires_in?: number;
};
