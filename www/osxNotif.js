var exec      = require('cordova/exec'),
    channel   = require('cordova/channel'),
    ua        = navigator.userAgent.toLowerCase(),
    isIOS     = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1,
    isMac     = ua.indexOf('macintosh') > -1,
    isWin     = window.Windows !== undefined,
    isWinPC   = isWin && Windows.System.Profile.AnalyticsInfo.versionInfo.deviceFamily.includes('Desktop'),
    isDesktop = isMac || isWinPC;


exports.createCallbackFn = function (callbackFn, scope) {
    if (typeof callbackFn != 'function')
        return;

    return function () {
        callbackFn.apply(scope || this, arguments);
    };
};


exports.show = function (title, subtitle, callback, scope) {
    this.exec('show', [title, subtitle], callback, scope);
};


exports.exec = function (action, args, callback, scope) {
    var fn     = this.createCallbackFn(callback, scope),
        params = [];

    if (Array.isArray(args)) {
        params = args;
    } else if (args) {
        params.push(args);
    }

    exec(fn, null, 'osxNotif', action, params);
};
