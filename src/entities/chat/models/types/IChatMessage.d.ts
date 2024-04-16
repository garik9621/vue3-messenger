export interface IChatMessage {
    message: string;
    sendDate: string;
    fromUserId: string;
    toUserId?: string;
}
