class IClientInventoryMap
{
public:
    virtual unknown_ret GetResultStatus(void*) = 0;
    virtual unknown_ret DestroyResult(void*) = 0;
    virtual unknown_ret GetResultItems(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetResultItemProperty(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetResultTimestamp(void*) = 0;
    virtual unknown_ret CheckResultSteamID(void*,void*,void*) = 0;
    virtual unknown_ret SerializeResult(void*,void*,void*,void*) = 0;
    virtual unknown_ret DeserializeResult(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetAllItems(void*) = 0;
    virtual unknown_ret GetItemsByID(void*,void*,void*) = 0;
    virtual unknown_ret GenerateItems(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret AddPromoItems(void*,void*,void*) = 0;
    virtual unknown_ret ConsumeItem(void*,void*,void*,void*) = 0;
    virtual unknown_ret ExchangeItems(void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret TransferItemQuantity(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SendItemDropHeartbeat() = 0;
    virtual unknown_ret TriggerItemDrop(void*,void*) = 0;
    virtual unknown_ret TradeItems(void*,void*,void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret LoadItemDefinitions() = 0;
    virtual unknown_ret GetItemDefinitionIDs(void*,void*,void*) = 0;
    virtual unknown_ret GetItemDefinitionProperty(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret RequestEligiblePromoItemDefinitionsIDs(void*,void*) = 0;
    virtual unknown_ret GetEligiblePromoItemDefinitionIDs(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret StartPurchase(void*,void*,void*,void*) = 0;
    virtual unknown_ret RequestPrices() = 0;
    virtual unknown_ret GetNumItemsWithPrices() = 0;
    virtual unknown_ret GetItemsWithPrices(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetItemPrice(void*,void*,void*) = 0;
    virtual unknown_ret StartUpdateProperties() = 0;
    virtual unknown_ret RemoveProperty(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetProperty(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetProperty(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetProperty(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetProperty(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SubmitUpdateProperties(void*,void*,void*) = 0;
    virtual unknown_ret InspectItem(void*,void*) = 0;
};
