import multiplicar from "./multiplicador.js";

describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});
