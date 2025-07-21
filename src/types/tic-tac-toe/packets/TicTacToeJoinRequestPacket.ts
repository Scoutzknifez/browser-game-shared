import { PacketType } from "../../../enums/PacketType";
import { BasePacket } from "../../BasePacket";

export interface TicTacToeJoinRequestPacket extends BasePacket {
    type: PacketType.TIC_TAC_TOE_JOIN_REQUEST;
}
