export class CatalogValidator {
    static getProductDetailBySlug(): any;
    static getProductSizesBySlug(): any;
    static getProductPriceBySlug(): any;
    static getProductSellersBySlug(): any;
    static getProductComparisonBySlugs(): any;
    static getSimilarComparisonProductBySlug(): any;
    static getComparedFrequentlyProductBySlug(): any;
    static getProductSimilarByIdentifier(): any;
    static getProductVariantsBySlug(): any;
    static getProductStockByIds(): any;
    static getProductStockForTimeByIds(): any;
    static getProducts(): any;
    static getBrands(): any;
    static getBrandDetailBySlug(): any;
    static getCategories(): any;
    static getCategoryDetailBySlug(): any;
    static getHomeProducts(): any;
    static getDepartments(): any;
    static getSearchResults(): any;
    static getCollections(): any;
    static getCollectionItemsBySlug(): any;
    static getCollectionDetailBySlug(): any;
    static getFollowedListing(): any;
    static followById(): any;
    static unfollowById(): any;
    static getFollowerCountById(): any;
    static getFollowIds(): any;
    static getStores(): any;
}
export class CartValidator {
    static getCart(): any;
    static getCartLastModified(): any;
    static addItems(): any;
    static updateCart(): any;
    static getItemCount(): any;
    static getCoupons(): any;
    static applyCoupon(): any;
    static removeCoupon(): any;
    static getBulkDiscountOffers(): any;
    static getAddresses(): any;
    static addAddress(): any;
    static getAddressById(): any;
    static updateAddress(): any;
    static removeAddress(): any;
    static selectAddress(): any;
    static selectPaymentMode(): any;
    static validateCouponForPayment(): any;
    static getShipments(): any;
    static checkoutCart(): any;
    static updateCartMeta(): any;
    static getCartShareLink(): any;
    static getCartSharedItems(): any;
    static updateCartWithSharedItems(): any;
}
export class LeadValidator {
    static getTicket(): any;
    static createHistory(): any;
    static createTicket(): any;
    static getCustomForm(): any;
    static submitCustomForm(): any;
    static getParticipantsInsideVideoRoom(): any;
    static getTokenForVideoRoom(): any;
}
export class ThemeValidator {
    static getAppliedTheme(): any;
    static getThemeForPreview(): any;
}
export class UserValidator {
    static loginWithFacebook(): any;
    static loginWithGoogle(): any;
    static loginWithGoogleAndroid(): any;
    static loginWithGoogleIOS(): any;
    static loginWithOTP(): any;
    static loginWithEmailAndPassword(): any;
    static sendResetPasswordEmail(): any;
    static forgotPassword(): any;
    static sendResetToken(): any;
    static loginWithToken(): any;
    static registerWithForm(): any;
    static verifyEmail(): any;
    static verifyMobile(): any;
    static hasPassword(): any;
    static updatePassword(): any;
    static logout(): any;
    static sendOTPOnMobile(): any;
    static verifyMobileOTP(): any;
    static sendOTPOnEmail(): any;
    static verifyEmailOTP(): any;
    static getLoggedInUser(): any;
    static getListOfActiveSessions(): any;
    static getPlatformConfig(): any;
    static updateProfile(): any;
    static addMobileNumber(): any;
    static deleteMobileNumber(): any;
    static setMobileNumberAsPrimary(): any;
    static sendVerificationLinkToMobile(): any;
    static addEmail(): any;
    static deleteEmail(): any;
    static setEmailAsPrimary(): any;
    static sendVerificationLinkToEmail(): any;
}
export class ContentValidator {
    static getAnnouncements(): any;
    static getBlog(): any;
    static getFaqs(): any;
    static getFaqCategories(): any;
    static getFaqByIdOrSlug(): any;
    static getFaqCategoryBySlugOrId(): any;
    static getFaqsByCategoryIdOrSlug(): any;
    static getLandingPage(): any;
    static getLegalInformation(): any;
    static getNavigations(): any;
    static getPage(): any;
    static getSEOConfiguration(): any;
    static getSlideshow(): any;
    static getSupportInformation(): any;
    static getTags(): any;
}
export class CommunicationValidator {
    static getCommunicationConsent(): any;
    static upsertCommunicationConsent(): any;
    static upsertAppPushtoken(): any;
}
export class ShareValidator {
    static getApplicationQRCode(): any;
    static getProductQRCodeBySlug(): any;
    static getCollectionQRCodeBySlug(): any;
    static getUrlQRCode(): any;
    static createShortLink(): any;
    static getShortLinkByHash(): any;
    static getOriginalShortLinkByHash(): any;
}
export class FileStorageValidator {
    static startUpload(): any;
    static completeUpload(): any;
}
export class ConfigurationValidator {
    static getApplication(): any;
    static getOwnerInfo(): any;
    static getBasicDetails(): any;
    static getIntegrationTokens(): any;
    static getOrderingStores(): any;
    static getFeatures(): any;
    static getContactInfo(): any;
    static getCurrencies(): any;
    static getCurrencyById(): any;
    static getLanguages(): any;
    static getOrderingStoreCookie(): any;
    static removeOrderingStoreCookie(): any;
    static getAppStaffs(): any;
}
export class PaymentValidator {
    static getAggregatorsConfig(): any;
    static attachCardToCustomer(): any;
    static getActiveCardAggregator(): any;
    static getActiveUserCards(): any;
    static deleteUserCard(): any;
    static verifyCustomerForPayment(): any;
    static verifyAndChargePayment(): any;
    static initialisePayment(): any;
    static checkAndUpdatePaymentStatus(): any;
    static getPaymentModeRoutes(): any;
    static getPosPaymentModeRoutes(): any;
    static getUserBeneficiariesDetail(): any;
    static verifyIfscCode(): any;
    static getOrderBeneficiariesDetail(): any;
    static verifyOtpAndAddBeneficiaryForBank(): any;
    static addBeneficiaryDetails(): any;
    static verifyOtpAndAddBeneficiaryForWallet(): any;
    static updateDefaultBeneficiary(): any;
}
export class OrderValidator {
    static getOrders(): any;
    static getOrderById(): any;
    static getShipmentById(): any;
    static getShipmentReasons(): any;
    static updateShipmentStatus(): any;
    static trackShipment(): any;
    static getPosOrderById(): any;
}
export class PosCartValidator {
    static getCart(): any;
    static getCartLastModified(): any;
    static addItems(): any;
    static updateCart(): any;
    static getItemCount(): any;
    static getCoupons(): any;
    static applyCoupon(): any;
    static removeCoupon(): any;
    static getBulkDiscountOffers(): any;
    static getAddresses(): any;
    static addAddress(): any;
    static getAddressById(): any;
    static updateAddress(): any;
    static removeAddress(): any;
    static selectAddress(): any;
    static selectPaymentMode(): any;
    static validateCouponForPayment(): any;
    static getShipments(): any;
    static updateShipments(): any;
    static checkoutCart(): any;
    static updateCartMeta(): any;
    static getAvailableDeliveryModes(): any;
    static getStoreAddressByUid(): any;
    static getCartShareLink(): any;
    static getCartSharedItems(): any;
    static updateCartWithSharedItems(): any;
}
export class LogisticValidator {
    static getTatProduct(): any;
    static getPincodeCity(): any;
}
export class Validator {
    static ProductListingActionPage(): any;
    static ProductListingAction(): any;
    static Media(): any;
    static ProductBrand(): any;
    static ProductDetailAttribute(): any;
    static ProductDetailGroupedAttribute(): any;
    static ProductDetail(): any;
    static ErrorResponse(): any;
    static ProductSize(): any;
    static SizeChartValues(): any;
    static ColumnHeader(): any;
    static ColumnHeaders(): any;
    static SizeChart(): any;
    static ProductSizeStores(): any;
    static Price(): any;
    static ProductListingPrice(): any;
    static ProductSizes(): any;
    static ProductSetDistributionSize(): any;
    static ProductSetDistribution(): any;
    static ProductSet(): any;
    static ProductStockPrice(): any;
    static ArticleAssignment(): any;
    static Seller(): any;
    static Store(): any;
    static ProductSizePriceResponse(): any;
    static ProductSizeSellerFilter(): any;
    static Page(): any;
    static ProductSizeSellersResponse(): any;
    static AttributeDetail(): any;
    static ProductsComparisonResponse(): any;
    static ProductCompareResponse(): any;
    static ProductFrequentlyComparedSimilarResponse(): any;
    static ProductSimilarItem(): any;
    static SimilarProductByTypeResponse(): any;
    static ProductVariantItemResponse(): any;
    static ProductVariantResponse(): any;
    static ProductVariantsResponse(): any;
    static CompanyDetail(): any;
    static StoreDetail(): any;
    static ProductStockStatusItem(): any;
    static ProductStockStatusResponse(): any;
    static ProductStockPolling(): any;
    static ProductListingDetail(): any;
    static ProductSortOn(): any;
    static ProductFiltersValue(): any;
    static ProductFiltersKey(): any;
    static ProductFilters(): any;
    static ProductListingResponse(): any;
    static ImageUrls(): any;
    static BrandItem(): any;
    static BrandListingResponse(): any;
    static BrandDetailResponse(): any;
    static DepartmentIdentifier(): any;
    static CategoryItems(): any;
    static DepartmentCategoryTree(): any;
    static CategoryListingResponse(): any;
    static CategoryMetaResponse(): any;
    static HomeListingResponse(): any;
    static Department(): any;
    static DepartmentResponse(): any;
    static AutocompleteItem(): any;
    static AutoCompleteResponse(): any;
    static GetCollectionDetailNest(): any;
    static CollectionListingFilterTag(): any;
    static CollectionListingFilterType(): any;
    static CollectionListingFilter(): any;
    static GetCollectionListingResponse(): any;
    static CollectionDetailResponse(): any;
    static GetFollowListingResponse(): any;
    static FollowPostResponse(): any;
    static FollowerCountResponse(): any;
    static FollowIdsData(): any;
    static FollowIdsResponse(): any;
    static LatLong(): any;
    static Store1(): any;
    static StoreListingResponse(): any;
    static CartProductIdentifer(): any;
    static ProductAvailability(): any;
    static ProductPrice(): any;
    static ProductPriceInfo(): any;
    static CategoryInfo(): any;
    static BaseInfo(): any;
    static Image(): any;
    static ActionQuery(): any;
    static ProductAction(): any;
    static Product(): any;
    static BasePrice(): any;
    static ArticlePriceInfo(): any;
    static ProductArticle(): any;
    static CartProductInfo(): any;
    static CouponBreakup(): any;
    static DisplayBreakup(): any;
    static RawBreakup(): any;
    static LoyaltyPoints(): any;
    static CartBreakup(): any;
    static PromiseFormatted(): any;
    static PromiseTimestamp(): any;
    static ShipmentPromise(): any;
    static CartCurrency(): any;
    static CartResponse(): any;
    static AddProductCart(): any;
    static AddCartRequest(): any;
    static AddCartResponse(): any;
    static UpdateProductCart(): any;
    static UpdateCartRequest(): any;
    static UpdateCartResponse(): any;
    static CartItemCountResponse(): any;
    static Coupon(): any;
    static PageCoupon(): any;
    static GetCouponResponse(): any;
    static ApplyCouponRequest(): any;
    static OfferSeller(): any;
    static OfferPrice(): any;
    static OfferItem(): any;
    static BulkPriceOffer(): any;
    static BulkPriceResponse(): any;
    static GeoLocation(): any;
    static Address(): any;
    static GetAddressesResponse(): any;
    static SaveAddressResponse(): any;
    static UpdateAddressResponse(): any;
    static DeleteAddressResponse(): any;
    static SelectCartAddressRequest(): any;
    static UpdateCartPaymentRequest(): any;
    static CouponValidity(): any;
    static PaymentUpdate(): any;
    static ShipmentResponse(): any;
    static CartShipmentsResponse(): any;
    static CartCheckoutRequest(): any;
    static CheckCart(): any;
    static CartCheckoutResponse(): any;
    static CartMetaRequest(): any;
    static CartMetaResponse(): any;
    static CartMetaMissingResponse(): any;
    static GetShareCartLinkRequest(): any;
    static GetShareCartLinkResponse(): any;
    static SharedCartDetails(): any;
    static SharedCart(): any;
    static SharedCartResponse(): any;
    static TicketList(): any;
    static TicketHistoryList(): any;
    static CustomFormList(): any;
    static CreateCustomFormPayload(): any;
    static EditCustomFormPayload(): any;
    static EditTicketPayload(): any;
    static AgentChangePayload(): any;
    static CreateVideoRoomResponse(): any;
    static CloseVideoRoomResponse(): any;
    static CreateVideoRoomPayload(): any;
    static Filter(): any;
    static TicketHistoryPayload(): any;
    static CustomFormSubmissionPayload(): any;
    static KeyValue(): any;
    static GetTokenForVideoRoomResponse(): any;
    static GetParticipantsInsideVideoRoomResponse(): any;
    static Participant(): any;
    static UserSchema(): any;
    static PhoneNumber(): any;
    static Email(): any;
    static Debug(): any;
    static SubmitCustomFormResponse(): any;
    static TicketContext(): any;
    static CreatedOn(): any;
    static TicketAsset(): any;
    static TicketContent(): any;
    static AddTicketPayload(): any;
    static Priority(): any;
    static Status(): any;
    static TicketCategory(): any;
    static SubmitButton(): any;
    static PollForAssignment(): any;
    static CustomForm(): any;
    static TicketHistory(): any;
    static Ticket(): any;
    static PaginationSchema(): any;
    static ThemesListingResponseSchema(): any;
    static AddThemeRequestSchema(): any;
    static UpgradableThemeSchema(): any;
    static FontsSchema(): any;
    static BlitzkriegApiErrorSchema(): any;
    static BlitzkriegNotFoundSchema(): any;
    static BlitzkriegInternalServerErrorSchema(): any;
    static FontsSchemaItems(): any;
    static FontsSchemaItemsFiles(): any;
    static ThemesSchema(): any;
    static pagesSchema(): any;
    static availableSectionSchema(): any;
    static sectionSchema(): any;
    static Information(): any;
    static Images(): any;
    static Src(): any;
    static AssetsSchema(): any;
    static UmdJs(): any;
    static CommonJs(): any;
    static Css(): any;
    static AvailablePages(): any;
    static Seo(): any;
    static Sections(): any;
    static Config(): any;
    static Preset(): any;
    static GlobalSchema(): any;
    static ListSchema(): any;
    static Colors(): any;
    static Custom(): any;
    static ConfigPage(): any;
    static Font(): any;
    static Variants(): any;
    static Medium(): any;
    static SemiBold(): any;
    static Bold(): any;
    static Light(): any;
    static Regular(): any;
    static Blocks(): any;
    static BlocksProps(): any;
    static PageSections(): any;
    static PageSectionsBlocks(): any;
    static PageSectionsBlocksProps(): any;
    static Predicate(): any;
    static Screen(): any;
    static PredicateUserSchema(): any;
    static Route(): any;
    static EditEmailRequestSchema(): any;
    static SendVerificationLinkMobileRequestSchema(): any;
    static EditMobileRequestSchema(): any;
    static EditProfileRequestSchema(): any;
    static SendEmailOtpRequestSchema(): any;
    static VerifyOtpRequestSchema(): any;
    static SendMobileOtpRequestSchema(): any;
    static UpdatePasswordRequestSchema(): any;
    static FormRegisterRequestSchema(): any;
    static TokenRequestBodySchema(): any;
    static ForgotPasswordRequestSchema(): any;
    static CodeRequestBodySchema(): any;
    static SendResetPasswordEmailRequestSchema(): any;
    static PasswordLoginRequestSchema(): any;
    static SendOtpRequestSchema(): any;
    static OAuthRequestSchema(): any;
    static AuthSuccess(): any;
    static SendOtpResponse(): any;
    static LoginSuccess(): any;
    static VerifyOtpSuccess(): any;
    static ResetPasswordSuccess(): any;
    static RegisterFormSuccess(): any;
    static VerifyEmailSuccess(): any;
    static HasPasswordSuccess(): any;
    static LogoutSuccess(): any;
    static OtpSuccess(): any;
    static EmailOtpSuccess(): any;
    static SessionListSuccess(): any;
    static VerifyMobileOTPSuccess(): any;
    static VerifyEmailOTPSuccess(): any;
    static SendMobileVerifyLinkSuccess(): any;
    static SendEmailVerifyLinkSuccess(): any;
    static UserSearchResponseSchema(): any;
    static CustomerListResponseSchema(): any;
    static UnauthorizedSchema(): any;
    static UnauthenticatedSchema(): any;
    static NotFoundSchema(): any;
    static AuthenticationApiErrorSchema(): any;
    static ProfileEditSuccessSchema(): any;
    static FormRegisterRequestSchemaPhone(): any;
    static OAuthRequestSchemaOauth2(): any;
    static OAuthRequestSchemaProfile(): any;
    static AuthSuccessUser(): any;
    static AuthSuccessUserDebug(): any;
    static AuthSuccessUserEmails(): any;
    static PlatformSchema(): any;
    static LookAndFeel(): any;
    static Login(): any;
    static MetaSchema(): any;
    static Social(): any;
    static RequiredFields(): any;
    static Mobile(): any;
    static RegisterRequiredFields(): any;
    static RegisterRequiredFieldsEmail(): any;
    static RegisterRequiredFieldsMobile(): any;
    static FlashCard(): any;
    static SocialTokens(): any;
    static Facebook(): any;
    static Accountkit(): any;
    static Google(): any;
    static ApplicationLegal(): any;
    static ApplicationLegalFAQ(): any;
    static SeoComponent(): any;
    static SeoSchema(): any;
    static CustomMetaTag(): any;
    static Detail(): any;
    static StorefrontAnnouncement(): any;
    static AnnouncementPageSchema(): any;
    static EditorMeta(): any;
    static AnnouncementAuthorSchema(): any;
    static AdminAnnouncementSchema(): any;
    static ScheduleSchema(): any;
    static NextSchedule(): any;
    static AnnouncementSchema(): any;
    static announcementSchema(): any;
    static scheduleStartSchema(): any;
    static BlogGetResponse(): any;
    static ResourceContent(): any;
    static Asset(): any;
    static Author(): any;
    static BlogSchema(): any;
    static SEO(): any;
    static SEOImage(): any;
    static DateMeta(): any;
    static BlogRequest(): any;
    static GetAnnouncementListSchema(): any;
    static CreateAnnouncementSchema(): any;
    static Navigation(): any;
    static LocaleLanguage(): any;
    static Language(): any;
    static Action(): any;
    static ActionPage(): any;
    static NavigationReference(): any;
    static LandingPage(): any;
    static ConfigurationSchema(): any;
    static SlideshowMedia(): any;
    static Slideshow(): any;
    static AnnouncementsResponseSchema(): any;
    static AnnouncementDataSchema(): any;
    static FaqResponseSchema(): any;
    static UpdateHandpickedSchema(): any;
    static HandpickedTagSchema(): any;
    static RemoveHandpickedSchema(): any;
    static CreateTagSchema(): any;
    static CreateTagRequestSchema(): any;
    static APIError(): any;
    static CategorySchema(): any;
    static ChildrenSchema(): any;
    static CategoryRequestSchema(): any;
    static FAQCategorySchema(): any;
    static FaqSchema(): any;
    static FAQ(): any;
    static CreateFaqResponseSchema(): any;
    static CreateFaqSchema(): any;
    static GetFaqSchema(): any;
    static UpdateFaqCategoryRequestSchema(): any;
    static CreateFaqCategoryRequestSchema(): any;
    static CreateFaqCategorySchema(): any;
    static GetFaqCategoriesSchema(): any;
    static GetFaqCategoryByIdOrSlugSchema(): any;
    static LandingPageGetResponse(): any;
    static LandingPageSchema(): any;
    static DefaultNavigationResponse(): any;
    static NavigationGetResponse(): any;
    static Orientation(): any;
    static NavigationSchema(): any;
    static NavigationRequest(): any;
    static CustomPageSchema(): any;
    static ContentSchema(): any;
    static CustomPage(): any;
    static CustomBlogSchema(): any;
    static FeatureImage(): any;
    static CustomBlog(): any;
    static PageGetResponse(): any;
    static PageSpec(): any;
    static PageSpecParam(): any;
    static PageSpecItem(): any;
    static PageSchema(): any;
    static CreatedBy(): any;
    static PageContent(): any;
    static PageMeta(): any;
    static PageRequest(): any;
    static CronSchedule(): any;
    static PagePublishRequest(): any;
    static PageMetaSchema(): any;
    static SlideshowGetResponse(): any;
    static SlideshowSchema(): any;
    static SlideshowRequest(): any;
    static Support(): any;
    static PhoneProperties(): any;
    static PhoneSchema(): any;
    static EmailProperties(): any;
    static EmailSchema(): any;
    static ContactSchema(): any;
    static TagsSchema(): any;
    static TagSchema(): any;
    static CommunicationConsentReq(): any;
    static CommunicationConsentRes(): any;
    static CommunicationConsentChannelsEmail(): any;
    static CommunicationConsentChannelsSms(): any;
    static CommunicationConsentChannelsWhatsapp(): any;
    static CommunicationConsentChannels(): any;
    static CommunicationConsent(): any;
    static PushtokenReq(): any;
    static PushtokenRes(): any;
    static QRCodeResp(): any;
    static RedirectDevice(): any;
    static WebRedirect(): any;
    static Redirects(): any;
    static Campaign(): any;
    static Attribution(): any;
    static SocialMediaTags(): any;
    static ShortLinkReq(): any;
    static UrlInfo(): any;
    static ShortLinkRes(): any;
    static ShortLinkList(): any;
    static FailedResponse(): any;
    static CDN(): any;
    static Upload(): any;
    static StartResponse(): any;
    static StartRequest(): any;
    static CompleteResponse(): any;
    static Opts(): any;
    static CopyFileTask(): any;
    static BulkResponse(): any;
    static ReqConfiguration(): any;
    static Destination(): any;
    static BulkRequest(): any;
    static Urls(): any;
    static SignUrlResponse(): any;
    static SignUrlRequest(): any;
    static DbRecord(): any;
    static BrowseResponse(): any;
    static ApplicationAboutResponse(): any;
    static ApplicationInfo(): any;
    static CompanyInfo(): any;
    static OwnerInfo(): any;
    static AppVersionRequest(): any;
    static ApplicationVersionRequest(): any;
    static Device(): any;
    static OS(): any;
    static SupportedLanguage(): any;
    static LanguageResponse(): any;
    static AppStaffResponse(): any;
    static UpdateDialog(): any;
    static OrderingStoreSelectRequest(): any;
    static OrderingStoreSelect(): any;
    static AppStaff(): any;
    static ProductDetailFeature(): any;
    static LaunchPage(): any;
    static LandingPageFeature(): any;
    static RegistrationPageFeature(): any;
    static AppFeature(): any;
    static HomePageFeature(): any;
    static CommonFeature(): any;
    static CommunicationOptinDialogFeature(): any;
    static DeploymentStoreSelectionFeature(): any;
    static ListingPriceFeature(): any;
    static ListingPageFeature(): any;
    static CurrencyFeature(): any;
    static RevenueEngineFeature(): any;
    static FeedbackFeature(): any;
    static CompareProductsFeature(): any;
    static CartFeature(): any;
    static QrFeature(): any;
    static PcrFeature(): any;
    static OrderFeature(): any;
    static AppFeatureRequest(): any;
    static AppFeatureResponse(): any;
    static Currency(): any;
    static Domain(): any;
    static ApplicationWebsite(): any;
    static ApplicationCors(): any;
    static ApplicationAuth(): any;
    static ApplicationRedirections(): any;
    static ApplicationMeta(): any;
    static SecureUrl(): any;
    static Application(): any;
    static NotFound(): any;
    static UnhandledError(): any;
    static InvalidPayloadRequest(): any;
    static SuccessMessageResponse(): any;
    static InventoryBrandRule(): any;
    static StoreCriteriaRule(): any;
    static InventoryStoreRule(): any;
    static InventoryPaymentConfig(): any;
    static StorePriorityRule(): any;
    static ArticleAssignmentRule(): any;
    static InventoryArticleAssignment(): any;
    static CompanyAboutAddress(): any;
    static UserEmail(): any;
    static UserPhoneNumber(): any;
    static ApplicationInformation(): any;
    static InformationAddress(): any;
    static InformationPhone(): any;
    static InformationSupport(): any;
    static SocialLinks(): any;
    static Instagram(): any;
    static Twitter(): any;
    static Pinterest(): any;
    static GooglePlus(): any;
    static Youtube(): any;
    static LinkedIn(): any;
    static Vimeo(): any;
    static BlogLink(): any;
    static Links(): any;
    static BusinessHighlights(): any;
    static ApplicationDetail(): any;
    static CurrenciesResponse(): any;
    static StoreLatLong(): any;
    static OptedStoreAddress(): any;
    static OrderingStore(): any;
    static OrderingStores(): any;
    static TokenResponse(): any;
    static Tokens(): any;
    static Firebase(): any;
    static Credentials(): any;
    static Ios(): any;
    static Android(): any;
    static Moengage(): any;
    static MoengageCredentials(): any;
    static Segment(): any;
    static SegmentCredentials(): any;
    static Gtm(): any;
    static GtmCredentials(): any;
    static Freshchat(): any;
    static FreshchatCredentials(): any;
    static Safetynet(): any;
    static SafetynetCredentials(): any;
    static FyndRewards(): any;
    static FyndRewardsCredentials(): any;
    static Auth(): any;
    static GoogleMap(): any;
    static GoogleMapCredentials(): any;
    static AggregatorConfigDetail(): any;
    static AggregatorsConfigDetailResponse(): any;
    static ErrorCodeAndDescription(): any;
    static HttpErrorCodeAndResponse(): any;
    static AttachCardRequest(): any;
    static AttachCardsResponse(): any;
    static CardPaymentGateway(): any;
    static ActiveCardPaymentGatewayResponse(): any;
    static Card(): any;
    static ListCardsResponse(): any;
    static DeletehCardRequest(): any;
    static DeleteCardsResponse(): any;
    static ValidateCustomerRequest(): any;
    static ValidateCustomerResponse(): any;
    static ChargeCustomerRequest(): any;
    static ChargeCustomerResponse(): any;
    static PaymentInitializationRequest(): any;
    static PaymentInitializationResponse(): any;
    static PaymentStatusUpdateRequest(): any;
    static PaymentStatusUpdateResponse(): any;
    static PaymentModeLogo(): any;
    static PaymentModeList(): any;
    static RootPaymentMode(): any;
    static AggregatorRoute(): any;
    static PaymentFlow(): any;
    static PaymentOptionAndFlow(): any;
    static PaymentModeRouteResponse(): any;
    static OrderBeneficiaryDetails(): any;
    static OrderBeneficiaryResponse(): any;
    static NotFoundResourceError(): any;
    static IfscCodeResponse(): any;
    static ErrorCodeDescription(): any;
    static AddBeneficiaryViaOtpVerificationRequest(): any;
    static AddBeneficiaryViaOtpVerificationResponse(): any;
    static WrongOtpError(): any;
    static BankDetails(): any;
    static AddBeneficiaryDetailsRequest(): any;
    static RefundAccountResponse(): any;
    static WalletOtpRequest(): any;
    static WalletOtpResponse(): any;
    static SetDefaultBeneficiaryRequest(): any;
    static SetDefaultBeneficiaryResponse(): any;
    static OrderById(): any;
    static OrderList(): any;
    static OrderPage(): any;
    static ShipmentById(): any;
    static ShipmentReasons(): any;
    static ShipmentStatusUpdateBody(): any;
    static Shipments(): any;
    static ShipmentId(): any;
    static StatusUpdate(): any;
    static ShipmentStatusUpdate(): any;
    static ShipmentTrack(): any;
    static OrderSchema(): any;
    static PosOrderById(): any;
    static Bags(): any;
    static Item(): any;
    static BagItemAttributes(): any;
    static Prices(): any;
    static CurrentStatus(): any;
    static BagStateMapper(): any;
    static BagStatus(): any;
    static BagStatusBagStateMapper(): any;
    static Dates(): any;
    static BagState(): any;
    static FinancialBreakup(): any;
    static Identifiers(): any;
    static BagReasons(): any;
    static Article(): any;
    static ArticleIdentifiers(): any;
    static ReturnConfig(): any;
    static CurrentOperationalStatus(): any;
    static CurrentOperationalStatusReasons(): any;
    static CurrentOperationalStatusBagStateMapper(): any;
    static Brand(): any;
    static AffiliateBagDetails(): any;
    static AffiliateMeta(): any;
    static Fynd(): any;
    static GstDetails(): any;
    static BreakupValues(): any;
    static DeliveryAddress(): any;
    static FulfillingStore(): any;
    static StoreAddressJson(): any;
    static FulfillingStoreMeta(): any;
    static AdditionalContactDetails(): any;
    static Timing(): any;
    static Opening(): any;
    static Closing(): any;
    static Documents(): any;
    static Gst(): any;
    static Invoice(): any;
    static ProductItems(): any;
    static ProductItemAttributes(): any;
    static ShipmentMeta(): any;
    static Timestamp(): any;
    static DpOptions(): any;
    static DpOptionId(): any;
    static Formatted(): any;
    static DebugInfo(): any;
    static Promise(): any;
    static Reasons(): any;
    static ShipmentStatus(): any;
    static ShipmentUserInfo(): any;
    static Track(): any;
    static TrackingDetails(): any;
    static UserInfo(): any;
    static ApefaceApiError(): any;
    static UpdateCartShipmentItem(): any;
    static UpdateCartShipmentRequest(): any;
    static Files(): any;
    static CartPosCheckoutRequest(): any;
    static CartDeliveryModesResponse(): any;
    static PickupStoreDetail(): any;
    static StoreDetailsResponse(): any;
    static GetPincodeCityResponse(): any;
    static LogisticPincodeData(): any;
    static LogisticMeta(): any;
    static LogisticParents(): any;
    static LogisticError(): any;
    static GetTatProductReqBody(): any;
    static LocationDetails(): any;
    static TatProductArticles(): any;
    static LogisticRequestCategory(): any;
    static LogisticPromise(): any;
    static LogisticTimestamp(): any;
    static GetTatProductResponse(): any;
    static LogisticResponseCategory(): any;
}
