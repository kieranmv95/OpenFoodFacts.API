import { nova } from "../../../src/helpers/calculations";

describe("Hello World", () => {
  it("runs a ts function without dying", () => {
    expect(nova(1)).toEqual({
      description: "Unprocessed or minimally processed foods",
      rating: 1,
    });
  });
});
