import { BasePacket, PacketType } from "../../..";

export interface TicTacToeJoinRejectedPacket extends BasePacket {
    type: PacketType.TIC_TAC_TOE_JOIN_REJECTED;
    reason: string;
}
