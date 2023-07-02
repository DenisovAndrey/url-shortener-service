# URL Shortener Service

## Introduction

The URL Shortener is a web application designed to shorten long URLs into concise and easy-to-share links.

## Purpose

The purpose of the URL Shortener is to simplify the sharing of URLs by converting long and complex links into shorter,
more manageable ones. It aims to improve user experience and enable easy sharing on various platforms.

## Goals

The main goals of the URL Shortener project are as follows:

1. Generate short and unique URLs for long original URLs.
2. Redirect users from the short URLs to the corresponding original URLs. (TBD)
3. Provide analytics and tracking features to monitor link usage and engagement. (TBD)
4. Ensure scalability and performance to handle a large number of shortening requests and redirects. (TBD)

## Target Audience

The URL Shortener is designed to serve the following audience:

- General users who need to shorten URLs for personal or professional purposes.
- Developers who want to integrate the URL shortening functionality into their own applications or services.

## Next steps (TBD)

As a next steps of this project we need to:

1. Define proper docker config and ci/cd.
2. Resolve URLs and dynamic data via environment variables
3. Implement contract testing
4. Define proper architecture including
    1. Configure redirect to "long" url via 301 code, when use goes by short url
    2. scalability strategy
    3. load balancing
    4. deployment strategy
    5. Databases
    6. Message queues
    7. etc...

## Development

The documentation is available in [README_DEV.md](./README_DEV.md)

