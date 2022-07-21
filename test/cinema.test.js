const Cinema = artifacts.require("Cinema");
let cinema;

contract("Texting Cinema Contract", (accounts) => {
  beforeEach(async () => {
    cinema = await Cinema.deployed();
  });

  it("Should return an owner ", async () => {
    let owner = await cinema.owner();
    assert.equal(accounts[0], owner);
  });

  it("Should book a ticket", async () => {
    try {
      await cinema.bookTicket(1, 12, 1, "Veronica", {
        from: accounts[2],
        value: 280,
      });
      await cinema.bookTicket(1, 16, 1, "Singham", {
        from: accounts[2],
        value: 280,
      });

      await cinema.bookTicket(1, 17, 2, "Singham 2", {
        from: accounts[3],
        value: 180,
      });
      let ids = await cinema.returnAllBooksIds(1);
      console.log(ids);
    } catch (error) {
      console.log("NO book a ticket");
    }
  });
});
