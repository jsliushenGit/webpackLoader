const makeWaterMark = (img, text="vipkid", {
  width = 250,
  height = 200,
  textAlign = 'center',
  textBaseline = 'middle',
  font = '20px 微软雅黑',
  fillStyle = 'rgba(184, 184, 184, 0.8)',
  angle = 30,
  zIndex = 11000,
} = {}) => {
  // 创建画布
  const cvs = document.createElement('canvas');
  // 画布尺寸
  cvs.width = width;
  cvs.height = height;
  // 上下文
  const ctx = cvs.getContext('2d');
  cvs.drawImage(img,0,0);
  // 文字样式
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  // 文字旋转
  ctx.rotate(angle * Math.PI / 180);
  // 绘制文字
  ctx.fillText(text, width / 2, height / 2);
  // 生成base64图片编码
  const base64Url = cvs.toDataURL();
  return base64Url
}

module.exports = function (content) {
  return makeWaterMark(content, 'vipkid');
};
