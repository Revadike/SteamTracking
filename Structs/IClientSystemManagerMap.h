class IClientSystemManagerMap
{
public:
    virtual unknown_ret GetSettings(void*) = 0;
    virtual unknown_ret UpdateSettings(void*) = 0;
    virtual unknown_ret ShutdownSystem() = 0;
    virtual unknown_ret SuspendSystem() = 0;
    virtual unknown_ret RestartSystem() = 0;
    virtual unknown_ret FactoryReset() = 0;
    virtual unknown_ret RebootToFactoryTestImage(void*) = 0;
    virtual unknown_ret GetDisplayBrightness(void*) = 0;
    virtual unknown_ret SetDisplayBrightness(void*) = 0;
    virtual unknown_ret FormatRemovableStorage() = 0;
    virtual unknown_ret CheckForUpdate(void*) = 0;
    virtual unknown_ret ApplyUpdate(void*) = 0;
    virtual unknown_ret ClearAudioDefaults(void*) = 0;
    virtual unknown_ret RunDeckMicEnableHack() = 0;
    virtual unknown_ret RunDeckEchoCancellationHack() = 0;
};
