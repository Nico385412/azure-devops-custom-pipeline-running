import tl from "azure-pipelines-task-lib/task";

async function run() {
  try {
    const inputString = tl.getInput("samplestring", true);
    if (inputString == "bad") {
      tl.setResult(tl.TaskResult.Failed, "Bad input was given");
      return;
    }
    console.log("Hello", inputString);
  } catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();
