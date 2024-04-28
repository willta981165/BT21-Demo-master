export default function (time) {
  const date = new Date(parseInt((time * 1000), 10));
  return date.toLocaleDateString();
}
