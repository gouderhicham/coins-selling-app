export function generateUUID() {
  const chars = "0123456789abcdef";
  const sections = [8, 4, 4, 4, 12];
  let uuid = "";
  for (let i = 0; i < sections.length; i++) {
    for (let j = 0; j < sections[i]; j++) {
      uuid += chars[Math.floor(Math.random() * chars.length)];
    }
    if (i < sections.length - 1) {
      uuid += "-";
    }
  }
  return uuid;
}