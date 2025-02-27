class IClientVRMap
{
public:
    virtual unknown_ret GetCurrentHmd() = 0;
    virtual unknown_ret GetCompositor() = 0;
    virtual unknown_ret GetOverlay() = 0;
    virtual unknown_ret GetChaperone() = 0;
    virtual unknown_ret GetSettings() = 0;
    virtual unknown_ret GetExternalEventSource() = 0;
    virtual unknown_ret GetOverlayHandle() = 0;
    virtual unknown_ret IsHmdPresent() = 0;
    virtual unknown_ret UpdateHmdStatus() = 0;
    virtual unknown_ret IsVRModeActive() = 0;
    virtual unknown_ret InitVR(void*,void*,void*) = 0;
    virtual unknown_ret StartSteamVR(void*) = 0;
    virtual unknown_ret CleanupVR() = 0;
    virtual unknown_ret QuitAllVR() = 0;
    virtual unknown_ret QuitApplication(void*) = 0;
    virtual unknown_ret GetStringForHmdError(void*) = 0;
    virtual unknown_ret LaunchApplication(void*) = 0;
    virtual unknown_ret GetSteamVRAppId() = 0;
    virtual unknown_ret GetSteamVRPid() = 0;
    virtual unknown_ret GetWebSecret() = 0;
};
