# sst-zero

A starter template for building serverless applications with [SST](https://docs.sst.dev) and integrating [Rocicorp's Zero](https://zero.rocicorp.dev). This repository combines the power of SST for managing infrastructure with Zero’s real-time sync engine to deliver lightning-fast, reactive applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Node.js Version](https://img.shields.io/badge/node-22.x-blue.svg)](https://nodejs.org/)

## Overview

**sst-zero** is a zero-config starter repository designed to help you quickly build and deploy serverless applications using SST while leveraging Rocicorp's Zero. Zero is a general-purpose sync engine that ensures:

- **Instantaneous Response:** Achieve near-zero latency in UI updates.
- **Automatic Reactivity:** Data changes propagate immediately, keeping your UI in sync.
- **Simplified Development:** Offload complex state management and synchronization to Zero so you can focus on building great features.

By combining SST and Zero, you can build modern, scalable, and reactive serverless applications with minimal overhead.

## Features

- **Rapid Development:** Live reloading for AWS Lambda functions combined with Zero’s real-time sync.
- **Serverless Infrastructure:** Declaratively manage AWS resources using SST.
- **Real-Time Data Sync:** Integrate Zero to enable near-instantaneous UI updates and reactive experiences.
- **TypeScript by Default:** Enjoy a modern development experience with built-in TypeScript support.
- **Simplified Deployment:** Easily deploy and remove your application stack on AWS.

## Prerequisites

Before getting started, ensure you have:

- [Node.js](https://nodejs.org/) version **22.x**
- [AWS CLI](https://aws.amazon.com/cli/) (configured with your credentials)
- [Bun](https://bun.sh/) installed (see instructions below)
- [Docker](https://www.docker.com/) installed and running

_Note: SST is installed as a local dependency, so you do not need to install it globally._

## Installing Bun

This project uses [Bun](https://bun.sh) as its package manager, bundler, and test runner. Choose one of the installation methods below based on your operating system:

### macOS and Linux

Install Bun using the recommended installation script:

```bash
curl -fsSL https://bun.sh/install | bash
```

Alternatively, you can use Homebrew:

```bash
brew tap oven-sh/bun
brew install bun
```

### Windows

For Windows (requires Windows 10 version 1809 or later), open PowerShell or cmd.exe and run:

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Alternatively, if you prefer using npm or Scoop, you can install Bun globally:

```bash
npm install -g bun
```

or

```bash
scoop install bun
```

After installation, verify that Bun is installed correctly by running:

```bash
bun --version
```

## Installation

Clone the repository and install the dependencies using Bun:

```bash
git clone https://github.com/lukeshay/sst-zero.git
cd sst-zero
bun install
```

## Environment Variables

The following environment variables are required for the application to run:

```
DOMAIN=""

# DNS

CLOUDFLARE_API_TOKEN=""
CLOUDFLARE_ZONE_ID=""

# OR

ROUTE53_HOSTED_ZONE_ID=""
```

## Development

Start the development environment with live reload:

```bash
bun run dev
```

This command starts the SST development server, which watches for code changes and updates your running stack accordingly. With Zero integrated, your application will benefit from reactive data updates and near-instantaneous UI responsiveness.

## Deployment

To deploy your serverless application to AWS, run:

```bash
bun run deploy
```

After deployment, test your live endpoints and monitor your resources via the AWS console.

To remove the deployed stack, run:

```bash
bun run remove
```

<!-- ## Project Structure -->
<!---->
<!-- An example layout of the repository: -->
<!---->
<!-- ``` -->
<!-- . -->
<!-- ├── infra/                # Infrastructure configuration files (SST & Zero integration) -->
<!-- ├── packages/             # Application modules and Zero-related logic -->
<!-- ├── scripts/              # Deployment and utility scripts -->
<!-- ├── sst.config.ts         # SST configuration file -->
<!-- ├── package.json          # Project dependencies and scripts -->
<!-- ├── tsconfig.json         # TypeScript configuration -->
<!-- └── README.md             # This README file -->
<!-- ``` -->

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests with any improvements or bug fixes. For more details on Rocicorp's Zero, check out the [Zero Documentation](https://zero.rocicorp.dev).

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## Resources

- [SST Documentation](https://docs.sst.dev/)
- [Zero Documentation](https://zero.rocicorp.dev)
