#import <React/RCTBridgeDelegate.h>
// #import <React-RCTAppDelegate/RCTAppDelegate.h>
#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>
// @interface AppDelegate : RCTAppDelegate

@property (nonatomic, strong) UIWindow *window;

@end
