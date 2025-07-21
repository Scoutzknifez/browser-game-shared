import { PacketType } from "../../../enums/PacketType";
import { BasePacket } from "../../BasePacket";

export interface TicTacToeTurnPacket extends BasePacket {
    type: PacketType.TIC_TAC_TOE_TURN;
    index: number;
}
