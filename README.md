# Community Glow Site

A web application for event and community management, built for open source gatherings and conferences.

---

## Project Info

**Live URL:** [https://lovable.dev/projects/c39ec0fe-9375-44bc-9bcd-8c8bcd867eae](https://lovable.dev/projects/c39ec0fe-9375-44bc-9bcd-8c8bcd867eae)

---

## Getting Started

### Requirements

- Node.js & npm (recommended: use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

1. **Clone the repository:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   Visit the local address shown in your terminal to view the site.

---

## Editing the Code

You can edit this project in several ways:

- **Via Lovable:** [Open the Lovable Project](https://lovable.dev/projects/c39ec0fe-9375-44bc-9bcd-8c8bcd867eae) and prompt away. Changes via Lovable are committed automatically.
- **In your IDE:** Clone the repo, make changes locally, then push. Changes will be reflected in Lovable.
- **Directly on GitHub:** Edit any file in the GitHub UI and commit your changes.
- **GitHub Codespaces:** Launch a codespace from the GitHub interface for a full online dev environment.

---

## Tech Stack

- **Vite**
- **TypeScript**
- **React**
- **shadcn-ui**
- **Tailwind CSS**

---

## Deployment

- Open [Lovable](https://lovable.dev/projects/c39ec0fe-9375-44bc-9bcd-8c8bcd867eae), then click Share → Publish.

---

## Custom Domain

You can connect your own domain in Lovable:
# Community Glow Site

A modern, responsive web application for community events, jobs, and networking, built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Landing Page**: Hero, highlights, sponsors, and timeline sections.
- **Events**: List and details of upcoming and past events.
- **Speakers**: Showcase of event speakers.
- **Jobs**: Job board with search and filter.
- **Gallery**: Event photos and media.
- **Contact**: Contact form and information.
- **About**: Community mission and team.
- **Theme Toggle**: Light/dark mode support.
- **Responsive Design**: Mobile-first, accessible UI.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **UI Components**: shadcn/ui
- **State Management**: React Context, Hooks
- **Build Tools**: Vite, ESLint

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

- Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```
community-glow-site/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and media
│   ├── components/        # Reusable UI components
│   │   └── ui/            # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components (routing handled by Vite/SPA)
│   └── App.tsx            # Main app entry
├── index.html             # HTML template
├── tailwind.config.ts     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── vite.config.ts         # Vite config
├── tsconfig.json          # TypeScript config
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

## Customization

- **Add/Edit Pages**: Modify or add files in `src/pages/`.
- **Add Components**: Place new components in `src/components/` or `src/components/ui/`.
- **Styling**: Update Tailwind config or add custom CSS in `src/index.css` or `src/App.css`.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

MIT

---

For questions or support, open an issue or contact the maintainers.
```


