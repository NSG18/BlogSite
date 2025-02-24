import { formatDistanceToNow } from "date-fns";

export default function TimeAgo({ date }: { date: Date }) {
    return <span>{formatDistanceToNow(date, { addSuffix: true })}</span>;
}
