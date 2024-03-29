# timecapsule
A for-fun digital time capsule that does not need a cloud service and can run everywhere.

## What is this
Let's say you want to write a message to your future self, or you want to leave a funny riddle to your descendants.
Let's say you don't trust anybody other than yourself.
You can use timecapsule to achieve this!

Basically, you can encrypt a message with a password and specify an "opening date".
As the date is hashed with your password and used to encrypt the message, that message can be opened only on that precise date (and with that specific password).

## Disclaimer
This is a for-fun project and has no claims regarding security whatsoever. It is very simple to circumvent the mechanism by, for example, spoofing the "right date". Technically, though, if the receiver does not know the date, it should be hard to spoof it. It would make the time capsule not very useful too, though.

See it as a funny riddle or funny game.

## Usage

See index.ts, the working code is there.

## Installation

To install dependencies:

```bash
yarn install
```

## Run

To run:

```bash
tsx index.ts
```
