import spawn from "cross-spawn"

spawn("react-scripts", ["start"], {
  stdio: "inherit",
})

spawn("react-scripts", ["test"], {
  stdio: "inherit",
})
