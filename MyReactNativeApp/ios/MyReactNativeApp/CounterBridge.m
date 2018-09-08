//
//  CounterBridge.m
//  MyReactNativeApp
//
//  Created by Yves BIMAI on 25/08/2018.
//  Copyright © 2018 Skylight Consulting. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(Counter, RCTEventEmitter)

RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(
                  decrement: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                  )

@end
