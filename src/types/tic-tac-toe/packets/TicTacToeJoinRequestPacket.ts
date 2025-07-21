import { BasePacket, PacketType } from "../../..";

export interface TicTacToeJoinRequestPacket extends BasePacket {
    type: PacketType.TIC_TAC_TOE_JOIN_REQUEST;
}
