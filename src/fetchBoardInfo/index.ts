import { Credentials } from "../types/global.types";
import axios, { AxiosResponse } from "axios";
import { ActionData } from "../types/request/action.types";

const fetchBoardInfo = async (
  credentials: Credentials,
  boardId: string
): Promise<ActionData[] | null> => {
  const res: AxiosResponse<ActionData[]> = await axios.get(
    `https://api.trello.com/1/boards/${boardId}/actions?key=${credentials.key}&token=${credentials.token}`
  );
  if (res.status == 200) return res.data;
  return null;
};

export default fetchBoardInfo;
