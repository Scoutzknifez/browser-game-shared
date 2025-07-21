import { BasePacket, PacketType, TicTacToeCellData, TicTacToeScore } from "../../..";

export interface TicTacToeUpdatePacket extends BasePacket {
    type: PacketType.TIC_TAC_TOE_UPDATE;
    score: TicTacToeScore;
    board: TicTacToeCellData[];
    turn: TicTacToeCellData;
}
