# Habits

A habit tracker for running (3x/week), reading (20 min a day), writing the book (60 min, 5x/week), and language learning (20 min a day).
One page, no build step, syncs between your laptop and iPhone automatically.

## Views
- **Today** — tap the big square to check a habit off, type an amount (miles or minutes), leave a note, and see the last 7 days.
- **Week** — a grid of the whole week. Tap any square to fill in a day you missed. Each row shows how many days you hit against your weekly target.
- **Month** — a calendar where every day shows four small colored bars, one per habit. Tap a day to edit it. Below, each habit shows days completed and how you're pacing.
- **Stats** — streaks, best streaks, 30-day consistency, and a 12-week bar chart per habit.

## Editing habits
The gear in the top right: rename, pick an emoji, change the unit and daily goal, set how many days a week you want it, pick a color, reorder, add or delete. Also export/import a backup.

## Sync
Uses the existing `tasks-oj` Firebase project (Firestore).
- `habit_config/main` — your habit definitions
- `habit_days/YYYY-MM-DD` — one document per day

Changes save instantly and appear on other devices within about a second. Offline changes queue and upload on reconnect. A copy also lives in the browser's local storage, so the app opens instantly and works with no signal.

## Install on iPhone
Open the site in Safari → Share → **Add to Home Screen**. It then runs full screen like an app and works offline.
