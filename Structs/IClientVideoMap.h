class IClientVideoMap
{
public:
    virtual unknown_ret BGetUserVideoFolder(void*,void*) = 0;
    virtual unknown_ret UnlockH264() = 0;
    virtual unknown_ret EGetBroadcastReady() = 0;
    virtual unknown_ret BeginBroadcastSession() = 0;
    virtual unknown_ret EndBroadcastSession() = 0;
    virtual unknown_ret IsBroadcasting(void*) = 0;
    virtual unknown_ret BIsUploadingThumbnails() = 0;
    virtual unknown_ret GetBroadcastSessionID() = 0;
    virtual unknown_ret ReceiveBroadcastChat(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret PostBroadcastChat(void*,void*,void*) = 0;
    virtual unknown_ret MuteBroadcastChatUser(void*,void*,void*,void*) = 0;
    virtual unknown_ret InitBroadcastVideo(void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret InitBroadcastAudio(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret UploadBroadcastFrame(void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret UploadBroadcastThumbnail(void*,void*,void*,void*) = 0;
    virtual unknown_ret DroppedVideoFrames(void*) = 0;
    virtual unknown_ret SetCurrentVideoEncodingRate(void*) = 0;
    virtual unknown_ret SetMicrophoneState(void*,void*) = 0;
    virtual unknown_ret SetVideoSource(void*) = 0;
    virtual unknown_ret BroadcastRecorderError(void*) = 0;
    virtual unknown_ret LoadBroadcastSettings() = 0;
    virtual unknown_ret SetBroadcastPermissions(void*) = 0;
    virtual unknown_ret GetBroadcastPermissions() = 0;
    virtual unknown_ret GetBroadcastMaxKbps() = 0;
    virtual unknown_ret GetBroadcastDelaySeconds() = 0;
    virtual unknown_ret BGetBroadcastDimensions(void*,void*) = 0;
    virtual unknown_ret GetBroadcastIncludeDesktop() = 0;
    virtual unknown_ret GetBroadcastRecordSystemAudio() = 0;
    virtual unknown_ret GetBroadcastRecordMic() = 0;
    virtual unknown_ret GetBroadcastShowChatCorner() = 0;
    virtual unknown_ret GetBroadcastShowDebugInfo() = 0;
    virtual unknown_ret GetBroadcastShowReminderBanner() = 0;
    virtual unknown_ret GetBroadcastEncoderSetting() = 0;
    virtual unknown_ret InviteToBroadcast(void*,void*,void*,void*) = 0;
    virtual unknown_ret IgnoreApprovalRequest(void*,void*,void*) = 0;
    virtual unknown_ret BroadcastFirstTimeComplete() = 0;
    virtual unknown_ret SetInHomeStreamState(void*) = 0;
    virtual unknown_ret WatchBroadcast(void*,void*) = 0;
    virtual unknown_ret GetWatchBroadcastMPD(void*,void*) = 0;
    virtual unknown_ret GetApprovalRequestCount() = 0;
    virtual unknown_ret GetApprovalRequests(void*,void*) = 0;
    virtual unknown_ret AddBroadcastGameData(void*,void*) = 0;
    virtual unknown_ret RemoveBroadcastGameData(void*) = 0;
    virtual unknown_ret AddTimelineMarker(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret RemoveTimelineMarker() = 0;
    virtual unknown_ret AddRegion(void*,void*,void*,void*) = 0;
    virtual unknown_ret RemoveRegion(void*) = 0;
    virtual unknown_ret GetVideoURL(void*) = 0;
    virtual unknown_ret GetOPFSettings(void*) = 0;
    virtual unknown_ret GetOPFStringForApp(void*,void*,void*,void*) = 0;
    virtual unknown_ret WebRTCGetTURNAddress(void*) = 0;
    virtual unknown_ret WebRTCStartResult(void*,void*,void*,void*) = 0;
    virtual unknown_ret WebRTCAddCandidate(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret WebRTCGetAnswer(void*,void*,void*) = 0;
};