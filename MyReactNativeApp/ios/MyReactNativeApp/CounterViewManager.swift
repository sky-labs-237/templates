//
//  CounterViewManager.swift
//  MyReactNativeApp
//
//  Created by Yves BIMAI on 25/08/2018.
//  Copyright © 2018 Skylight Consulting. All rights reserved.
//

import Foundation

import React

@objc(CounterViewManager)
class CounterViewManager: RCTViewManager {
    override func view() -> UIView! {
        return CounterView()
    }
    
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    @objc
    func updateFromManager(_ node: NSNumber, count: NSNumber) { // 1
        
        DispatchQueue.main.async {                                // 2
            let component = self.bridge.uiManager.view(             // 3
                forReactTag: node                                     // 4
                ) as! CounterView                                       // 5
            component.update(value: count)                          // 6
        }
    }
}

