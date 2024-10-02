export async function createGoalCompletion(goalId: string) {
  await fetch('http://127.0.0.1:5000/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
