# aifree-shared-types

This repository contains shared TypeScript types and interfaces that can be used across multiple projects. The primary focus is on user-related types, which can be utilized in applications requiring user management functionalities.

## Installation

To use the shared types in your project, you can install this package via npm. Navigate to your project directory and run:

```
npm install path-to-aifree-shared-types
```

Replace `path-to-aifree-shared-types` with the actual path to the `aifree-shared-types` directory.

## Usage

After installing, you can import the types and interfaces in your TypeScript files as follows:

```typescript
import { IUser, IdentityType } from 'aifree-shared-types/src/User';
```

### IUser Interface

The `IUser` interface defines the structure of a user object, including properties such as:

- `email`: The user's email address (string).
- `name`: The user's name (optional, string).
- `balance`: The user's account balance (number).
- `imageUrl`: The URL of the user's profile image (optional, string).
- `type`: The user's identity type, which can be one of the following: "admin", "client", "freelancer", or "agent".
- `setPassword`: A method to set the user's password.
- `validatePassword`: A method to validate the user's password.
- `companyName`: The name of the user's company (optional, string).
- `surname`: The user's surname (optional, string).
- `experience`: The user's experience (optional, string).
- `headline`: A brief headline for the user (optional, string).
- `category`: The user's category (optional, string).
- `skills`: An array of the user's skills (optional, string[]).
- `links`: An array of objects containing title and URL for external links (optional, { title: string; url: string }[]).
- `note`: A note about the user (optional, string).
- `recommendations`: An array of recommendations for the user (optional, string[]).
- `website`: The user's personal website (optional, string).

### IdentityType

The `IdentityType` type is a union type that can be one of the following values:

- `"admin"`
- `"client"`
- `"freelancer"`
- `"agent"`

## License

This project is licensed under the MIT License. See the LICENSE file for more details.