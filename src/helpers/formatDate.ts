export function formatDate(dateString: string): string {
    // Parse the date string
    const date = new Date(dateString)
  
    // Extract the year, month, and day
    const year = date.getFullYear()
    const month = date.getMonth() + 1 // Months are zero-indexed
    const day = date.getDate()
  
    // Format the date as "dd/mm/yy"
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
  }