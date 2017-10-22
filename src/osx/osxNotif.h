#import <Cordova/CDVPlugin.h>

@interface osxNotif : CDVPlugin

// Load the badge config
- (void) show:(CDVInvokedUrlCommand *)command;

@end
