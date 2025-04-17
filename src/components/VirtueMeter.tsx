
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Virtue {
  name: string;
  value: number;
  color: string;
}

interface VirtueMeterProps {
  className?: string;
  virtues?: Virtue[];
}

const defaultVirtues: Virtue[] = [
  { name: "Compassion", value: 65, color: "bg-blue-400" },
  { name: "Wisdom", value: 42, color: "bg-amber-400" },
  { name: "Courage", value: 78, color: "bg-red-400" },
  { name: "Humility", value: 53, color: "bg-green-400" },
  { name: "Patience", value: 30, color: "bg-purple-400" },
];

const VirtueMeter = ({ className, virtues = defaultVirtues }: VirtueMeterProps) => {
  return (
    <div className={cn("p-6 glass-card rounded-lg", className)}>
      <h3 className="text-xl font-playfair mb-4 text-center">Virtue Meter</h3>
      <div className="space-y-4">
        {virtues.map((virtue) => (
          <div key={virtue.name} className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{virtue.name}</span>
              <span className="text-sm text-muted-foreground">{virtue.value}%</span>
            </div>
            <Progress
              value={virtue.value}
              className={cn("h-2", virtue.color)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtueMeter;
