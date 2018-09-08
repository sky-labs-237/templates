//
//  MyReactNativeModule.swift
//  MyReactNativeApp
//
//  Created by Yves BIMAI on 24/08/2018.
//  Copyright © 2018 Skylight Consulting. All rights reserved.
//

import Foundation
import React

class MyReactNativeModule: NSObject {
    static let sharedInstance = MyReactNativeModule()
    var bridge: RCTBridge?
    
    func createBridgeIfNeeded() -> RCTBridge {
        if bridge == nil {
            bridge = RCTBridge.init(delegate: self, launchOptions: nil)
        }
        return bridge!
    }
    
    func viewForModule(_ moduleName: String, initialProperties: [String : Any]?) -> RCTRootView {
        let viewBridge = createBridgeIfNeeded()
        let rootView: RCTRootView = RCTRootView(
            bridge: viewBridge,
            moduleName: moduleName,
            initialProperties: initialProperties)
        return rootView
    }
}

extension MyReactNativeModule: RCTBridgeDelegate {
    func sourceURL(for bridge: RCTBridge!) -> URL! {
        return URL(string: "http://localhost:8081/index.bundle?platform=ios")
    }
}
