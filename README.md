# MarkdownView

[![Swift 5.0](https://img.shields.io/badge/Swift-5.0-orange.svg?style=flat)](https://swift.org/)
[![Carthage compatible](https://img.shields.io/badge/Carthage-compatible-4BC51D.svg?style=flat)](https://github.com/Carthage/Carthage)

> MarkdownView is a WKWebView based UI element, and internally use bootstrap and markdown-it.

## This is a fork

This is a fork of the [original library from keitaoouchi](https://github.com/keitaoouchi/MarkdownView) with these changes:

- It doesn't include highlight.js and therefore doesn't have syntax highlighting.
    - Rationale: The size of the framework is reduced significantly.
    - Javascript size goes doen from 902KB to 130KB
- Use may use it with [Carthage](https://github.com/Carthage/Carthage): Add this line to your Cartfile: `github "michaelpeternell/MarkdownView" ~> 1.7`
- Maybe you can somehow make this fork work with [Cocoapods](https://cocoapods.org/) too, but I haven't tried.

## How to use

```swift
import MarkdownView

let md = MarkdownView()
md.load(markdown: "# Hello World!")
```

### Options

```swift
md.isScrollEnabled = false

// called when rendering finished
md.onRendered = { [weak self] height in
  self?.mdViewHeight.constant = height
  self?.view.setNeedsLayout()
}

// called when user touch link
md.onTouchLink = { [weak self] request in
  guard let url = request.url else { return false }

  if url.scheme == "file" {
    return false
  } else if url.scheme == "https" {
    let safari = SFSafariViewController(url: url)
    self?.navigationController?.pushViewController(safari, animated: true)
    return false
  } else {
    return false
  }
}
```

## Requirements

| Target            | Version |
|-------------------|---------|
| iOS               |  => 10.0 |
| Swift             |  => 5.0 |

## Installation

MarkdownView is available through [CocoaPods](http://cocoapods.org) or [Carthage](https://github.com/Carthage/Carthage).

### CocoaPods

```ruby
pod "MarkdownView"
```

### Carthage

```
github "keitaoouchi/MarkdownView"
```

for detail, please follow the [Carthage Instruction](https://github.com/Carthage/Carthage#if-youre-building-for-ios-tvos-or-watchos)


## Authors

Original author: keita.oouchi, keita.oouchi@gmail.com

Changes by: Michael Peternell (removed highlight.js)

## License

[bootstrap](http://getbootstrap.com/) is licensed under [MIT license](https://github.com/twbs/bootstrap/blob/v4-dev/LICENSE).  
[markdown-it](https://markdown-it.github.io/) is licensed under [MIT license](https://github.com/markdown-it/markdown-it/blob/master/LICENSE).  

MarkdownView is available under the MIT license. See the LICENSE file for more info.
