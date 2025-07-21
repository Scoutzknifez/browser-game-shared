import { BasePacket, PacketType } from "../../..";

export interface TicTacToeTurnPacket extends BasePacket {
    type: PacketType.TIC_TAC_TOE_TURN;
    index: number;
}
