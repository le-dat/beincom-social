## 🚀 Getting Started

#### ⚙️ Prepare the environment

1. Make sure you have [Node.js](https://nodejs.org/) installed, preferably with [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/). Ensure that your Node.js version is **20.0.0 or higher**.

2. Clone this repository.

3. Move to ` .env.development` file. You have two options:

- Option 1: I have deloy backend. So you can still and not change this file

```bash
   NEXT_PUBLIC_API_ENDPOINT="https://beincom-social-service-1.onrender.com/api"

```

- Option 2 (Run local) :
  Clone and run this back-end: [https://github.com/le-dat/beincom-social-service](https://github.com/le-dat/beincom-social-service) for this project and update ` .env.development` file

```bash
    NEXT_PUBLIC_API_ENDPOINT="http://localhost:4000/api"

```

4. Install the dependencies

```bash
   yarn install   |   npm install
```

#### 🏁 Run app in your browser

Run the following command at the root path of the project

```bash
   yarn start:${env}  |  npm run start:${env}
```

- **dev**: Development environment used during application development and testing.

## 🔑 Key Features

- Beincom

  - Authentication: Implement a user authentication system with sign-up, login, and logout functionality. Only authenticated users should be able to view the post.

  - Commenting System: Add a commenting feature to the post details page. Authenticated users can be able to leave comments on a post. Display the list of comments for each post.

  - Search and Filter: Implement a search functionality on the home page to allow users to search for posts by title or content. Add a filter option to sort posts based on different criteria (e.g., date, number of comments).

  - Pagination: Implement pagination for the list of posts on the home page.

  - Responsive Design: Ensure the application is responsive on both desktop and mobile devices.

  - Testing: Write unit tests for critical components or functions using Jest.

## 🛠️ Tech Stack

#### 💻 Languages

- HTML
- CSS
- TypeScript

#### 📚 Frameworks/Libraries

- **Next.js:** Used for building user interfaces with a component-based architecture.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom user interfaces.

## 📁 Structure

```plaintext
BEIN-COM/
│
├── .__tests__/
├── .env/
├── .husky/
├── .vscode/
├── public/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── hooks/
│   ├── provider/
│   ├── service/
│   └── store/
│   └── styles/
│   ├── types/
│   ├── utils/
├──
```

## 📝 Version

0.1.0

## Author

Le Quoc Dat. See the [Website Portfolio](https://ledat-portfolio.vercel.app/) for details.
