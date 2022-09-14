export {};

declare global {
  interface BallInterface {
    name: string|null,
    hp: number|null,
    current_hp: number|null,
    player?: PlayerInterface
  }

  interface StoryInterface {
    [index:string]: {
      title: string,
      content: string
    }
  }

  interface PlayerInterface {
    ball?: string|null,
    ctrl: {
      up: string,
      left: string,
      right: string,
      [key:string]: string,
    },
    x: number,
    y: number,
    scale: {
      x: number,
      y:number
    },
    move_ctrl: string|null
  }

  interface GameInterface {
    point: number
  }
}
