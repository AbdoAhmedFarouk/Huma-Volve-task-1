# Huma-Volve Internship - Task 1

## Reusable Components

This project demonstrates the concept of reusable React components for the Huma-Volve internship. It is built with React, TypeScript, and Vite.

The application demonstrates three reusable UI components:

- `Button`: supports text, click handlers, style variants, and disabled state.
- `Card`: supports a title, description, optional image, and nested content through `children`.
- `Table`: supports configurable column headers, row data, and optional striped rows.

## Task Objective

Build a React application that uses reusable components in multiple places with different props. The implementation should be clean, consistent, and easy to extend for future internship tasks.

## Requirements Checklist

- [x] Create a reusable `Button` component.
- [x] Support `text`, `onClick`, `variant`, and `disabled` props.
- [x] Use `Button` multiple times with different props.
- [x] Create a reusable `Card` component.
- [x] Support `title`, `description`, `image`, and `children` props.
- [x] Use `Card` multiple times with different data.
- [x] Demonstrate nested content through the `children` prop.
- [x] Create a reusable `Table` component.
- [x] Support `columns`, `data`, and `striped` props.
- [x] Display meaningful table data.
- [x] Apply consistent responsive styling.

## Component Examples

### Button

```tsx
<Button text="Create workspace" variant="primary" onClick={handleCreate} />
<Button text="Explore library" variant="secondary" onClick={handleExplore} />
<Button text="View team" variant="danger" disabled />
```

Available variants:

- `primary`
- `secondary`
- `danger`

### Card

```tsx
<Card
  title="Design system"
  description="Keep visual decisions close to the components that use them."
>
  <Button text="Explore library" variant="secondary" />
</Card>
```

The second card also demonstrates the optional `image` prop with different content.

### Table

```tsx
<Table
  columns={["Name", "Role", "Status"]}
  data={users}
  striped
/>
```

The table displays a meaningful list of team members and maps each column to the matching property in the row data.

## Project Structure

```text
src/
├── components/
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Table.tsx
├── App.tsx
├── App.css
└── index.css
```

## Color Palette

The interface uses the palette supplied for the task:

| Name | Hex | Usage |
| --- | --- | --- |
| Black | `#454040` | Headings and strong actions |
| Grey | `#605B51` | Supporting text and borders |
| Yellow | `#D8D365` | Primary actions and accents |
| Pale yellow | `#E6F082` | Card and table surfaces |

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run the checks:

```bash
npm run lint
npm run build
```

## Internship Task Notes

Use this section to record updates as the Huma-Volve internship progresses.

### Task Information

- **Intern:** <!-- Add your name -->
- **Company:** Huma-Volve
- **Task:** Reusable Components
- **Task number:** 1
- **Status:** Completed
- **Date started:** <!-- Add date -->
- **Date completed:** <!-- Add date -->

### What I Practiced

- <!-- Example: Passing typed props to reusable components -->
- <!-- Example: Rendering lists with map() -->
- <!-- Example: Supporting nested content with children -->

### Future Changes

- <!-- Add improvements, feedback, or follow-up requirements here -->

### Review Notes

- <!-- Add mentor feedback or review comments here -->

## License

This project was created as part of an Huma-Volve internship task.
