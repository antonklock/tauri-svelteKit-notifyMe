import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
import { addNotification, notificationList } from '../data/notificationList';


// export const yes = await ask('Are you sure?', 'Tauri');

export const notify = async (title: string, body: string) => {
    console.log("Notify!");
    
    console.log(notificationList);
    addNotification("New notification", "New notification body");
    console.log(notificationList);

    let permissionGranted = await isPermissionGranted();
    if (!permissionGranted) {
        const permission = await requestPermission();
        permissionGranted = permission === 'granted';
    }
    if (permissionGranted) {
        console.log("Permission granted");
        // sendNotification('Tauri is awesome!');
        sendNotification({ title, body});
    } else {
        console.log("Permission not granted");
    }
}