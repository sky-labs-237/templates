//
//  CounterViewManagerBridge.m
//  MyReactNativeApp
//
//  Created by Yves BIMAI on 25/08/2018.
//  Copyright © 2018 Skylight Consulting. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

#import "React/RCTViewManager.h"

#import "React/RCTEventEmitter.h"


@interface RCT_EXTERN_MODULE(CounterViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(count, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(onUpdate, RCTDirectEventBlock)
RCT_EXTERN_METHOD(
                  updateFromManager:(nonnull NSNumber *)node
                  count:(nonnull NSNumber *)count
                  )


@end



