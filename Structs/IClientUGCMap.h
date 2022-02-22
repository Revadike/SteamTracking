class IClientUGCMap
{
public:
    virtual unknown_ret CreateQueryUserUGCRequest(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret CreateQueryAllUGCRequest(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret CreateQueryAllUGCRequest(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret CreateQueryUGCDetailsRequest(void*,void*) = 0;
    virtual unknown_ret SendQueryUGCRequest(void*,void*) = 0;
    virtual unknown_ret GetQueryUGCResult(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCNumTags(void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCTag(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCTagDisplayName(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCPreviewURL(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCImageURL(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCMetadata(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCChildren(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCStatistic(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCNumAdditionalPreviews(void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCAdditionalPreview(void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCNumKeyValueTags(void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCKeyValueTag(void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCKeyValueTag(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetQueryUGCIsDepotBuild(void*,void*,void*,void*) = 0;
    virtual unknown_ret ReleaseQueryUGCRequest(void*,void*) = 0;
    virtual unknown_ret AddRequiredTag(void*,void*,void*) = 0;
    virtual unknown_ret AddRequiredTagGroup(void*,void*,void*) = 0;
    virtual unknown_ret AddExcludedTag(void*,void*,void*) = 0;
    virtual unknown_ret SetReturnOnlyIDs(void*,void*,void*) = 0;
    virtual unknown_ret SetReturnKeyValueTags(void*,void*,void*) = 0;
    virtual unknown_ret SetReturnLongDescription(void*,void*,void*) = 0;
    virtual unknown_ret SetReturnMetadata(void*,void*,void*) = 0;
    virtual unknown_ret SetReturnChildren(void*,void*,void*) = 0;
    virtual unknown_ret SetReturnAdditionalPreviews(void*,void*,void*) = 0;
    virtual unknown_ret SetReturnTotalOnly(void*,void*,void*) = 0;
    virtual unknown_ret SetReturnPlaytimeStats(void*,void*,void*) = 0;
    virtual unknown_ret SetLanguage(void*,void*,void*) = 0;
    virtual unknown_ret SetAllowCachedResponse(void*,void*,void*) = 0;
    virtual unknown_ret SetCloudFileNameFilter(void*,void*,void*) = 0;
    virtual unknown_ret SetMatchAnyTag(void*,void*,void*) = 0;
    virtual unknown_ret SetSearchText(void*,void*,void*) = 0;
    virtual unknown_ret SetRankedByTrendDays(void*,void*,void*) = 0;
    virtual unknown_ret SetTimeCreatedDateRange(void*,void*,void*,void*) = 0;
    virtual unknown_ret SetTimeUpdatedDateRange(void*,void*,void*,void*) = 0;
    virtual unknown_ret AddRequiredKeyValueTag(void*,void*,void*,void*) = 0;
    virtual unknown_ret RequestUGCDetails(void*,void*,void*) = 0;
    virtual unknown_ret CreateItem(void*,void*) = 0;
    virtual unknown_ret StartItemUpdate(void*,void*,void*) = 0;
    virtual unknown_ret SetItemTitle(void*,void*,void*) = 0;
    virtual unknown_ret SetItemDescription(void*,void*,void*) = 0;
    virtual unknown_ret SetItemUpdateLanguage(void*,void*,void*) = 0;
    virtual unknown_ret SetItemMetadata(void*,void*,void*) = 0;
    virtual unknown_ret SetItemVisibility(void*,void*,void*) = 0;
    virtual unknown_ret SetItemTags(void*,void*,void*) = 0;
    virtual unknown_ret SetItemContent(void*,void*,void*) = 0;
    virtual unknown_ret SetItemPreview(void*,void*,void*) = 0;
    virtual unknown_ret SetAllowLegacyUpload(void*,void*,void*) = 0;
    virtual unknown_ret RemoveAllItemKeyValueTags(void*,void*) = 0;
    virtual unknown_ret RemoveItemKeyValueTags(void*,void*,void*) = 0;
    virtual unknown_ret AddItemKeyValueTag(void*,void*,void*,void*) = 0;
    virtual unknown_ret AddItemPreviewFile(void*,void*,void*,void*) = 0;
    virtual unknown_ret AddItemPreviewVideo(void*,void*,void*) = 0;
    virtual unknown_ret UpdateItemPreviewFile(void*,void*,void*,void*) = 0;
    virtual unknown_ret UpdateItemPreviewVideo(void*,void*,void*,void*) = 0;
    virtual unknown_ret RemoveItemPreview(void*,void*,void*) = 0;
    virtual unknown_ret SubmitItemUpdate(void*,void*,void*) = 0;
    virtual unknown_ret GetItemUpdateProgress(void*,void*,void*,void*) = 0;
    virtual unknown_ret SetUserItemVote(void*,void*,void*) = 0;
    virtual unknown_ret GetUserItemVote(void*,void*) = 0;
    virtual unknown_ret AddItemToFavorites(void*,void*,void*) = 0;
    virtual unknown_ret RemoveItemFromFavorites(void*,void*,void*) = 0;
    virtual unknown_ret SubscribeItem(void*,void*,void*,void*) = 0;
    virtual unknown_ret UnsubscribeItem(void*,void*,void*) = 0;
    virtual unknown_ret GetNumSubscribedItems(void*) = 0;
    virtual unknown_ret GetSubscribedItems(void*,void*,void*) = 0;
    virtual unknown_ret GetItemState(void*,void*,void*) = 0;
    virtual unknown_ret GetItemInstallInfo(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetItemDownloadInfo(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret DownloadItem(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetAppItemsStatus(void*,void*,void*) = 0;
    virtual unknown_ret BInitWorkshopForGameServer(void*,void*,void*) = 0;
    virtual unknown_ret SuspendDownloads(void*,void*) = 0;
    virtual unknown_ret GetAllItemsSizeOnDisk(void*) = 0;
    virtual unknown_ret StartPlaytimeTracking(void*,void*,void*) = 0;
    virtual unknown_ret StopPlaytimeTracking(void*,void*,void*) = 0;
    virtual unknown_ret StopPlaytimeTrackingForAllItems(void*) = 0;
    virtual unknown_ret AddDependency(void*,void*,void*,void*) = 0;
    virtual unknown_ret RemoveDependency(void*,void*,void*,void*) = 0;
    virtual unknown_ret AddAppDependency(void*,void*,void*) = 0;
    virtual unknown_ret RemoveAppDependency(void*,void*,void*) = 0;
    virtual unknown_ret GetAppDependencies(void*,void*) = 0;
    virtual unknown_ret DeleteItem(void*,void*) = 0;
    virtual unknown_ret ShowWorkshopEULA() = 0;
    virtual unknown_ret GetWorkshopEULAStatus() = 0;
};