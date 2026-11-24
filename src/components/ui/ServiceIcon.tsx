import type { ServiceIconName } from "@/data/services";
import { AirVent, ArrowLeftRight, Brush, Fan, Shirt, Wind } from "./icons";

const map = {
  airVent: AirVent,
  wind: Wind,
  arrowLeftRight: ArrowLeftRight,
  brush: Brush,
  shirt: Shirt,
  fan: Fan,
} satisfies Record<ServiceIconName, unknown>;

export function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden="true" strokeWidth={1.75} />;
}
