# University Search - India

A Next.js application that allows users to search for universities in India, view details, and save favorites.

## GitHub Repository

[https://github.com/mskp/slashhash-assessment](https://github.com/mskp/slashhash-assessment)

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for building server-side rendered and static web applications
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [PostgreSQL](https://www.postgresql.org/) - Open-source relational database
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript
- [Bootstrap 5](https://getbootstrap.com/) - CSS framework for responsive, mobile-first front-end web development

## Features

- Search for universities in India
- View university details including name, state/province, and web pages
- Add universities to favorites
- View and manage favorite universities
- Responsive design using Bootstrap 5

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/mskp/slashhash-assessment.git
   cd slashhash-assessment
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up your PostgreSQL database and add the DATABASE_URL to your .env file:

   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
   ```

4. Run Prisma migrations:

   ```
   npx prisma generate
   npx prisma db push
   ```

5. Start the development server:
   ```
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Use the search form to find universities in India
3. Click the "Favorite" button to save a university to your favorites
4. Navigate to the "Favorites" page to view and manage your saved universities

## Additional Information

- This project uses Bootstrap 5 for styling and responsive design. The Bootstrap CSS is imported in the `app/layout.tsx` file.
- Server Actions are used for data fetching and mutations, leveraging Next.js 13+ features.
- The application uses the [university domains list API](https://github.com/Hipo/university-domains-list-api) to fetch university data.
- Prisma is used as the ORM for database operations, providing type-safe database access.
