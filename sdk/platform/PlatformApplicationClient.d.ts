export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    feedback: Feedback;
    theme: Theme;
    user: User;
    content: Content;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    fileStorage: FileStorage;
    share: Share;
    configuration: Configuration;
    cart: Cart;
    rewards: Rewards;
    analytics: Analytics;
    partner: Partner;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformApplicationClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, ShipmentStatus, PaymentModeInfo, ShipmentItemFulFillingStore, UserDataInfo, PlatformItem, GSTDetailsData, Prices, BagUnit, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, ShipmentPayments, ShipmentStatusData, TrackingList, BagStateMapper, BagStatusHistory, DPDetailsData, FulfillingStore, UserDetailsData, OrderBagArticle, CurrentStatus, PlatformDeliveryAddress, Identifier, FinancialBreakup, BagGST, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, BagConfigs, OrderBrandName, OrderBags, OrderDetailsData, ShipmentInfoResponse, OrderingStore, PlatformShipment, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Attributes, Item, ReturnConfig, Dimensions, Weight, Article, BagReturnableCancelableStatus, B2BPODetails, BagMeta, Dates, ArticleDetails, StoreAddress, StoreEwaybill, StoreEinvoice, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, Store, AffiliateMeta, AffiliateBagDetails, BagGSTDetails, PDFLinks, EInvoice, EinvoiceInfo, Formatted, ShipmentTimeStamp, LockData, BuyerDetails, DebugInfo, ShipmentMeta, AffiliateDetails, Brand, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, UserData, MarketPlacePdf, AffiliateBag, OrderPriority, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, BillingInfo, PaymentMethod, PaymentInfo, ShippingInfo, TaxInfo, LineItem, ProcessingDates, Shipment, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, GetMultiSizeGuide, ListSizeGuide, SizeGuideResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, UserInfo, CollectionSchedule, CollectionQuery, CollectionBadge, CollectionImage, CollectionBanner, SeoDetail, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, TeaserTag, NetQuantity, CustomOrder, ProductPublish, Trader, TaxIdentifier, ProductCreateUpdateSchemaV2, NetQuantityResponse, Logo, ProductPublished, Image, ReturnConfigResponse, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, ProductCreateUpdate, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, InventoryResponse, InventoryResponsePaginated, CompanyMeta, ManufacturerResponse, QuantityBase, Quantities, BrandMeta, DimensionResponse, Trader1, WeightResponse, PriceMeta, ReturnConfig1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportQuantityFilter, InventoryExportFilter, InventoryExportRequest, InventoryExportResponse, InventoryExportAdvanceOption, InventoryExportJob, CompanyMeta1, ManufacturerResponse1, ArticleStoreResponse, Quantity, QuantitiesArticle, BrandMeta1, DimensionResponse1, Trader2, WeightResponse1, PriceArticle, ReturnConfig2, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer1, ProductReturnConfigSerializer, GetAddressSerializer, SellerPhoneNumber, UserSerializer2, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationManagerSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, Website, BusinessDetails, ContactDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStores, OrderingStoresResponse, Validity, CouponAuthor, CouponDateMeta, PriceRange, BulkBundleRestriction, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, PostOrder, Restrictions, State, Ownership, DisplayMetaDict, DisplayMeta, RuleDefinition, CouponAction, Validation, CouponSchedule, Rule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionDateMeta, PromotionAuthor, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, PostOrder1, UserRegistered, Restrictions1, PromotionSchedule, DisplayMeta1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionAction, Ownership1, Visibility, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, RawBreakup, CouponBreakup, DisplayBreakup, LoyaltyPoints, CartBreakup, ProductPrice, ProductPriceInfo, PromoMeta, CategoryInfo, ProductImage, ActionQuery, ProductAction, BaseInfo, CartProduct, CartProductIdentifer, BasePrice, ArticlePriceInfo, ProductArticle, ProductAvailability, Ownership2, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, Files, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
/**
 * @typedef ApplicationResponse
 * @property {ApplicationData} [application]
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
 * @typedef ApplicationData
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
 * @property {string} [slug]
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
 * @typedef Activity
 * @property {Object} [current_state]
 * @property {string} [document_id]
 * @property {Object} [previous_state]
 */
/**
 * @typedef ActivityDump
 * @property {Activity} [activity]
 * @property {CreatedBy} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef AddMediaListRequest
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {AddMediaRequest[]} [media_list]
 * @property {string} [ref_id]
 * @property {string} [ref_type]
 */
/**
 * @typedef AddMediaRequest
 * @property {string} [cloud_id]
 * @property {string} [cloud_name]
 * @property {string} [cloud_provider]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {string} [media_url]
 * @property {string} [ref_id]
 * @property {string} [ref_type]
 * @property {string[]} [tags]
 * @property {string} [thumbnail_url]
 * @property {string} [type]
 */
/**
 * @typedef ApproveRequest
 * @property {boolean} [approve]
 * @property {string} [entity_type]
 * @property {string} id
 * @property {string} [reason]
 */
/**
 * @typedef Attribute
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef AttributeObject
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 * @property {string} [title]
 * @property {string} type
 * @property {number} value
 */
/**
 * @typedef CreatedBy
 * @property {string} [id]
 * @property {string} [name]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef CursorGetResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef DeviceMeta
 * @property {string} [app_version]
 * @property {string} [platform]
 */
/**
 * @typedef Entity
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef EntityRequest
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 */
/**
 * @typedef FeedbackAttributes
 * @property {Attribute[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef FeedbackError
 * @property {Object} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef FeedbackState
 * @property {boolean} [active]
 * @property {boolean} [archive]
 * @property {string} [media]
 * @property {boolean} [qna]
 * @property {boolean} [rating]
 * @property {boolean} [review]
 */
/**
 * @typedef GetResponse
 * @property {Object} [data]
 * @property {Page} [page]
 */
/**
 * @typedef GetReviewResponse
 * @property {ReviewFacet[]} [facets]
 * @property {Object[]} [items]
 * @property {Page} [page]
 * @property {SortMethod[]} [sort]
 */
/**
 * @typedef InsertResponse
 * @property {number} [count]
 */
/**
 * @typedef MediaMeta
 * @property {number} [max_count]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef MediaMetaRequest
 * @property {number} max_count
 * @property {number} size
 */
/**
 * @typedef NumberGetResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PageCursor
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} size
 * @property {string} type
 */
/**
 * @typedef PageNumber
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef Rating
 * @property {Attribute[]} [attributes]
 * @property {string[]} [attributes_slugs]
 * @property {UI} [ui]
 */
/**
 * @typedef RatingRequest
 * @property {string[]} attributes
 * @property {UI} [ui]
 */
/**
 * @typedef ReportAbuseRequest
 * @property {string} [description]
 * @property {string} entity_id
 * @property {string} entity_type
 */
/**
 * @typedef Review
 * @property {string} [description]
 * @property {string} [header]
 * @property {MediaMeta} [image_meta]
 * @property {string} [title]
 * @property {MediaMeta} [video_meta]
 * @property {boolean} [vote_allowed]
 */
/**
 * @typedef ReviewFacet
 * @property {string} [display]
 * @property {string} [name]
 * @property {boolean} [selected]
 * @property {string} [slug]
 * @property {string} [type]
 */
/**
 * @typedef ReviewRequest
 * @property {string} description
 * @property {string} header
 * @property {MediaMetaRequest} image_meta
 * @property {boolean} is_vote_allowed
 * @property {string} title
 * @property {MediaMetaRequest} video_meta
 */
/**
 * @typedef SaveAttributeRequest
 * @property {string} [description]
 * @property {string} name
 * @property {string} slug
 */
/**
 * @typedef SortMethod
 * @property {string} [name]
 * @property {boolean} [selected]
 * @property {string} [type]
 */
/**
 * @typedef TagMeta
 * @property {MediaMeta[]} [media]
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef Template
 * @property {DateMeta} [date_meta]
 * @property {Entity} [entity]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Rating} [rating]
 * @property {Review} [review]
 * @property {FeedbackState} [state]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef TemplateGetResponse
 * @property {Template[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TemplateRequest
 * @property {boolean} active
 * @property {string} [enable_media_type]
 * @property {boolean} [enable_qna]
 * @property {boolean} enable_rating
 * @property {boolean} enable_review
 * @property {EntityRequest} entity
 * @property {RatingRequest} rating
 * @property {ReviewRequest} review
 */
/**
 * @typedef TemplateRequestList
 * @property {TemplateRequest[]} template_list
 */
/**
 * @typedef UI
 * @property {string[]} [feedback_question]
 * @property {UIIcon} [icon]
 * @property {string[]} [text]
 * @property {string} [type]
 */
/**
 * @typedef UIIcon
 * @property {string} [active]
 * @property {string} [inactive]
 * @property {string[]} [selected]
 */
/**
 * @typedef UpdateAttributeRequest
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 */
/**
 * @typedef UpdateResponse
 * @property {number} [count]
 */
/**
 * @typedef UpdateReviewRequest
 * @property {boolean} [active]
 * @property {string} [application]
 * @property {boolean} [approve]
 * @property {boolean} [archive]
 * @property {AttributeObject[]} [attributes_rating]
 * @property {string} [description]
 * @property {DeviceMeta} [device_meta]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {MediaMeta[]} [media_resource]
 * @property {number} [rating]
 * @property {string} [review_id]
 * @property {string} [template_id]
 * @property {string} [title]
 */
/**
 * @typedef UpdateTemplateRequest
 * @property {boolean} active
 * @property {string} [enable_media_type]
 * @property {boolean} [enable_qna]
 * @property {boolean} enable_rating
 * @property {boolean} enable_review
 * @property {EntityRequest} entity
 * @property {RatingRequest} rating
 * @property {ReviewRequest} review
 */
/**
 * @typedef UpdateTemplateStatusRequest
 * @property {boolean} [active]
 * @property {boolean} [archive]
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
 * @property {SubNavigationReference[]} [sub_navigation]
 */
/**
 * @typedef SubNavigationReference
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
 * @typedef OneTimeChargeItem
 * @property {string} name
 * @property {string} [term]
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {number} [capped_amount]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef CreateOneTimeCharge
 * @property {string} name
 * @property {OneTimeChargeItem} charge
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
 * @typedef OneTimeChargeEntity
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {Object} [metadata]
 * @property {string} [return_url]
 * @property {boolean} [is_test]
 * @property {string} [pricing_type]
 * @property {string} [subscriber_id]
 * @property {string} [entity_type]
 * @property {string} [entity_id]
 * @property {Object} [meta]
 * @property {EntityChargePrice} [price]
 */
/**
 * @typedef CreateOneTimeChargeResponse
 * @property {OneTimeChargeEntity} [charge]
 * @property {string} [confirm_url]
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
 * @property {number} [credit_balance]
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
 * @typedef PaymentGatewayConfigResponse
 * @property {boolean} success
 * @property {string[]} display_fields
 * @property {string} app_id
 * @property {boolean} created
 * @property {Object[]} [aggregators]
 * @property {string[]} excluded_fields
 */
/**
 * @typedef ErrorCodeDescription
 * @property {string} code
 * @property {boolean} success
 * @property {string} description
 */
/**
 * @typedef PaymentGatewayConfig
 * @property {string} key
 * @property {boolean} [is_active]
 * @property {string} merchant_salt
 * @property {string} config_type
 * @property {string} secret
 */
/**
 * @typedef PaymentGatewayConfigRequest
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {string} app_id
 * @property {boolean} [is_active]
 */
/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {boolean} success
 * @property {string[]} aggregator
 */
/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code
 * @property {string} description
 */
/**
 * @typedef HttpErrorCodeAndResponse
 * @property {boolean} success
 * @property {ErrorCodeAndDescription} error
 */
/**
 * @typedef PaymentModeLogo
 * @property {string} large
 * @property {string} small
 */
/**
 * @typedef IntentApp
 * @property {string} [code]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [display_name]
 * @property {string} [package_name]
 */
/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */
/**
 * @typedef PaymentModeList
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_isin]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {string} [card_number]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {number} [timeout]
 * @property {string} [card_fingerprint]
 * @property {string} aggregator_name
 * @property {PaymentModeLogo} [logo_url]
 * @property {number} [exp_month]
 * @property {number} [retry_count]
 * @property {boolean} [expired]
 * @property {string} [card_token]
 * @property {string} [card_type]
 * @property {number} [remaining_limit]
 * @property {string} [card_id]
 * @property {number} [cod_limit]
 * @property {string} [display_name]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [fynd_vpa]
 * @property {string} [card_brand]
 * @property {string} [card_brand_image]
 * @property {string} [card_name]
 * @property {string} [code]
 * @property {string} [nickname]
 * @property {string} [name]
 * @property {number} [exp_year]
 * @property {boolean} [intent_flow]
 * @property {number} [display_priority]
 * @property {number} [cod_limit_per_order]
 * @property {string} [merchant_code]
 * @property {string} [card_issuer]
 * @property {string} [card_reference]
 */
/**
 * @typedef RootPaymentMode
 * @property {boolean} [save_card]
 * @property {string} name
 * @property {number} display_priority
 * @property {string} [aggregator_name]
 * @property {PaymentModeList[]} [list]
 * @property {string} display_name
 * @property {boolean} [add_card_enabled]
 * @property {boolean} [anonymous_enable]
 * @property {boolean} [is_pay_by_card_pl]
 */
/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */
/**
 * @typedef PaymentOptionsResponse
 * @property {boolean} success
 * @property {PaymentOptions} payment_options
 */
/**
 * @typedef Payout
 * @property {Object[]} payouts_aggregators
 * @property {Object} customers
 * @property {boolean} is_active
 * @property {Object} more_attributes
 * @property {Object} unique_transfer_no
 * @property {string} transfer_type
 * @property {boolean} is_default
 */
/**
 * @typedef PayoutsResponse
 * @property {boolean} success
 * @property {Payout[]} items
 */
/**
 * @typedef PayoutBankDetails
 * @property {string} ifsc_code
 * @property {number} [pincode]
 * @property {string} [branch_name]
 * @property {string} account_type
 * @property {string} [account_holder]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [account_no]
 * @property {string} [bank_name]
 */
/**
 * @typedef PayoutRequest
 * @property {string} unique_external_id
 * @property {string} aggregator
 * @property {boolean} is_active
 * @property {PayoutBankDetails} bank_details
 * @property {string} transfer_type
 * @property {Object} users
 */
/**
 * @typedef PayoutResponse
 * @property {boolean} success
 * @property {string} aggregator
 * @property {Object} payouts
 * @property {string} payment_status
 * @property {boolean} is_active
 * @property {boolean} created
 * @property {Object} bank_details
 * @property {string} unique_transfer_no
 * @property {string} transfer_type
 * @property {Object} users
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
 * @property {boolean} success
 * @property {Object[]} data
 */
/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */
/**
 * @typedef SubscriptionConfigResponse
 * @property {boolean} success
 * @property {string} aggregator
 * @property {Object} config
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
 * @typedef RefundAccountResponse
 * @property {boolean} [is_verified_flag]
 * @property {boolean} success
 * @property {Object} [data]
 * @property {string} message
 */
/**
 * @typedef NotFoundResourceError
 * @property {string} code
 * @property {boolean} success
 * @property {string} description
 */
/**
 * @typedef BankDetailsForOTP
 * @property {string} ifsc_code
 * @property {string} branch_name
 * @property {string} account_holder
 * @property {string} account_no
 * @property {string} bank_name
 */
/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {BankDetailsForOTP} details
 * @property {string} order_id
 */
/**
 * @typedef IfscCodeResponse
 * @property {string} branch_name
 * @property {boolean} [success]
 * @property {string} bank_name
 */
/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} account_holder
 * @property {string} account_no
 * @property {number} id
 * @property {string} email
 * @property {string} [mobile]
 * @property {string} transfer_mode
 * @property {string} beneficiary_id
 * @property {string} title
 * @property {string} created_on
 * @property {string} address
 * @property {string} modified_on
 * @property {string} display_name
 * @property {string} [comment]
 * @property {string} [delights_user_name]
 * @property {string} subtitle
 * @property {string} ifsc_code
 * @property {string} [branch_name]
 * @property {boolean} is_active
 * @property {string} bank_name
 */
/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */
/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_id]
 * @property {string} [payment_gateway]
 * @property {string} [current_status]
 * @property {string} [order_id]
 * @property {Object} [extra_meta]
 */
/**
 * @typedef MultiTenderPaymentMethod
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {number} amount
 * @property {string} [name]
 * @property {string} mode
 */
/**
 * @typedef PaymentConfirmationRequest
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} order_id
 */
/**
 * @typedef PaymentConfirmationResponse
 * @property {boolean} success
 * @property {string} message
 * @property {string} order_id
 */
/**
 * @typedef PlatformPaymentOptions
 * @property {boolean} enabled
 * @property {Object} [callback_url]
 * @property {number} [cod_amount_limit]
 * @property {boolean} [anonymous_cod]
 * @property {Object} [payment_selection_lock]
 * @property {string} source
 * @property {string} mode_of_payment
 * @property {Object} methods
 * @property {number} [cod_charges]
 */
/**
 * @typedef PlatfromPaymentConfig
 * @property {boolean} success
 * @property {PlatformPaymentOptions} data
 * @property {string} message
 */
/**
 * @typedef UpdatePlatformPaymentConfig
 * @property {number} [cod_amount_limit]
 * @property {boolean} [anonymous_cod]
 * @property {Object} [payment_selection_lock]
 * @property {Object} methods
 * @property {number} [cod_charges]
 */
/**
 * @typedef CODdata
 * @property {number} remaining_limit
 * @property {number} limit
 * @property {boolean} is_active
 * @property {string} user_id
 * @property {number} usages
 */
/**
 * @typedef GetUserCODLimitResponse
 * @property {boolean} success
 * @property {CODdata} user_cod_data
 */
/**
 * @typedef SetCODForUserRequest
 * @property {string} mobileno
 * @property {string} merchant_user_id
 * @property {boolean} is_active
 */
/**
 * @typedef SetCODOptionResponse
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef EdcModelData
 * @property {string} aggregator
 * @property {string[]} models
 * @property {number} aggregator_id
 */
/**
 * @typedef EdcAggregatorAndModelListResponse
 * @property {boolean} success
 * @property {EdcModelData[]} data
 */
/**
 * @typedef StatisticsData
 * @property {number} inactive_device_count
 * @property {number} active_device_count
 */
/**
 * @typedef EdcDeviceStatsResponse
 * @property {boolean} success
 * @property {StatisticsData} statistics
 */
/**
 * @typedef EdcAddRequest
 * @property {string} edc_device_serial_no
 * @property {number} aggregator_id
 * @property {string} [device_tag]
 * @property {string} terminal_serial_no
 * @property {string} edc_model
 * @property {number} store_id
 */
/**
 * @typedef EdcDevice
 * @property {string} application_id
 * @property {string} [edc_models]
 * @property {string} edc_device_serial_no
 * @property {number} aggregator_id
 * @property {string} device_tag
 * @property {string} is_active
 * @property {string} [aggregator_name]
 * @property {string} terminal_serial_no
 * @property {string} [merchant_store_pos_code]
 * @property {string} terminal_unique_identifier
 * @property {number} store_id
 */
/**
 * @typedef EdcDeviceAddResponse
 * @property {boolean} success
 * @property {EdcDevice} data
 */
/**
 * @typedef EdcDeviceDetailsResponse
 * @property {boolean} success
 * @property {EdcDevice} data
 */
/**
 * @typedef EdcUpdateRequest
 * @property {string} [edc_device_serial_no]
 * @property {number} [aggregator_id]
 * @property {string} [device_tag]
 * @property {string} [is_active]
 * @property {string} [merchant_store_pos_code]
 * @property {string} [edc_model]
 * @property {number} [store_id]
 */
/**
 * @typedef EdcDeviceUpdateResponse
 * @property {boolean} success
 */
/**
 * @typedef EdcDeviceListResponse
 * @property {boolean} success
 * @property {EdcDevice[]} items
 * @property {Page} page
 */
/**
 * @typedef PaymentInitializationRequest
 * @property {string} currency
 * @property {string} aggregator
 * @property {string} [device_id]
 * @property {string} email
 * @property {string} method
 * @property {number} amount
 * @property {string} [vpa]
 * @property {string} contact
 * @property {string} order_id
 * @property {number} [timeout]
 * @property {string} merchant_order_id
 * @property {string} [razorpay_payment_id]
 * @property {string} customer_id
 */
/**
 * @typedef PaymentInitializationResponse
 * @property {string} [currency]
 * @property {boolean} success
 * @property {string} aggregator
 * @property {string} [device_id]
 * @property {string} method
 * @property {number} [amount]
 * @property {string} [vpa]
 * @property {string} [upi_poll_url]
 * @property {number} [timeout]
 * @property {string} [bqr_image]
 * @property {string} [aggregator_order_id]
 * @property {string} [virtual_id]
 * @property {string} merchant_order_id
 * @property {string} [customer_id]
 * @property {string} polling_url
 * @property {string} [razorpay_payment_id]
 * @property {string} [status]
 */
/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} currency
 * @property {string} aggregator
 * @property {string} [device_id]
 * @property {string} email
 * @property {string} method
 * @property {number} amount
 * @property {string} [vpa]
 * @property {string} contact
 * @property {string} order_id
 * @property {string} merchant_order_id
 * @property {string} customer_id
 * @property {string} status
 */
/**
 * @typedef PaymentStatusUpdateResponse
 * @property {boolean} [success]
 * @property {boolean} retry
 * @property {string} [redirect_url]
 * @property {string} aggregator_name
 * @property {string} status
 */
/**
 * @typedef ResendOrCancelPaymentRequest
 * @property {string} request_type
 * @property {string} [device_id]
 * @property {string} order_id
 */
/**
 * @typedef LinkStatus
 * @property {boolean} status
 * @property {string} message
 */
/**
 * @typedef ResendOrCancelPaymentResponse
 * @property {boolean} success
 * @property {LinkStatus} data
 */
/**
 * @typedef ShipmentStatus
 * @property {string} status
 * @property {string} ops_status
 * @property {string} hex_code
 * @property {string} actual_status
 * @property {string} title
 */
/**
 * @typedef PaymentModeInfo
 * @property {string} logo
 * @property {string} type
 */
/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} id
 * @property {string} code
 */
/**
 * @typedef UserDataInfo
 * @property {string} [email]
 * @property {string} [mobile]
 * @property {string} [last_name]
 * @property {string} [name]
 * @property {string} [gender]
 * @property {number} [uid]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [first_name]
 * @property {string} [avis_user_id]
 */
/**
 * @typedef PlatformItem
 * @property {number} [l3_category]
 * @property {string[]} [images]
 * @property {boolean} [can_cancel]
 * @property {number} [department_id]
 * @property {string} [color]
 * @property {string[]} [l1_category]
 * @property {string} [size]
 * @property {boolean} [can_return]
 * @property {string} [l3_category_name]
 * @property {string} [name]
 * @property {number} [id]
 * @property {string} [code]
 * @property {string[]} [image]
 */
/**
 * @typedef GSTDetailsData
 * @property {string} gstin_code
 * @property {number} tax_collected_at_source
 * @property {number} value_of_good
 * @property {number} gst_fee
 * @property {number} brand_calculated_amount
 */
/**
 * @typedef Prices
 * @property {number} [tax_collected_at_source]
 * @property {number} [amount_paid]
 * @property {number} [price_effective]
 * @property {number} [refund_credit]
 * @property {number} [price_marked]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [cashback]
 * @property {number} [value_of_good]
 * @property {number} [coupon_value]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [fynd_credits]
 * @property {number} [cod_charges]
 * @property {number} [cashback_applied]
 * @property {number} [refund_amount]
 * @property {number} [promotion_effective_discount]
 */
/**
 * @typedef BagUnit
 * @property {boolean} [can_cancel]
 * @property {Object} status
 * @property {number} total_shipment_bags
 * @property {PlatformItem} [item]
 * @property {boolean} [can_return]
 * @property {string} ordering_channel
 * @property {GSTDetailsData} [gst]
 * @property {number} item_quantity
 * @property {number} bag_id
 * @property {string} shipment_id
 * @property {Prices} [prices]
 */
/**
 * @typedef ShipmentItem
 * @property {Object} [company]
 * @property {number} total_shipments_in_order
 * @property {Object} [application]
 * @property {Object} [payment_methods]
 * @property {number} shipment_created_at
 * @property {ShipmentStatus} [shipment_status]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {Object} [channel]
 * @property {string} fulfilling_centre
 * @property {number} total_bags_count
 * @property {UserDataInfo} [user]
 * @property {BagUnit[]} [bags]
 * @property {string} id
 * @property {Prices} [prices]
 * @property {Object} [sla]
 * @property {string} created_at
 */
/**
 * @typedef FilterInfoOption
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} text
 */
/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options]
 * @property {string} value
 * @property {string} type
 * @property {string} text
 */
/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {ShipmentItem[]} [items]
 * @property {Object} [applied_filters]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [page]
 */
/**
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef ShipmentPayments
 * @property {string} [logo]
 * @property {string} [source]
 * @property {string} [mode]
 */
/**
 * @typedef ShipmentStatusData
 * @property {string} [status]
 * @property {number} [id]
 * @property {string[]} [bag_list]
 * @property {string} [shipment_id]
 * @property {string} [created_at]
 */
/**
 * @typedef TrackingList
 * @property {string} status
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} [time]
 * @property {string} text
 */
/**
 * @typedef BagStateMapper
 * @property {boolean} [app_facing]
 * @property {string} journey_type
 * @property {string} display_name
 * @property {boolean} [is_active]
 * @property {string} name
 * @property {boolean} [notify_customer]
 * @property {string} [app_display_name]
 * @property {string} state_type
 * @property {string} [app_state_name]
 * @property {number} bs_id
 */
/**
 * @typedef BagStatusHistory
 * @property {number} [delivery_partner_id]
 * @property {string} status
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [updated_at]
 * @property {number} [store_id]
 * @property {string} [delivery_awb_number]
 * @property {number} [state_id]
 * @property {boolean} [forward]
 * @property {string} [display_name]
 * @property {string} [app_display_name]
 * @property {string} [state_type]
 * @property {number} [bsh_id]
 * @property {boolean} [kafka_sync]
 * @property {Object[]} [reasons]
 * @property {number} [bag_id]
 * @property {string} [shipment_id]
 * @property {string} [created_at]
 */
/**
 * @typedef DPDetailsData
 * @property {string} [gst_tag]
 * @property {string} [pincode]
 * @property {string} [track_url]
 * @property {string} [name]
 * @property {string} [awb_no]
 * @property {string} [country]
 * @property {number} [id]
 * @property {string} [eway_bill_id]
 */
/**
 * @typedef FulfillingStore
 * @property {string} city
 * @property {string} contact_person
 * @property {string} pincode
 * @property {string} phone
 * @property {Object} meta
 * @property {string} state
 * @property {string} address
 * @property {string} store_name
 * @property {string} country
 * @property {string} fulfillment_channel
 * @property {number} id
 * @property {string} code
 */
/**
 * @typedef UserDetailsData
 * @property {string} city
 * @property {string} pincode
 * @property {string} [email]
 * @property {string} phone
 * @property {string} state
 * @property {string} address
 * @property {string} name
 * @property {string} country
 */
/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers]
 * @property {string} [uid]
 * @property {Object} [return_config]
 */
/**
 * @typedef CurrentStatus
 * @property {number} [delivery_partner_id]
 * @property {string} [status]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [updated_at]
 * @property {number} [store_id]
 * @property {number} [state_id]
 * @property {string} [shipment_id]
 * @property {string} [state_type]
 * @property {boolean} [kafka_sync]
 * @property {number} [bag_id]
 * @property {string} [delivery_awb_number]
 * @property {number} current_status_id
 * @property {string} [created_at]
 */
/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [city]
 * @property {string} [area]
 * @property {string} [contact_person]
 * @property {string} [pincode]
 * @property {number} [latitude]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [state]
 * @property {string} [address2]
 * @property {string} [updated_at]
 * @property {string} [address_category]
 * @property {string} [version]
 * @property {string} [country]
 * @property {number} [longitude]
 * @property {string} [landmark]
 * @property {string} [address1]
 * @property {string} [address_type]
 * @property {string} [created_at]
 */
/**
 * @typedef Identifier
 * @property {string} [ean]
 */
/**
 * @typedef FinancialBreakup
 * @property {boolean} added_to_fynd_cash
 * @property {number} [tax_collected_at_source]
 * @property {string} gst_tag
 * @property {number} refund_credit
 * @property {number} discount
 * @property {number} value_of_good
 * @property {number} fynd_credits
 * @property {number} cod_charges
 * @property {number} cashback_applied
 * @property {number} cashback
 * @property {number} brand_calculated_amount
 * @property {number} total_units
 * @property {string} item_name
 * @property {string} size
 * @property {number} delivery_charge
 * @property {number} coupon_value
 * @property {number} [amount_paid_roundoff]
 * @property {number} transfer_price
 * @property {number} gst_fee
 * @property {number} coupon_effective_discount
 * @property {number} price_effective
 * @property {number} amount_paid
 * @property {number} price_marked
 * @property {number} gst_tax_percentage
 * @property {string} hsn_code
 * @property {number} promotion_effective_discount
 * @property {Identifier} identifiers
 */
/**
 * @typedef BagGST
 * @property {string} [gstin_code]
 * @property {string} [gst_tag]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {number} [value_of_good]
 * @property {string} [hsn_code]
 * @property {number} [gst_fee]
 * @property {number} [brand_calculated_amount]
 */
/**
 * @typedef DiscountRules
 * @property {number} [value]
 * @property {string} [type]
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
 * @typedef AppliedPromos
 * @property {DiscountRules[]} [discount_rules]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_name]
 * @property {string} [promotion_type]
 * @property {string} [promo_id]
 * @property {number} [amount]
 * @property {boolean} [mrp_promotion]
 * @property {number} [article_quantity]
 */
/**
 * @typedef BagConfigs
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} allow_force_return
 * @property {boolean} is_returnable
 */
/**
 * @typedef OrderBrandName
 * @property {string} [company]
 * @property {string} brand_name
 * @property {string} logo
 * @property {string} [modified_on]
 * @property {number} id
 * @property {string} created_on
 */
/**
 * @typedef OrderBags
 * @property {PlatformItem} [item]
 * @property {number} [quantity]
 * @property {Object} [parent_promo_bags]
 * @property {OrderBagArticle} [article]
 * @property {string} [identifier]
 * @property {CurrentStatus} [current_status]
 * @property {boolean} [can_cancel]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {string} [entity_type]
 * @property {number} [line_number]
 * @property {string} [display_name]
 * @property {Prices} [prices]
 * @property {boolean} [can_return]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {BagGST} [gst_details]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {BagConfigs} [bag_configs]
 * @property {OrderBrandName} [brand]
 * @property {number} bag_id
 * @property {string} [seller_identifier]
 */
/**
 * @typedef OrderDetailsData
 * @property {string} [source]
 * @property {string} [order_value]
 * @property {string} [ordering_channel]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [cod_charges]
 * @property {string} fynd_order_id
 * @property {Object} [tax_details]
 * @property {string} [affiliate_id]
 * @property {string} [order_date]
 */
/**
 * @typedef ShipmentInfoResponse
 * @property {string} [journey_type]
 * @property {string} email_id
 * @property {boolean} is_fynd_coupon
 * @property {string} [replacement_details]
 * @property {Object} fyndstore_emp
 * @property {Object[]} items
 * @property {string} [user_agent]
 * @property {string} lock_status
 * @property {boolean} is_not_fynd_source
 * @property {string} tracking_url
 * @property {string} [kirana_store_id]
 * @property {ShipmentPayments} [payments]
 * @property {number} [shipment_quantity]
 * @property {string} can_break
 * @property {Object} [delivery_slot]
 * @property {ShipmentStatusData} [status]
 * @property {string} [mid]
 * @property {string} [payment_mode]
 * @property {Object} current_shipment_status
 * @property {Object[]} [forward_order_status]
 * @property {string} [packaging_type]
 * @property {Object} [coupon]
 * @property {string} [pay_button]
 * @property {Object} order_status
 * @property {string} shipment_id
 * @property {TrackingList[]} [tracking_list]
 * @property {boolean} [go_green]
 * @property {string} [is_fynd_store]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [priority_text]
 * @property {string} affiliate_shipment_id
 * @property {Object[]} [forward_tracking_list]
 * @property {boolean} is_invoiced
 * @property {boolean} [can_cancel]
 * @property {boolean} [beneficiary_details]
 * @property {number} [total_items]
 * @property {number} [total_bags]
 * @property {boolean} platform_logo
 * @property {string} [vertical]
 * @property {Object} invoice
 * @property {DPDetailsData} [dp_details]
 * @property {Object} [user_info]
 * @property {Object[]} [forward_shipment_status]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object[]} delivery_status
 * @property {Object} [escalation]
 * @property {string} [refund_text]
 * @property {boolean} is_packaging_order
 * @property {UserDetailsData} [delivery_details]
 * @property {boolean} [enable_dp_tracking]
 * @property {Object} [refund_details]
 * @property {OrderBags[]} [bags]
 * @property {OrderDetailsData} [order]
 * @property {string} [is_pdsr]
 * @property {Prices} [prices]
 * @property {number} status_progress
 * @property {string} user_id
 * @property {Object} company
 * @property {string} [secured_delivery_flag]
 * @property {string} [due_date]
 * @property {Object} ordering_store
 * @property {string} [order_created_time]
 * @property {string} credit_note_id
 * @property {UserDetailsData} [billing_details]
 * @property {string} [shipment_status]
 * @property {string[]} [child_nodes]
 * @property {boolean} [enable_tracking]
 * @property {boolean} [can_return]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} order_type
 * @property {string[]} [shipment_images]
 * @property {string} [picked_date]
 * @property {string} [operational_status]
 * @property {Object[]} [custom_meta]
 * @property {Object} [bank_data]
 */
/**
 * @typedef OrderingStore
 * @property {string} city
 * @property {string} contact_person
 * @property {string} pincode
 * @property {string} phone
 * @property {Object} meta
 * @property {string} state
 * @property {string} address
 * @property {string} store_name
 * @property {string} country
 * @property {string} id
 * @property {string} code
 */
/**
 * @typedef PlatformShipment
 * @property {string} [journey_type]
 * @property {string} [user_agent]
 * @property {ShipmentPayments} [payments]
 * @property {number} [shipment_quantity]
 * @property {Object} [delivery_slot]
 * @property {ShipmentStatusData} [status]
 * @property {string} [payment_mode]
 * @property {string} [packaging_type]
 * @property {Object} [coupon]
 * @property {string} shipment_id
 * @property {TrackingList[]} [tracking_list]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [priority_text]
 * @property {number} [total_items]
 * @property {number} [total_bags]
 * @property {string} [platform_logo]
 * @property {string} [vertical]
 * @property {DPDetailsData} [dp_details]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {UserDetailsData} [delivery_details]
 * @property {boolean} [enable_dp_tracking]
 * @property {OrderBags[]} [bags]
 * @property {OrderDetailsData} [order]
 * @property {Prices} [prices]
 * @property {OrderingStore} [ordering_store]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [shipment_status]
 * @property {GSTDetailsData} [gst_details]
 * @property {string[]} [shipment_images]
 * @property {string} [picked_date]
 * @property {string} [operational_status]
 * @property {Object[]} [custom_meta]
 */
/**
 * @typedef OrderMeta
 * @property {string} [currency_symbol]
 * @property {number} [ordering_store]
 * @property {number} [employee_id]
 * @property {Object} [extra_meta]
 * @property {Object} [staff]
 * @property {string} [payment_type]
 * @property {string[]} [order_child_entities]
 * @property {number} [cart_id]
 * @property {string} [order_platform]
 * @property {string} [comment]
 * @property {string} [order_type]
 * @property {number} [mongo_cart_id]
 * @property {string} [customer_note]
 * @property {Object[]} [files]
 * @property {Object[]} [order_tags]
 */
/**
 * @typedef OrderDict
 * @property {OrderMeta} [meta]
 * @property {Prices} [prices]
 * @property {string} fynd_order_id
 * @property {Object} [tax_details]
 * @property {Object} [payment_methods]
 * @property {string} order_date
 */
/**
 * @typedef ShipmentDetailsResponse
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 * @property {OrderDict} [order]
 */
/**
 * @typedef SubLane
 * @property {number} [total_items]
 * @property {Object[]} [actions]
 * @property {number} [index]
 * @property {string} [value]
 * @property {string} [text]
 */
/**
 * @typedef SuperLane
 * @property {number} [total_items]
 * @property {SubLane[]} [options]
 * @property {string} value
 * @property {string} text
 */
/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */
/**
 * @typedef PlatformBreakupValues
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} [display]
 */
/**
 * @typedef PlatformChannel
 * @property {string} [name]
 * @property {string} [logo]
 */
/**
 * @typedef PlatformOrderItems
 * @property {string} [order_created_time]
 * @property {UserDataInfo} [user_info]
 * @property {string} [payment_mode]
 * @property {number} [order_value]
 * @property {Object} [meta]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {PlatformChannel} [channel]
 * @property {PlatformShipment[]} [shipments]
 * @property {number} [total_order_value]
 * @property {string} [order_id]
 */
/**
 * @typedef OrderListingResponse
 * @property {string} [message]
 * @property {number} [total_count]
 * @property {string} [lane]
 * @property {PlatformOrderItems[]} [items]
 * @property {boolean} [success]
 * @property {Page} [page]
 */
/**
 * @typedef Options
 * @property {number} [value]
 * @property {string} [text]
 */
/**
 * @typedef MetricsCount
 * @property {Options[]} [options]
 * @property {number} value
 * @property {string} key
 * @property {string} text
 */
/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */
/**
 * @typedef PlatformTrack
 * @property {string} [status]
 * @property {string} [updated_time]
 * @property {string} [updated_at]
 * @property {string} [reason]
 * @property {Object} [meta]
 * @property {string} [awb]
 * @property {string} [shipment_type]
 * @property {string} [account_name]
 * @property {string} [raw_status]
 * @property {string} [last_location_recieved_at]
 */
/**
 * @typedef PlatformShipmentTrack
 * @property {PlatformTrack[]} [results]
 * @property {Object} [meta]
 */
/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [filters]
 * @property {FiltersInfo[]} [unfulfilled]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [processed]
 */
/**
 * @typedef FiltersResponse
 * @property {FiltersInfo[]} [global_filter]
 * @property {AdvanceFilterInfo} [advance_filter]
 */
/**
 * @typedef Success
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef OmsReports
 * @property {string} [status]
 * @property {string} [report_name]
 * @property {string} [report_created_at]
 * @property {Object} [request_details]
 * @property {string} [display_name]
 * @property {string} [s3_key]
 * @property {string} [report_requested_at]
 * @property {string} [report_type]
 * @property {string} [report_id]
 */
/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [jio_code]
 * @property {string} [article_id]
 * @property {string} [company_id]
 * @property {string} [item_id]
 */
/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */
/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [message]
 * @property {string} [value]
 * @property {string} [type]
 */
/**
 * @typedef JioCodeUpsertResponse
 * @property {string} [trace_id]
 * @property {string} [identifier]
 * @property {Object[]} [data]
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {boolean} [success]
 */
/**
 * @typedef BulkInvoicingResponse
 * @property {string} [message]
 * @property {boolean} success
 */
/**
 * @typedef BulkInvoiceLabelResponse
 * @property {Object} [invoice]
 * @property {string} [store_id]
 * @property {string} [store_code]
 * @property {Object} [data]
 * @property {string} [store_name]
 * @property {boolean} do_invoice_label_generated
 * @property {Object} [label]
 * @property {string} [company_id]
 * @property {string} [invoice_status]
 * @property {string} batch_id
 */
/**
 * @typedef URL
 * @property {string} [url]
 */
/**
 * @typedef FileUploadResponse
 * @property {number} [expiry]
 * @property {string} [url]
 */
/**
 * @typedef FileResponse
 * @property {URL} [cdn]
 * @property {string} [file_path]
 * @property {string} [method]
 * @property {string} [content_type]
 * @property {string[]} [tags]
 * @property {string} [namespace]
 * @property {FileUploadResponse} [upload]
 * @property {string} [file_name]
 * @property {number} [size]
 * @property {string} [operation]
 */
/**
 * @typedef bulkListingData
 * @property {Object[]} [successful_shipments]
 * @property {string[]} [processing_shipments]
 * @property {string} [store_name]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {string} [status]
 * @property {string} [excel_url]
 * @property {string} [uploaded_on]
 * @property {number} [successful]
 * @property {number} [processing]
 * @property {string} [user_name]
 * @property {string} [id]
 * @property {Object[]} [failed_shipments]
 * @property {number} [store_id]
 * @property {string} [user_id]
 * @property {string} [store_code]
 * @property {string} [file_name]
 * @property {number} [total]
 * @property {string} [batch_id]
 */
/**
 * @typedef BulkListingPage
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [total]
 */
/**
 * @typedef BulkListingResponse
 * @property {boolean} [success]
 * @property {string} [error]
 * @property {bulkListingData[]} [data]
 * @property {BulkListingPage} [page]
 */
/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */
/**
 * @typedef Reason
 * @property {QuestionSet[]} [question_set]
 * @property {number} [id]
 * @property {string} [display_name]
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
 * @property {string} [message]
 * @property {boolean} [status]
 */
/**
 * @typedef BulkActionDetailsDataField
 * @property {number} [failed_shipments_count]
 * @property {number} [processing_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [successful_shipments_count]
 * @property {number} [total_shipments_count]
 * @property {string} [company_id]
 * @property {string} [batch_id]
 */
/**
 * @typedef BulkActionDetailsResponse
 * @property {boolean} [status]
 * @property {string} [message]
 * @property {string} [uploaded_by]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string} [uploaded_on]
 * @property {string[]} [failed_records]
 * @property {string[]} [error]
 * @property {string} [success]
 * @property {string} [user_id]
 */
/**
 * @typedef Attributes
 * @property {string} [brand_name]
 * @property {string} [marketer_name]
 * @property {string} [essential]
 * @property {string} [primary_material]
 * @property {string} [primary_color_hex]
 * @property {string} [name]
 * @property {string[]} [gender]
 * @property {string} [primary_color]
 * @property {string} [marketer_address]
 */
/**
 * @typedef Item
 * @property {string} [branch_url]
 * @property {string} [color]
 * @property {number} [l1_category_id]
 * @property {string} slug_key
 * @property {number} [l3_category]
 * @property {Object} [meta]
 * @property {string} [webstore_product_url]
 * @property {boolean} [can_cancel]
 * @property {string[]} [l2_category]
 * @property {string[]} [l1_category]
 * @property {Attributes} attributes
 * @property {string} [l3_category_name]
 * @property {number} brand_id
 * @property {string} [code]
 * @property {string[]} image
 * @property {number} [department_id]
 * @property {boolean} [can_return]
 * @property {number} [l2_category_id]
 * @property {string} name
 * @property {string} [gender]
 * @property {string} [last_updated_at]
 * @property {number} item_id
 * @property {string} brand
 * @property {string} size
 */
/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable]
 * @property {string} [unit]
 * @property {number} [time]
 */
/**
 * @typedef Dimensions
 * @property {number} [length]
 * @property {number} [height]
 * @property {string} [unit]
 * @property {number} [width]
 * @property {boolean} [is_default]
 */
/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {number} [shipping]
 * @property {string} [unit]
 */
/**
 * @typedef Article
 * @property {ReturnConfig} [return_config]
 * @property {Object} [raw_meta]
 * @property {Object} [child_details]
 * @property {string} _id
 * @property {Dimensions} [dimensions]
 * @property {Object} [a_set]
 * @property {string} uid
 * @property {Weight} [weight]
 * @property {string} [code]
 * @property {string} seller_identifier
 * @property {string} size
 * @property {Identifier} identifiers
 * @property {boolean} [is_set]
 * @property {Object} [esp_modified]
 */
/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} is_returnable
 */
/**
 * @typedef B2BPODetails
 * @property {string} [docker_number]
 * @property {number} [total_gst_percentage]
 * @property {boolean} [partial_can_ret]
 * @property {number} [po_tax_amount]
 * @property {number} [po_line_amount]
 * @property {number} [item_base_price]
 */
/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */
/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */
/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */
/**
 * @typedef StoreAddress
 * @property {number} pincode
 * @property {number} latitude
 * @property {string} [email]
 * @property {string} updated_at
 * @property {string} [version]
 * @property {number} longitude
 * @property {string} [landmark]
 * @property {string} created_at
 * @property {string} city
 * @property {string} contact_person
 * @property {string} phone
 * @property {string} country
 * @property {string} address_type
 * @property {string} [area]
 * @property {string} state
 * @property {string} [address2]
 * @property {string} address_category
 * @property {string} country_code
 * @property {string} address1
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
 * @typedef Document
 * @property {string} legal_name
 * @property {boolean} verified
 * @property {string} value
 * @property {string} [url]
 * @property {string} ds_type
 */
/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */
/**
 * @typedef EInvoicePortalDetails
 * @property {string} [user]
 * @property {string} [username]
 * @property {string} [password]
 */
/**
 * @typedef StoreMeta
 * @property {Object} [ewaybill_portal_details]
 * @property {StoreGstCredentials} gst_credentials
 * @property {string} display_name
 * @property {Object} [additional_contact_details]
 * @property {Object} [product_return_config]
 * @property {string} stage
 * @property {StoreDocuments} [documents]
 * @property {string[]} [notification_emails]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {string} [gst_number]
 * @property {Object[]} [timing]
 */
/**
 * @typedef Store
 * @property {string} pincode
 * @property {number} latitude
 * @property {string} [mall_area]
 * @property {string} [updated_at]
 * @property {StoreAddress} [store_address_json]
 * @property {string} login_username
 * @property {boolean} [is_enabled_for_recon]
 * @property {number} longitude
 * @property {string} [vat_no]
 * @property {number} company_id
 * @property {string} location_type
 * @property {string} created_at
 * @property {string} city
 * @property {number} [parent_store_id]
 * @property {string} store_email
 * @property {string} contact_person
 * @property {number} phone
 * @property {StoreMeta} meta
 * @property {string} [mall_name]
 * @property {string} country
 * @property {boolean} [is_active]
 * @property {string[]} [brand_store_tags]
 * @property {boolean} [is_archived]
 * @property {string} state
 * @property {Object} [brand_id]
 * @property {string} fulfillment_channel
 * @property {number} [alohomora_user_id]
 * @property {string} [store_active_from]
 * @property {string} [code]
 * @property {number} [packaging_material_count]
 * @property {string} [address2]
 * @property {string} [order_integration_id]
 * @property {string} name
 * @property {string} s_id
 * @property {string} address1
 */
/**
 * @typedef AffiliateMeta
 * @property {string} [due_date]
 * @property {number} [quantity]
 * @property {number} [loyalty_discount]
 * @property {string} [channel_shipment_id]
 * @property {string} [coupon_code]
 * @property {number} [employee_discount]
 * @property {number} [size_level_total_qty]
 * @property {boolean} [is_priority]
 * @property {string} [box_type]
 * @property {string} [channel_order_id]
 * @property {string} [order_item_id]
 */
/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_bag_id
 * @property {number} [loyalty_discount]
 * @property {number} [employee_discount]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 */
/**
 * @typedef BagGSTDetails
 * @property {number} igst_tax_percentage
 * @property {string} [gstin_code]
 * @property {number} tax_collected_at_source
 * @property {string} gst_tag
 * @property {boolean} [is_default_hsn_code]
 * @property {number} cgst_tax_percentage
 * @property {number} sgst_tax_percentage
 * @property {string} igst_gst_fee
 * @property {string} sgst_gst_fee
 * @property {string} cgst_gst_fee
 * @property {number} gst_tax_percentage
 * @property {number} value_of_good
 * @property {string} hsn_code
 * @property {number} gst_fee
 * @property {number} brand_calculated_amount
 * @property {string} hsn_code_id
 */
/**
 * @typedef PDFLinks
 * @property {string} [po_invoice]
 * @property {string} [invoice]
 * @property {string} [invoice_a6]
 * @property {string} [label_a6]
 * @property {string} [invoice_pos]
 * @property {string} label_type
 * @property {string} [label_a4]
 * @property {string} [label_pos]
 * @property {string} [invoice_a4]
 * @property {string} [credit_note_url]
 * @property {string} [label]
 * @property {string} [b2b]
 * @property {string} invoice_type
 */
/**
 * @typedef EInvoice
 * @property {string} [error_code]
 * @property {string} [acknowledge_date]
 * @property {string} [signed_invoice]
 * @property {string} [error_message]
 * @property {string} [irn]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_qr_code]
 */
/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */
/**
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */
/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_min]
 * @property {string} [t_max]
 */
/**
 * @typedef LockData
 * @property {boolean} [locked]
 * @property {string} [lock_message]
 * @property {boolean} [mto]
 */
/**
 * @typedef BuyerDetails
 * @property {string} city
 * @property {number} pincode
 * @property {string} state
 * @property {string} address
 * @property {string} name
 * @property {string} gstin
 * @property {string} [ajio_site_id]
 */
/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */
/**
 * @typedef ShipmentMeta
 * @property {Object} [b2c_buyer_details]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {Object} [dp_options]
 * @property {Object} [external]
 * @property {string} [dp_sort_key]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {number} weight
 * @property {Formatted} [formatted]
 * @property {number} [return_store_node]
 * @property {string} [dp_id]
 * @property {boolean} same_store_available
 * @property {Object} [ewaybill_info]
 * @property {Object} [return_details]
 * @property {number} [shipment_volumetric_weight]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {LockData} [lock_data]
 * @property {Object} [bag_weight]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [packaging_name]
 * @property {string} [fulfilment_priority_text]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {number} [shipment_weight]
 * @property {string} [awb_number]
 * @property {DebugInfo} [debug_info]
 * @property {string} [due_date]
 * @property {string} [po_number]
 * @property {string} [return_awb_number]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [dp_name]
 * @property {string} [order_type]
 * @property {string} [store_invoice_updated_date]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {string} [marketplace_store_id]
 * @property {string} [box_type]
 */
/**
 * @typedef AffiliateDetails
 * @property {string} [ad_id]
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_store_id
 * @property {string} [company_affiliate_tag]
 * @property {PDFLinks} [pdf_links]
 * @property {ShipmentMeta} shipment_meta
 * @property {string} affiliate_shipment_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {string} [affiliate_id]
 */
/**
 * @typedef Brand
 * @property {string} company
 * @property {string} brand_name
 * @property {boolean} [credit_note_allowed]
 * @property {string} [script_last_ran]
 * @property {string} [logo]
 * @property {number} brand_id
 * @property {boolean} [is_virtual_invoice]
 * @property {number} [modified_on]
 * @property {string} [invoice_prefix]
 * @property {string} [start_date]
 * @property {string} [pickup_location]
 * @property {number} [credit_note_expiry_days]
 * @property {number} [created_on]
 */
/**
 * @typedef BagDetailsPlatformResponse
 * @property {string} journey_type
 * @property {Item} item
 * @property {number} [quantity]
 * @property {string[]} [tags]
 * @property {number[]} [original_bag_list]
 * @property {Object} [qc_required]
 * @property {boolean} [restore_coupon]
 * @property {Object[]} [reasons]
 * @property {Object} [parent_promo_bags]
 * @property {Article} article
 * @property {BagReturnableCancelableStatus} status
 * @property {string} [identifier]
 * @property {Object} [restore_promos]
 * @property {BagStatusHistory} current_status
 * @property {BagMeta} [meta]
 * @property {BagStatusHistory[]} bag_status
 * @property {string} [shipment_id]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {Dates} [dates]
 * @property {ArticleDetails} [article_details]
 * @property {string} [entity_type]
 * @property {number} [line_number]
 * @property {string} [display_name]
 * @property {number} [bag_update_time]
 * @property {string} [b_type]
 * @property {Prices} prices
 * @property {Store} [ordering_store]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {BagStatusHistory} current_operational_status
 * @property {Object[]} [applied_promos]
 * @property {BagGSTDetails} gst_details
 * @property {string} [order_integration_id]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {number} [no_of_bags_order]
 * @property {Brand} brand
 * @property {string} [seller_identifier]
 * @property {string} [operational_status]
 * @property {number} b_id
 */
/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} error
 */
/**
 * @typedef Page1
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} current
 * @property {string} page_type
 * @property {number} size
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
 * @property {string} [error]
 * @property {string} [message]
 */
/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */
/**
 * @typedef ErrorResponse1
 * @property {number} status
 * @property {string} message
 * @property {string} [error_trace]
 */
/**
 * @typedef StoreReassign
 * @property {string} [affiliate_id]
 * @property {string} [item_id]
 * @property {string} [affiliate_order_id]
 * @property {number[]} [reason_ids]
 * @property {number} store_id
 * @property {string} [affiliate_bag_id]
 * @property {string} [set_id]
 * @property {string} [mongo_article_id]
 * @property {number} [bag_id]
 * @property {string} [fynd_order_id]
 */
/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef Entities
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [id]
 * @property {string} reason_text
 */
/**
 * @typedef UpdateShipmentLockPayload
 * @property {Entities[]} entities
 * @property {string} action
 * @property {string} entity_type
 * @property {string} action_type
 */
/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */
/**
 * @typedef Bags
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_bag_id]
 * @property {number} [bag_id]
 */
/**
 * @typedef CheckResponse
 * @property {boolean} [is_shipment_locked]
 * @property {string} [affiliate_id]
 * @property {boolean} [lock_status]
 * @property {string} [status]
 * @property {string} [affiliate_shipment_id]
 * @property {OriginalFilter} [original_filter]
 * @property {string} [shipment_id]
 * @property {Bags[]} [bags]
 * @property {boolean} [is_bag_locked]
 */
/**
 * @typedef UpdateShipmentLockResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CheckResponse[]} [check_response]
 */
/**
 * @typedef AnnouncementResponse
 * @property {string} [created_at]
 * @property {string} [to_datetime]
 * @property {string} [logo_url]
 * @property {string} [title]
 * @property {string} [from_datetime]
 * @property {number} id
 * @property {string} [platform_id]
 * @property {number} [company_id]
 * @property {string} [platform_name]
 * @property {string} [description]
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
 * @property {boolean} status
 * @property {string} call_id
 */
/**
 * @typedef Products
 * @property {number} [quantity]
 * @property {string} [identifier]
 * @property {number} [line_number]
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
 * @property {number} [quantity]
 * @property {string} [identifier]
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
 * @property {Products[]} [products]
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier
 * @property {ReasonsData} [reasons]
 */
/**
 * @typedef StatuesRequest
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [status]
 * @property {string} [exclude_bags_next_state]
 */
/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [task]
 * @property {boolean} [unlock_before_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [force_transition]
 */
/**
 * @typedef ShipmentsResponse
 * @property {number} [status]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {string} [identifier]
 * @property {string} [code]
 * @property {Object} [final_state]
 * @property {Object} [meta]
 * @property {string} [stack_trace]
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
 * @property {string} [address1]
 * @property {string} last_name
 * @property {number} mobile
 * @property {string} state
 * @property {number} phone
 * @property {string} pincode
 * @property {string} city
 * @property {string} email
 * @property {string} country
 * @property {string} first_name
 * @property {string} [address2]
 */
/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */
/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */
/**
 * @typedef AffiliateBag
 * @property {number} store_id
 * @property {number} discount
 * @property {Object} identifier
 * @property {number} company_id
 * @property {number} transfer_price
 * @property {number} price_marked
 * @property {MarketPlacePdf} [pdf_links]
 * @property {Object} affiliate_meta
 * @property {number} avl_qty
 * @property {number} price_effective
 * @property {number} unit_price
 * @property {number} item_id
 * @property {number} delivery_charge
 * @property {string} _id
 * @property {string} sku
 * @property {number} amount_paid
 * @property {string} item_size
 * @property {string} seller_identifier
 * @property {string} modified_on
 * @property {string} hsn_code_id
 * @property {string} fynd_store_id
 * @property {string} affiliate_store_id
 * @property {number} quantity
 */
/**
 * @typedef OrderPriority
 * @property {number} [fulfilment_priority]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [affiliate_priority_code]
 */
/**
 * @typedef ArticleDetails1
 * @property {string} _id
 * @property {Object} category
 * @property {Object} dimension
 * @property {Object} attributes
 * @property {Object} weight
 * @property {number} brand_id
 * @property {number} quantity
 */
/**
 * @typedef ShipmentDetails
 * @property {number} fulfillment_id
 * @property {string} affiliate_shipment_id
 * @property {number} [dp_id]
 * @property {ArticleDetails1[]} articles
 * @property {string} [box_type]
 * @property {number} shipments
 * @property {Object} [meta]
 */
/**
 * @typedef LocationDetails
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 * @property {string} fulfillment_type
 */
/**
 * @typedef ShipmentConfig
 * @property {string} payment_mode
 * @property {ShipmentDetails[]} shipment
 * @property {string} source
 * @property {LocationDetails} [location_details]
 * @property {string} identifier
 * @property {string} journey
 * @property {string} action
 * @property {string} to_pincode
 */
/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */
/**
 * @typedef OrderInfo
 * @property {string} [affiliate_order_id]
 * @property {OrderUser} shipping_address
 * @property {number} cod_charges
 * @property {string} payment_mode
 * @property {UserData} user
 * @property {string} [coupon]
 * @property {AffiliateBag[]} bags
 * @property {number} delivery_charges
 * @property {OrderUser} billing_address
 * @property {Object} [payment]
 * @property {OrderPriority} [order_priority]
 * @property {ShipmentData} [shipment]
 * @property {number} order_value
 * @property {Object} items
 * @property {number} discount
 */
/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} name
 * @property {string} value
 */
/**
 * @typedef AffiliateAppConfig
 * @property {string} created_at
 * @property {string} id
 * @property {string} name
 * @property {string} updated_at
 * @property {string} secret
 * @property {string} owner
 * @property {string} token
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} [description]
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
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */
/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */
/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */
/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
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
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */
/**
 * @typedef OrderConfig
 * @property {string} [bag_end_state]
 * @property {boolean} [create_user]
 * @property {Affiliate} affiliate
 * @property {string} [store_lookup]
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
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef ActionInfo
 * @property {string} display_text
 * @property {string} slug
 * @property {string} description
 * @property {number} id
 */
/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */
/**
 * @typedef HistoryDict
 * @property {string} user
 * @property {string} [l3_detail]
 * @property {string} [l1_detail]
 * @property {string} [l2_detail]
 * @property {string} type
 * @property {string} message
 * @property {string} [ticket_url]
 * @property {string} createdat
 * @property {number} [bag_id]
 * @property {string} [ticket_id]
 */
/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} activity_history
 */
/**
 * @typedef ErrorDetail
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef PostHistoryData
 * @property {string} user_name
 * @property {string} message
 */
/**
 * @typedef PostHistoryFilters
 * @property {string} shipment_id
 * @property {string} [identifier]
 * @property {string} [line_number]
 */
/**
 * @typedef PostActivityHistory
 * @property {PostHistoryData} data
 * @property {PostHistoryFilters[]} filters
 */
/**
 * @typedef PostHistoryDict
 * @property {PostActivityHistory} activity_history
 */
/**
 * @typedef PostShipmentHistory
 * @property {PostHistoryDict[]} [activity_history]
 */
/**
 * @typedef SmsDataPayload
 * @property {string} brand_name
 * @property {string} payment_mode
 * @property {number} shipment_id
 * @property {string} customer_name
 * @property {string} order_id
 * @property {number} amount_paid
 * @property {number} phone_number
 * @property {string} message
 * @property {string} country_code
 */
/**
 * @typedef SendSmsPayload
 * @property {SmsDataPayload} [data]
 * @property {string} slug
 * @property {number} bag_id
 */
/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */
/**
 * @typedef ShipmentDetail
 * @property {string} [remarks]
 * @property {string} [status]
 * @property {string} [shipment_id]
 * @property {number[]} [bag_list]
 * @property {number} id
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
 * @property {string[]} [errors]
 * @property {OrderDetails} order_details
 */
/**
 * @typedef OrderStatusResult
 * @property {string} success
 * @property {OrderStatusData[]} [result]
 */
/**
 * @typedef ManualAssignDPToShipment
 * @property {number} dp_id
 * @property {string} qc_required
 * @property {string} order_type
 * @property {string[]} [shipment_ids]
 */
/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */
/**
 * @typedef Tax
 * @property {string} name
 * @property {Object[]} [breakup]
 * @property {Object} amount
 * @property {number} rate
 */
/**
 * @typedef Charge
 * @property {Tax} [tax]
 * @property {string} name
 * @property {string} type
 * @property {string} [code]
 * @property {Object} amount
 */
/**
 * @typedef BillingInfo
 * @property {string} primary_mobile_number
 * @property {string} first_name
 * @property {string} [customer_code]
 * @property {string} address1
 * @property {string} [gender]
 * @property {string} primary_email
 * @property {string} pincode
 * @property {string} [alternate_mobile_number]
 * @property {string} [house_no]
 * @property {string} [last_name]
 * @property {string} [external_customer_code]
 * @property {string} [alternate_email]
 * @property {string} [middle_name]
 * @property {string} state
 * @property {string} [state_code]
 * @property {string} [floor_no]
 * @property {string} [title]
 * @property {string} city
 * @property {string} country
 * @property {string} [country_code]
 * @property {string} [address2]
 */
/**
 * @typedef PaymentMethod
 * @property {string} name
 * @property {Object} [transaction_data]
 * @property {string} refund_by
 * @property {number} amount
 * @property {string} mode
 * @property {Object} [meta]
 * @property {string} collect_by
 */
/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */
/**
 * @typedef ShippingInfo
 * @property {string} [landmark]
 * @property {string} primary_mobile_number
 * @property {string} first_name
 * @property {string} [customer_code]
 * @property {string} [shipping_type]
 * @property {string} address1
 * @property {string} [gender]
 * @property {string} [address_type]
 * @property {string} primary_email
 * @property {string} pincode
 * @property {string} [alternate_mobile_number]
 * @property {string} [house_no]
 * @property {string} [last_name]
 * @property {Object} [geo_location]
 * @property {string} [external_customer_code]
 * @property {string} [alternate_email]
 * @property {string} [middle_name]
 * @property {string} state
 * @property {string} [state_code]
 * @property {string} [floor_no]
 * @property {Object[]} [slot]
 * @property {string} [title]
 * @property {string} city
 * @property {string} country
 * @property {string} [country_code]
 * @property {string} [address2]
 */
/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */
/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {string} [external_line_id]
 * @property {number} [quantity]
 * @property {string} [custom_messasge]
 * @property {Object} [meta]
 * @property {string} seller_identifier
 */
/**
 * @typedef ProcessingDates
 * @property {string} [pack_by_date]
 * @property {Object} [dp_pickup_slot]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_by_date]
 * @property {string} [confirm_by_date]
 * @property {string} [dispatch_after_date]
 */
/**
 * @typedef Shipment
 * @property {LineItem[]} line_items
 * @property {string} [external_shipment_id]
 * @property {ProcessingDates} [processing_dates]
 * @property {number} [priority]
 * @property {number} location_id
 * @property {Object} [meta]
 */
/**
 * @typedef CreateOrderAPI
 * @property {Charge[]} [charges]
 * @property {Object} [currency_info]
 * @property {string} [external_order_id]
 * @property {BillingInfo} billing_info
 * @property {PaymentInfo} payment_info
 * @property {ShippingInfo} shipping_info
 * @property {string} [external_creation_date]
 * @property {TaxInfo} [tax_info]
 * @property {Shipment[]} shipments
 * @property {Object} [meta]
 */
/**
 * @typedef CreateOrderErrorReponse
 * @property {number} status
 * @property {string} [request_id]
 * @property {Object} [info]
 * @property {string} [exception]
 * @property {string} message
 * @property {string} [code]
 * @property {string} [meta]
 * @property {string} [stack_trace]
 */
/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */
/**
 * @typedef PaymentMethods
 * @property {string} [mode]
 * @property {string} [refund_by]
 * @property {string} [collect_by]
 */
/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [mode_of_payment]
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [source]
 */
/**
 * @typedef CreateChannelConfig
 * @property {boolean} [location_reassignment]
 * @property {DpConfiguration} [dp_configuration]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {string[]} [lock_states]
 * @property {Object} [logo_url]
 * @property {string} [shipment_assignment]
 */
/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */
/**
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_inserted]
 * @property {boolean} [is_upserted]
 */
/**
 * @typedef UploadConsent
 * @property {string} manifest_id
 * @property {string} consent_url
 */
/**
 * @typedef PlatformOrderUpdate
 * @property {string} order_id
 */
/**
 * @typedef ResponseDetail
 * @property {boolean} [success]
 * @property {string[]} [message]
 */
/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */
/**
 * @typedef OrderStatus
 * @property {string} end_date
 * @property {string} start_date
 * @property {FyndOrderIdList[]} [order_details]
 * @property {number} mobile
 */
/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */
/**
 * @typedef CreateSearchKeyword
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {SearchKeywordResult} result
 */
/**
 * @typedef GetSearchWordsData
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} [uid]
 * @property {string[]} [words]
 * @property {Object} [result]
 */
/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */
/**
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef AutocompletePageAction
 * @property {string} [url]
 * @property {string} [type]
 * @property {Object} [query]
 * @property {Object} [params]
 */
/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */
/**
 * @typedef AutocompleteResult
 * @property {Object} [_custom_json]
 * @property {Media} [logo]
 * @property {AutocompleteAction} [action]
 * @property {string} [display]
 */
/**
 * @typedef CreateAutocompleteKeyword
 * @property {AutocompleteResult[]} [results]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 */
/**
 * @typedef GetAutocompleteWordsData
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 * @property {string[]} [words]
 */
/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object} [_custom_json]
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {string[]} [words]
 */
/**
 * @typedef ProductBundleItem
 * @property {boolean} [auto_select]
 * @property {number} product_uid
 * @property {number} max_quantity
 * @property {boolean} [auto_add_to_cart]
 * @property {number} min_quantity
 * @property {boolean} [allow_remove]
 */
/**
 * @typedef ProductBundleRequest
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {string} slug
 * @property {boolean} [same_store_assignment]
 * @property {string} name
 * @property {boolean} is_active
 * @property {Object} [created_by]
 * @property {number} [company_id]
 * @property {string} choice
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */
/**
 * @typedef GetProductBundleCreateResponse
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {string} slug
 * @property {boolean} [same_store_assignment]
 * @property {string} name
 * @property {boolean} is_active
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {number} [company_id]
 * @property {string} choice
 * @property {string} [logo]
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
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {string} slug
 * @property {boolean} [same_store_assignment]
 * @property {string} name
 * @property {boolean} is_active
 * @property {number} [company_id]
 * @property {string} choice
 * @property {string} [logo]
 * @property {Object} [modified_by]
 */
/**
 * @typedef Size
 * @property {boolean} [is_available]
 * @property {string} [display]
 * @property {string} [value]
 * @property {number} [quantity]
 */
/**
 * @typedef Price
 * @property {number} [min_marked]
 * @property {number} [max_effective]
 * @property {number} [max_marked]
 * @property {number} [min_effective]
 * @property {string} [currency]
 */
/**
 * @typedef LimitedProductData
 * @property {Object} [identifier]
 * @property {string[]} [images]
 * @property {string} [slug]
 * @property {string} [country_of_origin]
 * @property {Object} [attributes]
 * @property {number} [uid]
 * @property {number} [quantity]
 * @property {string} [name]
 * @property {string[]} [sizes]
 * @property {string} [short_description]
 * @property {Object} [price]
 * @property {string} [item_code]
 */
/**
 * @typedef GetProducts
 * @property {boolean} [auto_select]
 * @property {number} [product_uid]
 * @property {number} [max_quantity]
 * @property {boolean} [auto_add_to_cart]
 * @property {Size[]} [sizes]
 * @property {number} [min_quantity]
 * @property {boolean} [allow_remove]
 * @property {Price} [price]
 * @property {LimitedProductData} [product_details]
 */
/**
 * @typedef GetProductBundleResponse
 * @property {GetProducts[]} [products]
 * @property {string[]} [page_visibility]
 * @property {Object} [meta]
 * @property {string} [slug]
 * @property {boolean} [same_store_assignment]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {string} [choice]
 * @property {string} [logo]
 */
/**
 * @typedef Guide
 * @property {Meta} [meta]
 */
/**
 * @typedef ValidateSizeGuide
 * @property {number} [brand_id]
 * @property {string} [image]
 * @property {Guide} [guide]
 * @property {string} [modified_on]
 * @property {string} [subtitle]
 * @property {string} title
 * @property {Object} [created_by]
 * @property {string} name
 * @property {string} [description]
 * @property {boolean} [active]
 * @property {string} [tag]
 * @property {string} [id]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */
/**
 * @typedef GetMultiSizeGuide
 * @property {number} [brand_id]
 * @property {string} [image]
 * @property {Object} [guide]
 * @property {string} [modified_on]
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {string} [description]
 * @property {boolean} [active]
 * @property {string} [tag]
 * @property {number} [company_id]
 * @property {string} [_id]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */
/**
 * @typedef ListSizeGuide
 * @property {GetMultiSizeGuide[]} [items]
 * @property {Object} [page]
 */
/**
 * @typedef SizeGuideResponse
 * @property {number} [brand_id]
 * @property {Object} [guide]
 * @property {string} [modified_on]
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {string} [id]
 * @property {boolean} [active]
 * @property {string} [tag]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */
/**
 * @typedef ApplicationItemSEO
 * @property {Object} [title]
 * @property {Object} [description]
 */
/**
 * @typedef MetaFields
 * @property {Object} key
 * @property {Object} value
 */
/**
 * @typedef ApplicationItemMOQ
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 */
/**
 * @typedef ApplicationItemMeta
 * @property {ApplicationItemSEO} [seo]
 * @property {boolean} [is_gift]
 * @property {boolean} [is_cod]
 * @property {Object} [_custom_json]
 * @property {MetaFields[]} [_custom_meta]
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
 * @property {Object} [title]
 * @property {Object} [description]
 */
/**
 * @typedef MOQData
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 * @property {number} [maximum]
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
 * @property {Object[]} data
 * @property {Object[]} [condition]
 * @property {Object[]} [values]
 */
/**
 * @typedef AttributeDetailsGroup
 * @property {string} display_type
 * @property {string} [slug]
 * @property {string} name
 * @property {boolean} is_active
 * @property {string} [key]
 * @property {string} [logo]
 * @property {string} [unit]
 * @property {number} priority
 */
/**
 * @typedef AppConfigurationDetail
 * @property {string} app_id
 * @property {string} slug
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string[]} [template_slugs]
 * @property {string} [logo]
 * @property {boolean} is_default
 * @property {number} priority
 */
/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */
/**
 * @typedef PageResponseType
 * @property {boolean} has_next
 * @property {number} current
 * @property {number} next
 * @property {number} total_count
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
 * @property {string} app_id
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_default
 * @property {string} default_key
 * @property {number} priority
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
 * @property {string} [key]
 * @property {string[]} [filter_types]
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
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [detail]
 * @property {Object} [variant]
 * @property {Object} [compare]
 * @property {Object} [similar]
 */
/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */
/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {number} priority
 */
/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */
/**
 * @typedef ConfigurationBucketPoints
 * @property {number} [end]
 * @property {string} [display]
 * @property {number} [start]
 */
/**
 * @typedef ConfigurationListingFilterValue
 * @property {string} [sort]
 * @property {string} [value]
 * @property {Object[]} [map_values]
 * @property {Object} [map]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [condition]
 */
/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {string} [display_name]
 * @property {string} key
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} [logo]
 * @property {string} type
 * @property {number} priority
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
 * @property {number} max
 * @property {number} min
 */
/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} display_type
 * @property {string} name
 * @property {boolean} is_active
 * @property {ProductSize} size
 * @property {string} key
 * @property {string} [logo]
 * @property {number} priority
 */
/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */
/**
 * @typedef ConfigurationProductConfig
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {boolean} is_active
 * @property {ProductSize} [size]
 * @property {string} key
 * @property {string} [logo]
 * @property {number} priority
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
 * @property {string} app_id
 * @property {string} [modified_on]
 * @property {ConfigurationListing} [listing]
 * @property {Object} [created_by]
 * @property {ConfigurationProduct} [product]
 * @property {string} config_type
 * @property {string} [created_on]
 * @property {string} [type]
 * @property {Object} [modified_by]
 * @property {string} [config_id]
 */
/**
 * @typedef AppCatalogConfiguration
 * @property {string} app_id
 * @property {string} [modified_on]
 * @property {ConfigurationListing} [listing]
 * @property {Object} [created_by]
 * @property {ConfigurationProduct} [product]
 * @property {string} [id]
 * @property {string} config_type
 * @property {string} [created_on]
 * @property {string} [type]
 * @property {Object} [modified_by]
 * @property {string} [config_id]
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
 * @property {string} app_id
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} [id]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} config_type
 * @property {string} [config_id]
 */
/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {boolean} [is_default]
 * @property {EntityConfiguration} [data]
 */
/**
 * @typedef ProductFiltersKey
 * @property {string} [kind]
 * @property {string} display
 * @property {string} name
 * @property {string[]} [operators]
 * @property {string} [logo]
 */
/**
 * @typedef ProductFiltersValue
 * @property {number} [count]
 * @property {number} [max]
 * @property {Object} value
 * @property {string} [currency_code]
 * @property {string} [query_format]
 * @property {boolean} is_selected
 * @property {string} display
 * @property {number} [selected_min]
 * @property {string} [display_format]
 * @property {number} [selected_max]
 * @property {string} [currency_symbol]
 * @property {number} [min]
 */
/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */
/**
 * @typedef ProductSortOn
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {Object} operators
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [user_id]
 */
/**
 * @typedef CollectionSchedule
 * @property {string} [cron]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 */
/**
 * @typedef CollectionQuery
 * @property {string} op
 * @property {Object[]} value
 * @property {string} attribute
 */
/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */
/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */
/**
 * @typedef CollectionBanner
 * @property {CollectionImage} landscape
 * @property {CollectionImage} portrait
 */
/**
 * @typedef SeoDetail
 * @property {string} [title]
 * @property {string} [description]
 */
/**
 * @typedef CreateCollection
 * @property {UserInfo} [created_by]
 * @property {string} name
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [is_visible]
 * @property {CollectionQuery[]} [query]
 * @property {string} app_id
 * @property {Object} [_locale_language]
 * @property {string} [sort_on]
 * @property {CollectionBadge} [badge]
 * @property {CollectionImage} logo
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [meta]
 * @property {Object} [_custom_json]
 * @property {string} slug
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [published]
 * @property {string} type
 * @property {CollectionBanner} banners
 * @property {boolean} [allow_sort]
 * @property {number} [priority]
 * @property {SeoDetail} [seo]
 * @property {boolean} [allow_facets]
 * @property {string[]} [tags]
 * @property {UserInfo} [modified_by]
 */
/**
 * @typedef BannerImage
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */
/**
 * @typedef CollectionCreateResponse
 * @property {string} [name]
 * @property {Object} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {string} [app_id]
 * @property {string} [sort_on]
 * @property {string[]} [tag]
 * @property {Object} [badge]
 * @property {BannerImage} [logo]
 * @property {Object} [cron]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [meta]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {string} [type]
 * @property {ImageUrls} [banners]
 * @property {boolean} [allow_sort]
 * @property {number} [priority]
 * @property {boolean} [allow_facets]
 */
/**
 * @typedef Media1
 * @property {Object} [meta]
 * @property {string} url
 * @property {string} [type]
 */
/**
 * @typedef GetCollectionDetailNest
 * @property {string} [name]
 * @property {string} [uid]
 * @property {Object} [_schedule]
 * @property {Action} [action]
 * @property {CollectionQuery[]} [query]
 * @property {string} [app_id]
 * @property {string[]} [tag]
 * @property {Object} [badge]
 * @property {Media1} [logo]
 * @property {Object} [cron]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [meta]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {string} [type]
 * @property {ImageUrls} [banners]
 * @property {boolean} [allow_sort]
 * @property {number} [priority]
 * @property {boolean} [allow_facets]
 */
/**
 * @typedef CollectionListingFilterType
 * @property {boolean} [is_selected]
 * @property {string} [display]
 * @property {string} [name]
 */
/**
 * @typedef CollectionListingFilterTag
 * @property {boolean} [is_selected]
 * @property {string} [display]
 * @property {string} [name]
 */
/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */
/**
 * @typedef GetCollectionListingResponse
 * @property {GetCollectionDetailNest[]} [items]
 * @property {CollectionListingFilter} [filters]
 * @property {Page} [page]
 */
/**
 * @typedef CollectionDetailResponse
 * @property {string} [name]
 * @property {string} [uid]
 * @property {Object} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {string} [app_id]
 * @property {string[]} [tag]
 * @property {Object} [badge]
 * @property {Media1} [logo]
 * @property {Object} [cron]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [meta]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {string} [type]
 * @property {ImageUrls} [banners]
 * @property {boolean} [allow_sort]
 * @property {number} [priority]
 * @property {boolean} [allow_facets]
 */
/**
 * @typedef UpdateCollection
 * @property {string} [name]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [is_visible]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [_locale_language]
 * @property {string} [sort_on]
 * @property {CollectionBadge} [badge]
 * @property {CollectionImage} [logo]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [meta]
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [published]
 * @property {string} [type]
 * @property {CollectionBanner} [banners]
 * @property {boolean} [allow_sort]
 * @property {number} [priority]
 * @property {SeoDetail} [seo]
 * @property {boolean} [allow_facets]
 * @property {string[]} [tags]
 * @property {UserInfo} [modified_by]
 */
/**
 * @typedef ItemQueryForUserCollection
 * @property {string} [action]
 * @property {number} [item_id]
 */
/**
 * @typedef CollectionItemRequest
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 */
/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */
/**
 * @typedef ProductDetailAttribute
 * @property {string} [type]
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details]
 * @property {string} [title]
 */
/**
 * @typedef ProductBrand
 * @property {Media1} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 */
/**
 * @typedef Price1
 * @property {number} [max]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [min]
 */
/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */
/**
 * @typedef ProductListingDetail
 * @property {string} [discount]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Object} [attributes]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [short_description]
 * @property {Object} [teaser_tag]
 * @property {string[]} [tryouts]
 * @property {Media1[]} [medias]
 * @property {Object} [promo_meta]
 * @property {string} [color]
 * @property {number} [rating_count]
 * @property {ProductBrand} [brand]
 * @property {string} [image_nature]
 * @property {string} slug
 * @property {string} [description]
 * @property {boolean} [has_variant]
 * @property {string} [type]
 * @property {ProductListingPrice} [price]
 * @property {boolean} [sellable]
 * @property {string} [item_type]
 * @property {string} [product_online_date]
 * @property {string[]} [similars]
 * @property {number} [rating]
 * @property {string[]} [highlights]
 * @property {string} [item_code]
 */
/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductFilters[]} [filters]
 * @property {Page} [page]
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [sellable_count]
 * @property {number} [out_of_stock_count]
 */
/**
 * @typedef CatalogInsightBrand
 * @property {string} [name]
 * @property {number} [total_articles]
 * @property {number} [article_freshness]
 * @property {number} [total_sizes]
 * @property {number} [available_articles]
 * @property {number} [available_sizes]
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
 * @property {boolean} [enabled]
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {number[]} [store_ids]
 * @property {string} [platform]
 */
/**
 * @typedef CompanyOptIn
 * @property {Object} [modified_by]
 * @property {string} opt_level
 * @property {number} modified_on
 * @property {Object} [created_by]
 * @property {boolean} enabled
 * @property {number[]} brand_ids
 * @property {string} platform
 * @property {number} company_id
 * @property {number} created_on
 * @property {number[]} store_ids
 */
/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */
/**
 * @typedef OptinCompanyDetail
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef CompanyBrandDetail
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {string} [brand_name]
 * @property {number} [total_article]
 */
/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OptinCompanyMetrics
 * @property {string} [company]
 * @property {number} [store]
 * @property {number} [brand]
 */
/**
 * @typedef StoreDetail
 * @property {Object} [address]
 * @property {Object} [timing]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object[]} [documents]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {Object[]} [additional_contacts]
 * @property {number} [company_id]
 * @property {Object} [manager]
 * @property {string} [created_on]
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
 * @property {string} [format]
 * @property {boolean} [mandatory]
 * @property {AttributeSchemaRange} [range]
 * @property {boolean} [multi]
 * @property {string} type
 * @property {string[]} [allowed_values]
 */
/**
 * @typedef AttributeMasterFilter
 * @property {string[]} [depends_on]
 * @property {number} [priority]
 * @property {boolean} indexing
 */
/**
 * @typedef GenderDetail
 * @property {string[]} [departments]
 * @property {AttributeMasterMeta} [meta]
 * @property {AttributeMasterDetails} [details]
 * @property {string} [slug]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {AttributeMaster} [schema]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {boolean} [is_nested]
 * @property {string} [logo]
 * @property {AttributeMasterFilter} [filters]
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
 * @property {string} [message]
 * @property {number} [status]
 */
/**
 * @typedef DepartmentCreateUpdate
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {string} name
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {number} priority_order
 * @property {Object} [platforms]
 * @property {string} logo
 * @property {string[]} [tags]
 * @property {string} [_cls]
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
 * @property {string} [uid]
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [_id]
 */
/**
 * @typedef GetDepartment
 * @property {number} [page_size]
 * @property {string} [item_type]
 * @property {string} [modified_on]
 * @property {string} [slug]
 * @property {UserSerializer} [created_by]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {number} [page_no]
 * @property {number} [priority_order]
 * @property {string} [search]
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
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
 * @property {string} [message]
 * @property {number} [status]
 */
/**
 * @typedef UserDetail
 * @property {string} username
 * @property {string} [contact]
 * @property {boolean} [super_user]
 * @property {string} user_id
 */
/**
 * @typedef DepartmentModel
 * @property {string} [verified_on]
 * @property {string} modified_on
 * @property {Object} [_custom_json]
 * @property {Object} [slug]
 * @property {UserDetail} [created_by]
 * @property {Object} name
 * @property {UserDetail} [verified_by]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {Object[]} [synonyms]
 * @property {number} priority_order
 * @property {Object} [_id]
 * @property {Object} logo
 * @property {string} created_on
 * @property {UserDetail} [modified_by]
 * @property {Object} [_cls]
 */
/**
 * @typedef ProductTemplate
 * @property {string[]} [categories]
 * @property {string[]} [departments]
 * @property {boolean} [is_expirable]
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {Object} [created_by]
 * @property {string} [description]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {string} [tag]
 * @property {boolean} [is_archived]
 * @property {string[]} [attributes]
 * @property {Object[]} [attributes_schema]
 * @property {boolean} is_physical
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */
/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TemplateDetails
 * @property {string[]} [categories]
 * @property {string[]} [departments]
 * @property {boolean} [is_expirable]
 * @property {string} slug
 * @property {string} [id]
 * @property {string} [description]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {string} [tag]
 * @property {boolean} [is_archived]
 * @property {string[]} [attributes]
 * @property {Object[]} [attributes_schema]
 * @property {boolean} is_physical
 * @property {string} [logo]
 */
/**
 * @typedef Properties
 * @property {Object} [hsn_code]
 * @property {Object} [multi_size]
 * @property {Object} [name]
 * @property {Object} [command]
 * @property {Object} [trader_type]
 * @property {Object} [short_description]
 * @property {Object} [variants]
 * @property {Object} [teaser_tag]
 * @property {Object} [custom_order]
 * @property {Object} [sizes]
 * @property {Object} [size_guide]
 * @property {Object} [tags]
 * @property {Object} [no_of_boxes]
 * @property {Object} [slug]
 * @property {Object} [description]
 * @property {Object} [is_active]
 * @property {Object} [media]
 * @property {Object} [product_publish]
 * @property {Object} [trader]
 * @property {Object} [product_group_tag]
 * @property {Object} [item_type]
 * @property {Object} [category_slug]
 * @property {Object} [country_of_origin]
 * @property {Object} [brand_uid]
 * @property {Object} [return_config]
 * @property {Object} [is_dependent]
 * @property {Object} [currency]
 * @property {Object} [highlights]
 * @property {Object} [item_code]
 */
/**
 * @typedef GlobalValidation
 * @property {Object} [definitions]
 * @property {string} [title]
 * @property {string} [description]
 * @property {Properties} [properties]
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
 * @typedef ProductDownloadItemsData
 * @property {string} [type]
 * @property {string[]} [brand]
 * @property {string[]} [templates]
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
 * @property {string} [trigger_on]
 * @property {VerifiedBy} [created_by]
 * @property {number} [seller_id]
 * @property {string} [id]
 * @property {Object} [template_tags]
 * @property {string} [task_id]
 * @property {string} [status]
 * @property {string} [completed_on]
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
 * @typedef Media2
 * @property {string} logo
 * @property {string} landscape
 * @property {string} portrait
 */
/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id]
 * @property {string} name
 */
/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [google]
 */
/**
 * @typedef Hierarchy
 * @property {number} l2
 * @property {number} department
 * @property {number} l1
 */
/**
 * @typedef CategoryRequestBody
 * @property {number[]} departments
 * @property {string[]} [tryouts]
 * @property {string} [slug]
 * @property {string} name
 * @property {boolean} is_active
 * @property {Media2} [media]
 * @property {string[]} [synonyms]
 * @property {number} level
 * @property {CategoryMapping} [marketplaces]
 * @property {Hierarchy[]} [hierarchy]
 * @property {number} [priority]
 */
/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
 */
/**
 * @typedef Category
 * @property {number[]} departments
 * @property {string} [modified_on]
 * @property {string[]} [tryouts]
 * @property {string} [slug]
 * @property {Object} [created_by]
 * @property {string} name
 * @property {number} [uid]
 * @property {Media2} [media]
 * @property {string[]} [synonyms]
 * @property {number} level
 * @property {boolean} is_active
 * @property {string} [id]
 * @property {CategoryMapping} [marketplaces]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {Hierarchy[]} [hierarchy]
 * @property {number} [priority]
 */
/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
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
 * @typedef CustomOrder
 * @property {number} [manufacturing_time]
 * @property {boolean} [is_custom_order]
 * @property {string} [manufacturing_time_unit]
 */
/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */
/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {string} [type]
 * @property {Object} name
 */
/**
 * @typedef TaxIdentifier
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 */
/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {string} [requester]
 * @property {boolean} [multi_size]
 * @property {string} name
 * @property {number} [uid]
 * @property {Object} [attributes]
 * @property {boolean} [is_image_less_product]
 * @property {string} [action]
 * @property {string} [short_description]
 * @property {Object} [variant_media]
 * @property {boolean} [is_set]
 * @property {Object} [variants]
 * @property {number[]} departments
 * @property {TeaserTag} [teaser_tag]
 * @property {NetQuantity} [net_quantity]
 * @property {CustomOrder} [custom_order]
 * @property {Object[]} sizes
 * @property {string} [size_guide]
 * @property {string[]} [tags]
 * @property {Object} [variant_group]
 * @property {number} [no_of_boxes]
 * @property {Object} [_custom_json]
 * @property {string} slug
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {Media1[]} [media]
 * @property {ProductPublish} [product_publish]
 * @property {Trader[]} trader
 * @property {string} [bulk_job_id]
 * @property {Object} [change_request_id]
 * @property {string[]} [product_group_tag]
 * @property {string} category_slug
 * @property {string} template_tag
 * @property {TaxIdentifier} tax_identifier
 * @property {string} item_type
 * @property {string} country_of_origin
 * @property {number} brand_uid
 * @property {number} company_id
 * @property {ReturnConfig} return_config
 * @property {boolean} [is_dependent]
 * @property {string} currency
 * @property {string[]} [highlights]
 * @property {string} item_code
 */
/**
 * @typedef NetQuantityResponse
 * @property {number} [value]
 * @property {string} [unit]
 */
/**
 * @typedef Logo
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 */
/**
 * @typedef ProductPublished
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */
/**
 * @typedef Image
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 */
/**
 * @typedef ReturnConfigResponse
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef Product
 * @property {string} [modified_on]
 * @property {boolean} [multi_size]
 * @property {string} [hsn_code]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object} [attributes]
 * @property {Object} [created_by]
 * @property {number[]} [all_company_ids]
 * @property {boolean} [is_image_less_product]
 * @property {Object[]} [all_sizes]
 * @property {Object} [moq]
 * @property {string[]} [l3_mapping]
 * @property {number} [category_uid]
 * @property {string} [short_description]
 * @property {Object} [variant_media]
 * @property {boolean} [is_set]
 * @property {Object} [variants]
 * @property {string} [verified_on]
 * @property {number[]} [departments]
 * @property {Object} [teaser_tag]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {Object} [custom_order]
 * @property {boolean} [is_expirable]
 * @property {Object} [category]
 * @property {Object[]} [sizes]
 * @property {string} [size_guide]
 * @property {string} [stage]
 * @property {string} [color]
 * @property {string} [created_on]
 * @property {string[]} [tags]
 * @property {Object} [variant_group]
 * @property {number} [no_of_boxes]
 * @property {Brand} [brand]
 * @property {string} [pending]
 * @property {Object} [_custom_json]
 * @property {string} [image_nature]
 * @property {string} [slug]
 * @property {string} [id]
 * @property {string} [description]
 * @property {boolean} [is_physical]
 * @property {Media1[]} [media]
 * @property {ProductPublished} [product_publish]
 * @property {boolean} [is_active]
 * @property {Object[]} [trader]
 * @property {VerifiedBy} [verified_by]
 * @property {string[]} [all_identifiers]
 * @property {string[]} [product_group_tag]
 * @property {string} [category_slug]
 * @property {string} [template_tag]
 * @property {string} [item_type]
 * @property {Object} [tax_identifier]
 * @property {Image[]} [images]
 * @property {string} [country_of_origin]
 * @property {string} [primary_color]
 * @property {number} [brand_uid]
 * @property {number} [company_id]
 * @property {ReturnConfigResponse} [return_config]
 * @property {boolean} [is_dependent]
 * @property {string} [currency]
 * @property {Object} [modified_by]
 * @property {string[]} [highlights]
 * @property {string} [item_code]
 */
/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductVariants
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Media1[]} [media]
 * @property {number} [brand_uid]
 * @property {number} [category_uid]
 * @property {string} [item_code]
 */
/**
 * @typedef ProductVariantsResponse
 * @property {Page} [page]
 * @property {ProductVariants[]} [variants]
 */
/**
 * @typedef AttributeMasterSerializer
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {string[]} departments
 * @property {string} [raw_key]
 * @property {AttributeMaster} schema
 * @property {Object} [synonyms]
 * @property {boolean} [variant]
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {string[]} [tags]
 * @property {string} [unit]
 * @property {string} [suggestion]
 * @property {string} slug
 * @property {string} [description]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterDetails} details
 * @property {boolean} [is_nested]
 * @property {AttributeMasterFilter} filters
 * @property {Object} [modified_by]
 */
/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */
/**
 * @typedef ProductCreateUpdate
 * @property {string} [requester]
 * @property {boolean} [multi_size]
 * @property {Object} name
 * @property {number} [uid]
 * @property {boolean} [is_image_less_product]
 * @property {string} [action]
 * @property {string} [short_description]
 * @property {Object} [variant_media]
 * @property {boolean} [is_set]
 * @property {Object} [variants]
 * @property {number[]} departments
 * @property {TeaserTag} [teaser_tag]
 * @property {NetQuantity} [net_quantity]
 * @property {CustomOrder} [custom_order]
 * @property {string} [size_guide]
 * @property {string[]} [tags]
 * @property {Object} [variant_group]
 * @property {number} [no_of_boxes]
 * @property {Object} [_custom_json]
 * @property {string} slug
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {Media1[]} [media]
 * @property {ProductPublish} [product_publish]
 * @property {Trader[]} trader
 * @property {string} [bulk_job_id]
 * @property {Object} [change_request_id]
 * @property {string[]} [product_group_tag]
 * @property {string} category_slug
 * @property {string} template_tag
 * @property {TaxIdentifier} tax_identifier
 * @property {string} item_type
 * @property {string} country_of_origin
 * @property {number} brand_uid
 * @property {number} company_id
 * @property {ReturnConfig} return_config
 * @property {boolean} [is_dependent]
 * @property {string} currency
 * @property {string[]} [highlights]
 * @property {Object} item_code
 */
/**
 * @typedef SingleProductResponse
 * @property {Product} [data]
 */
/**
 * @typedef ValidateIdentifier
 * @property {string} gtin_type
 * @property {boolean} [primary]
 * @property {string} gtin_value
 */
/**
 * @typedef AllSizes
 * @property {number} item_length
 * @property {Object} size
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {string} item_dimensions_unit_of_measure
 * @property {number} item_height
 * @property {number} item_weight
 * @property {Object} item_weight_unit_of_measure
 * @property {number} item_width
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
 * @typedef UserInfo1
 * @property {string} [email]
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [user_id]
 */
/**
 * @typedef BulkJob
 * @property {number} [succeed]
 * @property {string} [modified_on]
 * @property {string} [template_tag]
 * @property {UserInfo1} [created_by]
 * @property {Object[]} [cancelled_records]
 * @property {boolean} [is_active]
 * @property {Object[]} [failed_records]
 * @property {string} [custom_template_tag]
 * @property {number} [cancelled]
 * @property {string} [file_path]
 * @property {number} company_id
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {string} [tracking_url]
 * @property {number} [total]
 * @property {string} created_on
 * @property {UserInfo1} [modified_by]
 */
/**
 * @typedef BulkResponse
 * @property {string} [modified_on]
 * @property {UserInfo1} [created_by]
 * @property {boolean} [is_active]
 * @property {string} batch_id
 * @property {string} created_on
 * @property {UserInfo1} [modified_by]
 */
/**
 * @typedef UserDetail1
 * @property {string} [username]
 * @property {string} [full_name]
 * @property {string} [user_id]
 */
/**
 * @typedef ProductBulkRequest
 * @property {number} [total]
 * @property {number} [succeed]
 * @property {ProductTemplate} [template]
 * @property {string} [template_tag]
 * @property {string} [modified_on]
 * @property {string[]} [cancelled_records]
 * @property {string[]} [failed_records]
 * @property {boolean} [is_active]
 * @property {UserDetail1} [created_by]
 * @property {string} [file_path]
 * @property {number} [cancelled]
 * @property {number} [company_id]
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {UserDetail1} [modified_by]
 */
/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkProductRequest
 * @property {number} company_id
 * @property {Object[]} data
 * @property {string} batch_id
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
 * @property {string} [username]
 * @property {number} [company_id]
 * @property {string} [user_id]
 */
/**
 * @typedef Items
 * @property {number} [total]
 * @property {number} [succeed]
 * @property {string} [modified_on]
 * @property {number} [retry]
 * @property {UserCommon} [created_by]
 * @property {string[]} [cancelled_records]
 * @property {string[]} [failed_records]
 * @property {boolean} [is_active]
 * @property {string} [id]
 * @property {string} [file_path]
 * @property {number} [cancelled]
 * @property {number} [company_id]
 * @property {number} [failed]
 * @property {string} [tracking_url]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {UserCommon} [modified_by]
 */
/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
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
 * @property {SizeDistribution} size_distribution
 * @property {string} [name]
 * @property {number} [quantity]
 */
/**
 * @typedef GTIN
 * @property {string} gtin_type
 * @property {boolean} [primary]
 * @property {Object} gtin_value
 */
/**
 * @typedef InvSize
 * @property {string} [expiration_date]
 * @property {number} [item_weight]
 * @property {number} price_effective
 * @property {number} [item_length]
 * @property {InventorySet} [set]
 * @property {number} quantity
 * @property {number} [price_transfer]
 * @property {Object} size
 * @property {GTIN[]} identifiers
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} store_code
 * @property {number} [item_height]
 * @property {string} currency
 * @property {boolean} [is_set]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [price]
 * @property {number} [item_width]
 */
/**
 * @typedef ItemQuery
 * @property {number} [uid]
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 */
/**
 * @typedef InventoryRequest
 * @property {InvSize[]} sizes
 * @property {ItemQuery} item
 * @property {number} company_id
 */
/**
 * @typedef InventoryResponse
 * @property {number} [price_effective]
 * @property {number} [sellable_quantity]
 * @property {number} [item_id]
 * @property {number} [quantity]
 * @property {number} [price_transfer]
 * @property {string} [uid]
 * @property {string} [seller_identifier]
 * @property {string} [inventory_updated_on]
 * @property {Object} [identifiers]
 * @property {string} [size]
 * @property {Object} [store]
 * @property {string} [currency]
 * @property {number} [price]
 */
/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyMeta
 * @property {number} id
 */
/**
 * @typedef ManufacturerResponse
 * @property {string} address
 * @property {boolean} is_default
 * @property {string} name
 */
/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef Quantities
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [order_committed]
 */
/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */
/**
 * @typedef DimensionResponse
 * @property {number} length
 * @property {number} width
 * @property {number} height
 * @property {boolean} is_default
 * @property {string} unit
 */
/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} type
 * @property {string} name
 */
/**
 * @typedef WeightResponse
 * @property {number} shipping
 * @property {boolean} is_default
 * @property {string} unit
 */
/**
 * @typedef PriceMeta
 * @property {number} marked
 * @property {number} transfer
 * @property {string} [updated_at]
 * @property {number} effective
 * @property {Object} [tp_notes]
 * @property {string} currency
 */
/**
 * @typedef ReturnConfig1
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef InventorySellerResponse
 * @property {InventorySet} [set]
 * @property {UserSerializer} [created_by]
 * @property {string} uid
 * @property {string} seller_identifier
 * @property {boolean} [is_set]
 * @property {CompanyMeta} company
 * @property {boolean} [track_inventory]
 * @property {string} [expiration_date]
 * @property {Object} identifier
 * @property {number} item_id
 * @property {ManufacturerResponse} manufacturer
 * @property {string} size
 * @property {StoreMeta} store
 * @property {number} total_quantity
 * @property {string} [stage]
 * @property {string} [trace_id]
 * @property {Object} [fynd_meta]
 * @property {Quantities} [quantities]
 * @property {BrandMeta} brand
 * @property {DimensionResponse} dimension
 * @property {string} [added_on_store]
 * @property {Object} [_custom_json]
 * @property {Object} [meta]
 * @property {boolean} [is_active]
 * @property {Trader1[]} [trader]
 * @property {string} fynd_item_code
 * @property {WeightResponse} weight
 * @property {PriceMeta} price
 * @property {Object} [raw_meta]
 * @property {boolean} fragile
 * @property {Object} [tax_identifier]
 * @property {string} country_of_origin
 * @property {string} fynd_article_code
 * @property {ReturnConfig1} [return_config]
 * @property {string[]} [tags]
 * @property {UserSerializer} [modified_by]
 */
/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkInventoryGetItems
 * @property {number} [total]
 * @property {number} [succeed]
 * @property {string} [modified_on]
 * @property {string[]} [cancelled_records]
 * @property {Object} [created_by]
 * @property {string[]} [failed_records]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {number} [cancelled]
 * @property {string} [file_path]
 * @property {number} [company_id]
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */
/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventoryJobPayload
 * @property {string} [expiration_date]
 * @property {number} [price_marked]
 * @property {number} [price_effective]
 * @property {string} [trace_id]
 * @property {number} [quantity]
 * @property {string[]} [tags]
 * @property {string} seller_identifier
 * @property {string} store_code
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [total_quantity]
 * @property {string} [currency]
 * @property {number} [price]
 * @property {string} [item_weight_unit_of_measure]
 */
/**
 * @typedef InventoryBulkRequest
 * @property {InventoryJobPayload[]} sizes
 * @property {number} company_id
 * @property {Object} [user]
 * @property {string} batch_id
 */
/**
 * @typedef InventoryExportQuantityFilter
 * @property {number} [max]
 * @property {string} operators
 * @property {number} [min]
 */
/**
 * @typedef InventoryExportFilter
 * @property {string} [from_date]
 * @property {InventoryExportQuantityFilter} [quantity]
 * @property {number[]} [brand_ids]
 * @property {string} [to_date]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef InventoryExportRequest
 * @property {string[]} [notification_emails]
 * @property {string} [type]
 * @property {InventoryExportFilter} filters
 * @property {string[]} [data]
 */
/**
 * @typedef InventoryExportResponse
 * @property {string} [trigger_on]
 * @property {string} [status]
 * @property {string} [_id]
 * @property {string} task_id
 * @property {number} seller_id
 * @property {string} [created_on]
 * @property {Object} [request_params]
 */
/**
 * @typedef InventoryExportAdvanceOption
 * @property {boolean} [notification]
 * @property {string} [from_date]
 * @property {InventoryExportQuantityFilter} [quantity]
 * @property {number[]} [brand_ids]
 * @property {string} [to_date]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef InventoryExportJob
 * @property {string} [url]
 * @property {string} [completed_on]
 * @property {string[]} [notification_emails]
 * @property {string} [status]
 * @property {string} task_id
 * @property {number} seller_id
 * @property {string} type
 * @property {InventoryExportAdvanceOption} [filters]
 */
/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */
/**
 * @typedef ManufacturerResponse1
 * @property {string} [address]
 * @property {boolean} [is_default]
 * @property {string} [name]
 */
/**
 * @typedef ArticleStoreResponse
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef Quantity
 * @property {number} [count]
 */
/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [damaged]
 * @property {Quantity} [sellable]
 * @property {Quantity} [not_available]
 * @property {Quantity} [order_committed]
 */
/**
 * @typedef BrandMeta1
 * @property {number} [id]
 * @property {string} [name]
 */
/**
 * @typedef DimensionResponse1
 * @property {number} [length]
 * @property {number} [height]
 * @property {number} [width]
 * @property {string} [unit]
 */
/**
 * @typedef Trader2
 * @property {string[]} [address]
 * @property {string} [type]
 * @property {string} [name]
 */
/**
 * @typedef WeightResponse1
 * @property {number} [shipping]
 * @property {string} [unit]
 */
/**
 * @typedef PriceArticle
 * @property {number} [marked]
 * @property {number} [transfer]
 * @property {number} [effective]
 * @property {Object} [tp_notes]
 * @property {string} [currency]
 */
/**
 * @typedef ReturnConfig2
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef GetInventories
 * @property {UserSerializer} [created_by]
 * @property {string} [uid]
 * @property {string} [seller_identifier]
 * @property {boolean} [is_set]
 * @property {CompanyMeta1} [company]
 * @property {boolean} [track_inventory]
 * @property {string} [expiration_date]
 * @property {Object} [identifier]
 * @property {number} [item_id]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {string} [size]
 * @property {ArticleStoreResponse} [store]
 * @property {number} [total_quantity]
 * @property {string} [stage]
 * @property {string} [trace_id]
 * @property {DateMeta} [date_meta]
 * @property {Object} [platforms]
 * @property {QuantitiesArticle} [quantities]
 * @property {BrandMeta1} [brand]
 * @property {DimensionResponse1} [dimension]
 * @property {string} [id]
 * @property {Trader2[]} [trader]
 * @property {WeightResponse1} [weight]
 * @property {PriceArticle} [price]
 * @property {Object} [tax_identifier]
 * @property {string} [country_of_origin]
 * @property {string} [inventory_updated_on]
 * @property {ReturnConfig2} [return_config]
 * @property {string[]} [tags]
 * @property {UserSerializer} [modified_by]
 */
/**
 * @typedef GetInventoriesResponse
 * @property {GetInventories[]} [items]
 * @property {Page} [page]
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
 * @property {string} [expiration_date]
 * @property {number} [price_marked]
 * @property {number} [price_effective]
 * @property {string} [trace_id]
 * @property {string} seller_identifier
 * @property {number} store_id
 * @property {number} [total_quantity]
 * @property {string[]} [tags]
 */
/**
 * @typedef InventoryRequestSchemaV2
 * @property {Object} [meta]
 * @property {number} company_id
 * @property {InventoryPayload[]} [payload]
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
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */
/**
 * @typedef HsnUpsert
 * @property {number} [threshold2]
 * @property {boolean} [tax_on_esp]
 * @property {string} hs2_code
 * @property {string} hsn_code
 * @property {number} [tax2]
 * @property {number} threshold1
 * @property {number} tax1
 * @property {boolean} tax_on_mrp
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {number} company_id
 */
/**
 * @typedef HsnCodesObject
 * @property {number} [threshold2]
 * @property {boolean} [tax_on_esp]
 * @property {string} [hs2_code]
 * @property {string} [modified_on]
 * @property {string} [hsn_code]
 * @property {number} [tax2]
 * @property {string} [id]
 * @property {number} [threshold1]
 * @property {number} [tax1]
 * @property {boolean} [tax_on_mrp]
 * @property {number} [company_id]
 */
/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */
/**
 * @typedef PageResponse
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {string} [current]
 * @property {number} [size]
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
 * @property {string} effective_date
 * @property {number} threshold
 * @property {number} [cess]
 * @property {number} rate
 */
/**
 * @typedef HSNDataInsertV2
 * @property {string} country_code
 * @property {string} reporting_hsn
 * @property {string} [modified_on]
 * @property {string} hsn_code
 * @property {Object} [created_by]
 * @property {string} description
 * @property {TaxSlab[]} taxes
 * @property {string} [created_on]
 * @property {string} type
 * @property {Object} [modified_by]
 */
/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */
/**
 * @typedef BrandItem
 * @property {string[]} [departments]
 * @property {string} [discount]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Media} [logo]
 * @property {ImageUrls} [banners]
 */
/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */
/**
 * @typedef Department
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {number} [priority_order]
 * @property {Media} [logo]
 */
/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */
/**
 * @typedef DepartmentIdentifier
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef ThirdLevelChild
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Object[]} [childs]
 * @property {ImageUrls} [banners]
 */
/**
 * @typedef SecondLevelChild
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {ThirdLevelChild[]} [childs]
 * @property {ImageUrls} [banners]
 */
/**
 * @typedef Child
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {SecondLevelChild[]} [childs]
 * @property {ImageUrls} [banners]
 */
/**
 * @typedef CategoryItems
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Child[]} [childs]
 * @property {ImageUrls} [banners]
 */
/**
 * @typedef DepartmentCategoryTree
 * @property {CategoryItems[]} [items]
 * @property {string} [department]
 */
/**
 * @typedef CategoryListingResponse
 * @property {DepartmentIdentifier[]} [departments]
 * @property {DepartmentCategoryTree[]} [data]
 */
/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} [operators]
 * @property {Page} page
 * @property {ProductFilters[]} [filters]
 */
/**
 * @typedef ProductDetail
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Object} [attributes]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [short_description]
 * @property {Object} [teaser_tag]
 * @property {string[]} [tryouts]
 * @property {Media1[]} [medias]
 * @property {Object} [promo_meta]
 * @property {string} [color]
 * @property {number} [rating_count]
 * @property {ProductBrand} [brand]
 * @property {string} [image_nature]
 * @property {string} slug
 * @property {string} [description]
 * @property {boolean} [has_variant]
 * @property {string} [type]
 * @property {string} [item_type]
 * @property {string} [product_online_date]
 * @property {string[]} [similars]
 * @property {number} [rating]
 * @property {string[]} [highlights]
 * @property {string} [item_code]
 */
/**
 * @typedef InventoryPage
 * @property {boolean} [has_next]
 * @property {number} item_total
 * @property {string} [next_id]
 * @property {string} type
 * @property {boolean} [has_previous]
 */
/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */
/**
 * @typedef LocationTimingSerializer
 * @property {number} [minute]
 * @property {number} [hour]
 */
/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSerializer} [opening]
 * @property {LocationTimingSerializer} [closing]
 */
/**
 * @typedef UserSerializer1
 * @property {string} [username]
 * @property {string} [contact]
 * @property {string} [user_id]
 */
/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */
/**
 * @typedef GetAddressSerializer
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {string} [city]
 * @property {number} [longitude]
 * @property {number} [latitude]
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [address2]
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
 * @typedef GetCompanySerializer
 * @property {string} [business_type]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 * @property {string} [modified_on]
 * @property {UserSerializer2} [created_by]
 * @property {string} [name]
 * @property {UserSerializer2} [verified_by]
 * @property {number} [uid]
 * @property {string} [company_type]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {UserSerializer2} [modified_by]
 */
/**
 * @typedef InvoiceCredSerializer
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [enabled]
 */
/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */
/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {string} [name]
 * @property {SellerPhoneNumber} mobile_no
 */
/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */
/**
 * @typedef GetLocationSerializer
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [modified_on]
 * @property {UserSerializer1} [created_by]
 * @property {string} name
 * @property {number} [uid]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {GetAddressSerializer} address
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {GetCompanySerializer} [company]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {string[]} [notification_emails]
 * @property {Object} [_custom_json]
 * @property {UserSerializer1} [verified_by]
 * @property {Document[]} [documents]
 * @property {string} display_name
 * @property {string} [phone_number]
 * @property {string} [store_type]
 * @property {string} code
 * @property {string} [store_code]
 * @property {UserSerializer1} [modified_by]
 * @property {LocationIntegrationType} [integration_type]
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
 * @typedef ApplicationDepartment
 * @property {string} app_id
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {number} uid
 * @property {string} [logo]
 */
/**
 * @typedef ApplicationDepartmentListingResponse
 * @property {ApplicationDepartment[]} [items]
 * @property {Page} page
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
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */
/**
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {number} [rate]
 * @property {string} [effective_date]
 */
/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string} [business_info]
 * @property {Object} [warnings]
 * @property {string} [created_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string[]} [notification_emails]
 * @property {string} company_type
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [verified_on]
 * @property {string} [stage]
 * @property {BusinessDetails} [business_details]
 * @property {string} [name]
 * @property {ContactDetails} [contact_details]
 * @property {UserSerializer} [created_by]
 * @property {string} business_type
 * @property {UserSerializer} [verified_by]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {Document[]} [documents]
 * @property {boolean} [franchise_enabled]
 * @property {string} [modified_on]
 * @property {number} uid
 * @property {UserSerializer} [modified_by]
 * @property {Object} [_custom_json]
 * @property {string} [mode]
 */
/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {number} [rate]
 * @property {string} [effective_date]
 */
/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} [country_code]
 * @property {string} country
 * @property {number} latitude
 * @property {string} address1
 * @property {string} address_type
 * @property {string} state
 * @property {number} longitude
 * @property {string} [landmark]
 * @property {number} pincode
 * @property {string} [address2]
 * @property {string} city
 */
/**
 * @typedef UpdateCompany
 * @property {string[]} [notification_emails]
 * @property {string} [company_type]
 * @property {string} [business_info]
 * @property {ContactDetails} [contact_details]
 * @property {Object} [warnings]
 * @property {string} [business_type]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {Document[]} [documents]
 * @property {string} [reject_reason]
 * @property {BusinessDetails} [business_details]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {boolean} [franchise_enabled]
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
 * @property {DocumentsObj} [product]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [brand]
 */
/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */
/**
 * @typedef GetBrandResponseSerializer
 * @property {Object} [warnings]
 * @property {string} [created_on]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [logo]
 * @property {string} [slug_key]
 * @property {string} [verified_on]
 * @property {string} [stage]
 * @property {string[]} [synonyms]
 * @property {string} [reject_reason]
 * @property {string} name
 * @property {string} [description]
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [verified_by]
 * @property {Object} [_locale_language]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {Object} [_custom_json]
 * @property {string} [mode]
 */
/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {Object} [_locale_language]
 * @property {number} [company_id]
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} logo
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {string} [description]
 * @property {string} [brand_tier]
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
 * @property {string[]} [notification_emails]
 * @property {string} company_type
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {string} [stage]
 * @property {string} business_type
 * @property {CompanyDetails} [details]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [market_channels]
 * @property {UserSerializer} [modified_by]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer} [created_by]
 */
/**
 * @typedef CompanyBrandSerializer
 * @property {CompanySerializer} [company]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {string} [stage]
 * @property {Object} [warnings]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {string} [reject_reason]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {UserSerializer} [created_by]
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
 * @typedef HolidayDateSerializer
 * @property {string} start_date
 * @property {string} end_date
 */
/**
 * @typedef HolidaySchemaSerializer
 * @property {string} title
 * @property {HolidayDateSerializer} date
 * @property {string} holiday_type
 */
/**
 * @typedef AddressSerializer
 * @property {string} [country_code]
 * @property {string} [country]
 * @property {number} latitude
 * @property {string} [address1]
 * @property {string} [address_type]
 * @property {string} [state]
 * @property {number} longitude
 * @property {string} [landmark]
 * @property {number} [pincode]
 * @property {string} [address2]
 * @property {string} [city]
 */
/**
 * @typedef LocationSerializer
 * @property {string} [store_type]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string[]} [notification_emails]
 * @property {number} company
 * @property {string} code
 * @property {string} [stage]
 * @property {Object} [warnings]
 * @property {number} [uid]
 * @property {AddressSerializer} address
 * @property {string} display_name
 * @property {LocationManagerSerializer} [manager]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {Document[]} [documents]
 * @property {Object} [_custom_json]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} name
 * @property {ProductReturnConfigSerializer} [product_return_config]
 */
/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */
/**
 * @typedef _ArticleQuery
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {number[]} [ignored_stores]
 */
/**
 * @typedef _ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */
/**
 * @typedef _AssignStoreArticle
 * @property {_ArticleQuery} [query]
 * @property {string} [group_id]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [quantity]
 * @property {Object} [meta]
 */
/**
 * @typedef AssignStoreRequestValidator
 * @property {number} [company_id]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [channel_identifier]
 * @property {string} [channel_type]
 * @property {string} [app_id]
 * @property {string} [pincode]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef AssignStoreResponseSerializer
 * @property {string} [s_city]
 * @property {string} [_id]
 * @property {number} [index]
 * @property {string} [size]
 * @property {number} [company_id]
 * @property {boolean} [status]
 * @property {string} [uid]
 * @property {number} [item_id]
 * @property {number} [price_effective]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [quantity]
 * @property {string} [store_pincode]
 * @property {number} [store_id]
 * @property {number} [price_marked]
 * @property {Object} [meta]
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
 * @property {boolean} [only_deployed]
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
 * @property {string} [slug]
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
 * @property {InformationPhone[]} [phone]
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
 * @property {string} [name]
 * @property {string} [description]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [mobile_logo]
 * @property {SecureUrl} [favicon]
 * @property {SecureUrl} [banner]
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {string} [_id]
 * @property {string} [slug]
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
 * @typedef Validity
 * @property {number} [priority]
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
 * @property {string[]} [codes]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [networks]
 * @property {string[]} [types]
 */
/**
 * @typedef UsesRemaining
 * @property {number} [total]
 * @property {number} [user]
 * @property {number} [app]
 */
/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */
/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */
/**
 * @typedef Restrictions
 * @property {PriceRange} [price_range]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {number[]} [ordering_stores]
 * @property {string} [user_type]
 * @property {Object} [payments]
 * @property {UsesRestriction} [uses]
 * @property {boolean} [coupon_allowed]
 * @property {PostOrder} [post_order]
 * @property {number[]} [user_groups]
 * @property {string[]} [platforms]
 */
/**
 * @typedef State
 * @property {boolean} [is_public]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 */
/**
 * @typedef Ownership
 * @property {string} payable_category
 * @property {string} payable_by
 */
/**
 * @typedef DisplayMetaDict
 * @property {string} [subtitle]
 * @property {string} [title]
 */
/**
 * @typedef DisplayMeta
 * @property {string} [title]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [auto]
 * @property {DisplayMetaDict} [apply]
 * @property {string} [description]
 */
/**
 * @typedef RuleDefinition
 * @property {string} applicable_on
 * @property {boolean} [is_exact]
 * @property {string} [currency_code]
 * @property {boolean} [auto_apply]
 * @property {string} value_type
 * @property {string[]} [scope]
 * @property {string} type
 * @property {string} calculate_on
 */
/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */
/**
 * @typedef Validation
 * @property {boolean} [anonymous]
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 */
/**
 * @typedef CouponSchedule
 * @property {string} [start]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [cron]
 */
/**
 * @typedef Rule
 * @property {number} [value]
 * @property {number} [discount_qty]
 * @property {number} [min]
 * @property {number} [max]
 * @property {number} [key]
 */
/**
 * @typedef CouponAdd
 * @property {Validity} validity
 * @property {CouponAuthor} [author]
 * @property {string} code
 * @property {CouponDateMeta} [date_meta]
 * @property {Restrictions} [restrictions]
 * @property {State} [state]
 * @property {Ownership} ownership
 * @property {DisplayMeta} display_meta
 * @property {RuleDefinition} rule_definition
 * @property {CouponAction} [action]
 * @property {Validation} [validation]
 * @property {string[]} [tags]
 * @property {Identifier} identifiers
 * @property {CouponSchedule} [_schedule]
 * @property {string} type_slug
 * @property {Rule[]} rule
 */
/**
 * @typedef CouponsResponse
 * @property {CouponAdd} [items]
 * @property {Page} [page]
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
 * @property {Validity} validity
 * @property {CouponAuthor} [author]
 * @property {string} code
 * @property {CouponDateMeta} [date_meta]
 * @property {Restrictions} [restrictions]
 * @property {State} [state]
 * @property {Ownership} ownership
 * @property {DisplayMeta} display_meta
 * @property {RuleDefinition} rule_definition
 * @property {CouponAction} [action]
 * @property {Validation} [validation]
 * @property {string[]} [tags]
 * @property {Identifier} identifiers
 * @property {CouponSchedule} [_schedule]
 * @property {string} type_slug
 * @property {Rule[]} rule
 */
/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive]
 * @property {CouponSchedule} [schedule]
 */
/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
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
 * @typedef UsesRemaining1
 * @property {number} [total]
 * @property {number} [user]
 */
/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [maximum]
 * @property {UsesRemaining1} [remaining]
 */
/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */
/**
 * @typedef UserRegistered
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef Restrictions1
 * @property {string[]} [user_id]
 * @property {boolean} [anonymous_users]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {UsesRestriction1} uses
 * @property {number} [order_quantity]
 * @property {PostOrder1} [post_order]
 * @property {UserRegistered} [user_registered]
 * @property {number[]} [user_groups]
 * @property {string[]} [platforms]
 */
/**
 * @typedef PromotionSchedule
 * @property {string} start
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {boolean} published
 * @property {number} [duration]
 * @property {string} [cron]
 */
/**
 * @typedef DisplayMeta1
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [offer_text]
 * @property {string} [offer_label]
 */
/**
 * @typedef CompareObject
 * @property {number} [greater_than_equals]
 * @property {number} [equals]
 * @property {number} [less_than_equals]
 * @property {number} [less_than]
 * @property {number} [greater_than]
 */
/**
 * @typedef ItemCriteria
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_id]
 * @property {number[]} [item_company]
 * @property {string[]} [available_zones]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_exclude_company]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_exclude_brand]
 * @property {string[]} [buy_rules]
 * @property {boolean} [all_items]
 * @property {number[]} [item_category]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_category]
 * @property {string[]} [product_tags]
 * @property {number[]} [item_store]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {CompareObject} [cart_quantity]
 * @property {CompareObject} [cart_total]
 * @property {string[]} [item_exclude_sku]
 * @property {string[]} [item_size]
 */
/**
 * @typedef DiscountOffer
 * @property {number} [max_offer_quantity]
 * @property {number} [min_offer_quantity]
 * @property {number} [max_usage_per_transaction]
 * @property {string} [code]
 * @property {number} [max_discount_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [discount_amount]
 * @property {number} [discount_price]
 * @property {boolean} [apportion_discount]
 * @property {number} [discount_percentage]
 */
/**
 * @typedef DiscountRule
 * @property {string} discount_type
 * @property {ItemCriteria} item_criteria
 * @property {string} buy_condition
 * @property {DiscountOffer} offer
 */
/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */
/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
 */
/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */
/**
 * @typedef PromotionListItem
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAuthor} [author]
 * @property {Restrictions1} [restrictions]
 * @property {Object} [_custom_json]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 * @property {string} [code]
 * @property {DisplayMeta1} display_meta
 * @property {string} promo_group
 * @property {DiscountRule[]} discount_rules
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {boolean} [apply_all_discount]
 * @property {PromotionAction} [post_order_action]
 * @property {string} promotion_type
 * @property {Ownership1} ownership
 * @property {string} [currency]
 * @property {Visibility} [visiblility]
 * @property {string} mode
 * @property {boolean} [stackable]
 */
/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PromotionAdd
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAuthor} [author]
 * @property {Restrictions1} [restrictions]
 * @property {Object} [_custom_json]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 * @property {string} [code]
 * @property {DisplayMeta1} display_meta
 * @property {string} promo_group
 * @property {DiscountRule[]} discount_rules
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {boolean} [apply_all_discount]
 * @property {PromotionAction} [post_order_action]
 * @property {string} promotion_type
 * @property {Ownership1} ownership
 * @property {string} [currency]
 * @property {Visibility} [visiblility]
 * @property {string} mode
 * @property {boolean} [stackable]
 */
/**
 * @typedef PromotionUpdate
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAuthor} [author]
 * @property {Restrictions1} [restrictions]
 * @property {Object} [_custom_json]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 * @property {string} [code]
 * @property {DisplayMeta1} display_meta
 * @property {string} promo_group
 * @property {DiscountRule[]} discount_rules
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {boolean} [apply_all_discount]
 * @property {PromotionAction} [post_order_action]
 * @property {string} promotion_type
 * @property {Ownership1} ownership
 * @property {string} [currency]
 * @property {Visibility} [visiblility]
 * @property {string} mode
 * @property {boolean} [stackable]
 */
/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */
/**
 * @typedef ActivePromosResponse
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [created_on]
 * @property {string} [example]
 * @property {boolean} [is_hidden]
 * @property {string} [entity_slug]
 * @property {string} [subtitle]
 * @property {string} [entity_type]
 * @property {string} [description]
 * @property {string} [modified_on]
 */
/**
 * @typedef CartItem
 * @property {string} product_id
 * @property {string} size
 * @property {number} [quantity]
 */
/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef RawBreakup
 * @property {number} [convenience_fee]
 * @property {number} [coupon]
 * @property {number} [vog]
 * @property {number} [discount]
 * @property {number} [subtotal]
 * @property {number} [cod_charge]
 * @property {number} [mrp_total]
 * @property {number} [delivery_charge]
 * @property {number} [fynd_cash]
 * @property {number} [total]
 * @property {number} [gst_charges]
 * @property {number} [you_saved]
 */
/**
 * @typedef CouponBreakup
 * @property {number} [coupon_value]
 * @property {boolean} [is_applied]
 * @property {string} [code]
 * @property {string} [title]
 * @property {number} [value]
 * @property {string} [uid]
 * @property {number} [max_discount_value]
 * @property {string} [coupon_type]
 * @property {string} [description]
 * @property {string} [sub_title]
 * @property {number} [minimum_cart_value]
 * @property {string} [message]
 * @property {string} [type]
 */
/**
 * @typedef DisplayBreakup
 * @property {string} [currency_symbol]
 * @property {number} [value]
 * @property {string} [currency_code]
 * @property {string[]} [message]
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef LoyaltyPoints
 * @property {number} [applicable]
 * @property {number} [total]
 * @property {boolean} [is_applied]
 * @property {string} [description]
 */
/**
 * @typedef CartBreakup
 * @property {RawBreakup} [raw]
 * @property {CouponBreakup} [coupon]
 * @property {DisplayBreakup[]} [display]
 * @property {LoyaltyPoints} [loyalty_points]
 */
/**
 * @typedef ProductPrice
 * @property {number} [effective]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [selling]
 * @property {number} [add_on]
 * @property {number} [marked]
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
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {string} [secure_url]
 */
/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */
/**
 * @typedef ProductAction
 * @property {string} [type]
 * @property {string} [url]
 * @property {ActionQuery} [query]
 */
/**
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef CartProduct
 * @property {string} [name]
 * @property {CategoryInfo[]} [categories]
 * @property {number} [uid]
 * @property {ProductImage[]} [images]
 * @property {string} [slug]
 * @property {ProductAction} [action]
 * @property {NetQuantity} [net_quantity]
 * @property {string} [type]
 * @property {BaseInfo} [brand]
 */
/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */
/**
 * @typedef BasePrice
 * @property {number} [effective]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [marked]
 */
/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */
/**
 * @typedef ProductArticle
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [extra_meta]
 * @property {string[]} [product_group_tags]
 * @property {string} [uid]
 * @property {string} [size]
 * @property {BaseInfo} [store]
 * @property {number} [quantity]
 * @property {BaseInfo} [seller]
 * @property {Object} [_custom_json]
 * @property {string} [type]
 * @property {Object} [parent_item_identifiers]
 */
/**
 * @typedef ProductAvailability
 * @property {number} [other_store_quantity]
 * @property {string[]} [sizes]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 * @property {boolean} [deliverable]
 */
/**
 * @typedef Ownership2
 * @property {string} [payable_category]
 * @property {string} [payable_by]
 */
/**
 * @typedef FreeGiftItem
 * @property {string[]} [item_images_url]
 * @property {number} [item_id]
 * @property {string} [item_slug]
 * @property {string} [item_name]
 * @property {string} [item_brand_name]
 * @property {Object} [item_price_details]
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
 * @property {Object} [item_criteria]
 * @property {Object} [raw_offer]
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [offer]
 */
/**
 * @typedef AppliedPromotion
 * @property {boolean} [mrp_promotion]
 * @property {string} [promotion_name]
 * @property {string} [offer_text]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_type]
 * @property {Ownership2} [ownership]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [promotion_group]
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {string} [promo_id]
 */
/**
 * @typedef CartProductInfo
 * @property {ProductPriceInfo} [price]
 * @property {string} [message]
 * @property {boolean} [is_set]
 * @property {string} [discount]
 * @property {Object} [bulk_offer]
 * @property {PromoMeta} [promo_meta]
 * @property {CartProduct} [product]
 * @property {number} [quantity]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [coupon_message]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {ProductArticle} [article]
 * @property {ProductAvailability} [availability]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {string} [key]
 * @property {Object} [parent_item_identifiers]
 */
/**
 * @typedef OpenapiCartDetailsResponse
 * @property {string} [message]
 * @property {boolean} [is_valid]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 */
/**
 * @typedef OpenApiErrorResponse
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {boolean} [success]
 */
/**
 * @typedef ShippingAddress
 * @property {number} [pincode]
 * @property {string} [name]
 * @property {number} [phone]
 * @property {string} [landmark]
 * @property {string} [country_iso_code]
 * @property {string} [city]
 * @property {Object} [meta]
 * @property {string} [state]
 * @property {string} [area_code_slug]
 * @property {string} [country_code]
 * @property {string} [area]
 * @property {string} [email]
 * @property {string} [address_type]
 * @property {string} area_code
 * @property {string} [country]
 * @property {string} [country_phone_code]
 * @property {string} [address]
 */
/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {ShippingAddress} shipping_address
 * @property {CartItem} [cart_items]
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
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {ShipmentPromise} [delivery_promise]
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
 * @property {OpenApiFiles[]} [files]
 * @property {number} [loyalty_discount]
 * @property {number} discount
 * @property {Object} [extra_meta]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} product_id
 * @property {number} [employee_discount]
 * @property {CartItemMeta} [meta]
 * @property {number} [quantity]
 * @property {number} delivery_charges
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {number} cod_charges
 * @property {number} coupon_effective_discount
 * @property {number} cashback_applied
 * @property {number} amount_paid
 * @property {string} size
 */
/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [coupon]
 * @property {number} coupon_value
 * @property {string} [affiliate_order_id]
 * @property {number} cod_charges
 * @property {number} cart_value
 * @property {OpenApiFiles[]} [files]
 * @property {string} [comment]
 * @property {OpenApiOrderItem[]} cart_items
 * @property {number} [loyalty_discount]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {Object} [employee_discount]
 * @property {string} [currency_code]
 * @property {string} [order_id]
 * @property {ShippingAddress} [shipping_address]
 * @property {ShippingAddress} billing_address
 * @property {string} [gstin]
 * @property {number} delivery_charges
 * @property {number} cashback_applied
 * @property {string} coupon_code
 * @property {string} [payment_mode]
 */
/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {string} order_id
 * @property {string} [order_ref_id]
 */
/**
 * @typedef AbandonedCart
 * @property {Object} cashback
 * @property {string} created_on
 * @property {string} expire_at
 * @property {boolean} is_default
 * @property {number} [cart_value]
 * @property {boolean} [buy_now]
 * @property {string} user_id
 * @property {boolean} [is_archive]
 * @property {string} [order_id]
 * @property {Object} [payments]
 * @property {boolean} [merge_qty]
 * @property {string} [gstin]
 * @property {string} _id
 * @property {number} [bulk_coupon_discount]
 * @property {string} [payment_mode]
 * @property {Object} [coupon]
 * @property {number} [discount]
 * @property {Object} [promotion]
 * @property {number} uid
 * @property {Object} [fynd_credits]
 * @property {Object} [cod_charges]
 * @property {string} last_modified
 * @property {Object[]} [shipments]
 * @property {number[]} [fc_index_map]
 * @property {Object} [pick_up_customer_details]
 * @property {Object[]} articles
 * @property {string} [comment]
 * @property {Object[]} [payment_methods]
 * @property {string} [app_id]
 * @property {string} [checkout_mode]
 * @property {Object} [meta]
 * @property {Object} [delivery_charges]
 * @property {boolean} [is_active]
 */
/**
 * @typedef AbandonedCartResponse
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {Object} [result]
 * @property {AbandonedCart[]} [items]
 * @property {string} [message]
 */
/**
 * @typedef CartCurrency
 * @property {string} [symbol]
 * @property {string} [code]
 */
/**
 * @typedef CartDetailResponse
 * @property {string} [comment]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {CartCurrency} [currency]
 * @property {boolean} [restrict_checkout]
 * @property {string} [gstin]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [last_modified]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message]
 * @property {string} [delivery_charge_info]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 */
/**
 * @typedef AddProductCart
 * @property {Object} [extra_meta]
 * @property {number} [seller_id]
 * @property {string[]} [product_group_tags]
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {boolean} [pos]
 * @property {number} [quantity]
 * @property {Object} [_custom_json]
 * @property {Object} [article_assignment]
 * @property {string} [display]
 * @property {number} [store_id]
 * @property {string} [item_size]
 * @property {Object} [parent_item_identifiers]
 */
/**
 * @typedef AddCartRequest
 * @property {boolean} [new_cart]
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
 * @property {Object} [extra_meta]
 * @property {string} [article_id]
 * @property {number} [item_id]
 * @property {number} [quantity]
 * @property {Object} [_custom_json]
 * @property {CartProductIdentifer} identifiers
 * @property {number} [item_index]
 * @property {string} [item_size]
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
 * @typedef GetShareCartLinkRequest
 * @property {Object} [meta]
 * @property {string} [id]
 */
/**
 * @typedef GetShareCartLinkResponse
 * @property {string} [token]
 * @property {string} [share_url]
 */
/**
 * @typedef SharedCartDetails
 * @property {string} [token]
 * @property {Object} [meta]
 * @property {string} [created_on]
 * @property {Object} [source]
 * @property {Object} [user]
 */
/**
 * @typedef SharedCart
 * @property {boolean} [restrict_checkout]
 * @property {string} [delivery_charge_info]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [gstin]
 * @property {string} [message]
 * @property {string} [uid]
 * @property {CartProductInfo[]} [items]
 * @property {number} [cart_id]
 * @property {string} [last_modified]
 * @property {string} [comment]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {CartCurrency} [currency]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {SharedCartDetails} [shared_cart_details]
 */
/**
 * @typedef SharedCartResponse
 * @property {string} [error]
 * @property {SharedCart} [cart]
 */
/**
 * @typedef CartList
 * @property {string} [user_id]
 * @property {string} [item_counts]
 * @property {string} [created_on]
 * @property {string} [cart_id]
 * @property {string} [cart_value]
 */
/**
 * @typedef MultiCartResponse
 * @property {CartList[]} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef UpdateUserCartMapping
 * @property {string} user_id
 */
/**
 * @typedef UserCartMappingResponse
 * @property {string} [comment]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {CartCurrency} [currency]
 * @property {boolean} [restrict_checkout]
 * @property {string} [gstin]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [last_modified]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message]
 * @property {string} [delivery_charge_info]
 * @property {UserInfo} [user]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 */
/**
 * @typedef DeleteCartDetailResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count]
 */
/**
 * @typedef Coupon
 * @property {number} [coupon_value]
 * @property {boolean} [is_applied]
 * @property {string} [title]
 * @property {number} [max_discount_value]
 * @property {string} [coupon_type]
 * @property {boolean} [is_applicable]
 * @property {number} [minimum_cart_value]
 * @property {string} [sub_title]
 * @property {string} [expires_on]
 * @property {string} [message]
 * @property {string} [description]
 * @property {string} [coupon_code]
 */
/**
 * @typedef PageCoupon
 * @property {number} [current]
 * @property {number} [total]
 * @property {number} [total_item_count]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 */
/**
 * @typedef GetCouponResponse
 * @property {Coupon[]} [available_coupon_list]
 * @property {PageCoupon} [page]
 */
/**
 * @typedef ApplyCouponRequest
 * @property {string} coupon_code
 */
/**
 * @typedef GeoLocation
 * @property {number} [latitude]
 * @property {number} [longitude]
 */
/**
 * @typedef PlatformAddress
 * @property {string} [phone]
 * @property {string} [created_by_user_id]
 * @property {string} [area_code_slug]
 * @property {string} [country_code]
 * @property {string} [area]
 * @property {string} [country]
 * @property {string} [id]
 * @property {string} [user_id]
 * @property {string} [name]
 * @property {boolean} [is_default_address]
 * @property {string} [address]
 * @property {string} [cart_id]
 * @property {GeoLocation} [geo_location]
 * @property {Object} [google_map_point]
 * @property {string} [city]
 * @property {string} [landmark]
 * @property {string} [checkout_mode]
 * @property {Object} [meta]
 * @property {string} [state]
 * @property {string[]} [tags]
 * @property {boolean} [is_active]
 * @property {string} [email]
 * @property {string} [address_type]
 * @property {string} [area_code]
 */
/**
 * @typedef PlatformGetAddressesResponse
 * @property {PlatformAddress[]} [address]
 */
/**
 * @typedef SaveAddressResponse
 * @property {boolean} [is_default_address]
 * @property {boolean} [success]
 * @property {string} [id]
 */
/**
 * @typedef UpdateAddressResponse
 * @property {boolean} [is_updated]
 * @property {boolean} [success]
 * @property {boolean} [is_default_address]
 * @property {string} [id]
 */
/**
 * @typedef DeleteAddressResponse
 * @property {boolean} [is_deleted]
 * @property {string} [id]
 */
/**
 * @typedef PlatformSelectCartAddressRequest
 * @property {string} [billing_address_id]
 * @property {string} [cart_id]
 * @property {string} [checkout_mode]
 * @property {string} [id]
 */
/**
 * @typedef ShipmentResponse
 * @property {number} [fulfillment_id]
 * @property {string} [box_type]
 * @property {string} [order_type]
 * @property {string} [dp_id]
 * @property {Object} [dp_options]
 * @property {string} [fulfillment_type]
 * @property {CartProductInfo[]} [items]
 * @property {ShipmentPromise} [promise]
 * @property {string} [shipment_type]
 * @property {number} [shipments]
 */
/**
 * @typedef CartShipmentsResponse
 * @property {string} [uid]
 * @property {boolean} [restrict_checkout]
 * @property {number} [cart_id]
 * @property {string} [last_modified]
 * @property {string} [delivery_charge_info]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {ShipmentResponse[]} [shipments]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 * @property {string} [comment]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {CartCurrency} [currency]
 * @property {string} [gstin]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message]
 * @property {boolean} [error]
 */
/**
 * @typedef UpdateCartShipmentItem
 * @property {string} shipment_type
 * @property {number} [quantity]
 * @property {string} article_uid
 */
/**
 * @typedef UpdateCartShipmentRequest
 * @property {UpdateCartShipmentItem[]} shipments
 */
/**
 * @typedef PlatformCartMetaRequest
 * @property {string} [comment]
 * @property {string} [checkout_mode]
 * @property {string} [gstin]
 * @property {string} [pan_no]
 * @property {Object} [pick_up_customer_details]
 */
/**
 * @typedef CartMetaResponse
 * @property {string} [message]
 */
/**
 * @typedef CartMetaMissingResponse
 * @property {string[]} [errors]
 */
/**
 * @typedef Files
 * @property {string} key
 * @property {string[]} values
 */
/**
 * @typedef StaffCheckout
 * @property {string} [employee_code]
 * @property {string} _id
 * @property {string} last_name
 * @property {string} user
 * @property {string} first_name
 */
/**
 * @typedef PlatformCartCheckoutDetailRequest
 * @property {string} [payment_identifier]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} [merchant_code]
 * @property {boolean} [pos]
 * @property {string} id
 * @property {string} user_id
 * @property {Object} [delivery_address]
 * @property {string} [aggregator]
 * @property {string} [callback_url]
 * @property {Object} [extra_meta]
 * @property {Files[]} [files]
 * @property {Object} [payment_params]
 * @property {Object} [billing_address]
 * @property {string} [billing_address_id]
 * @property {number} [ordering_store]
 * @property {StaffCheckout} [staff]
 * @property {string} payment_mode
 * @property {string} [address_id]
 * @property {string} order_type
 * @property {Object} [meta]
 * @property {number} [pick_at_store_uid]
 */
/**
 * @typedef CheckCart
 * @property {string} [store_code]
 * @property {boolean} [restrict_checkout]
 * @property {Object[]} [store_emps]
 * @property {string} [delivery_charge_info]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [error_message]
 * @property {string} [order_id]
 * @property {string} [gstin]
 * @property {string} [message]
 * @property {string} [uid]
 * @property {boolean} [success]
 * @property {string} [user_type]
 * @property {CartProductInfo[]} [items]
 * @property {number} [cart_id]
 * @property {string} [last_modified]
 * @property {number} [cod_charges]
 * @property {string} [comment]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {boolean} [cod_available]
 * @property {CartCurrency} [currency]
 * @property {number} [delivery_charges]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [cod_message]
 * @property {number} [delivery_charge_order_value]
 */
/**
 * @typedef CartCheckoutResponse
 * @property {string} [callback_url]
 * @property {string} [payment_confirm_url]
 * @property {CheckCart} [cart]
 * @property {boolean} [success]
 * @property {string} [order_id]
 * @property {string} [message]
 * @property {Object} [data]
 * @property {string} [app_intercept_url]
 */
/**
 * @typedef CartDeliveryModesResponse
 * @property {number[]} [pickup_stores]
 * @property {string[]} [available_modes]
 */
/**
 * @typedef PickupStoreDetail
 * @property {number} [pincode]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {string} [landmark]
 * @property {string} [city]
 * @property {string} [store_code]
 * @property {string} [state]
 * @property {number} [uid]
 * @property {string} [area_code_slug]
 * @property {string} [area]
 * @property {string} [email]
 * @property {string} [address_type]
 * @property {string} [area_code]
 * @property {string} [country]
 * @property {string} [address]
 * @property {number} [id]
 */
/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 */
/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [payment_identifier]
 * @property {string} [merchant_code]
 * @property {string} [aggregator_name]
 * @property {string} [address_id]
 * @property {string} [payment_mode]
 * @property {string} [id]
 */
/**
 * @typedef CouponValidity
 * @property {number} [discount]
 * @property {string} [title]
 * @property {string} [code]
 * @property {string} [display_message_en]
 * @property {boolean} [valid]
 */
/**
 * @typedef PaymentCouponValidate
 * @property {string} [message]
 * @property {CouponValidity} [coupon_validity]
 * @property {boolean} success
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
 * @typedef RewardsRule
 * @property {number} [amount]
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
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.items] - Decides that the reponse will contain the
     *   list of tickets
     * @param {boolean} [arg.filters] - Decides that the reponse will contain
     *   the ticket filters
     * @param {string} [arg.q] - Search through ticket titles and description
     * @param {string} [arg.status] - Filter tickets on status
     * @param {PriorityEnum} [arg.priority] - Filter tickets on priority
     * @param {string} [arg.category] - Filter tickets on category
     * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
     * @description: Gets the list of Application level Tickets and/or ticket filters
     */
    getTickets({ items, filters, q, status, priority, category }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: PriorityEnum;
        category?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Tiket ID of the ticket to be fetched
     * @summary: Retreives ticket details of a application level ticket
     * @description: Retreives ticket details of a application level ticket with ticket ID
     */
    getTicket({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     */
    editTicket({ id, body }?: {
        id: string;
        body: EditTicketPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: {
        id: string;
        body: TicketHistoryPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is to be fetched
     * @summary: Gets history list for specific application level ticket
     * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    getTicketHistory({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @summary: Get specific custom form using it's slug
     * @description: Get specific custom form using it's slug, this is used to view the form.
     */
    getCustomForm({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {EditCustomFormPayload} arg.body
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     */
    editCustomForm({ slug, body }?: {
        slug: string;
        body: EditCustomFormPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get list of custom form
     * @description: Get list of custom form for given application
     */
    getCustomForms({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateCustomFormPayload} arg.body
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application
     */
    createCustomForm({ body }?: {
        body: CreateCustomFormPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of video room
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getVideoParticipants({ uniqueName }?: {
        uniqueName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateVideoRoomPayload} arg.body
     * @summary: Open a video room.
     * @description: Open a video room.
     */
    openVideoRoom({ body }?: {
        body: CreateVideoRoomPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @summary: Close the video room and force all participants to leave.
     * @description: Close the video room and force all participants to leave.
     */
    closeVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): Promise<any>;
}
declare class Feedback {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Pagination page no
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of attribute data
     * @description: Provides a list of all attribute data.
     */
    getAttributes({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of attribute data
     * @description: Provides a list of all attribute data.
     */
    getAttributesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] - Review id
     * @param {string} [arg.entityId] - Entity id
     * @param {string} [arg.entityType] - Entity type
     * @param {string} [arg.userId] - User id
     * @param {string} [arg.media] - Media type e.g. image | video | video_file
     *   | video_link
     * @param {number[]} [arg.rating] - Rating filter, 1-5
     * @param {string[]} [arg.attributeRating] - Attribute rating filter with
     *   ma,e of attribute
     * @param {boolean} [arg.facets] - Facets (true|false)
     * @param {string} [arg.sort] - Sort by : default | top | recent
     * @param {string} [arg.next] - Pagination next
     * @param {string} [arg.start] - Pagination start
     * @param {string} [arg.limit] - Pagination limit
     * @param {string} [arg.count] - Pagination count
     * @param {string} [arg.pageId] - Pagination page id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of customer reviews [admin]
     * @description: The endpoint provides a list of customer reviews based on entity and provided filters
     */
    getCustomerReviews({ id, entityId, entityType, userId, media, rating, attributeRating, facets, sort, next, start, limit, count, pageId, pageSize, }?: {
        id?: string;
        entityId?: string;
        entityType?: string;
        userId?: string;
        media?: string;
        rating?: number[];
        attributeRating?: string[];
        facets?: boolean;
        sort?: string;
        next?: string;
        start?: string;
        limit?: string;
        count?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {string} [arg.id] - Review id
     * @param {string} [arg.entityId] - Entity id
     * @param {string} [arg.entityType] - Entity type
     * @param {string} [arg.userId] - User id
     * @param {string} [arg.media] - Media type e.g. image | video | video_file
     *   | video_link
     * @param {number[]} [arg.rating] - Rating filter, 1-5
     * @param {string[]} [arg.attributeRating] - Attribute rating filter with
     *   ma,e of attribute
     * @param {boolean} [arg.facets] - Facets (true|false)
     * @param {string} [arg.sort] - Sort by : default | top | recent
     * @param {string} [arg.next] - Pagination next
     * @param {string} [arg.start] - Pagination start
     * @param {string} [arg.limit] - Pagination limit
     * @param {string} [arg.count] - Pagination count
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of customer reviews [admin]
     * @description: The endpoint provides a list of customer reviews based on entity and provided filters
     */
    getCustomerReviewsPaginator({ companyId, applicationId, id, entityId, entityType, userId, media, rating, attributeRating, facets, sort, next, start, limit, count, pageSize, }?: {
        companyId: string;
        applicationId: string;
        id?: string;
        entityId?: string;
        entityType?: string;
        userId?: string;
        media?: string;
        rating?: number[];
        attributeRating?: string[];
        facets?: boolean;
        sort?: string;
        next?: string;
        start?: string;
        limit?: string;
        count?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.reviewId - Review id
     * @param {ApproveRequest} arg.body
     * @summary: update approve details
     * @description: The is used to update approve details like status and description text
     */
    updateApprove({ reviewId, body }?: {
        reviewId: string;
        body: ApproveRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.reviewId - Review id
     * @summary: get history details
     * @description: The is used to get the history details like status and description text
     */
    getHistory({ reviewId }?: {
        reviewId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - Pagination page id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of templates
     * @description: Get all templates of application
     */
    getApplicationTemplates({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of templates
     * @description: Get all templates of application
     */
    getApplicationTemplatesPaginator({ companyId, applicationId, pageSize, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {TemplateRequestList} arg.body
     * @summary: Create a new template
     * @description: Create a new template for review with following data:
     * - Enable media, rating and review
     * - Rating - active/inactive/selected rate choices, attributes, text on rate, comment for each rate, type
     * - Review - header, title, description, image and video meta, enable votes
     */
    createTemplate({ body }?: {
        body: TemplateRequestList;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Template id
     * @summary: Get a template by ID
     * @description: Get the template for product or l3 type by ID
     */
    getTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Template id
     * @param {UpdateTemplateRequest} arg.body
     * @summary: Update a template's status
     * @description: Update existing template status, active/archive
     */
    updateTemplate({ id, body }?: {
        id: string;
        body: UpdateTemplateRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Template id
     * @param {UpdateTemplateStatusRequest} arg.body
     * @summary: Update a template's status
     * @description: Update existing template status, active/archive
     */
    updateTemplateStatus({ id, body }?: {
        id: string;
        body: UpdateTemplateStatusRequest;
    }): Promise<any>;
}
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID.
     */
    getAllPages({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {AvailablePageSchema} arg.body
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID.
     */
    createPage({ themeId, body }?: {
        themeId: string;
        body: AvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {AllAvailablePageSchema} arg.body
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID.
     */
    updateMultiplePages({ themeId, body }?: {
        themeId: string;
        body: AllAvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {string} arg.pageValue - Value of the page to be retrieved
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme.
     */
    getPage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @param {AvailablePageSchema} arg.body
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID.
     */
    updatePage({ themeId, pageValue, body }?: {
        themeId: string;
        pageValue: string;
        body: AvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value.
     */
    deletePage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get a list of themes from the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.
     */
    getThemeLibrary({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddThemeRequestSchema} arg.body
     * @summary: Add a theme to the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.
     */
    addToThemeLibrary({ body }?: {
        body: AddThemeRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddThemeRequestSchema} arg.body
     * @summary: Apply a theme
     * @description: Use this API to apply a theme to the website.
     */
    applyTheme({ body }?: {
        body: AddThemeRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - Theme ID
     * @summary: Checks if theme is upgradable
     * @description: There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.
     */
    isUpgradable({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Upgrade a theme
     * @description: Use this API to upgrade the current theme to its latest version.
     */
    upgradeTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get all public themes
     * @description: Use this API to get a list of free themes that you can apply to your website.
     */
    getPublicThemes({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ThemesSchema} arg.body
     * @summary: Create a new theme
     * @description: Themes improve the look and appearance of a website. Use this API to create a theme.
     */
    createTheme({ body }?: {
        body: ThemesSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get the applied theme
     * @description: Use this API to retrieve the theme that is currently applied to the website along with its details.
     */
    getAppliedTheme({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
     */
    getFonts({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Gets theme by id
     * @description: Use this API to retrieve the details of a specific theme by using its ID.
     */
    getThemeById({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @param {ThemesSchema} arg.body
     * @summary: Update a theme
     * @description: Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.
     */
    updateTheme({ themeId, body }?: {
        themeId: string;
        body: ThemesSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Delete a theme
     * @description: Use this API to delete a theme from the theme library.
     */
    deleteTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Get a theme preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.
     */
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Publish a theme
     * @description: Use this API to publish a theme that is either newly created or edited.
     */
    publishTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Unpublish a theme
     * @description: Use this API to remove an existing theme from the list of available themes.
     */
    unpublishTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Archive a theme
     * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.
     */
    archiveTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Unarchive a theme
     * @description: Use this API to restore an archived theme and bring it back for editing or publishing.
     */
    unarchiveTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getThemeLastModified({ themeId }?: {
        themeId: string;
    }): Promise<any>;
}
declare class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {Object} [arg.q] - The search query. Mobile number or email ID of
     *   a customer.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get a list of customers
     * @description: Use this API to retrieve a list of customers who have registered in the application.
     */
    getCustomers({ q, pageSize, pageNo }?: {
        q?: any;
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search query. Mobile number or email ID of
     *   a customer.
     * @summary: Search an existing user.
     * @description: Use this API to retrieve an existing user from a list.
     */
    searchUsers({ q }?: {
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUserRequestSchema} arg.body
     * @summary: Create user
     * @description: Create user
     */
    createUser({ body }?: {
        body: CreateUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BlockUserRequestSchema} arg.body
     * @summary: Block/Unblock user
     * @description: Block/Unblock user
     */
    blockOrUnblockUsers({ body }?: {
        body: BlockUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ArchiveUserRequestSchema} arg.body
     * @summary: archive user
     * @description: archive user
     */
    archiveUser({ body }?: {
        body: ArchiveUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UnDeleteUserRequestSchema} arg.body
     * @summary: undelete user who deleted from application and have not elapsed the platform configured delete days
     * @description: undelete user who deleted from application and have not elapsed the platform configured delete days
     */
    unDeleteUser({ body }?: {
        body: UnDeleteUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User ID
     * @param {UpdateUserRequestSchema} arg.body
     * @summary: Update user
     * @description: Update user
     */
    updateUser({ userId, body }?: {
        userId: string;
        body: UpdateUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUserSessionRequestSchema} arg.body
     * @summary: Create user session
     * @description: Create user session
     */
    createUserSession({ body }?: {
        body: CreateUserSessionRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID of a customer.
     * @summary: Get a list of all session for a user
     * @description: Use this API to retrieve a list of session of customers who have registered in the application.
     */
    getActiveSessions({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID of a customer.
     * @summary: Delete a list of all session for a user
     * @description: Use this API to Delete a list of session of customers who have registered in the application.
     */
    deleteActiveSessions({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get platform configurations
     * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    getPlatformConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PlatformSchema} arg.body
     * @summary: Update platform configurations
     * @description: Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    updatePlatformConfig({ body }?: {
        body: PlatformSchema;
    }): Promise<any>;
}
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsList({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsListPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {AdminAnnouncementSchema} arg.body
     * @summary: Create an announcement
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to create an announcement.
     */
    createAnnouncement({ body }?: {
        body: AdminAnnouncementSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @summary: Get announcement by ID
     * @description: Use this API to retrieve an announcement and its details such as the target platform and pages on which it's applicable
     */
    getAnnouncementById({ announcementId }?: {
        announcementId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {AdminAnnouncementSchema} arg.body
     * @summary: Update an announcement
     * @description: Use this API to edit an existing announcement and its details such as the target platform and pages on which it's applicable
     */
    updateAnnouncement({ announcementId, body }?: {
        announcementId: string;
        body: AdminAnnouncementSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {ScheduleSchema} arg.body
     * @summary: Update the schedule and the publish status of an announcement
     * @description: Use this API to edit the duration, i.e. start date-time and end date-time of an announcement. Moreover, you can enable/disable an announcement using this API.
     */
    updateAnnouncementSchedule({ announcementId, body }?: {
        announcementId: string;
        body: ScheduleSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @summary: Delete announcement by id
     * @description: Use this API to delete an existing announcement.
     */
    deleteAnnouncement({ announcementId }?: {
        announcementId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BlogRequest} arg.body
     * @summary: Create a blog
     * @description: Use this API to create a blog.
     */
    createBlog({ body }?: {
        body: BlogRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogs({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogsPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the blog.
     * @param {BlogRequest} arg.body
     * @summary: Update a blog
     * @description: Use this API to update the details of an existing blog which includes title, feature image, content, SEO details, expiry, etc.
     */
    updateBlog({ id, body }?: {
        id: string;
        body: BlogRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the blog.
     * @summary: Delete blogs
     * @description: Use this API to delete a blog.
     */
    deleteBlog({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a blog page. You can get slug value of a blog from `getBlogs` API.
     * @summary: Get components of a blog
     * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc.
     */
    getComponentById({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DataLoaderSchema} arg.body
     * @summary: Adds a data loader
     * @description: Use this API to add data loader. This includes the data loader name, operationId, service name and its type (url/function) with corresponding value.
     */
    addDataLoader({ body }?: {
        body: DataLoaderSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the data loaders in an application
     * @description: Use this to get all data loaders of an application
     */
    getDataLoaders({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @summary: Delete data loader in application
     * @description: Use this API to delete data loader.
     */
    deleteDataLoader({ dataLoaderId }?: {
        dataLoaderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @param {DataLoaderSchema} arg.body
     * @summary: Edit a data loader by id
     * @description: Use this API to edit the details of an existing data loader by its ID.
     */
    editDataLoader({ dataLoaderId, body }?: {
        dataLoaderId: string;
        body: DataLoaderSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @summary: Select a data loader by id
     * @description: Use this API to select a data loader to be used in applications.
     */
    selectDataLoader({ dataLoaderId }?: {
        dataLoaderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.service - Name of service.
     * @param {string} arg.operationId - Name of operation id of the service.
     * @summary: Reset a data loader by serive name and operation Id
     * @description: Use this API to reselect a data loader.
     */
    resetDataLoader({ service, operationId }?: {
        service: string;
        operationId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get a list of FAQ categories
     * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
     */
    getFaqCategories({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get an FAQ category by slug or id
     * @description: FAQs can be divided into categories. Use this API to get an FAQ categories using its slug or ID.
     */
    getFaqCategoryBySlugOrId({ idOrSlug }?: {
        idOrSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateFaqCategoryRequestSchema} arg.body
     * @summary: Create an FAQ category
     * @description: FAQs help users to solve an issue or know more about a process. FAQs can be categorized separately, for e.g. some questions can be related to payment, some could be related to purchase, shipping, navigating, etc. Use this API to create an FAQ category.
     */
    createFaqCategory({ body }?: {
        body: CreateFaqCategoryRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to an FAQ category.
     * @param {UpdateFaqCategoryRequestSchema} arg.body
     * @summary: Update an FAQ category
     * @description: Use this API to edit an existing FAQ category.
     */
    updateFaqCategory({ id, body }?: {
        id: string;
        body: UpdateFaqCategoryRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to an FAQ category.
     * @summary: Delete an FAQ category
     * @description: Use this API to delete an FAQ category.
     */
    deleteFaqCategory({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get question and answers within an FAQ category
     * @description: Use this API to retrieve all the commonly asked question and answers belonging to an FAQ category.
     */
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {CreateFaqSchema} arg.body
     * @summary: Create an FAQ
     * @description: FAQs help users to solve an issue or know more about a process. Use this API to create an FAQ for a given FAQ category.
     */
    addFaq({ categoryId, body }?: {
        categoryId: string;
        body: CreateFaqSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {string} arg.faqId - ID allotted to an FAQ.
     * @param {CreateFaqSchema} arg.body
     * @summary: Update an FAQ
     * @description: Use this API to edit an existing FAQ.
     */
    updateFaq({ categoryId, faqId, body }?: {
        categoryId: string;
        faqId: string;
        body: CreateFaqSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {string} arg.faqId - ID allotted to an FAQ.
     * @summary: Delete an FAQ
     * @description: Use this API to delete an existing FAQ.
     */
    deleteFaq({ categoryId, faqId }?: {
        categoryId: string;
        faqId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get an FAQ
     * @description: Use this API to retrieve a specific FAQ. You will get the question and answer of that FAQ.
     */
    getFaqByIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {LandingPageSchema} arg.body
     * @summary: Create a landing page
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to create a landing page.
     */
    createLandingPage({ body }?: {
        body: LandingPageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to a landing page.
     * @param {LandingPageSchema} arg.body
     * @summary: Update a landing page
     * @description: Use this API to edit the details of an existing landing page.
     */
    updateLandingPage({ id, body }?: {
        id: string;
        body: LandingPageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to a landing page.
     * @summary: Delete a landing page
     * @description: Use this API to delete an existing landing page.
     */
    deleteLandingPage({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get legal information
     * @description: Use this API to get the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    getLegalInformation({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationLegal} arg.body
     * @summary: Save legal information
     * @description: Use this API to edit, update and save the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    updateLegalInformation({ body }?: {
        body: ApplicationLegal;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigations({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigationsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {NavigationRequest} arg.body
     * @summary: Create a navigation
     * @description: Navigation is the arrangement of navigational items to ease the accessibility of resources for users on a website. Use this API to create a navigation.
     */
    createNavigation({ body }?: {
        body: NavigationRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get default navigations
     * @description: On any website (application), there are navigations that are present by default. Use this API to retrieve those default navigations.
     */
    getDefaultNavigations({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a navigation. You can get slug value of a navigation from
     *   `getNavigations` API.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @summary: Get a navigation by slug
     * @description: Use this API to retrieve a navigation by its slug.
     */
    getNavigationBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the navigation.
     * @param {NavigationRequest} arg.body
     * @summary: Update a navigation
     * @description: Use this API to edit the details of an existing navigation.
     */
    updateNavigation({ id, body }?: {
        id: string;
        body: NavigationRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the navigation.
     * @summary: Delete a navigation
     * @description: Use this API to delete an existing navigation.
     */
    deleteNavigation({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get page meta
     * @description: Use this API to get the meta of custom pages (blog, page) and default system pages (e.g. home/brand/category/collection).
     */
    getPageMeta({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get page spec
     * @description: Use this API to get the specifications of a page, such as page type, display name, params and query.
     */
    getPageSpec({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value of a page from `getPages` API.
     * @param {PagePublishRequest} arg.body
     * @summary: Change the publish status of a page
     * @description: Use this API to change the publish status of an existing page. Allows you to publish and unpublish the page.
     */
    updatePagePreview({ slug, body }?: {
        slug: string;
        body: PagePublishRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the page.
     * @summary: Delete a page
     * @description: Use this API to delete an existing page.
     */
    deletePage({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PathMappingSchema} arg.body
     * @summary: Save path based redirection rules
     * @description: Use this API to add redirection rules
     */
    addPathRedirectionRules({ body }?: {
        body: PathMappingSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 5.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get path based redirection rules
     * @description: Use this API to get path based redirection rules.
     */
    getPathRedirectionRules({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pathId - ID allotted to the path redirection rule.
     * @summary: Get path based redirection rule
     * @description: Use this API to get path based redirection rule.
     */
    getPathRedirectionRule({ pathId }?: {
        pathId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pathId - ID allotted to the path redirection rule.
     * @param {PathMappingSchema} arg.body
     * @summary: Update path based redirection rules
     * @description: Use this API to update redirection rules
     */
    updatePathRedirectionRules({ pathId, body }?: {
        pathId: string;
        body: PathMappingSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pathId - ID allotted to the path redirection rule.
     * @summary: Delete path based redirection rules
     * @description: Use this API to delete redirection rules
     */
    deletePathRedirectionRules({ pathId }?: {
        pathId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get SEO configuration of an application
     * @description: Use this API to know how the SEO is configured in the application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    getSEOConfiguration({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SeoComponent} arg.body
     * @summary: Update SEO of application
     * @description: Use this API to edit the SEO details of an application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    updateSEOConfiguration({ body }?: {
        body: SeoComponent;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshows({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshowsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SlideshowRequest} arg.body
     * @summary: Create a slideshow
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to create a slideshow.
     */
    createSlideshow({ body }?: {
        body: SlideshowRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a slideshow. You can get slug value of a page from
     *   `getSlideshows` API.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @summary: Get slideshow by slug
     * @description: Use this API to retrieve the details of a slideshow by its slug.
     */
    getSlideshowBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the slideshow.
     * @param {SlideshowRequest} arg.body
     * @summary: Update a slideshow
     * @description: Use this API to edit the details of an existing slideshow.
     */
    updateSlideshow({ id, body }?: {
        id: string;
        body: SlideshowRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the slideshow.
     * @summary: Delete a slideshow
     * @description: Use this API to delete an existing slideshow.
     */
    deleteSlideshow({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get support information
     * @description: Use this API to get the contact details for customer support, including emails and phone numbers.
     */
    getSupportInformation({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Support} arg.body
     * @summary: Update the support data of an application
     * @description: Use this API to edit the existing contact details for customer support, including emails and phone numbers.
     */
    updateSupportInformation({ body }?: {
        body: Support;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateTagRequestSchema} arg.body
     * @summary: Update a tag
     * @description: Use this API to edit the details of an existing tag. This includes the tag name, tag type (css/js), url and position of the tag.
     */
    updateInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Delete tags in application
     * @description: Use this API to delete all the existing tags at once.
     */
    deleteAllInjectableTags({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the tags in an application
     * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
     */
    getInjectableTags({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateTagRequestSchema} arg.body
     * @summary: Add a tag
     * @description: CSS and JS can be injected in the application (website) with the help of tags. Use this API to create such tags by entering the tag name, tag type (css/js), url and position of the tag.
     */
    addInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RemoveHandpickedSchema} arg.body
     * @summary: Remove a tag
     * @description: Use this API to delete an existing tag.
     */
    removeInjectableTag({ body }?: {
        body: RemoveHandpickedSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.tagId - ID allotted to the tag.
     * @param {UpdateHandpickedSchema} arg.body
     * @summary: Edit a tag by id
     * @description: Use this API to edit the details of an existing tag by its ID.
     */
    editInjectableTag({ tagId, body }?: {
        tagId: string;
        body: UpdateHandpickedSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PageRequest} arg.body
     * @summary: Create a page
     * @description: Use this API to create a custom page using a title, seo, publish status, feature image, tags, meta, etc.
     */
    createPage({ body }?: {
        body: PageRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the page.
     * @param {PageSchema} arg.body
     * @summary: Update a page
     * @description: Use this API to edit the details of an existing page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    updatePage({ id, body }?: {
        id: string;
        body: PageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value of a page from `getPages` API.
     * @summary: Get pages by component Id
     * @description: Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    getPageBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
}
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaigns({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaignsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {CampaignReq} arg.body
     * @summary: Create campaign
     * @description: Create campaign
     */
    createCampaign({ body }?: {
        body: CampaignReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @summary: Get campaign by id
     * @description: Get campaign by id
     */
    getCampaignById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @param {CampaignReq} arg.body
     * @summary: Update campaign by id
     * @description: Update campaign by id
     */
    updateCampaignById({ id, body }?: {
        id: string;
        body: CampaignReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @summary: Get stats of campaign by id
     * @description: Get stats of campaign by id
     */
    getStatsOfCampaignById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiences({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiencesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {AudienceReq} arg.body
     * @summary: Create audience
     * @description: Create audience
     */
    createAudience({ body }?: {
        body: AudienceReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BigqueryHeadersReq} arg.body
     * @summary: Get bigquery headers
     * @description: Get bigquery headers
     */
    getBigqueryHeaders({ body }?: {
        body: BigqueryHeadersReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @summary: Get audience by id
     * @description: Get audience by id
     */
    getAudienceById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @param {AudienceReq} arg.body
     * @summary: Update audience by id
     * @description: Update audience by id
     */
    updateAudienceById({ id, body }?: {
        id: string;
        body: AudienceReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetNRecordsCsvReq} arg.body
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv
     */
    getNSampleRecordsFromCsv({ body }?: {
        body: GetNRecordsCsvReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email providers
     * @description: Get email providers
     */
    getEmailProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email providers
     * @description: Get email providers
     */
    getEmailProvidersPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailProviderReq} arg.body
     * @summary: Create email provider
     * @description: Create email provider
     */
    createEmailProvider({ body }?: {
        body: EmailProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @summary: Get email provider by id
     * @description: Get email provider by id
     */
    getEmailProviderById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @param {EmailProviderReq} arg.body
     * @summary: Update email provider by id
     * @description: Update email provider by id
     */
    updateEmailProviderById({ id, body }?: {
        id: string;
        body: EmailProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailTemplateReq} arg.body
     * @summary: Create email template
     * @description: Create email template
     */
    createEmailTemplate({ body }?: {
        body: EmailTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @summary: Get email template by id
     * @description: Get email template by id
     */
    getEmailTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @param {EmailTemplateReq} arg.body
     * @summary: Update email template by id
     * @description: Update email template by id
     */
    updateEmailTemplateById({ id, body }?: {
        id: string;
        body: EmailTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @summary: Delete email template by id
     * @description: Delete email template by id
     */
    deleteEmailTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously
     */
    sendCommunicationSynchronously({ body }?: {
        body: EngineRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously
     */
    sendCommunicationAsynchronously({ body }?: {
        body: EngineRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.populate] - Populate fields
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptions({ pageNo, pageSize, populate }?: {
        pageNo?: number;
        pageSize?: number;
        populate?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.populate] - Populate fields
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptionsPaginator({ companyId, applicationId, pageSize, populate, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        populate?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {TriggerJobRequest} arg.body
     * @summary: Trigger campaign job
     * @description: Trigger campaign job
     */
    triggerCampaignJob({ body }?: {
        body: TriggerJobRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on _id
     * @param {Object} [arg.query] -
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogs({ pageId, pageSize, sort, query }?: {
        pageId?: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on _id
     * @param {Object} [arg.query] -
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogsPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SendOtpCommsReq} arg.body
     * @summary: Send OTP using email and sms
     * @description: Send OTP Comms via email and sms
     */
    sendOtp({ body }?: {
        body: SendOtpCommsReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {VerifyOtpCommsReq} arg.body
     * @summary: Verify OTP sent via email and sms
     * @description: Verify OTP sent via email and sms
     */
    verfiyOtp({ body }?: {
        body: VerifyOtpCommsReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms providers
     * @description: Get sms providers
     */
    getSmsProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms providers
     * @description: Get sms providers
     */
    getSmsProvidersPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsProviderReq} arg.body
     * @summary: Create sms provider
     * @description: Create sms provider
     */
    createSmsProvider({ body }?: {
        body: SmsProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @summary: Get sms provider by id
     * @description: Get sms provider by id
     */
    getSmsProviderById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @param {SmsProviderReq} arg.body
     * @summary: Update sms provider by id
     * @description: Update sms provider by id
     */
    updateSmsProviderById({ id, body }?: {
        id: string;
        body: SmsProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplatesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsTemplateReq} arg.body
     * @summary: Create sms template
     * @description: Create sms template
     */
    createSmsTemplate({ body }?: {
        body: SmsTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @summary: Get sms template by id
     * @description: Get sms template by id
     */
    getSmsTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @param {SmsTemplateReq} arg.body
     * @summary: Update sms template by id
     * @description: Update sms template by id
     */
    updateSmsTemplateById({ id, body }?: {
        id: string;
        body: SmsTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @summary: Delete sms template by id
     * @description: Delete sms template by id
     */
    deleteSmsTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
}
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get All Brand Payment Gateway Config Secret
     * @description: Get All Brand Payment Gateway Config Secret
     */
    getBrandPaymentGatewayConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    saveBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    updateBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} arg.refresh -
     * @param {string} arg.requestType -
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPaymentModeRoutes({ refresh, requestType }?: {
        refresh: boolean;
        requestType: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @param {string} [arg.requestHash] -
     * @summary: Get bank details
     * @description: Use this API to get saved bank details for returned/cancelled order using order id.
     */
    getBankAccountDetailsOpenAPI({ orderId, requestHash }?: {
        orderId: string;
        requestHash?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddBeneficiaryDetailsOTPRequest} arg.body
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     */
    addRefundBankAccountUsingOTP({ body }?: {
        body: AddBeneficiaryDetailsOTPRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary: List Order Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserOrderBeneficiaries({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary: List User Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserBeneficiaries({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentConfirmationRequest} arg.body
     * @summary: Confirm payment after successful payment from payment gateway
     * @description: Use this API to confirm payment after payment gateway accepted payment.
     */
    confirmPayment({ body }?: {
        body: PaymentConfirmationRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: API to fetch the payment options of the merchant for paltform
     * @description: Use this API to fetch the payment options.
     */
    getPlatformPaymentConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdatePlatformPaymentConfig} arg.body
     * @summary: API to update the payment options of the merchant for paltform
     * @description: Use this API to update the payment options.
     */
    updatePlatformPaymentConfig({ body }?: {
        body: UpdatePlatformPaymentConfig;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.merchantUserId -
     * @param {string} arg.mobileNo -
     * @summary: Get COD limit for user
     * @description: Use this API to get user cod limit and reamining limit for the payment
     */
    getUserCODlimitRoutes({ merchantUserId, mobileNo }?: {
        merchantUserId: string;
        mobileNo: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SetCODForUserRequest} arg.body
     * @summary: Set COD option for user for payment
     * @description: Use this API to set cod option as true or false for the payment
     */
    setUserCODlimitRoutes({ body }?: {
        body: SetCODForUserRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: get some information about the store and edc device
     * @description: Use this API to get info of devices linked to a particular app.
     */
    edcAggregatorsAndModelList({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: get some information about the store and edc device
     * @description: Use this API to get info of devices linked to a particular app.
     */
    edcDeviceStats({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.terminalUniqueIdentifier - Terminal unique identifier
     * @param {EdcAddRequest} arg.body
     * @summary: map new edc device to the terminal
     * @description: Use this API to map new edc device to the terminal
     */
    edcDevice({ terminalUniqueIdentifier, body }?: {
        terminalUniqueIdentifier: string;
        body: EdcAddRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isActive] -
     * @param {number} [arg.storeId] -
     * @param {string} [arg.deviceTag] -
     * @summary: get all the device list of an app
     * @description: Use this API to get all devices linked to a particular app.
     */
    edcDeviceList({ pageNo, pageSize, isActive, storeId, deviceTag }?: {
        pageNo?: number;
        pageSize?: number;
        isActive?: boolean;
        storeId?: number;
        deviceTag?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.amount - Payable amount.
     * @param {string} arg.cartId - Identifier of the cart.
     * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
     * @param {string} arg.checkoutMode - Option to checkout for self or for others.
     * @param {boolean} [arg.refresh] - This is a boolean value. Select `true`
     *   to remove temporary cache files on payment gateway and replace with the
     *   latest one.
     * @param {string} [arg.cardReference] - Card reference id of user's debit
     *   or credit card.
     * @param {string} arg.orderType - The order type of shipment * HomeDelivery
     *   - If the customer wants the order home-delivered * PickAtStore - If the
     *   customer wants the handover of an order at the store itself.
     * @param {string} [arg.userDetails] - URIencoded JSON containing details of
     *   an anonymous user.
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPosPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, orderType, refresh, cardReference, userDetails, }?: {
        amount: number;
        cartId: string;
        pincode: string;
        checkoutMode: string;
        refresh?: boolean;
        cardReference?: string;
        orderType: string;
        userDetails?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentInitializationRequest} arg.body
     * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
     * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
     */
    initialisePayment({ body }?: {
        body: PaymentInitializationRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentStatusUpdateRequest} arg.body
     * @summary: Performs continuous polling to check status of payment on the server
     * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
     */
    checkAndUpdatePaymentStatus({ body }?: {
        body: PaymentStatusUpdateRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ResendOrCancelPaymentRequest} arg.body
     * @summary: API to resend and cancel a payment link which was already generated.
     * @description: Use this API to perform resend or cancel a payment link based on request payload.
     */
    resendOrCancelPayment({ body }?: {
        body: ResendOrCancelPaymentRequest;
    }): Promise<any>;
}
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] -
     * @param {string} [arg.searchType] -
     * @param {string} [arg.searchId] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.dpIds] -
     * @param {string} [arg.orderingCompanyId] -
     * @param {string} [arg.stores] -
     * @param {string} [arg.salesChannel] -
     * @param {string} [arg.requestByExt] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.customerId] -
     * @param {boolean} [arg.isPrioritySort] -
     * @summary:
     * @description:
     */
    getApplicationShipments({ lane, searchType, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannel, requestByExt, pageNo, pageSize, customerId, isPrioritySort, }?: {
        lane?: string;
        searchType?: string;
        searchId?: string;
        fromDate?: string;
        toDate?: string;
        dpIds?: string;
        orderingCompanyId?: string;
        stores?: string;
        salesChannel?: string;
        requestByExt?: string;
        pageNo?: number;
        pageSize?: number;
        customerId?: string;
        isPrioritySort?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary:
     * @description:
     */
    getAppOrderShipmentDetails({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId -
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id
     */
    trackPlatformShipment({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
}
declare class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateSearchKeyword} arg.body
     * @summary: Update Search Keyword
     * @description: Update Search Keyword by its id. On successful request, returns the updated collection
     */
    updateSearchKeywords({ id, body }?: {
        id: string;
        body: CreateSearchKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @summary: Delete a Search Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteSearchKeywords({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to retrieve.
     * @summary: Get a Search Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
     */
    getSearchKeywords({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateSearchKeyword} arg.body
     * @summary: Add a Custom Search Keywords
     * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
     */
    createCustomKeyword({ body }?: {
        body: CreateSearchKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all Search Custom Keyword Listing
     * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAllSearchKeyword({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateAutocompleteKeyword} arg.body
     * @summary: Create & Update Autocomplete Keyword
     * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
     */
    updateAutocompleteKeyword({ id, body }?: {
        id: string;
        body: CreateAutocompleteKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @summary: Delete a Autocomplete Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteAutocompleteKeyword({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to retrieve.
     * @summary: Get a Autocomplete Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
     */
    getAutocompleteKeywordDetail({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateAutocompleteKeyword} arg.body
     * @summary: Add a Custom Autocomplete Keywords
     * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
     */
    createCustomAutocompleteRule({ body }?: {
        body: CreateAutocompleteKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all Autocomplete Keyword Listing
     * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAutocompleteConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemId - Product id for which the custom_meta is associated.
     * @param {ApplicationItemMeta} arg.body
     * @summary: Update a single custom meta.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppProduct({ itemId, body }?: {
        itemId: string;
        body: ApplicationItemMeta;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemId - Product id for a particular product.
     * @summary: Get company application product data.
     * @description: Products are the core resource of an application. If successful, returns a Company Application Product resource in the response body depending upon filter sent.
     */
    getAppProduct({ itemId }?: {
        itemId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {string} [arg.templateSlug] - Get configuration list filtered by
     *   `template_slug` string. This is for the details and comparision groups.
     * @summary: Get configuration metadata details for catalog for admin panel
     * @description: Get the configuraion metadata details for catalog.
     */
    getConfigurationMetadata({ configType, templateSlug }?: {
        configType: string;
        templateSlug?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {AppConfigurationDetail} arg.body
     * @summary: Create configuration for Group config types.
     * @description: Create configuration for Group config types.
     */
    createGroupConfiguration({ configType, body }?: {
        configType: string;
        body: AppConfigurationDetail;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.search] - Get configuration list filtered by `search` string.
     * @param {string} [arg.templateSlug] - Get configuration list filtered by
     *   `template_slug` string. This is for the details and comparision groups.
     * @summary: Get the details of the application configured configurations of group config types.
     * @description: Get the details of the application configured configurations of group config types.
     */
    getGroupConfigurations({ configType, pageNo, pageSize, search, templateSlug, }?: {
        configType: string;
        pageNo?: number;
        pageSize?: number;
        search?: string;
        templateSlug?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {string} arg.groupSlug - A `group_slug` is a unique identifier of
     *   a particular configuration.
     * @summary: Delete configuration of the product config type of the application.
     * @description: Delete configuration of the product config type of the application.
     */
    deleteGroupConfiguration({ configType, groupSlug }?: {
        configType: string;
        groupSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {string} arg.groupSlug - A `group_slug` is a unique identifier of
     *   a particular configuration.
     * @param {AppConfigurationDetail} arg.body
     * @summary: Update the group configurations for the application.
     * @description: Update the group configurations for the application.
     */
    updateGroupConfiguration({ configType, groupSlug, body }?: {
        configType: string;
        groupSlug: string;
        body: AppConfigurationDetail;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {AppConfigurationsSort} arg.body
     * @summary: Add configuration for listings
     * @description: Add configuration for listing.
     */
    createListingConfiguration({ configType, body }?: {
        configType: string;
        body: AppConfigurationsSort;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.search] - Get configuration list filtered by `search` string.
     * @summary: Get the details of the application configured configurations of listing config types.
     * @description: Get the details of the application configured configurations of listing config types.
     */
    getListingConfigurations({ configType, pageNo, pageSize, search }?: {
        configType: string;
        pageNo?: number;
        pageSize?: number;
        search?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {string} arg.configId - A `config_id` is a unique identifier of a
     *   particular configuration.
     * @summary: Delete configuration for listings
     * @description: Delete configuration for listing.
     */
    deleteListingConfiguration({ configType, configId }?: {
        configType: string;
        configId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {string} arg.configId - A `config_id` is a unique identifier of a
     *   particular configuration.
     * @param {AppConfigurationsSort} arg.body
     * @summary: Update configuration for listings
     * @description: Update configuration for listing.
     */
    updateListingConfiguration({ configType, configId, body }?: {
        configType: string;
        configId: string;
        body: AppConfigurationsSort;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AllowSingleRequest} arg.body
     * @summary: Update allow single flag for filters of the application.
     * @description: Update allow single flag for filters of the application.
     */
    updateAllowSingle({ body }?: {
        body: AllowSingleRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DefaultKeyRequest} arg.body
     * @summary: Update the default sort key configuration for the application.
     * @description: Update the default sort key configuration for the application.
     */
    updateDefaultSort({ body }?: {
        body: DefaultKeyRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get configuration meta  details for catalog for admin panel
     * @description: configuration meta  details for catalog.
     */
    getCatalogConfiguration({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppConfiguration} arg.body
     * @summary: Add configuration for products & listings
     * @description: Add configuration for products & listing.
     */
    createConfigurationProductListing({ body }?: {
        body: AppConfiguration;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurations({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.type - Type can be brands, categories etc.
     * @param {AppConfiguration} arg.body
     * @summary: Add configuration for categories and brands
     * @description: Add configuration for categories & brands.
     */
    createConfigurationByType({ type, body }?: {
        type: string;
        body: AppConfiguration;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.type - Type can be brands, categories etc.
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurationByType({ type }?: {
        type: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get query filters to configure a collection
     * @description: Get query filters to configure a collection
     */
    getQueryFilters({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateCollection} arg.body
     * @summary: Add a Collection
     * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
     */
    createCollection({ body }?: {
        body: CreateCollection;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - Get collection list filtered by q string,
     * @param {string} [arg.scheduleStatus] - Get collection list filtered by
     *   scheduled status,
     * @param {string} [arg.type] - Type of the collections
     * @param {string[]} [arg.tags] - Each response will contain next_id param,
     *   which should be sent back to make pagination work.
     * @param {boolean} [arg.isActive] - Get collections filtered by active status.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: List all the collections
     * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
     */
    getAllCollections({ q, scheduleStatus, type, tags, isActive, pageNo, pageSize, }?: {
        q?: string;
        scheduleStatus?: string;
        type?: string;
        tags?: string[];
        isActive?: boolean;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A `slug` is a human readable, URL friendly
     *   unique identifier of an object. Pass the `slug` of the collection which
     *   you want to retrieve.
     * @summary: Get a particular collection
     * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
     */
    getCollectionDetail({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @summary: Delete a Collection
     * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
     */
    deleteCollection({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {UpdateCollection} arg.body
     * @summary: Update a collection
     * @description: Update a collection by it's id. On successful request, returns the updated collection
     */
    updateCollection({ id, body }?: {
        id: string;
        body: UpdateCollection;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {CollectionItemRequest} arg.body
     * @summary: Add items to a collection
     * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
     */
    addCollectionItems({ id, body }?: {
        id: string;
        body: CollectionItemRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {string} [arg.sortOn] - Each response will contain sort_on param,
     *   which should be sent back to make pagination work.
     * @param {string} [arg.pageId] - Each response will contain next_id param,
     *   which should be sent back to make pagination work.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: Get the items for a collection
     * @description: Get items from a collection specified by its `id`.
     */
    getCollectionItems({ id, sortOn, pageId, pageSize }?: {
        id: string;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.brand] - Brand slug
     * @summary: Analytics data of catalog and inventory.
     * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
     */
    getCatalogInsights({ brand }?: {
        brand?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sizeIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {number[]} [arg.locationIds] - Search by store ids.
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store.
     */
    getDiscountedInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds, }?: {
        itemId: number;
        sizeIdentifier: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        locationIds?: number[];
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
     *   basis of uid list.
     * @summary: List all the brands
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrands({ department, pageNo, pageSize, q, brandId }?: {
        department?: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        brandId?: number[];
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
     *   basis of uid list.
     * @summary: List all the brands
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandsPaginator({ companyId, applicationId, department, pageSize, q, brandId, }?: {
        companyId: string;
        applicationId: string;
        department?: string;
        pageSize?: number;
        q?: string;
        brandId?: number[];
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all the departments
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
     */
    getDepartments({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @summary: List all the categories
     * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
     */
    getCategories({ department }?: {
        department?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a either a product, brand or category
     * @param {string} [arg.f] - The search filter parameters. All the parameter
     *   filtered from filter parameters will be passed in **f** parameter in
     *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
     * @param {string} [arg.c] - The search filter parameters for collection
     *   items. All the parameter filtered from filter parameters will be passed
     *   in **c** parameter in this format.
     *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
     * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
     *   filter details. This flag is used to fetch all filters
     * @param {boolean} [arg.isDependent] - This query parameter is used to get
     *   the dependent products in the listing.
     * @param {string} [arg.sortOn] - The order to sort the list of products on.
     *   The supported sort parameters are popularity, price, redemption and
     *   discount in either ascending or descending order. See the supported
     *   values below.
     * @param {string} [arg.pageId] - Each response will contain **page_id**
     *   param, which should be sent back to make pagination work.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {number} [arg.pageNo] - If page_type is number then pass it to
     *   fetch page items. Default is 1.
     * @param {string} [arg.pageType] - For pagination type should be cursor or
     *   number. Default is cursor.
     * @param {number[]} [arg.itemIds] - Item Ids of product
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
     */
    getAppicationProducts({ q, f, c, filters, isDependent, sortOn, pageId, pageSize, pageNo, pageType, itemIds, }?: {
        q?: string;
        f?: string;
        c?: string;
        filters?: boolean;
        isDependent?: boolean;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
        pageNo?: number;
        pageType?: string;
        itemIds?: number[];
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a either a product, brand or category
     * @param {string} [arg.f] - The search filter parameters. All the parameter
     *   filtered from filter parameters will be passed in **f** parameter in
     *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
     * @param {string} [arg.c] - The search filter parameters for collection
     *   items. All the parameter filtered from filter parameters will be passed
     *   in **c** parameter in this format.
     *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
     * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
     *   filter details. This flag is used to fetch all filters
     * @param {boolean} [arg.isDependent] - This query parameter is used to get
     *   the dependent products in the listing.
     * @param {string} [arg.sortOn] - The order to sort the list of products on.
     *   The supported sort parameters are popularity, price, redemption and
     *   discount in either ascending or descending order. See the supported
     *   values below.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {number[]} [arg.itemIds] - Item Ids of product
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
     */
    getAppicationProductsPaginator({ companyId, applicationId, q, f, c, filters, isDependent, sortOn, pageSize, itemIds, }?: {
        companyId: string;
        applicationId: string;
        q?: string;
        f?: string;
        c?: string;
        filters?: boolean;
        isDependent?: boolean;
        sortOn?: string;
        pageSize?: number;
        itemIds?: number[];
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - The unique identifier of a product. i.e;
     *   `slug` of a product. You can retrieve these from the APIs that list
     *   products like **v1.0/products/**
     * @summary: Get a product
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
     */
    getProductDetailBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number[]} [arg.brandIds] - Get multiple products filtered by Brand Ids
     * @param {number[]} [arg.categoryIds] - Get multiple products filtered by
     *   Category Ids
     * @param {number[]} [arg.departmentIds] - Get multiple products filtered by
     *   Department Ids
     * @param {string[]} [arg.tags] - Get multiple products filtered by tags
     * @param {boolean} [arg.isDependent] - This query parameter is used to get
     *   the dependent products in the listing.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search with Item Code, Name, Slug or Identifier.
     * @summary: Get applicationwise products
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. If successful, returns a Product resource in the response body specified in `ApplicationProductListingResponseDatabasePowered`
     */
    getAppProducts({ brandIds, categoryIds, departmentIds, tags, isDependent, pageNo, pageSize, q, }?: {
        brandIds?: number[];
        categoryIds?: number[];
        departmentIds?: number[];
        tags?: string[];
        isDependent?: boolean;
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number[]} [arg.itemIds] - The Item Id of the product.
     * @param {number[]} [arg.storeIds] - The Store Id of products to fetch inventory.
     * @param {number[]} [arg.brandIds] - The Brand Id of products to fetch inventory.
     * @param {string[]} [arg.sellerIdentifiers] - Unique seller_identifier of
     *   the product.
     * @param {string} [arg.timestamp] - Timestamp in UTC format (2020-07-23T10:27:50Z)
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
     * @summary: Get the stock of a product
     * @description: Retrieve the available Inventory of the products. Use this API to get the Inventory status of products with the filters of timestamp, store_ids, brand_ids, item_id - Items - Pagination
     */
    getAppInventory({ itemIds, storeIds, brandIds, sellerIdentifiers, timestamp, pageSize, pageId, }?: {
        itemIds?: number[];
        storeIds?: number[];
        brandIds?: number[];
        sellerIdentifiers?: string[];
        timestamp?: string;
        pageSize?: number;
        pageId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {number[]} [arg.uid] - Helps to sort the location list on the
     *   basis of uid list.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 20.
     * @summary: Get list of locations
     * @description: This API allows to view all the locations asscoiated to a application.
     */
    getAppLocations({ storeType, uid, q, stage, pageNo, pageSize }?: {
        storeType?: string;
        uid?: number[];
        q?: string;
        stage?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Id of the company whose locations are to fetched
     * @param {string} arg.applicationId - Id of the application whose locations
     *   are to fetched
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {number[]} [arg.uid] - Helps to sort the location list on the
     *   basis of uid list.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 20.
     * @summary: Get list of locations
     * @description: This API allows to view all the locations asscoiated to a application.
     */
    getAppLocationsPaginator({ companyId, applicationId, storeType, uid, q, stage, pageSize, }?: {
        companyId: string;
        applicationId: string;
        storeType?: string;
        uid?: number[];
        q?: string;
        stage?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandListing({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandListingPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.brandUid - Brand id for which the custom_json is associated.
     * @param {ApplicationBrandJson} arg.body
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppBrand({ brandUid, body }?: {
        brandUid: string;
        body: ApplicationBrandJson;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.departmentId] - A `department_id` is a unique
     *   identifier for a particular department.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationCategoryListing({ departmentId, pageNo, pageSize, q }?: {
        departmentId?: number;
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.departmentId] - A `department_id` is a unique
     *   identifier for a particular department.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationCategoryListingPaginator({ companyId, applicationId, departmentId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        departmentId?: number;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryUid - Category id for which the custom_json
     *   is associated.
     * @param {ApplicationCategoryJson} arg.body
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppCategory({ categoryUid, body }?: {
        categoryUid: string;
        body: ApplicationCategoryJson;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search department by name.
     * @summary: List all the departments for the application
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse`
     */
    getApplicationDepartmentListing({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search department by name.
     * @summary: List all the departments for the application
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse`
     */
    getApplicationDepartmentListingPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.departmentUid - Department id for which the
     *   custom_json is associated.
     * @param {ApplicationDepartmentJson} arg.body
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppDepartment({ departmentUid, body }?: {
        departmentUid: string;
        body: ApplicationDepartmentJson;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.storeUid - Store id for which the custom_json is associated.
     * @param {ApplicationStoreJson} arg.body
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppLocation({ storeUid, body }?: {
        storeUid: string;
        body: ApplicationStoreJson;
    }): Promise<any>;
}
declare class FileStorage {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {StartRequest} arg.body
     * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    appStartUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {StartResponse} arg.body
     * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    appCompleteUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.sync] - Sync
     * @param {BulkRequest} arg.body
     * @summary: Copy Files
     * @description: Copy Files
     */
    appCopyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {number} [arg.pageNo] - Page no
     * @summary: Browse Files
     * @description: Browse Files
     */
    browse({ namespace, pageNo }?: {
        namespace: string;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {number} arg.companyId - Company_id
     * @param {number} arg.applicationId - Application_id
     * @summary: Browse Files
     * @description: Browse Files
     */
    browsePaginator({ namespace, companyId, applicationId }?: {
        namespace: string;
        companyId: number;
        applicationId: number;
    }): Paginator;
    /**
     * @param data
     * @param {string} file_name
     * @param {string} content_type
     * @param {string} namespace
     * @param {number} size
     * @param {number} tags
     */
    upload({ data, file_name, content_type, namespace, size, tags, }?: {
        data: any;
        file_name: any;
        content_type: any;
        namespace: any;
        size: any;
        tags: any;
    }): Promise<any>;
}
declare class Share {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ShortLinkReq} arg.body
     * @summary: Create short link
     * @description: Create short link
     */
    createShortLink({ body }?: {
        body: ShortLinkReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} [arg.createdBy] - Short link creator
     * @param {string} [arg.active] - Short link active status
     * @param {string} [arg.q] - Search text for original and short url
     * @summary: Get short links
     * @description: Get short links
     */
    getShortLinks({ pageNo, pageSize, createdBy, active, q }?: {
        pageNo?: number;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company Id
     * @param {string} arg.applicationId - Application Id
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} [arg.createdBy] - Short link creator
     * @param {string} [arg.active] - Short link active status
     * @param {string} [arg.q] - Search text for original and short url
     * @summary: Get short links
     * @description: Get short links
     */
    getShortLinksPaginator({ companyId, applicationId, pageSize, createdBy, active, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.hash - Hash of short url
     * @summary: Get short link by hash
     * @description: Get short link by hash
     */
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Short link document identifier
     * @param {ShortLinkReq} arg.body
     * @summary: Update short link by id
     * @description: Update short link by id
     */
    updateShortLinkById({ id, body }?: {
        id: string;
        body: ShortLinkReq;
    }): Promise<any>;
}
declare class Configuration {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @summary: Get latest build config
     * @description: Get latest build config
     */
    getBuildConfig({ platformType }?: {
        platformType: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @param {MobileAppConfigRequest} arg.body
     * @summary: Update build config for next build
     * @description: Update build config for next build
     */
    updateBuildConfig({ platformType, body }?: {
        platformType: string;
        body: MobileAppConfigRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @summary: Get previous build versions
     * @description: Get previous build versions
     */
    getPreviousVersions({ platformType }?: {
        platformType: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get features of application
     * @description: Get features of application
     */
    getAppFeatures({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppFeatureRequest} arg.body
     * @summary: Update features of application
     * @description: Update features of application
     */
    updateAppFeatures({ body }?: {
        body: AppFeatureRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get basic application details
     * @description: Get basic application details like name
     */
    getAppBasicDetails({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationDetail} arg.body
     * @summary: Add or update application's basic details
     * @description: Add or update application's basic details
     */
    updateAppBasicDetails({ body }?: {
        body: ApplicationDetail;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application information
     * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
     */
    getAppContactInfo({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationInformation} arg.body
     * @summary: Get application information
     * @description: Save Application Current Information. This includes information about social links, address and contact information of an application.
     */
    updateAppContactInfo({ body }?: {
        body: ApplicationInformation;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get social tokens
     * @description: Get social tokens.
     */
    getAppApiTokens({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TokenResponse} arg.body
     * @summary: Add social tokens
     * @description: Add social tokens.
     */
    updateAppApiTokens({ body }?: {
        body: TokenResponse;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - Uid of companies to be fetched
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled companies
     * @description: Application inventory enabled companies.
     */
    getAppCompanies({ uid, pageNo, pageSize }?: {
        uid?: number;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.uid] - Uid of companies to be fetched
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled companies
     * @description: Application inventory enabled companies.
     */
    getAppCompaniesPaginator({ companyId, applicationId, uid, pageSize }?: {
        companyId: string;
        applicationId: string;
        uid?: number;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled stores
     * @description: Application inventory enabled stores.
     */
    getAppStores({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled stores
     * @description: Application inventory enabled stores.
     */
    getAppStoresPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application configuration
     * @description: Get application configuration for various features and data
     */
    getInventoryConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationInventory} arg.body
     * @summary: Update application configuration
     * @description: Update application configuration for various features and data
     */
    updateInventoryConfig({ body }?: {
        body: ApplicationInventory;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppInventoryPartialUpdate} arg.body
     * @summary: Partially update application configuration
     * @description: Partially update application configuration for various features and data
     */
    partiallyUpdateInventoryConfig({ body }?: {
        body: AppInventoryPartialUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application enabled currency list
     * @description: Get application enabled currency list
     */
    getAppCurrencyConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppSupportedCurrency} arg.body
     * @summary: Add initial application supported currency
     * @description: Add initial application supported currency for various features and data. Default INR will be enabled.
     */
    updateAppCurrencyConfig({ body }?: {
        body: AppSupportedCurrency;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get currencies enabled in the application
     * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
     */
    getAppSupportedCurrency({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     */
    getOrderingStoresByFilter({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     */
    getOrderingStoresByFilterPaginator({ companyId, applicationId, pageSize, body, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderingStoreConfig} arg.body
     * @summary: Add/Update ordering store config
     * @description: Add/Update ordering store config.
     */
    updateOrderingStoreConfig({ body }?: {
        body: OrderingStoreConfig;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStores({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStoresPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get attached domain list
     * @description: Get attached domain list.
     */
    getDomains({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainAddRequest} arg.body
     * @summary: Add new domain to application
     * @description: Add new domain to application.
     */
    addDomain({ body }?: {
        body: DomainAddRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Domain _id
     * @summary: Remove attached domain
     * @description: Remove attached domain.
     */
    removeDomainById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateDomainTypeRequest} arg.body
     * @summary: Change domain type
     * @description: Change a domain to Primary or Shortlink domain
     */
    changeDomainType({ body }?: {
        body: UpdateDomainTypeRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainStatusRequest} arg.body
     * @summary: Get domain connected status.
     * @description: Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.
     */
    getDomainStatus({ body }?: {
        body: DomainStatusRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application data from id
     * @description: Get application data from id
     */
    getApplicationById({}?: any): Promise<any>;
}
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isArchived] -
     * @param {string} [arg.title] -
     * @param {boolean} [arg.isPublic] -
     * @param {boolean} [arg.isDisplay] -
     * @param {string} [arg.typeSlug] -
     * @param {string} [arg.code] -
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination
     */
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        pageNo?: number;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @summary: Fetch Coupon
     * @description: Use this API to get a list of available coupons along with their details.
     */
    getCoupons({ id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isArchived] -
     * @param {string} [arg.title] -
     * @param {boolean} [arg.isPublic] -
     * @param {boolean} [arg.isDisplay] -
     * @param {string} [arg.typeSlug] -
     * @param {string} [arg.code] -
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination
     */
    getCouponsPaginator({ companyId, applicationId, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {CouponAdd} arg.body
     * @summary: Create new coupon
     * @description: Create new coupon
     */
    createCoupon({ body }?: {
        body: CouponAdd;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @summary: Get with single coupon details or coupon list
     * @description: Get single coupon details with `id` in path param
     */
    getCouponById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {CouponUpdate} arg.body
     * @summary: Update existing coupon configuration
     * @description: Update coupon with id sent in `id`
     */
    updateCoupon({ id, body }?: {
        id: string;
        body: CouponUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {CouponPartialUpdate} arg.body
     * @summary: Update coupon archive state and schedule
     * @description: Update archive/unarchive and change schedule for coupon
     */
    updateCouponPartially({ id, body }?: {
        id: string;
        body: CouponPartialUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] -
     * @param {string} [arg.status] -
     * @param {string} [arg.promoGroup] -
     * @param {string} [arg.promotionType] -
     * @param {string} [arg.fpPanel] -
     * @param {string} [arg.promotionId] -
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
     */
    getPromotions({ pageNo, pageSize, q, status, promoGroup, promotionType, fpPanel, promotionId, }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        status?: string;
        promoGroup?: string;
        promotionType?: string;
        fpPanel?: string;
        promotionId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] -
     * @param {string} [arg.status] -
     * @param {string} [arg.promoGroup] -
     * @param {string} [arg.promotionType] -
     * @param {string} [arg.fpPanel] -
     * @param {string} [arg.promotionId] -
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
     */
    getPromotionsPaginator({ companyId, applicationId, pageSize, q, status, promoGroup, promotionType, fpPanel, promotionId, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
        status?: string;
        promoGroup?: string;
        promotionType?: string;
        fpPanel?: string;
        promotionId?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {PromotionAdd} arg.body
     * @summary: Create new promotion
     * @description: Create new promotion
     */
    createPromotion({ body }?: {
        body: PromotionAdd;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @summary: Get with single promotion details or promotion list
     * @description: Get single promotion details with `id` in path param
     */
    getPromotionById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {PromotionUpdate} arg.body
     * @summary: Update existing promotion configuration
     * @description: Update promotion with id sent in `id`
     */
    updatePromotion({ id, body }?: {
        id: string;
        body: PromotionUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {PromotionPartialUpdate} arg.body
     * @summary: Update promotion publish state and schedule
     * @description: Update publish/unpublish and change schedule for promotion
     */
    updatePromotionPartially({ id, body }?: {
        id: string;
        body: PromotionPartialUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Fetch all promos that are set as active
     * @description: Use this API to get list of all the active promos/coupons.
     */
    getPromosCouponConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenapiCartDetailsRequest} arg.body
     * @summary: Fetch Cart Details
     * @description: Get all the details of cart for a list of provided `cart_items`
     */
    fetchAndvalidateCartItems({ body }?: {
        body: OpenapiCartDetailsRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenApiCartServiceabilityRequest} arg.body
     * @summary: Check Pincode Serviceability
     * @description: Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`
     */
    checkCartServiceability({ body }?: {
        body: OpenApiCartServiceabilityRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenApiPlatformCheckoutReq} arg.body
     * @summary: Create Fynd order with cart details
     * @description: Generate Fynd order for cart details send with provided `cart_items`
     */
    checkoutCart({ body }?: {
        body: OpenApiPlatformCheckoutReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {PlatformCartCheckoutDetailRequest} arg.body
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway.
     */
    checkoutCart({ body, id }?: {
        id?: string;
        body: PlatformCartCheckoutDetailRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {boolean} [arg.anonymousCart] -
     * @param {string} [arg.lastId] -
     * @param {string} [arg.sortOn] -
     * @summary: Get with abandoned cart list
     * @description: Get abandoned cart list with pagination
     */
    getAbandonedCart({ pageNo, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, }?: {
        pageNo?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        anonymousCart?: boolean;
        lastId?: string;
        sortOn?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {boolean} [arg.anonymousCart] -
     * @param {string} [arg.lastId] -
     * @param {string} [arg.sortOn] -
     * @summary: Get with abandoned cart list
     * @description: Get abandoned cart list with pagination
     */
    getAbandonedCartPaginator({ companyId, applicationId, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        anonymousCart?: boolean;
        lastId?: string;
        sortOn?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @summary: Fetch all items added to the cart
     * @description: Use this API to get details of all the items added to a cart.
     */
    getAbandonedCartDetails({ id, i, b }?: {
        id?: string;
        i?: boolean;
        b?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Current Cart _id
     * @param {boolean} [arg.b] -
     * @param {AddCartRequest} arg.body
     * @summary: Add items to abandoned cart
     * @description: Use this API to add items to the abandoned cart.
     */
    addItems({ cartId, body, b }?: {
        cartId: string;
        b?: boolean;
        body: AddCartRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.id] -
     * @param {AddCartRequest} arg.body
     * @summary: Add items to cart
     * @description: Use this API to add items to the cart.
     */
    addItems({ body, i, b, buyNow, id }?: {
        i?: boolean;
        b?: boolean;
        buyNow?: boolean;
        id?: string;
        body: AddCartRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Current Cart _id
     * @param {boolean} [arg.b] -
     * @param {UpdateCartRequest} arg.body
     * @summary: Update items in the abandoned cart
     * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    updateCart({ cartId, body, b }?: {
        cartId: string;
        b?: boolean;
        body: UpdateCartRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {boolean} [arg.buyNow] -
     * @param {UpdateCartRequest} arg.body
     * @summary: Update items in the customer 's cart using cart id
     * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    updateCart({ body, id, i, b, buyNow }?: {
        id?: string;
        i?: boolean;
        b?: boolean;
        buyNow?: boolean;
        body: UpdateCartRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetShareCartLinkRequest} arg.body
     * @summary: Generate token for sharing the cart
     * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
     */
    getCartShareLink({ body }?: {
        body: GetShareCartLinkRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.token - Token of the shared short link
     * @summary: Get details of a shared cart
     * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
     */
    getCartSharedItems({ token }?: {
        token: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.token - Token of the shared short link
     * @param {string} arg.action - Operation to perform on the existing cart
     *   merge or replace.
     * @summary: Merge or replace existing cart
     * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
     */
    updateCartWithSharedItems({ token, action }?: {
        token: string;
        action: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get cart list for store os user
     * @description: Get all carts for the store os user which is created for customer
     */
    getCartList({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {UpdateUserCartMapping} arg.body
     * @summary: Update user id for store os customer
     * @description: Update user id for store os customer after creating customer
     */
    updateCartUser({ body, id }?: {
        id?: string;
        body: UpdateUserCartMapping;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {number} [arg.assignCardId] -
     * @param {boolean} [arg.buyNow] -
     * @summary: Fetch all items added to the customer cart using cart id
     * @description: Use this API to get details of all the items added to a cart.
     */
    getCart({ id, i, b, assignCardId, buyNow }?: {
        id?: string;
        i?: boolean;
        b?: boolean;
        assignCardId?: number;
        buyNow?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.id] - The unique identifier of the cart.
     * @summary: Delete cart once user made successful checkout
     * @description: Use this API to delete the cart.
     */
    deleteCart({ id }?: {
        id?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] - The unique identifier of the cart.
     * @param {boolean} [arg.buyNow] -
     * @summary: Count items in the customer's cart
     * @description: Use this API to get the total number of items present in cart.
     */
    getItemCount({ id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {boolean} [arg.p] -
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {ApplyCouponRequest} arg.body
     * @summary: Apply Coupon for platform pos user
     * @description: Use this API to apply coupons on items in the cart.
     */
    applyCoupon({ body, i, b, p, id, buyNow }?: {
        i?: boolean;
        b?: boolean;
        p?: boolean;
        id?: string;
        buyNow?: boolean;
        body: ApplyCouponRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uid] -
     * @param {boolean} [arg.buyNow] -
     * @summary: Remove Applied Coupon for platform pos user
     * @description: Remove Coupon applied on the cart by passing uid in request body.
     */
    removeCoupon({ uid, buyNow }?: {
        uid?: string;
        buyNow?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.cartId] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.mobileNo] -
     * @param {string} [arg.checkoutMode] -
     * @param {string} [arg.tags] -
     * @param {boolean} [arg.isDefault] -
     * @param {string} [arg.userId] -
     * @summary: Fetch address
     * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, }?: {
        cartId?: string;
        buyNow?: boolean;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: string;
        isDefault?: boolean;
        userId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PlatformAddress} arg.body
     * @summary: Add address to an account
     * @description: Use this API to add an address to an account.
     */
    addAddress({ body }?: {
        body: PlatformAddress;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {string} [arg.cartId] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.mobileNo] -
     * @param {string} [arg.checkoutMode] -
     * @param {string} [arg.tags] -
     * @param {boolean} [arg.isDefault] -
     * @param {string} [arg.userId] -
     * @summary: Fetch a single address by its ID
     * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `PlatformAddress`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, }?: {
        id: string;
        cartId?: string;
        buyNow?: boolean;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: string;
        isDefault?: boolean;
        userId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the selected address
     * @param {PlatformAddress} arg.body
     * @summary: Update address added to an account
     * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     */
    updateAddress({ id, body }?: {
        id: string;
        body: PlatformAddress;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the selected address
     * @param {string} [arg.userId] - Option to delete address for the provided user_id.
     * @summary: Remove address associated with an account
     * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
     */
    removeAddress({ id, userId }?: {
        id: string;
        userId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.cartId] -
     * @param {boolean} [arg.buyNow] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {PlatformSelectCartAddressRequest} arg.body
     * @summary: Select an address from available addresses
     * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `PlatformSelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
     */
    selectAddress({ body, cartId, buyNow, i, b }?: {
        cartId?: string;
        buyNow?: boolean;
        i?: boolean;
        b?: boolean;
        body: PlatformSelectCartAddressRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pickAtStoreUid] -
     * @param {number} [arg.orderingStoreId] -
     * @param {boolean} [arg.p] - This is a boolean value. Select `true` for
     *   getting a payment option in response.
     * @param {string} [arg.id] - The unique identifier of the cart
     * @param {string} [arg.addressId] - ID allotted to the selected address
     * @param {string} [arg.areaCode] - The PIN Code of the destination address,
     *   e.g. 400059
     * @param {string} [arg.orderType] - The order type of shipment HomeDelivery
     *   - If the customer wants the order home-delivered PickAtStore - If the
     *   customer wants the handover of an order at the store itself.
     * @summary: Get delivery date and options before checkout
     * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
     */
    getShipments({ pickAtStoreUid, orderingStoreId, p, id, addressId, areaCode, orderType, }?: {
        pickAtStoreUid?: number;
        orderingStoreId?: number;
        p?: boolean;
        id?: string;
        addressId?: string;
        areaCode?: string;
        orderType?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] - This is a boolean value. Select `true` to
     *   retrieve all the items added in the cart.
     * @param {boolean} [arg.p] - This is a boolean value. Select `true` for
     *   getting a payment option in response.
     * @param {string} [arg.id] - The unique identifier of the cart
     * @param {string} [arg.addressId] - ID allotted to an address
     * @param {string} [arg.orderType] - The order type of shipment HomeDelivery
     *   - If the customer wants the order home-delivered PickAtStore - If the
     *   customer wants the handover of an order at the store itself.
     * @param {UpdateCartShipmentRequest} arg.body
     * @summary: Update shipment delivery type and quantity before checkout
     * @description: Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery.
     */
    updateShipments({ body, i, p, id, addressId, orderType }?: {
        i?: boolean;
        p?: boolean;
        id?: string;
        addressId?: string;
        orderType?: string;
        body: UpdateCartShipmentRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {PlatformCartMetaRequest} arg.body
     * @summary: Update the cart meta for platform pos user
     * @description: Use this API to update cart meta like checkout_mode and gstin.
     */
    updateCartMeta({ body, id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
        body: PlatformCartMetaRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.areaCode -
     * @param {string} [arg.id] -
     * @summary: Get available delivery modes for cart
     * @description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API.
     */
    getAvailableDeliveryModes({ areaCode, id }?: {
        areaCode: string;
        id?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.storeUid -
     * @summary: Get list of stores for give uids
     * @description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API.
     */
    getStoreAddressByUid({ storeUid }?: {
        storeUid: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {UpdateCartPaymentRequest} arg.body
     * @summary: Update cart payment
     * @description: Use this API to update cart payment.
     */
    selectPaymentMode({ body, id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
        body: UpdateCartPaymentRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.addressId] -
     * @param {string} [arg.paymentMode] -
     * @param {string} [arg.paymentIdentifier] -
     * @param {string} [arg.aggregatorName] -
     * @param {string} [arg.merchantCode] -
     * @summary: Verify the coupon eligibility against the payment mode
     * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, }?: {
        id?: string;
        buyNow?: boolean;
        addressId?: string;
        paymentMode?: string;
        paymentIdentifier?: string;
        aggregatorName?: string;
        merchantCode?: string;
    }): Promise<any>;
}
declare class Rewards {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pageId - Pagination page id
     * @param {number} arg.pageSize - Pagination page size
     * @summary: List of giveaways of the current application.
     * @description: List of giveaways of the current application.
     */
    showGiveaways({ pageId, pageSize }?: {
        pageId: string;
        pageSize: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Giveaway} arg.body
     * @summary: List of giveaways of the current application.
     * @description: Adds a new giveaway.
     */
    saveGiveAway({ body }?: {
        body: Giveaway;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Giveaway ID
     * @summary: Get giveaway by ID.
     * @description: Get giveaway by ID.
     */
    getGiveawayById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Giveaway ID
     * @param {Giveaway} arg.body
     * @summary: Updates the giveaway by it's ID.
     * @description: Updates the giveaway by it's ID.
     */
    updateGiveAway({ id, body }?: {
        id: string;
        body: Giveaway;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.audienceId - Audience id
     * @summary: Get the Giveaway audience status
     * @description: Get giveaway audience status
     */
    getGiveawayAudienceStatus({ audienceId }?: {
        audienceId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List of offers of the current application.
     * @description: List of offers of the current application.
     */
    showOffers({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.name - The name given to the offer.
     * @param {string} arg.cookie - User's session cookie. This cookie is set in
     *   browser cookie when logged-in to fynd's authentication system i.e.
     *   `Grimlock` or by using grimlock-backend SDK for backend implementation.
     * @summary: Get offer by name
     * @description: Use this API to get the offer details and configuration by entering the name of the offer.
     */
    getOfferByName({ name, cookie }?: {
        name: string;
        cookie: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.name - The name given to the offer.
     * @param {Offer} arg.body
     * @summary: Update offer by name
     * @description: Use this API to update the offer details
     */
    updateOfferByName({ name, body }?: {
        name: string;
        body: Offer;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {AppUser} arg.body
     * @summary: Update user status
     * @description: Use this API to update the user status active/archive
     */
    updateUserStatus({ userId, body }?: {
        userId: string;
        body: AppUser;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @summary: Get user reward details
     * @description: Use this API to get the user reward details
     */
    user({ userId }?: {
        userId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {string} [arg.pageId] - PageID is the ID of the requested page.
     *   For first request it should be kept empty.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all transactions of reward points
     * @description: Use this API to get a list of points transactions.
     */
    getUserPointsHistory({ userId, pageId, pageSize }?: {
        userId: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all transactions of reward points
     * @description: Use this API to get a list of points transactions.
     */
    getUserPointsHistoryPaginator({ userId, companyId, applicationId, pageSize, }?: {
        userId: string;
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all valid android paths
     * @description: Use this API to get a list of valid android paths required by the Rewards INIT API to validate a fradualent device.
     */
    getRewardsConfiguration({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ConfigurationRequest} arg.body
     * @summary: Updates the collection with given android paths.
     * @description: Updates the configuration or inserts new records.
     */
    setRewardsConfiguration({ body }?: {
        body: ConfigurationRequest;
    }): Promise<any>;
}
declare class Analytics {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get statistics groups
     * @description: Get statistics groups
     */
    getStatiscticsGroups({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.groupName - Group name
     * @summary: Get statistics group components
     * @description: Get statistics group components
     */
    getStatiscticsGroupComponents({ groupName }?: {
        groupName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics csv
     * @description: Get component statistics csv
     */
    getComponentStatsCSV({ componentName }?: {
        componentName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics pdf
     * @description: Get component statistics pdf
     */
    getComponentStatsPDF({ componentName }?: {
        componentName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics
     * @description: Get component statistics
     */
    getComponentStats({ componentName }?: {
        componentName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @summary: Get abandon carts list
     * @description: Get abandon carts list
     */
    getAbandonCartList({ fromDate, toDate, pageNo, pageSize }?: {
        fromDate: string;
        toDate: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company Id
     * @param {string} arg.applicationId - Application Id
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @param {number} [arg.pageSize] - Current page size
     * @summary: Get abandon carts list
     * @description: Get abandon carts list
     */
    getAbandonCartListPaginator({ companyId, applicationId, fromDate, toDate, pageSize, }?: {
        companyId: string;
        applicationId: string;
        fromDate: string;
        toDate: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @summary: Get abandon carts csv
     * @description: Get abandon carts csv
     */
    getAbandonCartsCSV({ fromDate, toDate }?: {
        fromDate: string;
        toDate: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Cart Id
     * @summary: Get abandon carts details
     * @description: Get abandon cart details
     */
    getAbandonCartDetail({ cartId }?: {
        cartId: string;
    }): Promise<any>;
}
declare class Partner {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id for which proxy URL will
     *   be generated
     * @param {AddProxyReq} arg.body
     * @summary: Create proxy URL for the external URL
     * @description: Use this API to generate proxy URL for the external URL
     */
    addProxyPath({ extensionId, body }?: {
        extensionId: string;
        body: AddProxyReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id for which proxy URL needs
     *   to be removed
     * @param {string} arg.attachedPath - Attachaed path slug
     * @summary: Remove proxy URL for the external URL
     * @description: Use this API to remove the proxy URL which is already generated for the external URL
     */
    removeProxyPath({ extensionId, attachedPath }?: {
        extensionId: string;
        attachedPath: string;
    }): Promise<any>;
}
type ApplicationResponse = {
    application?: ApplicationData;
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
type ApplicationData = {
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
    slug?: string;
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
    priority: PriorityEnum;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: any[];
    description?: string;
    priority: PriorityEnum;
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
    priority?: PriorityEnum;
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
    type: HistoryTypeEnum;
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
    ticket?: Ticket;
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
    type: TicketAssetTypeEnum;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: TicketAsset[];
};
type AddTicketPayload = {
    created_by?: any;
    status?: string;
    priority?: PriorityEnum;
    category: string;
    content: TicketContent;
    _custom_json?: any;
};
type Priority = {
    key: PriorityEnum;
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
    category: TicketCategory;
    sub_category?: string;
    source: TicketSourceEnum;
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
type Activity = {
    current_state?: any;
    document_id?: string;
    previous_state?: any;
};
type ActivityDump = {
    activity?: Activity;
    created_by?: CreatedBy;
    date_meta?: DateMeta;
    id?: string;
    type?: string;
};
type AddMediaListRequest = {
    entity_id?: string;
    entity_type?: string;
    media_list?: AddMediaRequest[];
    ref_id?: string;
    ref_type?: string;
};
type AddMediaRequest = {
    cloud_id?: string;
    cloud_name?: string;
    cloud_provider?: string;
    entity_id?: string;
    entity_type?: string;
    media_url?: string;
    ref_id?: string;
    ref_type?: string;
    tags?: string[];
    thumbnail_url?: string;
    type?: string;
};
type ApproveRequest = {
    approve?: boolean;
    entity_type?: string;
    id: string;
    reason?: string;
};
type Attribute = {
    date_meta?: DateMeta;
    description?: string;
    id?: string;
    name?: string;
    slug?: string;
    tags?: TagMeta[];
};
type AttributeObject = {
    description?: string;
    name: string;
    slug?: string;
    title?: string;
    type: string;
    value: number;
};
type CreatedBy = {
    id?: string;
    name?: string;
    tags?: TagMeta[];
};
type CursorGetResponse = {
    items?: any[];
    page?: Page;
};
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DeviceMeta = {
    app_version?: string;
    platform?: string;
};
type Entity = {
    id?: string;
    type?: string;
};
type EntityRequest = {
    entity_id?: string;
    entity_type?: string;
};
type FeedbackAttributes = {
    items?: Attribute[];
    page?: Page;
};
type FeedbackError = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type FeedbackState = {
    active?: boolean;
    archive?: boolean;
    media?: string;
    qna?: boolean;
    rating?: boolean;
    review?: boolean;
};
type GetResponse = {
    data?: any;
    page?: Page;
};
type GetReviewResponse = {
    facets?: ReviewFacet[];
    items?: any[];
    page?: Page;
    sort?: SortMethod[];
};
type InsertResponse = {
    count?: number;
};
type MediaMeta = {
    max_count?: number;
    size?: number;
    type?: string;
};
type MediaMetaRequest = {
    max_count: number;
    size: number;
};
type NumberGetResponse = {
    items?: any[];
    page?: Page;
};
type PageCursor = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size: number;
    type: string;
};
type PageNumber = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type Rating = {
    attributes?: Attribute[];
    attributes_slugs?: string[];
    ui?: UI;
};
type RatingRequest = {
    attributes: string[];
    ui?: UI;
};
type ReportAbuseRequest = {
    description?: string;
    entity_id: string;
    entity_type: string;
};
type Review = {
    description?: string;
    header?: string;
    image_meta?: MediaMeta;
    title?: string;
    video_meta?: MediaMeta;
    vote_allowed?: boolean;
};
type ReviewFacet = {
    display?: string;
    name?: string;
    selected?: boolean;
    slug?: string;
    type?: string;
};
type ReviewRequest = {
    description: string;
    header: string;
    image_meta: MediaMetaRequest;
    is_vote_allowed: boolean;
    title: string;
    video_meta: MediaMetaRequest;
};
type SaveAttributeRequest = {
    description?: string;
    name: string;
    slug: string;
};
type SortMethod = {
    name?: string;
    selected?: boolean;
    type?: string;
};
type TagMeta = {
    media?: MediaMeta[];
    name?: string;
    type?: string;
};
type Template = {
    date_meta?: DateMeta;
    entity?: Entity;
    id?: string;
    name?: string;
    rating?: Rating;
    review?: Review;
    state?: FeedbackState;
    tags?: TagMeta[];
};
type TemplateGetResponse = {
    items?: Template[];
    page?: Page;
};
type TemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type TemplateRequestList = {
    template_list: TemplateRequest[];
};
type UI = {
    feedback_question?: string[];
    icon?: UIIcon;
    text?: string[];
    type?: string;
};
type UIIcon = {
    active?: string;
    inactive?: string;
    selected?: string[];
};
type UpdateAttributeRequest = {
    description?: string;
    name: string;
    slug?: string;
};
type UpdateResponse = {
    count?: number;
};
type UpdateReviewRequest = {
    active?: boolean;
    application?: string;
    approve?: boolean;
    archive?: boolean;
    attributes_rating?: AttributeObject[];
    description?: string;
    device_meta?: DeviceMeta;
    entity_id?: string;
    entity_type?: string;
    media_resource?: MediaMeta[];
    rating?: number;
    review_id?: string;
    template_id?: string;
    title?: string;
};
type UpdateTemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type UpdateTemplateStatusRequest = {
    active?: boolean;
    archive?: boolean;
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
    type: PageType;
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
type OneTimeChargeItem = {
    name: string;
    term?: string;
    pricing_type: string;
    price: EntityChargePrice;
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
};
type CreateOneTimeCharge = {
    name: string;
    charge: OneTimeChargeItem;
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
type OneTimeChargeEntity = {
    _id?: string;
    name?: string;
    status?: string;
    activated_on?: string;
    cancelled_on?: string;
    metadata?: any;
    return_url?: string;
    is_test?: boolean;
    pricing_type?: string;
    subscriber_id?: string;
    entity_type?: string;
    entity_id?: string;
    meta?: any;
    price?: EntityChargePrice;
};
type CreateOneTimeChargeResponse = {
    charge?: OneTimeChargeEntity;
    confirm_url?: string;
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
    credit_balance?: number;
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
    success: boolean;
    display_fields: string[];
    app_id: string;
    created: boolean;
    aggregators?: any[];
    excluded_fields: string[];
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    key: string;
    is_active?: boolean;
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
    success: boolean;
    aggregator: string[];
};
type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    code?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
    package_name?: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    intent_app?: IntentApp[];
    card_isin?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_number?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    timeout?: number;
    card_fingerprint?: string;
    aggregator_name: string;
    logo_url?: PaymentModeLogo;
    exp_month?: number;
    retry_count?: number;
    expired?: boolean;
    card_token?: string;
    card_type?: string;
    remaining_limit?: number;
    card_id?: string;
    cod_limit?: number;
    display_name?: string;
    intent_app_error_list?: string[];
    fynd_vpa?: string;
    card_brand?: string;
    card_brand_image?: string;
    card_name?: string;
    code?: string;
    nickname?: string;
    name?: string;
    exp_year?: number;
    intent_flow?: boolean;
    display_priority?: number;
    cod_limit_per_order?: number;
    merchant_code?: string;
    card_issuer?: string;
    card_reference?: string;
};
type RootPaymentMode = {
    save_card?: boolean;
    name: string;
    display_priority: number;
    aggregator_name?: string;
    list?: PaymentModeList[];
    display_name: string;
    add_card_enabled?: boolean;
    anonymous_enable?: boolean;
    is_pay_by_card_pl?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type Payout = {
    payouts_aggregators: any[];
    customers: any;
    is_active: boolean;
    more_attributes: any;
    unique_transfer_no: any;
    transfer_type: string;
    is_default: boolean;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    ifsc_code: string;
    pincode?: number;
    branch_name?: string;
    account_type: string;
    account_holder?: string;
    state?: string;
    city?: string;
    country?: string;
    account_no?: string;
    bank_name?: string;
};
type PayoutRequest = {
    unique_external_id: string;
    aggregator: string;
    is_active: boolean;
    bank_details: PayoutBankDetails;
    transfer_type: string;
    users: any;
};
type PayoutResponse = {
    success: boolean;
    aggregator: string;
    payouts: any;
    payment_status: string;
    is_active: boolean;
    created: boolean;
    bank_details: any;
    unique_transfer_no: string;
    transfer_type: string;
    users: any;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    success: boolean;
    is_active: boolean;
};
type UpdatePayoutRequest = {
    unique_external_id: string;
    is_default: boolean;
    is_active: boolean;
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
    is_verified_flag?: boolean;
    success: boolean;
    data?: any;
    message: string;
};
type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    branch_name: string;
    account_holder: string;
    account_no: string;
    bank_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    branch_name: string;
    success?: boolean;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    account_holder: string;
    account_no: string;
    id: number;
    email: string;
    mobile?: string;
    transfer_mode: string;
    beneficiary_id: string;
    title: string;
    created_on: string;
    address: string;
    modified_on: string;
    display_name: string;
    comment?: string;
    delights_user_name?: string;
    subtitle: string;
    ifsc_code: string;
    branch_name?: string;
    is_active: boolean;
    bank_name: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    payment_gateway?: string;
    current_status?: string;
    order_id?: string;
    extra_meta?: any;
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
    success: boolean;
    message: string;
    order_id: string;
};
type PlatformPaymentOptions = {
    enabled: boolean;
    callback_url?: any;
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
    payment_selection_lock?: any;
    source: string;
    mode_of_payment: string;
    methods: any;
    cod_charges?: number;
};
type PlatfromPaymentConfig = {
    success: boolean;
    data: PlatformPaymentOptions;
    message: string;
};
type UpdatePlatformPaymentConfig = {
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
    payment_selection_lock?: any;
    methods: any;
    cod_charges?: number;
};
type CODdata = {
    remaining_limit: number;
    limit: number;
    is_active: boolean;
    user_id: string;
    usages: number;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type SetCODForUserRequest = {
    mobileno: string;
    merchant_user_id: string;
    is_active: boolean;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type EdcModelData = {
    aggregator: string;
    models: string[];
    aggregator_id: number;
};
type EdcAggregatorAndModelListResponse = {
    success: boolean;
    data: EdcModelData[];
};
type StatisticsData = {
    inactive_device_count: number;
    active_device_count: number;
};
type EdcDeviceStatsResponse = {
    success: boolean;
    statistics: StatisticsData;
};
type EdcAddRequest = {
    edc_device_serial_no: string;
    aggregator_id: number;
    device_tag?: string;
    terminal_serial_no: string;
    edc_model: string;
    store_id: number;
};
type EdcDevice = {
    application_id: string;
    edc_models?: string;
    edc_device_serial_no: string;
    aggregator_id: number;
    device_tag: string;
    is_active: string;
    aggregator_name?: string;
    terminal_serial_no: string;
    merchant_store_pos_code?: string;
    terminal_unique_identifier: string;
    store_id: number;
};
type EdcDeviceAddResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    edc_device_serial_no?: string;
    aggregator_id?: number;
    device_tag?: string;
    is_active?: string;
    merchant_store_pos_code?: string;
    edc_model?: string;
    store_id?: number;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    success: boolean;
    items: EdcDevice[];
    page: Page;
};
type PaymentInitializationRequest = {
    currency: string;
    aggregator: string;
    device_id?: string;
    email: string;
    method: string;
    amount: number;
    vpa?: string;
    contact: string;
    order_id: string;
    timeout?: number;
    merchant_order_id: string;
    razorpay_payment_id?: string;
    customer_id: string;
};
type PaymentInitializationResponse = {
    currency?: string;
    success: boolean;
    aggregator: string;
    device_id?: string;
    method: string;
    amount?: number;
    vpa?: string;
    upi_poll_url?: string;
    timeout?: number;
    bqr_image?: string;
    aggregator_order_id?: string;
    virtual_id?: string;
    merchant_order_id: string;
    customer_id?: string;
    polling_url: string;
    razorpay_payment_id?: string;
    status?: string;
};
type PaymentStatusUpdateRequest = {
    currency: string;
    aggregator: string;
    device_id?: string;
    email: string;
    method: string;
    amount: number;
    vpa?: string;
    contact: string;
    order_id: string;
    merchant_order_id: string;
    customer_id: string;
    status: string;
};
type PaymentStatusUpdateResponse = {
    success?: boolean;
    retry: boolean;
    redirect_url?: string;
    aggregator_name: string;
    status: string;
};
type ResendOrCancelPaymentRequest = {
    request_type: string;
    device_id?: string;
    order_id: string;
};
type LinkStatus = {
    status: boolean;
    message: string;
};
type ResendOrCancelPaymentResponse = {
    success: boolean;
    data: LinkStatus;
};
type ShipmentStatus = {
    status: string;
    ops_status: string;
    hex_code: string;
    actual_status: string;
    title: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type UserDataInfo = {
    email?: string;
    mobile?: string;
    last_name?: string;
    name?: string;
    gender?: string;
    uid?: number;
    is_anonymous_user?: boolean;
    first_name?: string;
    avis_user_id?: string;
};
type PlatformItem = {
    l3_category?: number;
    images?: string[];
    can_cancel?: boolean;
    department_id?: number;
    color?: string;
    l1_category?: string[];
    size?: string;
    can_return?: boolean;
    l3_category_name?: string;
    name?: string;
    id?: number;
    code?: string;
    image?: string[];
};
type GSTDetailsData = {
    gstin_code: string;
    tax_collected_at_source: number;
    value_of_good: number;
    gst_fee: number;
    brand_calculated_amount: number;
};
type Prices = {
    tax_collected_at_source?: number;
    amount_paid?: number;
    price_effective?: number;
    refund_credit?: number;
    price_marked?: number;
    delivery_charge?: number;
    discount?: number;
    cashback?: number;
    value_of_good?: number;
    coupon_value?: number;
    amount_paid_roundoff?: number;
    fynd_credits?: number;
    cod_charges?: number;
    cashback_applied?: number;
    refund_amount?: number;
    promotion_effective_discount?: number;
};
type BagUnit = {
    can_cancel?: boolean;
    status: any;
    total_shipment_bags: number;
    item?: PlatformItem;
    can_return?: boolean;
    ordering_channel: string;
    gst?: GSTDetailsData;
    item_quantity: number;
    bag_id: number;
    shipment_id: string;
    prices?: Prices;
};
type ShipmentItem = {
    company?: any;
    total_shipments_in_order: number;
    application?: any;
    payment_methods?: any;
    shipment_created_at: number;
    shipment_status?: ShipmentStatus;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    channel?: any;
    fulfilling_centre: string;
    total_bags_count: number;
    user?: UserDataInfo;
    bags?: BagUnit[];
    id: string;
    prices?: Prices;
    sla?: any;
    created_at: string;
};
type FilterInfoOption = {
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    value: string;
    type: string;
    text: string;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    applied_filters?: any;
    filters?: FiltersInfo[];
    page?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode?: string;
};
type ShipmentStatusData = {
    status?: string;
    id?: number;
    bag_list?: string[];
    shipment_id?: string;
    created_at?: string;
};
type TrackingList = {
    status: string;
    is_current?: boolean;
    is_passed?: boolean;
    time?: string;
    text: string;
};
type BagStateMapper = {
    app_facing?: boolean;
    journey_type: string;
    display_name: string;
    is_active?: boolean;
    name: string;
    notify_customer?: boolean;
    app_display_name?: string;
    state_type: string;
    app_state_name?: string;
    bs_id: number;
};
type BagStatusHistory = {
    delivery_partner_id?: number;
    status: string;
    bag_state_mapper?: BagStateMapper;
    updated_at?: string;
    store_id?: number;
    delivery_awb_number?: string;
    state_id?: number;
    forward?: boolean;
    display_name?: string;
    app_display_name?: string;
    state_type?: string;
    bsh_id?: number;
    kafka_sync?: boolean;
    reasons?: any[];
    bag_id?: number;
    shipment_id?: string;
    created_at?: string;
};
type DPDetailsData = {
    gst_tag?: string;
    pincode?: string;
    track_url?: string;
    name?: string;
    awb_no?: string;
    country?: string;
    id?: number;
    eway_bill_id?: string;
};
type FulfillingStore = {
    city: string;
    contact_person: string;
    pincode: string;
    phone: string;
    meta: any;
    state: string;
    address: string;
    store_name: string;
    country: string;
    fulfillment_channel: string;
    id: number;
    code: string;
};
type UserDetailsData = {
    city: string;
    pincode: string;
    email?: string;
    phone: string;
    state: string;
    address: string;
    name: string;
    country: string;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type CurrentStatus = {
    delivery_partner_id?: number;
    status?: string;
    bag_state_mapper?: BagStateMapper;
    updated_at?: number;
    store_id?: number;
    state_id?: number;
    shipment_id?: string;
    state_type?: string;
    kafka_sync?: boolean;
    bag_id?: number;
    delivery_awb_number?: string;
    current_status_id: number;
    created_at?: string;
};
type PlatformDeliveryAddress = {
    city?: string;
    area?: string;
    contact_person?: string;
    pincode?: string;
    latitude?: number;
    email?: string;
    phone?: string;
    state?: string;
    address2?: string;
    updated_at?: string;
    address_category?: string;
    version?: string;
    country?: string;
    longitude?: number;
    landmark?: string;
    address1?: string;
    address_type?: string;
    created_at?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    added_to_fynd_cash: boolean;
    tax_collected_at_source?: number;
    gst_tag: string;
    refund_credit: number;
    discount: number;
    value_of_good: number;
    fynd_credits: number;
    cod_charges: number;
    cashback_applied: number;
    cashback: number;
    brand_calculated_amount: number;
    total_units: number;
    item_name: string;
    size: string;
    delivery_charge: number;
    coupon_value: number;
    amount_paid_roundoff?: number;
    transfer_price: number;
    gst_fee: number;
    coupon_effective_discount: number;
    price_effective: number;
    amount_paid: number;
    price_marked: number;
    gst_tax_percentage: number;
    hsn_code: string;
    promotion_effective_discount: number;
    identifiers: Identifier;
};
type BagGST = {
    gstin_code?: string;
    gst_tag?: string;
    is_default_hsn_code?: boolean;
    gst_tax_percentage?: number;
    value_of_good?: number;
    hsn_code?: string;
    gst_fee?: number;
    brand_calculated_amount?: number;
};
type DiscountRules = {
    value?: number;
    type?: string;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type AppliedPromos = {
    discount_rules?: DiscountRules[];
    buy_rules?: BuyRules[];
    promotion_name?: string;
    promotion_type?: string;
    promo_id?: string;
    amount?: number;
    mrp_promotion?: boolean;
    article_quantity?: number;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
};
type OrderBrandName = {
    company?: string;
    brand_name: string;
    logo: string;
    modified_on?: string;
    id: number;
    created_on: string;
};
type OrderBags = {
    item?: PlatformItem;
    quantity?: number;
    parent_promo_bags?: any;
    article?: OrderBagArticle;
    identifier?: string;
    current_status?: CurrentStatus;
    can_cancel?: boolean;
    delivery_address?: PlatformDeliveryAddress;
    entity_type?: string;
    line_number?: number;
    display_name?: string;
    prices?: Prices;
    can_return?: boolean;
    financial_breakup?: FinancialBreakup;
    gst_details?: BagGST;
    applied_promos?: AppliedPromos[];
    bag_configs?: BagConfigs;
    brand?: OrderBrandName;
    bag_id: number;
    seller_identifier?: string;
};
type OrderDetailsData = {
    source?: string;
    order_value?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    cod_charges?: string;
    fynd_order_id: string;
    tax_details?: any;
    affiliate_id?: string;
    order_date?: string;
};
type ShipmentInfoResponse = {
    journey_type?: string;
    email_id: string;
    is_fynd_coupon: boolean;
    replacement_details?: string;
    fyndstore_emp: any;
    items: any[];
    user_agent?: string;
    lock_status: string;
    is_not_fynd_source: boolean;
    tracking_url: string;
    kirana_store_id?: string;
    payments?: ShipmentPayments;
    shipment_quantity?: number;
    can_break: string;
    delivery_slot?: any;
    status?: ShipmentStatusData;
    mid?: string;
    payment_mode?: string;
    current_shipment_status: any;
    forward_order_status?: any[];
    packaging_type?: string;
    coupon?: any;
    pay_button?: string;
    order_status: any;
    shipment_id: string;
    tracking_list?: TrackingList[];
    go_green?: boolean;
    is_fynd_store?: string;
    bag_status_history?: BagStatusHistory[];
    priority_text?: string;
    affiliate_shipment_id: string;
    forward_tracking_list?: any[];
    is_invoiced: boolean;
    can_cancel?: boolean;
    beneficiary_details?: boolean;
    total_items?: number;
    total_bags?: number;
    platform_logo: boolean;
    vertical?: string;
    invoice: any;
    dp_details?: DPDetailsData;
    user_info?: any;
    forward_shipment_status?: any[];
    fulfilling_store?: FulfillingStore;
    delivery_status: any[];
    escalation?: any;
    refund_text?: string;
    is_packaging_order: boolean;
    delivery_details?: UserDetailsData;
    enable_dp_tracking?: boolean;
    refund_details?: any;
    bags?: OrderBags[];
    order?: OrderDetailsData;
    is_pdsr?: string;
    prices?: Prices;
    status_progress: number;
    user_id: string;
    company: any;
    secured_delivery_flag?: string;
    due_date?: string;
    ordering_store: any;
    order_created_time?: string;
    credit_note_id: string;
    billing_details?: UserDetailsData;
    shipment_status?: string;
    child_nodes?: string[];
    enable_tracking?: boolean;
    can_return?: boolean;
    gst_details?: GSTDetailsData;
    order_type: string;
    shipment_images?: string[];
    picked_date?: string;
    operational_status?: string;
    custom_meta?: any[];
    bank_data?: any;
};
type OrderingStore = {
    city: string;
    contact_person: string;
    pincode: string;
    phone: string;
    meta: any;
    state: string;
    address: string;
    store_name: string;
    country: string;
    id: string;
    code: string;
};
type PlatformShipment = {
    journey_type?: string;
    user_agent?: string;
    payments?: ShipmentPayments;
    shipment_quantity?: number;
    delivery_slot?: any;
    status?: ShipmentStatusData;
    payment_mode?: string;
    packaging_type?: string;
    coupon?: any;
    shipment_id: string;
    tracking_list?: TrackingList[];
    bag_status_history?: BagStatusHistory[];
    priority_text?: string;
    total_items?: number;
    total_bags?: number;
    platform_logo?: string;
    vertical?: string;
    dp_details?: DPDetailsData;
    fulfilling_store?: FulfillingStore;
    delivery_details?: UserDetailsData;
    enable_dp_tracking?: boolean;
    bags?: OrderBags[];
    order?: OrderDetailsData;
    prices?: Prices;
    ordering_store?: OrderingStore;
    billing_details?: UserDetailsData;
    shipment_status?: string;
    gst_details?: GSTDetailsData;
    shipment_images?: string[];
    picked_date?: string;
    operational_status?: string;
    custom_meta?: any[];
};
type OrderMeta = {
    currency_symbol?: string;
    ordering_store?: number;
    employee_id?: number;
    extra_meta?: any;
    staff?: any;
    payment_type?: string;
    order_child_entities?: string[];
    cart_id?: number;
    order_platform?: string;
    comment?: string;
    order_type?: string;
    mongo_cart_id?: number;
    customer_note?: string;
    files?: any[];
    order_tags?: any[];
};
type OrderDict = {
    meta?: OrderMeta;
    prices?: Prices;
    fynd_order_id: string;
    tax_details?: any;
    payment_methods?: any;
    order_date: string;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    total_items?: number;
    actions?: any[];
    index?: number;
    value?: string;
    text?: string;
};
type SuperLane = {
    total_items?: number;
    options?: SubLane[];
    value: string;
    text: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    name?: string;
    value?: string;
    display?: string;
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    order_created_time?: string;
    user_info?: UserDataInfo;
    payment_mode?: string;
    order_value?: number;
    meta?: any;
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
    shipments?: PlatformShipment[];
    total_order_value?: number;
    order_id?: string;
};
type OrderListingResponse = {
    message?: string;
    total_count?: number;
    lane?: string;
    items?: PlatformOrderItems[];
    success?: boolean;
    page?: Page;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    options?: Options[];
    value: number;
    key: string;
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    status?: string;
    updated_time?: string;
    updated_at?: string;
    reason?: string;
    meta?: any;
    awb?: string;
    shipment_type?: string;
    account_name?: string;
    raw_status?: string;
    last_location_recieved_at?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    filters?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    returned?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    processed?: FiltersInfo[];
};
type FiltersResponse = {
    global_filter?: FiltersInfo[];
    advance_filter?: AdvanceFilterInfo;
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    status?: string;
    report_name?: string;
    report_created_at?: string;
    request_details?: any;
    display_name?: string;
    s3_key?: string;
    report_requested_at?: string;
    report_type?: string;
    report_id?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    article_id?: string;
    company_id?: string;
    item_id?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    message?: string;
    value?: string;
    type?: string;
};
type JioCodeUpsertResponse = {
    trace_id?: string;
    identifier?: string;
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    invoice?: any;
    store_id?: string;
    store_code?: string;
    data?: any;
    store_name?: string;
    do_invoice_label_generated: boolean;
    label?: any;
    company_id?: string;
    invoice_status?: string;
    batch_id: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type FileResponse = {
    cdn?: URL;
    file_path?: string;
    method?: string;
    content_type?: string;
    tags?: string[];
    namespace?: string;
    upload?: FileUploadResponse;
    file_name?: string;
    size?: number;
    operation?: string;
};
type bulkListingData = {
    successful_shipments?: any[];
    processing_shipments?: string[];
    store_name?: string;
    failed?: number;
    company_id?: number;
    status?: string;
    excel_url?: string;
    uploaded_on?: string;
    successful?: number;
    processing?: number;
    user_name?: string;
    id?: string;
    failed_shipments?: any[];
    store_id?: number;
    user_id?: string;
    store_code?: string;
    file_name?: string;
    total?: number;
    batch_id?: string;
};
type BulkListingPage = {
    has_next?: boolean;
    type?: string;
    has_previous?: boolean;
    current?: number;
    size?: number;
    total?: number;
};
type BulkListingResponse = {
    success?: boolean;
    error?: string;
    data?: bulkListingData[];
    page?: BulkListingPage;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    question_set?: QuestionSet[];
    id?: number;
    display_name?: string;
    qc_type?: string[];
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
    failed_shipments_count?: number;
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    successful_shipments_count?: number;
    total_shipments_count?: number;
    company_id?: string;
    batch_id?: string;
};
type BulkActionDetailsResponse = {
    status?: boolean;
    message?: string;
    uploaded_by?: string;
    data?: BulkActionDetailsDataField[];
    uploaded_on?: string;
    failed_records?: string[];
    error?: string[];
    success?: string;
    user_id?: string;
};
type Attributes = {
    brand_name?: string;
    marketer_name?: string;
    essential?: string;
    primary_material?: string;
    primary_color_hex?: string;
    name?: string;
    gender?: string[];
    primary_color?: string;
    marketer_address?: string;
};
type Item = {
    branch_url?: string;
    color?: string;
    l1_category_id?: number;
    slug_key: string;
    l3_category?: number;
    meta?: any;
    webstore_product_url?: string;
    can_cancel?: boolean;
    l2_category?: string[];
    l1_category?: string[];
    attributes: Attributes;
    l3_category_name?: string;
    brand_id: number;
    code?: string;
    image: string[];
    department_id?: number;
    can_return?: boolean;
    l2_category_id?: number;
    name: string;
    gender?: string;
    last_updated_at?: string;
    item_id: number;
    brand: string;
    size: string;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Dimensions = {
    length?: number;
    height?: number;
    unit?: string;
    width?: number;
    is_default?: boolean;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type Article = {
    return_config?: ReturnConfig;
    raw_meta?: any;
    child_details?: any;
    _id: string;
    dimensions?: Dimensions;
    a_set?: any;
    uid: string;
    weight?: Weight;
    code?: string;
    seller_identifier: string;
    size: string;
    identifiers: Identifier;
    is_set?: boolean;
    esp_modified?: any;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    is_returnable: boolean;
};
type B2BPODetails = {
    docker_number?: string;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
    po_line_amount?: number;
    item_base_price?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type ArticleDetails = {
    status?: any;
};
type StoreAddress = {
    pincode: number;
    latitude: number;
    email?: string;
    updated_at: string;
    version?: string;
    longitude: number;
    landmark?: string;
    created_at: string;
    city: string;
    contact_person: string;
    phone: string;
    country: string;
    address_type: string;
    area?: string;
    state: string;
    address2?: string;
    address_category: string;
    country_code: string;
    address1: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    password?: string;
    enabled: boolean;
    username?: string;
    user?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type Document = {
    legal_name: string;
    verified: boolean;
    value: string;
    url?: string;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type StoreMeta = {
    ewaybill_portal_details?: any;
    gst_credentials: StoreGstCredentials;
    display_name: string;
    additional_contact_details?: any;
    product_return_config?: any;
    stage: string;
    documents?: StoreDocuments;
    notification_emails?: string[];
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_number?: string;
    timing?: any[];
};
type Store = {
    pincode: string;
    latitude: number;
    mall_area?: string;
    updated_at?: string;
    store_address_json?: StoreAddress;
    login_username: string;
    is_enabled_for_recon?: boolean;
    longitude: number;
    vat_no?: string;
    company_id: number;
    location_type: string;
    created_at: string;
    city: string;
    parent_store_id?: number;
    store_email: string;
    contact_person: string;
    phone: number;
    meta: StoreMeta;
    mall_name?: string;
    country: string;
    is_active?: boolean;
    brand_store_tags?: string[];
    is_archived?: boolean;
    state: string;
    brand_id?: any;
    fulfillment_channel: string;
    alohomora_user_id?: number;
    store_active_from?: string;
    code?: string;
    packaging_material_count?: number;
    address2?: string;
    order_integration_id?: string;
    name: string;
    s_id: string;
    address1: string;
};
type AffiliateMeta = {
    due_date?: string;
    quantity?: number;
    loyalty_discount?: number;
    channel_shipment_id?: string;
    coupon_code?: string;
    employee_discount?: number;
    size_level_total_qty?: number;
    is_priority?: boolean;
    box_type?: string;
    channel_order_id?: string;
    order_item_id?: string;
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
};
type BagGSTDetails = {
    igst_tax_percentage: number;
    gstin_code?: string;
    tax_collected_at_source: number;
    gst_tag: string;
    is_default_hsn_code?: boolean;
    cgst_tax_percentage: number;
    sgst_tax_percentage: number;
    igst_gst_fee: string;
    sgst_gst_fee: string;
    cgst_gst_fee: string;
    gst_tax_percentage: number;
    value_of_good: number;
    hsn_code: string;
    gst_fee: number;
    brand_calculated_amount: number;
    hsn_code_id: string;
};
type PDFLinks = {
    po_invoice?: string;
    invoice?: string;
    invoice_a6?: string;
    label_a6?: string;
    invoice_pos?: string;
    label_type: string;
    label_a4?: string;
    label_pos?: string;
    invoice_a4?: string;
    credit_note_url?: string;
    label?: string;
    b2b?: string;
    invoice_type: string;
};
type EInvoice = {
    error_code?: string;
    acknowledge_date?: string;
    signed_invoice?: string;
    error_message?: string;
    irn?: string;
    acknowledge_no?: number;
    signed_qr_code?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type LockData = {
    locked?: boolean;
    lock_message?: string;
    mto?: boolean;
};
type BuyerDetails = {
    city: string;
    pincode: number;
    state: string;
    address: string;
    name: string;
    gstin: string;
    ajio_site_id?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    b2c_buyer_details?: any;
    einvoice_info?: EinvoiceInfo;
    dp_options?: any;
    external?: any;
    dp_sort_key?: string;
    return_affiliate_shipment_id?: string;
    forward_affiliate_shipment_id?: string;
    weight: number;
    formatted?: Formatted;
    return_store_node?: number;
    dp_id?: string;
    same_store_available: boolean;
    ewaybill_info?: any;
    return_details?: any;
    shipment_volumetric_weight?: number;
    timestamp?: ShipmentTimeStamp;
    lock_data?: LockData;
    bag_weight?: any;
    assign_dp_from_sb?: boolean;
    forward_affiliate_order_id?: string;
    packaging_name?: string;
    fulfilment_priority_text?: string;
    b2b_buyer_details?: BuyerDetails;
    shipment_weight?: number;
    awb_number?: string;
    debug_info?: DebugInfo;
    due_date?: string;
    po_number?: string;
    return_awb_number?: string;
    return_affiliate_order_id?: string;
    dp_name?: string;
    order_type?: string;
    store_invoice_updated_date?: string;
    auto_trigger_dp_assignment_acf: boolean;
    marketplace_store_id?: string;
    box_type?: string;
};
type AffiliateDetails = {
    ad_id?: string;
    affiliate_bag_id: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    pdf_links?: PDFLinks;
    shipment_meta: ShipmentMeta;
    affiliate_shipment_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    affiliate_id?: string;
};
type Brand = {
    company: string;
    brand_name: string;
    credit_note_allowed?: boolean;
    script_last_ran?: string;
    logo?: string;
    brand_id: number;
    is_virtual_invoice?: boolean;
    modified_on?: number;
    invoice_prefix?: string;
    start_date?: string;
    pickup_location?: string;
    credit_note_expiry_days?: number;
    created_on?: number;
};
type BagDetailsPlatformResponse = {
    journey_type: string;
    item: Item;
    quantity?: number;
    tags?: string[];
    original_bag_list?: number[];
    qc_required?: any;
    restore_coupon?: boolean;
    reasons?: any[];
    parent_promo_bags?: any;
    article: Article;
    status: BagReturnableCancelableStatus;
    identifier?: string;
    restore_promos?: any;
    current_status: BagStatusHistory;
    meta?: BagMeta;
    bag_status: BagStatusHistory[];
    shipment_id?: string;
    bag_status_history?: BagStatusHistory;
    dates?: Dates;
    article_details?: ArticleDetails;
    entity_type?: string;
    line_number?: number;
    display_name?: string;
    bag_update_time?: number;
    b_type?: string;
    prices: Prices;
    ordering_store?: Store;
    financial_breakup: FinancialBreakup[];
    affiliate_bag_details: AffiliateBagDetails;
    current_operational_status: BagStatusHistory;
    applied_promos?: any[];
    gst_details: BagGSTDetails;
    order_integration_id?: string;
    affiliate_details?: AffiliateDetails;
    no_of_bags_order?: number;
    brand: Brand;
    seller_identifier?: string;
    operational_status?: string;
    b_id: number;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    has_next: boolean;
    item_total: number;
    current: number;
    page_type: string;
    size: number;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    shipment_id?: string;
    status?: number;
    error?: string;
    message?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    status: number;
    message: string;
    error_trace?: string;
};
type StoreReassign = {
    affiliate_id?: string;
    item_id?: string;
    affiliate_order_id?: string;
    reason_ids?: number[];
    store_id: number;
    affiliate_bag_id?: string;
    set_id?: string;
    mongo_article_id?: string;
    bag_id?: number;
    fynd_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_id?: string;
    affiliate_order_id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
    id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    action: string;
    entity_type: string;
    action_type: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    is_locked?: boolean;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    bag_id?: number;
};
type CheckResponse = {
    is_shipment_locked?: boolean;
    affiliate_id?: string;
    lock_status?: boolean;
    status?: string;
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
    shipment_id?: string;
    bags?: Bags[];
    is_bag_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    created_at?: string;
    to_datetime?: string;
    logo_url?: string;
    title?: string;
    from_datetime?: string;
    id: number;
    platform_id?: string;
    company_id?: number;
    platform_name?: string;
    description?: string;
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
    quantity?: number;
    identifier?: string;
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
type ShipmentsRequest = {
    products?: Products[];
    data_updates?: DataUpdates;
    identifier: string;
    reasons?: ReasonsData;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    status?: string;
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    lock_after_transition?: boolean;
    task?: boolean;
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
    force_transition?: boolean;
};
type ShipmentsResponse = {
    status?: number;
    exception?: string;
    message?: string;
    identifier?: string;
    code?: string;
    final_state?: any;
    meta?: any;
    stack_trace?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    address1?: string;
    last_name: string;
    mobile: number;
    state: string;
    phone: number;
    pincode: string;
    city: string;
    email: string;
    country: string;
    first_name: string;
    address2?: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    store_id: number;
    discount: number;
    identifier: any;
    company_id: number;
    transfer_price: number;
    price_marked: number;
    pdf_links?: MarketPlacePdf;
    affiliate_meta: any;
    avl_qty: number;
    price_effective: number;
    unit_price: number;
    item_id: number;
    delivery_charge: number;
    _id: string;
    sku: string;
    amount_paid: number;
    item_size: string;
    seller_identifier: string;
    modified_on: string;
    hsn_code_id: string;
    fynd_store_id: string;
    affiliate_store_id: string;
    quantity: number;
};
type OrderPriority = {
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
};
type ArticleDetails1 = {
    _id: string;
    category: any;
    dimension: any;
    attributes: any;
    weight: any;
    brand_id: number;
    quantity: number;
};
type ShipmentDetails = {
    fulfillment_id: number;
    affiliate_shipment_id: string;
    dp_id?: number;
    articles: ArticleDetails1[];
    box_type?: string;
    shipments: number;
    meta?: any;
};
type LocationDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    fulfillment_type: string;
};
type ShipmentConfig = {
    payment_mode: string;
    shipment: ShipmentDetails[];
    source: string;
    location_details?: LocationDetails;
    identifier: string;
    journey: string;
    action: string;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    affiliate_order_id?: string;
    shipping_address: OrderUser;
    cod_charges: number;
    payment_mode: string;
    user: UserData;
    coupon?: string;
    bags: AffiliateBag[];
    delivery_charges: number;
    billing_address: OrderUser;
    payment?: any;
    order_priority?: OrderPriority;
    shipment?: ShipmentData;
    order_value: number;
    items: any;
    discount: number;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    created_at: string;
    id: string;
    name: string;
    updated_at: string;
    secret: string;
    owner: string;
    token: string;
    meta?: AffiliateAppConfigMeta[];
    description?: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
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
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    config?: AffiliateConfig;
    token: string;
    id: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    bag_end_state?: string;
    create_user?: boolean;
    affiliate: Affiliate;
    store_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
};
type CreateOrderPayload = {
    affiliate_id: string;
    order_info: OrderInfo;
    order_config: OrderConfig;
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
    description: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    user: string;
    l3_detail?: string;
    l1_detail?: string;
    l2_detail?: string;
    type: string;
    message: string;
    ticket_url?: string;
    createdat: string;
    bag_id?: number;
    ticket_id?: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type PostHistoryData = {
    user_name: string;
    message: string;
};
type PostHistoryFilters = {
    shipment_id: string;
    identifier?: string;
    line_number?: string;
};
type PostActivityHistory = {
    data: PostHistoryData;
    filters: PostHistoryFilters[];
};
type PostHistoryDict = {
    activity_history: PostActivityHistory;
};
type PostShipmentHistory = {
    activity_history?: PostHistoryDict[];
};
type SmsDataPayload = {
    brand_name: string;
    payment_mode: string;
    shipment_id: number;
    customer_name: string;
    order_id: string;
    amount_paid: number;
    phone_number: number;
    message: string;
    country_code: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    slug: string;
    bag_id: number;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    remarks?: string;
    status?: string;
    shipment_id?: string;
    bag_list?: number[];
    id: number;
    meta: Meta;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    errors?: string[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    dp_id: number;
    qc_required: string;
    order_type: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type Tax = {
    name: string;
    breakup?: any[];
    amount: any;
    rate: number;
};
type Charge = {
    tax?: Tax;
    name: string;
    type: string;
    code?: string;
    amount: any;
};
type BillingInfo = {
    primary_mobile_number: string;
    first_name: string;
    customer_code?: string;
    address1: string;
    gender?: string;
    primary_email: string;
    pincode: string;
    alternate_mobile_number?: string;
    house_no?: string;
    last_name?: string;
    external_customer_code?: string;
    alternate_email?: string;
    middle_name?: string;
    state: string;
    state_code?: string;
    floor_no?: string;
    title?: string;
    city: string;
    country: string;
    country_code?: string;
    address2?: string;
};
type PaymentMethod = {
    name: string;
    transaction_data?: any;
    refund_by: string;
    amount: number;
    mode: string;
    meta?: any;
    collect_by: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type ShippingInfo = {
    landmark?: string;
    primary_mobile_number: string;
    first_name: string;
    customer_code?: string;
    shipping_type?: string;
    address1: string;
    gender?: string;
    address_type?: string;
    primary_email: string;
    pincode: string;
    alternate_mobile_number?: string;
    house_no?: string;
    last_name?: string;
    geo_location?: any;
    external_customer_code?: string;
    alternate_email?: string;
    middle_name?: string;
    state: string;
    state_code?: string;
    floor_no?: string;
    slot?: any[];
    title?: string;
    city: string;
    country: string;
    country_code?: string;
    address2?: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type LineItem = {
    charges?: Charge[];
    external_line_id?: string;
    quantity?: number;
    custom_messasge?: string;
    meta?: any;
    seller_identifier: string;
};
type ProcessingDates = {
    pack_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
    confirm_by_date?: string;
    dispatch_after_date?: string;
};
type Shipment = {
    line_items: LineItem[];
    external_shipment_id?: string;
    processing_dates?: ProcessingDates;
    priority?: number;
    location_id: number;
    meta?: any;
};
type CreateOrderAPI = {
    charges?: Charge[];
    currency_info?: any;
    external_order_id?: string;
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
    shipping_info: ShippingInfo;
    external_creation_date?: string;
    tax_info?: TaxInfo;
    shipments: Shipment[];
    meta?: any;
};
type CreateOrderErrorReponse = {
    status: number;
    request_id?: string;
    info?: any;
    exception?: string;
    message: string;
    code?: string;
    meta?: string;
    stack_trace?: string;
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
    payment_methods?: PaymentMethods[];
    source?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
    logo_url?: any;
    shipment_assignment?: string;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_inserted?: boolean;
    is_upserted?: boolean;
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
    end_date: string;
    start_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    app_id?: string;
    _custom_json?: any;
    is_active?: boolean;
    words?: string[];
    result: SearchKeywordResult;
};
type GetSearchWordsData = {
    app_id?: string;
    _custom_json?: any;
    is_active?: boolean;
    uid?: string;
    words?: string[];
    result?: any;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type Media = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type AutocompletePageAction = {
    url?: string;
    type?: string;
    query?: any;
    params?: any;
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
    results?: AutocompleteResult[];
    app_id?: string;
    _custom_json?: any;
    is_active?: boolean;
    words?: string[];
};
type GetAutocompleteWordsData = {
    results?: any[];
    app_id?: string;
    _custom_json?: any;
    uid?: string;
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    results?: any[];
    app_id?: string;
    words?: string[];
};
type ProductBundleItem = {
    auto_select?: boolean;
    product_uid: number;
    max_quantity: number;
    auto_add_to_cart?: boolean;
    min_quantity: number;
    allow_remove?: boolean;
};
type ProductBundleRequest = {
    products: ProductBundleItem[];
    modified_on?: string;
    meta?: any;
    page_visibility?: string[];
    slug: string;
    same_store_assignment?: boolean;
    name: string;
    is_active: boolean;
    created_by?: any;
    company_id?: number;
    choice: string;
    logo?: string;
    created_on?: string;
    modified_by?: any;
};
type GetProductBundleCreateResponse = {
    products: ProductBundleItem[];
    modified_on?: string;
    meta?: any;
    page_visibility?: string[];
    slug: string;
    same_store_assignment?: boolean;
    name: string;
    is_active: boolean;
    created_by?: any;
    id?: string;
    company_id?: number;
    choice: string;
    logo?: string;
    created_on?: string;
    modified_by?: any;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    products: ProductBundleItem[];
    modified_on?: string;
    meta?: any;
    page_visibility?: string[];
    slug: string;
    same_store_assignment?: boolean;
    name: string;
    is_active: boolean;
    company_id?: number;
    choice: string;
    logo?: string;
    modified_by?: any;
};
type Size = {
    is_available?: boolean;
    display?: string;
    value?: string;
    quantity?: number;
};
type Price = {
    min_marked?: number;
    max_effective?: number;
    max_marked?: number;
    min_effective?: number;
    currency?: string;
};
type LimitedProductData = {
    identifier?: any;
    images?: string[];
    slug?: string;
    country_of_origin?: string;
    attributes?: any;
    uid?: number;
    quantity?: number;
    name?: string;
    sizes?: string[];
    short_description?: string;
    price?: any;
    item_code?: string;
};
type GetProducts = {
    auto_select?: boolean;
    product_uid?: number;
    max_quantity?: number;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    min_quantity?: number;
    allow_remove?: boolean;
    price?: Price;
    product_details?: LimitedProductData;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    page_visibility?: string[];
    meta?: any;
    slug?: string;
    same_store_assignment?: boolean;
    name?: string;
    is_active?: boolean;
    company_id?: number;
    choice?: string;
    logo?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    brand_id?: number;
    image?: string;
    guide?: Guide;
    modified_on?: string;
    subtitle?: string;
    title: string;
    created_by?: any;
    name: string;
    description?: string;
    active?: boolean;
    tag?: string;
    id?: string;
    company_id?: number;
    created_on?: string;
    modified_by?: any;
};
type GetMultiSizeGuide = {
    brand_id?: number;
    image?: string;
    guide?: any;
    modified_on?: string;
    subtitle?: string;
    title?: string;
    created_by?: any;
    name?: string;
    description?: string;
    active?: boolean;
    tag?: string;
    company_id?: number;
    _id?: string;
    created_on?: string;
    modified_by?: any;
};
type ListSizeGuide = {
    items?: GetMultiSizeGuide[];
    page?: any;
};
type SizeGuideResponse = {
    brand_id?: number;
    guide?: any;
    modified_on?: string;
    subtitle?: string;
    title?: string;
    created_by?: any;
    name?: string;
    id?: string;
    active?: boolean;
    tag?: string;
    company_id?: number;
    created_on?: string;
    modified_by?: any;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemMOQ = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    is_gift?: boolean;
    is_cod?: boolean;
    _custom_json?: any;
    _custom_meta?: MetaFields[];
    moq?: ApplicationItemMOQ;
    alt_text?: any;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type SEOData = {
    title?: any;
    description?: any;
};
type MOQData = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    is_gift?: boolean;
    is_cod?: boolean;
    moq?: MOQData;
    alt_text?: any;
};
type GetConfigMetadataResponse = {
    data: any[];
    condition?: any[];
    values?: any[];
};
type AttributeDetailsGroup = {
    display_type: string;
    slug?: string;
    name: string;
    is_active: boolean;
    key?: string;
    logo?: string;
    unit?: string;
    priority: number;
};
type AppConfigurationDetail = {
    app_id: string;
    slug: string;
    name?: string;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    logo?: string;
    is_default: boolean;
    priority: number;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    has_next: boolean;
    current: number;
    next: number;
    total_count: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    app_id: string;
    name?: string;
    is_active: boolean;
    key: string;
    logo?: string;
    is_default: boolean;
    default_key: string;
    priority: number;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    units?: any[];
    key?: string;
    filter_types?: string[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    detail?: any;
    variant?: any;
    compare?: any;
    similar?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationListingSortConfig = {
    name?: string;
    is_active: boolean;
    key: string;
    logo?: string;
    priority: number;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    end?: number;
    display?: string;
    start?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    value?: string;
    map_values?: any[];
    map?: any;
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
};
type ConfigurationListingFilterConfig = {
    name?: string;
    is_active: boolean;
    display_name?: string;
    key: string;
    value_config?: ConfigurationListingFilterValue;
    logo?: string;
    type: string;
    priority: number;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    display_type: string;
    name: string;
    is_active: boolean;
    size: ProductSize;
    key: string;
    logo?: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    subtitle?: string;
    title?: string;
    is_active: boolean;
    size?: ProductSize;
    key: string;
    logo?: string;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppConfiguration = {
    app_id: string;
    modified_on?: string;
    listing?: ConfigurationListing;
    created_by?: any;
    product?: ConfigurationProduct;
    config_type: string;
    created_on?: string;
    type?: string;
    modified_by?: any;
    config_id?: string;
};
type AppCatalogConfiguration = {
    app_id: string;
    modified_on?: string;
    listing?: ConfigurationListing;
    created_by?: any;
    product?: ConfigurationProduct;
    id?: string;
    config_type: string;
    created_on?: string;
    type?: string;
    modified_by?: any;
    config_id?: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    app_id: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
    config_id?: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersKey = {
    kind?: string;
    display: string;
    name: string;
    operators?: string[];
    logo?: string;
};
type ProductFiltersValue = {
    count?: number;
    max?: number;
    value: any;
    currency_code?: string;
    query_format?: string;
    is_selected: boolean;
    display: string;
    selected_min?: number;
    display_format?: string;
    selected_max?: number;
    currency_symbol?: string;
    min?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    operators: any;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type UserInfo = {
    email?: string;
    username?: string;
    uid?: string;
    user_id?: string;
};
type CollectionSchedule = {
    cron?: string;
    next_schedule?: NextSchedule[];
    start?: string;
    end?: string;
    duration?: number;
};
type CollectionQuery = {
    op: string;
    value: any[];
    attribute: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CreateCollection = {
    created_by?: UserInfo;
    name: string;
    _schedule?: CollectionSchedule;
    is_visible?: boolean;
    query?: CollectionQuery[];
    app_id: string;
    _locale_language?: any;
    sort_on?: string;
    badge?: CollectionBadge;
    logo: CollectionImage;
    visible_facets_keys?: string[];
    meta?: any;
    _custom_json?: any;
    slug: string;
    description?: string;
    is_active?: boolean;
    published?: boolean;
    type: string;
    banners: CollectionBanner;
    allow_sort?: boolean;
    priority?: number;
    seo?: SeoDetail;
    allow_facets?: boolean;
    tags?: string[];
    modified_by?: UserInfo;
};
type BannerImage = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionCreateResponse = {
    name?: string;
    _schedule?: any;
    query?: CollectionQuery[];
    app_id?: string;
    sort_on?: string;
    tag?: string[];
    badge?: any;
    logo?: BannerImage;
    cron?: any;
    visible_facets_keys?: string[];
    meta?: any;
    slug?: string;
    description?: string;
    is_active?: boolean;
    type?: string;
    banners?: ImageUrls;
    allow_sort?: boolean;
    priority?: number;
    allow_facets?: boolean;
};
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type GetCollectionDetailNest = {
    name?: string;
    uid?: string;
    _schedule?: any;
    action?: Action;
    query?: CollectionQuery[];
    app_id?: string;
    tag?: string[];
    badge?: any;
    logo?: Media1;
    cron?: any;
    visible_facets_keys?: string[];
    meta?: any;
    slug?: string;
    description?: string;
    is_active?: boolean;
    type?: string;
    banners?: ImageUrls;
    allow_sort?: boolean;
    priority?: number;
    allow_facets?: boolean;
};
type CollectionListingFilterType = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilterTag = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
    page?: Page;
};
type CollectionDetailResponse = {
    name?: string;
    uid?: string;
    _schedule?: any;
    query?: CollectionQuery[];
    app_id?: string;
    tag?: string[];
    badge?: any;
    logo?: Media1;
    cron?: any;
    visible_facets_keys?: string[];
    meta?: any;
    slug?: string;
    description?: string;
    is_active?: boolean;
    type?: string;
    banners?: ImageUrls;
    allow_sort?: boolean;
    priority?: number;
    allow_facets?: boolean;
};
type UpdateCollection = {
    name?: string;
    _schedule?: CollectionSchedule;
    is_visible?: boolean;
    query?: CollectionQuery[];
    _locale_language?: any;
    sort_on?: string;
    badge?: CollectionBadge;
    logo?: CollectionImage;
    visible_facets_keys?: string[];
    meta?: any;
    _custom_json?: any;
    slug?: string;
    description?: string;
    is_active?: boolean;
    published?: boolean;
    type?: string;
    banners?: CollectionBanner;
    allow_sort?: boolean;
    priority?: number;
    seo?: SeoDetail;
    allow_facets?: boolean;
    tags?: string[];
    modified_by?: UserInfo;
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    type?: string;
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type ProductDetailAttribute = {
    type?: string;
    key?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductBrand = {
    logo?: Media1;
    name?: string;
    uid?: number;
    action?: Action;
};
type Price1 = {
    max?: number;
    currency_code?: string;
    currency_symbol?: string;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    discount?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    attributes?: any;
    uid?: number;
    name?: string;
    short_description?: string;
    teaser_tag?: any;
    tryouts?: string[];
    medias?: Media1[];
    promo_meta?: any;
    color?: string;
    rating_count?: number;
    brand?: ProductBrand;
    image_nature?: string;
    slug: string;
    description?: string;
    has_variant?: boolean;
    type?: string;
    price?: ProductListingPrice;
    sellable?: boolean;
    item_type?: string;
    product_online_date?: string;
    similars?: string[];
    rating?: number;
    highlights?: string[];
    item_code?: string;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
type CatalogInsightItem = {
    count?: number;
    sellable_count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    name?: string;
    total_articles?: number;
    article_freshness?: number;
    total_sizes?: number;
    available_articles?: number;
    available_sizes?: number;
};
type CatalogInsightResponse = {
    item?: CatalogInsightItem;
    brand_distribution?: CatalogInsightBrand;
};
type CrossSellingData = {
    products?: number;
    articles?: number;
};
type CrossSellingResponse = {
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    opt_level: string;
    enabled?: boolean;
    brand_ids?: number[];
    company_id?: number;
    store_ids?: number[];
    platform?: string;
};
type CompanyOptIn = {
    modified_by?: any;
    opt_level: string;
    modified_on: number;
    created_by?: any;
    enabled: boolean;
    brand_ids: number[];
    platform: string;
    company_id: number;
    created_on: number;
    store_ids: number[];
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    name?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_id?: number;
    brand_name?: string;
    total_article?: number;
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
    address?: any;
    timing?: any;
    modified_on?: string;
    name?: string;
    uid?: number;
    documents?: any[];
    display_name?: string;
    store_type?: string;
    store_code?: string;
    additional_contacts?: any[];
    company_id?: number;
    manager?: any;
    created_on?: string;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    format?: string;
    mandatory?: boolean;
    range?: AttributeSchemaRange;
    multi?: boolean;
    type: string;
    allowed_values?: string[];
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type GenderDetail = {
    departments?: string[];
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    slug?: string;
    id?: string;
    name?: string;
    description?: string;
    schema?: AttributeMaster;
    enabled_for_end_consumer?: boolean;
    is_nested?: boolean;
    logo?: string;
    filters?: AttributeMasterFilter;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    meta?: any;
    errors?: any;
    code?: string;
    message?: string;
    status?: number;
};
type DepartmentCreateUpdate = {
    _custom_json?: any;
    slug?: string;
    name: string;
    is_active?: boolean;
    uid?: number;
    synonyms?: string[];
    priority_order: number;
    platforms?: any;
    logo: string;
    tags?: string[];
    _cls?: string;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    username?: string;
    uid?: string;
    contact?: string;
    user_id?: string;
    _id?: string;
};
type GetDepartment = {
    page_size?: number;
    item_type?: string;
    modified_on?: string;
    slug?: string;
    created_by?: UserSerializer;
    name?: string;
    is_active?: boolean;
    uid?: number;
    synonyms?: string[];
    page_no?: number;
    priority_order?: number;
    search?: string;
    logo?: string;
    created_on?: string;
    modified_by?: UserSerializer;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    meta?: any;
    errors?: any;
    code?: string;
    message?: string;
    status?: number;
};
type UserDetail = {
    username: string;
    contact?: string;
    super_user?: boolean;
    user_id: string;
};
type DepartmentModel = {
    verified_on?: string;
    modified_on: string;
    _custom_json?: any;
    slug?: any;
    created_by?: UserDetail;
    name: any;
    verified_by?: UserDetail;
    uid?: number;
    is_active?: boolean;
    synonyms?: any[];
    priority_order: number;
    _id?: any;
    logo: any;
    created_on: string;
    modified_by?: UserDetail;
    _cls?: any;
};
type ProductTemplate = {
    categories?: string[];
    departments?: string[];
    is_expirable?: boolean;
    modified_on?: string;
    slug: string;
    created_by?: any;
    description?: string;
    name?: string;
    is_active?: boolean;
    tag?: string;
    is_archived?: boolean;
    attributes?: string[];
    attributes_schema?: any[];
    is_physical: boolean;
    logo?: string;
    created_on?: string;
    modified_by?: any;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    categories?: string[];
    departments?: string[];
    is_expirable?: boolean;
    slug: string;
    id?: string;
    description?: string;
    name?: string;
    is_active?: boolean;
    tag?: string;
    is_archived?: boolean;
    attributes?: string[];
    attributes_schema?: any[];
    is_physical: boolean;
    logo?: string;
};
type Properties = {
    hsn_code?: any;
    multi_size?: any;
    name?: any;
    command?: any;
    trader_type?: any;
    short_description?: any;
    variants?: any;
    teaser_tag?: any;
    custom_order?: any;
    sizes?: any;
    size_guide?: any;
    tags?: any;
    no_of_boxes?: any;
    slug?: any;
    description?: any;
    is_active?: any;
    media?: any;
    product_publish?: any;
    trader?: any;
    product_group_tag?: any;
    item_type?: any;
    category_slug?: any;
    country_of_origin?: any;
    brand_uid?: any;
    return_config?: any;
    is_dependent?: any;
    currency?: any;
    highlights?: any;
    item_code?: any;
};
type GlobalValidation = {
    definitions?: any;
    title?: string;
    description?: string;
    properties?: Properties;
    required?: string[];
    type?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplatesValidationResponse = {
    template_details?: TemplateDetails;
    data?: TemplateValidationData;
};
type InventoryValidationResponse = {
    message?: string;
    data?: any;
};
type HSNData = {
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type ProductDownloadItemsData = {
    type?: string;
    brand?: string[];
    templates?: string[];
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    url?: string;
    data?: ProductDownloadItemsData;
    trigger_on?: string;
    created_by?: VerifiedBy;
    seller_id?: number;
    id?: string;
    template_tags?: any;
    task_id?: string;
    status?: string;
    completed_on?: string;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
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
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type CategoryRequestBody = {
    departments: number[];
    tryouts?: string[];
    slug?: string;
    name: string;
    is_active: boolean;
    media?: Media2;
    synonyms?: string[];
    level: number;
    marketplaces?: CategoryMapping;
    hierarchy?: Hierarchy[];
    priority?: number;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    departments: number[];
    modified_on?: string;
    tryouts?: string[];
    slug?: string;
    created_by?: any;
    name: string;
    uid?: number;
    media?: Media2;
    synonyms?: string[];
    level: number;
    is_active: boolean;
    id?: string;
    marketplaces?: CategoryMapping;
    created_on?: string;
    modified_by?: any;
    hierarchy?: Hierarchy[];
    priority?: number;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type Trader = {
    address?: string[];
    type?: string;
    name: any;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type ProductCreateUpdateSchemaV2 = {
    requester?: string;
    multi_size?: boolean;
    name: string;
    uid?: number;
    attributes?: any;
    is_image_less_product?: boolean;
    action?: string;
    short_description?: string;
    variant_media?: any;
    is_set?: boolean;
    variants?: any;
    departments: number[];
    teaser_tag?: TeaserTag;
    net_quantity?: NetQuantity;
    custom_order?: CustomOrder;
    sizes: any[];
    size_guide?: string;
    tags?: string[];
    variant_group?: any;
    no_of_boxes?: number;
    _custom_json?: any;
    slug: string;
    description?: string;
    is_active?: boolean;
    media?: Media1[];
    product_publish?: ProductPublish;
    trader: Trader[];
    bulk_job_id?: string;
    change_request_id?: any;
    product_group_tag?: string[];
    category_slug: string;
    template_tag: string;
    tax_identifier: TaxIdentifier;
    item_type: string;
    country_of_origin: string;
    brand_uid: number;
    company_id: number;
    return_config: ReturnConfig;
    is_dependent?: boolean;
    currency: string;
    highlights?: string[];
    item_code: string;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type Logo = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Image = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type ReturnConfigResponse = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Product = {
    modified_on?: string;
    multi_size?: boolean;
    hsn_code?: string;
    name?: string;
    uid?: number;
    attributes?: any;
    created_by?: any;
    all_company_ids?: number[];
    is_image_less_product?: boolean;
    all_sizes?: any[];
    moq?: any;
    l3_mapping?: string[];
    category_uid?: number;
    short_description?: string;
    variant_media?: any;
    is_set?: boolean;
    variants?: any;
    verified_on?: string;
    departments?: number[];
    teaser_tag?: any;
    net_quantity?: NetQuantityResponse;
    custom_order?: any;
    is_expirable?: boolean;
    category?: any;
    sizes?: any[];
    size_guide?: string;
    stage?: string;
    color?: string;
    created_on?: string;
    tags?: string[];
    variant_group?: any;
    no_of_boxes?: number;
    brand?: Brand;
    pending?: string;
    _custom_json?: any;
    image_nature?: string;
    slug?: string;
    id?: string;
    description?: string;
    is_physical?: boolean;
    media?: Media1[];
    product_publish?: ProductPublished;
    is_active?: boolean;
    trader?: any[];
    verified_by?: VerifiedBy;
    all_identifiers?: string[];
    product_group_tag?: string[];
    category_slug?: string;
    template_tag?: string;
    item_type?: string;
    tax_identifier?: any;
    images?: Image[];
    country_of_origin?: string;
    primary_color?: string;
    brand_uid?: number;
    company_id?: number;
    return_config?: ReturnConfigResponse;
    is_dependent?: boolean;
    currency?: string;
    modified_by?: any;
    highlights?: string[];
    item_code?: string;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductVariants = {
    name?: string;
    uid?: number;
    media?: Media1[];
    brand_uid?: number;
    category_uid?: number;
    item_code?: string;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    modified_on?: string;
    created_by?: any;
    name?: string;
    departments: string[];
    raw_key?: string;
    schema: AttributeMaster;
    synonyms?: any;
    variant?: boolean;
    logo?: string;
    created_on?: string;
    tags?: string[];
    unit?: string;
    suggestion?: string;
    slug: string;
    description?: string;
    enabled_for_end_consumer?: boolean;
    details: AttributeMasterDetails;
    is_nested?: boolean;
    filters: AttributeMasterFilter;
    modified_by?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ProductCreateUpdate = {
    requester?: string;
    multi_size?: boolean;
    name: any;
    uid?: number;
    is_image_less_product?: boolean;
    action?: string;
    short_description?: string;
    variant_media?: any;
    is_set?: boolean;
    variants?: any;
    departments: number[];
    teaser_tag?: TeaserTag;
    net_quantity?: NetQuantity;
    custom_order?: CustomOrder;
    size_guide?: string;
    tags?: string[];
    variant_group?: any;
    no_of_boxes?: number;
    _custom_json?: any;
    slug: string;
    description?: string;
    is_active?: boolean;
    media?: Media1[];
    product_publish?: ProductPublish;
    trader: Trader[];
    bulk_job_id?: string;
    change_request_id?: any;
    product_group_tag?: string[];
    category_slug: string;
    template_tag: string;
    tax_identifier: TaxIdentifier;
    item_type: string;
    country_of_origin: string;
    brand_uid: number;
    company_id: number;
    return_config: ReturnConfig;
    is_dependent?: boolean;
    currency: string;
    highlights?: string[];
    item_code: any;
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: string;
};
type AllSizes = {
    item_length: number;
    size: any;
    identifiers?: ValidateIdentifier[];
    item_dimensions_unit_of_measure: string;
    item_height: number;
    item_weight: number;
    item_weight_unit_of_measure: any;
    item_width: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    email?: string;
    username?: string;
    uid?: string;
    user_id?: string;
};
type BulkJob = {
    succeed?: number;
    modified_on?: string;
    template_tag?: string;
    created_by?: UserInfo1;
    cancelled_records?: any[];
    is_active?: boolean;
    failed_records?: any[];
    custom_template_tag?: string;
    cancelled?: number;
    file_path?: string;
    company_id: number;
    failed?: number;
    stage?: string;
    tracking_url?: string;
    total?: number;
    created_on: string;
    modified_by?: UserInfo1;
};
type BulkResponse = {
    modified_on?: string;
    created_by?: UserInfo1;
    is_active?: boolean;
    batch_id: string;
    created_on: string;
    modified_by?: UserInfo1;
};
type UserDetail1 = {
    username?: string;
    full_name?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    total?: number;
    succeed?: number;
    template?: ProductTemplate;
    template_tag?: string;
    modified_on?: string;
    cancelled_records?: string[];
    failed_records?: string[];
    is_active?: boolean;
    created_by?: UserDetail1;
    file_path?: string;
    cancelled?: number;
    company_id?: number;
    failed?: number;
    stage?: string;
    created_on?: string;
    modified_by?: UserDetail1;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    company_id: number;
    data: any[];
    batch_id: string;
    template_tag: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    url: string;
    company_id?: number;
    user: any;
};
type UserCommon = {
    username?: string;
    company_id?: number;
    user_id?: string;
};
type Items = {
    total?: number;
    succeed?: number;
    modified_on?: string;
    retry?: number;
    created_by?: UserCommon;
    cancelled_records?: string[];
    failed_records?: string[];
    is_active?: boolean;
    id?: string;
    file_path?: string;
    cancelled?: number;
    company_id?: number;
    failed?: number;
    tracking_url?: string;
    stage?: string;
    created_on?: string;
    modified_by?: UserCommon;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    size?: string;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    size_distribution: SizeDistribution;
    name?: string;
    quantity?: number;
};
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: any;
};
type InvSize = {
    expiration_date?: string;
    item_weight?: number;
    price_effective: number;
    item_length?: number;
    set?: InventorySet;
    quantity: number;
    price_transfer?: number;
    size: any;
    identifiers: GTIN[];
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    item_height?: number;
    currency: string;
    is_set?: boolean;
    item_weight_unit_of_measure?: string;
    price?: number;
    item_width?: number;
};
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
};
type InventoryRequest = {
    sizes: InvSize[];
    item: ItemQuery;
    company_id: number;
};
type InventoryResponse = {
    price_effective?: number;
    sellable_quantity?: number;
    item_id?: number;
    quantity?: number;
    price_transfer?: number;
    uid?: string;
    seller_identifier?: string;
    inventory_updated_on?: string;
    identifiers?: any;
    size?: string;
    store?: any;
    currency?: string;
    price?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type CompanyMeta = {
    id: number;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    damaged?: QuantityBase;
    sellable?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
};
type BrandMeta = {
    id: number;
    name: string;
};
type DimensionResponse = {
    length: number;
    width: number;
    height: number;
    is_default: boolean;
    unit: string;
};
type Trader1 = {
    address: string[];
    type: string;
    name: string;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type PriceMeta = {
    marked: number;
    transfer: number;
    updated_at?: string;
    effective: number;
    tp_notes?: any;
    currency: string;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type InventorySellerResponse = {
    set?: InventorySet;
    created_by?: UserSerializer;
    uid: string;
    seller_identifier: string;
    is_set?: boolean;
    company: CompanyMeta;
    track_inventory?: boolean;
    expiration_date?: string;
    identifier: any;
    item_id: number;
    manufacturer: ManufacturerResponse;
    size: string;
    store: StoreMeta;
    total_quantity: number;
    stage?: string;
    trace_id?: string;
    fynd_meta?: any;
    quantities?: Quantities;
    brand: BrandMeta;
    dimension: DimensionResponse;
    added_on_store?: string;
    _custom_json?: any;
    meta?: any;
    is_active?: boolean;
    trader?: Trader1[];
    fynd_item_code: string;
    weight: WeightResponse;
    price: PriceMeta;
    raw_meta?: any;
    fragile: boolean;
    tax_identifier?: any;
    country_of_origin: string;
    fynd_article_code: string;
    return_config?: ReturnConfig1;
    tags?: string[];
    modified_by?: UserSerializer;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    total?: number;
    succeed?: number;
    modified_on?: string;
    cancelled_records?: string[];
    created_by?: any;
    failed_records?: string[];
    id?: string;
    is_active?: boolean;
    cancelled?: number;
    file_path?: string;
    company_id?: number;
    failed?: number;
    stage?: string;
    created_on?: string;
    modified_by?: any;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    expiration_date?: string;
    price_marked?: number;
    price_effective?: number;
    trace_id?: string;
    quantity?: number;
    tags?: string[];
    seller_identifier: string;
    store_code: string;
    item_dimensions_unit_of_measure?: string;
    total_quantity?: number;
    currency?: string;
    price?: number;
    item_weight_unit_of_measure?: string;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    company_id: number;
    user?: any;
    batch_id: string;
};
type InventoryExportQuantityFilter = {
    max?: number;
    operators: string;
    min?: number;
};
type InventoryExportFilter = {
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    brand_ids?: number[];
    to_date?: string;
    store_ids?: number[];
};
type InventoryExportRequest = {
    notification_emails?: string[];
    type?: string;
    filters: InventoryExportFilter;
    data?: string[];
};
type InventoryExportResponse = {
    trigger_on?: string;
    status?: string;
    _id?: string;
    task_id: string;
    seller_id: number;
    created_on?: string;
    request_params?: any;
};
type InventoryExportAdvanceOption = {
    notification?: boolean;
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    brand_ids?: number[];
    to_date?: string;
    store_ids?: number[];
};
type InventoryExportJob = {
    url?: string;
    completed_on?: string;
    notification_emails?: string[];
    status?: string;
    task_id: string;
    seller_id: number;
    type: string;
    filters?: InventoryExportAdvanceOption;
};
type CompanyMeta1 = {
    id?: number;
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type ArticleStoreResponse = {
    store_type?: string;
    store_code?: string;
    name?: string;
    uid?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    damaged?: Quantity;
    sellable?: Quantity;
    not_available?: Quantity;
    order_committed?: Quantity;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type DimensionResponse1 = {
    length?: number;
    height?: number;
    width?: number;
    unit?: string;
};
type Trader2 = {
    address?: string[];
    type?: string;
    name?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type PriceArticle = {
    marked?: number;
    transfer?: number;
    effective?: number;
    tp_notes?: any;
    currency?: string;
};
type ReturnConfig2 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type GetInventories = {
    created_by?: UserSerializer;
    uid?: string;
    seller_identifier?: string;
    is_set?: boolean;
    company?: CompanyMeta1;
    track_inventory?: boolean;
    expiration_date?: string;
    identifier?: any;
    item_id?: number;
    manufacturer?: ManufacturerResponse1;
    size?: string;
    store?: ArticleStoreResponse;
    total_quantity?: number;
    stage?: string;
    trace_id?: string;
    date_meta?: DateMeta;
    platforms?: any;
    quantities?: QuantitiesArticle;
    brand?: BrandMeta1;
    dimension?: DimensionResponse1;
    id?: string;
    trader?: Trader2[];
    weight?: WeightResponse1;
    price?: PriceArticle;
    tax_identifier?: any;
    country_of_origin?: string;
    inventory_updated_on?: string;
    return_config?: ReturnConfig2;
    tags?: string[];
    modified_by?: UserSerializer;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: FilerList[];
};
type InventoryPayload = {
    expiration_date?: string;
    price_marked?: number;
    price_effective?: number;
    trace_id?: string;
    seller_identifier: string;
    store_id: number;
    total_quantity?: number;
    tags?: string[];
};
type InventoryRequestSchemaV2 = {
    meta?: any;
    company_id: number;
    payload?: InventoryPayload[];
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
type HsnUpsert = {
    threshold2?: number;
    tax_on_esp?: boolean;
    hs2_code: string;
    hsn_code: string;
    tax2?: number;
    threshold1: number;
    tax1: number;
    tax_on_mrp: boolean;
    uid?: number;
    is_active?: boolean;
    company_id: number;
};
type HsnCodesObject = {
    threshold2?: number;
    tax_on_esp?: boolean;
    hs2_code?: string;
    modified_on?: string;
    hsn_code?: string;
    tax2?: number;
    id?: string;
    threshold1?: number;
    tax1?: number;
    tax_on_mrp?: boolean;
    company_id?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    has_next?: boolean;
    item_total?: number;
    current?: string;
    size?: number;
    has_previous?: boolean;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
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
    country_code: string;
    reporting_hsn: string;
    modified_on?: string;
    hsn_code: string;
    created_by?: any;
    description: string;
    taxes: TaxSlab[];
    created_on?: string;
    type: string;
    modified_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    departments?: string[];
    discount?: string;
    slug?: string;
    name?: string;
    uid?: number;
    action?: Action;
    logo?: Media;
    banners?: ImageUrls;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    slug?: string;
    name?: string;
    uid?: number;
    priority_order?: number;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    uid?: number;
    action?: Action;
    childs?: any[];
    banners?: ImageUrls;
};
type SecondLevelChild = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    uid?: number;
    action?: Action;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
};
type Child = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    uid?: number;
    action?: Action;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
};
type CategoryItems = {
    slug?: string;
    name?: string;
    uid?: number;
    action?: Action;
    childs?: Child[];
    banners?: ImageUrls;
};
type DepartmentCategoryTree = {
    items?: CategoryItems[];
    department?: string;
};
type CategoryListingResponse = {
    departments?: DepartmentIdentifier[];
    data?: DepartmentCategoryTree[];
};
type ApplicationProductListingResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    operators?: any;
    page: Page;
    filters?: ProductFilters[];
};
type ProductDetail = {
    grouped_attributes?: ProductDetailGroupedAttribute[];
    attributes?: any;
    uid?: number;
    name?: string;
    short_description?: string;
    teaser_tag?: any;
    tryouts?: string[];
    medias?: Media1[];
    promo_meta?: any;
    color?: string;
    rating_count?: number;
    brand?: ProductBrand;
    image_nature?: string;
    slug: string;
    description?: string;
    has_variant?: boolean;
    type?: string;
    item_type?: string;
    product_online_date?: string;
    similars?: string[];
    rating?: number;
    highlights?: string[];
    item_code?: string;
};
type InventoryPage = {
    has_next?: boolean;
    item_total: number;
    next_id?: string;
    type: string;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    weekday: string;
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
};
type UserSerializer1 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type GetAddressSerializer = {
    country_code?: string;
    landmark?: string;
    city?: string;
    longitude?: number;
    latitude?: number;
    address_type?: string;
    address1?: string;
    country?: string;
    pincode?: number;
    state?: string;
    address2?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type UserSerializer2 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetCompanySerializer = {
    business_type?: string;
    verified_on?: string;
    reject_reason?: string;
    modified_on?: string;
    created_by?: UserSerializer2;
    name?: string;
    verified_by?: UserSerializer2;
    uid?: number;
    company_type?: string;
    addresses?: GetAddressSerializer[];
    stage?: string;
    created_on?: string;
    modified_by?: UserSerializer2;
};
type InvoiceCredSerializer = {
    username?: string;
    password?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetLocationSerializer = {
    timing?: LocationDayWiseSerializer[];
    modified_on?: string;
    created_by?: UserSerializer1;
    name: string;
    uid?: number;
    product_return_config?: ProductReturnConfigSerializer;
    address: GetAddressSerializer;
    contact_numbers?: SellerPhoneNumber[];
    company?: GetCompanySerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    verified_on?: string;
    warnings?: any;
    manager?: LocationManagerSerializer;
    stage?: string;
    created_on?: string;
    notification_emails?: string[];
    _custom_json?: any;
    verified_by?: UserSerializer1;
    documents?: Document[];
    display_name: string;
    phone_number?: string;
    store_type?: string;
    code: string;
    store_code?: string;
    modified_by?: UserSerializer1;
    integration_type?: LocationIntegrationType;
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
    app_id: string;
    _custom_json?: any;
    name?: string;
    is_active?: boolean;
    uid: number;
    logo?: string;
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
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type GetCompanyProfileSerializerResponse = {
    business_info?: string;
    warnings?: any;
    created_on?: string;
    addresses?: GetAddressSerializer[];
    notification_emails?: string[];
    company_type: string;
    business_country_info?: BusinessCountryInfo;
    verified_on?: string;
    stage?: string;
    business_details?: BusinessDetails;
    name?: string;
    contact_details?: ContactDetails;
    created_by?: UserSerializer;
    business_type: string;
    verified_by?: UserSerializer;
    taxes?: CompanyTaxesSerializer[];
    documents?: Document[];
    franchise_enabled?: boolean;
    modified_on?: string;
    uid: number;
    modified_by?: UserSerializer;
    _custom_json?: any;
    mode?: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    country_code?: string;
    country: string;
    latitude: number;
    address1: string;
    address_type: string;
    state: string;
    longitude: number;
    landmark?: string;
    pincode: number;
    address2?: string;
    city: string;
};
type UpdateCompany = {
    notification_emails?: string[];
    company_type?: string;
    business_info?: string;
    contact_details?: ContactDetails;
    warnings?: any;
    business_type?: string;
    taxes?: CompanyTaxesSerializer1[];
    documents?: Document[];
    reject_reason?: string;
    business_details?: BusinessDetails;
    _custom_json?: any;
    name?: string;
    addresses?: CreateUpdateAddressSerializer[];
    franchise_enabled?: boolean;
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
    product?: DocumentsObj;
    stage?: string;
    uid?: number;
    company_documents?: DocumentsObj;
    store?: DocumentsObj;
    store_documents?: DocumentsObj;
    brand?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    warnings?: any;
    created_on?: string;
    banner?: BrandBannerSerializer;
    logo?: string;
    slug_key?: string;
    verified_on?: string;
    stage?: string;
    synonyms?: string[];
    reject_reason?: string;
    name: string;
    description?: string;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    _locale_language?: any;
    modified_on?: string;
    uid?: number;
    modified_by?: UserSerializer;
    _custom_json?: any;
    mode?: string;
};
type CreateUpdateBrandRequestSerializer = {
    _locale_language?: any;
    company_id?: number;
    synonyms?: string[];
    uid?: number;
    banner?: BrandBannerSerializer;
    logo: string;
    _custom_json?: any;
    name: string;
    description?: string;
    brand_tier?: string;
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
    notification_emails?: string[];
    company_type: string;
    business_country_info?: BusinessCountryInfo;
    verified_on?: string;
    created_on?: string;
    stage?: string;
    business_type: string;
    details?: CompanyDetails;
    modified_on?: string;
    uid?: number;
    verified_by?: UserSerializer;
    market_channels?: string[];
    modified_by?: UserSerializer;
    reject_reason?: string;
    _custom_json?: any;
    name?: string;
    addresses?: GetAddressSerializer[];
    created_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    company?: CompanySerializer;
    verified_on?: string;
    created_on?: string;
    stage?: string;
    warnings?: any;
    modified_on?: string;
    uid?: number;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    reject_reason?: string;
    brand?: GetBrandResponseSerializer;
    created_by?: UserSerializer;
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
type HolidayDateSerializer = {
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    title: string;
    date: HolidayDateSerializer;
    holiday_type: string;
};
type AddressSerializer = {
    country_code?: string;
    country?: string;
    latitude: number;
    address1?: string;
    address_type?: string;
    state?: string;
    longitude: number;
    landmark?: string;
    pincode?: number;
    address2?: string;
    city?: string;
};
type LocationSerializer = {
    store_type?: string;
    holiday?: HolidaySchemaSerializer[];
    contact_numbers?: SellerPhoneNumber[];
    notification_emails?: string[];
    company: number;
    code: string;
    stage?: string;
    warnings?: any;
    uid?: number;
    address: AddressSerializer;
    display_name: string;
    manager?: LocationManagerSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    documents?: Document[];
    _custom_json?: any;
    timing?: LocationDayWiseSerializer[];
    name: string;
    product_return_config?: ProductReturnConfigSerializer;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    size?: string;
    item_id?: number;
    ignored_stores?: number[];
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _AssignStoreArticle = {
    query?: _ArticleQuery;
    group_id?: string;
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    meta?: any;
};
type AssignStoreRequestValidator = {
    company_id?: number;
    articles?: _AssignStoreArticle[];
    channel_identifier?: string;
    channel_type?: string;
    app_id?: string;
    pincode?: string;
    store_ids?: number[];
};
type AssignStoreResponseSerializer = {
    s_city?: string;
    _id?: string;
    index?: number;
    size?: string;
    company_id?: number;
    status?: boolean;
    uid?: string;
    item_id?: number;
    price_effective?: number;
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    store_pincode?: string;
    store_id?: number;
    price_marked?: number;
    meta?: any;
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
    absolute_url?: string;
    relative_url?: string;
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
    integration_data?: any;
    company_name?: string;
    integration: string;
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
    company_name: string;
    integration: string;
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
    only_deployed?: boolean;
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
    slug?: string;
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
    phone?: InformationPhone[];
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
    name?: string;
    description?: string;
    logo?: SecureUrl;
    mobile_logo?: SecureUrl;
    favicon?: SecureUrl;
    banner?: SecureUrl;
    domain?: Domain;
    domains?: Domain[];
    _id?: string;
    slug?: string;
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
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
    types?: string[];
};
type UsesRemaining = {
    total?: number;
    user?: number;
    app?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions = {
    price_range?: PriceRange;
    bulk_bundle?: BulkBundleRestriction;
    ordering_stores?: number[];
    user_type?: string;
    payments?: any;
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    post_order?: PostOrder;
    user_groups?: number[];
    platforms?: string[];
};
type State = {
    is_public?: boolean;
    is_archived?: boolean;
    is_display?: boolean;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    title?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    description?: string;
};
type RuleDefinition = {
    applicable_on: string;
    is_exact?: boolean;
    currency_code?: string;
    auto_apply?: boolean;
    value_type: string;
    scope?: string[];
    type: string;
    calculate_on: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type CouponSchedule = {
    start?: string;
    end?: string;
    next_schedule?: any[];
    duration?: number;
    cron?: string;
};
type Rule = {
    value?: number;
    discount_qty?: number;
    min?: number;
    max?: number;
    key?: number;
};
type CouponAdd = {
    validity: Validity;
    author?: CouponAuthor;
    code: string;
    date_meta?: CouponDateMeta;
    restrictions?: Restrictions;
    state?: State;
    ownership: Ownership;
    display_meta: DisplayMeta;
    rule_definition: RuleDefinition;
    action?: CouponAction;
    validation?: Validation;
    tags?: string[];
    identifiers: Identifier;
    _schedule?: CouponSchedule;
    type_slug: string;
    rule: Rule[];
};
type CouponsResponse = {
    items?: CouponAdd;
    page?: Page;
};
type SuccessMessage = {
    message?: string;
    success?: boolean;
};
type OperationErrorResponse = {
    message?: string;
    success?: boolean;
};
type CouponUpdate = {
    validity: Validity;
    author?: CouponAuthor;
    code: string;
    date_meta?: CouponDateMeta;
    restrictions?: Restrictions;
    state?: State;
    ownership: Ownership;
    display_meta: DisplayMeta;
    rule_definition: RuleDefinition;
    action?: CouponAction;
    validation?: Validation;
    tags?: string[];
    identifiers: Identifier;
    _schedule?: CouponSchedule;
    type_slug: string;
    rule: Rule[];
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue1;
    type: string;
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
type UserRegistered = {
    end?: string;
    start?: string;
};
type Restrictions1 = {
    user_id?: string[];
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
    uses: UsesRestriction1;
    order_quantity?: number;
    post_order?: PostOrder1;
    user_registered?: UserRegistered;
    user_groups?: number[];
    platforms?: string[];
};
type PromotionSchedule = {
    start: string;
    end?: string;
    next_schedule?: any[];
    published: boolean;
    duration?: number;
    cron?: string;
};
type DisplayMeta1 = {
    name?: string;
    description?: string;
    offer_text?: string;
    offer_label?: string;
};
type CompareObject = {
    greater_than_equals?: number;
    equals?: number;
    less_than_equals?: number;
    less_than?: number;
    greater_than?: number;
};
type ItemCriteria = {
    item_exclude_store?: number[];
    item_id?: number[];
    item_company?: number[];
    available_zones?: string[];
    item_sku?: string[];
    item_exclude_id?: number[];
    item_exclude_company?: number[];
    item_brand?: number[];
    item_exclude_brand?: number[];
    buy_rules?: string[];
    all_items?: boolean;
    item_category?: number[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_category?: number[];
    product_tags?: string[];
    item_store?: number[];
    cart_unique_item_quantity?: CompareObject;
    cart_quantity?: CompareObject;
    cart_total?: CompareObject;
    item_exclude_sku?: string[];
    item_size?: string[];
};
type DiscountOffer = {
    max_offer_quantity?: number;
    min_offer_quantity?: number;
    max_usage_per_transaction?: number;
    code?: string;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
    discount_amount?: number;
    discount_price?: number;
    apportion_discount?: boolean;
    discount_percentage?: number;
};
type DiscountRule = {
    discount_type: string;
    item_criteria: ItemCriteria;
    buy_condition: string;
    offer: DiscountOffer;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionListItem = {
    apply_exclusive?: string;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    _custom_json?: any;
    application_id: string;
    _schedule?: PromotionSchedule;
    code?: string;
    display_meta: DisplayMeta1;
    promo_group: string;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    buy_rules: any;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    promotion_type: string;
    ownership: Ownership1;
    currency?: string;
    visiblility?: Visibility;
    mode: string;
    stackable?: boolean;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    apply_exclusive?: string;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    _custom_json?: any;
    application_id: string;
    _schedule?: PromotionSchedule;
    code?: string;
    display_meta: DisplayMeta1;
    promo_group: string;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    buy_rules: any;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    promotion_type: string;
    ownership: Ownership1;
    currency?: string;
    visiblility?: Visibility;
    mode: string;
    stackable?: boolean;
};
type PromotionUpdate = {
    apply_exclusive?: string;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    _custom_json?: any;
    application_id: string;
    _schedule?: PromotionSchedule;
    code?: string;
    display_meta: DisplayMeta1;
    promo_group: string;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    buy_rules: any;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    promotion_type: string;
    ownership: Ownership1;
    currency?: string;
    visiblility?: Visibility;
    mode: string;
    stackable?: boolean;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    title?: string;
    type?: string;
    created_on?: string;
    example?: string;
    is_hidden?: boolean;
    entity_slug?: string;
    subtitle?: string;
    entity_type?: string;
    description?: string;
    modified_on?: string;
};
type CartItem = {
    product_id: string;
    size: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type RawBreakup = {
    convenience_fee?: number;
    coupon?: number;
    vog?: number;
    discount?: number;
    subtotal?: number;
    cod_charge?: number;
    mrp_total?: number;
    delivery_charge?: number;
    fynd_cash?: number;
    total?: number;
    gst_charges?: number;
    you_saved?: number;
};
type CouponBreakup = {
    coupon_value?: number;
    is_applied?: boolean;
    code?: string;
    title?: string;
    value?: number;
    uid?: string;
    max_discount_value?: number;
    coupon_type?: string;
    description?: string;
    sub_title?: string;
    minimum_cart_value?: number;
    message?: string;
    type?: string;
};
type DisplayBreakup = {
    currency_symbol?: string;
    value?: number;
    currency_code?: string;
    message?: string[];
    key?: string;
    display?: string;
};
type LoyaltyPoints = {
    applicable?: number;
    total?: number;
    is_applied?: boolean;
    description?: string;
};
type CartBreakup = {
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
};
type ProductPrice = {
    effective?: number;
    currency_symbol?: string;
    currency_code?: string;
    selling?: number;
    add_on?: number;
    marked?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
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
    url?: string;
    query?: ActionQuery;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    name?: string;
    categories?: CategoryInfo[];
    uid?: number;
    images?: ProductImage[];
    slug?: string;
    action?: ProductAction;
    net_quantity?: NetQuantity;
    type?: string;
    brand?: BaseInfo;
};
type CartProductIdentifer = {
    identifier?: string;
};
type BasePrice = {
    effective?: number;
    currency_symbol?: string;
    currency_code?: string;
    marked?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    price?: ArticlePriceInfo;
    extra_meta?: any;
    product_group_tags?: string[];
    uid?: string;
    size?: string;
    store?: BaseInfo;
    quantity?: number;
    seller?: BaseInfo;
    _custom_json?: any;
    type?: string;
    parent_item_identifiers?: any;
};
type ProductAvailability = {
    other_store_quantity?: number;
    sizes?: string[];
    out_of_stock?: boolean;
    is_valid?: boolean;
    deliverable?: boolean;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type FreeGiftItem = {
    item_images_url?: string[];
    item_id?: number;
    item_slug?: string;
    item_name?: string;
    item_brand_name?: string;
    item_price_details?: any;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    quantity?: number;
};
type DiscountRulesApp = {
    item_criteria?: any;
    raw_offer?: any;
    matched_buy_rules?: string[];
    offer?: any;
};
type AppliedPromotion = {
    mrp_promotion?: boolean;
    promotion_name?: string;
    offer_text?: string;
    buy_rules?: BuyRules[];
    promotion_type?: string;
    ownership?: Ownership2;
    applied_free_articles?: AppliedFreeArticles[];
    discount_rules?: DiscountRulesApp[];
    promotion_group?: string;
    amount?: number;
    article_quantity?: number;
    promo_id?: string;
};
type CartProductInfo = {
    price?: ProductPriceInfo;
    message?: string;
    is_set?: boolean;
    discount?: string;
    bulk_offer?: any;
    promo_meta?: PromoMeta;
    product?: CartProduct;
    quantity?: number;
    identifiers: CartProductIdentifer;
    coupon_message?: string;
    price_per_unit?: ProductPriceInfo;
    article?: ProductArticle;
    availability?: ProductAvailability;
    promotions_applied?: AppliedPromotion[];
    key?: string;
    parent_item_identifiers?: any;
};
type OpenapiCartDetailsResponse = {
    message?: string;
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    message?: string;
    errors?: any;
    success?: boolean;
};
type ShippingAddress = {
    pincode?: number;
    name?: string;
    phone?: number;
    landmark?: string;
    country_iso_code?: string;
    city?: string;
    meta?: any;
    state?: string;
    area_code_slug?: string;
    country_code?: string;
    area?: string;
    email?: string;
    address_type?: string;
    area_code: string;
    country?: string;
    country_phone_code?: string;
    address?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
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
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    message?: string;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiOrderItem = {
    files?: OpenApiFiles[];
    loyalty_discount?: number;
    discount: number;
    extra_meta?: any;
    payment_methods: MultiTenderPaymentMethod[];
    product_id: number;
    employee_discount?: number;
    meta?: CartItemMeta;
    quantity?: number;
    delivery_charges: number;
    price_effective: number;
    price_marked: number;
    cod_charges: number;
    coupon_effective_discount: number;
    cashback_applied: number;
    amount_paid: number;
    size: string;
};
type OpenApiPlatformCheckoutReq = {
    coupon?: string;
    coupon_value: number;
    affiliate_order_id?: string;
    cod_charges: number;
    cart_value: number;
    files?: OpenApiFiles[];
    comment?: string;
    cart_items: OpenApiOrderItem[];
    loyalty_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: any;
    currency_code?: string;
    order_id?: string;
    shipping_address?: ShippingAddress;
    billing_address: ShippingAddress;
    gstin?: string;
    delivery_charges: number;
    cashback_applied: number;
    coupon_code: string;
    payment_mode?: string;
};
type OpenApiCheckoutResponse = {
    message?: string;
    success?: boolean;
    order_id: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    cashback: any;
    created_on: string;
    expire_at: string;
    is_default: boolean;
    cart_value?: number;
    buy_now?: boolean;
    user_id: string;
    is_archive?: boolean;
    order_id?: string;
    payments?: any;
    merge_qty?: boolean;
    gstin?: string;
    _id: string;
    bulk_coupon_discount?: number;
    payment_mode?: string;
    coupon?: any;
    discount?: number;
    promotion?: any;
    uid: number;
    fynd_credits?: any;
    cod_charges?: any;
    last_modified: string;
    shipments?: any[];
    fc_index_map?: number[];
    pick_up_customer_details?: any;
    articles: any[];
    comment?: string;
    payment_methods?: any[];
    app_id?: string;
    checkout_mode?: string;
    meta?: any;
    delivery_charges?: any;
    is_active?: boolean;
};
type AbandonedCartResponse = {
    page?: Page;
    success?: boolean;
    result?: any;
    items?: AbandonedCart[];
    message?: string;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    comment?: string;
    breakup_values?: CartBreakup;
    coupon_text?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    gstin?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    message?: string;
    delivery_charge_info?: string;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    id?: string;
};
type AddProductCart = {
    extra_meta?: any;
    seller_id?: number;
    product_group_tags?: string[];
    item_id?: number;
    article_id?: string;
    pos?: boolean;
    quantity?: number;
    _custom_json?: any;
    article_assignment?: any;
    display?: string;
    store_id?: number;
    item_size?: string;
    parent_item_identifiers?: any;
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    message?: string;
    cart?: CartDetailResponse;
    success?: boolean;
    partial?: boolean;
};
type UpdateProductCart = {
    extra_meta?: any;
    article_id?: string;
    item_id?: number;
    quantity?: number;
    _custom_json?: any;
    identifiers: CartProductIdentifer;
    item_index?: number;
    item_size?: string;
    parent_item_identifiers?: any;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    message?: string;
    cart?: CartDetailResponse;
    success?: boolean;
};
type GetShareCartLinkRequest = {
    meta?: any;
    id?: string;
};
type GetShareCartLinkResponse = {
    token?: string;
    share_url?: string;
};
type SharedCartDetails = {
    token?: string;
    meta?: any;
    created_on?: string;
    source?: any;
    user?: any;
};
type SharedCart = {
    restrict_checkout?: boolean;
    delivery_charge_info?: string;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    id?: string;
    breakup_values?: CartBreakup;
    gstin?: string;
    message?: string;
    uid?: string;
    items?: CartProductInfo[];
    cart_id?: number;
    last_modified?: string;
    comment?: string;
    coupon_text?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    shared_cart_details?: SharedCartDetails;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    user_id?: string;
    item_counts?: string;
    created_on?: string;
    cart_id?: string;
    cart_value?: string;
};
type MultiCartResponse = {
    data?: CartList[];
    success?: boolean;
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    comment?: string;
    breakup_values?: CartBreakup;
    coupon_text?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    gstin?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    message?: string;
    delivery_charge_info?: string;
    user?: UserInfo;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    id?: string;
};
type DeleteCartDetailResponse = {
    message?: string;
    success?: boolean;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type Coupon = {
    coupon_value?: number;
    is_applied?: boolean;
    title?: string;
    max_discount_value?: number;
    coupon_type?: string;
    is_applicable?: boolean;
    minimum_cart_value?: number;
    sub_title?: string;
    expires_on?: string;
    message?: string;
    description?: string;
    coupon_code?: string;
};
type PageCoupon = {
    current?: number;
    total?: number;
    total_item_count?: number;
    has_next?: boolean;
    has_previous?: boolean;
};
type GetCouponResponse = {
    available_coupon_list?: Coupon[];
    page?: PageCoupon;
};
type ApplyCouponRequest = {
    coupon_code: string;
};
type GeoLocation = {
    latitude?: number;
    longitude?: number;
};
type PlatformAddress = {
    phone?: string;
    created_by_user_id?: string;
    area_code_slug?: string;
    country_code?: string;
    area?: string;
    country?: string;
    id?: string;
    user_id?: string;
    name?: string;
    is_default_address?: boolean;
    address?: string;
    cart_id?: string;
    geo_location?: GeoLocation;
    google_map_point?: any;
    city?: string;
    landmark?: string;
    checkout_mode?: string;
    meta?: any;
    state?: string;
    tags?: string[];
    is_active?: boolean;
    email?: string;
    address_type?: string;
    area_code?: string;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    is_default_address?: boolean;
    success?: boolean;
    id?: string;
};
type UpdateAddressResponse = {
    is_updated?: boolean;
    success?: boolean;
    is_default_address?: boolean;
    id?: string;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    billing_address_id?: string;
    cart_id?: string;
    checkout_mode?: string;
    id?: string;
};
type ShipmentResponse = {
    fulfillment_id?: number;
    box_type?: string;
    order_type?: string;
    dp_id?: string;
    dp_options?: any;
    fulfillment_type?: string;
    items?: CartProductInfo[];
    promise?: ShipmentPromise;
    shipment_type?: string;
    shipments?: number;
};
type CartShipmentsResponse = {
    uid?: string;
    restrict_checkout?: boolean;
    cart_id?: number;
    last_modified?: string;
    delivery_charge_info?: string;
    payment_selection_lock?: PaymentSelectionLock;
    shipments?: ShipmentResponse[];
    buy_now?: boolean;
    id?: string;
    comment?: string;
    breakup_values?: CartBreakup;
    coupon_text?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    gstin?: string;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    message?: string;
    error?: boolean;
};
type UpdateCartShipmentItem = {
    shipment_type: string;
    quantity?: number;
    article_uid: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    comment?: string;
    checkout_mode?: string;
    gstin?: string;
    pan_no?: string;
    pick_up_customer_details?: any;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type Files = {
    key: string;
    values: string[];
};
type StaffCheckout = {
    employee_code?: string;
    _id: string;
    last_name: string;
    user: string;
    first_name: string;
};
type PlatformCartCheckoutDetailRequest = {
    payment_identifier?: string;
    payment_auto_confirm?: boolean;
    merchant_code?: string;
    pos?: boolean;
    id: string;
    user_id: string;
    delivery_address?: any;
    aggregator?: string;
    callback_url?: string;
    extra_meta?: any;
    files?: Files[];
    payment_params?: any;
    billing_address?: any;
    billing_address_id?: string;
    ordering_store?: number;
    staff?: StaffCheckout;
    payment_mode: string;
    address_id?: string;
    order_type: string;
    meta?: any;
    pick_at_store_uid?: number;
};
type CheckCart = {
    store_code?: string;
    restrict_checkout?: boolean;
    store_emps?: any[];
    delivery_charge_info?: string;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    id?: string;
    breakup_values?: CartBreakup;
    error_message?: string;
    order_id?: string;
    gstin?: string;
    message?: string;
    uid?: string;
    success?: boolean;
    user_type?: string;
    items?: CartProductInfo[];
    cart_id?: number;
    last_modified?: string;
    cod_charges?: number;
    comment?: string;
    coupon_text?: string;
    checkout_mode?: string;
    cod_available?: boolean;
    currency?: CartCurrency;
    delivery_charges?: number;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    cod_message?: string;
    delivery_charge_order_value?: number;
};
type CartCheckoutResponse = {
    callback_url?: string;
    payment_confirm_url?: string;
    cart?: CheckCart;
    success?: boolean;
    order_id?: string;
    message?: string;
    data?: any;
    app_intercept_url?: string;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    pincode?: number;
    name?: string;
    phone?: string;
    landmark?: string;
    city?: string;
    store_code?: string;
    state?: string;
    uid?: number;
    area_code_slug?: string;
    area?: string;
    email?: string;
    address_type?: string;
    area_code?: string;
    country?: string;
    address?: string;
    id?: number;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    payment_identifier?: string;
    merchant_code?: string;
    aggregator_name?: string;
    address_id?: string;
    payment_mode?: string;
    id?: string;
};
type CouponValidity = {
    discount?: number;
    title?: string;
    code?: string;
    display_message_en?: string;
    valid?: boolean;
};
type PaymentCouponValidate = {
    message?: string;
    coupon_validity?: CouponValidity;
    success: boolean;
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
type ConfigurationRes = {
    valid_android_packages?: string[];
    terms_conditions_link?: string;
    application_id?: string;
    success?: boolean;
};
type SetConfigurationRes = {
    success?: boolean;
};
type ConfigurationRequest = {
    valid_android_packages?: string[];
    terms_conditions_link?: string;
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
    status?: SubscriberStatus;
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
    status?: SubscriberStatus;
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
import Paginator = require("../common/Paginator");
import { OrderValidator } from "./PlatformApplicationModels";
