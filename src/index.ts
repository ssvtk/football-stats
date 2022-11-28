import fs from "fs"
import { CsvFileReader } from "./CsvFileReader"
const csvReader = new CsvFileReader("football.csv")

enum matchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0
csvReader.read()
csvReader.data.forEach((el) => {
  if (el[1] === "Man United" && el[5] === matchResult.HomeWin) {
    manUnitedWins += 1
  } else if (el[2] === "Man United" && el[5] === matchResult.AwayWin) {
    manUnitedWins += 1
  }
})

console.log(manUnitedWins)
