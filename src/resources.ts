import { RESOURCE_TYPE } from '@eva/eva.js';
export default [
  { //篮球
    name: 'basketball',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: './statics/TB1WF1R0Ez1gK0jSZLeXXb9kVXa-99-99.png',
      },
    },
    preload: true,
  },
  { // 篮板
    name: 'backboard',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          './statics/TB1a11YoRFR4u4jSZFPXXanzFXa-109-263.png',
      },
    },
    preload: true,
  },
  { // 背景
    name: 'bg',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      },
    },
    preload: true,
  },
  { // 篮网上半部分
    name: 'basketBack',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          './statics/TB1Xerd0AY2gK0jSZFgXXc5OFXa-184-175.png',
      },
    },
    preload: true,
  },
  { // 篮网正常动画
    name: 'boardIdle',
    type: RESOURCE_TYPE.SPRITE_ANIMATION,
    src: {
      image: {
        type: 'png',
        url:
          './statics/TB1LYwonSR26e4jSZFEXXbwuXXa-920-875.png',
      },
      json: {
        type: 'json',
        url:
          './statics/3246284841596d87b60749e88e0e26cd.json',
      },
    },
    preload: true,
  },
  { // 进球动画
    name: 'boardGoal',
    type: RESOURCE_TYPE.SPRITE_ANIMATION,
    src: {
      image: {
        type: 'png',
        url:
          './statics/TB1ob_c0EY1gK0jSZFCXXcwqXXa-552-525.png',
      },
      json: {
        type: 'json',
        url:
          './statics/dfefdd86474cded44bdc226549ae6d81.json',
      },
    },
    preload: true,
  },
];
