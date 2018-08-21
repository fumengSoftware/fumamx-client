export default {
  UniversalInterface: {
    imgVerificationCode: 'UniversalInterface/imgVerificationCode' // 获取图片验证码
  },
  // 代理后端请求
  v2: {
    // 通用
    verifySMS: 'v2/verifySMS', // 发送校验短信验证码
    verifyemail: 'v2/verifyemail', // 发送校验邮箱验证码
    checkValid: 'v2/checkValid/', // 有效性验证（企业、账号）
    navigator_get: 'v2/navigator/get', // 获取导航列表
    timestamp: 'v2/timestamp', // 获取服务器linux时间戳
    dictionary: 'v2/dictionary/', // 获取系统基础信息
    area: 'v2/area/', // 获取行政区划信息
    accountDropList_get: 'v2/accountDropList/get', // 获取人员/部门下拉框
    sysDefault_get: 'v2/sysDefault/get', // 获取系统默认配置信息
    // 邮件
    mails_fastTextGroup_deleteFastTextGroup:
            'v2/mails/fastTextGroup/deleteFastTextGroup', // 删除快速文本组
    mails_fastTextGroup_getFastTextGroupList:
            'v2/mails/fastTextGroup/getFastTextGroupList', // 获取快速文本组列表
    mails_fastTextGroup_addFastTextGroup:
            'v2/mails/fastTextGroup/addFastTextGroup', // 新增快速文本组
    mails_fastText_addFastText: 'v2/mails/fastText/addFastText', // 新增快速文本
    mails_fastText_deleteFastText: 'v2/mails/fastText/deleteFastText', // 删除快速文本
    mails_fastText_getFastTextList: 'v2/mails/fastText/getFastTextList', // 获取快速文本列表
    mails_account: 'v2/mails/account', // 邮箱账号相关=>添加账号,修改已添加的邮箱账号,删除已添加的邮箱账号,获取已添加的邮箱账号列,获取已添加账户信息
    mails_mailOptions_getOptions: 'v2/mails/mailOptions/getOptions', // 邮箱服务器配置
    mails_mailOptions_updateOptions: 'v2/mails/mailOptions/updateOptions', // 更新邮件设置列表
    mails_mailbox: 'v2/mails/mailbox', // 邮件文件夹相关=>添加文件夹,修改文件夹,获取邮件文件夹信息,清空回收站文件夹
    mails_mailboxes: 'v2/mails/mailboxes', // 获取邮件文件夹列表
    mails_maillist: 'v2/mails/maillist', // 邮件列表相关
    mails_search: 'v2/mails/search', // 邮件高级搜索
    mails_mailscount: 'v2/mails/mailscount', // 获取邮件目录统计信息
    mails_mail: 'v2/mails/mail', // 邮件相关操作=>邮件更新操作,获取单个邮件信息,邮件彻底删除,
    mails_download: 'v2/mails/download', // 邮件文件下载
    mails_searchField_get: 'v2/mails/searchField/get', // 搜索字段配置=>获取邮件搜索字段
    mails_searchField_put: 'v2/mails/searchField/put', // 修改搜索字段
    mails_searchField_add: 'v2/mails/searchField/add', // 添加(删除)搜索字段
    mails_accountStatus: 'v2/mails/accountStatus', // 获取邮件接收状态
    // 单据框架
    customers_add: 'v2/customers/add', // 新增客户
    customers_get: 'v2/customers/get', // 获取客户列表, 获取客户详情
    document_quickSearch_get: 'v2/document/quickSearch/get', // 单据列表快速查询
    customers_put: 'v2/customers/put', // 修改客户（基础信息）
    customers_status_put: 'v2/customers/status/put', // 修改客户（特殊信息）,修改联系人（特殊信息）
    customerCheck_get: 'v2/customerCheck/get', // 客户查重
    customerMerge_do: 'v2/customerMerge/do', // 客户合并
    custContacts_add: 'v2/custContacts/add', // 客户联系人=>新增联系人
    custContacts_get: 'v2/custContacts/get', // 获取联系人列表,获取联系人详情
    custContacts_put: 'v2/custContacts/put', // 修改联系人（基础信息）
    socialType_get: 'v2/socialType/get', // 获取社交类型
    custTracks_add: 'v2/custTracks/add', // 客户跟进=>新增客户跟进
    custTracks_get: 'v2/custTracks/get', // 获取客户跟进列表,获取客户跟进详情
    custTracks_put: 'v2/custTracks/put', // 修改跟进（基础信息）
    customerWithContact_add: 'v2/customerWithContact/add', // 修改跟进（基础信息）
    module_get: 'v2/module/get', // 获取模块列表及对应的操
    fieldShow_get: 'v2/fieldShow/get', // 获取业务字段展示
    moduleStruct: 'v2/moduleStruct/', // 获取模块结构
    fieldShow_custCheck_do: 'v2/fieldShow/custCheck/do', // 获取客户查重字段展示,修改相关字段
    sysBoxValue_get: 'v2/sysBoxValue/get', // 获取下拉框值
    fieldDetails_get: 'v2/fieldDetails/get', // 字段操作相关=>获取相关字段
    fieldDetails_put: 'v2/fieldDetails/put', // 修改相关字段
    document_generalOperate_add: 'v2/document/generalOperate/add', // 单据新增
    document_generalOperate_get: 'v2/document/generalOperate/get', // 获取单据列表,获取单据详情
    document_generalOperate_put: 'v2/document/generalOperate/put', // 修改单据
    document_generalOperate_delete: 'v2/document/generalOperate/delete', // 单据删除
    moduleOptSet_get: 'v2/moduleOptSet/get', // 获取单据操作项
    document_rightCheck_do: 'v2/document/rightCheck/do', // 判断是否有权限操作
    document_viewset_get: 'v2/document/viewset/get', // 获取单据视图布局
    document_operate_listOpt_put: 'v2/document/operate/listOpt/put', // 批量修改
    document_operate_detailOpt_put: 'v2/document/operate/detailOpt/put', // 关注,取消关注
    document_config_get: 'v2/document/config/get', // 字段单独检验重复
    customerIntegrity_do: 'v2/customerIntegrity/do', // 获取客户资料完整度详情
    document_importExport_do: 'v2/document/importExport/do', // 导入（下载模板，获取模板字段，单据导入）
    // 单据和邮箱公用接口
    label_add: 'v2/label/add', // 新增标签
    label_delete: 'v2/label/delete', // 删除标签
    label_put: 'v2/label/put', // 修改标签
    label_get: 'v2/label/get', // 获取标签列表,获取单个标签信息
    billLabel_put: 'v2/billLabel/put', // 单据(邮件)更新标签
    billComment_add: 'v2/billComment/add', // 新增批注
    billComment_update: 'v2/billComment/update', // 删除批注
    billComment_get: 'v2/billComment/get', // 修改批注
    // 系统设置
    operateLog_query: 'v2/operateLog/query', // 获取登录日志,使用个人令牌
    behaviorLog_get: 'v2/behaviorLog/get', // 获取行为日志
    frontLog_add: 'v2/frontLog/add', // 前端日志记录
    auth: 'v2/auth', // 登录
    dinglogin: 'v2/dinglogin/', // 钉钉扫码登录
    loginEnterprise: 'v2/loginEnterprise', // 登入进企业记录行为
    department: 'v2/department/', // 获取部门信息
    department_add: 'v2/department/add', // 新增部门
    department_put: 'v2/department/put', // 修改部门信息,同级部门移动
    department_delete: 'v2/department/delete', // 删除部门
    company_add: 'v2/company/add', // 注册企业,个人令牌
    company_query: 'v2/company/query', // 获取企业基础信息
    company_put: 'v2/company/put', // 修改企业基础信息
    companysetting_get: 'v2/companysetting/get', // 获取企业配置信息,全员重置密码
    companysetting_update: 'v2/companysetting/update', // 修改企业配置信息
    simpleCompanyInfo: 'v2/simpleCompanyInfo/', // 根据二级域名获取简单企
    companyWhiteList_add: 'v2/companyWhiteList/add', // 修改企业白名单
    companyWhiteList_get: 'v2/companyWhiteList/get', // 获取企业白名单
    account_add: 'v2/account/add', // 注册个人账号
    resetpwd: 'v2/resetpwd', // 修改密码、重置密码
    account_put: 'v2/account/put', // 修改账号信息,个人令牌
    account_update: 'v2/account/update', // 单人或多人部门调整
    account_get: 'v2/account/get', // 查询个人账户信息,个人令牌,多条件获取企业人员信息
    account_query: 'v2/account/query', // 查询企业下的个人账户信息，查询企业下的所有账户信息
    account: 'v2/account/', // 根据部门获取个人信息列表
    personalsetting_get: 'v2/personalsetting/get', // 获取个人配置信息
    personalsetting_put: 'v2/personalsetting/put', // 修改个人配置信息
    invitation: 'v2/invitation', // 生成邀请链接邀请成员
    accountlist: 'v2/accountlist', // 批量添加账号
    contact_update: 'v2/contact/update', // 修改个人账号在某企业中
    contact_delete: 'v2/contact/delete', // 删除账号和企业的关联
    contact_add: 'v2/contact/add', // 添加人员进企业
    messenger_post: 'v2/messenger/post', // 新建提醒（日程）
    message_get: 'v2/message/get', // 获取提醒列表
    messenger_put: 'v2/messenger/put', // 修改日程
    messenger_get: 'v2/messenger/get', // 获取日程列表
    messenger_delete: 'v2/messenger/delete', // 删除日程
    roles: 'v2/roles/', // 获取角色
    roles_post: 'v2/roles/post', // 新增/复制角色
    roles_put: 'v2/roles/put', // 编辑角色
    roles_delete: 'v2/roles/delete', // 角色删除
    roles_contacts: 'v2/roles/contacts/', // 获取角色人员,获取人员的角色数
    roles_contacts_post: 'v2/roles/contacts/post', // 添加角色人员
    roles_contacts_delete: 'v2/roles/contacts/delete', // 删除角色人员
    permissions_get: 'v2/permissions/get', // 获取权限页,查询权限项目定义,查询权限分配
    permissions_put: 'v2/permissions/put', // 查询权限分配
    permissions_do: 'v2/permissions/do', // 权限字段限制查询
    rolesField_do: 'v2/rolesField/do', // 权限字段限制查询

    customerCooperate_do: 'v2/customerCooperate/do', // 新增共享协作人
    dictNavigator_get: 'v2/dictNavigator/get', // 获取业务字典导航
    dictionarys_add: 'v2/dictionarys/add', // 字典新增
    dictionarys_update: 'v2/dictionarys/update', // 字典修改
    dictionarys_query: 'v2/dictionarys/query', // 字典查询
    app_get: 'v2/app/get', // 获取应用中心列表
    appSet_doPut: 'v2/appSet/doPut', // 获取应用中心列表
    bizNavigator_get: 'v2/bizNavigator/get', // 业务字段配置导航
    bizField_add: 'v2/bizField/add', // 新增字段
    bizField_query: 'v2/bizField/query', // 业务字段相关查询接口
    bizField_update: 'v2/bizField/update', // 修改(编辑)字段
    seasSetting_set_do: 'v2/seasSetting/set/do', // 获取及修改公海设置
    seasSetting_seas_add: 'v2/seasSetting/seas/add', // 新建公海规则
    seasSetting_seas_put: 'v2/seasSetting/seas/put', // 修改公海规则
    seasSetting_seas_delete: 'v2/seasSetting/seas/delete', // 删除公海规则
    seasSetting_seas_get: 'v2/seasSetting/seas/get', // 获取公海规则列表,获取公海规则详情,获取自动放入规则条件筛
    seasSetting_custLimit_get: 'v2/seasSetting/custLimit/get', // 获取$条件筛选,获取$列表,获取$详情
    seasSetting_custLimit_add: 'v2/seasSetting/custLimit/add', // 新建$
    seasSetting_custLimit_put: 'v2/seasSetting/custLimit/put', // 修改$
    seasSetting_custLimit_delete: 'v2/seasSetting/custLimit/delete', // 删除$
    textDict_get: 'v2/textDict/get', // 多行文本
    // 数据统计接口
    stat_panel_get: 'v2/stat/pers/panel/get', // MX工作台个人面板信息接
    stat_custDist_get: 'v2/stat/pers/custDist/get', // MX工作台客户分布面板数
    stat_pers_get: 'v2/stat/pers/get', // MX工作台简报数据接口,MX工作台提醒小秘书数据,MX工作台活跃度统计接口,MX工作台月走势图接口
    stat_rank_get: 'v2/stat/pers/rank/get', // MX工作台部门内排行接口
    stat_pers_trackDetail_get: 'v2/stat/pers/trackDetail/get', // 客户跟进动态统计数接口
    stat_dept_panel_get: 'v2/stat/dept/panel/get', // 部门面板初始化信息接口
    stat_dept_briefReport: 'v2/stat/dept/briefReport/get', // 部门工作简报接口
    stat_dept_rank_get: 'v2/stat/dept/rank/get', // 部门排行接口
    stat_dept_custSummarize_get: 'v2/stat/dept/custSummarize/get', // 部门客户概述统计接口
    stat_dept_custDist_get: 'v2/stat/dept/custDist/get', // 部门客户分布统计接口
    stat_dept_monthlyChart_get: 'v2/stat/dept/monthlyChart/get', // 部门客户走势图统计接口
    stat_dept_activity_get: 'v2/stat/dept/activity/get', // 部门活跃度统计接口
    stat_dept_actCustDist_get: 'v2/stat/dept/actCustDist/get', // 部门业务员客户分布统计接口
    stat_init_put: 'v2/stat/init/put', // 统计数据初始化接口

    /* 文档与知识库 */
    folders_foldersTree: 'v2/folders/foldersTree', // 树目录
    folders_files: 'v2/folders/files', // 文件相关的操作
    folders_folderRights: 'v2/folders/folderRights', //  权限相关的接口
    folders_fileRights: 'v2/folders/fileRights', // 文件操作权限查询接口
    folders_fileLock: 'v2/folders/fileLock', // 文件迁入迁出相关的接口
    folders_fileVersion: 'v2/folders/fileVersion', // 文件历史版本
    files_download: 'v2/folders/fileDownload', // 文件下载接口 oss
    files_downloadV2: 'v2/folders/fileDownloadV2', // 文件下载
    folders_newFile: 'v2/folders/newFile', // 修订后的文件回显接口
    folders_recycleBinFile: 'v2/folders/recycleBinFile', // 回收站相关的接口
    folders_file_content: 'v2/folders/file/content', // 文本内容获取
    folders_preViewImage: 'v2/folders/preViewImage', // 视频封面上传
    folders_zipDownloadFiles: 'v2/folders/zipDownloadFiles', // java处理的多文件下载

    /* 单据附件，文件上传OSS */
    docFile_get: 'v2/docFile/get', // 单据附件列表/下载
    docFile_put: 'v2/docFile/put', // 单据附件删除
    folders_fileTask: 'v2/folders/fileTask', // 单据附件删除
    /* 工单 */
    workOrder_add: 'v2/workOrder/add',
    workOrder_get: 'v2/workOrder/get',
    workOrder_put: 'v2/workOrder/put',
    /* 工单记录 */
    statusChange_add: 'v2/statusChange/add',
    statusChange_get: 'v2/statusChange/get',
    // 评价
    workEvaluate_add: 'v2/workEvaluate/add'
  }
}
