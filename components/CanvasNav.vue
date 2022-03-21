<template>
  <div class="canvasWrapper" ref="canvasWrapper">
    <canvas id="canvas" ref="canvas" @click="handleClick"></canvas>
  </div>
</template>

<style lang="scss" scoped>
.canvasWrapper {
  width: 100%;
  border: 1px solid white;
}
</style>

<script lang="ts">
import Vue from "vue";

let ctx: CanvasRenderingContext2D;
let wrapper: HTMLElement;
let canvas: HTMLCanvasElement;
let width: number;
let height: number;
let centerX: number;
let centerY: number;
let mainNodeSize: number;

let mainNode: Path2D;

interface Coordinates {
  x: number;
  y: number;
}

interface Circle extends Coordinates {
  radius: number;
  path: Path2D;
}

interface ShapeTracker {
  [key: string]: {
    onClick: () => void;
    path: Path2D;
  };
}

const shapes: ShapeTracker = {};

export default Vue.extend({
  name: "CanvasNav",
  created() {
    if (process.client) {
      window.addEventListener("resize", this.drawNav);
    }
  },
  mounted() {
    wrapper = this.$refs.canvasWrapper as HTMLElement;
    canvas = this.$refs.canvas as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.drawNav();
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e: PointerEvent) {
      const { offsetX, offsetY } = e;

      Object.keys(shapes).forEach((key: string) => {
        const { onClick, path } = shapes[key];
        if (ctx.isPointInPath(path, offsetX, offsetY)) {
          onClick();
        }
      });
    },
    animate() {},
    drawNav() {
      // draw or redraw all parts of nav
      this.prepareCanvas();
      this.clear();
      this.drawMainNode();
    },
    clear() {
      if (!width) {
        this.prepareCanvas();
      }
      ctx.clearRect(0, 0, width, height);
    },
    prepareCanvas() {
      width = wrapper.clientWidth;
      height = wrapper.clientWidth * 0.56;
      centerX = width / 2;
      centerY = height / 2;
      mainNodeSize = centerX / 3;
      canvas.setAttribute("width", width.toString());
      canvas.setAttribute("height", height.toString());
    },
    drawMainNode() {
      //const y: number = height - mainNodeSize - 10;

      let circle: Circle = this.drawCircle(centerX, centerY, mainNodeSize);

      shapes.mainNode = {
        onClick: () => {
          console.log("mainNode clicked");
          this.clear();
          circle = this.drawCircle(centerX, circle.y - 10, mainNodeSize);

          shapes.mainNode.path = circle.path;
        },
        path: circle.path,
      };
    },
    drawCircle(x: number, y: number, radius: number): Circle {
      const path = new Path2D();
      path.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill(path);
      return {
        x,
        y,
        radius,
        path,
      };
    },
  },
});
</script>