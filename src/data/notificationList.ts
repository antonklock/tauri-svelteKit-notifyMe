import { writable } from 'svelte/store';

export const notificationList = writable([
    { id: 1, title: "Test", body: "Test body" },
    { id: 2, title: "Test 2", body: "Test body 2" },
    { id: 3, title: "Test 3", body: "Test body 3" },
]);

export const addNotification = (title: string, body: string) => {
    const newId = getNotificationListLength() + 1;

    notificationList.update(list => [...list, {id: newId, title, body }]);
}

export const getNotificationListLength = () => {
    let length = 0;
    notificationList.subscribe(list => length = list.length);
    return length;
}

export const removeNotification = (index: number) => {
    notificationList.update(list => list.filter((item, i) => i+1 !== index));
}

export const removeNotificationById = (id: number) => {
    notificationList.update(list => list.filter(item => item.id !== id));
}

export const logNotificationList = () => {
    let list;
    notificationList.subscribe(value => list = value);
    console.log(list)
}