//
//  ViewController.swift
//  MyReactNativeApp
//
//  Created by Yves BIMAI on 24/08/2018.
//  Copyright © 2018 Skylight Consulting. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func highScoreButtonTapped(_ sender: UIButton) {
        NSLog("Hello")
        //let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let mockData:NSDictionary = ["scores":
            [
                ["name":"Alex", "value":"42"],
                ["name":"Joel", "value":"10"]
            ]
        ]
      
        /*
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "RNHighScores",
            initialProperties: mockData as [NSObject : AnyObject],
            launchOptions: nil
        )
         */
        
        let rootView = MyReactNativeModule.sharedInstance.viewForModule(
            "RNHighScores",
            initialProperties: mockData as? [String : Any])
        
        let vc = UIViewController()
        vc.view = rootView
        self.present(vc, animated: true, completion: nil)
    }
    
}

