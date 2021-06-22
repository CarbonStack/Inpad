export enum lngKeys {
  GeneralError = 'general.error',
  GeneralCreate = 'general.create',
  GeneralCancel = 'general.cancel',
  GeneralUpdate = 'general.update',
  GeneralAttachments = 'general.attachments',
  GeneralArchive = 'general.archive',
  GeneralSignin = 'general.signin',
  GeneralSigningIn = 'general.signingin',
  GeneralSignout = 'general.signout',
  GeneralSave = 'general.save',
  GeneralDefault = 'general.default',
  GeneralDelete = 'general.delete',
  GeneralDaily = 'general.daily',
  GeneralWeekly = 'general.weekly',
  GeneralNever = 'general.never',

  //settings
  SettingsInfo = 'settings.info',
  SettingsGeneral = 'settings.general',
  SettingsNotifications = 'settings.notifications',
  SettingsTitle = 'settings.title',
  SettingsPersonalInfo = 'settings.personalInfo',
  SettingsPreferences = 'settings.preferences',
  SettingsTeamInfo = 'settings.teamInfo',
  SettingsTeamMembers = 'settings.teamMembers',
  SettingsTeamUpgrade = 'settings.teamUpgrade',
  SettingsTeamSubscription = 'settings.teamSubscription',
  SettingsIntegrations = 'settings.integrations',
  SettingsAppFeedback = 'settings.appFeedback',
  SettingsAccount = 'settings.account',
  SettingsAccountDelete = 'settings.account.delete',
  SettingsUILanguage = 'settings.interfaceLanguage',
  SettingsApplicationTheme = 'settings.applicationTheme',
  SettingsEditorTheme = 'settings.editorTheme',
  SettingsCodeBlockTheme = 'settings.codeblockTheme',
  SettingsEditorKeyMap = 'settings.editorKeyMap',
  SettingsLight = 'settings.light',
  SettingsDark = 'settings.dark',
  SettingsNotifFrequencies = 'settings.notificationsFrequency',
  SettingsIndentType = 'settings.indentType',
  SettingsIndentSize = 'settings.indentSize',
  SettingsSpace = 'settings.space',
  SettingsSpaceDelete = 'settings.space.delete',
  SettingsSpaceDeleteWarning = 'settings.space.delete.warning',
  ManagePreferences = 'manage.preferences',
  ManageProfile = 'manage.profile',
  ManageSpaceSettings = 'manage.space.settings',
  ManageTeamMembers = 'manage.team.members',
  ManageIntegrations = 'manage.integrations',

  CurrentMembers = 'members.current',
  AddMembers = 'members.add',
  MembersAccessLevel = 'members.access.level',
  TeamCreate = 'team.create',
  TeamCreateSubtitle = 'team.create.subtitle',
  TeamName = 'team.name',
  TeamDomain = 'team.domain',
  SpaceName = 'space.name',
  SpaceDomain = 'space.domain',
  TeamDomainShow = 'team.domain.show',
  TeamDomainWarning = 'team.domain.warning',

  InviteWithOpenLink = 'invite.openlink',
  InviteEmail = 'invite.email',
  RoleMemberDescription = 'role.member.description',
  RoleAdminDescription = 'role.admin.description',
  RoleViewerDescription = 'role.viewer.description',
  RoleAdminPromote = 'role.admin.promote',
  RoleMemberChange = 'role.member.change',
  RoleViewerDemote = 'role.member.demote',
  TeamLeave = 'team.leave',
  TeamLeaveWarning = 'team.leave.warning',
  RemovingMember = 'role.member.remove',
  RemovingMemberWarning = 'role.member.remove.warning',
  CancelInvite = 'invite.cancel',
  CancelInviteOpenLinkMessage = 'invite.cancel.openlink.message',
  CancelInviteEmailMessage = 'invite.cancel.email.message',

  ExternalEntity = 'external.entity',
  ExternalEntityOpenInBrowser = 'external.entity.open.browser',
  ExternalEntityDescription = 'external.entity.description',
  ExternalEntityRequest = 'external.entity.request',

  CommunityFeedback = 'community.feedback',
  CommunityFeatureRequests = 'community.feature.requests',
  CommunityFeedbackSubtitle = 'community.feedback.subtitle',
  CommunityBugReport = 'community.bug.report',
  CommunityFeedbackSendError = 'community.feedback.send.error',
  CommunityFeedbackSendSuccess = 'community.feedback.send.success',
  CommunityFeedbackType = 'community.feedback.type',
  CommunityFeedbackFreeForm = 'community.feedback.freeform',

  ManageApi = 'manage.api',
  AccessTokens = 'tokens.access',
  CreateTokens = 'tokens.create',
  TokensName = 'tokens.name.placeholder',
  GenerateToken = 'tokens.generate',
  TokensDocumentation = 'tokens.documentation',

  SupportGuide = 'support.guide',
  SendUsAMessage = 'send.us.a.message',
  KeyboardShortcuts = 'keyboard.shortcuts',

  SettingsSubLimitTrialTitle = 'settings.sub.limit.trial.title',
  SettingsSubLimitTrialDate = 'settings.sub.limit.trial.date',
  SettingsSubLimitTrialUpgrade = 'settings.sub.limit.trial.upgrade',
  SettingsSubLimitUsed = 'settings.sub.limit.used',
  SettingsSubLimitTrialEnd = 'settings.sub.limit.trial.end',

  Back = 'back',

  Help = 'help',
  ThisSpace = 'this.space',
  ProfilePicture = 'profile.picture',
  Name = 'name',
  Logo = 'logo',
  SettingsAccountDeleteWarning = 'settings.account.delete.warning',
  FormSelectImage = 'form.image.select',
  FormChangeImage = 'form.image.change',
  Spaces = 'spaces',
  Tabs = 'tabs',
  User = 'user',
  See = 'see',
  Admin = 'members.access.level.admin',
  Member = 'members.access.level.member',
  Viewer = 'members.access.level.viewer',
  Leave = 'leave',
  Remove = 'remove',
  Copy = 'copy',
  Copied = 'copied',
  Send = 'send',
  Promote = 'promote',
  Demote = 'demote',
  Enable = 'enable',
  Disable = 'disable',
  SendMore = 'send.more',
  Show = 'show',
  Hide = 'hide',
  Save = 'save',
  Close = 'close',
  Token = 'token',

  SettingsUserForum = 'settings.user.forum',
}

export type TranslationSource = {
  [key in lngKeys]: string
}
