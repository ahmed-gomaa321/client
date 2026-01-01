# Students Leaderboard App

### Overview

This project is a **Students Leaderboard** application built with **React, TypeScript, and Apollo Client (GraphQL)**. It displays the top three students ranked by points for a specific school, with proper loading and error handling.

The application handles errors by retrying failed requests using **Apollo Client's `refetch` mechanism**, ensuring data is reloaded efficiently without interrupting the application flow.

### Features

- Fetch leaderboard data using GraphQL
- Rank and display top 3 students by points
- Loading state with spinner
- Graceful error handling with retry functionality
- Modular and scalable folder structure

### Tech Stack

- React
- TypeScript
- Apollo Client
- GraphQL
- SCSS Modules

### Project Structure

```
src/
├── components/
│ └── leaderboard/
│ ├── leaderboard.tsx
│ ├── leaderboard-card.tsx
│ └── leaderboard.module.scss
├── hooks/
│ └── use-leaderboard.ts
├── lib/
│ ├── services/
│ │ ├── apollo.ts
│ │ └── leaderboard.service.ts
│ └── types/
│ └── students-leaderboard-data.d.ts
├── shared/
│ └── error-component/
├── styles/
│ ├── _variables.scss
│ └── main.scss
├── index.css
├── App.tsx
└── main.tsx
```

### Apollo Client Setup

Apollo Client is configured in `lib/services/apollo.ts` and provided globally using `ApolloProvider` in `main.tsx`.

### Data Fetching

The leaderboard data is fetched using a custom hook `useLeaderboard`, which wraps Apollo's `useQuery` and exposes:

- `data`
- `loading`
- `error`
- `refetch`

### Leaderboard Component

`leaderboard.tsx` is the main container component responsible for:

- Calling the `useLeaderboard` hook
- Handling loading, error, and success states
- Sorting students by points in descending order
- Selecting and rendering the top three ranked students
- Passing the `refetch` function to the error component for retry handling

This component acts as the orchestration layer between data fetching and UI rendering.

### Leaderboard Card Component

`leaderboard-card.tsx` is a presentational component responsible for:

- Displaying individual student information
- Rendering rank-specific UI styles (1st, 2nd, 3rd place)
- Showing student avatar, points, grade, and section
- Conditionally displaying the crown for the first-ranked student

The component is fully driven by props and contains no business logic, ensuring clear separation of concerns.

### Error Handling Strategy

Instead of using `window.location.reload`, the app retries failed requests using Apollo Client's `refetch` function:

- Prevents full page reloads
- Improves performance
- Provides better user experience

### How to Run

1. Install dependencies using pnpm

   ```bash
   pnpm install
   ```

2. Start the development server

   ```bash
   pnpm dev
   ```

3. Make sure the GraphQL server is running on:

   ```
   http://localhost:4000
   ```

---
