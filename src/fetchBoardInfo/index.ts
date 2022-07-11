import { Credentials } from "../types/global.types";
import axios, { AxiosResponse } from "axios";
import { RawActionData } from "../types/request/action.types";

const fetchBoardInfo = async (
  credentials: Credentials,
  boardId: string
): Promise<RawActionData[] | null> => {
  const res: AxiosResponse<RawActionData[]> = await axios.get(
    `https://api.trello.com/1/boards/${boardId}/actions?key=${credentials.key}&token=${credentials.token}`
  );
  if (res.status == 200) return res.data;
  return null;
};

export default fetchBoardInfo;
