import { expect, test } from "vitest";

import prompt from "prompts";

const { prompts } = prompt;

test("should work as expected", () => {
  let injected = [1, 2];
  prompt.inject(injected);

  prompt({ type: "text", name: "a", message: "a message" }).then((foo) => {
    expect(foo.a).toBe(1);

    prompt({ type: "text", name: "b", message: "a message" }).then((bar) => {
      expect(bar.b).toBe(2);
    });
  });
});
