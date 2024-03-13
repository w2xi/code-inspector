import { TLifeCycle, ELifeCycle, CodeOptions } from './type'

class LifeCycle {
  lifeCycle: TLifeCycle | undefined;

  loopLifeCycle() {};

  init(options: CodeOptions) {
    if (options.lifeCycle) {
      this.lifeCycle = options.lifeCycle;
    }
  }

  getLiftCycle(lifeCycleName: `${ELifeCycle}` ) {
    if (this.lifeCycle?.[lifeCycleName]) {
      return this.lifeCycle[lifeCycleName]
    }
    return this.loopLifeCycle
  }


  runLifeCycle(lifeCycleName: `${ELifeCycle}`) {
    this.getLiftCycle(lifeCycleName)?.();
  }
}

export default new LifeCycle();