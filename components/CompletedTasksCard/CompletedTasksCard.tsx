// components/CompletedTasksCard.tsx
import { Card } from "@/components/ui/card"

export function CompletedTasksCard() {
  const data = [10, 20, 300, 250, 550, 300, 450, 250, 400, 260, 500];

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold">Completed Tasks</h3>
      <p className="text-sm text-muted-foreground dark:text-white">Last Campaign Performance</p>
      <div className="h-32 w-full flex items-end gap-1 mt-4">
        {data.map((value, idx) => (
          <div key={idx} className="flex-1 bg-red-600" style={{ height: `${value / 6}%` }}></div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-2 dark:text-white">just updated</p>
    </Card>
  )
}