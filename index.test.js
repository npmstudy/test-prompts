import { expect, test } from "vitest";
import prompt from "prompts";

test("should work as expected", async () => {
  let injected = [1, 2];
  prompt.inject(injected);

  // first round
  const foo = await prompt({ type: "text", name: "a", message: "a message" });
  expect(foo.a).toBe(1);

  // second round
  const bar = await prompt({ type: "text", name: "b", message: "a message" });
  expect(bar.b).toBe(2);
});
