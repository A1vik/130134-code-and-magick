'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = -150;

var randomColorBlue = function () {
  return 'rgba(0, 0, ' + Math.floor(Math.random() * 256) + ', 1';
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 110, 30);
  ctx.fillText('Список результатов:', 110, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    // ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - GAP * 2, BAR_WIDTH, -150);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - GAP);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - GAP * 2, BAR_WIDTH, barHeight * times[i] / maxTime);
    } else {
      ctx.fillStyle = randomColorBlue();
      ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - GAP * 2, BAR_WIDTH, barHeight * times[i] / maxTime);
    }
  }
};
