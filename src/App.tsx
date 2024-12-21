import { Input } from "./components/ui/input";
import { Sms } from "iconsax-react";

export function App() {
  return (
    <div className="min-h-screen grid items-center justify-items-center bg-background-950">
      <Input
        label="Label"
        type="text"
        iconBefore={<Sms variant="Bold" />}
        iconAfter={<Sms variant="Bold" />}
        leftText="+84"
        placeholder="Placeholder"
        required
      />
    </div>
  );
}
