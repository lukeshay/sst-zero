<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">SST-ZERO</h1></p>
<p align="center">
	<em>Consistent dependencies, precise installations, seamless collaboration.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/lukeshay/sst-zero?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/lukeshay/sst-zero?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/lukeshay/sst-zero?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/lukeshay/sst-zero?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

**sst-zero** is a powerful open-source project that ensures precise package installations and consistent dependencies in your development environment. By enforcing exact versions and providing seamless management of AWS resources, sst-zero simplifies project setup and deployment. Ideal for developers seeking stability and efficiency in their workflow.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Containerized with Docker for easy deployment</li><li>Uses TypeScript for strong typing and scalability</li><li>Follows a modular architecture for maintainability</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Enforces precise package installations with exact versions</li><li>Consistent dependencies across the project</li><li>Well-structured codebase for readability and maintainability</li></ul> |
| 📄 | **Documentation** | <ul><li>Extensive documentation in various formats (JSON, TOML, YAML, HTML, SQL)</li><li>Clear installation and usage commands for npm and Docker</li><li>Detailed test commands for npm</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates with npm for package management</li><li>Uses Docker for containerization</li><li>Includes TypeScript and PostgreSQL integrations</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Follows a modular design for easy maintenance and scalability</li><li>Separates concerns into different packages</li><li>Promotes code reusability and separation of logic</li></ul> |
| 🧪 | **Testing**       | <ul><li>Provides clear test commands for npm</li><li>Ensures code quality through testing</li><li>Includes testing for different modules and components</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimized performance through TypeScript compilation</li><li>Efficient use of resources with Docker containers</li><li>Scalable design for improved performance</li></ul> |
| 🛡️ | **Security**      | <ul><li>Secure dependencies with exact versions</li><li>Follows best practices for secure coding</li><li>Includes security considerations in the architecture</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Includes various dependencies such as Docker, npm, TypeScript, PostgreSQL</li><li>Enforces consistent dependency management</li><li>Manages dependencies for different packages within the project</li></ul> |

---

##  Project Structure

```sh
└── sst-zero/
    ├── bun.lock
    ├── bunfig.toml
    ├── docker-compose.yaml
    ├── infra
    │   ├── auth.ts
    │   ├── bus.ts
    │   ├── const.ts
    │   ├── db.ts
    │   ├── dcp.ts
    │   ├── dns.ts
    │   ├── subscribers.ts
    │   ├── vpc.ts
    │   ├── web.ts
    │   └── zero.ts
    ├── package-lock.json
    ├── package.json
    ├── packages
    │   ├── core
    │   ├── functions
    │   ├── web
    │   ├── zero-db
    │   └── zero-schema
    ├── scripts
    │   ├── for-each.bun.ts
    │   ├── init-db.bun.ts
    │   ├── replace.bun.ts
    │   └── zero-dev.bun.ts
    ├── sst-env.d.ts
    ├── sst.config.ts
    ├── tsconfig
    │   ├── tsconfig.base.json
    │   ├── tsconfig.dom.json
    │   ├── tsconfig.no-dom.json
    │   └── tsconfig.react.json
    ├── tsconfig.bun.json
    └── tsconfig.json
```


###  Project Index
<details open>
	<summary><b><code>SST-ZERO/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/bunfig.toml'>bunfig.toml</a></b></td>
				<td>Enables precise package installations by enforcing exact versions, ensuring consistent dependencies across the project.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/docker-compose.yaml'>docker-compose.yaml</a></b></td>
				<td>- Defines a PostgreSQL service in the project's Docker Compose file, setting up a database with specific configurations, health checks, and environment variables<br>- The service runs on port 7004 and mounts a volume for data persistence.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The provided code file, package-lock.json, is crucial for managing dependencies within the project architecture<br>- It ensures that the necessary packages and versions are locked in place, guaranteeing consistency and stability across the codebase<br>- By listing out the required dependencies and their versions, this file plays a vital role in maintaining the project's integrity and facilitating seamless collaboration among team members.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/package.json'>package.json</a></b></td>
				<td>- Facilitates project management and deployment tasks through defined scripts in the package.json file<br>- Handles operations like deploying, upgrading dependencies, running tests, managing databases, and starting/stopping services<br>- Integrates with tools like sst, npm-check-updates, and Docker for seamless development workflows.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/sst-env.d.ts'>sst-env.d.ts</a></b></td>
				<td>- Define the resource structure for SST project components, specifying attributes like type, URL, ARN, and more<br>- This file serves as a reference for integrating various resources within the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/sst.config.ts'>sst.config.ts</a></b></td>
				<td>- Define project configuration settings and AWS resources setup<br>- Determine app name, removal policy, protection level, home region, and AWS provider details<br>- Implement AWS Lambda function configurations and import outputs from infrastructure files.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/tsconfig.bun.json'>tsconfig.bun.json</a></b></td>
				<td>- Configures TypeScript compiler options to support the Bun framework by extending a base configuration and specifying types and file inclusions<br>- This file plays a crucial role in ensuring that the project can properly compile and work with Bun-specific code files.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>Configures TypeScript settings by extending a base configuration and referencing additional configurations for the project.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- infra Submodule -->
		<summary><b>infra</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/infra/auth.ts'>auth.ts</a></b></td>
				<td>- Defines AWS authentication and authorization settings, including email permissions and domain configuration<br>- Exports the Auth URL for external use.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/infra/bus.ts'>bus.ts</a></b></td>
				<td>Facilitates communication between AWS services using a centralized event bus.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/infra/const.ts'>const.ts</a></b></td>
				<td>Determines non-production environment status based on the application stage.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/infra/db.ts'>db.ts</a></b></td>
				<td>- Defines a PostgreSQL database and migrator function within the project infrastructure<br>- The database configuration includes VPC settings, instance specifications, and dependencies<br>- The migrator function handles database migrations and file copying<br>- Additionally, a development command for Drizzle Studio is set up, linked to the database.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/infra/dcp.ts'>dcp.ts</a></b></td>
				<td>Defines a Docker Compose command for local development environment setup, triggering database start processes.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/infra/dns.ts'>dns.ts</a></b></td>
				<td>Exports Cloudflare DNS configuration and constructs a domain based on the environment stage for the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/infra/subscribers.ts'>subscribers.ts</a></b></td>
				<td>- Defines event subscription for user authentication events, linking to zeroDatabase and VPC resources<br>- Subscribes to "AuthUserCreate" event with specific source and detailType patterns, invoking the handler function for user creation and sign-in<br>- This file plays a crucial role in orchestrating event-driven architecture within the project, ensuring seamless handling of user authentication processes.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/infra/vpc.ts'>vpc.ts</a></b></td>
				<td>Defines an AWS VPC with bastion and NAT for the project's infrastructure.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/infra/web.ts'>web.ts</a></b></td>
				<td>- Defines a static website configuration with authentication, DNS settings, and build commands<br>- Manages environment variables and outputs the web URL.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/infra/zero.ts'>zero.ts</a></b></td>
				<td>- Defines infrastructure for a Zero project, including database connections, VPC setup, authentication, and DNS configuration<br>- Manages replication, service scaling, and health checks<br>- Determines environment variables based on development or production mode<br>- Outputs the Zero project URL.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- packages Submodule -->
		<summary><b>packages</b></summary>
		<blockquote>
			<details>
				<summary><b>core</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/core/package.json'>package.json</a></b></td>
						<td>- Implements TypeScript compilation for the core package using the provided script<br>- Dependencies include AWS SDK for SES, OpenAuthJS, SST, and Valibot<br>- Dev dependencies include TypeScript.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/core/sst-env.d.ts'>sst-env.d.ts</a></b></td>
						<td>Generates auto-generated type definitions for the SST environment, ensuring seamless integration with the core functionality.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/core/tsconfig.json'>tsconfig.json</a></b></td>
						<td>Extends the TypeScript configuration from the root directory to enforce consistent compiler settings across the codebase.</td>
					</tr>
					</table>
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/core/src/aws.ts'>aws.ts</a></b></td>
								<td>- Facilitates fetching AWS credentials and creating an AWS client based on environment variables or container credentials<br>- Handles caching of credentials to minimize unnecessary requests<br>- Supports retrieving AWS client with necessary authentication details for interacting with AWS services.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/core/src/dynamodb.ts'>dynamodb.ts</a></b></td>
								<td>- Facilitates interactions with DynamoDB by abstracting AWS client setup and request handling<br>- The code defines functions for fetching and storing items in DynamoDB tables<br>- It centralizes AWS client configuration and error handling, promoting reusability and maintainability in the project's core functionality.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/core/src/email.ts'>email.ts</a></b></td>
								<td>- Facilitates sending emails using AWS SES client<br>- Defines email structure and sends email with specified content and recipients<br>- Handles both HTML and plain text email formats, along with optional CC and BCC fields<br>- Email source defaults to environment variable if not provided.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/core/src/logging.ts'>logging.ts</a></b></td>
								<td>Enhances functions with logging capabilities, providing insight into function calls within the core package.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/core/src/subjects.ts'>subjects.ts</a></b></td>
								<td>- Define subjects structure for authentication system<br>- Map user attributes like id, email, createdBy, createdAt, updatedBy, updatedAt<br>- Ensure type safety with SubjectPayload.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/core/src/zero-database.ts'>zero-database.ts</a></b></td>
								<td>Initialize a zero-config database connection using Drizzle ORM with PostgreSQL, leveraging environment variables for credentials.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>functions</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/functions/package.json'>package.json</a></b></td>
						<td>- Enables TypeScript compilation for AWS Lambda functions using necessary dependencies like AWS SDK, OpenAuth, and SST<br>- Integrates with Drizzle ORM and Valibot for enhanced functionality within the project structure.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/functions/sst-env.d.ts'>sst-env.d.ts</a></b></td>
						<td>Define and export SST environment types for the project, ensuring seamless integration with the Serverless Stack Toolkit.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/functions/tsconfig.json'>tsconfig.json</a></b></td>
						<td>- Configures TypeScript settings for functions package by extending a base configuration<br>- This ensures consistent TypeScript compilation across the project, maintaining a unified development environment.</td>
					</tr>
					</table>
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/functions/src/auth.ts'>auth.ts</a></b></td>
								<td>- Facilitates user authentication and authorization processes by handling code and password providers, sending verification emails, and managing user data storage<br>- Integrates with AWS services for event handling and DynamoDB operations<br>- The codebase ensures secure user sign-in and creation workflows within the project's authentication system.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/functions/src/migrator.ts'>migrator.ts</a></b></td>
								<td>- The migrator.ts file orchestrates database migrations using the zeroDatabase and drizzle-orm libraries<br>- It facilitates seamless migration of database schemas by leveraging the specified migrations folder within the project structure.</td>
							</tr>
							</table>
							<details>
								<summary><b>subscribers</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/functions/src/subscribers/sst-zero.auth.user.create.ts'>sst-zero.auth.user.create.ts</a></b></td>
										<td>Handles user creation and sign-in events by inserting user data into the database after converting date fields to strings.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>web</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/index.html'>index.html</a></b></td>
						<td>Defines the main HTML structure for the web package, setting up the initial layout and script reference for the Vite App.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/package.json'>package.json</a></b></td>
						<td>- Enables building, serving, and previewing the web application using Vite<br>- Dependencies include React, Zero, and OpenAuth for authentication<br>- TypeScript is used for type-checking<br>- The file defines scripts for TypeScript compilation, development server, building, and serving the application<br>- Vite is the build tool used for the project.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/sst-env.d.ts'>sst-env.d.ts</a></b></td>
						<td>Generates type definitions for SST environment variables, ensuring seamless integration with the project's architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/tsconfig.json'>tsconfig.json</a></b></td>
						<td>- Extends the TypeScript configuration for the web package by inheriting settings from the shared React TypeScript configuration<br>- This ensures consistent TypeScript settings across the project, promoting code quality and maintainability.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/vite.config.ts'>vite.config.ts</a></b></td>
						<td>- Defines Vite configuration for the project, integrating TanStackRouterVite, React plugin, and tsconfigPaths<br>- Configures plugins to enhance the development environment setup for the web package<br>- This file plays a crucial role in setting up the build process and optimizing the development workflow within the project architecture.</td>
					</tr>
					</table>
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/main.tsx'>main.tsx</a></b></td>
								<td>- Initialize the app by creating a router instance with the provided route tree and rendering it using React<br>- The code sets up the necessary infrastructure for routing and rendering the application within a strict mode environment.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/routeTree.gen.ts'>routeTree.gen.ts</a></b></td>
								<td>- Generates and exports a structured route tree for the project, defining routes like Index and About<br>- The file also declares interfaces for different route types and children, enhancing the project's navigation capabilities.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/sst-env.d.ts'>sst-env.d.ts</a></b></td>
								<td>- Defines environment variables for the web application, specifying authentication issuer and URLs<br>- This auto-generated file ensures access to environment variables in the Vite client, facilitating secure configuration and seamless integration with the project's architecture.</td>
							</tr>
							</table>
							<details>
								<summary><b>components</b></summary>
								<blockquote>
									<details>
										<summary><b>cli</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/components/cli/json-display.tsx'>json-display.tsx</a></b></td>
												<td>- The JSONDisplay component renders JSON data in a formatted way for display<br>- It enhances the user experience by presenting structured data in a readable format<br>- This component plays a crucial role in visualizing JSON data within the web application, contributing to a seamless and user-friendly interface.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>lib</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/lib/auth.ts'>auth.ts</a></b></td>
										<td>- Define and manage authentication flows for the web application using OpenAuthJS client<br>- Implement functions to retrieve the authentication redirect URL and handle redirection to the authentication endpoint<br>- Configure the authentication client with necessary parameters for secure communication with the authentication server.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/lib/hooks.ts'>hooks.ts</a></b></td>
										<td>- The code in packages/web/src/lib/hooks.ts facilitates the integration of Zero schema and client-side functionality into the project<br>- It leverages session data and router utilities to create a Zero client instance with the necessary configurations for data storage and authentication<br>- This enables seamless interaction with the Zero backend services within the application architecture.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/lib/local-storage.ts'>local-storage.ts</a></b></td>
										<td>- Creates a validated storage object for a key in localStorage, using a specified Valibot schema for validation<br>- Provides methods to get, set, and remove items, ensuring data integrity and consistency within the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/lib/objects.ts'>objects.ts</a></b></td>
										<td>- The code in packages/web/src/lib/objects.ts removes null values from objects recursively, ensuring a clean and streamlined data structure<br>- This function plays a crucial role in maintaining data integrity and optimizing object handling within the project architecture.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/lib/session.ts'>session.ts</a></b></td>
										<td>- Manages user sessions, including creation, retrieval, updating, and expiration<br>- Handles authentication token parsing and session verification<br>- Integrates with local storage and authentication services to ensure secure user interactions within the application.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>routes</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/routes/__root.tsx'>__root.tsx</a></b></td>
										<td>- Defines a root route for the web application, handling session loading and authentication redirects<br>- Utilizes a custom search validation schema and renders navigation links, authentication button, error display, and child routes<br>- Integrates with ZeroProvider for state management and TanStackRouterDevtools for debugging.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/routes/about.tsx'>about.tsx</a></b></td>
										<td>- Defines a route for the '/about' path in the web application, rendering the 'Welcome Home!' message<br>- This file integrates with the project's routing system, providing a structured way to navigate to the about page.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/web/src/routes/index.tsx'>index.tsx</a></b></td>
										<td>- Defines a file route for the project's main index page, rendering user and session data using React components<br>- It leverages hooks and queries to fetch and display information dynamically<br>- This code enhances the user experience by providing real-time data updates on the index page.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>zero-db</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/drizzle.config.ts'>drizzle.config.ts</a></b></td>
						<td>Defines database configuration for the project using Drizzle, specifying schema, dialect, and database credentials sourced from environment variables.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/package.json'>package.json</a></b></td>
						<td>- Facilitates database management and migration tasks using Drizzle ORM and SST<br>- Includes scripts for type-checking, pushing changes, generating code, migrating data, and launching a development studio<br>- Key dependencies are Drizzle ORM and SST, with additional dev dependencies for PostgreSQL and TypeScript support.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/sst-env.d.ts'>sst-env.d.ts</a></b></td>
						<td>Generates type definitions for SST environment variables, ensuring seamless integration with the project architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/tsconfig.json'>tsconfig.json</a></b></td>
						<td>- Extends the TypeScript configuration for the zero-db package by inheriting settings from a shared configuration file<br>- This ensures consistent TypeScript compilation settings across the project, promoting maintainability and code quality.</td>
					</tr>
					</table>
					<details>
						<summary><b>drizzle</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/drizzle/0000_black_frog_thor.sql'>0000_black_frog_thor.sql</a></b></td>
								<td>- Defines triggers to automatically set timestamps for creation and update in the "draft" and "user" tables, ensuring consistency across records<br>- Triggers execute the "set_timestamps" function to manage timestamp values, simplifying data maintenance and enhancing data integrity within the database architecture.</td>
							</tr>
							</table>
							<details>
								<summary><b>meta</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/drizzle/meta/0000_snapshot.json'>0000_snapshot.json</a></b></td>
										<td>- Defines database schema for 'draft' and 'user' tables with columns like id, title, createdAt, etc<br>- Specifies relationships and constraints between tables<br>- Captures metadata for database structure.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/drizzle/meta/_journal.json'>_journal.json</a></b></td>
										<td>- Manages version control and metadata for the PostgreSQL dialect in the project's zero-db package<br>- Tracks entries with version details, timestamps, tags, and breakpoints for efficient database management.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/src/draft.relations.ts'>draft.relations.ts</a></b></td>
								<td>Defines relationships between draft and user tables to establish creator association in the project's database architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/src/draft.sql.ts'>draft.sql.ts</a></b></td>
								<td>- Defines a PostgreSQL table schema for drafts with fields like id, visibility, and title<br>- Incorporates audit fields for creator information.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/src/index.ts'>index.ts</a></b></td>
								<td>Expose database query functionality for drafts and users in the project architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/src/user.sql.ts'>user.sql.ts</a></b></td>
								<td>- Defines a PostgreSQL table schema for users, including fields for id, email, and audit information<br>- The schema is generated using the drizzle-orm/pg-core library, ensuring data integrity and efficient querying<br>- This code file plays a crucial role in structuring user data within the project's database architecture.</td>
							</tr>
							</table>
							<details>
								<summary><b>fields</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/src/fields/audit-fields-creator-cascade.ts'>audit-fields-creator-cascade.ts</a></b></td>
										<td>Define and enforce audit fields creator cascade behavior for user records in the database.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-db/src/fields/audit-fields.ts'>audit-fields.ts</a></b></td>
										<td>Define audit fields for database records to track creation and modification details.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>zero-schema</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-schema/package.json'>package.json</a></b></td>
						<td>- Manages dependencies and scripts for the Zero Schema package within the project<br>- Facilitates TypeScript compilation and development server setup<br>- Integrates with Zero, Drizzle-Zero, and SST libraries.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-schema/sst-env.d.ts'>sst-env.d.ts</a></b></td>
						<td>Define and export SST environment types for the project, ensuring seamless integration with Deno.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-schema/tsconfig.json'>tsconfig.json</a></b></td>
						<td>Extends the base TypeScript configuration for the zero-schema package within the project structure.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-schema/zero-schema.json'>zero-schema.json</a></b></td>
						<td>- Defines permissions for draft and user data based on authentication and ownership<br>- Specifies conditions for selecting, inserting, updating, and deleting rows in the database tables<br>- Establishes relationships between draft and user entities, ensuring data integrity and access control.</td>
					</tr>
					</table>
					<details>
						<summary><b>scripts</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-schema/scripts/dev.bun.ts'>dev.bun.ts</a></b></td>
								<td>- Initiates development environment setup by killing existing processes on specific ports and launching a cache server for zero-cache-dev with auto-reset feature<br>- This script streamlines the initial setup process for the project, ensuring a clean and efficient development environment.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/packages/zero-schema/src/index.ts'>index.ts</a></b></td>
								<td>- Defines permissions for different tables based on user authentication data<br>- Implements rules for access control, including allowing actions based on user roles and visibility settings<br>- The code establishes criteria for user access to data in the schema, ensuring secure data handling within the project's architecture.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- scripts Submodule -->
		<summary><b>scripts</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/scripts/for-each.bun.ts'>for-each.bun.ts</a></b></td>
				<td>Execute commands in each package directory to streamline project-wide operations.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/scripts/init-db.bun.ts'>init-db.bun.ts</a></b></td>
				<td>- Initialize database setup by checking and creating databases if they don't exist<br>- Connect to PostgreSQL using provided credentials, create databases "zstart," "zstart_cvr," and "zstart_cdb," then close the connection<br>- This script ensures necessary databases are available for the project to function correctly.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/scripts/replace.bun.ts'>replace.bun.ts</a></b></td>
				<td>- Enables bulk replacement of a specific string across project files<br>- Parses command-line input to identify the target string, then iterates through files excluding certain directories<br>- Reads each file, replaces the target string, and writes the updated content back<br>- Facilitates efficient project-wide string updates.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/scripts/zero-dev.bun.ts'>zero-dev.bun.ts</a></b></td>
				<td>Initiates cleanup and launches the development environment for the schema packages by killing existing processes on specific ports and running the development server.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- tsconfig Submodule -->
		<summary><b>tsconfig</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/tsconfig/tsconfig.base.json'>tsconfig.base.json</a></b></td>
				<td>Defines path aliases for core, database, and schema modules in the project, facilitating cleaner import statements and enhancing code readability and maintainability.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/tsconfig/tsconfig.dom.json'>tsconfig.dom.json</a></b></td>
				<td>- Extends the TypeScript configuration for DOM bundling, enhancing the project's build process by incorporating specific settings for DOM-related code<br>- This file complements the base TypeScript configuration, ensuring optimized bundling for DOM-specific functionalities within the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/tsconfig/tsconfig.no-dom.json'>tsconfig.no-dom.json</a></b></td>
				<td>Extends TypeScript configuration to exclude DOM-specific features, leveraging a base configuration for bundling.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lukeshay/sst-zero/blob/master/tsconfig/tsconfig.react.json'>tsconfig.react.json</a></b></td>
				<td>- Enhances TypeScript configuration for React components by extending base settings and enabling JSX support<br>- This file plays a crucial role in ensuring seamless integration of React components within the project architecture.</td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with sst-zero, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm
- **Container Runtime:** Docker


###  Installation

Install sst-zero using one of the following methods:

**Build from source:**

1. Clone the sst-zero repository:
```sh
❯ git clone https://github.com/lukeshay/sst-zero
```

2. Navigate to the project directory:
```sh
❯ cd sst-zero
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```


**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker build -t lukeshay/sst-zero .
```




###  Usage
Run sst-zero using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker run -it {image_name}
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/lukeshay/sst-zero/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/lukeshay/sst-zero/issues)**: Submit bugs found or log feature requests for the `sst-zero` project.
- **💡 [Submit Pull Requests](https://github.com/lukeshay/sst-zero/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/lukeshay/sst-zero
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/lukeshay/sst-zero/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=lukeshay/sst-zero">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
