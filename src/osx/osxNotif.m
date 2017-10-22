#import "osxNotif.h"

@implementation osxNotif

- (void) show:(CDVInvokedUrlCommand *)command
{
    NSString* title = [command argumentAtIndex:0];
    NSString* subtitle = [command argumentAtIndex:1];
    NSUserNotification *notification = [[NSUserNotification alloc] init];
    notification.title = title;
    notification.subtitle = subtitle;
    notification.soundName = NSUserNotificationDefaultSoundName;
    [[NSUserNotificationCenter defaultUserNotificationCenter] deliverNotification:notification];
}

@end
