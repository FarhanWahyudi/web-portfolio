new TypeIt("#typeit", {
    speed: 100,
    waitUntilVisible: true,
  })
  .type("Fllstack")
  .move(-7)
  .type("u")
  .move(null, {to: "END "})
  .pause(1000)
  .type(" devel")
  .pause(300)
  .move(-4)
  .delete(1)
  .type("D")
  .move(null, {to: "END"})
  .pause(500)
  .type("oper")
  .go();