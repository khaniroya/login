import { ActionType } from "@/Types/type";
import { notification } from "antd";

export const openNotification = (title: string, description: string, type: ActionType) => {
    switch (type) {
        case ActionType.Success: {
            notification.success({
                message: title,
                description: description,
                style: {
                    backgroundColor: '#52c41a',
                    color: 'white',
                },
                placement: 'bottomLeft',
            });
        }
        case ActionType.Error: {
            notification.error({
                message: title,
                description: description,
                style: {
                    backgroundColor: '#f5222d',
                    color: 'white',
                },
                placement: 'bottomLeft',
            });
        }
        default: {
            throw new Error('Something went wrong!');
        }
    }

};