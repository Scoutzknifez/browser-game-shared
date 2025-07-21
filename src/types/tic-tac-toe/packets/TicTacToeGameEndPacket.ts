import { BasePacket, PacketType, TicTacToeCellData, TicTacToeGameEndReason, TicTacToeScore } from "../../..";

export interface TicTacToeGameEndPacket extends BasePacket {
    type: PacketType.TIC_TAC_TOE_GAME_END;
    score: TicTacToeScore;
    reason: TicTacToeGameEndReason;
    // Only present if reason === TicTacToeGameEndReason.WINNER
    winner?: TicTacToeCellData;
}
