import { mapModuleNameToModule } from "../src/edgeCases"

describe(mapModuleNameToModule, () => {
  it("gives node for known identifiers", () => {
    expect(mapModuleNameToModule("fs")).toEqual("node")
  })

  it("handles the weird node: prefix", () => {
    expect(mapModuleNameToModule("node:fs")).toEqual("node")
  })

  it("strips module filepaths", () => {
    expect(mapModuleNameToModule("lodash/identity")).toEqual("lodash")
    expect(mapModuleNameToModule("@org/lodash/identity")).toEqual("@org/lodash")
  })
})
