import { host } from "./types";

async function allDepMembers(id: number): Promise<userData[] | userData> {
try {
const response = await fetch(`${host}get_all_department_members/${id}`);
if (!response.ok) {
throw new Error(`HTTP error ${response.status}`);
}
const responseData = await response.json();
return responseData;
} catch (error) {
throw new Error("")
}
}
export {allDepMembers}