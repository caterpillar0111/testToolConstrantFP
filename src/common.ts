import { ToolId, ToolType, ToolIdCombination } from "./MockData";
const getStringListIntercetion = (arrayA: Array<String>) => (
  arrayB: Array<String>
) => arrayA.filter((x) => arrayB.includes(x));

// con

export const getTargetToolCombination = (
  toolIdCombinationList: Array<ToolIdCombination>
) => (toolId: ToolId) => (toolType: ToolType): Array<ToolIdCombination> => {
  return toolIdCombinationList.filter(
    (combination) =>
      combination.toolId === toolId && combination.toolType === toolType
  );
};

export const getTargetItersection = (
  toolIdCombinationList: Array<ToolIdCombination>
) =>
  toolIdCombinationList
    .map((item) => item.toolConstrant)
    .reduce((acc, cur) => getStringListIntercetion(acc)(cur));

// filter((x: number) => x > 0)([-3, 1, -2, 5]), [1, 5]
