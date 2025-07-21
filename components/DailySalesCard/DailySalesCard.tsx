import { Card } from "@/components/ui/card"

export function DailySalesCard() {
  const data = [150, 120, 430, 270, 350, 300, 260, 200, 120, 290, 300, 230];

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold">Daily Sales</h3>
      <p className="text-sm text-muted-foreground">
        <span className="text-green-600 font-semibold">(+15%)</span> <span className="dark:text-white">increase in today sales.</span>
      </p>
      <div className="h-32 w-full flex items-end gap-1 mt-4">
        {data.map((value, idx) => (
          <div key={idx} className="flex-1 bg-blue-600" style={{ height: `${value / 6}%` }}></div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-2 dark:text-white">updated 4 min ago</p>
    </Card>
  )
}