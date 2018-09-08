//
//  CounterView.swift
//  MyReactNativeApp
//
//  Created by Yves BIMAI on 25/08/2018.
//  Copyright © 2018 Skylight Consulting. All rights reserved.
//

import UIKit

import React

class CounterView: UIView {
    
    /*
     // Only override draw() if you perform custom drawing.
     // An empty implementation adversely affects performance during animation.
     override func draw(_ rect: CGRect) {
     // Drawing code
     }
     */
    
    var count: NSNumber = 0 {
        didSet {
            button.setTitle(String(describing: count), for: .normal)
        }
    }
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.addSubview(button)
        increment()
    }
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @objc
    var onUpdate: RCTDirectEventBlock?
    
    lazy var button: UIButton = {
        let b = UIButton.init(type: UIButtonType.system)
        b.titleLabel?.font = UIFont.systemFont(ofSize: 50)
        b.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        b.addTarget(
            self,
            action: #selector(increment),
            for: .touchUpInside
        )
        
        let longPress = UILongPressGestureRecognizer(
            target: self,
            action: #selector(sendUpdate(_:))
        )
        b.addGestureRecognizer(longPress)
        
        return b
    }()
    
    @objc
    func sendUpdate(_ gesture: UILongPressGestureRecognizer) {
        if gesture.state == .began {
            if onUpdate != nil {
                onUpdate!(["count": count])
            }
        }
    }
    
    @objc func increment() {
        count = count.intValue + 1 as NSNumber
    }
    @objc
    func setCount(_ val: NSNumber) {
        count = val
    }
    
    @objc
    func update(value: NSNumber) {
        count = value
    }
}
