# Playwright AI-Assisted Test Automation

An end-to-end test suite for [SauceDemo](https://www.saucedemo.com/) — a demo e-commerce site for practicing test automation — built using Playwright and TypeScript with AI-assisted development (Claude).

## Tech Stack
- Playwright (test runner + browser automation)
- TypeScript
- Page Object Model (POM) design pattern
- GitHub Actions for CI/CD

## What's Tested
- Login (valid, invalid, and locked-out user scenarios)
- Add to cart functionality
- Full checkout flow (cart → checkout form → order confirmation)

## Project Structure
- `tests/` — test specs
- `pages/` — Page Object classes (`LoginPage.ts`, `InventoryPage.ts`, `CheckoutPage.ts`)
- `.github/workflows/` — CI pipeline definition

## Running Locally

- `npm install`
- `npx playwright install`
- `npx playwright test`

## CI/CD
Tests run automatically on every push to `main` via GitHub Actions, across Chromium, Firefox, and WebKit. Test reports are uploaded as artifacts for 30 days.

## Development Note
This project was built with AI-assisted development (Claude directing test creation, Page Object design, and CI setup), with all code reviewed and validated by running the full suite locally and in CI before each commit.
