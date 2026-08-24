# Habits

A habit tracker for running (3x/week), reading (20 min a day), writing the book (60 min, 5x/week, starting 1 September 2026), language learning (20 min a day), and drinking water (80 oz every day).

There is nothing to measure — you check the task off and that's it. The daily targets are printed on the cards as reminders only.
One page, no build step, syncs between your laptop and iPhone automatically.

## Views
- **Today** — tap the square to check a habit off, leave a note with the pencil, and see the last 7 days. There is nothing to log but the task itself.
- **Week** — a grid of the whole week. Tap any square to fill in a day you missed. Each row shows how many days you hit against your weekly target.
- **Month** — a calendar where every day shows a small colored bar per habit. Tap a day to edit it. Below, each habit shows days completed and how you're pacing.
- **Stats** — streaks, best streaks, 30-day consistency, days this month and all time, and a 12-week bar chart per habit.

## Water tracking
Drink Water is a special habit. Tap its cup (or **+ Add**) to open a glass that fills as you log drinks — pick a type (water, coffee, tea, sparkling, juice, milk, smoothie, other), tap an amount (+8 / +12 / +16 / +24 oz, or type your own), and the glass animates up to the 80 oz goal. The day's log lists every drink with its time and can be undone one entry at a time; the habit checks itself off the moment you reach the goal.

Any habit can become a water tracker by setting `kind: 'water'` on it, with `goal` and `unit` as the daily target.

## Editing habits
The gear in the top right: rename, pick an emoji, set how many days a week you want it, pick a color, set a start date, reorder, add or delete. The daily target ("20 min") is only a reminder printed on the card — nothing is measured. Also export/import a backup.

## Sync
Uses the existing `tasks-oj` Firebase project (Firestore).
- `habit_config/main` — your habit definitions
- `habit_days/YYYY-MM-DD` — one document per day

Changes save instantly and appear on other devices within about a second. Offline changes queue and upload on reconnect. A copy also lives in the browser's local storage, so the app opens instantly and works with no signal.

## Install on iPhone
Open the site in Safari → Share → **Add to Home Screen**. It then runs full screen like an app and works offline.
