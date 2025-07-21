import { PacketType } from "../../../enums/PacketType";
import { TicTacToeCellData } from "../../../enums/tic-tac-toe/TicTacToeCellData";
import { BasePacket } from "../../BasePacket";

export interface TicTacToeUpdatePacket extends BasePacket {
    type: PacketType.TIC_TAC_TOE_UPDATE;
    board: TicTacToeCellData[];
    turn: TicTacToeCellData;
}
