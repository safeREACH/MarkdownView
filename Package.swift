// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "MarkdownView",
    platforms: [
        .iOS(.v12),
    ],
    products: [
        .library(
            name: "MarkdownView",
            targets: ["MarkdownView"]
        ),
    ],
    targets: [
        .target(
            name: "MarkdownView",
            path: "MarkdownView",
            resources: [
                .copy("dist/markdownview.html"),
                .copy("dist/main.css"),
                .copy("dist/main.js")
            ]
        )
    ]
)
