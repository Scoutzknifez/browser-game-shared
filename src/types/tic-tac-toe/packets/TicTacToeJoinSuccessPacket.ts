import { PacketType } from "../../../enums/PacketType";
import { TicTacToeCellData } from "../../../enums/tic-tac-toe/TicTacToeCellData";
import { BasePacket } from "../../BasePacket";

export interface TicTacToeJoinSuccessPacket extends BasePacket {
    type: PacketType.TIC_TAC_TOE_JOIN_SUCCESS;
    board: TicTacToeCellData[];
    // The symbol whose turn it is
    turn: TicTacToeCellData;
    // The player's symbol
    symbol: TicTacToeCellData;
}
