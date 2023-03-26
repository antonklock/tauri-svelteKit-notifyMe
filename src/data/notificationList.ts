import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';


export const notificationList = writable([
    { id: uuidv4(), title: "Test", body: "Test body", intervalInSeconds: 3 },
    { id: uuidv4(), title: "Test 2", body: "Test body 2", intervalInSeconds: 35 },
    { id: uuidv4(), title: "Test 3", body: "Test body 3", intervalInSeconds: 60 },
]);

export const addNotification = (title: string, body: string, intervalInSeconds: number) => {
    const newId = uuidv4();

    notificationList.update(list => [...list, {id: newId, title, body, intervalInSeconds }]);
}

export const getNotificationListLength = () => {
    let length = 0;
    notificationList.subscribe(list => length = list.length);
    return length;
}

export const removeNotification = (index: number) => {
    notificationList.update(list => list.filter((item, i) => i+1 !== index));
}

export const removeNotificationById = (id: string) => {
    notificationList.update(list => list.filter(item => item.id !== id));
}

export const logNotificationList = () => {
    let list;
    notificationList.subscribe(value => list = value);
    console.log(list)
}