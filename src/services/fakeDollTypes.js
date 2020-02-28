export const dollTypes = [
  { _id: "b01", name: "Teddy" },
  { _id: "b02", name: "Brooch" },
  { _id: "b03", name: "Bunny" },
  { _id: "b04", name: "Fairy" },
  { _id: "b05", name: "Scary" },
  { _id: "b06", name: "Tilda" },
  { _id: "b07", name: "Zoo" },
  { _id: "b08", name: "Collection" }
];

export function getDollTypes() {
  return dollTypes.filter(g => g);
}
