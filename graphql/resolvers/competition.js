const idToString = (o) => {
  o._id = o._id.toString();
  return o;
}