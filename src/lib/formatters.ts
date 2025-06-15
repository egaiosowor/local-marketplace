import { formatDistanceToNow } from "date-fns";

export function getTimeAgo(date: string) {
  const postedDate = new Date(date);
  const timeAgo = formatDistanceToNow(postedDate, { addSuffix: true });

  return timeAgo;
}
