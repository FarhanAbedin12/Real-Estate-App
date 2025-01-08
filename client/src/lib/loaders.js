import apiRequest from "./apiRequest.js";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/prop/" + params.id);
  return res.data;
};