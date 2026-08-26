$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 720, 200, 290, "white");
createPlatform(400, 600, 100, 10, "white");
createPlatform(400, 480, 100, 10, "white")
createPlatform(1200, 380, 100, 10, "white")
createPlatform(400, 360, 100, 10, "white")
createPlatform(500, 360, 10, 250, "white")
createPlatform(500, 360, 100, 10, "white")
createPlatform(1000, 600, 50, 10, "white")
createPlatform(1200, 500, 100, 10, "white")
createPlatform(900, 605, 100, 10, "white")
createPlatform(1050, 605, 150, 10, "white")
createPlatform(825, 600, 1, 1, "white")
createPlatform(1350, 600, 1, 1, "white")
createPlatform(1100, 260, 200, 10, "white")
createPlatform(800, 210, 100, 10, "white")
createPlatform(500, 210, 100, 10, "white")
createPlatform(200, 210, 100, 10, "white")
createPlatform(0, 100, 100, 10, "white")
createBadPlatform(900, 600, 100, 10)
createBadPlatform(1050, 600, 150, 10)
createBadPlatform(0, 735, 1400, 20)
createBadPlatform(90, 110, 10, 100)
createBadPlatform(100, 210, 100, 10)
createBadPlatform(300, 210, 200, 10)
    // TODO 3 - Create Collectables
createCollectable("database", 730, 430)
createCollectable("database", 1330, 560)
createCollectable("database", 30, 60)

    
    // TODO 4 - Create Cannons
createCannon("top", 760, 1000)
createCannon("top", 460, 1400)
createCannon("top", 1400, 1400)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
