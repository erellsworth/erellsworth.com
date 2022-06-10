import axios from 'axios';
import { MastadonStatus } from '~/interfaces/mastadon';

export const getMastadonFeed = async (): Promise<MastadonStatus[]> => {
    const url = `${process.env.MASTADON_API_URI}accounts/${process.env.MASTADON_ID}/statuses`;
    const feed = await axios.get<MastadonStatus[]>(url);

    return feed.data.filter((item: MastadonStatus) => {
        return !item.reblog && !item.in_reply_to_id && !item.in_reply_to_account_id;
    }).slice(0, 5);
}