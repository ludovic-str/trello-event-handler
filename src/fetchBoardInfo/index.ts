import axios, { AxiosResponse } from "axios";
import { Credentials } from "../types/global.types";
import { BoardInfo } from "../types/request/boardInfo.types";

const fetchBoardInfos = async (
  credentials: Credentials,
  boardId: string
): Promise<BoardInfo | null> => {
  const res: AxiosResponse<BoardInfo> = await axios.get(
    `https://api.trello.com/1/boards/${boardId}?key=${credentials.key}&token=${credentials.token}`
  );
  if (res.status == 200) return res.data;
  return null;
};

export default fetchBoardInfos;
