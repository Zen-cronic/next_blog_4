export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })
    .format(new Date(dateString))
}