/**
 * Calculates the tenure/duration between two dates
 * Returns formatted string like "3 years 8 months" or "Present - 3 years 8 months"
 */
export function calculateTenure(
  startDate: string,
  endDate?: string | null
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Build the duration string
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'Year' : 'Years'}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'Month' : 'Months'}`);
  }

  // If less than a month
  if (parts.length === 0) {
    parts.push('Less than a month');
  }

  const duration = parts.join(' ');

  // Add "Present - " prefix if still ongoing
  return endDate ? duration : `Present - ${duration}`;
}
