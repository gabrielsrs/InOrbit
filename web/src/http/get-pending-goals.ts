type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionsCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch('http://127.0.0.1:5000/pending-goals')
  const data = await response.json()

  return data.pendingGoals
}
