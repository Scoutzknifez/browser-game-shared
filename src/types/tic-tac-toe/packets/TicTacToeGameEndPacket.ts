import { PacketType } from "../../../enums/PacketType";
import { TicTacToeCellData } from "../../../enums/tic-tac-toe/TicTacToeCellData";
import { TicTacToeGameEndReason } from "../../../enums/tic-tac-toe/TicTacToeGameEndReason";
import { BasePacket } from "../../BasePacket";

export interface TicTacToeWinPacket extends BasePacket {
    type: PacketType.TIC_TAC_TOE_WIN;
    reason: TicTacToeGameEndReason;
    // Only present if reason === TicTacToeGameEndReason.WINNER
    winner?: TicTacToeCellData;
}
