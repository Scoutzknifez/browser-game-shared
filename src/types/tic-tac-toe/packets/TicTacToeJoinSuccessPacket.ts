import { BasePacket, PacketType, TicTacToeCellData, TicTacToeScore } from "../../..";

export interface TicTacToeJoinSuccessPacket extends BasePacket {
    type: PacketType.TIC_TAC_TOE_JOIN_SUCCESS;
    score: TicTacToeScore;
    board: TicTacToeCellData[];
    // The symbol whose turn it is
    turn: TicTacToeCellData;
    // The player's symbol
    symbol: TicTacToeCellData;
}
