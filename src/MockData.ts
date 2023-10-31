export type ToolConstrant = String;
export type ToolId = String;
export type ToolType = String;
export type ToolIdCombination = {
  toolType: ToolType;
  toolId: ToolId;
  toolConstrant: Array<ToolConstrant>;
};

export const testCombinationList: Array<ToolIdCombination> = [
  { toolType: "MachineA", toolId: "Tool1", toolConstrant: ["A", "B", "C"] },
  { toolType: "MachineA", toolId: "Tool1", toolConstrant: ["A", "B"] },
  {
    toolType: "MachineA",
    toolId: "Tool1",
    toolConstrant: ["A", "B", "C", "D"]
  },
  { toolType: "MachineB", toolId: "Tool1", toolConstrant: ["A", "B", "C"] }
];
