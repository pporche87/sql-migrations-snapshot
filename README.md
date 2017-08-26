# SQL Migrations Snapshot

## Dev Setup

1. Install your dependencies: `npm install`
1. Install global dependencies: `cd ~ && npm install -g pg-migrate pg`
1. Create your database: `npm run db:init`
1. Load your database with the schema: `npm run load_schema`
1. Load your database with contacts: `npm run load_contacts`
1. Run the server: `npm run start:dev`

## Migrations

1. Create a database migration `npm run db:migration:create`
1. Navigate to migrations file: `/migrations/[MIGRATIONS_FILE]`
1. Create up and down migrations functions
1. Migrate to new migration: `npm run db:migrate`
1. Migrate to down: `pg-migrate down`
