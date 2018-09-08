//
//  Counter.swift
//  MyReactNativeApp
//
//  Created by Yves BIMAI on 24/08/2018.
//  Copyright © 2018 Skylight Consulting. All rights reserved.
//

import Foundation
import React

@objc(Counter)
class Counter: RCTEventEmitter {
    @objc override func constantsToExport() -> [AnyHashable : Any]! {
        return ["number": 123.9,
                "string": "foo",
                "boolean": true,
                "array": [1, 22.2, "33"],
                "object": ["a": 1, "b": 2]]
    }
    
    @objc
    static override func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    private var count = 0
    @objc
    func increment() {
        count += 1
        print("count is \(count)")
        sendEvent(withName: "onIncrement", body: ["count": count])
    }
    
    // we need to override this method and
    // return an array of event names that we can listen to
    override func supportedEvents() -> [String]! {
        return ["onIncrement"]
    }
    
    @objc
    func getCount(_ callback: RCTResponseSenderBlock) {
        callback([count,
                  123.9,               // int or float
            "third argument",    // string
            [1, 2.2, "3"],       // array
            ["a": 1, "b": 2]     // object
            ])
    }
    
    @objc
    func decrement(
        _ resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
        ) -> Void {
        if (count == 0) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_COUNT", "count cannot be negative", error)
        } else {
            count -= 1
            resolve("count was decremented")
        }
    }
}
