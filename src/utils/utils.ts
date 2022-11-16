export const parseDate = (s) => {
  var b = s[0].split(/\D/);
  var dt = new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
  return dt;
}
