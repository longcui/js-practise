let dateNowSpy = 5;
describe.only("utilities test", () => {
  beforeAll(() => {
    // Date.now = jest.fn(() =>
    //   new Date(Date.UTC(2017, 0, 2, 3, 4, 5, 6)).valueOf()
    // );
    dateNowSpy = jest
      .spyOn(Date, "now")
      .mockImplementation(() => 1487076708000) ;
    console.log("aa Date.now" + Date.now());
  });

  it("should show hh:mm", () => {
    console.log("Date.now" + Date.now());


    // expect(display?.split(" ")[0]).toEqual("-1");
    // expect(display?.slice(-2)).toEqual("15");
  });

  afterAll(() => {
    // Unlock Time
    (dateNowSpy).mockRestore();
  });
});
