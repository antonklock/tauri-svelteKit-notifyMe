export const notificationList = [
    {title: "Test", body: "Test body"},
    {title: "Test 2", body: "Test body 2"},
    {title: "Test 3", body: "Test body 3"},
]

export const addNotification = (title: string, body: string) => {
    notificationList.push({ title, body });
}