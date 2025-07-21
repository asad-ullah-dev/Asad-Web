// components/WebsiteViewsCard.tsx
import { Card, CardContent } from "@/components/ui/card"

export function WebsiteViewsCard() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold">Website Views</h3>
      <p className="text-sm text-muted-foreground dark:text-white">Last Campaign Performance</p>
      <div className="h-32 w-full flex items-end gap-2 mt-4">
        {[50, 45, 30, 25, 60, 70, 80].map((height, idx) => (
          <div key={idx} className="flex-1 bg-green-600" style={{ height: `${height}%` }}></div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-2 dark:text-white">campaign sent 2 days ago</p>
    </Card>
  )
}