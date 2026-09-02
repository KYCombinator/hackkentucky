// Single source of truth for the run of show. The homepage renders a compact
// version (time + title); /schedule renders the full version with notes.

export type ScheduleRow = { time: string; title: string; note?: string }

export const FRIDAY_LABEL = "FRIDAY · 09.11"
export const SATURDAY_LABEL = "SATURDAY · 09.12"

export const FRIDAY: ScheduleRow[] = [
  { time: "16:00", title: "Doors open", note: "Check-in & team formation" },
  { time: "17:00", title: "Learn-a-thon", note: "Five optional tracks in five rooms · 35-min sessions" },
  { time: "19:00", title: "Dinner", note: "Papa Johns" },
  { time: "23:00", title: "Doors close", note: "The venue closes overnight — back at 8AM" },
]

export const SATURDAY: ScheduleRow[] = [
  { time: "08:00", title: "Doors open", note: "Grazing breakfast · hacking begins" },
  { time: "10:00", title: "Guest speakers", note: "Career & startup tracks in parallel, until 15:00" },
  { time: "12:00", title: "Lunch", note: "Lunch voucher for every attendee" },
  { time: "17:00", title: "Judging starts" },
  { time: "18:00", title: "Dinner", note: "Dinner voucher for every attendee" },
  { time: "19:00", title: "Final judging" },
  { time: "21:00", title: "Awards & close" },
  { time: "22:00", title: "Doors close", note: "Building empty" },
]
