# Transaction Handler

## How to run

Needed runtime:

You need to install Bun runtime.

```bash
curl -fsSL https://bun.sh/install | bash
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev
```

This project was created using `bun init` in bun v1.0.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Guide

This project was built with a new runtime called Bun. With Bun you can directly run the typescript project without having to build, if you do not want to use Bun, please install tsc and compile the project, and run it with NPM, or use ts-node.

## Testing Discussion

Tests would be implemented to test functions in the BasicFunctions interface, where we would test for all possible outcomes.

## Error Handling

Error Handling, for this specific project, isn't that big, only simple try catch closures were used, however, in a bigger project, we would implement specific return statuses in express, like 400 for Bad Request meaning data or something was done wrong by the User, 500 server error, 401-403 Unauthorized & Forbidden

## Authentication

I couldn't figure out how payment services verify, this business related information that I don't know about yet, but happy to learn with you. If I knew how, I would implement middlewares to verify the request before doing anything with it.

## Project Overview

From what I could understand, this project's purpose is to receive data from Transaction and Payout Wehooks, where we would update a report row with the latest data received from new Transactions and Payouts made, where for example the Status would change from Unsettled to Setlled, the Amount/Balance would change, the Date of the Report or lastUpdated date and etc..